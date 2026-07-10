# TrackToBuy — Landing Page

"Coming soon" landing page for TrackToBuy, built with Next.js (App Router) so pages
are server-rendered by default — good for Google indexing/SEO.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build && npm start   # production build + server
```

## Swap in the real logo

No logo file was attached, so `src/components/Logo.tsx` renders a simple placeholder
mark (price-tag icon) in the accent color plus a wordmark. To use your real logo:

1. Drop your logo file into `public/` (e.g. `public/logo.svg`).
2. In `src/components/Logo.tsx`, replace the inline `<svg>` with:
   ```tsx
   import Image from "next/image";
   <Image src="/logo.svg" alt="TrackToBuy" width={28} height={28} />
   ```

## Structure

- `src/app/layout.tsx` — fonts (Space Grotesk / Inter / JetBrains Mono) + SEO metadata
- `src/app/page.tsx` — the page itself (server component, SSR)
- `src/app/globals.css` — design tokens (colors, etc.) as CSS variables
- `src/components/Logo.tsx` — placeholder logo mark
- `src/components/PasteDemo.tsx` — animated "paste a link → extracted card" demo (client component)
- `src/components/NotifyForm.tsx` — email capture form (client component, UI only — no backend wired up yet)
- `src/components/FeatureGrid.tsx` — the four feature cards

## Color tokens (from the brief)

| Token | Value |
|---|---|
| Background | `rgb(9 10 12)` |
| Surface / primary | `rgb(17 19 24)` |
| Accent | `rgb(246 168 35)` |

## Notes

- The email form (`NotifyForm.tsx`) currently just shows a confirmation state locally.
  Wire `handleSubmit` up to your waitlist provider (Mailchimp, ConvertKit, a Lambda +
  DynamoDB endpoint, etc.) when ready.
- The `PasteDemo` animation respects `prefers-reduced-motion` and shows a static state
  instead of cycling for users who have that preference set.
- `next/font/google` self-hosts the fonts at build time — this needs network access to
  fonts.googleapis.com during `npm run build`.
