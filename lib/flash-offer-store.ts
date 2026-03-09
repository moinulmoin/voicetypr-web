import { FLASH_OFFER_DURATIONS_MS } from "@/lib/pricing";

/* ── localStorage keys ── */
export const LS_KEY = "vt_flash_offer";
export const LS_VISIT_KEY = "vt_flash_visit_count";
export const SEEN_PRICING_KEY = "vt_seen_pricing";

export interface StoredOffer {
  activatedAt: number;
  expiresAt: number;
  dismissed: boolean;
}

export interface FlashOfferSnapshot {
  isActive: boolean;
  timeRemaining: number;
  dismissed: boolean;
}

const INACTIVE: FlashOfferSnapshot = {
  isActive: false,
  timeRemaining: 0,
  dismissed: false,
};

/* ── internal state ── */

let snapshot: FlashOfferSnapshot = INACTIVE;
let timerId: ReturnType<typeof setInterval> | null = null;
const listeners = new Set<() => void>();

function notify() {
  for (const l of listeners) l();
}

/* ── localStorage helpers ── */

export function readStore(): StoredOffer | null {
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
    // quota exceeded / private mode
  }
}

function clearStore() {
  try {
    localStorage.removeItem(LS_KEY);
  } catch {
    // private mode or access denied
  }
}

export function readVisitCount(): number {
  try {
    return Number(localStorage.getItem(LS_VISIT_KEY)) || 0;
  } catch {
    return 0;
  }
}

export function writeVisitCount(count: number) {
  try {
    localStorage.setItem(LS_VISIT_KEY, String(count));
  } catch {
    // quota exceeded / private mode
  }
}

export function getDurationForVisit(visitCount: number): number {
  const idx = Math.min(visitCount, FLASH_OFFER_DURATIONS_MS.length - 1);
  return (
    FLASH_OFFER_DURATIONS_MS[idx] ??
    FLASH_OFFER_DURATIONS_MS[FLASH_OFFER_DURATIONS_MS.length - 1]!
  );
}

export function hasSeenPricingBefore(): boolean {
  try {
    return localStorage.getItem(SEEN_PRICING_KEY) === "1";
  } catch {
    return false;
  }
}

export function markPricingSeen() {
  try {
    localStorage.setItem(SEEN_PRICING_KEY, "1");
  } catch {
    // private mode or access denied
  }
}

/* ── timer ── */

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function startTimer(expiresAt: number) {
  stopTimer();
  timerId = setInterval(() => {
    const left = expiresAt - Date.now();
    if (left <= 0) {
      stopTimer();
      clearStore();
      snapshot = INACTIVE;
      notify();
      return;
    }
    snapshot = { ...snapshot, timeRemaining: left };
    notify();
  }, 1000);
}

function initFromStorage() {
  const stored = readStore();
  if (!stored) return;

  const left = stored.expiresAt - Date.now();
  if (left <= 0) {
    clearStore();
    return;
  }

  snapshot = {
    isActive: true,
    timeRemaining: left,
    dismissed: stored.dismissed,
  };
  startTimer(stored.expiresAt);
}

/* ── useSyncExternalStore contract ── */

export function subscribe(listener: () => void): () => void {
  const wasEmpty = listeners.size === 0;
  listeners.add(listener);
  if (wasEmpty) initFromStorage();
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) stopTimer();
  };
}

export function getSnapshot(): FlashOfferSnapshot {
  return snapshot;
}

export function getServerSnapshot(): FlashOfferSnapshot {
  return INACTIVE;
}

/* ── actions (called from event handlers) ── */

export function activateOffer(): void {
  if (snapshot.isActive) return;

  const visitCount = readVisitCount();
  const duration = getDurationForVisit(visitCount);
  const now = Date.now();
  const offer: StoredOffer = {
    activatedAt: now,
    expiresAt: now + duration,
    dismissed: false,
  };
  writeStore(offer);
  writeVisitCount(visitCount + 1);

  snapshot = {
    isActive: true,
    timeRemaining: duration,
    dismissed: false,
  };
  startTimer(offer.expiresAt);
  notify();
}

export function dismissBanner(): void {
  const stored = readStore();
  if (stored) writeStore({ ...stored, dismissed: true });
  snapshot = { ...snapshot, dismissed: true };
  notify();
}

/* ── pure helpers (also used in tests) ── */

export function createOffer(): StoredOffer {
  const visitCount = readVisitCount();
  const duration = getDurationForVisit(visitCount);
  const now = Date.now();
  const offer: StoredOffer = {
    activatedAt: now,
    expiresAt: now + duration,
    dismissed: false,
  };
  writeStore(offer);
  writeVisitCount(visitCount + 1);
  return offer;
}

export function resolveStoredOffer(): StoredOffer | null {
  const stored = readStore();
  if (!stored) return null;
  if (stored.expiresAt - Date.now() > 0) return stored;
  clearStore();
  return null;
}

export function formatCountdown(ms: number): string {
  if (ms <= 0) return "00:00:00";
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
}

/** Reset all module-level state. Test-only. */
export function _resetForTests(): void {
  stopTimer();
  snapshot = INACTIVE;
  listeners.clear();
}
