"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  FLASH_OFFER_DURATION_MS,
  FLASH_OFFER_COOLDOWN_MS,
} from "@/lib/pricing";

/* ── localStorage keys ── */
const LS_KEY = "vt_flash_offer";

interface StoredOffer {
  /** Timestamp when the offer was activated */
  activatedAt: number;
  /** Timestamp when the offer expires */
  expiresAt: number;
  /** Whether the user explicitly dismissed the banner */
  dismissed: boolean;
}

export interface FlashOfferState {
  /** The offer countdown is live and banner should show */
  isActive: boolean;
  /** Milliseconds remaining on the countdown (0 when inactive) */
  timeRemaining: number;
  /** Human-readable "HH:MM:SS" string */
  formattedTime: string;
  /** Dismiss the banner (offer stays active for pricing cards) */
  dismissBanner: () => void;
  /** Whether the banner was dismissed (offer can still apply to prices) */
  isBannerDismissed: boolean;
  /** Trigger ref callback — attach to the pricing section element */
  pricingRef: (node: HTMLElement | null) => void;
}

/* ── helpers ── */

function readStore(): StoredOffer | null {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as StoredOffer) : null;
  } catch {
    return null;
  }
}

function writeStore(offer: StoredOffer) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(offer));
  } catch {
    // quota exceeded / private mode — silently ignore
  }
}

function clearStore() {
  try {
    localStorage.removeItem(LS_KEY);
  } catch {}
}

function formatCountdown(ms: number): string {
  if (ms <= 0) return "00:00:00";
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
}

/* ── hook ── */

export function useFlashOffer(): FlashOfferState {
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const activatedRef = useRef(false); // prevent double-activation

  /* Start (or resume) the countdown */
  const startCountdown = useCallback((expiresAt: number) => {
    const tick = () => {
      const remaining = expiresAt - Date.now();
      if (remaining <= 0) {
        setIsActive(false);
        setTimeRemaining(0);
        if (timerRef.current) clearInterval(timerRef.current);
        return;
      }
      setTimeRemaining(remaining);
    };

    tick(); // immediate first tick
    timerRef.current = setInterval(tick, 1000);
    setIsActive(true);
  }, []);

  /* Activate a new offer */
  const activate = useCallback(() => {
    if (activatedRef.current) return;
    activatedRef.current = true;

    const now = Date.now();
    const offer: StoredOffer = {
      activatedAt: now,
      expiresAt: now + FLASH_OFFER_DURATION_MS,
      dismissed: false,
    };
    writeStore(offer);
    setDismissed(false);
    startCountdown(offer.expiresAt);
  }, [startCountdown]);

  /* On mount: check for existing offer or set up trigger */
  useEffect(() => {
    const stored = readStore();

    if (stored) {
      const now = Date.now();
      const remaining = stored.expiresAt - now;

      if (remaining > 0) {
        // Offer is still live — resume countdown
        activatedRef.current = true;
        setDismissed(stored.dismissed);
        startCountdown(stored.expiresAt);
        return;
      }

      // Offer expired — check cooldown
      const cooldownEnd = stored.expiresAt + FLASH_OFFER_COOLDOWN_MS;
      if (now < cooldownEnd) {
        // Still in cooldown — do nothing, clear old data
        clearStore();
        return;
      }

      // Cooldown passed — allow re-activation
      clearStore();
    }

    // No active offer and no cooldown → ready for IntersectionObserver trigger
    // (observer is set up via pricingRef below)
  }, [startCountdown]);

  /* Cleanup interval on unmount */
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  /* Ref callback: observed element = pricing section */
  const pricingRef = useCallback(
    (node: HTMLElement | null) => {
      // Tear down previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (!node || activatedRef.current) return;

      // Also skip if still in cooldown
      const stored = readStore();
      if (stored) {
        const cooldownEnd = stored.expiresAt + FLASH_OFFER_COOLDOWN_MS;
        if (Date.now() < cooldownEnd) return;
      }

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            activate();
            observerRef.current?.disconnect();
          }
        },
        { threshold: 0.15 } // 15 % visible
      );

      observerRef.current.observe(node);
    },
    [activate]
  );

  /* Dismiss banner (offer stays active for pricing though) */
  const dismissBanner = useCallback(() => {
    setDismissed(true);
    const stored = readStore();
    if (stored) writeStore({ ...stored, dismissed: true });
  }, []);

  return {
    isActive,
    timeRemaining,
    formattedTime: formatCountdown(timeRemaining),
    dismissBanner,
    isBannerDismissed: dismissed,
    pricingRef,
  };
}
