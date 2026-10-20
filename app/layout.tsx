import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import { site } from "@/content/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

// Fonts are downloaded at build time and served from your own domain,
// so visitors' browsers never contact Google.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });

const title = "Therapy for Working Parents & Professionals with ADHD in New York | Alder Tree Therapy";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Alder Tree Therapy" },
  description: site.description,
  applicationName: site.practiceName,
  authors: [{ name: `${site.clinician.name}, ${site.clinician.credentials}` }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.practiceName,
    title,
    description: site.description,
    images: [{ url: "/images/og-alder-tree-therapy.jpg", width: 1200, height: 630, alt: site.clinician.headshot.alt }],
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f3f3ee",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${hanken.variable}`}>
      <body>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
