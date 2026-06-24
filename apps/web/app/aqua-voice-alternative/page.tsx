import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import RelatedGuidesSection from "../components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "Aqua Voice Alternative in 2026 — Voicetypr",
  description:
    "Looking for an Aqua Voice alternative? Voicetypr transcribes locally by default on Mac and Windows and starts at $39 once.",
  keywords: [
    "aqua voice alternative",
    "aqua dictation alternative",
    "offline dictation app",
    "offline voice to text",
    "pay once voice typing",
    "private dictation app",
  ],
  alternates: {
    canonical: "https://voicetypr.com/aqua-voice-alternative",
  },
  openGraph: {
    title: "Aqua Voice Alternative in 2026 — Voicetypr",
    description:
      "Local transcription by default on Mac and Windows. One payment, lifetime access.",
    url: "https://voicetypr.com/aqua-voice-alternative",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua Voice Alternative in 2026 — Voicetypr",
    description:
      "Local transcription by default on Mac and Windows. One payment, lifetime access.",
    images: ["/voicetypr-og.png"],
  },
};

const rows = [
  ["Pricing model", "Pay once", "Subscription"],
  ["Entry price", "$39 lifetime", "Monthly subscription"],
  ["Windows support", "Yes", "Mac-focused"],
  [
    "Local transcription",
    "Transcription runs locally by default",
    "Cloud-first workflow",
  ],
  ["Where it works", "Any app with a text field", "Any app with a text field"],
] as const;

const reasons = [
  "You want dictation that still works when the connection is poor.",
  "You write sensitive customer, legal, financial, health, or product notes.",
  "You need one tool across a Mac laptop and Windows workstation.",
  "You want a lifetime license instead of another monthly utility bill.",
] as const;

const faqs = [
  {
    q: "Is Voicetypr actually offline?",
    a: "Transcription runs locally by default after you download a model. Optional AI formatting can use cloud text workflows if you enable it—it sends text, not audio.",
  },
  {
    q: "How does pricing compare to Aqua Voice?",
    a: "Voicetypr Pro is $39 once. Aqua Voice is subscription-based, so the break-even point usually arrives within the first few months if you dictate regularly.",
  },
  {
    q: "Does Voicetypr support Windows?",
    a: "Yes. Voicetypr runs on macOS and Windows under one lifetime license tier, which matters if your Aqua Voice workflow only covered a Mac laptop.",
  },
  {
    q: "Can I use it for sensitive notes?",
    a: "Many buyers switch for that reason. Local transcription keeps audio on your machine by default; you choose whether to turn on optional cloud text formatting.",
  },
] as const;

const relatedGuides: DiscoveryLink[] = [
  {
    href: "/wispr-flow-alternative",
    eyebrow: "cloud dictation",
    title: "Comparing Wispr Flow instead?",
    description:
      "See how Voicetypr compares on subscription cost, local transcription, and Windows support.",
    ctaLabel: "Read the Wispr Flow comparison",
  },
  {
    href: "/superwhisper-alternative",
    eyebrow: "mac-native option",
    title: "Comparing Superwhisper instead?",
    description:
      "Helpful if you are weighing another Mac-first dictation app against a cross-platform lifetime license.",
    ctaLabel: "Read the Superwhisper comparison",
  },
  {
    href: "/offline-dictation-app-for-windows",
    eyebrow: "windows-first",
    title: "Need offline dictation on Windows?",
    description:
      "A focused guide when Windows support and local models are the deciding factors.",
    ctaLabel: "See the Windows guide",
  },
];

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

export default function AquaVoiceAlternativePage() {
  const faqJsonLd = {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
        <SiteHeader />

        {/* Hero */}
        <Section className="pt-20 md:pt-24">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[1.03] tracking-tight">
                The Aqua Voice alternative for{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  pay-once
                </em>{" "}
                dictation on Mac and Windows
              </h1>
              <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                The Aqua Voice alternative for buyers tired of subscriptions: transcription runs locally by default, optional AI formatting can use cloud text workflows if enabled, and one license covers Mac and Windows.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex h-12 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-95"
                >
                  Start free trial
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-12 items-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted active:scale-95"
                >
                  Buy lifetime license
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* The comparison */}
        <Section>
          <Container>
            <div className="max-w-3xl">
              <h2 className={H2_CLASS}>The comparison</h2>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th scope="col" className="px-5 py-4 font-semibold text-foreground">Criterion</th>
                        <th scope="col" className="px-5 py-4 font-semibold text-foreground">Voicetypr</th>
                        <th scope="col" className="px-5 py-4 font-semibold text-muted-foreground">Aqua Voice</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map(([label, voicetypr, aqua]) => (
                        <tr key={label} className="border-b border-border last:border-b-0">
                          <td className="px-5 py-4 align-top font-medium text-foreground">{label}</td>
                          <td className="px-5 py-4 align-top text-foreground">{voicetypr}</td>
                          <td className="px-5 py-4 align-top text-muted-foreground">{aqua}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Why people switch */}
        <Section>
          <Container>
            <div className="max-w-3xl">
              <h2 className={H2_CLASS}>
                Pay once and keep transcription{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  on your machine
                </em>{" "}
                by default
              </h2>
              <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {reasons.map((reason, i) => (
                  <li key={reason} className="flex items-start gap-4 bg-card p-6">
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

        {/* FAQ */}
        <Section id="faq">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <div>
                <h2 className={H2_CLASS}>
                  Questions Aqua Voice{" "}
                  <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                    shoppers
                  </em>{" "}
                  ask
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Pricing, platforms, and what local transcription means when you are comparing subscriptions.
                </p>
              </div>
              <div>
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
                    <div className="max-w-[640px] pt-3.5 text-[15px] leading-relaxed text-muted-foreground">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <RelatedGuidesSection
              eyebrow="still comparing"
              title="Other alternatives worth reading"
              description="If Aqua Voice is not the only subscription dictation app you are weighing, these pages compare Voicetypr to other common picks."
              links={relatedGuides}
              dataTrackPrefix="aqua-voice-alt-related-guides"
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
                <h2 className="mx-auto max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight">
                  Try the Aqua Voice alternative with a 3-day trial
                </h2>
                <p className="mx-auto mt-5 mb-8 max-w-2xl text-balance text-base leading-relaxed text-primary-foreground/75">
                  No credit card. Transcription runs locally by default. Pay once for Mac and Windows.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/download"
                    data-track="aqua-voice-alt-final-cta-click"
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
