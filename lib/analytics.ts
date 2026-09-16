// Thin wrapper around gtag.js. Every function here is a safe no-op if gtag
// hasn't loaded (no GA4/Ads env vars configured — see app/GoogleTag.tsx),
// so call sites never need to guard for that themselves.
//
// Non-PII only: never pass name, email, phone, or free-text message content
// into an event parameter here.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function sendEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}

export function trackPhoneClick(location: string) {
  sendEvent('phone_click', { link_location: location })
}

export function trackEmailClick(location: string) {
  sendEvent('email_click', { link_location: location })
}

export function trackQuoteCtaClick(location: string) {
  sendEvent('quote_cta_click', { link_location: location })
}

// The primary conversion. Call this only after the lead has actually been
// written to Supabase — never on form open, submit-click, or the optimistic
// success UI alone.
export function trackGenerateLead(params: { city: string; project_type?: string }) {
  sendEvent('generate_lead', {
    form_name: 'quote_form',
    lead_type: 'quote_request',
    city: params.city,
    ...(params.project_type ? { project_type: params.project_type } : {}),
  })

  // Classic Google Ads conversion, independent of GA4↔Ads Key Event linking.
  // Only fires if both env vars are actually configured — no invented IDs.
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL
  if (conversionId && conversionLabel && typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
    })
  }
}
