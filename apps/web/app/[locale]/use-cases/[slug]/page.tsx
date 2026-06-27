import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import { getContextualUseCaseLinks, getRelatedGuidesForUseCase } from "@/lib/seo-discovery";
import {
  USE_CASE_PAGES_LAST_UPDATED,
  getAllUseCaseSlugs,
  getUseCase,
  type UseCase,
} from "@/lib/use-cases";
import { USE_CASE_ES } from "@/lib/use-cases.es";

type RouteParams = { locale: string; slug: string };

/**
 * UI chrome strings for the use-case template, per locale. The data-driven
 * content (hero/pains/outcomes/…) comes from the localized UseCase; these are
 * the surrounding headings, buttons and boilerplate. en values are byte-identical
 * to the original hardcoded copy so English pages are unchanged.
 */
const UI_STRINGS = {
  en: {
    backToAll: "All use cases",
    startTrial: "Start 3-day free trial",
    seePricing: "See pricing",
    lastUpdated: "Last updated",
    painsHeading: "The friction is real, and specific",
    outcomesHeading: "The shape of the day, different",
    workflowsHeading: "Three workflows where it shows up",
    nearbyWorkflows: "Nearby workflows:",
    nearbyAnd: " and ",
    nearbyFor: "for",
    faqHeadingPre: "The honest",
    faqHeadingPost: "FAQ",
    faqIntro: "Pulled from real conversations with people who use Voicetypr for this exact reason.",
    faqNotAnswered: "Not answered here?",
    faqEmail: "Email support",
    medicalDisclaimer:
      "Voicetypr is productivity software, not medical software. It can help reduce typing load, but it does not diagnose, treat, or prevent any condition. Follow medical and ergonomic guidance for your own situation.",
    relatedEyebrow: "related pages",
    relatedTitle: "If this is your problem, these pages usually matter too",
    relatedDescription:
      "You might be comparing Windows tools, looking for a Dragon alternative, or trying to reduce typing load for a specific reason. These pages keep the path clear.",
    finalDownload: "Download Voicetypr",
    finalBuy: "Buy lifetime license",
  },
  es: {
    backToAll: "Todos los casos de uso",
    startTrial: "Empieza la prueba gratis de 3 días",
    seePricing: "Ver precios",
    lastUpdated: "Última actualización",
    painsHeading: "La fricción es real, y concreta",
    outcomesHeading: "La forma del día, distinta",
    workflowsHeading: "Tres flujos donde se nota",
    nearbyWorkflows: "Flujos cercanos:",
    nearbyAnd: " y ",
    nearbyFor: "para",
    faqHeadingPre: "Preguntas sinceras sobre",
    faqHeadingPost: "",
    faqIntro: "Sacadas de conversaciones reales con personas que usan Voicetypr justo por este motivo.",
    faqNotAnswered: "¿No está aquí tu respuesta?",
    faqEmail: "Escribe a soporte",
    medicalDisclaimer:
      "Voicetypr es software de productividad, no software médico. Puede ayudar a reducir la carga de escritura, pero no diagnostica, trata ni previene ninguna afección. Sigue las indicaciones médicas y ergonómicas para tu propia situación.",
    relatedEyebrow: "páginas relacionadas",
    relatedTitle: "Si este es tu problema, estas páginas también suelen importar",
    relatedDescription:
      "Quizá estés comparando herramientas de Windows, buscando una alternativa a Dragon o intentando reducir la carga de escritura por un motivo concreto. Estas páginas mantienen el camino claro.",
    finalDownload: "Descarga Voicetypr",
    finalBuy: "Compra la licencia de por vida",
  },
} as const;

type UiStrings = { [K in keyof (typeof UI_STRINGS)["en"]]: string };

function getUiStrings(locale: string): UiStrings {
  return locale === "es" ? UI_STRINGS.es : UI_STRINGS.en;
}

