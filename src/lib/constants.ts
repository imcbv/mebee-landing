export const BRAND_COLORS = {
  yellow: "#F5FF00", // RGB 245, 255, 0
  navy: "#435069", // RGB 67, 80, 105
  sage: "#93A5A0", // RGB 147, 165, 160
  darkNavy: "#252B48", // RGB 37, 43, 72
} as const;

export const BRAND_ASSETS = {
  logos: {
    standard: "/logos/mebee-logo.svg",
    inverse: "/logos/mebee-logo-inverse.svg",
  },
  honeycombs: {
    gray: "/images/MeBee Honeycomb_gray.png",
    honeyGlow: "/images/MeBee Honeycomb_honey glow.png", 
    navy: "/images/MeBee Honeycomb_navy.png",
    silver: "/images/MeBee Honeycomb_silver.png",
    white: "/images/MeBee Honeycomb_white.png",
  },
} as const;

export const COPY = {
  hero: {
    headline: "AI-Native digital assets platform for global teams",
    subheadline: "Find the right asset, auto-adapt by market, and package to your partners or teams needs - so launches go live faster, everywhere.",
    cta: "Book a short demo",
    trustSignal: "Built for Luxury/Fashion & Beauty and Consumer Electronics",
  },
  problems: {
    sectionTitle: "Stop delays and re-sends. Start launches.",
    painPoints: [
      {
        title: "Findability fails",
        description: "Teams and partners can't quickly locate the latest, correct asset",
      },
      {
        title: "Localization bottlenecks", 
        description: "Market copy, languages, and formats slow everything down",
      },
      {
        title: "Packaging & distribution drag",
        description: "Retailer/dealer specs turn every launch into handwork",
      },
    ],
    secondaryCta: "Compare your flow (90-sec scorecard)",
  },
  solutions: {
    sectionTitle: "What You Get - Three Pillars",
    pillars: [
      {
        title: "Instant Findability",
        description: "Natural-language & visual search returns the latest approved asset, fast",
        feature: "Saved intents like \"EU Q4 social for Model X - German & French\"",
        microCta: "Try the search demo",
      },
      {
        title: "Machine-First Localization", 
        description: "Extract on-asset copy; translate/adapt; human-final in one place",
        feature: "Keep variants in sync across markets and channels",
        microCta: "See localization flow",
      },
      {
        title: "Partner-Ready Packaging & Distribution",
        description: "One click emits retailer/dealer/press kits (crops, codecs, filenames, manifests)",
        feature: "Smart links your partners can use immediately", 
        microCta: "View kit example",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    processFlow: "Query → Localize → Package → Share",
    steps: [
      {
        step: "Ask",
        description: "Describe what you need in plain language",
      },
      {
        step: "Localize", 
        description: "Auto-adapt text and formats & approve differences in seconds",
      },
      {
        step: "Package",
        description: "Generate partner-ready bundles for each channel and region",
      },
      {
        step: "Share",
        description: "Send smart links or push to portals",
      },
    ],
    cta: "Book a short demo",
  },
  audience: {
    sectionTitle: "Target Audience",
    internalTeams: {
      title: "Internal teams",
      teams: ["Brand", "Channel/Trade", "Content Ops", "Dealer/Retail Marketing", "Regional Marketing"],
    },
    externalNetworks: {
      title: "External networks", 
      networks: ["Dealers", "retailers/marketplaces", "distributors", "agencies", "press/influencers"],
    },
  },
  finalCta: {
    headline: "Ready to end the file hunt and ship faster in every market?",
    cta: "Book a short demo",
  },
  brand: {
    corePromise: "Find smarter, share better",
    valueProps: [
      "Instant findability",
      "machine-first localization", 
      "partner-ready packaging"
    ],
    differentiator: "AI-native approach vs. legacy DAM systems that require manual metadata",
  },
} as const;

export const FONT_CONFIG = {
  primary: "Articulat CF",
  fallbacks: ["Inter", "sans-serif"],
  css: {
    fontFamily: "articulat-cf, sans-serif",
    fontStyle: "normal", 
    fontWeight: "100",
  },
} as const;
