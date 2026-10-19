import { taglines } from "@/content/site";

const featured = [taglines[0], taglines[3], taglines[4]];

export function TaglineBand() {
  return (
    <section aria-label="From the bottle" className="bg-latte">
      <ul className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-5 py-14 text-center sm:py-16">
        {featured.map((line, index) => (
          <li
            key={line}
            className={
              index === 0
                ? "font-display text-[clamp(2rem,5vw,3.8rem)] leading-none font-semibold tracking-tight text-forest"
                : "font-display text-2xl tracking-tight text-forest/75 sm:text-3xl"
            }
          >
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
}
