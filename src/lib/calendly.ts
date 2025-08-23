import { env } from './env'

interface CalendlyWidget {
  initInlineWidget: (config: CalendlyWidgetConfig) => void
  initPopupWidget: (config: CalendlyWidgetConfig) => void
  addEventListener: (event: string, callback: (event: CalendlyEvent) => void) => void
}

interface CalendlyWidgetConfig {
  url: string
  parentElement?: HTMLElement | null
  prefill?: {
    name?: string
    email?: string
    customAnswers?: Record<string, string>
  }
  utm?: Record<string, string>
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget
  }
}

export interface CalendlyConfig {
  url: string
  prefill?: {
    name?: string
    email?: string
    customAnswers?: Record<string, string>
  }
  utm?: {
    utmCampaign?: string
    utmSource?: string
    utmMedium?: string
    utmContent?: string
    utmTerm?: string
  }
}

export interface CalendlyEvent {
  type: 'profile_page_viewed' | 'date_and_time_selected' | 'event_type_viewed' | 'event_scheduled'
  data: {
    event?: {
      uri: string
      name: string
      start_time: string
      end_time: string
    }
    invitee?: {
      uri: string
      name: string
      email: string
    }
  }
}

export class CalendlyIntegration {
  private baseUrl: string

  constructor() {
    this.baseUrl = env.CALENDLY_URL || 'https://calendly.com/mebee/demo'
  }

  generateEmbedUrl(config?: Partial<CalendlyConfig>): string {
    const url = new URL(this.baseUrl)
    
    // Add prefill parameters
    if (config?.prefill) {
      if (config.prefill.name) {
        url.searchParams.set('name', config.prefill.name)
      }
      if (config.prefill.email) {
        url.searchParams.set('email', config.prefill.email)
      }
      
      // Custom answers for qualifying questions
      if (config.prefill.customAnswers) {
        Object.entries(config.prefill.customAnswers).forEach(([key, value]) => {
          url.searchParams.set(`a${key}`, value)
        })
      }
    }

    // Add UTM parameters for tracking
    if (config?.utm) {
      Object.entries(config.utm).forEach(([key, value]) => {
        if (value) {
          url.searchParams.set(key, value)
        }
      })
    }

    // Add default tracking parameters
    url.searchParams.set('utm_source', 'mebee_landing')
    url.searchParams.set('utm_medium', 'website')
    url.searchParams.set('utm_campaign', 'demo_request')

    return url.toString()
  }

  embedInline(
    elementId: string, 
    config?: Partial<CalendlyConfig>,
    onEventScheduled?: (event: CalendlyEvent) => void
  ): void {
    if (!env.isClient) return

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: this.generateEmbedUrl(config),
          parentElement: document.getElementById(elementId),
          prefill: config?.prefill || {},
          utm: config?.utm || {}
        })

        // Event tracking
        if (onEventScheduled) {
          window.Calendly.addEventListener('event_scheduled', onEventScheduled)
        }
      }
    }

    document.head.appendChild(script)
  }

  openPopup(
    config?: Partial<CalendlyConfig>,
    onEventScheduled?: (event: CalendlyEvent) => void
  ): void {
    if (!env.isClient) return

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url: this.generateEmbedUrl(config)
        })

        // Event tracking
        if (onEventScheduled) {
          window.Calendly.addEventListener('event_scheduled', onEventScheduled)
        }
      }
    }

    document.head.appendChild(script)
  }

  // Static methods for direct usage
  static embed(elementId: string, config?: Partial<CalendlyConfig>): void {
    const calendly = new CalendlyIntegration()
    calendly.embedInline(elementId, config)
  }

  static popup(config?: Partial<CalendlyConfig>): void {
    const calendly = new CalendlyIntegration()
    calendly.openPopup(config)
  }
}

// React hook for Calendly integration
export function useCalendly() {
  const openModal = (config?: Partial<CalendlyConfig>) => {
    CalendlyIntegration.popup(config)
  }

  const embedCalendly = (elementId: string, config?: Partial<CalendlyConfig>) => {
    CalendlyIntegration.embed(elementId, config)
  }

  return {
    openModal,
    embedCalendly,
    isConfigured: !!env.CALENDLY_URL
  }
}