# Notes for Claude

Rishi Coffee's website (coffeewithrishi.com). Plain HTML/CSS/JS, no build step.

## How updates work

1. Edit the files here.
2. Commit and push to `main` on GitHub (heroconciergeclinic/rishi-coffee).
3. Vercel (project `rishi-coffee`, "hero" team) deploys automatically on every push.
   Live at https://rishi-coffee.vercel.app until the custom domain is connected.

## Brand

- Colors: paper #FAF8F3, ink #141414, accent forest green #1E4A34, matcha #2F6B3F, latte #EFE7DA (tokens at the top of `styles.css`).
- Type: Fraunces (headlines, lowercase and playful), Outfit (body).
- Voice: fun, warm, small batch. "Happiness, one sip at a time."
- Instagram: @rishi.coffee

## Products and prices

- The Single: $6 (`data-add="single"`)
- The 4-Pack: $20 (`data-add="fourpack"`)
- Prices live in `PRODUCTS` in `cart.js` and on the cards in `index.html`; change both.

## Not connected yet

- Checkout: `CHECKOUT_URL` in `cart.js` (Shopify later).
- Drop sign-up form: shows a thank-you only; nothing is saved.
