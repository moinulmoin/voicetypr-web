"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const DISMISS_KEY = "vt_locale_suggest_dismissed";

/**
 * Suggest-don't-redirect: on an English page, if the visitor's browser language
 * is Spanish and they haven't dismissed it, offer (not force) the /es version of
 * the SAME page. No auto-redirect — that's an SEO anti-pattern and a UX one.
 * The suggestion is intentionally written in the target language (Spanish).
 */
export function LocaleSuggestBanner() {
  const locale = useLocale();
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (locale !== "en") return; // only suggest when reading the English version
    try {
      if (localStorage.getItem(DISMISS_KEY)) return;
      const browser = (navigator.language || "").toLowerCase();
      if (browser.startsWith("es")) setShow(true);
    } catch {
      // localStorage unavailable (private mode) — just don't show it.
    }
  }, [locale]);

  if (!show) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-md items-center gap-3 rounded-xl border border-border bg-card/95 px-4 py-3 text-sm shadow-lg backdrop-blur sm:inset-x-auto sm:left-4">
      <span className="text-foreground">¿Prefieres ver Voicetypr en español?</span>
      <Link
        href={pathname}
        locale="es"
        onClick={dismiss}
        className="shrink-0 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        data-track="locale-suggest-accept"
      >
        Ver en español
      </Link>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Descartar"
        className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
        data-track="locale-suggest-dismiss"
      >
        ✕
      </button>
    </div>
  );
}
