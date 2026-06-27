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

type RouteParams = { slug: string };

type PageProps = {
  params: Promise<RouteParams>;
};

export async function generateStaticParams(): Promise<RouteParams[]> {
  return getAllUseCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};

  const url = `https://voicetypr.com/use-cases/${useCase.slug}`;
  return {
    title: useCase.title,
    description: useCase.description,
    keywords: useCase.keywords,
    alternates: { canonical: url },
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
    robots: { index: true, follow: true },
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

function formatLastUpdated(isoDate: string): string {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  }).format(new Date(`${isoDate}T00:00:00.000Z`));
}

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function buildUseCaseJsonLd(useCase: UseCase) {
  const url = `https://voicetypr.com/use-cases/${useCase.slug}`;

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
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  return <UseCaseView useCase={useCase} />;
}

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

function UseCaseView({ useCase }: { useCase: UseCase }) {
  const relatedGuides = getRelatedGuidesForUseCase(useCase.slug);
  const contextualLinks = getContextualUseCaseLinks(useCase.slug);
  const lastUpdatedLabel = formatLastUpdated(USE_CASE_PAGES_LAST_UPDATED);
  const jsonLd = buildUseCaseJsonLd(useCase);

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
                href="/use-cases"
                className="mb-7 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <span aria-hidden>←</span> All use cases
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
                  href="/download"
                  data-track="use-case-hero-download-click"
                  data-track-slug={useCase.slug}
                  className="inline-flex h-12 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-95"
                >
                  Start 3-day free trial
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-12 items-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted active:scale-95"
                >
                  See pricing
                </Link>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Last updated <time dateTime={USE_CASE_PAGES_LAST_UPDATED}>{lastUpdatedLabel}</time>
              </p>
            </div>
          </Container>
        </Section>

        {/* Pains */}
        <Section>
          <Container>
            <h2 className={`${H2_CLASS} max-w-[760px]`}>The friction is real, and specific</h2>
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
              <h2 className={`${H2_CLASS} max-w-[760px]`}>The shape of the day, different</h2>
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
            <h2 className={`${H2_CLASS} max-w-[760px]`}>Three workflows where it shows up</h2>
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
              {contextualLinks.length > 0 ? (
                <div className="mt-9 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Nearby workflows:</span>{" "}
                  {contextualLinks.map((link, i) => (
                    <span key={link.href}>
                      {i > 0 ? " and " : ""}
                      <Link
                        href={link.href}
                        className="font-medium text-foreground underline-offset-4 hover:underline"
                        data-track="use-case-contextual-link-click"
                        data-track-slug={useCase.slug}
                      >
                        {link.label}
                      </Link>{" "}
                      for {link.context}
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
                  The honest{" "}
                  <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                    {useCase.navLabel}
                  </em>{" "}
                  FAQ
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Pulled from real conversations with people who use Voicetypr for this exact reason.
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
                  Not answered here?{" "}
                  <a
                    href="mailto:support@voicetypr.com"
                    className="text-foreground underline-offset-4 hover:underline"
                    data-track="use-case-faq-contact-click"
                    data-track-slug={useCase.slug}
                  >
                    Email support
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
                Voicetypr is productivity software, not medical software. It can help reduce typing load, but it does
                not diagnose, treat, or prevent any condition. Follow medical and ergonomic guidance for your own
                situation.
              </div>
            </Container>
          </Section>
        ) : null}

        {relatedGuides.length > 0 ? (
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
                    href="/download"
                    data-track="use-case-final-cta-click"
                    data-track-slug={useCase.slug}
                    className="inline-flex h-12 items-center rounded-xl bg-background px-5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 active:scale-95"
                  >
                    Download Voicetypr
                  </Link>
                  <Link
                    href="/#pricing"
                    className="inline-flex h-12 items-center rounded-xl border border-primary-foreground/20 px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 active:scale-95"
                  >
                    Buy lifetime license
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
