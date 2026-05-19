import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Precision QA Labs",
    template: "%s | Precision QA Labs",
  },
  description:
    "Modern QA Automation & Quality Engineering for software teams building scalable, reliable, and high-quality applications.",
  keywords: [
    "QA Automation",
    "Quality Engineering",
    "E2E Testing",
    "Playwright",
    "TestRigor",
    "Appium",
    "SDET",
    "Software Testing",
    "Automation Testing",
  ],
  authors: [{ name: "Precision QA Labs" }],
  creator: "Precision QA Labs",
  openGraph: {
    title: "Precision QA Labs",
    description:
      "Modern QA Automation & Quality Engineering for software teams.",
    url: "https://precisionqalabs.com",
    siteName: "Precision QA Labs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision QA Labs",
    description:
      "Modern QA Automation & Quality Engineering for software teams.",
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