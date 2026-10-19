import { DropsLink } from "@/components/drops-link";
import { Star } from "@/components/star";
import { footer, instagramHandle, instagramUrl } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-8">
        <p className="max-w-md text-lg leading-relaxed text-cream/80">{footer.note}</p>
        <div className="mt-8 flex flex-col gap-4 text-base font-medium sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
          <DropsLink className="underline decoration-cream/30 underline-offset-4 hover:decoration-cream">
            {footer.line}
          </DropsLink>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-cream/30 underline-offset-4 hover:decoration-cream"
          >
            Instagram {instagramHandle}
          </a>
          <p>{footer.place}</p>
        </div>
        <p className="mt-10 flex items-end gap-3 font-display text-[clamp(3.4rem,15vw,10.5rem)] leading-[0.8] font-semibold tracking-[-0.045em]">
          <span>rishi coffee</span>
          <Star className="mb-[0.18em] size-[0.14em]" />
        </p>
      </div>
    </footer>
  );
}
