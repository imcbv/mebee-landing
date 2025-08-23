import { env } from './env'

export interface HubSpotFormData {
  email: string
  firstName: string
  lastName: string
  company: string
  jobTitle?: string
  phone?: string
  message?: string
  leadSource?: string
}

export interface HubSpotFormResponse {
  success: boolean
  message: string
  errors?: string[]
}

export class HubSpotIntegration {
  private portalId: string
  private formId: string
  private apiKey?: string

  constructor() {
    this.portalId = env.HUBSPOT_PORTAL_ID || ''
    this.formId = env.HUBSPOT_FORM_ID || ''
    this.apiKey = env.HUBSPOT_API_KEY
  }

  async submitForm(data: HubSpotFormData): Promise<HubSpotFormResponse> {
    if (!this.portalId || !this.formId) {
      return {
        success: false,
        message: 'HubSpot configuration missing. Please contact support.',
        errors: ['Missing portal ID or form ID']
      }
    }

    try {
      const formData = this.transformFormData(data)
      
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${this.portalId}/${this.formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        }
      )

      if (response.ok) {
        return {
          success: true,
          message: 'Thank you! We\'ll be in touch within 24 hours to schedule your demo.'
        }
      } else {
        const errorData = await response.json().catch(() => ({}))
        return {
          success: false,
          message: 'Unable to submit form. Please try again or contact support.',
          errors: errorData.errors || ['Submission failed']
        }
      }
    } catch (error) {
      console.error('HubSpot form submission error:', error)
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.',
        errors: [error instanceof Error ? error.message : 'Unknown error']
      }
    }
  }

  private transformFormData(data: HubSpotFormData) {
    return {
      fields: [
        { name: 'email', value: data.email },
        { name: 'firstname', value: data.firstName },
        { name: 'lastname', value: data.lastName },
        { name: 'company', value: data.company },
        ...(data.jobTitle ? [{ name: 'jobtitle', value: data.jobTitle }] : []),
        ...(data.phone ? [{ name: 'phone', value: data.phone }] : []),
        ...(data.message ? [{ name: 'message', value: data.message }] : []),
        ...(data.leadSource ? [{ name: 'hs_lead_source', value: data.leadSource }] : []),
      ],
      context: {
        pageUri: env.isClient ? window.location.href : env.APP_URL,
        pageName: 'MeBee Landing Page',
        hutk: env.isClient ? this.getHubSpotCookie() : undefined
      }
    }
  }

  private getHubSpotCookie(): string | undefined {
    if (!env.isClient) return undefined
    
    const hubspotCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('hubspotutk='))
    
    return hubspotCookie ? hubspotCookie.split('=')[1] : undefined
  }

  // Static method for direct form submission without class instantiation
  static async submit(data: HubSpotFormData): Promise<HubSpotFormResponse> {
    const hubspot = new HubSpotIntegration()
    return hubspot.submitForm(data)
  }
}

// Hook for React components
export function useHubSpot() {
  const submit = async (data: HubSpotFormData) => {
    return HubSpotIntegration.submit(data)
  }

  return {
    submit,
    isConfigured: !!(env.HUBSPOT_PORTAL_ID && env.HUBSPOT_FORM_ID)
  }
}