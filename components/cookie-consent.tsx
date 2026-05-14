"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

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
    // Cookie access can throw in incognito/disabled cookies
    return null;
  }
}

function writeCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return;
  try {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  } catch {
    // Cookie write can throw (quota exceeded, disabled cookies)
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

export default function CookieConsent() {
  const [open, setOpen] = useState(() => {
    if (getConsent()) return false;
    return readCookie("vt_geo_requires_consent") !== "false";
  });

  useEffect(() => {
    if (open) return;

    const existing = getConsent();
    if (existing) return;

    const geoRequiresConsent = readCookie('vt_geo_requires_consent');

    if (geoRequiresConsent === 'false') {
      const state: ConsentState = {
        necessary: true,
        marketing: true,
        timestamp: Date.now()
      };
      setConsent(state);
    }
  }, [open]);

  if (!open) return null;

  const accept = () => {
    const state: ConsentState = { necessary: true, marketing: true, timestamp: Date.now() };
    setConsent(state);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 left-5 right-5 z-50 sm:left-auto sm:w-96">
      <div className="rounded-lg border border-editorial-line bg-editorial-surface shadow-xl">
        <div className="flex items-center gap-3 px-4 py-3.5">
          <p className="text-sm leading-relaxed text-editorial-ink-2">
            We use cookies to personalize content and metrics. Read our{" "}
            <Link
              href="/cookies"
              className="text-editorial-accent underline underline-offset-2 hover:text-editorial-accent-ink"
            >
              Cookie Policy
            </Link>
            .
          </p>
          <button
            type="button"
            onClick={accept}
            className="ml-auto inline-flex shrink-0 items-center justify-center rounded-md bg-editorial-ink px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-black active:scale-95"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
