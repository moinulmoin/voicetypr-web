import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import type { DiscoveryLink } from "@/lib/seo-discovery";
import {
  GEO_PAGES_LAST_UPDATED,
  getAllGeoSlugs,
  getGeoPage,
  type GeoPage,
} from "@/lib/geo-pages";
import { GEO_PAGE_ES } from "@/lib/geo-pages.es";

type RouteParams = { locale: string; country: string };

type PageProps = {
  params: Promise<RouteParams>;
};

// Unknown / removed country slugs 404 via notFound() in the page body below.
// locale is supplied by the parent [locale] segment; only the country dimension
// is enumerated here (Next cartesian-products them).
export async function generateStaticParams(): Promise<{ country: string }[]> {
  return getAllGeoSlugs().map((country) => ({ country }));
}

/**
 * Per-locale chrome strings for the geo template, fully interpolated against the
 * page so the JSX stays clean. en values reproduce the original hardcoded copy
 * verbatim, so English pages render byte-identically.
 */
function getGeoStrings(page: GeoPage, locale: string) {
  const c = page.country;
  if (locale === "es") {
    return {
      breadcrumbHome: "Voicetypr",
      breadcrumbSection: "Dictado por voz",
      breadcrumbCurrent: `Dictado por voz en ${c}`,
      metaOffline: "Sin conexión por defecto",
      metaPlatforms: "Mac + Windows",
      metaPayOnce: "Pago único",
      ctaTrial: "Empieza la prueba gratis de 3 días",
      ctaPricing: "Ver precios",
      privacyEyebrow: `Privacidad en ${c}`,
      privacyHeading: "Tu voz nunca sale de tu dispositivo",
      govEyebrow: "Ley aplicable",
      govHeading: `Pensado para las expectativas de privacidad de ${c}`,
      govBodyPre: `En ${c}, los datos personales se rigen por `,
      govBodyPost:
        ". La arquitectura local-first de Voicetypr está diseñada para ayudarte a cumplir esas expectativas; tú sigues siendo responsable como responsable del tratamiento.",
      regEyebrow: "Autoridad de control",
      regHeading: "Menos que explicarle al regulador",
      regBodyPre: "La supervisión corre a cargo de ",
      regBodyPost:
        ". Como el dictado principal mantiene tu audio en tu dispositivo, reduces la superficie de transferencia de datos que más se vigila.",
      langEyebrow: "Idiomas",
      langHeading: "Transcrito en el dispositivo, en tu idioma",
      langBody: `Whisper es multilingüe, así que los modelos locales manejan los idiomas que la gente realmente usa en ${c}, sin pasar por la nube para el dictado principal.`,
      fitEyebrow: "Por qué encaja",
      fitHeading: `Dictado privado que encaja con ${c}`,
      faqEyebrow: "Preguntas frecuentes",
      faqHeading: `Dictado por voz en ${c}, respondido`,
      finalHeadline: `Dictado por voz privado para ${c}`,
      finalSubtitle:
        "Prueba gratis de 3 días. Sin tarjeta. La transcripción local mantiene tu voz en tu dispositivo, en Mac y Windows.",
      finalPrimary: "Empieza la prueba gratis",
      finalSecondary: "Compra la licencia de por vida",
    };
  }
  return {
    breadcrumbHome: "Voicetypr",
    breadcrumbSection: "Voice typing",
    breadcrumbCurrent: `Voice typing in ${c}`,
    metaOffline: "Offline by default",
    metaPlatforms: "Mac + Windows",
    metaPayOnce: "Pay once",
    ctaTrial: "Start 3-day free trial",
    ctaPricing: "See pricing",
    privacyEyebrow: `Privacy in ${c}`,
    privacyHeading: "Your voice never leaves your device",
    govEyebrow: "Governing law",
    govHeading: `Built around ${page.demonym} privacy expectations`,
    govBodyPre: `Personal data in ${c} is governed by `,
    govBodyPost:
      ". Voicetypr's local-first architecture is designed to help you meet those expectations — you remain responsible as the data controller.",
    regEyebrow: "Regulator",
    regHeading: "Less to explain to the regulator",
    regBodyPre: "Oversight comes from ",
    regBodyPost:
      ". Because core dictation keeps your audio on your device, you cut down the data-transfer surface they scrutinise most.",
    langEyebrow: "Language support",
    langHeading: "Transcribed on-device, in your language",
    langBody: `Whisper is multilingual, so the local models handle the languages people actually work in across ${c} — no cloud round-trip required for core dictation.`,
    fitEyebrow: "Why it fits",
    fitHeading: `Private dictation that fits ${c}`,
    faqEyebrow: "FAQ",
    faqHeading: `Voice typing in ${c}, answered`,
    finalHeadline: `Private voice typing for ${c}`,
    finalSubtitle:
      "3-day free trial. No credit card. Local transcription keeps your voice on your device, across Mac and Windows.",
    finalPrimary: "Start free trial",
    finalSecondary: "Buy lifetime license",
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country, locale } = await params;
  const page = getGeoPage(country, locale);
  if (!page) return {};

  const enUrl = `https://voicetypr.com/voice-typing/${page.slug}`;
  const esUrl = `https://voicetypr.com/es/voice-typing/${page.slug}`;
  const url = locale === "es" ? esUrl : enUrl;
  // Only advertise the es alternate once its Spanish copy has shipped; otherwise
  // /es/<slug> is noindex English (proxy) and must not be cross-linked.
  const hasEs = Boolean(GEO_PAGE_ES[page.slug]);
  const languages = hasEs ? { en: enUrl, es: esUrl, "x-default": enUrl } : undefined;
  // Keep the in-page robots signal consistent with the proxy noindex gate.
  const indexable = locale !== "es" || hasEs;
  const keywords =
    locale === "es"
      ? [
          `dictado por voz ${page.country}`,
          `dictado ${page.country}`,
          `voz a texto ${page.country}`,
          "dictado sin conexión",
          "dictado por voz privado",
          "voz a texto local",
        ]
      : [
          `voice typing ${page.country}`,
          `dictation ${page.country}`,
          `${page.demonym} voice to text`,
          "offline dictation",
          "private voice typing",
          "local speech to text",
        ];
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords,
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      siteName: "Voicetypr",
      type: "article",
      images: [
        {
          url: "/voicetypr-og.png",
          width: 1200,
          height: 630,
          alt: page.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/voicetypr-og.png"],
      creator: "@moinulmoin",
    },
    robots: { index: indexable, follow: true },
    other: {
      "article:modified_time": `${GEO_PAGES_LAST_UPDATED}T00:00:00.000Z`,
      "og:updated_time": `${GEO_PAGES_LAST_UPDATED}T00:00:00.000Z`,
    },
  };
}

