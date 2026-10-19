import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rishi Coffee — real ingredients. real good coffee.",
  description:
    "Small-batch vanilla latte bottled at home in Chicago. Real ingredients, 12oz square bottles, drops coming soon.",
  openGraph: {
    title: "Rishi Coffee",
    description: "real ingredients. real good coffee. small batch, bottled in Chicago.",
    images: [
      {
        url: "/images/hero-spilled-milk.jpg",
        alt: "A Rishi Coffee bottle in sunlit spilled milk.",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable} h-full`}>
      <body className="min-h-full bg-cream font-sans text-ink antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-ready')",
          }}
        />
        <a
          href="#main"
          className="absolute top-4 left-4 z-50 -translate-y-24 rounded-full bg-forest px-4 py-2 text-sm font-semibold text-cream focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
