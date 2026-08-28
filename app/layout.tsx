import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company, siteConfig } from "@/data/company";
import { localBusinessSchema } from "@/lib/schema";

// Self-hosted (next/font/local) rather than next/font/google: this avoids a
// runtime fetch to fonts.googleapis.com at build time, so the build stays
// reliable in network-restricted CI/sandbox environments. Font files are
// Barlow Condensed and IBM Plex, both licensed under the SIL Open Font
// License — see assets/fonts/OFL.txt.
const barlowCondensed = localFont({
  src: [
    { path: "../assets/fonts/BarlowCondensed-Medium.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/BarlowCondensed-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../assets/fonts/BarlowCondensed-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const plexSans = localFont({
  src: [{ path: "../assets/fonts/IBMPlexSans-Variable.ttf", weight: "300 700", style: "normal" }],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "../assets/fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${company.name} | Zinc Plating & Metal Finishing, Belagavi`,
    template: `%s | ${company.name}`,
  },
  description: company.shortDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: company.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: company.name,
    title: `${company.name} | Zinc Plating & Metal Finishing, Belagavi`,
    description: company.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Zinc Plating & Metal Finishing, Belagavi`,
    description: company.shortDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
