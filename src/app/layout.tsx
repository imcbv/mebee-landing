import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "../components/ui/error-boundary";

// Using Inter as primary fallback for Articulat CF
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mebee.com'),
  title: {
    default: "meBee – launching soon",
    template: "%s | MeBee"
  },
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
    "consumer electronics",
    "marketing automation",
    "brand management",
    "multi-market launches"
  ],
  authors: [{ name: "MeBee" }],
  creator: "MeBee",
  publisher: "MeBee",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MeBee | AI-Native Digital Assets Platform",
    description: "Find smarter, share better. AI-native digital assets platform for global teams.",
    url: "https://mebee.com",
    siteName: "MeBee",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MeBee - AI-Native Digital Assets Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MeBee | AI-Native Digital Assets Platform",
    description: "Find smarter, share better. AI-native digital assets platform for global teams.",
    creator: "@mebee",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#F5FF00" }
    ]
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://mebee.com",
  },
  category: "technology",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "MeBee",
              "description": "AI-Native digital assets platform for global teams. Find the right asset, auto-adapt by market, and package to your partners or teams needs.",
              "url": "https://mebee.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "0",
                "description": "Free demo available"
              },
              "creator": {
                "@type": "Organization",
                "name": "MeBee",
                "url": "https://mebee.com"
              },
              "featureList": [
                "Natural-language & visual search",
                "Machine-first localization",
                "Partner-ready packaging & distribution",
                "Multi-market asset management"
              ],
              "targetAudience": {
                "@type": "Audience",
                "audienceType": "Global marketing teams",
                "geographicArea": "Worldwide"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MeBee",
              "url": "https://mebee.com",
              "description": "AI-Native digital assets platform for global teams",
              "foundingDate": "2024",
              "industry": "Software Technology",
              "knowsAbout": [
                "Digital Asset Management",
                "AI Technology",
                "Global Marketing",
                "Localization",
                "Brand Management"
              ],
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "SoftwareApplication",
                  "name": "MeBee Platform",
                  "category": "Digital Asset Management"
                }
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-articulat antialiased`}
      >
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
