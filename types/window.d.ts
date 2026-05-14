declare global {
  interface Window {
    affonso_referral?: string;
    affonsoConsentGranted?: () => Promise<boolean>;
    dataLayer: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
  }
}

export {};