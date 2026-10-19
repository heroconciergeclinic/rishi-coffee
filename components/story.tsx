import Image from "next/image";
import { Rise } from "@/components/rise";
import { story } from "@/content/site";

export function Story() {
  return (
    <section id="story" className="scroll-mt-20 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Rise>
            <p className="text-sm font-semibold tracking-wide text-forest">
              {story.index} — {story.kicker}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5vw,4.4rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-ink">
              {story.title}
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-espresso/80">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="mt-8 border-l-2 border-forest pl-4">
              <p className="font-display text-2xl tracking-tight text-forest">
                {story.pull}
              </p>
              <footer className="mt-1 text-sm text-espresso/60">from the bottle</footer>
            </blockquote>
          </Rise>
          <Rise delay={80}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.8rem] bg-cream-deep lg:max-w-none">
              <Image
                src={story.portrait.src}
                alt={story.portrait.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[center_18%]"
              />
            </div>
          </Rise>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-3">
          {story.moments.map((moment, index) => (
            <li key={moment.src}>
              <Rise delay={index * 60}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-cream-deep">
                  <Image
                    src={moment.src}
                    alt={moment.alt}
                    fill
                    sizes="(min-width: 640px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-espresso/75">
                  {moment.caption}
                </p>
              </Rise>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
