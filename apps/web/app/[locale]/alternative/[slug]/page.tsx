import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import { getRelatedGuidesForSeoSlug } from "@/lib/seo-discovery";
import {
  getAlternativePageBySlug,
  alternativePages,
} from "@/lib/seo-pages";
import { ALTERNATIVE_PAGE_ES } from "@/lib/seo-pages.es";

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function isOfflineYes(value: string): boolean {
  return value.startsWith("Yes") || value.startsWith("Sí");
}

/** Per-locale chrome strings; en reproduces the original copy verbatim. */
function getAltStrings(locale: string) {
  if (locale === "es") {
    return {
      breadcrumbAlt: "Alternativa",
      replacementPath: "La ruta de reemplazo",
      tableCaption: "Comparativa de herramientas para cambiar desde la opción actual",
      thTool: "Herramienta",
      thPrice: "Precio",
      thPlatforms: "Plataformas",
      thOffline: "Sin conexión",
      subscription: "Suscripción",
      whatGetsBetter: "Qué mejora cuando cambias",
      chooseVtIf: "Elige Voicetypr si",
      stayIncumbentIf: "Quédate con la opción actual si",
      quickNotes: "Notas rápidas de comparación",
      ctaSubtitle: "Prueba gratis de 3 días. Sin tarjeta. Todas las funciones incluidas.",
      ctaPrimary: "Empieza la prueba gratis",
      ctaSecondary: "Ver precio de por vida",
    };
  }
  return {
    breadcrumbAlt: "Alternative",
    replacementPath: "The replacement path",
    tableCaption: "Comparison of tools for switching from the incumbent",
    thTool: "Tool",
    thPrice: "Price",
    thPlatforms: "Platforms",
    thOffline: "Offline",
    subscription: "Subscription",
    whatGetsBetter: "What gets better after you switch",
    chooseVtIf: "Choose Voicetypr if",
    stayIncumbentIf: "Stay with the incumbent if",
    quickNotes: "Quick comparison notes",
    ctaSubtitle: "3-day free trial. No credit card. All features included.",
    ctaPrimary: "Start free trial",
    ctaSecondary: "View lifetime pricing",
  };
}

export async function generateStaticParams() {
  return alternativePages.map((p) => ({ slug: p.slug }));
}

const duplicateCanonicalBySlug: Record<string, string> = {
  "superwhisper": "https://voicetypr.com/superwhisper-alternative",
  "wispr-flow": "https://voicetypr.com/wispr-flow-alternative",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const page = getAlternativePageBySlug(slug, locale);
  if (!page) return {};
  const isEs = locale === "es";
  const duplicateCanonical = duplicateCanonicalBySlug[slug];
  // Translatable only when a Spanish entry exists AND it isn't a noindex duplicate.
  const hasEs = Boolean(ALTERNATIVE_PAGE_ES[slug]) && !duplicateCanonical;
  const enCanonical = duplicateCanonical ?? `https://voicetypr.com/alternative/${slug}`;
  const esCanonical = `https://voicetypr.com/es/alternative/${slug}`;
  const canonical = isEs && hasEs ? esCanonical : enCanonical;
  const languages = hasEs
    ? { en: `https://voicetypr.com/alternative/${slug}`, es: esCanonical, "x-default": `https://voicetypr.com/alternative/${slug}` }
    : undefined;
  const title = `${page.h1} — Voicetypr`;
  // duplicate slugs stay noindex everywhere; otherwise /es indexes only when translated.
  const robots = duplicateCanonical
    ? { index: false, follow: true }
    : isEs
      ? { index: hasEs, follow: true }
      : undefined;
  return {
    title,
    description: page.lede,
    alternates: {
      canonical,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title,
      description: page.lede,
      url: canonical,
      siteName: "Voicetypr",
      images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.lede,
      images: ["/voicetypr-og.png"],
    },
    ...(robots ? { robots } : {}),
  };
}

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

