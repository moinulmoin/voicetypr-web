'use client';

import { useSyncExternalStore } from 'react';

export type OS = 'mac' | 'windows' | 'other';

/** Detect the visitor's OS from the user agent. Returns 'other' on the server. */
export function detectOs(): OS {
  if (typeof navigator === 'undefined') return 'other';
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes('windows') ? 'windows' : /mac|iphone|ipad/.test(ua) ? 'mac' : 'other';
}

const subscribe = () => () => {};

/**
 * Client-detected OS via useSyncExternalStore. Renders 'other' on the server and
 * for the first (hydration) client render, then resolves to the real OS — so it
 * never causes a hydration mismatch.
 */
export function useDetectedOs(): OS {
  return useSyncExternalStore(subscribe, detectOs, () => 'other');
}

/**
 * The `/download` href for a given OS. Detected platforms get an explicit
 * `?platform=` so the download page resolves the right build even if its
 * server UA detection is cached; unknown OS falls back to bare `/download`.
 */
export function downloadHrefForOs(os: OS): string {
  if (os === 'windows') return '/download?platform=windows';
  if (os === 'mac') return '/download?platform=macos-silicon';
  return '/download';
}
