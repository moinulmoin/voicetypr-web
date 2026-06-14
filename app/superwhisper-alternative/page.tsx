import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";
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
  return JSON.stringify(value).replace(/</g, "\u003c");
}

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
    <main id="main-content" className="landing-editorial relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="ed-section ed-section-hero pb-0 pt-[120px] md:pt-[140px]">
        <div className="ed-container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-5 flex items-center gap-2 text-sm text-editorial-ink-3">
              <Link href="/" className="transition-colors hover:text-editorial-ink">
                Voicetypr
              </Link>
              <span>/</span>
              <span>Superwhisper alternative</span>
            </div>

            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
              alternative
            </p>
            <h1 className="mt-3 text-[clamp(40px,6vw,70px)] font-semibold leading-[1.02] tracking-tight">
              A pay-once <em>Superwhisper</em> alternative for Mac and Windows
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
              Private, lifetime-priced dictation that works on both Mac and Windows with offline transcription by default. Hold a hotkey, speak, and the text lands in any app.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
              <span>Mac + Windows</span>
              <span>Offline by default</span>
              <span>Pay once</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/download"
                className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
              >
                Start 3-day free trial
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink shadow-sm transition duration-300 ease-out hover:bg-editorial-surface-2 active:scale-95"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <div className="mb-5 text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
            The comparison
          </div>
          <h2 className="text-[clamp(32px,4vw,50px)] font-semibold leading-[1.08] tracking-tight">
            Voicetypr vs Superwhisper
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-editorial-line bg-white/82 shadow-sm backdrop-blur">
            <div className="overflow-x-auto p-1.5">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                      Criterion
                    </th>
                    <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                      Voicetypr
                    </th>
                    <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                      Superwhisper
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([criterion, voicetypr, competitor]) => (
                    <tr key={criterion} className="border-t border-editorial-line">
                      <td className="px-3 py-3 pr-4 align-top text-[14px] font-medium text-editorial-ink">
                        {criterion}
                      </td>
                      <td className="px-3 py-3 pr-4 align-top text-[14px] text-editorial-ink-2">
                        {voicetypr}
                      </td>
                      <td className="px-3 py-3 align-top text-[14px] text-editorial-ink-3">
                        {competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why switch */}
      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <div className="mb-8">
            <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
              Why people switch
            </div>
            <h2 className="mt-2 text-[clamp(32px,4vw,50px)] font-semibold leading-[1.08] tracking-tight">
              Switch when the subscription stops matching the workflow
            </h2>
          </div>

          <ul className="space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-3 text-[16px] leading-[1.65] text-editorial-ink-2">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-editorial-ink" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-editorial-line bg-editorial-surface-2 p-6">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-editorial-ink" />
                <h3 className="text-[16px] font-semibold text-editorial-ink">Offline by default</h3>
              </div>
              <p className="mt-3 text-[14px] leading-[1.65] text-editorial-ink-2">
                Transcription runs locally on your machine. No cloud required for core dictation.
              </p>
            </article>
            <article className="rounded-2xl border border-editorial-line bg-editorial-surface-2 p-6">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-editorial-ink" />
                <h3 className="text-[16px] font-semibold text-editorial-ink">Mac + Windows</h3>
              </div>
              <p className="mt-3 text-[14px] leading-[1.65] text-editorial-ink-2">
                One app. Same features on both platforms. Superwhisper is Mac-only.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
            <div>
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                Before you switch
              </div>
              <h2 className="mt-2 text-[clamp(32px,3.3vw,44px)] font-semibold leading-[1.1] tracking-tight">
                Questions Superwhisper shoppers ask
              </h2>
              <p className="mt-4 text-[16px] leading-[1.65] text-editorial-ink-2">
                Straight answers on platforms, privacy, and whether Voicetypr fits a builder workflow.
              </p>
            </div>

            <div id="faq">
              {faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  open={i === 0}
                  className="group cursor-pointer border-t border-editorial-line/70 py-5 last:border-b last:border-editorial-line/70"
                >
                  <summary className="list-none flex items-start justify-between gap-6 text-[19px] font-semibold leading-[1.32] text-editorial-ink [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-editorial-surface text-base font-light text-editorial-ink-2 [transition:transform_400ms_cubic-bezier(0.32,0.72,0,1)] group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="max-w-[640px] pt-3.5 text-[15px] leading-[1.65] text-editorial-ink-2">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="ed-section">
        <div className="ed-container">
          <RelatedGuidesSection
            eyebrow="still comparing"
            title="Other alternatives worth reading"
            description="If Superwhisper is not the only app on your list, these pages cover the same lifetime-pricing and local-transcription story for other tools."
            links={relatedGuides}
            dataTrackPrefix="superwhisper-alt-related-guides"
            embedded
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="ed-section">
        <div className="ed-container">
          <div className="cta-dark-card relative overflow-hidden rounded-[2rem] bg-editorial-ink px-6 py-10 text-center text-white shadow-[0_28px_90px_rgba(24,24,26,0.18)] md:px-10 md:py-12">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#d4965d]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto mb-5 max-w-3xl text-[clamp(32px,4vw,48px)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
                Ready to switch?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/72">
                3-day free trial. No credit card. Pay once, keep forever.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  data-track="superwhisper-alt-final-cta-click"
                  className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink transition duration-300 ease-out hover:bg-editorial-surface active:scale-95"
                >
                  Start free trial
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-12 items-center rounded-md border border-white/18 bg-white/8 px-5 text-sm font-medium text-white transition hover:bg-white/14 active:scale-95"
                >
                  Buy lifetime license
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
