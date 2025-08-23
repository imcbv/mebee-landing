export const env = {
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://mebee.com',
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || 'development',
  
  // Analytics
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  LINKEDIN_PARTNER_ID: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID,
  POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
  
  // Lead Generation
  HUBSPOT_PORTAL_ID: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
  HUBSPOT_FORM_ID: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID,
  HUBSPOT_API_KEY: process.env.HUBSPOT_API_KEY,
  CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/mebee/demo',
  CALENDLY_API_TOKEN: process.env.CALENDLY_API_TOKEN,
  
  // Feature Flags
  ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  ENABLE_DEMO_MODAL: process.env.NEXT_PUBLIC_ENABLE_DEMO_MODAL !== 'false',
  ENABLE_SCORECARD: process.env.NEXT_PUBLIC_ENABLE_SCORECARD === 'true',
  
  // Environment checks
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isClient: typeof window !== 'undefined',
} as const

// Type-safe environment variable access
export type Environment = typeof env