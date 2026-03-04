"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  FLASH_OFFER_DURATION_MS,
  FLASH_OFFER_COOLDOWN_MS,
  FLASH_OFFER_ENABLED,
} from "@/lib/pricing";

/* ── localStorage keys ── */
const LS_KEY = "vt_flash_offer";
const LS_COOLDOWN_KEY = "vt_flash_cooldown";
const SEEN_PRICING_KEY = "vt_seen_pricing";

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
  } catch {
    // private mode or access denied
  }
}

function writeCooldown(cooldownEnd: number) {
  try {
    localStorage.setItem(LS_COOLDOWN_KEY, String(cooldownEnd));
  } catch {
    // quota exceeded / private mode
  }
}

function clearCooldown() {
  try {
    localStorage.removeItem(LS_COOLDOWN_KEY);
  } catch {
    // private mode or access denied
  }
}

function hasSeenPricingBefore(): boolean {
  try {
    return localStorage.getItem(SEEN_PRICING_KEY) === "1";
  } catch {
    return false;
  }
}

function markPricingSeen() {
  try {
    localStorage.setItem(SEEN_PRICING_KEY, "1");
  } catch {
    // private mode or access denied
  }
}

function isInCooldown(): boolean {
  try {
    const raw = localStorage.getItem(LS_COOLDOWN_KEY);
    if (!raw) return false;
    return Date.now() < Number(raw);
  } catch {
    return false;
  }
}

/** Simple touch-device heuristic (no hover + coarse pointer) */
function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
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
  // Initialise to server-safe defaults to avoid hydration mismatch.
  // The mount effect below reads localStorage and corrects these.
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const activatedRef = useRef(false); // prevent double-activation
  const hasSeenPricingRef = useRef(false); // user scrolled to pricing this session
  const wasVisibleRef = useRef(false); // for mobile scroll-past detection
  const isReturnVisitorRef = useRef(false); // has seen pricing in a prior session

  /* Start (or resume) the countdown */
  const startCountdown = useCallback((expiresAt: number) => {
    if (timerRef.current) clearInterval(timerRef.current);

    const tick = () => {
      const remaining = expiresAt - Date.now();
      if (remaining <= 0) {
        setIsActive(false);
        setTimeRemaining(0);
        clearStore(); // clean up expired offer from localStorage
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        return;
      }
      setTimeRemaining(remaining);
    };

    setIsActive(true);
    tick(); // immediate first tick — may override isActive to false if already expired
    timerRef.current = setInterval(tick, 1000);
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
    writeCooldown(offer.expiresAt + FLASH_OFFER_COOLDOWN_MS);
    setDismissed(false);
    startCountdown(offer.expiresAt);
  }, [startCountdown]);

  /* On mount: check for existing offer or set up trigger */
  useEffect(() => {
    if (!FLASH_OFFER_ENABLED) return;

    // Check if this is a return visitor (seen pricing before)
    isReturnVisitorRef.current = hasSeenPricingBefore();

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
      if (isInCooldown()) {
        // Still in cooldown — clear stale offer but preserve cooldown
        clearStore();
        return;
      }

      // Cooldown passed — allow re-activation
      clearStore();
      clearCooldown();
    }

    // No active offer and no cooldown → ready for triggers
    // (observer + exit-intent set up via pricingRef and effect below)
  }, [startCountdown]);

  /* Exit-intent listener (desktop only) */
  useEffect(() => {
    if (!FLASH_OFFER_ENABLED || isTouchDevice()) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when cursor leaves toward the top (browser chrome/tabs)
      if (e.clientY > 0) return;
      if (!hasSeenPricingRef.current || activatedRef.current) return;
      if (isInCooldown()) return;
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

  /* Cleanup interval on unmount */
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  /* Ref callback: observed element = pricing section.
   * NOTE: isInCooldown() is checked at setup time, not at each intersection.
   * If cooldown expires while the user is still on the page, they must reload
   * to become eligible — this is intentional to keep the observer logic simple.
   *
   * This ref is used on both Pricing.tsx and DownloadPageClient.tsx. In SPA
   * navigation the second mount tears down the first observer via disconnect(),
   * which is the correct behavior. */
  const pricingRef = useCallback(
    (node: HTMLElement | null) => {
      // Tear down previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
        wasVisibleRef.current = false;
      }

      if (!FLASH_OFFER_ENABLED || !node || activatedRef.current) return;
      if (isInCooldown()) return;

      const isMobile = isTouchDevice();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry) return;

          if (entry.isIntersecting) {
            // User is viewing pricing
            hasSeenPricingRef.current = true;
            markPricingSeen();
            wasVisibleRef.current = true;

            // Return visitors: activate immediately on seeing pricing
            // Read ref here (not at setup time) so the mount effect has run
            if (isReturnVisitorRef.current && !activatedRef.current) {
              activate();
              observerRef.current?.disconnect();
            }
          } else if (wasVisibleRef.current && isMobile) {
            // Mobile: activate when user scrolls PAST pricing
            if (!activatedRef.current) {
              activate();
              observerRef.current?.disconnect();
            }
          }
        },
        { threshold: 0.15 }
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
