// Conversion tracking utilities for GTM and direct pixels
declare global {
  interface Window {
    twq: (action: string, eventId: string, params?: Record<string, unknown>) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}

// Push events to Google Tag Manager dataLayer
export const trackGTMEvent = (eventType: 'download' | 'purchase', value?: number) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    try {
      window.dataLayer.push({
        event: eventType === 'purchase' ? 'purchase' : 'generate_lead',
        value: value || 0,
        currency: value ? 'USD' : undefined,
        conversion_type: eventType
      });
    } catch (error) {
      console.error('GTM tracking error:', error);
    }
  }
};

// Direct Twitter pixel tracking (can be used as fallback or in addition to GTM)
export const trackTwitterConversion = (eventType: 'download' | 'purchase', value?: number) => {
  if (typeof window !== 'undefined' && window.twq) {
    try {
      // Using the event ID from the provided code
      window.twq('event', 'tw-q7p7w-q9s5y', {
        value: value || null,
        conversion_id: eventType,
        event_id: `${eventType}_${Date.now()}`
      });
    } catch (error) {
      console.error('Twitter pixel tracking error:', error);
    }
  }
  
  // Also push to GTM
  trackGTMEvent(eventType, value);
};