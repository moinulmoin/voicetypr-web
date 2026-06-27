import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "Superwhisper Alternative in 2026 — Voicetypr",
  description:
    "Voicetypr is a private offline AI voice dictation app for Mac and Windows. Looking for a Superwhisper alternative? Local transcription by default, lifetime license, no subscription.",
  keywords: [
    "superwhisper alternative",
    "superwhisper alternative windows",
    "offline dictation app",
    "pay once voice typing",
    "lifetime dictation app",
    "private voice dictation",
  ],
  alternates: {
    canonical: "https://voicetypr.com/superwhisper-alternative",
  },
  openGraph: {
    title: "Superwhisper Alternative in 2026 — Voicetypr",
    description:
      "Voicetypr is a private offline AI voice dictation app for Mac and Windows. Local transcription by default, lifetime license, no subscription.",
    url: "https://voicetypr.com/superwhisper-alternative",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superwhisper Alternative in 2026 — Voicetypr",
    description:
      "Voicetypr is a private offline AI voice dictation app for Mac and Windows. Local transcription by default, lifetime license, no subscription.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const rows = [
  ["Pricing", "From $39 once", "Monthly, annual, or higher lifetime price"],
  ["Platforms", "Mac + Windows", "Mac-first; Windows support depends on current release"],
  [
    "Offline transcription",
    "Transcription runs locally by default",
    "Partial/local options, depending on model and setup",
  ],
  [
    "Best fit",
    "Builders who want pay-once dictation across Mac and Windows",
    "Apple-heavy users who want a polished Mac workflow",
  ],
] as const;

const reasons = [
  "You want one license that covers a Windows desktop and a Mac laptop.",
  "You dictate prompts, PR notes, docs, Slack replies, and emails into many different apps.",
  "You prefer paying once instead of adding another monthly tool to the stack.",
  "Transcription runs locally by default; optional AI formatting can use cloud text workflows if enabled.",
] as const;

const faqs = [
  {
    q: "Does Voicetypr work on Windows if I already use Superwhisper on Mac?",
    a: "Yes. Voicetypr ships native builds for macOS and Windows under one lifetime license tier. You can run the same hotkey workflow on both machines without maintaining two separate subscriptions.",
  },
  {
    q: "What does local transcription mean in practice?",
    a: "Your voice is transcribed on your machine after setup. Optional AI formatting can send text — not audio — to your configured provider when you turn it on.",
  },
  {
    q: "Will it work with Cursor, Claude, and ChatGPT?",
    a: "Yes. Hold a hotkey, speak, release. Voicetypr pastes into any text field, including Cursor, Claude desktop, ChatGPT, VS Code, Slack, Gmail, and Notion.",
  },
  {
    q: "Can I try Voicetypr before canceling Superwhisper?",
    a: "Run both side by side during the 3-day trial. Compare real output in your daily workflow, then keep the tool that matches your platform and pricing needs.",
  },
] as const;

const relatedGuides: DiscoveryLink[] = [
  {
    href: "/wispr-flow-alternative",
    eyebrow: "cloud dictation",
    title: "Comparing Wispr Flow instead?",
    description:
      "See the pay-once and local-transcription case if you started with a subscription cloud dictation app.",
    ctaLabel: "Read the Wispr Flow comparison",
  },
  {
    href: "/aqua-voice-alternative",
    eyebrow: "subscription apps",
    title: "Coming from Aqua Voice?",
    description:
      "Useful when the comparison is another Mac-friendly subscription dictation tool.",
    ctaLabel: "Read the Aqua Voice comparison",
  },
  {
    href: "/best/mac-dictation",
    eyebrow: "broader mac search",
    title: "Best dictation software for Mac",
    description:
      "A wider look at Mac dictation options when Superwhisper is not the only name on your shortlist.",
    ctaLabel: "Read the Mac dictation guide",
  },
];

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

export default function SuperwhisperAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Voicetypr", item: "https://voicetypr.com/" },
      { "@type": "ListItem", position: 2, name: "Superwhisper alternative", item: "https://voicetypr.com/superwhisper-alternative" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
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
                <span>Superwhisper alternative</span>
              </div>

              <h1 className="max-w-3xl text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-tight tracking-tight">
                A pay-once{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  Superwhisper
                </em>{" "}
                alternative for Mac and Windows
              </h1>
              <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                Private, lifetime-priced dictation that works on both Mac and Windows with offline transcription by default. Hold a hotkey, speak, and the text lands in any app.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Mac + Windows</span>
                <span>Offline by default</span>
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

        {/* Comparison table */}
        <Section>
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className={H2_CLASS}>Voicetypr vs Superwhisper</h2>

              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-border">
                        <th scope="col" className="px-4 py-3 text-sm font-semibold text-foreground">
                          Criterion
                        </th>
                        <th scope="col" className="px-4 py-3 text-sm font-semibold text-foreground">
                          Voicetypr
                        </th>
                        <th scope="col" className="px-4 py-3 text-sm font-semibold text-foreground">
                          Superwhisper
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map(([criterion, voicetypr, competitor]) => (
                        <tr key={criterion} className="border-b border-border last:border-b-0">
                          <td className="px-4 py-4 pr-4 align-top text-sm font-medium text-foreground">
                            {criterion}
                          </td>
                          <td className="px-4 py-4 pr-4 align-top text-sm text-muted-foreground">
                            {voicetypr}
                          </td>
                          <td className="px-4 py-4 align-top text-sm text-muted-foreground">
                            {competitor}
                          </td>
                        </tr>
                      ))}
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
              <h2 className={H2_CLASS}>Switch when the subscription stops matching the workflow</h2>

              <ul className="mt-8 space-y-4">
                {reasons.map((reason) => (
                  <li key={reason} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-sage" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-sage" />
                    <h3 className="text-base font-semibold text-foreground">Offline by default</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Transcription runs locally on your machine. No cloud required for core dictation.
                  </p>
                </article>
                <article className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-sage" />
                    <h3 className="text-base font-semibold text-foreground">Mac + Windows</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    One app. Same features on both platforms. Superwhisper is Mac-only.
                  </p>
                </article>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section>
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <div>
                <h2 className={H2_CLASS}>Questions Superwhisper shoppers ask</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Straight answers on platforms, privacy, and whether Voicetypr fits a builder workflow.
                </p>
              </div>

              <div id="faq">
                {faqs.map((faq, i) => (
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
                    <div className="max-w-[640px] pt-3.5 text-[15px] leading-relaxed text-muted-foreground">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Related Guides */}
        <Section>
          <Container>
            <RelatedGuidesSection
              eyebrow="still comparing"
              title="Other alternatives worth reading"
              description="If Superwhisper is not the only app on your list, these pages cover the same lifetime-pricing and local-transcription story for other tools."
              links={relatedGuides}
              dataTrackPrefix="superwhisper-alt-related-guides"
              embedded
            />
          </Container>
        </Section>

        {/* Final CTA */}
        <FinalCTA
          headline="Ready to switch?"
          subtitle="3-day free trial. No credit card. Pay once, keep forever."
          primaryLabel="Start free trial"
          primaryDataTrack="superwhisper-alt-final-cta-click"
          secondaryHref="/#pricing"
          headlineClassName="mx-auto mb-5 max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight"
          subtitleClassName="mx-auto mb-8 max-w-xl text-balance text-base leading-relaxed text-primary-foreground/75"
        />

        <SiteFooter />
      </main>
    </>
  );
}
