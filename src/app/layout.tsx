import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const siteUrl = "https://precisionqalabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Precision QA Labs | Modern QA Automation & Quality Engineering",
    template: "%s | Precision QA Labs",
  },
  description:
    "Precision QA Labs helps software teams build reliable, scalable, and high-quality applications through QA automation, end-to-end testing, mobile automation, AI-assisted QA, and quality engineering.",
  keywords: [
    "Precision QA Labs",
    "QA Automation",
    "Quality Engineering",
    "E2E Testing",
    "End-to-End Testing",
    "Playwright Automation",
    "TestRigor",
    "Appium",
    "Mobile Automation",
    "AI-Assisted QA",
    "SDET",
    "Software Testing",
    "Automation Testing",
    "Healthcare QA",
    "Enterprise SaaS QA",
    "QA Consulting",
  ],
  authors: [{ name: "Precision QA Labs" }],
  creator: "Precision QA Labs",
  publisher: "Precision QA Labs",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Precision QA Labs | Modern QA Automation & Quality Engineering",
    description:
      "QA automation, end-to-end testing, mobile automation, AI-assisted QA, and quality engineering for modern software teams.",
    url: siteUrl,
    siteName: "Precision QA Labs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision QA Labs | Modern QA Automation & Quality Engineering",
    description:
      "Modern QA automation, E2E testing, mobile automation, AI-assisted QA, and quality engineering for software teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}