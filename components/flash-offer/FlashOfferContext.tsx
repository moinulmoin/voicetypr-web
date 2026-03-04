"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { useFlashOffer, type FlashOfferState } from "@/hooks/useFlashOffer";

/** Stable values that only change when the offer activates/deactivates/dismisses */
interface FlashOfferStable {
  isActive: boolean;
  dismissBanner: () => void;
  isBannerDismissed: boolean;
  pricingRef: (node: HTMLElement | null) => void;
}

/** Volatile values that update every second during the countdown */
interface FlashOfferTimer {
  timeRemaining: number;
  formattedTime: string;
}

const StableCtx = createContext<FlashOfferStable | null>(null);
const TimerCtx = createContext<FlashOfferTimer | null>(null);

export function FlashOfferProvider({ children }: { children: ReactNode }) {
  const offer = useFlashOffer();

  // Stable context only changes when these specific values change,
  // avoiding 1s re-renders for consumers that don't need the timer.
  const stable = useMemo<FlashOfferStable>(
    () => ({
      isActive: offer.isActive,
      dismissBanner: offer.dismissBanner,
      isBannerDismissed: offer.isBannerDismissed,
      pricingRef: offer.pricingRef,
    }),
    [offer.isActive, offer.dismissBanner, offer.isBannerDismissed, offer.pricingRef]
  );

  const timer = useMemo<FlashOfferTimer>(
    () => ({
      timeRemaining: offer.timeRemaining,
      formattedTime: offer.formattedTime,
    }),
    [offer.timeRemaining, offer.formattedTime]
  );

  return (
    <StableCtx.Provider value={stable}>
      <TimerCtx.Provider value={timer}>{children}</TimerCtx.Provider>
    </StableCtx.Provider>
  );
}

/**
 * Full context (stable + timer). Use this when you need formattedTime/timeRemaining.
 * Components using this will re-render every second while the countdown is active.
 */
export function useFlashOfferContext(): FlashOfferState {
  const stable = useContext(StableCtx);
  const timer = useContext(TimerCtx);
  if (!stable || !timer) {
    throw new Error("useFlashOfferContext must be used within <FlashOfferProvider>");
  }
  return { ...stable, ...timer };
}

/**
 * Stable-only context. Use this when you only need isActive, pricingRef, etc.
 * Components using this will NOT re-render every second.
 */
export function useFlashOfferStable(): FlashOfferStable {
  const ctx = useContext(StableCtx);
  if (!ctx) {
    throw new Error("useFlashOfferStable must be used within <FlashOfferProvider>");
  }
  return ctx;
}
