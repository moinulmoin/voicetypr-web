import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import type { DiscoveryLink } from "@/lib/seo-discovery";
import {
  GEO_PAGES_LAST_UPDATED,
  getAllGeoSlugs,
  getGeoPage,
  type GeoPage,
} from "@/lib/geo-pages";

type RouteParams = { country: string };

type PageProps = {
  params: Promise<RouteParams>;
};

// Unknown / removed country slugs 404 via notFound() in the page body below.
export async function generateStaticParams(): Promise<RouteParams[]> {
  return getAllGeoSlugs().map((country) => ({ country }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country } = await params;
  const page = getGeoPage(country);
  if (!page) return {};

  const url = `https://voicetypr.com/voice-typing/${page.slug}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: [
      `voice typing ${page.country}`,
      `dictation ${page.country}`,
      `${page.demonym} voice to text`,
      "offline dictation",
      "private voice typing",
      "local speech to text",
    ],
    alternates: { canonical: url },
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
    robots: { index: true, follow: true },
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
  const { country } = await params;
  const page = getGeoPage(country);
  if (!page) notFound();

  return <GeoPageBody page={page} />;
}

function GeoPageBody({ page }: { page: GeoPage }) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Voicetypr", item: "https://voicetypr.com/" },
      { "@type": "ListItem", position: 2, name: "Voice typing", item: "https://voicetypr.com/voice-typing" },
      {
        "@type": "ListItem",
        position: 3,
        name: `Voice typing in ${page.country}`,
        item: `https://voicetypr.com/voice-typing/${page.slug}`,
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
                <Link href="/" className="transition-colors hover:text-foreground">
                  Voicetypr
                </Link>
                <span aria-hidden>/</span>
                <Link href="/voice-typing" className="transition-colors hover:text-foreground">
                  Voice typing
                </Link>
                <span aria-hidden>/</span>
                <span>{page.country}</span>
              </div>

              <h1 className="font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-tight tracking-tight">
                <HeadlineWithAccent text={page.h1} />
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{page.intro}</p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Offline by default</span>
                <span>Mac + Windows</span>
                <span>Pay once</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/download"
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
            </div>
          </Container>
        </Section>

        {/* Local privacy angle */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-2 text-sm font-medium text-sage">Privacy in {page.country}</p>
                <h2 className={H2_CLASS}>Your voice never leaves your device</h2>
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
                <p className="text-sm font-medium text-sage">Governing law</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                  Built around {page.demonym} privacy expectations
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  Personal data in {page.country} is governed by {page.privacyLaw}. Voicetypr&apos;s local-first
                  architecture is designed to help you meet those expectations — you remain responsible as the data
                  controller.
                </p>
              </article>
              <article className="rounded-2xl border border-border bg-muted p-6">
                <p className="text-sm font-medium text-sage">Regulator</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                  Less to explain to the regulator
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  Oversight comes from {page.regulator}. Because core dictation keeps your audio on your device, you cut
                  down the data-transfer surface they scrutinise most.
                </p>
              </article>
            </div>
          </Container>
        </Section>

        {/* Language support */}
        <Section>
          <Container>
            <div className="mb-8 max-w-[760px]">
              <p className="mb-2 text-sm font-medium text-sage">Language support</p>
              <h2 className={H2_CLASS}>Transcribed on-device, in your language</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Whisper is multilingual, so the local models handle the languages people actually work in across{" "}
                {page.country} — no cloud round-trip required for core dictation.
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
                <p className="mb-2 text-sm font-medium text-sage">Why it fits</p>
                <h2 className={H2_CLASS}>Private dictation that fits {page.country}</h2>
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
              <p className="mb-2 text-sm font-medium text-sage">FAQ</p>
              <h2 className={H2_CLASS}>Voice typing in {page.country}, answered</h2>
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

        {/* Related Guides */}
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

        {/* Final CTA */}
        <Section>
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-center text-primary-foreground md:px-10 md:py-16">
              <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-sage/30 blur-3xl" />
              <div className="relative">
                <h2 className="mx-auto mb-5 max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight">
                  Private voice typing for {page.country}
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
                  3-day free trial. No credit card. Local transcription keeps your voice on your device, across Mac and
                  Windows.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/download"
                    data-track={`voice-typing-${page.slug}-final-cta-click`}
                    className="inline-flex h-12 items-center rounded-xl bg-background px-5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 active:scale-95"
                  >
                    Start free trial
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
