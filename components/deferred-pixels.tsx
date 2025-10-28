"use client";

import { useEffect, useState } from "react";
import { getConsent } from "./cookie-consent";

const GTM_ID = "GTM-WT5KZRJM";
const AFFONSO_SRC = "https://affonso.io/js/pixel.min.js";

type IdleDeadline = {
  didTimeout: boolean;
  timeRemaining: () => number;
};

export function DeferredPixels() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;

    const idleCallback =
      typeof window.requestIdleCallback !== "undefined"
        ? window.requestIdleCallback
        : (cb: IdleRequestCallback) =>
            window.setTimeout(
              () => cb({ didTimeout: false, timeRemaining: () => 0 } as IdleDeadline),
              1500
            );

    const cancelIdle =
      typeof window.cancelIdleCallback !== "undefined"
        ? window.cancelIdleCallback
        : (handle: number) => window.clearTimeout(handle);

    const loadPixels = () => {
      if (typeof window === "undefined" || loaded) return;

      // Check consent before loading marketing pixels
      const consent = getConsent();
      if (!consent?.marketing) return;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

      const gtmScript = document.createElement("script");
      gtmScript.async = true;
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(gtmScript);

      const affonsoScript = document.createElement("script");
      affonsoScript.async = true;
      affonsoScript.src = AFFONSO_SRC;
      affonsoScript.dataset.affonso = "cmfl3j0cw001ogn7r874fqlxq";
      affonsoScript.dataset.cookie_duration = "30";
      document.head.appendChild(affonsoScript);

      setLoaded(true);
    };

    // Try to load on idle if consent already granted
    let idleHandle: number | undefined;
    const consent = getConsent();
    if (consent?.marketing) {
      idleHandle = idleCallback(loadPixels) as number;
    }

    // Listen for consent changes
    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail?.marketing && !loaded) {
        idleHandle = idleCallback(loadPixels) as number;
      }
    };

    window.addEventListener("voicetypr:consent-changed", handleConsentChange);

    return () => {
      if (idleHandle !== undefined) cancelIdle(idleHandle);
      window.removeEventListener("voicetypr:consent-changed", handleConsentChange);
    };
  }, [loaded]);

  return null;
}
