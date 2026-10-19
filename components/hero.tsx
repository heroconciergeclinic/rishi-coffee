import Image from "next/image";
import { DropsLink } from "@/components/drops-link";
import { hero, instagramHandle } from "@/content/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-ink">
      <Image
        src={hero.image}
        alt={hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_42%] lg:object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,20,16,0.38)_0%,rgba(28,20,16,0.08)_28%,rgba(28,20,16,0.18)_52%,rgba(28,20,16,0.84)_100%)] lg:hidden" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#f6f1e6_0%,rgba(246,241,230,0.94)_30%,rgba(246,241,230,0.72)_46%,rgba(246,241,230,0.15)_68%,rgba(246,241,230,0)_78%)] lg:block" />

      <div className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-end px-5 pt-16 pb-8 sm:px-8 lg:justify-center lg:px-16 lg:pb-12">
        <div className="max-w-xl lg:max-w-lg">
          <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-cream lg:bg-forest lg:text-cream">
            {hero.eyebrow}
          </p>
          <h1 className="hero-shadow mt-4 font-display text-[clamp(2.8rem,8vw,6.4rem)] leading-[0.9] font-semibold tracking-[-0.035em] text-cream lg:text-ink lg:[text-shadow:none]">
            <span className="block">{hero.titleLead}</span>
            <span className="block">{hero.titleRest}</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-cream/90 sm:text-lg lg:text-espresso/80">
            {hero.lede}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <DropsLink className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream transition hover:bg-forest-deep">
              {hero.cta}
              <Arrow />
            </DropsLink>
            <p className="text-sm font-medium text-cream/85 lg:text-forest">
              {instagramHandle}
            </p>
            <p
              className="grid size-[4.6rem] place-items-center rounded-full border border-cream/50 bg-forest text-center text-[0.65rem] leading-tight font-semibold text-cream shadow-lg rotate-6 lg:border-forest"
              aria-hidden="true"
            >
              made in
              <br />
              chicago
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
