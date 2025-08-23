import { env } from './env'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
  custom_parameters?: Record<string, unknown>
}

export interface ConversionEvent {
  event_name: 'generate_lead' | 'contact' | 'page_view' | 'demo_request' | 'form_submit'
  currency?: string
  value?: number
  items?: Array<{
    item_id: string
    item_name: string
    item_category: string
  }>
}

export class GoogleAnalytics {
  private measurementId: string
  private isEnabled: boolean

  constructor() {
    this.measurementId = env.GA_MEASUREMENT_ID || ''
    this.isEnabled = env.ENABLE_ANALYTICS && !!this.measurementId
  }

  init(): void {
    if (!this.isEnabled || !env.isClient) return

    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`
    document.head.appendChild(script1)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    window.gtag = function(...args: unknown[]) {
      window.dataLayer.push(args)
    }

    window.gtag('js', new Date())
    window.gtag('config', this.measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      cookie_flags: 'max-age=7200;secure;samesite=none'
    })

    console.log('Google Analytics 4 initialized:', this.measurementId)
  }

  trackEvent(event: AnalyticsEvent): void {
    if (!this.isEnabled || !env.isClient || typeof window.gtag !== 'function') return

    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters
    })
  }

  trackConversion(event: ConversionEvent): void {
    if (!this.isEnabled || !env.isClient || typeof window.gtag !== 'function') return

    window.gtag('event', event.event_name, {
      currency: event.currency || 'USD',
      value: event.value || 0,
      items: event.items || []
    })
  }

  trackPageView(title?: string, path?: string): void {
    if (!this.isEnabled || !env.isClient || typeof window.gtag !== 'function') return

    window.gtag('config', this.measurementId, {
      page_title: title || document.title,
      page_location: path ? `${window.location.origin}${path}` : window.location.href
    })
  }

  // Predefined event tracking methods
  trackDemoRequest(method: 'modal' | 'hero_cta' | 'section_cta' = 'modal'): void {
    this.trackConversion({
      event_name: 'generate_lead',
      value: 100
    })

    this.trackEvent({
      action: 'demo_request',
      category: 'lead_generation',
      label: method
    })
  }

  trackFormSubmit(formType: 'demo' | 'contact' | 'scorecard'): void {
    this.trackConversion({
      event_name: 'form_submit'
    })

    this.trackEvent({
      action: 'form_submit',
      category: 'engagement',
      label: formType
    })
  }

  trackSectionView(sectionName: string): void {
    this.trackEvent({
      action: 'section_view',
      category: 'page_engagement',
      label: sectionName
    })
  }

  trackButtonClick(buttonText: string, section: string): void {
    this.trackEvent({
      action: 'button_click',
      category: 'user_interaction',
      label: `${section}: ${buttonText}`
    })
  }
}

// Global analytics instance
export const analytics = new GoogleAnalytics()

// React hook for analytics
export function useAnalytics() {
  return {
    trackEvent: analytics.trackEvent.bind(analytics),
    trackConversion: analytics.trackConversion.bind(analytics),
    trackPageView: analytics.trackPageView.bind(analytics),
    trackDemoRequest: analytics.trackDemoRequest.bind(analytics),
    trackFormSubmit: analytics.trackFormSubmit.bind(analytics),
    trackSectionView: analytics.trackSectionView.bind(analytics),
    trackButtonClick: analytics.trackButtonClick.bind(analytics),
    isEnabled: analytics['isEnabled']
  }
}

// Initialize on client side
if (env.isClient && env.ENABLE_ANALYTICS) {
  analytics.init()
}