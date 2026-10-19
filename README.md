# Rishi Coffee

Website for Rishi Coffee, small batch vanilla lattes bottled in Chicago.

Plain HTML, CSS and JavaScript. No build step.

## Files

- `index.html` — homepage
- `story.html` — Our Story page
- `styles.css` — all styles (brand colors are at the top)
- `cart.js` — cart drawer, mobile menu and drop sign-up
- `images/` — product and lifestyle photos

## Preview locally

```
npx serve .
```

Then open the address it prints.

## Deploy

Import this repo in Vercel. Framework preset: **Other**. No build command, output directory is the repo root.
Every push to `main` deploys; every pull request gets its own preview link.

## Still to connect

- **Checkout:** set `CHECKOUT_URL` in `cart.js` (or swap in Shopify's Buy Button) once the Shopify store exists. Until then, Checkout shows a "DM us to order" message.
- **Drop sign-up:** the form shows a thank-you message but does not save anyone yet. Connect it to Shopify customers, Klaviyo or a form service (see the `TODO` in `cart.js`).
- **Next drop date:** update in the Quarterly Drop card in `index.html`.
