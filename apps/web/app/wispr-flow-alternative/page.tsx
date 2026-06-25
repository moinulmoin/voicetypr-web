import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, Suspense, type ReactNode } from "react";
import { Check, Minus } from "lucide-react";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";
import Pricing from "@/app/components/sections/Pricing";
import { SuccessModal } from "@/app/components/SuccessModal";

export const metadata: Metadata = {
  title: "Wispr Flow Alternative in 2026 — Voicetypr",
  description:
    "Voicetypr is a private offline AI voice dictation app for Mac and Windows. Looking for a Wispr Flow alternative? Lifetime license, cross-platform, offline by default.",
  keywords: [
    "wispr flow alternative",
    "wispr flow alternative mac",
    "wispr flow alternative windows",
    "offline dictation app",
    "offline voice to text",
    "pay once voice typing",
    "lifetime dictation app",
    "private voice dictation",
  ],
  alternates: {
    canonical: "https://voicetypr.com/wispr-flow-alternative",
  },
  openGraph: {
    title: "Wispr Flow Alternative in 2026 — Voicetypr",
    description:
      "Voicetypr is a private offline AI voice dictation app for Mac and Windows. Lifetime license, cross-platform, offline by default.",
    url: "https://voicetypr.com/wispr-flow-alternative",
    siteName: "Voicetypr",
    images: [
      {
        url: "/voicetypr-og.png",
        width: 1200,
        height: 630,
        alt: "Voicetypr — Wispr Flow Alternative",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wispr Flow Alternative in 2026 — Voicetypr",
    description:
      "Voicetypr is a private offline AI voice dictation app for Mac and Windows. Lifetime license, cross-platform, offline by default.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

type ComparisonValue =
  | { type: "check"; text: string }
  | { type: "cross"; text: string }
  | { type: "text"; text: string };

const check = (text: string): ComparisonValue => ({ type: "check", text });
const cross = (text: string): ComparisonValue => ({ type: "cross", text });
const neutral = (text: string): ComparisonValue => ({ type: "text", text });

const comparison: Array<{
  category: string;
  rows: Array<{ label: string; voicetypr: ComparisonValue; wispr: ComparisonValue }>;
}> = [
  {
    category: "Pricing",
    rows: [
      {
        label: "Pricing model",
        voicetypr: check("One-time purchase"),
        wispr: cross("Subscription only"),
      },
      {
        label: "Entry price",
        voicetypr: check("$39 once"),
        wispr: neutral("$15/mo or $12/mo annual"),
      },
      {
        label: "2-year cost (Voicetypr / annual plan)",
        voicetypr: check("$39 once"),
        wispr: neutral("$288 ongoing"),
      },
      {
        label: "Free trial",
        voicetypr: check("3 days, full features"),
        wispr: neutral("14-day Pro trial, then paid"),
      },
    ],
  },
  {
    category: "Privacy & architecture",
    rows: [
      {
        label: "Where audio is processed",
        voicetypr: check("Locally on your device"),
        wispr: cross("Cloud (Wispr's servers)"),
      },
      {
        label: "Internet connection for transcription",
        voicetypr: check("No, after setup"),
        wispr: cross("Yes — real-time cloud dictation"),
      },
      {
        label: "Voice transcribed on device",
        voicetypr: check("Yes, by default"),
        wispr: cross("No — cloud processing"),
      },
    ],
  },
  {
    category: "Platform",
    rows: [
      {
        label: "macOS support",
        voicetypr: check("macOS 13+ (Apple Silicon & Intel)"),
        wispr: check("Yes"),
      },
      {
        label: "Windows support",
        voicetypr: check("Windows 10+"),
        wispr: neutral("Verify current release"),
      },
      {
        label: "One license, both platforms",
        voicetypr: check("Yes (public device-count options cover 1, 2, or 4 machines)"),
        wispr: neutral("Per-user license"),
      },
    ],
  },
  {
    category: "Works with",
    rows: [
      {
        label: "Cursor / Claude / ChatGPT / VS Code",
        voicetypr: check("Any text field, any app"),
        wispr: check("Any text field, any app"),
      },
      {
        label: "Slack, Gmail, Notion, Linear",
        voicetypr: check("Yes"),
        wispr: check("Yes"),
      },
    ],
  },
];

const relatedGuides: DiscoveryLink[] = [
  {
    href: "/superwhisper-alternative",
    eyebrow: "mac-native option",
    title: "Comparing Superwhisper instead?",
    description:
      "See how Voicetypr compares if you want a polished Mac workflow but also need Windows and a single lifetime license.",
    ctaLabel: "Read the Superwhisper comparison",
  },
  {
    href: "/aqua-voice-alternative",
    eyebrow: "subscription fatigue",
    title: "Coming from Aqua Voice?",
    description:
      "Same pay-once and local-transcription story, written for buyers who started with Aqua Voice.",
    ctaLabel: "Read the Aqua Voice comparison",
  },
  {
    href: "/offline-dictation-app-for-windows",
    eyebrow: "windows-first",
    title: "Need offline dictation on Windows?",
    description:
      "A focused guide for Windows buyers who want local models, lifetime pricing, and dictation in every text field.",
    ctaLabel: "See the Windows guide",
  },
];

const faqs = [
  {
    q: "What does local transcription mean in Voicetypr?",
    a: "After setup, your voice is transcribed on your device by default. Optional text cleanup can use a cloud provider you choose — never your audio — and only when you turn it on.",
  },
  {
    q: "How does transcription accuracy compare?",
    a: "Pick a faster or more accurate on-device option in settings. Wispr runs in the cloud — some prefer its accent handling, but you trade privacy and a subscription. Try the 3-day trial in your real apps and compare.",
  },
  {
    q: "Will it work with my Cursor / Claude / ChatGPT workflow?",
    a: "Yes. Voicetypr pastes text into any application that accepts keyboard input — Cursor, Claude desktop, ChatGPT, VS Code, Slack, Gmail, Notion, Linear, anything. Hold a hotkey, speak, release. Text appears wherever your cursor is.",
  },
  {
    q: "Can I switch without losing my Wispr settings?",
    a: "Dictation apps store settings locally per app, so there's nothing to migrate. Most users are up and running in under 5 minutes: install Voicetypr, pick a hotkey, download a model, start talking. Your Wispr install keeps working in parallel while you evaluate.",
  },
  {
    q: "What if I need more than 4 devices?",
    a: "Contact support@voicetypr.com and we'll help you get set up.",
  },
  {
    q: "What if I already paid for a year of Wispr Flow?",
    a: "Use them in parallel. Once your Wispr sub expires, don't renew. The savings compound: year two is $0 with Voicetypr vs $144–180/yr with Wispr.",
  },
  {
    q: "What's the catch with 'lifetime'?",
    a: "No catch. Updates stay included. If we ever ship a fundamentally different product, existing customers get a substantial discount on the new version. We're not playing the rug-pull game.",
  },
];

const steps: Array<{ n: string; title: string; body: ReactNode }> = [
  {
    n: "01",
    title: "Download Voicetypr",
    body: (
      <>
        Mac .dmg or Windows .exe from{" "}
        <Link href="/download" className="text-foreground underline underline-offset-4 hover:underline">
          /download
        </Link>
        . No account required.
      </>
    ),
  },
  {
    n: "02",
    title: "Pick a hotkey and a model",
    body: (
      <>
        Default is{" "}
        <span className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-sm">⌘⇧Space</span> on macOS or{" "}
        <span className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-sm">Ctrl+Shift+Space</span> on Windows.
        Push-to-talk lives on Option/Alt+Space.
      </>
    ),
  },
  {
    n: "03",
    title: "Run both side-by-side for a week",
    body:
      "Use the 3-day trial to test your real daily workflow before buying. Keep using Wispr in parallel so you can compare real output. When your Wispr sub is up for renewal, decide with data instead of a gut feel.",
  },
];

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function WisprFlowAlternativePage() {
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
      { "@type": "ListItem", position: 2, name: "Wispr Flow alternative", item: "https://voicetypr.com/wispr-flow-alternative" },
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
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-foreground">
                  Voicetypr
                </Link>
                <span aria-hidden>/</span>
                <span>Wispr Flow alternative</span>
              </div>

              <h1 className="max-w-3xl text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[1.03] tracking-tight">
                A pay-once{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  Wispr Flow
                </em>{" "}
                alternative that runs offline
              </h1>
              <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                Private, lifetime-priced dictation that works on both Mac and Windows with offline transcription by default. No subscription, no cloud dependency.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Local transcription</span>
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
                  href="#pricing"
                  className="inline-flex h-12 items-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted active:scale-95"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* Comparison Table */}
        <Section>
          <Container className="max-w-5xl">
            <div className="mb-8">
              <h2 className={H2_CLASS}>
                Voicetypr vs{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  Wispr Flow
                </em>
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="overflow-x-auto p-1.5">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border">
                      <th scope="col" className="px-4 pb-3 pt-3 text-sm font-semibold text-foreground">
                        Feature
                      </th>
                      <th scope="col" className="px-4 pb-3 pt-3 text-sm font-semibold text-foreground">
                        Voicetypr
                      </th>
                      <th scope="col" className="px-4 pb-3 pt-3 text-sm font-semibold text-muted-foreground">
                        Wispr Flow
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((group, groupIndex) => (
                      <Fragment key={group.category}>
                        <tr className="border-t border-border bg-muted">
                          <td colSpan={3} className="px-4 py-3 text-sm font-semibold text-foreground">
                            {group.category}
                          </td>
                        </tr>
                        {group.rows.map((row) => (
                          <tr key={`${groupIndex}-${row.label}`} className="border-t border-border">
                            <td className="px-4 py-4 pr-4 align-top text-sm text-muted-foreground">{row.label}</td>
                            <td className="px-4 py-4 pr-4 align-top">
                              <div className="flex items-start gap-2 text-sm text-foreground">
                                {row.voicetypr.type === "check" && <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" />}
                                {row.voicetypr.type === "cross" && <Minus className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />}
                                <span>{row.voicetypr.text}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 align-top">
                              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                                {row.wispr.type === "check" && <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />}
                                {row.wispr.type === "cross" && <Minus className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />}
                                <span>{row.wispr.text}</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </Section>

        {/* Testimonials */}
        <Section>
          <Container className="max-w-4xl">
            <div className="mb-8">
              <h2 className={H2_CLASS}>Why people switch from Wispr Flow</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-6">
                <p className="text-[16px] leading-snug text-foreground">
                  &ldquo;I switched from Wispr Flow because I didn&apos;t want another monthly subscription, and I needed something that works on both Mac and Windows. Voicetypr ticks both boxes. One payment, no ongoing costs, exactly what I was looking for.&rdquo;
                </p>
                <div className="mt-5 text-[13px] text-muted-foreground">— Catherine E.</div>
              </article>
              <article className="rounded-2xl border border-border bg-card p-6">
                <p className="text-[16px] leading-snug text-foreground">
                  &ldquo;The app is incredible, I did not expect it to be so fast with offline dictation!&rdquo;
                </p>
                <div className="mt-5 text-[13px] text-muted-foreground">— Stephen K. L.</div>
              </article>
            </div>
          </Container>
        </Section>

        {/* Steps */}
        <Section>
          <Container className="max-w-4xl">
            <div className="mb-8">
              <h2 className={H2_CLASS}>How to switch in under five minutes</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                No migration. No account transfer.
              </p>
            </div>

            <ol className="max-w-[820px] space-y-9">
              {steps.map((step) => (
                <li key={step.n} className="grid grid-cols-[auto_1fr] gap-6">
                  <span className="pt-0.5 font-sans text-3xl font-bold leading-none text-sage">{step.n}</span>
                  <div>
                    <h3 className="mb-1.5 text-xl font-semibold leading-snug text-foreground">{step.title}</h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        {/* FAQ */}
        <Section>
          <Container className="max-w-4xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <div>
                <h2 className={H2_CLASS}>
                  The honest{" "}
                  <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                    switch
                  </em>{" "}
                  FAQ
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Pulled from real conversations with people who actually made the move.
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
                <div className="mt-8 text-sm text-muted-foreground">
                  Not answered here?{" "}
                  <a
                    href="mailto:support@voicetypr.com"
                    className="text-foreground underline-offset-4 hover:underline"
                    data-track="wispr-alt-faq-contact-click"
                  >
                    Email support
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Pricing */}
        <Section id="pricing">
          <Container>
            <Suspense fallback={null}>
              <Pricing />
            </Suspense>
          </Container>
        </Section>

        {/* Related Guides */}
        <Section>
          <Container>
            <RelatedGuidesSection
              eyebrow="still comparing"
              title="Other alternatives worth reading"
              description="If Wispr Flow is not the only tool on your list, these pages lay out the same pay-once and local-transcription case for other popular options."
              links={relatedGuides}
              dataTrackPrefix="wispr-alt-related-guides"
              embedded
            />
          </Container>
        </Section>

        {/* Final CTA */}
        <FinalCTA
          headline="Try the Wispr Flow alternative with a 3-day trial"
          subtitle="No credit card. Transcription runs locally by default. Pay once, no subscription."
          primaryLabel="Start free trial"
          primaryDataTrack="wispr-alt-final-cta-click"
          secondaryHref="#pricing"
          headlineClassName="mx-auto mb-5 max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight"
          subtitleClassName="mx-auto mb-8 max-w-xl text-balance text-base leading-relaxed text-primary-foreground/75"
        />

        <Suspense>
          <SuccessModal />
        </Suspense>
        <SiteFooter />
      </main>
    </>
  );
}
