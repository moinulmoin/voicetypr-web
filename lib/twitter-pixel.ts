// Twitter Pixel conversion tracking utilities
declare global {
  interface Window {
    twq: (action: string, eventId: string, params?: Record<string, unknown>) => void;
  }
}

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
};