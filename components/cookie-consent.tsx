"use client";

import { useEffect, useState } from "react";

type ConsentState = {
  necessary: true;
  marketing: boolean;
  timestamp: number;
};

const CONSENT_COOKIE = "vt_consent";

function readCookie(name: string) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match && match[2] ? decodeURIComponent(match[2]) : null;
}

function writeCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const existing = getConsent();
    if (!existing) setOpen(true);
  }, []);

  if (!open) return null;

  const accept = () => {
    const state: ConsentState = { necessary: true, marketing: true, timestamp: Date.now() };
    setConsent(state);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-4 z-50 w-[80vw] max-w-sm">
      <div className="rounded-xl border bg-background shadow-xl">
        <div className="flex items-center gap-4 p-4">
          <p className="text-sm text-muted-foreground">
            We use cookies to personalize content and run ads. Read our {" "}
            <a href="/cookies" className="underline underline-offset-2 hover:text-foreground">Cookie Policy</a>.
          </p>
          <button
            onClick={accept}
            className="ml-auto inline-flex shrink-0 items-center justify-center rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