type PageProps = {
  params: Promise<RouteParams>;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllUseCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const useCase = getUseCase(slug, locale);
  if (!useCase) return {};

  const enUrl = `https://voicetypr.com/use-cases/${useCase.slug}`;
  const esUrl = `https://voicetypr.com/es/use-cases/${useCase.slug}`;
  const url = locale === "es" ? esUrl : enUrl;
  // Only advertise the es alternate once its Spanish copy has shipped; otherwise
  // /es/<slug> is noindex English (proxy) and must not be cross-linked.
  const hasEs = Boolean(USE_CASE_ES[useCase.slug]);
  const languages = hasEs ? { en: enUrl, es: esUrl, "x-default": enUrl } : undefined;
  // Untranslated /es slugs are English fallback content the proxy marks
  // X-Robots-Tag: noindex — keep the in-page robots signal consistent so we
  // never tell crawlers "index" and "noindex" at once.
  const indexable = locale !== "es" || hasEs;
  return {
    title: useCase.title,
    description: useCase.description,
    keywords: useCase.keywords,
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    openGraph: {
      title: useCase.ogTitle,
      description: useCase.description,
      url,
      siteName: "Voicetypr",
      type: "article",
      images: [
        {
          url: "/voicetypr-og.png",
          width: 1200,
          height: 630,
          alt: useCase.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: useCase.ogTitle,
      description: useCase.description,
      images: ["/voicetypr-og.png"],
      creator: "@moinulmoin",
    },
    robots: { index: indexable, follow: true },
    other: {
      "article:modified_time": `${USE_CASE_PAGES_LAST_UPDATED}T00:00:00.000Z`,
      "og:updated_time": `${USE_CASE_PAGES_LAST_UPDATED}T00:00:00.000Z`,
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

function stripAccentMarkers(text: string): string {
  return text.replace(/<\/?em>/g, "");
}

function formatLastUpdated(isoDate: string, locale: string): string {
  return new Intl.DateTimeFormat(locale === "es" ? "es" : "en", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  }).format(new Date(`${isoDate}T00:00:00.000Z`));
}

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function buildUseCaseJsonLd(useCase: UseCase, locale: string) {
  const url =
    locale === "es"
      ? `https://voicetypr.com/es/use-cases/${useCase.slug}`
      : `https://voicetypr.com/use-cases/${useCase.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: stripAccentMarkers(useCase.hero.headline),
        description: useCase.description,
        dateModified: USE_CASE_PAGES_LAST_UPDATED,
        isPartOf: { "@id": "https://voicetypr.com/#website" },
        about: { "@id": "https://voicetypr.com/#product" },
        mainEntity: { "@id": `${url}#faq` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: useCase.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const { slug, locale } = await params;
  const useCase = getUseCase(slug, locale);
  if (!useCase) notFound();

  return <UseCaseView useCase={useCase} locale={locale} />;
}

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

function UseCaseView({ useCase, locale }: { useCase: UseCase; locale: string }) {
  const relatedGuides = getRelatedGuidesForUseCase(useCase.slug);
  const contextualLinks = getContextualUseCaseLinks(useCase.slug);
  const lastUpdatedLabel = formatLastUpdated(USE_CASE_PAGES_LAST_UPDATED, locale);
  const jsonLd = buildUseCaseJsonLd(useCase, locale);
  const t = getUiStrings(locale);
  const useCasesHref = locale === "es" ? "/es/use-cases" : "/use-cases";
  const downloadHref = locale === "es" ? "/es/download" : "/download";
  const pricingHref = locale === "es" ? "/es#pricing" : "/#pricing";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
        <SiteHeader />

        {/* Hero */}
        <Section className="pt-20 md:pt-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href={useCasesHref}
                className="mb-7 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <span aria-hidden>←</span> {t.backToAll}
              </Link>
              <h1 className="text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[1.03] tracking-tight">
                <HeadlineWithAccent text={useCase.hero.headline} />
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                {useCase.hero.lede}
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                {useCase.hero.metaStrip.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={downloadHref}
                  data-track="use-case-hero-download-click"
                  data-track-slug={useCase.slug}
                  className="inline-flex h-12 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-95"
                >
                  {t.startTrial}
                </Link>
                <Link
                  href={pricingHref}
                  className="inline-flex h-12 items-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted active:scale-95"
                >
                  {t.seePricing}
                </Link>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                {t.lastUpdated} <time dateTime={USE_CASE_PAGES_LAST_UPDATED}>{lastUpdatedLabel}</time>
              </p>
            </div>
          </Container>
        </Section>

        {/* Pains */}
        <Section>
          <Container>
            <h2 className={`${H2_CLASS} max-w-[760px]`}>{t.painsHeading}</h2>
            <div className="mt-8 max-w-[760px]">
              {useCase.pains.map((pain, i) => (
                <article key={i} className="border-b border-border py-6 last:border-b-0">
                  <div className="mb-2 font-sans text-sm font-semibold text-sage">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mb-2 text-xl font-semibold leading-snug text-foreground">{pain.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{pain.body}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Outcomes */}
        <Section>
          <Container>
            <div className="rounded-3xl bg-muted p-8 md:p-12">
              <h2 className={`${H2_CLASS} max-w-[760px]`}>{t.outcomesHeading}</h2>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {useCase.outcomes.map((outcome, i) => (
                  <article key={i} className="flex min-h-60 flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                    <div className="font-sans text-4xl font-bold leading-none text-foreground">{outcome.marker}</div>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">{outcome.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{outcome.body}</p>
                    <div className="mt-auto pt-3 text-xs font-medium text-sage">{outcome.meta}</div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Workflows */}
        <Section>
          <Container>
            <h2 className={`${H2_CLASS} max-w-[760px]`}>{t.workflowsHeading}</h2>
            <div className="mt-8 max-w-[820px] rounded-2xl bg-muted p-7 md:p-10">
              <ol className="grid gap-9">
                {useCase.workflows.map((workflow, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-6">
                    <span className="font-sans text-3xl font-bold leading-none text-sage">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="mb-1.5 text-xl font-semibold leading-snug text-foreground">{workflow.title}</h3>
                      <p className="text-[15px] leading-relaxed text-muted-foreground">{workflow.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              {/* Discovery links use English labels and partly point to English-only
                  comparison pages, so they render on the English locale only. */}
              {locale !== "es" && contextualLinks.length > 0 ? (
                <div className="mt-9 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">{t.nearbyWorkflows}</span>{" "}
                  {contextualLinks.map((link, i) => (
                    <span key={link.href}>
                      {i > 0 ? t.nearbyAnd : ""}
                      <Link
                        href={link.href}
                        className="font-medium text-foreground underline-offset-4 hover:underline"
                        data-track="use-case-contextual-link-click"
                        data-track-slug={useCase.slug}
                      >
                        {link.label}
                      </Link>{" "}
                      {t.nearbyFor} {link.context}
                    </span>
                  ))}
                  .
                </div>
              ) : null}
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section>
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <div>
                <h2 className={H2_CLASS}>
                  {t.faqHeadingPre}{" "}
                  <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                    {useCase.navLabel}
                  </em>
                  {t.faqHeadingPost ? <>{" "}{t.faqHeadingPost}</> : null}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {t.faqIntro}
                </p>
              </div>
              <div>
                {useCase.faqs.map((faq, i) => (
                  <details
                    key={faq.q}
                    open={i === 0}
                    className="group cursor-pointer border-t border-border py-5 last:border-b last:border-border"
                  >
                    <summary className="flex list-none items-start justify-between gap-6 text-lg font-semibold leading-snug text-foreground [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-muted text-base font-light text-muted-foreground transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="max-w-[640px] pt-3.5 text-[15px] leading-relaxed text-muted-foreground">{faq.a}</div>
                  </details>
                ))}
                <div className="mt-8 text-sm text-muted-foreground">
                  {t.faqNotAnswered}{" "}
                  <a
                    href="mailto:support@voicetypr.com"
                    className="text-foreground underline-offset-4 hover:underline"
                    data-track="use-case-faq-contact-click"
                    data-track-slug={useCase.slug}
                  >
                    {t.faqEmail}
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {useCase.category === "accessibility" ? (
          <Section className="pt-12">
            <Container>
              <div className="max-w-3xl rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                {t.medicalDisclaimer}
              </div>
            </Container>
          </Section>
        ) : null}

        {/* Related guides point to English-only comparison/alternative pages, so
            this discovery block renders on the English locale only. */}
        {locale !== "es" && relatedGuides.length > 0 ? (
          <Section>
            <Container>
              <RelatedGuidesSection
                eyebrow="related pages"
                title="If this is your problem, these pages usually matter too"
                description="You might be comparing Windows tools, looking for a Dragon alternative, or trying to reduce typing load for a specific reason. These pages keep the path clear."
                links={relatedGuides}
                dataTrackPrefix="use-case-related-guides"
                embedded
              />
            </Container>
          </Section>
        ) : null}

        {/* Final CTA */}
        <Section>
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-center text-primary-foreground md:px-10 md:py-16">
              <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-sage/30 blur-3xl" />
              <div className="relative">
                <h2 className="mx-auto max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight">
                  <HeadlineWithAccent text={useCase.finalCta.headline} />
                </h2>
                <p className="mx-auto mt-5 mb-8 max-w-xl text-balance text-base leading-relaxed text-primary-foreground/75">
                  {useCase.finalCta.body}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href={downloadHref}
                    data-track="use-case-final-cta-click"
                    data-track-slug={useCase.slug}
                    className="inline-flex h-12 items-center rounded-xl bg-background px-5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 active:scale-95"
                  >
                    {t.finalDownload}
                  </Link>
                  <Link
                    href={pricingHref}
                    className="inline-flex h-12 items-center rounded-xl border border-primary-foreground/20 px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 active:scale-95"
                  >
                    {t.finalBuy}
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <SiteFooter />
      </main>
    </>
  );
}
