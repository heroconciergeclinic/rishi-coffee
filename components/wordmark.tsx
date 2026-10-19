import { Star } from "@/components/star";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-start gap-1 font-display text-[1.65rem] leading-none font-semibold tracking-[-0.03em] ${className}`}
    >
      <span>rishi coffee</span>
      <Star className="mt-0.5 size-2.5 shrink-0" />
    </span>
  );
}
