"use client";

import { useEffect, useState } from "react";
import { DropsLink } from "@/components/drops-link";
import { Wordmark } from "@/components/wordmark";
import { nav } from "@/content/site";

const pill =
  "inline-flex items-center rounded-full bg-forest px-4 py-2 text-sm font-semibold text-cream transition hover:bg-forest-deep";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="text-forest">
          <Wordmark />
          <span className="sr-only">Rishi Coffee home</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Page">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-espresso/80 transition hover:text-forest"
            >
              {item.label}
            </a>
          ))}
          <DropsLink className={pill}>drops soon</DropsLink>
        </nav>

        <button
          type="button"
          className="rounded-full border border-forest/15 px-3 py-1.5 text-sm font-semibold text-forest md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Page"
          className="border-t border-forest/10 bg-cream px-5 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-display text-4xl tracking-tight text-forest"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <DropsLink className={`${pill} mt-6`} >drops coming soon</DropsLink>
        </nav>
      ) : null}
    </header>
  );
}
