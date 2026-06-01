"use client";
import Link from "next/link";

import { useEffect, useSyncExternalStore } from "react";

type ConsentState = {
  necessary: true;
  marketing: boolean;
  timestamp: number;
};

const CONSENT_COOKIE = "vt_consent";

function readCookie(name: string) {
  if (typeof document === "undefined") return null;
  try {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match && match[2] ? decodeURIComponent(match[2]) : null;
  } catch {
    return null;
  }
}

function writeCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return;
  try {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  } catch {
  }
}

export function getConsent(): ConsentState | null {
  try {
    const fromCookie = readCookie(CONSENT_COOKIE);
    if (fromCookie) return JSON.parse(fromCookie) as ConsentState;
  } catch {}
  return null;
}

function setConsent(state: ConsentState) {
  const payload = JSON.stringify(state);
  writeCookie(CONSENT_COOKIE, payload, 180);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("voicetypr:consent-changed", { detail: state }));
  }
}

function getBannerOpenSnapshot() {
  if (getConsent()) return false;
  return readCookie('vt_geo_requires_consent') !== 'false';
}

function getServerSnapshot() {
  return false;
}

function subscribeToConsentChanges(onStoreChange: () => void) {
  window.addEventListener('voicetypr:consent-changed', onStoreChange);
  return () => {
    window.removeEventListener('voicetypr:consent-changed', onStoreChange);
  };
}

export default function CookieConsent() {
  const open = useSyncExternalStore(
    subscribeToConsentChanges,
    getBannerOpenSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    const existing = getConsent();
    if (existing) return;

    const geoRequiresConsent = readCookie('vt_geo_requires_consent');

    if (geoRequiresConsent === 'false') {
      const state: ConsentState = {
        necessary: true,
        marketing: true,
        timestamp: Date.now(),
      };
      setConsent(state);
    }
  }, []);

  if (!open) return null;

  const accept = () => {
    const state: ConsentState = { necessary: true, marketing: true, timestamp: Date.now() };
    setConsent(state);
  };

  return (
    <div data-markdown-skip className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-5 sm:w-[25rem]">
      <div className="rounded-2xl border border-editorial-line bg-editorial-surface-2 px-4 py-4 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm leading-relaxed text-editorial-ink-2">
              We use cookies for attribution, marketing measurement, and consent state. Read our{' '}
              <Link
                href="/cookies"
                className="text-editorial-ink underline underline-offset-2 hover:text-editorial-ink-2"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={accept}
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-md bg-editorial-ink px-4 text-sm font-medium text-white transition-colors hover:bg-black active:scale-95"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
