export function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M8 0c.28 4.35 1.37 5.44 5.72 5.72C9.37 6 8.28 7.09 8 11.44 7.72 7.09 6.63 6 2.28 5.72 6.63 5.44 7.72 4.35 8 0Z" />
    </svg>
  );
}
