import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://tracktobuy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TrackToBuy — Paste a link. We track the price.",
  description:
    "TrackToBuy is coming soon. Paste any product link from any online store and we'll capture the price, images, and details automatically — then tell you when it drops.",
  keywords: [
    "price tracker",
    "price tracking app",
    "track product prices",
    "wishlist app",
    "e-commerce price drop alert",
    "TrackToBuy",
  ],
  openGraph: {
    title: "TrackToBuy — Paste a link. We track the price.",
    description:
      "Paste any product link from any online store. We capture the price, images, and details automatically — then tell you when it drops.",
    url: siteUrl,
    siteName: "TrackToBuy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrackToBuy — Paste a link. We track the price.",
    description:
      "Paste any product link from any online store. We capture the price, images, and details automatically — then tell you when it drops.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
