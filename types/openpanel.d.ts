declare global {
  interface Window {
    openpanel?: {
      track: (eventName: string, data?: Record<string, unknown>) => void;
      identify: (params: {
        profileId: string;
        email?: string;
        firstName?: string;
        lastName?: string;
        properties?: Record<string, unknown>;
      }) => void;
      getDeviceId: () => string;
      revenue: (amount: number, properties?: Record<string, unknown>) => Promise<void>;
      pendingRevenue: (amount: number, properties?: Record<string, unknown>) => void;
      flushRevenue: () => Promise<void>;
      clearRevenue: () => void;
      setGlobalProperties: (properties: Record<string, unknown>) => void;
    };
  }
}

export {};
