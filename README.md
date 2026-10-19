# Rishi Coffee

A one-page website for Rishi Coffee. It shows the vanilla latte, says drops are coming soon, and links to [Instagram](https://instagram.com/rishicoffee). There is no shop, no email signup, and no tracking.

## See it on your computer

You need [Node.js](https://nodejs.org) installed.

In this folder, run:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Change the words

Open `content/site.ts`. Headlines, the story, the nutrition numbers, and the photo paths for the main sections are all in that file. Save it and refresh the browser.

The story is a short first draft. Edit it in your own voice. Don't add dates or details that aren't true.

## Swap or add photos

Photo files live in `public/images`. They are already sized for the web.

- To replace a photo, save the new one with the **same file name**, or change the path in `content/site.ts`.
- The photo grid near the bottom is a list in `content/gallery.ts`. Add a new block to that list to add a picture. Set `wide: true` if the picture is landscape and should stretch across two columns.

Keep the description in `alt` honest, so someone who can't see the photo still knows what's in it.

## The nutrition panel

The panel is drawn in HTML, not pasted in as a picture, so the type stays sharp. The numbers are in `content/site.ts`. The printed label says "1 can." The site says "Per 12oz bottle" on purpose.

## Put it on the internet

The site is ready for Vercel. Connect this GitHub repo and Vercel will build it with no extra setup.

A pull request gets a **preview** link. That preview is the place to look before anything is public. The live site updates when the pull request is merged into `main`. Look at the preview first.

## What this site does not do

It does not take payment, collect email addresses, or track visitors.
