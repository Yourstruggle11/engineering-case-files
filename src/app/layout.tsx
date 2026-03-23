import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Newsreader } from "next/font/google";
import "@/app/globals.css";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/layout/site-shell";
import { absoluteUrl, siteUrl } from "@/lib/site";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Souvik Sen | Engineering Case Files",
    template: "%s | Souvik Sen"
  },
  description:
    "Engineering Case Files: a production-grade portfolio for Souvik Sen documenting frontend systems, real-time SaaS workflows, and developer tooling.",
  openGraph: {
    title: "Souvik Sen | Engineering Case Files",
    description:
      "A curated archive of solved engineering investigations across React, real-time SaaS workflows, and developer tooling.",
    url: absoluteUrl("/"),
    siteName: "Souvik Sen",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Souvik Sen | Engineering Case Files",
    description:
      "Engineering case files covering frontend systems, product engineering, and developer tooling."
  },
  alternates: {
    canonical: "/"
  },
  category: "technology"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="page-shell bg-background text-text antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
