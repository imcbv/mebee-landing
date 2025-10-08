# MeBee Landing Page Project

## TEMPORARY LANDING PAGE ACTIVE

**Current Status**: Temporary "Coming Soon" page is active
- **To restore full landing page**: Rename `src/app/page-full.tsx` back to `src/app/page.tsx`
- **To keep temporary page**: Leave as is

The full landing page is preserved in `src/app/page-full.tsx` and can be restored at any time.

## Project Overview

This is a Next.js TypeScript project for MeBee's marketing landing page. MeBee is an AI-native digital asset management platform designed for global marketing and sales teams.

## Key Messaging & Positioning

- **Core Promise**: "Find smarter, share better"
- **Main Value Props**: Instant findability, machine-first localization, partner-ready packaging
- **Target Audience**: Global marketing teams at luxury/fashion, beauty, and consumer electronics companies
- **Differentiator**: AI-native approach vs. legacy DAM systems that require manual metadata

## Design System & Brand Guidelines

### Core Design Philosophy

**Brand Identity**: "Minimal tech-luxe with an acid accent"
- Quiet, orderly layouts in cool greys and deep navy
- Single shock of neon yellow used as light, paint, and energy
- Typography does the heavy lifting, decoration is structural and geometric
- **Usage Ratios**: 70% neutrals, 25% sage surfaces, 5% neon accent

### Color System (Designer Priority)

**Primary Colors**
- **Acid Yellow**: #F5FF00 (RGB 245, 255, 0) → spotlight + accent (surfaces, borders, plates, frames). **AVOID for body text**
- **Cool Navy**: #252B48 (RGB 37, 43, 72) → headings, body text on light surfaces
- **Slate Blue-Grey**: #435069 (RGB 67, 80, 105) → secondary text/icons/buttons on neon backgrounds
- **Muted Sage Grey**: #93A5A0 (RGB 147, 165, 160) → large surface blocks

**Semantic Color Variables**
```css
:root {
  /* MeBee Brand Colors */
  --mb-yellow: #F5FF00;
  --mb-navy: #252B48;
  --mb-slate: #435069;
  --mb-sage: #93A5A0;
  
  /* Usage Context */
  --color-accent: var(--mb-yellow);
  --color-primary: var(--mb-navy);
  --color-secondary: var(--mb-slate);
  --color-surface: var(--mb-sage);
}
```

### Typography System

**Font Family**: Articulat CF (geometric grotesk) with Inter fallback
```css
font-family: 'Articulat CF', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Scale & Hierarchy**
- **H1–H3**: Bold, big, airy, sentence-case
- **Body Desktop**: 18px with neutral tracking
- **Body Mobile**: 16px with neutral tracking
- **Display**: Tight tracking for headlines
- **Lists**: Tabular numerals

**Responsive Typography**
```css
.hero-headline {
  font-size: clamp(2rem, 5vw, 3.75rem);
  line-height: clamp(1.1, 1.2, 1.3);
}
```

### Visual Elements & Decoration

**Signature Elements**
- **Liquid Skins**: Soft marbled texture for depth (low contrast, blurred)
- **Honeycomb Motif**: Thin-stroke hexagon grid, corner watermark, subtle tint
- **Neon Plates**: Rectangular neon blocks with oil-bubble textures, used sparingly

**Decorative Balance Rules**
- Only one "big effect" per viewport (neon flood, neon frame, or multiple plates)
- Honeycomb only as corner watermark
- Plates balance layout, placed top-right/bottom-left

### Layout System

**Grid & Spacing**
- **12-column grid** with max width ~1280–1360px
- **Wide gutters**: 80–120px desktop, 24–32px mobile
- **Vertical rhythm**: 96–144px spacing between blocks
- **8pt grid system** for consistent spacing

**Container System**
```css
.container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 7.5rem);
}
```

### Logo Usage

- **Standard logo**: `/logos/mebee-logo.svg` (dark navy on light backgrounds)
- **Inverse logo**: `/logos/mebee-logo-inverse.svg` (white on dark backgrounds)
- **Contrast requirements**: Maintain WCAG AA compliance (4.5:1 minimum)

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

- **Mobile-first responsive design** with breakpoints: 1440/1200/1024/768/640px
- **Performance**: Lighthouse score >90 on mobile, <3s load time
- **Accessibility**: WCAG 2.1 AA compliance, 4.5:1 contrast ratios
- **Modern aesthetic**: Minimal tech-luxe with geometric precision
- **Loading speed**: Critical CSS inlining, optimized fonts, lazy loading
- **Smooth animations**: 200-260ms ease-out timing, respect reduced motion

### Component Design System

**Button Variants**
- **Primary**: Neon fill with navy text (hover → darken)
- **Secondary**: Neon outline with navy fill on hover
- **Ghost**: Transparent with hover → sage background
- **Minimum size**: 44px height for touch targets

```css
.btn-primary {
  background-color: var(--mb-yellow);
  color: var(--mb-navy);
  border: 2px solid var(--mb-yellow);
  transition: all 0.2s ease-out;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(245, 255, 0, 0.3);
}
```

**Form Design**
- **Input styling**: 2px border, rounded corners, focus → neon border
- **Label positioning**: Above inputs, 14px size, medium weight
- **Validation**: Error states with red indicators
- **Progressive disclosure**: Multi-step for complex forms

**Card Components**
- **Default**: White background, subtle shadow, rounded corners
- **Neon variant**: Yellow background for highlights
- **Sage variant**: Muted background for secondary content
- **Hover effects**: Subtle lift (2px translateY) with enhanced shadow

### Animation & Motion System

**Global Timing**: 200-260ms ease-out for all transitions

**Menu Overlay Animation**
1. Neon slab slides in from left
2. Navigation items fade in with stagger
3. Background overlay fades in

**Micro-interactions**
- **Chevron hover**: 4px rightward shift
- **Button hover**: Subtle lift + enhanced shadow
- **Section reveals**: Fade in up with intersection observer

```css
/* Motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Stagger animations */
.stagger-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}

