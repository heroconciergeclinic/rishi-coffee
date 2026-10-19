import Image from "next/image";
import { Rise } from "@/components/rise";
import { lineup } from "@/content/site";

export function Lineup() {
  return (
    <section id="lineup" className="scroll-mt-20 bg-cream-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <Rise>
          <p className="text-sm font-semibold tracking-wide text-forest">
            {lineup.index} — {lineup.kicker}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.5rem,5vw,4.4rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-ink">
            {lineup.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-espresso/75">
            {lineup.lede}
          </p>
        </Rise>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <li className="sm:col-span-2 lg:col-span-1">
            <Rise>
              <a href={lineup.featured.href} className="group block h-full">
                <article className="flex h-full flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-paper">
                    <Image
                      src={lineup.featured.image}
                      alt={lineup.featured.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-3xl tracking-tight text-ink">
                    {lineup.featured.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-espresso/75">
                    {lineup.featured.detail}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-forest">
                    {lineup.featured.meta}
                  </p>
                </article>
              </a>
            </Rise>
          </li>
          {lineup.comingSoon.map((flavor, index) => (
            <li key={`${flavor.detail}-${index}`}>
              <Rise delay={index * 50}>
                <article className="flex h-full flex-col">
                  <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-paper p-5">
                    <Image
                      src="/images/mascot.png"
                      alt=""
                      width={416}
                      height={254}
                      className="pointer-events-none absolute -right-6 bottom-2 w-40 opacity-35"
                    />
                    <p className="text-sm font-semibold text-forest">dropping soon</p>
                    <p className="relative font-display text-7xl leading-none text-forest/25">
                      ?
                    </p>
                  </div>
                  <h3 className="mt-4 font-display text-3xl tracking-tight text-ink">
                    {flavor.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-espresso/75">
                    {flavor.detail}
                  </p>
                </article>
              </Rise>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
