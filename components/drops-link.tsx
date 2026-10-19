import { instagramUrl } from "@/content/site";

export function DropsLink({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only"> on Instagram</span>
    </a>
  );
}
