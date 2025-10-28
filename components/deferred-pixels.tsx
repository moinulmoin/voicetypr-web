"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-WT5KZRJM";
const AFFONSO_SRC = "https://affonso.io/js/pixel.min.js";

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

    const loadPixels = () => {
      if (typeof window === "undefined") return;

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
    };

    const idleHandle = idleCallback(loadPixels);

    return () => {
      cancelIdle(idleHandle as number);
    };
  }, []);

  return null;
}
