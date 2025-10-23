"use client";

import { useEffect, useState } from "react";

type ConsentState = {
  necessary: true;
  marketing: boolean;
  timestamp: number;
};

const CONSENT_KEY = "voicetypr_consent";
const CONSENT_COOKIE = "vt_consent";

function readCookie(name: string) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
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

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = getConsent();
    if (!existing) setOpen(true);
    else setMarketing(!!(existing as any).marketing);
    // expose global opener for footer link
    (window as any).__openCookiePreferences = () => setPrefsOpen(true);
    return () => {
      if ((window as any).__openCookiePreferences) delete (window as any).__openCookiePreferences;
    };
  }, []);

  const acceptAll = () => {
    const state: ConsentState = { necessary: true, marketing: true, timestamp: Date.now() };
    setConsent(state);
    setOpen(false);
    setPrefsOpen(false);
  };

  const rejectNonEssential = () => {
    const state: ConsentState = { necessary: true, marketing: false, timestamp: Date.now() };
    setConsent(state);
    setOpen(false);
    setPrefsOpen(false);
  };

  const savePrefs = () => {
    const state: ConsentState = { necessary: true, marketing, timestamp: Date.now() };
    setConsent(state);
    setPrefsOpen(false);
    setOpen(false);
  };

  if (!open && !prefsOpen) return null;

  return (
    <div className="fixed z-50">
      {/* Backdrop for preferences */}
      {prefsOpen && <div className="fixed inset-0 bg-black/30" onClick={() => setPrefsOpen(false)} />}

      {/* Banner (bottom-right, compact) */}
      {open && (
        <div className="fixed bottom-4 right-4 max-w-sm w-[92vw] sm:w-96 rounded-xl border bg-background shadow-xl">
          <div className="p-3">
            <p className="text-sm text-muted-foreground">We use cookies to run the site; marketing cookies are optional.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground"
                onClick={acceptAll}
              >Accept all</button>
              <button
                className="inline-flex items-center rounded-md border px-3 py-2 text-sm"
                onClick={rejectNonEssential}
              >Reject</button>
              <button
                className="ml-auto inline-flex items-center rounded-md border px-3 py-2 text-sm"
                onClick={() => { setPrefsOpen(true); setOpen(false); }}
              >Manage</button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences modal */}
      {prefsOpen && (
        <div className="fixed inset-0 flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-xl border bg-background shadow-xl">
            <div className="p-4 md:p-5">
              <h2 className="text-lg font-semibold mb-2">Cookie preferences</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <input id="necessary" type="checkbox" checked readOnly className="mt-1" />
                  <label htmlFor="necessary">
                    <span className="font-medium">Necessary</span> — required for core site functionality.
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input id="marketing" type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-1" />
                  <label htmlFor="marketing">
                    <span className="font-medium">Marketing</span> — attribution/ads measurement (optional).
                  </label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Saving loads only the categories you allow. Change choices anytime from “Manage cookies” in the footer.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground" onClick={savePrefs}>Save</button>
                <button className="inline-flex items-center rounded-md border px-3 py-2 text-sm" onClick={() => setPrefsOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CookieConsent;
