import Image from "next/image";
import { Rise } from "@/components/rise";
import { gallery } from "@/content/gallery";
import { community, instagramHandle, instagramUrl } from "@/content/site";

export function Community() {
  const handleAt = community.title.indexOf(instagramHandle);
  const before =
    handleAt >= 0 ? community.title.slice(0, handleAt) : community.title;
  const after =
    handleAt >= 0 ? community.title.slice(handleAt + instagramHandle.length) : "";

  return (
    <section id="community" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <Rise>
          <p className="text-sm font-semibold tracking-wide text-forest">
            {community.index} — {community.kicker}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-ink">
            {before}
            {handleAt >= 0 ? (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-forest/30 underline-offset-[6px] transition hover:decoration-forest"
              >
                {instagramHandle}
              </a>
            ) : null}
            {after}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-espresso/75">
            {community.lede}
          </p>
        </Rise>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {gallery.map((photo, index) => (
            <li
              key={photo.src}
              className={photo.wide ? "col-span-2" : undefined}
            >
              <Rise delay={(index % 3) * 40}>
                <div
                  className={`relative overflow-hidden rounded-[1.3rem] bg-cream-deep ${
                    photo.wide ? "aspect-[16/10]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={
                      photo.wide
                        ? "(min-width: 768px) 66vw, 100vw"
                        : "(min-width: 768px) 33vw, 50vw"
                    }
                    className="object-cover"
                  />
                </div>
              </Rise>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
