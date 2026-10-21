# Notes for Claude

Rishi Coffee's website (coffeebyrishi.com, served at www.coffeebyrishi.com; DNS at Porkbun). Plain HTML/CSS/JS, no build step.

## How updates work

1. Edit the files here.
2. Commit and push to `main` on GitHub (heroconciergeclinic/rishi-coffee).
3. Vercel (project `rishi-coffee`, "hero" team) deploys automatically on every push.
   Live at https://www.coffeebyrishi.com (also https://rishi-coffee.vercel.app).

## Brand

- Colors: paper #FAF8F3, ink #141414, accent forest green #1E4A34, matcha #2F6B3F, latte #EFE7DA (tokens at the top of `styles.css`).
- Type: Fraunces (headlines, lowercase and playful), Outfit (body).
- Voice: fun, warm, small batch. "Happiness, one sip at a time."
- Instagram: @rishi.coffee

## Products and prices

- The Single: $6 (`data-add="single"`)
- The 4-Pack: $20 (`data-add="fourpack"`)
- Prices live in `PRODUCTS` in `cart.js` and on the cards in `index.html`; change both.
- Sold out (Oct 21, 2026): Single and 4-Pack. To restock, remove the id from `SOLD_OUT` in `cart.js` and in `index.html` remove `sold-out` from the card class, the `sold-badge` span and the `restock` link, and restore `<button class="btn btn-dark" type="button" data-add="single|fourpack">Add to cart</button>`.

## Sign-ups

- The drop form posts to a Google Apps Script web app (`SIGNUP_URL` in `cart.js`), which appends rows to the "Rishi Coffee – Drop Sign-ups" Google Sheet. Script source: `google-apps-script/Code.gs`.
- Phone sign-ups require the texting consent checkbox. Texting service (Klaviyo) not connected yet.

## Not connected yet

- Checkout: `CHECKOUT_URL` in `cart.js` (Shopify later).

## Legal pages

- `privacy.html` and `terms.html` (includes SMS terms at `terms.html#sms`), linked from every footer and the sign-up form. Contact is Instagram DM only; don't add a personal email.

## Commits

- Commit as "Rishi Coffee" <310411761+heroconciergeclinic@users.noreply.github.com> (GitHub private address). Never use a personal email.

## Saved versions

- `v1.0-launch` branch: the launch version (Oct 19, 2026).
- `v1.1-saved` branch: adds sign-ups to Google Sheets and privacy/terms pages, before sold out (Oct 21, 2026).
- To restore a saved version: reset `main` to that branch and push, or use Instant Rollback on that deployment in Vercel.