export default async function AlternativePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug, locale } = await params;
  const page = getAlternativePageBySlug(slug, locale);
  if (!page) return notFound();
  const relatedGuides = getRelatedGuidesForSeoSlug(slug);
  const t = getAltStrings(locale);
  const isEs = locale === "es";
  const homeHref = isEs ? "/es" : "/";
  const downloadHref = isEs ? "/es/download" : "/download";
  const pricingHref = isEs ? "/es#pricing" : "/#pricing";
  const base = isEs ? "https://voicetypr.com/es" : "https://voicetypr.com";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Voicetypr", item: `${base}/` },
      { "@type": "ListItem", position: 2, name: page.h1, item: `${base}/alternative/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
        <SiteHeader />

        {/* Hero */}
        <Section className="pt-20 md:pt-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
                <Link href={homeHref} className="transition-colors hover:text-foreground">
                  Voicetypr
                </Link>
                <span aria-hidden>/</span>
                <span>{t.breadcrumbAlt}</span>
              </div>

              <header>
                <h1 className="text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[1.03] tracking-tight">
                  {page.h1}
                </h1>
                <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                  {page.lede}
                </p>
              </header>
            </div>
          </Container>
        </Section>

        {/* Comparison table */}
        <Section>
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className={H2_CLASS}>{t.replacementPath}</h2>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
                <div className="overflow-x-auto p-1.5">
                  <table className="w-full text-left">
                    <caption className="sr-only">
                      {t.tableCaption}
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium text-muted-foreground">
                          {t.thTool}
                        </th>
                        <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium text-muted-foreground">
                          {t.thPrice}
                        </th>
                        <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium text-muted-foreground">
                          {t.thPlatforms}
                        </th>
                        <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium text-muted-foreground">
                          {t.thOffline}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {page.competitors.map((comp) => {
                        const isVoicetypr = comp.name === "Voicetypr";
                        return (
                          <tr
                            key={comp.name}
                            className={isVoicetypr ? "bg-sage-bg" : "bg-card"}
                          >
                            <td className="px-3 py-3 pr-4 align-top">
                              <div className="flex items-center gap-2">
                                <span className={`text-[15px] font-medium ${isVoicetypr ? "text-sage" : "text-foreground"}`}>
                                  {comp.name}
                                </span>
                                {comp.subscription && (
                                  <span className="text-[11px] uppercase tracking-wide text-muted-foreground">
                                    {t.subscription}
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="px-3 py-3 pr-4 text-sm text-muted-foreground">
                              {comp.price}
                            </td>
                            <td className="px-3 py-3 pr-4 text-sm text-muted-foreground">
                              {comp.platforms}
                            </td>
                            <td className="px-3 py-3 text-sm">
                              <span className={isOfflineYes(comp.offline) ? "font-medium text-foreground" : "text-muted-foreground"}>
                                {comp.offline}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Why switch */}
        <Section>
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className={H2_CLASS}>{t.whatGetsBetter}</h2>
              <ul className="mt-8 space-y-4">
                {page.whySwitch.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        {/* Switch guide */}
        {page.switchGuide ? (
          <Section>
            <Container>
              <div className="mx-auto max-w-3xl space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">
                      {t.chooseVtIf}
                    </h2>
                    <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
                      {page.switchGuide.voiceTyprIf.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">
                      {t.stayIncumbentIf}
                    </h2>
                    <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
                      {page.switchGuide.otherIf.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {page.switchGuide.notes && page.switchGuide.notes.length > 0 ? (
                  <div className="rounded-2xl bg-muted p-6 md:p-8">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">
                      {t.quickNotes}
                    </h2>
                    <div className="mt-5 grid gap-6 md:grid-cols-2">
                      {page.switchGuide.notes.map((note) => (
                        <article key={note.title}>
                          <h3 className="text-[15px] font-semibold text-foreground">{note.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note.body}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </Container>
          </Section>
        ) : null}

        {/* Related guides point to English-only pages — English locale only. */}
        {!isEs && relatedGuides.length > 0 ? (
          <Section>
            <Container>
              <RelatedGuidesSection
                eyebrow="open the adjacent query too"
                title="Related guides people usually compare next"
                description="Most people compare more than one tool. These pages cover the next question you'll probably have."
                links={relatedGuides}
                dataTrackPrefix="alternative-related-guides"
                embedded
              />
            </Container>
          </Section>
        ) : null}

        {/* Final CTA */}
        <FinalCTA
          headline={page.ctaText}
          subtitle={t.ctaSubtitle}
          primaryHref={downloadHref}
          primaryLabel={t.ctaPrimary}
          secondaryHref={pricingHref}
          secondaryLabel={t.ctaSecondary}
        />

        <SiteFooter />
      </main>
    </>
  );
}
