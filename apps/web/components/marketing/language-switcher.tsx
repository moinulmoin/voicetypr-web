"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<string, string> = { en: "EN", es: "ES" };

// Build a clean "as-needed" href: default locale has NO prefix (so no /en→/ redirect),
// other locales get a /<locale> prefix. `pathname` here is already locale-stripped.
function localeHref(locale: string, path: string): string {
  if (locale === routing.defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * EN · ES switcher. The current locale renders as plain text (no self-link), the
 * other as a clean link to the same page in that language.
 */
export function LanguageSwitcher() {
  const current = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1.5 text-xs" aria-label="Language">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1.5">
          {i > 0 ? <span aria-hidden className="text-muted-foreground/40">·</span> : null}
          {loc === current ? (
            <span className="font-semibold text-foreground" aria-current="true">
              {LABELS[loc] ?? loc.toUpperCase()}
            </span>
          ) : (
            <a
              href={localeHref(loc, pathname)}
              hrefLang={loc}
              className="text-muted-foreground transition-colors hover:text-foreground"
              data-track="footer-locale-switch"
              data-track-locale={loc}
            >
              {LABELS[loc] ?? loc.toUpperCase()}
            </a>
          )}
        </span>
      ))}
    </div>
  );
}
