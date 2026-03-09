"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { FLASH_OFFER_ENABLED } from "@/lib/pricing";
import {
  subscribe,
  getSnapshot,
  getServerSnapshot,
  activateOffer,
  dismissBanner as dismissBannerAction,
  hasSeenPricingBefore,
  markPricingSeen,
  formatCountdown,
} from "@/lib/flash-offer-store";

export interface FlashOfferState {
  isActive: boolean;
  timeRemaining: number;
  formattedTime: string;
  dismissBanner: () => void;
  isBannerDismissed: boolean;
  pricingRef: (node: HTMLElement | null) => void | (() => void);
}

function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

/* ── hook ── */

export function useFlashOffer(): FlashOfferState {
  const { isActive, timeRemaining, dismissed } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const hasSeenPricingRef = useRef(false);
  const wasVisibleRef = useRef(false);

  const activate = useCallback(() => {
    if (!FLASH_OFFER_ENABLED) return;
    activateOffer();
  }, []);

  // Exit-intent listener (desktop only)
  useEffect(() => {
    if (!FLASH_OFFER_ENABLED || isTouchDevice()) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY > 0) return;
      if (!hasSeenPricingRef.current || getSnapshot().isActive) return;
      activate();
    };

    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [activate]);

  /* Ref callback for the pricing section.
   * This ref is used on both Pricing.tsx and DownloadPageClient.tsx. In SPA
   * navigation React 19 calls the cleanup return when the ref detaches,
   * which disconnects the observer automatically. */
  const pricingRef = useCallback(
    (node: HTMLElement | null) => {
      if (!FLASH_OFFER_ENABLED || !node || getSnapshot().isActive) return;

      const isMobile = isTouchDevice();

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry) return;

          if (entry.isIntersecting) {
            hasSeenPricingRef.current = true;
            markPricingSeen();
            wasVisibleRef.current = true;

            if (hasSeenPricingBefore() && !getSnapshot().isActive) {
              activate();
              observer.disconnect();
            }
          } else if (wasVisibleRef.current && isMobile) {
            if (!getSnapshot().isActive) {
              activate();
              observer.disconnect();
            }
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(node);

      return () => {
        observer.disconnect();
        wasVisibleRef.current = false;
      };
    },
    [activate]
  );

  return {
    isActive,
    timeRemaining,
    formattedTime: formatCountdown(timeRemaining),
    dismissBanner: dismissBannerAction,
    isBannerDismissed: dismissed,
    pricingRef,
  };
}