/**
 * Render a headline string that contains <em>...</em> markers as the v2
 * serif-italic accent.
 */
function HeadlineWithAccent({ text }: { text: string }) {
  const parts = text.split(/(<em>.*?<\/em>)/);
  return (
    <>
      {parts.map((part, i) => {
        const match = /^<em>(.*?)<\/em>$/.exec(part);
        if (match) {
          return (
            <em key={i} className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
              {match[1]}
            </em>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

const geoRelatedGuides: DiscoveryLink[] = [
  {
    href: "/voice-typing",
    eyebrow: "broader workflow",
    title: "Voice typing in every app",
    description: "The general pay-once dictation story before narrowing to a single country's privacy context.",
    ctaLabel: "See the general guide",
  },
  {
    href: "/zero-knowledge",
    eyebrow: "privacy architecture",
    title: "Zero-knowledge voice typing",
    description: "How local-first dictation keeps your voice on your device and off our servers.",
    ctaLabel: "Read about zero-knowledge",
  },
  {
    href: "/best/offline-dictation",
    eyebrow: "offline-first",
    title: "Best offline dictation",
    description: "A roundup for buyers who mainly care that transcription runs locally, no cloud required.",
    ctaLabel: "See the offline guide",
  },
];

export default async function VoiceTypingCountryPage({ params }: PageProps) {
  const { country, locale } = await params;
  const page = getGeoPage(country, locale);
  if (!page) notFound();

  return <GeoPageBody page={page} locale={locale} />;
}

function GeoPageBody({ page, locale }: { page: GeoPage; locale: string }) {
  const s = getGeoStrings(page, locale);
  const isEs = locale === "es";
  const homeHref = isEs ? "/es" : "/";
  const voiceTypingHref = isEs ? "/es/voice-typing" : "/voice-typing";
  const downloadHref = isEs ? "/es/download" : "/download";
  const pricingHref = isEs ? "/es#pricing" : "/#pricing";
  const baseUrl = isEs ? "https://voicetypr.com/es" : "https://voicetypr.com";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Voicetypr", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: s.breadcrumbSection, item: `${baseUrl}/voice-typing` },
      {
        "@type": "ListItem",
        position: 3,
        name: s.breadcrumbCurrent,
        item: `${baseUrl}/voice-typing/${page.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
        <SiteHeader />

        {/* Hero */}
        <Section className="pt-20 md:pt-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Link href={homeHref} className="transition-colors hover:text-foreground">
                  {s.breadcrumbHome}
                </Link>
                <span aria-hidden>/</span>
                <Link href={voiceTypingHref} className="transition-colors hover:text-foreground">
                  {s.breadcrumbSection}
                </Link>
                <span aria-hidden>/</span>
                <span>{page.country}</span>
              </div>

              <h1 className="font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-tight tracking-tight">
                <HeadlineWithAccent text={page.h1} />
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{page.intro}</p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>{s.metaOffline}</span>
                <span>{s.metaPlatforms}</span>
                <span>{s.metaPayOnce}</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={downloadHref}
                  className="inline-flex h-12 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-95"
                >
                  {s.ctaTrial}
                </Link>
                <Link
                  href={pricingHref}
                  className="inline-flex h-12 items-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted active:scale-95"
                >
                  {s.ctaPricing}
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* Local privacy angle */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-2 text-sm font-medium text-sage">{s.privacyEyebrow}</p>
                <h2 className={H2_CLASS}>{s.privacyHeading}</h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">{page.localAngle}</p>
            </div>
          </Container>
        </Section>

        {/* Privacy law + regulator cards */}
        <Section>
          <Container>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-muted p-6">
                <p className="text-sm font-medium text-sage">{s.govEyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                  {s.govHeading}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {s.govBodyPre}
                  {page.privacyLaw}
                  {s.govBodyPost}
                </p>
              </article>
              <article className="rounded-2xl border border-border bg-muted p-6">
                <p className="text-sm font-medium text-sage">{s.regEyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                  {s.regHeading}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {s.regBodyPre}
                  {page.regulator}
                  {s.regBodyPost}
                </p>
              </article>
            </div>
          </Container>
        </Section>

        {/* Language support */}
        <Section>
          <Container>
            <div className="mb-8 max-w-[760px]">
              <p className="mb-2 text-sm font-medium text-sage">{s.langEyebrow}</p>
              <h2 className={H2_CLASS}>{s.langHeading}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {s.langBody}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {page.languages.map((language) => (
                <span
                  key={language}
                  className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {language}
                </span>
              ))}
            </div>
          </Container>
        </Section>

        {/* Why it fits */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-2 text-sm font-medium text-sage">{s.fitEyebrow}</p>
                <h2 className={H2_CLASS}>{s.fitHeading}</h2>
              </div>
              <ul className="space-y-4">
                {page.bullets.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-sage" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        {/* FAQs */}
        <Section>
          <Container>
            <div className="mb-8 max-w-[760px]">
              <p className="mb-2 text-sm font-medium text-sage">{s.faqEyebrow}</p>
              <h2 className={H2_CLASS}>{s.faqHeading}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {page.faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">{faq.question}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{faq.answer}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Related Guides — targets are English-only pages, so render on en only. */}
        {!isEs ? (
          <Section>
            <Container>
              <RelatedGuidesSection
                eyebrow="Related guides"
                title="More on private, offline dictation"
                description="Compare the broader voice typing guide, the zero-knowledge architecture, and the offline-first roundup."
                links={geoRelatedGuides}
                dataTrackPrefix={`voice-typing-${page.slug}-related-guides`}
                embedded
              />
            </Container>
          </Section>
        ) : null}

        {/* Final CTA */}
        <FinalCTA
          headline={<>{s.finalHeadline}</>}
          subtitle={s.finalSubtitle}
          primaryHref={downloadHref}
          primaryLabel={s.finalPrimary}
          primaryDataTrack={`voice-typing-${page.slug}-final-cta-click`}
          secondaryHref={pricingHref}
          secondaryLabel={s.finalSecondary}
          headlineClassName="mx-auto mb-5 max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight"
          subtitleClassName="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-primary-foreground/75"
        />

        <SiteFooter />
      </main>
    </>
  );
}
