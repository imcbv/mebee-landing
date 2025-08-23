import { env } from './env'

declare global {
  interface Window {
    lintrk: (action: string, data?: unknown) => void
    _linkedin_data_partner_ids: string[]
  }
}

export interface LinkedInConversionEvent {
  conversion_id: number
  conversion_value?: number
  currency?: string
  custom_properties?: Record<string, string | number>
}

export interface LinkedInTrackingEvent {
  event_type: 'PageVisit' | 'Lead' | 'Contact' | 'Download' | 'Purchase'
  custom_data?: Record<string, unknown>
}

export class LinkedInInsight {
  private partnerId: string
  private isEnabled: boolean

  constructor() {
    this.partnerId = env.LINKEDIN_PARTNER_ID || ''
    this.isEnabled = env.ENABLE_ANALYTICS && !!this.partnerId
  }

  init(): void {
    if (!this.isEnabled || !env.isClient) return

    // Initialize LinkedIn tracking
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []
    window._linkedin_data_partner_ids.push(this.partnerId)

    // Load LinkedIn Insight Tag
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function(l) {
        if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
        window.lintrk.q=[]}
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })(window.lintrk);
    `
    document.head.appendChild(script)

    // Initialize tracking
    if (typeof window.lintrk === 'function') {
      window.lintrk('track', { event_type: 'PageVisit' })
    }

    console.log('LinkedIn Insight Tag initialized:', this.partnerId)
  }

  trackEvent(event: LinkedInTrackingEvent): void {
    if (!this.isEnabled || !env.isClient || typeof window.lintrk !== 'function') return

    window.lintrk('track', {
      event_type: event.event_type,
      ...event.custom_data
    })
  }

  trackConversion(event: LinkedInConversionEvent): void {
    if (!this.isEnabled || !env.isClient || typeof window.lintrk !== 'function') return

    window.lintrk('track', {
      conversion_id: event.conversion_id,
      conversion_value: event.conversion_value,
      currency: event.currency || 'USD',
      ...event.custom_properties
    })
  }

  // Predefined tracking methods for MeBee events
  trackDemoRequest(): void {
    this.trackEvent({
      event_type: 'Lead',
      custom_data: {
        lead_type: 'demo_request',
        source: 'landing_page'
      }
    })
  }

  trackFormSubmission(formType: string): void {
    this.trackEvent({
      event_type: 'Contact',
      custom_data: {
        form_type: formType,
        page: 'landing'
      }
    })
  }

  trackPageSection(sectionName: string): void {
    this.trackEvent({
      event_type: 'PageVisit',
      custom_data: {
        section: sectionName,
        page: 'landing'
      }
    })
  }
}

// Global LinkedIn Insight instance
export const linkedInInsight = new LinkedInInsight()

// React hook for LinkedIn tracking
export function useLinkedInInsight() {
  return {
    trackEvent: linkedInInsight.trackEvent.bind(linkedInInsight),
    trackConversion: linkedInInsight.trackConversion.bind(linkedInInsight),
    trackDemoRequest: linkedInInsight.trackDemoRequest.bind(linkedInInsight),
    trackFormSubmission: linkedInInsight.trackFormSubmission.bind(linkedInInsight),
    trackPageSection: linkedInInsight.trackPageSection.bind(linkedInInsight),
    isEnabled: linkedInInsight['isEnabled']
  }
}

// Initialize on client side
if (env.isClient && env.ENABLE_ANALYTICS) {
  linkedInInsight.init()
}