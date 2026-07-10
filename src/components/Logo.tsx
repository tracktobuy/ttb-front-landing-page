type LogoProps = {
  className?: string;
  withWordmark?: boolean;
};

/**
 * Placeholder logomark — a price tag pierced by a link/chain notch,
 * standing in for the product's real logo until it's supplied.
 * Swap the <svg> below for the real mark (e.g. an <Image src="/logo.svg" />)
 * whenever the actual logo file is available.
 */
export default function Logo({ className = "", withWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="28" height="28" rx="8" fill="rgb(246 168 35 / 0.14)" />
        <path
          d="M9 8.5H15.5L19.5 12.5V17.5C19.5 18.6 18.6 19.5 17.5 19.5H9C7.9 19.5 7 18.6 7 17.5V10.5C7 9.4 7.9 8.5 9 8.5Z"
          stroke="rgb(246 168 35)"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="11.25" cy="13" r="1.15" fill="rgb(246 168 35)" />
      </svg>
      {withWordmark && (
        <span className="font-[family-name:var(--font-display)] text-[17px] font-semibold tracking-tight text-text-primary">
          Track<span className="text-accent">To</span>Buy
        </span>
      )}
    </div>
  );
}
