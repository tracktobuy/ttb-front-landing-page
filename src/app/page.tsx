import Logo from "@/components/Logo";
import PasteDemo from "@/components/PasteDemo";
import NotifyForm from "@/components/NotifyForm";
import FeatureGrid from "@/components/FeatureGrid";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TrackToBuy",
    url: "https://tracktobuy.com",
    applicationCategory: "ShoppingApplication",
    description:
      "TrackToBuy lets you paste a product link from any online store and automatically tracks its price, images, and details, notifying you when prices drop.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
    },
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-bg"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div className="field-backdrop" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1120px] flex-col px-6 sm:px-8">
        <header className="py-7" role="banner">
          <nav className="flex items-center justify-between" aria-label="Primary">
            <Logo />
            <p className="rounded-full border border-border-strong px-3 py-1.5 font-[family-name:var(--font-mono)] text-[12px] text-text-muted">
              Coming soon
            </p>
          </nav>
        </header>

        <section
          className="flex flex-1 flex-col items-center pt-14 pb-20 text-center sm:pt-20"
          aria-labelledby="hero-heading"
        >
          <p className="rise-in font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.16em] text-accent">
            Price tracking, simplified
          </p>

          <h1
            id="hero-heading"
            className="rise-in mt-5 max-w-[720px] text-balance font-[family-name:var(--font-display)] text-[40px] font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-[56px]"
            style={{ animationDelay: "80ms" }}
          >
            Paste a link.
            <br />
            We&apos;ll watch the price.
          </h1>

          <p
            className="rise-in mt-6 max-w-[520px] text-balance text-[16px] leading-relaxed text-text-muted sm:text-[17px]"
            style={{ animationDelay: "150ms" }}
          >
            Sign up, drop in a link from any online store, and TrackToBuy
            extracts the details and keeps watch — so you know the moment
            it&apos;s worth buying.
          </p>

          <div
            className="rise-in mt-11 flex w-full flex-col items-center"
            style={{ animationDelay: "220ms" }}
          >
            <PasteDemo />
          </div>

          <section
            className="rise-in mt-10 flex w-full flex-col items-center gap-3"
            style={{ animationDelay: "280ms" }}
            aria-labelledby="notify-heading"
          >
            <h2 id="notify-heading" className="sr-only">
              Get notified when TrackToBuy launches
            </h2>
            <NotifyForm />
            <p className="text-[12px] text-text-faint">
              No spam. Just one email when we launch.
            </p>
          </section>
        </section>

        <section className="pb-24" aria-labelledby="features-heading">
          <div className="mb-8 max-w-[720px]">
            <p className="mb-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.16em] text-accent">
              Why TrackToBuy
            </p>
            <h2
              id="features-heading"
              className="font-[family-name:var(--font-display)] text-[28px] font-semibold leading-tight text-text-primary sm:text-[34px]"
            >
              A smarter way to stay ahead of price drops.
            </h2>
          </div>
          <FeatureGrid />
        </section>

        <footer
          className="flex flex-col items-center gap-4 border-t border-border py-8 text-center sm:flex-row sm:justify-between sm:text-left"
          role="contentinfo"
        >
          <Logo withWordmark={true} />
          <p className="font-[family-name:var(--font-mono)] text-[12px] text-text-faint">
            © {new Date().getFullYear()} TrackToBuy. All rights reserved.
          </p>
          <p>eita env value: {process.env.EITA}</p>
        </footer>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