.stagger-item:nth-child(1) { animation-delay: 0.1s; }
.stagger-item:nth-child(2) { animation-delay: 0.2s; }
```

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

## Development Progress Log

### Phase 1: Foundation Setup ✅ COMPLETED
- **Git Repository**: Initialized with proper initial commit
- **Tailwind Configuration**: Updated with complete MeBee brand color palette
  - Primary: #F5FF00 (MeBee Yellow)
  - Secondary: #435069 (Navy), #93A5A0 (Sage), #252B48 (Dark Navy)
  - Semantic color system for UI components
- **Constants Configuration**: Complete brand copy and messaging setup
  - All landing page copy organized by sections
  - Brand assets paths for logos and honeycomb images
  - Typography configuration for Articulat CF
- **Layout & SEO Setup**: 
  - Complete metadata for SEO optimization
  - OpenGraph and Twitter card configuration
  - Custom CSS variables for brand colors
  - Fixed 500 error (removed manual head tag)
- **Development Server**: Running successfully at http://localhost:3000
- **Build System**: Verified production build works correctly

### Current Status
✅ **Milestone 1 Complete**: Basic setup tested and confirmed
🔄 **Next Phase**: Building UI components with MeBee brand styling

### Font Configuration Notes
- **Primary**: Articulat CF (will be added via CSS import later)
- **Current Fallback**: Inter, sans-serif
- **Issue Fixed**: Removed manual head tag that caused 500 error
- **Next Step**: Add Articulat CF font properly in CSS or through next/font

## Design Principles Reference

### Designer-Specific Guidelines (PRIORITY)

**Core Aesthetic**: "Minimal tech-luxe with an acid accent"
- Quiet, orderly layouts in cool greys and deep navy
- Typography does the heavy lifting, decoration is structural/geometric
- **Color Usage**: 70% neutrals, 25% sage surfaces, 5% neon accent
- **Neon Rule**: Acid yellow #F5FF00 only for surfaces/borders/plates, NEVER body text

**Layout Patterns from Designer**
- **Header**: Logo left, Menu center-left, search right
- **Hero Variants**: Neon flood OR framed (sage inset with neon border)
- **Grid**: 12-col, max width ~1280-1360px, wide gutters (80-120px desktop)
- **Spacing**: 96-144px between sections, 8pt grid system

**Visual Elements**
- **Liquid skins**: Marbled textures for depth (subtle, low contrast)
- **Honeycomb**: Thin hexagon grid, corner watermark only
- **Neon plates**: Oil-bubble texture blocks, balance layout top-right/bottom-left
- **Rule**: Only one "big effect" per viewport

### B2B SaaS Conversion Principles

**Above-the-fold Requirements**
- Value prop within first 50% viewport
- Primary CTA visible without scrolling
- F-pattern layout for eye movement
- Progressive information disclosure

**Component Design Standards**
- **Buttons**: Min 44px height, neon primary with navy text
- **Forms**: 2px borders, focus states with neon, progressive disclosure
- **Cards**: Subtle shadows, hover lifts, neon/sage variants for hierarchy
- **Typography**: 18px body desktop, 16px mobile, sentence-case headlines

**Technical Requirements**
- **Performance**: <3s load time, Lighthouse >90 mobile
- **Accessibility**: WCAG 2.1 AA, 4.5:1 contrast ratios
- **Animation**: 200-260ms ease-out, respect reduced motion
- **Responsive**: Breakpoints 1440/1200/1024/768/640px

### Implementation Checklist

**Pre-Launch Must-Haves**
- [ ] Mobile responsiveness across devices
- [ ] Acid yellow used only for accents (never text)
- [ ] 70/25/5 color ratio maintained
- [ ] Typography hierarchy with Articulat CF
- [ ] Honeycomb watermarks positioned correctly
- [ ] Page load under 3 seconds
- [ ] WCAG AA compliance verified

**Conversion Optimization**
- [ ] Value proposition above the fold
- [ ] Social proof near CTAs
- [ ] Progressive information architecture
- [ ] Mobile-first button sizing (44px min)
- [ ] Form field minimization
- [ ] Clear next-step expectations
