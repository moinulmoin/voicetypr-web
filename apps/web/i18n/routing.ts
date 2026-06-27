import { defineRouting } from "next-intl/routing";

/**
 * i18n routing config.
 *
 * `localePrefix: "as-needed"` keeps the default locale (English) at the root with
 * NO prefix — so every existing ranking URL (/use-cases/x, /best/x, /voice-typing/x)
 * stays byte-for-byte identical. Other locales get a prefix (/es/...).
 */
export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type AppLocale = (typeof routing.locales)[number];
