// Rishi Coffee — cart drawer, mobile menu and drop sign-up.
// The cart lives in the visitor's browser for now. When Shopify is set up,
// point CHECKOUT_URL (or the checkout() function) at Shopify checkout.

const CHECKOUT_URL = null; // e.g. Shopify cart permalink, once the store exists

// Google Apps Script web app that writes sign-ups to the
// "Rishi Coffee – Drop Sign-ups" sheet (see google-apps-script/Code.gs).
const SIGNUP_URL = 'https://script.google.com/macros/s/AKfycbzW2Y0y3wpHnEG7p_Z0_nDxH4QcHZlS59db6QnqE6jSmDC6O7oTC82W0mw6PDbSW_rAdg/exec';

const PRODUCTS = {
  single: { name: 'The Single', detail: '1 × 12 oz vanilla latte', price: 6, img: 'images/spill.jpg' },
  fourpack: { name: 'The 4-Pack', detail: '4 × 12 oz vanilla latte', price: 20, img: 'images/four-pack.jpg' },
};

const STORAGE_KEY = 'rishi-cart-v1';

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return saved && typeof saved === 'object' ? saved : {};
  } catch (e) {
    return {};
  }
}

function saveCart() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch (e) { /* storage unavailable */ }
}

let cart = loadCart();

const $ = (sel, root = document) => root.querySelector(sel);
const money = (n) => '$' + n.toFixed(n % 1 ? 2 : 0);

function itemCount() {
  return Object.values(cart).reduce((sum, q) => sum + q, 0);
}

function subtotal() {
  return Object.entries(cart).reduce((sum, [id, q]) => sum + (PRODUCTS[id] ? PRODUCTS[id].price * q : 0), 0);
}

function buildDrawer() {
  const html = `
    <div class="overlay" data-close-cart></div>
    <aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title" aria-hidden="true">
      <div class="drawer-head">
        <h2 id="cart-title">your cart</h2>
        <button class="icon-btn" type="button" data-close-cart aria-label="Close cart">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <div class="drawer-body" id="cart-lines"></div>
      <div class="drawer-foot" id="cart-foot">
        <div class="subtotal"><span>Subtotal</span><span id="cart-subtotal">$0</span></div>
        <p class="note">Pickup in Streeterville or Lakeview. Keep refrigerated, shake well.</p>
        <button class="btn btn-dark btn-lg" type="button" id="checkout-btn">Checkout</button>
      </div>
    </aside>
    <div class="toast" role="status" aria-live="polite" id="toast"></div>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

function renderCart() {
  const lines = $('#cart-lines');
  const foot = $('#cart-foot');
  const ids = Object.keys(cart).filter((id) => PRODUCTS[id] && cart[id] > 0);

  if (!ids.length) {
    lines.innerHTML = `<div class="cart-empty"><p>Your cart is empty. Your fridge is probably empty too.</p><a class="btn btn-dark" href="index.html#shop" data-close-cart>Shop the latte</a></div>`;
    foot.hidden = true;
  } else {
    lines.innerHTML = ids.map((id) => {
      const p = PRODUCTS[id];
      const q = cart[id];
      return `
        <div class="line">
          <img src="${p.img}" alt="">
          <div>
            <h3>${p.name}</h3>
            <p class="unit">${p.detail} · ${money(p.price)}</p>
            <div class="qty">
              <button type="button" data-dec="${id}" aria-label="Remove one ${p.name}">−</button>
              <span aria-live="polite">${q}</span>
              <button type="button" data-inc="${id}" aria-label="Add one ${p.name}">+</button>
            </div>
          </div>
          <div class="total">${money(p.price * q)}<button class="remove" type="button" data-remove="${id}">Remove</button></div>
        </div>`;
    }).join('');
    foot.hidden = false;
    $('#cart-subtotal').textContent = money(subtotal());
  }

  document.querySelectorAll('[data-cart-count]').forEach((el) => { el.textContent = itemCount(); });
}

let lastFocus = null;

function openCart() {
  lastFocus = document.activeElement;
  $('.overlay').classList.add('open');
  const drawer = $('.drawer');
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  $('.drawer [data-close-cart]').focus();
}

function closeCart() {
  $('.overlay').classList.remove('open');
  const drawer = $('.drawer');
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}

let toastTimer;
function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
  openCart();
}

function checkout() {
  if (CHECKOUT_URL) {
    window.location.href = CHECKOUT_URL;
  } else {
    toast('Online checkout opens soon. DM @rishi.coffee to order!');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  buildDrawer();
  renderCart();

  document.addEventListener('click', (e) => {
    const t = e.target.closest('button, a, .overlay');
    if (!t) return;
    if (t.dataset.add) addToCart(t.dataset.add);
    else if (t.hasAttribute('data-open-cart')) openCart();
    else if (t.hasAttribute('data-close-cart')) closeCart();
    else if (t.dataset.inc) { cart[t.dataset.inc]++; saveCart(); renderCart(); }
    else if (t.dataset.dec) { cart[t.dataset.dec] = Math.max(0, cart[t.dataset.dec] - 1); if (!cart[t.dataset.dec]) delete cart[t.dataset.dec]; saveCart(); renderCart(); }
    else if (t.dataset.remove) { delete cart[t.dataset.remove]; saveCart(); renderCart(); }
    else if (t.id === 'checkout-btn') checkout();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $('.drawer').classList.contains('open')) closeCart();
  });

  // Mobile menu
  const menuBtn = $('.menu-btn');
  const nav = $('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', (e) => {
      if (e.target.closest('a')) { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Header border once scrolled
  const header = $('.header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Drop sign-up (not connected to a list yet)
  const form = $('#drop-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const status = $('#form-status');
      const button = form.querySelector('button[type="submit"]');
      if (!email && !phone) {
        status.textContent = 'Add a phone number or email so we can reach you.';
        return;
      }
      if (phone && !form.texts.checked) {
        status.textContent = 'Tick the box so we can text you (or just leave your email).';
        return;
      }
      const first = form.name.value.trim().split(' ')[0];
      const body = new URLSearchParams({
        name: form.name.value.trim(),
        phone,
        email,
        texts: form.texts.checked ? 'yes' : 'no',
        website: form.website.value,
        page: location.href,
      });
      button.disabled = true;
      status.textContent = 'Saving…';
      try {
        if (SIGNUP_URL) {
          // no-cors: Apps Script doesn't send CORS headers; the row is still written.
          await fetch(SIGNUP_URL, { method: 'POST', mode: 'no-cors', body });
        }
        status.textContent = `You're on the list${first ? ', ' + first : ''}! See you Sunday night.`;
        form.reset();
      } catch (err) {
        status.textContent = "Hmm, that didn't go through. Try again, or DM @rishi.coffee.";
      } finally {
        button.disabled = false;
      }
    });
  }

  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
});
