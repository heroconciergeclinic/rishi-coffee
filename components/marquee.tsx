import { Star } from "@/components/star";
import { taglines } from "@/content/site";

export function Marquee() {
  return (
    <section className="overflow-hidden bg-forest text-cream">
      <div className="marquee-track flex w-max py-3.5 motion-reduce:hidden" aria-hidden="true">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {taglines.map((tagline) => (
              <li key={`${copy}-${tagline}`} className="flex items-center gap-4 px-4 text-sm font-medium tracking-wide">
                <span>{tagline}</span>
                <Star className="size-2.5 text-latte" />
              </li>
            ))}
          </ul>
        ))}
      </div>
      <ul className="hidden flex-wrap justify-center gap-x-6 gap-y-2 px-5 py-4 text-sm font-medium motion-reduce:flex">
        {taglines.map((tagline) => (
          <li key={tagline}>{tagline}</li>
        ))}
      </ul>
    </section>
  );
}
