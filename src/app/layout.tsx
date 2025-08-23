import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Using Inter as primary fallback for Articulat CF
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MeBee | AI-Native Digital Assets Platform for Global Teams",
  description: "Find the right asset, auto-adapt by market, and package to your partners or teams needs - so launches go live faster, everywhere. Built for Luxury/Fashion & Beauty and Consumer Electronics.",
  keywords: [
    "digital asset management",
    "AI-native DAM", 
    "global marketing teams",
    "localization",
    "asset findability",
    "partner packaging",
    "luxury fashion",
    "beauty brands",
    "consumer electronics"
  ],
  authors: [{ name: "MeBee" }],
  creator: "MeBee",
  publisher: "MeBee", 
  openGraph: {
    title: "MeBee | AI-Native Digital Assets Platform",
    description: "Find smarter, share better. AI-native digital assets platform for global teams.",
    url: "https://mebee.com",
    siteName: "MeBee",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeBee | AI-Native Digital Assets Platform",
    description: "Find smarter, share better. AI-native digital assets platform for global teams.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    // Preconnect to Adobe Fonts for performance
    'link': 'https://use.typekit.net',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />
      </head>
      <body
        className={`${inter.variable} font-articulat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
