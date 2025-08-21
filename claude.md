# MeBee Landing Page Project

## Project Overview

This is a Next.js TypeScript project for MeBee's marketing landing page. MeBee is an AI-native digital asset management platform designed for global marketing and sales teams.

## Key Messaging & Positioning

- **Core Promise**: "Find smarter, share better"
- **Main Value Props**: Instant findability, machine-first localization, partner-ready packaging
- **Target Audience**: Global marketing teams at luxury/fashion, beauty, and consumer electronics companies
- **Differentiator**: AI-native approach vs. legacy DAM systems that require manual metadata

## Brand Guidelines

### Colors (from brand guide)

- **Primary Yellow**: #F5FF00 (RGB 245, 255, 0)
- **Navy Blue**: #435069 (RGB 67, 80, 105)
- **Sage Green**: #93A5A0 (RGB 147, 165, 160)
- **Dark Navy**: #252B48 (RGB 37, 43, 72)

### Typography

- **Font**: Articulat CF (fallback to Inter/system fonts for web)
- Strong, sharp, modern aesthetic
- Use font-family: 'Articulat CF', 'Inter', sans-serif

### Logo Usage

- Standard logo: `/logos/mebee-logo.svg` (dark navy on light backgrounds)
- Inverse logo: `/logos/mebee-logo-inverse.svg` (white on dark backgrounds)
- Maintain proper contrast ratios for accessibility

## Landing Page Structure

### 1. Hero Section

- **Headline**: "AI-Native digital assets platform for global teams"
- **Subheadline**: "Find the right asset, auto-adapt by market, and package to your partners or teams needs - so launches go live faster, everywhere."
- **Primary CTA**: "Book a short demo"
- **Trust Signal**: "Built for Luxury/Fashion & Beauty and Consumer Electronics"
- **Design**: Bold, attention-grabbing with strong contrast using brand colors

### 2. Problem Statement ("The Pain We Remove")

- **Section Title**: "Stop delays and re-sends. Start launches."
- **Three Pain Points**:
  1. **Findability fails**: Teams and partners can't quickly locate the latest, correct asset
  2. **Localization bottlenecks**: Market copy, languages, and formats slow everything down
  3. **Packaging & distribution drag**: Retailer/dealer specs turn every launch into handwork
- **Secondary CTA**: "Compare your flow (90-sec scorecard)"

### 3. Solution ("What You Get - Three Pillars")

#### Pillar 1: Instant Findability

- Natural-language & visual search returns the latest approved asset, fast
- Saved intents like "EU Q4 social for Model X - German & French"
- **Micro-CTA**: "Try the search demo"

#### Pillar 2: Machine-First Localization

- Extract on-asset copy; translate/adapt; human-final in one place
- Keep variants in sync across markets and channels
- **Micro-CTA**: "See localization flow"

#### Pillar 3: Partner-Ready Packaging & Distribution

- One click emits retailer/dealer/press kits (crops, codecs, filenames, manifests)
- Smart links your partners can use immediately
- **Micro-CTA**: "View kit example"

### 4. How It Works

**Process Flow**: Query → Localize → Package → Share

1. **Ask**: Describe what you need in plain language
2. **Localize**: Auto-adapt text and formats & approve differences in seconds
3. **Package**: Generate partner-ready bundles for each channel and region
4. **Share**: Send smart links or push to portals

- **CTA**: "Book a short demo"

### 5. Target Audience

**Internal teams**: Brand, Channel/Trade, Content Ops, Dealer/Retail Marketing, Regional Marketing
**External networks**: Dealers, retailers/marketplaces, distributors, agencies, press/influencers

### 6. Final CTA Banner

- **Headline**: "Ready to end the file hunt and ship faster in every market?"
- **Primary CTA**: "Book a short demo"

## Technical Requirements

### Framework & Tools

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Hosting**: Designed for Vercel deployment

### Design Requirements

- **Mobile-first responsive design**
- **Performance**: Lighthouse score >90 on mobile
- **Accessibility**: WCAG AA compliance
- **Modern aesthetic**: Clean, professional, premium feel
- **Loading speed**: Optimized images and fonts
- **Smooth animations**: Subtle, purposeful micro-interactions

### Key Features to Implement

1. **Responsive hero section** with compelling visuals
2. **Interactive demo CTAs** (modal preparation for Calendly integration)
3. **Smooth scroll navigation** between sections
4. **Optimized form handling** (preparation for HubSpot integration)
5. **Performance optimizations** (image optimization, lazy loading)
6. **SEO optimization** (meta tags, structured data)

## Content Strategy Notes

### Conversion Optimization

- **Social proof**: Mention target industries (luxury, beauty, electronics)
- **Urgency**: Focus on speed and efficiency gains
- **Specificity**: Use concrete examples (vs. vague benefits)
- **Risk reversal**: Emphasize "short demo" to lower commitment barrier

### Messaging Improvements from Original

- Replace technical jargon with business outcomes
- Emphasize time savings and launch speed over features
- Use active voice and action-oriented language
- Focus on partner/team collaboration benefits
- Highlight competitive advantage of AI-native approach

## File Structure

```
src/
├── app/
│   ├── layout.tsx (root layout with fonts/metadata)
│   ├── page.tsx (main landing page)
│   └── globals.css (Tailwind imports + custom styles)
├── components/
│   ├── ui/ (reusable UI components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── modal.tsx
│   ├── sections/ (landing page sections)
│   │   ├── hero.tsx
│   │   ├── problems.tsx
│   │   ├── solutions.tsx
│   │   ├── how-it-works.tsx
│   │   ├── audience.tsx
│   │   └── final-cta.tsx
│   └── forms/
│       └── demo-request.tsx
├── lib/
│   ├── utils.ts (utility functions)
│   └── constants.ts (brand colors, copy)
└── styles/ (additional CSS if needed)
```

## Integration Readiness

### Future Integrations (prepare structure for):

- **HubSpot Forms**: Lead capture and CRM integration
- **Calendly**: Demo booking modal
- **Google Analytics 4**: Conversion tracking
- **LinkedIn Insight Tag**: Ad attribution
- **PostHog**: User behavior analytics

### Environment Variables (for future use):

```
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=
NEXT_PUBLIC_CALENDLY_URL=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

## Success Metrics

- **Primary KPI**: Demo booking conversions
- **Secondary KPIs**: Time on page, scroll depth, CTA click-through rates
- **Technical KPIs**: Core Web Vitals, accessibility scores

## Development Priorities

1. **Core landing page structure** (all sections)
2. **Responsive design** (mobile-first)
3. **Brand compliance** (colors, typography, logo usage)
4. **Performance optimization**
5. **Accessibility compliance**
6. **Integration preparation** (form structure, analytics setup)

## Notes for Claude Code

- Prioritize clean, maintainable code structure
- Use TypeScript strictly for type safety
- Implement proper error boundaries
- Follow Next.js best practices for performance
- Create reusable components where logical
- Ensure proper SEO setup from the start
