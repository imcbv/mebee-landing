import { env } from './env'

declare global {
  interface Window {
    posthog: {
      capture: (event: string, properties?: Record<string, unknown>) => void
      identify: (userId: string, properties?: Record<string, unknown>) => void
      people: {
        set: (properties: Record<string, unknown>) => void
      }
      init: (apiKey: string, config: Record<string, unknown>) => void
    }
  }
}

export interface PostHogEvent {
  event: string
  properties?: Record<string, unknown>
  timestamp?: Date
}

export interface PostHogUserProperties extends Record<string, unknown> {
  email?: string
  name?: string
  company?: string
  job_title?: string
  lead_source?: string
  utm_campaign?: string
  utm_source?: string
  utm_medium?: string
}

export class PostHogAnalytics {
  private apiKey: string
  private host: string
  private isEnabled: boolean

  constructor() {
    this.apiKey = env.POSTHOG_KEY || ''
    this.host = env.POSTHOG_HOST || 'https://app.posthog.com'
    this.isEnabled = env.ENABLE_ANALYTICS && !!this.apiKey
  }

  init(): void {
    if (!this.isEnabled || !env.isClient) return

    // Load PostHog script
    const script = document.createElement('script')
    script.innerHTML = `
      !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]);t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    `
    document.head.appendChild(script)

    // Initialize PostHog
    if (window.posthog) {
      window.posthog.init(this.apiKey, {
        api_host: this.host,
        person_profiles: 'identified_only',
        capture_pageview: true,
        capture_pageleave: true,
        property_blacklist: ['$ip'], // Privacy compliance
        sanitize_properties: function(properties: Record<string, unknown>): Record<string, unknown> {
          // Remove any sensitive data
          if (properties['$email']) delete properties['$email']
          if (properties['$phone']) delete properties['$phone']
          return properties
        }
      })
    }

    console.log('PostHog analytics initialized:', this.apiKey.substring(0, 8) + '...')
  }

  capture(event: string, properties?: Record<string, unknown>): void {
    if (!this.isEnabled || !env.isClient || !window.posthog) return

    window.posthog.capture(event, {
      ...properties,
      timestamp: new Date().toISOString(),
      page: 'landing'
    })
  }

  identify(userId: string, properties?: PostHogUserProperties): void {
    if (!this.isEnabled || !env.isClient || !window.posthog) return

    window.posthog.identify(userId, properties)
  }

  setUserProperties(properties: PostHogUserProperties): void {
    if (!this.isEnabled || !env.isClient || !window.posthog) return

    window.posthog.people.set(properties)
  }

  // Predefined tracking methods for MeBee events
  trackDemoRequest(method: 'modal' | 'hero_cta' | 'section_cta' = 'modal'): void {
    this.capture('demo_requested', {
      method,
      section: 'landing_page',
      conversion_type: 'lead'
    })
  }

  trackFormSubmission(formType: 'demo' | 'contact' | 'scorecard', formData?: { company?: string; jobTitle?: string }): void {
    this.capture('form_submitted', {
      form_type: formType,
      form_location: 'landing_page',
      has_company: !!formData?.company,
      has_job_title: !!formData?.jobTitle
    })
  }

  trackSectionEngagement(sectionName: string, timeSpent?: number): void {
    this.capture('section_engaged', {
      section: sectionName,
      time_spent_seconds: timeSpent,
      page: 'landing'
    })
  }

  trackButtonClick(buttonText: string, section: string): void {
    this.capture('button_clicked', {
      button_text: buttonText,
      section,
      page: 'landing'
    })
  }

  trackPageView(path?: string): void {
    if (!this.isEnabled || !env.isClient || !window.posthog) return

    window.posthog.capture('$pageview', {
      $current_url: path || window.location.href,
      page_type: 'landing',
      referrer: document.referrer
    })
  }

  trackScrollDepth(percentage: number): void {
    this.capture('scroll_depth', {
      percentage,
      page: 'landing'
    })
  }
}

// Global PostHog instance
export const posthog = new PostHogAnalytics()

// React hook for PostHog
export function usePostHog() {
  return {
    capture: posthog.capture.bind(posthog),
    identify: posthog.identify.bind(posthog),
    setUserProperties: posthog.setUserProperties.bind(posthog),
    trackDemoRequest: posthog.trackDemoRequest.bind(posthog),
    trackFormSubmission: posthog.trackFormSubmission.bind(posthog),
    trackSectionEngagement: posthog.trackSectionEngagement.bind(posthog),
    trackButtonClick: posthog.trackButtonClick.bind(posthog),
    trackPageView: posthog.trackPageView.bind(posthog),
    trackScrollDepth: posthog.trackScrollDepth.bind(posthog),
    isEnabled: posthog['isEnabled']
  }
}

// Initialize on client side
if (env.isClient && env.ENABLE_ANALYTICS) {
  posthog.init()
}