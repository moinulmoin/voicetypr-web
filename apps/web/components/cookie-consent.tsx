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
    <div data-markdown-skip className="cookie-consent fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:right-4 sm:max-w-[21rem]">
      <div className="flex items-center gap-3 rounded-xl border border-brand-line bg-brand-surface px-3.5 py-2.5 shadow-sm">
        <p className="min-w-0 flex-1 text-[12.5px] leading-snug text-brand-ink-2">
          A few cookies help support Voicetypr through ads and affiliate links.{' '}
          <Link href="/cookies" className="text-brand-ink underline underline-offset-2">
            Cookie Policy
          </Link>
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-lg bg-brand-ink px-3 py-1.5 text-[12.5px] font-medium text-brand-surface transition-opacity hover:opacity-90 active:scale-95"
        >
          Okay
        </button>
      </div>
    </div>
  );
}
