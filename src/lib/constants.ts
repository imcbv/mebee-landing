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
    headline: "Your Next Launch, Transformed",
    subheadline:
      "Search, adapt, and deliver content to every market, to power faster launches.",
    cta: "Book a short demo",
    trustSignal:
      "Built for Luxury/Fashion & Beauty, Consumer Electronics, and FMCG brands.",
  },
  problems: {
    sectionTitle: "What Gets in the Way",
    painPoints: [
      {
        title: "Scattered content",
        description:
          "Teams and partners lose time searching for approved assets across fragmented systems.",
      },
      {
        title: "Slow localization",
        description:
          "Adapting copy, formats, and languages for each market delays launches and can create errors.",
      },
      {
        title: "Manual packaging",
        description:
          "Retailer and dealer specs turn every launch into tedious rework.",
      },
    ],
    transitionText: "What if you could eliminate all three bottlenecks?",
    subText:
      "MeBee's AI-native approach transforms these pain points into your competitive advantages.",
    cta: "Book a short demo",
  },
  solutions: {
    sectionTitle: "What You Gain",
    pillars: [
      {
        title: "Unified search",
        description:
          "Find any asset or document across DAMs, CMSs, Drives, SharePoint, and internal portals - even inside slides, PDFs, images, videos, or audio files.",
        feature: "",
        microCta: "",
      },
      {
        title: "Machine-first localization",
        description:
          "Extract on-asset copy and adapt it for each market. Keep every version in sync across regions and channels with clear readiness status.",
        feature: "",
        microCta: "",
      },
      {
        title: "Instant partner packaging",
        description:
          "Create press, dealer, or retailer kits in one click. Permissions carry over from the source, and partners get smart links you can track with logs and audit trails.",
        feature: "",
        microCta: "",
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
        description:
          "Auto-adapt text and formats & approve differences in seconds",
      },
      {
        step: "Package",
        description:
          "Generate partner-ready bundles for each channel and region",
      },
      {
        step: "Share",
        description: "Send smart links or push to portals",
      },
    ],
    cta: "Book a short demo",
  },
  audience: {
    sectionTitle: "Built For Your Whole Network",
    internalTeams: {
      title: "For internal teams",
      teams: [
        "Brand",
        "Channel/Trade",
        "Content Ops",
        "Dealer/Retail Marketing",
        "Regional Marketing",
      ],
    },
    externalNetworks: {
      title: "For external networks",
      networks: [
        "Dealers",
        "Retailers",
        "Marketplaces",
        "Distributors",
        "Agencies",
        "Press",
        "Influencers",
      ],
    },
  },
  finalCta: {
    headline:
      "Ready to launch smarter, and transform how content moves across every market?",
    cta: "Book a short demo",
  },
  brand: {
    corePromise: "Find smarter, share better",
    valueProps: [
      "Instant findability",
      "machine-first localization",
      "partner-ready packaging",
    ],
    differentiator:
      "AI-native approach vs. legacy DAM systems that require manual metadata",
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
