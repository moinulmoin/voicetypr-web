"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import { useFlashOffer, type FlashOfferState } from "@/hooks/useFlashOffer";

const FlashOfferCtx = createContext<FlashOfferState | null>(null);

export function FlashOfferProvider({ children }: { children: ReactNode }) {
  const offer = useFlashOffer();
  return (
    <FlashOfferCtx.Provider value={offer}>{children}</FlashOfferCtx.Provider>
  );
}

export function useFlashOfferContext(): FlashOfferState {
  const ctx = useContext(FlashOfferCtx);
  if (!ctx) {
    throw new Error("useFlashOfferContext must be used within <FlashOfferProvider>");
  }
  return ctx;
}
