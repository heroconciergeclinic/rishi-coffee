import Image from "next/image";
import { NutritionPanel } from "@/components/nutrition-panel";
import { Rise } from "@/components/rise";
import { bottle } from "@/content/site";

export function BottleSection() {
  return (
    <section id="bottle" className="scroll-mt-20 bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Rise>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem] bg-cream-deep">
              <Image
                src={bottle.productImage}
                alt={bottle.productAlt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 w-28 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-ink/10 sm:left-6 sm:w-36">
              <Image
                src={bottle.labelImage}
                alt={bottle.labelAlt}
                width={435}
                height={710}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Rise>

        <Rise delay={80}>
          <div className="pt-6 lg:pt-0">
            <p className="text-sm font-semibold tracking-wide text-forest">
              {bottle.index} — {bottle.kicker}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-ink">
              {bottle.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-espresso/80">
              {bottle.lede}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {bottle.onTheLabel.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-cream-deep px-3 py-1.5 text-sm text-espresso"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-espresso/70">
              {bottle.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
            <div className="mt-8">
              <NutritionPanel />
            </div>
          </div>
        </Rise>
      </div>
    </section>
  );
}
