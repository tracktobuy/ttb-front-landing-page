type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "Paste & Go",
    description: "Just paste the product link. We handle the rest.",
    icon: (
      <path
        d="M9 7.5H6.5A2.5 2.5 0 0 0 4 10v6a2.5 2.5 0 0 0 2.5 2.5h6A2.5 2.5 0 0 0 15 16v-2.5M11 4.5h4.5V9M15.2 4.8l-6.4 6.4"
        stroke="rgb(246 168 35)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Multi-Store",
    description: "Track products from any e-commerce.",
    icon: (
      <>
        <rect x="3.5" y="4" width="6" height="6" rx="1.4" stroke="rgb(246 168 35)" strokeWidth="1.4" />
        <rect x="10.5" y="4" width="6" height="6" rx="1.4" stroke="rgb(246 168 35)" strokeWidth="1.4" />
        <rect x="3.5" y="11" width="6" height="6" rx="1.4" stroke="rgb(246 168 35)" strokeWidth="1.4" />
        <rect x="10.5" y="11" width="6" height="6" rx="1.4" stroke="rgb(246 168 35)" strokeWidth="1.4" />
      </>
    ),
  },
  {
    title: "Auto-Extract",
    description: "Price, images, details — all captured instantly.",
    icon: (
      <path
        d="M4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z M4 14.5L8 10.5L11 13L16 8"
        stroke="rgb(246 168 35)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Stay Updated",
    description: "Get notified when prices drop.",
    icon: (
      <path
        d="M10 4.5c-2.2 0-4 1.8-4 4v2.7l-1.3 2.1c-.2.3 0 .7.4.7h9.8c.4 0 .6-.4.4-.7L14 11.2V8.5c0-2.2-1.8-4-4-4Z M8.4 15.5a1.6 1.6 0 0 0 3.2 0"
        stroke="rgb(246 168 35)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {FEATURES.map((feature) => (
        <div
          key={feature.title}
          className="group rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent-line"
        >
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-dim transition-transform duration-200 group-hover:scale-105">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {feature.icon}
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-[16px] font-semibold text-text-primary">
            {feature.title}
          </h3>
          <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
