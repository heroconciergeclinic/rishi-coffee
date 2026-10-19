import { Rise } from "@/components/rise";
import { points } from "@/content/site";

const icons = [BeanIcon, BottleIcon, CityIcon];

export function Points() {
  return (
    <section id="notes" className="scroll-mt-20 bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <Rise>
          <p className="text-sm font-semibold tracking-wide text-latte">
            {points.index} — {points.kicker}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.5rem,5vw,4.4rem)] leading-[0.95] font-semibold tracking-[-0.03em]">
            {points.title}
          </h2>
        </Rise>
        <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
          {points.items.map((item, index) => {
            const Icon = icons[index] ?? BeanIcon;
            return (
              <li
                key={item.title}
                className="md:border-l md:border-cream/15 md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
              >
                <Rise delay={index * 70}>
                  <Icon />
                  <h3 className="mt-5 font-display text-3xl leading-none font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-base leading-relaxed text-cream/80">
                    {item.body}
                  </p>
                </Rise>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function BeanIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="size-11 text-latte">
      <path
        d="M24 6c8 6 12 12 12 18s-4 12-12 18c-8-6-12-12-12-18S16 12 24 6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M24 10c2 6 2 22 0 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BottleIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="size-11 text-latte">
      <path
        d="M20 6h8v6l4 5v23a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V17l4-5V6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M18 28h12" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CityIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="size-11 text-latte">
      <path
        d="M8 40V22h8v18M16 40V14h10v26M26 40V20h8l6 6v14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M20 20h2M20 26h2M20 32h2M30 28h2M30 34h2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
