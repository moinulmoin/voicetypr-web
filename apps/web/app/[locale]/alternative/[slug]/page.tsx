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

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getAlternativePageBySlug(slug);
  if (!page) return {};
  const duplicateCanonical = duplicateCanonicalBySlug[slug];
  const canonical = duplicateCanonical ?? `https://voicetypr.com/alternative/${slug}`;
  const title = `${page.h1} — Voicetypr`;
  return {
    title,
    description: page.lede,
    alternates: {
      canonical,
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
    ...(duplicateCanonical ? { robots: { index: false, follow: true } } : {}),
  };
}

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

export default async function AlternativePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getAlternativePageBySlug(slug);
  if (!page) return notFound();
  const relatedGuides = getRelatedGuidesForSeoSlug(slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Voicetypr", item: "https://voicetypr.com/" },
      { "@type": "ListItem", position: 2, name: page.h1, item: `https://voicetypr.com/alternative/${slug}` },
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
                <Link href="/" className="transition-colors hover:text-foreground">
                  Voicetypr
                </Link>
                <span aria-hidden>/</span>
                <span>Alternative</span>
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
              <h2 className={H2_CLASS}>The replacement path</h2>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
                <div className="overflow-x-auto p-1.5">
                  <table className="w-full text-left">
                    <caption className="sr-only">
                      Comparison of tools for switching from the incumbent
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium text-muted-foreground">
                          Tool
                        </th>
                        <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium text-muted-foreground">
                          Price
                        </th>
                        <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium text-muted-foreground">
                          Platforms
                        </th>
                        <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium text-muted-foreground">
                          Offline
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
                                    Subscription
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
                              <span className={comp.offline.startsWith("Yes") ? "font-medium text-foreground" : "text-muted-foreground"}>
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
              <h2 className={H2_CLASS}>What gets better after you switch</h2>
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
                      Choose Voicetypr if
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
                      Stay with the incumbent if
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
                      Quick comparison notes
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

        {/* Related guides */}
        {relatedGuides.length > 0 ? (
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
