import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import { getRelatedGuidesForSeoSlug } from "@/lib/seo-discovery";
import { getSeoPageBySlug, getSeoPageMetaTitle, seoPages, type SeoPage } from "@/lib/seo-pages";

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function buildBestPageJsonLd(slug: string, page: SeoPage) {
  const faq = page.decisionSupport?.faq;
  if (!faq?.length) return null;

  const url = `https://voicetypr.com/best/${slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}

export async function generateStaticParams() {
  return seoPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) return {};
  const title = getSeoPageMetaTitle(page);
  const url = `https://voicetypr.com/best/${slug}`;
  return {
    title,
    description: page.lede,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: page.lede,
      url,
      siteName: 'Voicetypr',
      images: [{ url: '/voicetypr-og.png', width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: page.lede,
      images: ['/voicetypr-og.png'],
    },
  };
}

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

export default async function BestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) return notFound();
  const relatedGuides = getRelatedGuidesForSeoSlug(slug);
  const support = page.decisionSupport;
  const showLimitations = page.competitors.some((comp) => comp.limitation);
  const jsonLd = buildBestPageJsonLd(slug, page);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Voicetypr", item: "https://voicetypr.com/" },
      { "@type": "ListItem", position: 2, name: page.h1, item: `https://voicetypr.com/best/${slug}` },
    ],
  };

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />
      ) : null}
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
                <Link href="/" className="transition-colors hover:text-foreground">
                  Voicetypr
                </Link>
                <span aria-hidden>/</span>
                <span>Best</span>
              </div>

              <h1 className="max-w-3xl text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[1.03] tracking-tight">
                {page.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                {page.lede}
              </p>
            </div>
          </Container>
        </Section>

        {/* The shortlist */}
        <Section>
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className={H2_CLASS}>The shortlist</h2>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <caption className="sr-only">
                      Comparison of dictation tools in this guide
                    </caption>
                    <thead>
                      <tr className="border-b border-border">
                        <th scope="col" className="px-4 py-3 text-sm font-semibold text-foreground">
                          Tool
                        </th>
                        <th scope="col" className="px-4 py-3 text-sm font-semibold text-foreground">
                          Price
                        </th>
                        <th scope="col" className="px-4 py-3 text-sm font-semibold text-foreground">
                          Platforms
                        </th>
                        <th scope="col" className="px-4 py-3 text-sm font-semibold text-foreground">
                          Offline
                        </th>
                        {showLimitations ? (
                          <th scope="col" className="px-4 py-3 text-sm font-semibold text-foreground">
                            Reality check
                          </th>
                        ) : null}
                      </tr>
                    </thead>
                    <tbody>
                      {page.competitors.map((comp) => (
                        <tr
                          key={comp.name}
                          className={
                            comp.name === "Voicetypr"
                              ? "border-b border-border bg-sage-bg last:border-b-0"
                              : "border-b border-border last:border-b-0"
                          }
                        >
                          <td className="px-4 py-4 align-top">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[15px] font-semibold text-foreground">
                                {comp.name}
                              </span>
                              {comp.subscription && (
                                <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                                  Subscription
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4 align-top text-sm text-muted-foreground">
                            {comp.price}
                          </td>
                          <td className="px-4 py-4 align-top text-sm text-muted-foreground">
                            {comp.platforms}
                          </td>
                          <td className="px-4 py-4 align-top text-sm">
                            <span className={comp.offline.startsWith("Yes") ? "font-medium text-foreground" : "text-muted-foreground"}>
                              {comp.offline}
                            </span>
                          </td>
                          {showLimitations ? (
                            <td className="min-w-[180px] px-4 py-4 align-top text-[13px] leading-relaxed text-muted-foreground">
                              {comp.limitation}
                            </td>
                          ) : null}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Why it makes the list */}
        <Section>
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className={H2_CLASS}>Why it makes the list</h2>
              <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {page.whySwitch.map((reason, i) => (
                  <li key={i} className="flex items-start gap-4 bg-card p-6">
                    <span className="font-sans text-sm font-semibold text-sage">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] leading-relaxed text-muted-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        {support ? (
          <Section>
            <Container>
              <div className="mx-auto max-w-3xl space-y-10">
                <div>
                  <h2 className={H2_CLASS}>
                    How to{" "}
                    <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                      choose
                    </em>
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {support.searchIntent}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    Good fit if
                  </h3>
                  <ul className="mt-5 space-y-3.5 text-[15px] leading-relaxed text-muted-foreground">
                    {support.bestFor.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {support.decisionCriteria.map((criterion) => (
                    <article key={criterion.title} className="rounded-2xl border border-border bg-card p-6">
                      <h3 className="text-base font-semibold tracking-tight text-foreground">
                        {criterion.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {criterion.body}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="rounded-2xl bg-muted p-6 md:p-8">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    Competitor notes
                  </h3>
                  <div className="mt-5 grid gap-6 md:grid-cols-3">
                    {support.competitorNotes.map((note) => (
                      <article key={note.title}>
                        <h4 className="text-[15px] font-semibold text-foreground">
                          {note.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {note.body}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                {support.offlineCaveat ? (
                  <div className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
                    <strong className="font-semibold text-foreground">Offline caveat: </strong>
                    {support.offlineCaveat}
                  </div>
                ) : null}

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    Buyer questions
                  </h3>
                  <div className="mt-5">
                    {support.faq.map((item, i) => (
                      <details
                        key={item.q}
                        open={i === 0}
                        className="group cursor-pointer border-t border-border py-5 last:border-b last:border-border"
                      >
                        <summary className="flex list-none items-start justify-between gap-6 text-[15px] font-semibold leading-snug text-foreground [&::-webkit-details-marker]:hidden">
                          <span>{item.q}</span>
                          <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-muted text-base font-light text-muted-foreground transition-transform duration-300 group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <div className="max-w-[640px] pt-3.5 text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        ) : null}

        {relatedGuides.length > 0 ? (
          <Section>
            <Container>
              <RelatedGuidesSection
                eyebrow="keep going"
                title="Related guides worth opening next"
                description="These pages catch the adjacent searches people usually make before they decide what to download."
                links={relatedGuides}
                dataTrackPrefix="best-related-guides"
                embedded
              />
            </Container>
          </Section>
        ) : null}

        {/* Final CTA */}
        <FinalCTA
          headline={page.ctaText}
          subtitle="3-day free trial. No credit card. All features included."
          primaryLabel="Start free trial"
          secondaryHref="/#pricing"
          secondaryLabel="View lifetime pricing"
        />

        <SiteFooter />
      </main>
    </>
  );
}
