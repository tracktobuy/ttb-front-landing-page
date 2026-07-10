"use client";

import { useState, type FormEvent } from "react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    // No backend yet — this is a landing page. Wire this up to your
    // waitlist/email provider once the signup service exists.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div
        role="status"
        className="flex w-full max-w-[440px] items-center gap-2.5 rounded-xl border border-accent-line bg-accent-dim px-4 py-3.5 text-[14px] text-text-primary"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-accent" aria-hidden="true">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" />
          <path d="M5 8.2L7 10.2L11 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        You&apos;re on the list — we&apos;ll email you at launch.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[440px] flex-col gap-3 sm:flex-row"
      noValidate
    >
      <label htmlFor="notify-email" className="sr-only">
        Email address
      </label>
      <input
        id="notify-email"
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full flex-1 rounded-xl border border-border-strong bg-surface px-4 py-3.5 text-[14px] text-text-primary placeholder:text-text-faint outline-none transition-colors focus:border-accent-line"
      />
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-accent px-5 py-3.5 text-[14px] font-medium text-[rgb(9_10_12)] transition-opacity hover:opacity-90 active:opacity-80"
      >
        Notify me
      </button>
    </form>
  );
}
