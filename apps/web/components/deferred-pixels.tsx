"use client";

import { useEffect } from "react";
import { getConsent } from "./cookie-consent";

const GTM_ID = "GTM-WT5KZRJM";
const AFFONSO_SRC = "/r/pixel.js";
const AFFONSO_PROGRAM_ID = "cmfl3j0cw001ogn7r874fqlxq";

type IdleDeadline = {
  didTimeout: boolean;
  timeRemaining: () => number;
};

export function DeferredPixels() {
  useEffect(() => {
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

    const ensureGoogleTag = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag =
        window.gtag ||
        ((...args: unknown[]) => {
          window.dataLayer.push(args);
        });
      return window.gtag;
    };

    const updateGoogleConsent = (marketing: boolean) => {
      const gtag = ensureGoogleTag();
      gtag("consent", "update", {
        ad_storage: marketing ? "granted" : "denied",
        ad_user_data: marketing ? "granted" : "denied",
        ad_personalization: marketing ? "granted" : "denied",
        analytics_storage: marketing ? "granted" : "denied",
      });
    };

    const grantAffonsoConsent = () => {
      void window.affonsoConsentGranted?.();
    };

    let marketingAllowed = Boolean(getConsent()?.marketing);
    let idleHandle: number | null = null;

    const loadAffonso = () => {
      if (document.querySelector('script[data-voicetypr-affonso="true"]')) {
        if (marketingAllowed) grantAffonsoConsent();
        return;
      }

      const affonsoScript = document.createElement("script");
      affonsoScript.async = true;
      affonsoScript.defer = true;
      affonsoScript.src = AFFONSO_SRC;
      affonsoScript.dataset.affonso = AFFONSO_PROGRAM_ID;
      affonsoScript.dataset.apiBase = "/r";
      affonsoScript.dataset.cookie_duration = "30";
      affonsoScript.dataset.requiresConsent = "true";
      affonsoScript.dataset.voicetyprAffonso = "true";
      affonsoScript.addEventListener(
        "load",
        () => {
          if (marketingAllowed) grantAffonsoConsent();
        },
        { once: true }
      );
      document.head.appendChild(affonsoScript);
    };

    const loadGtm = () => {
      ensureGoogleTag();

      if (document.querySelector('script[data-voicetypr-gtm="true"]')) {
        if (marketingAllowed) updateGoogleConsent(true);
        return;
      }

      const gtag = ensureGoogleTag();
      gtag("consent", "default", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
      if (marketingAllowed) updateGoogleConsent(true);

      window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

      const gtmScript = document.createElement("script");
      gtmScript.async = true;
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      gtmScript.dataset.voicetyprGtm = "true";
      document.head.appendChild(gtmScript);
    };

    const loadConsentAwarePixels = () => {
      loadAffonso();
      loadGtm();

      if (marketingAllowed) {
        grantAffonsoConsent();
      }
    };

    const scheduleLoad = () => {
      if (!marketingAllowed) return;
      if (idleHandle !== null) cancelIdle(idleHandle);
      idleHandle = idleCallback(loadConsentAwarePixels) as number;
    };

    scheduleLoad();

    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail?.marketing) {
        marketingAllowed = true;
        scheduleLoad();
      }
    };

    window.addEventListener("voicetypr:consent-changed", handleConsentChange);

    return () => {
      if (idleHandle !== null) cancelIdle(idleHandle);
      window.removeEventListener("voicetypr:consent-changed", handleConsentChange);
    };
  }, []);

  return null;
}
