"use client";

import { useEffect, useRef, useState } from "react";

type Sample = {
  url: string;
  store: string;
  product: string;
  price: string;
};

const SAMPLES: Sample[] = [
  {
    url: "https://www.amazon.com/dp/B0CX9K2QRT",
    store: "Amazon",
    product: "Wireless Mechanical Keyboard",
    price: "$89.90",
  },
  {
    url: "https://www.zara.com/us/en/wool-coat-p03642",
    store: "Zara",
    product: "Wool-Blend Overcoat",
    price: "$149.00",
  },
  {
    url: "https://www.bestbuy.com/site/sku/6535",
    store: "Best Buy",
    product: "27\" 4K Monitor",
    price: "$329.99",
  },
];

type Phase = "typing" | "extracting" | "done" | "resetting";

const TYPE_SPEED_MS = 38;
const EXTRACT_MS = 700;
const HOLD_MS = 2400;
const RESET_MS = 320;

export default function PasteDemo() {
  const [sampleIndex, setSampleIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion.current) {
      // Show a single static, fully-extracted state — no cycling.
      setTypedLength(SAMPLES[0].url.length);
      setPhase("done");
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;
    const sample = SAMPLES[sampleIndex];

    if (phase === "typing") {
      if (typedLength < sample.url.length) {
        timeout = setTimeout(() => setTypedLength((n) => n + 1), TYPE_SPEED_MS);
      } else {
        timeout = setTimeout(() => setPhase("extracting"), 380);
      }
    } else if (phase === "extracting") {
      timeout = setTimeout(() => setPhase("done"), EXTRACT_MS);
    } else if (phase === "done") {
      timeout = setTimeout(() => setPhase("resetting"), HOLD_MS);
    } else if (phase === "resetting") {
      timeout = setTimeout(() => {
        setTypedLength(0);
        setSampleIndex((i) => (i + 1) % SAMPLES.length);
        setPhase("typing");
      }, RESET_MS);
    }

    return () => clearTimeout(timeout);
  }, [phase, typedLength, sampleIndex]);

  const sample = SAMPLES[sampleIndex];
  const isResetting = phase === "resetting";
  const isExtracting = phase === "extracting";
  const isDone = phase === "done";

  return (
    <div className="w-full max-w-[480px]">
      {/* URL bar */}
      <div className="flex items-center gap-2.5 rounded-xl border border-border-strong bg-surface px-4 py-3.5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0 text-text-faint" aria-hidden="true">
          <path
            d="M6.5 9.5L9.5 6.5M7 4.5L7.6 3.9C8.7 2.8 10.4 2.8 11.5 3.9C12.6 5 12.6 6.7 11.5 7.8L10.9 8.4M9 11.5L8.4 12.1C7.3 13.2 5.6 13.2 4.5 12.1C3.4 11 3.4 9.3 4.5 8.2L5.1 7.6"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
        <div className="min-w-0 flex-1 font-[family-name:var(--font-mono)] text-[13px] leading-none text-text-muted">
          <span className="text-text-primary">{sample.url.slice(0, typedLength)}</span>
          {!isExtracting && !isDone && <span className="caret text-accent">|</span>}
        </div>
        <span
          className={`shrink-0 rounded-md border px-2 py-1 font-[family-name:var(--font-mono)] text-[11px] transition-colors duration-300 ${
            isExtracting
              ? "border-accent-line bg-accent-dim text-accent"
              : "border-border text-text-faint"
          }`}
        >
          {isExtracting ? "Reading…" : "Paste"}
        </span>
      </div>

      {/* Extracted card */}
      <div
        className={`mt-3 overflow-hidden rounded-xl border border-border bg-surface-raised transition-all duration-300 ease-out ${
          isDone && !isResetting
            ? "max-h-32 opacity-100 translate-y-0"
            : "max-h-0 -translate-y-1 opacity-0 border-transparent"
        }`}
      >
        <div className="flex items-center gap-3.5 p-3.5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-accent-dim">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="rgb(246 168 35)" strokeWidth="1.4" />
              <path d="M4 15.5L9 11L13 14.5L20 8" stroke="rgb(246 168 35)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="8.5" r="1.15" fill="rgb(246 168 35)" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-[family-name:var(--font-display)] text-[14px] font-medium text-text-primary">
              {sample.product}
            </p>
            <p className="mt-0.5 font-[family-name:var(--font-mono)] text-[12px] text-text-faint">
              {sample.store}
            </p>
          </div>
          <div className="shrink-0 rounded-md bg-accent px-2.5 py-1 font-[family-name:var(--font-mono)] text-[13px] font-medium text-[rgb(9_10_12)]">
            {sample.price}
          </div>
        </div>
      </div>
    </div>
  );
}
