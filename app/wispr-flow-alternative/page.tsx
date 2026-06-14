import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, Suspense, type ReactNode } from "react";
import { Check, Minus } from "lucide-react";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";
import Pricing from "@/app/components/sections/Pricing";
import { SuccessModal } from "@/app/components/SuccessModal";

export const metadata: Metadata = {
  title: "Wispr Flow Alternative in 2026 — VoiceTypr",
  description:
    "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Looking for a Wispr Flow alternative? Lifetime license, cross-platform, offline by default.",
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
    title: "Wispr Flow Alternative in 2026 — VoiceTypr",
    description:
      "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Lifetime license, cross-platform, offline by default.",
    url: "https://voicetypr.com/wispr-flow-alternative",
    siteName: "VoiceTypr",
    images: [
      {
        url: "/voicetypr-og.png",
        width: 1200,
        height: 630,
        alt: "VoiceTypr — Wispr Flow Alternative",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wispr Flow Alternative in 2026 — VoiceTypr",
    description:
      "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Lifetime license, cross-platform, offline by default.",
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
        label: "2-year cost (VoiceTypr / annual plan)",
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
      "See how VoiceTypr compares if you want a polished Mac workflow but also need Windows and a single lifetime license.",
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
    q: "What does local transcription mean in VoiceTypr?",
    a: "After setup, your voice is transcribed on your device by default. Optional text cleanup can use a cloud provider you choose — never your audio — and only when you turn it on.",
  },
  {
    q: "How does transcription accuracy compare?",
    a: "Pick a faster or more accurate on-device option in settings. Wispr runs in the cloud — some prefer its accent handling, but you trade privacy and a subscription. Try the 3-day trial in your real apps and compare.",
  },
  {
    q: "Will it work with my Cursor / Claude / ChatGPT workflow?",
    a: "Yes. VoiceTypr pastes text into any application that accepts keyboard input — Cursor, Claude desktop, ChatGPT, VS Code, Slack, Gmail, Notion, Linear, anything. Hold a hotkey, speak, release. Text appears wherever your cursor is.",
  },
  {
    q: "Can I switch without losing my Wispr settings?",
    a: "Dictation apps store settings locally per app, so there's nothing to migrate. Most users are up and running in under 5 minutes: install VoiceTypr, pick a hotkey, download a model, start talking. Your Wispr install keeps working in parallel while you evaluate.",
  },
  {
    q: "What if I need more than 4 devices?",
    a: "Contact support@voicetypr.com and we'll help you get set up.",
  },
  {
    q: "What if I already paid for a year of Wispr Flow?",
    a: "Use them in parallel. Once your Wispr sub expires, don't renew. The savings compound: year two is $0 with VoiceTypr vs $144–180/yr with Wispr.",
  },
  {
    q: "What's the catch with 'lifetime'?",
    a: "No catch. Updates stay included. If we ever ship a fundamentally different product, existing customers get a substantial discount on the new version. We're not playing the rug-pull game.",
  },
];

const steps: Array<{ n: string; title: string; body: ReactNode }> = [
  {
    n: "01",
    title: "Download VoiceTypr",
    body: (
      <>
        Mac .dmg or Windows .exe from{" "}
        <Link href="/download" className="text-editorial-ink underline underline-offset-2 hover:underline">
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
        Default is <span className="rounded border border-editorial-line bg-editorial-surface-2 px-1.5 py-0.5 font-mono text-sm">⌘⇧Space</span> on macOS or{" "}
        <span className="rounded border border-editorial-line bg-editorial-surface-2 px-1.5 py-0.5 font-mono text-sm">Ctrl+Shift+Space</span> on Windows.
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

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\u003c");
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
      { "@type": "ListItem", position: 1, name: "VoiceTypr", item: "https://voicetypr.com/" },
      { "@type": "ListItem", position: 2, name: "Wispr Flow alternative", item: "https://voicetypr.com/wispr-flow-alternative" },
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
                VoiceTypr
              </Link>
              <span>/</span>
              <span>Wispr Flow alternative</span>
            </div>

            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
              alternative
            </p>
            <h1 className="mt-3 text-[clamp(40px,6vw,70px)] font-semibold leading-[1.02] tracking-tight">
              A pay-once <em>Wispr Flow</em> alternative that runs offline
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
              Private, lifetime-priced dictation that works on both Mac and Windows with offline transcription by default. No subscription, no cloud dependency.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
              <span>Local transcription</span>
              <span>Mac + Windows</span>
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
                href="#pricing"
                className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink shadow-sm transition duration-300 ease-out hover:bg-editorial-surface-2 active:scale-95"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="ed-section">
        <div className="ed-container max-w-5xl">
          <div className="mb-8">
            <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
              Head-to-head
            </div>
            <h2 className="mt-2 text-[clamp(32px,4vw,50px)] font-semibold leading-[1.08] tracking-tight">
              VoiceTypr vs Wispr Flow
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-editorial-line bg-white/82 shadow-sm backdrop-blur">
            <div className="overflow-x-auto p-1.5">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-editorial-line">
                    <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                      Feature
                    </th>
                    <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium uppercase tracking-[0.14em] text-editorial-ink">
                      VoiceTypr
                    </th>
                    <th scope="col" className="px-3 pb-3 pt-2 text-xs font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                      Wispr Flow
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((group, groupIndex) => (
                    <Fragment key={group.category}>
                      <tr className="border-t border-editorial-line bg-editorial-surface-2">
                        <td colSpan={3} className="px-3 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-editorial-ink-3">
                          {group.category}
                        </td>
                      </tr>
                      {group.rows.map((row) => (
                        <tr key={`${groupIndex}-${row.label}`} className="border-t border-editorial-line">
                          <td className="px-3 py-3 pr-4 align-top text-[14px] text-editorial-ink-2">{row.label}</td>
                          <td className="px-3 py-3 pr-4 align-top">
                            <div className="flex items-start gap-2 text-[14px] text-editorial-ink-2">
                              {row.voicetypr.type === "check" && <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-editorial-ink" />}
                              {row.voicetypr.type === "cross" && <Minus className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500/60" />}
                              <span>{row.voicetypr.text}</span>
                            </div>
                          </td>
                          <td className="px-3 py-3 align-top">
                            <div className="flex items-start gap-2 text-[14px] text-editorial-ink-3">
                              {row.wispr.type === "check" && <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-editorial-ink-3" />}
                              {row.wispr.type === "cross" && <Minus className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500/40" />}
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <div className="mb-8">
            <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
              Real feedback
            </div>
            <h2 className="mt-2 text-[clamp(32px,4vw,50px)] font-semibold leading-[1.08] tracking-tight">
              Why people switch from Wispr Flow
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-editorial-line bg-editorial-surface-2 p-6">
              <p className="text-[16px] leading-snug text-editorial-ink">
                &ldquo;I switched from Wispr Flow because I didn&apos;t want another monthly subscription, and I needed something that works on both Mac and Windows. VoiceTypr ticks both boxes. One payment, no ongoing costs, exactly what I was looking for.&rdquo;
              </p>
              <div className="mt-5 text-[13px] text-editorial-ink-3">— Catherine E.</div>
            </article>
            <article className="rounded-2xl border border-editorial-line bg-editorial-surface-2 p-6">
              <p className="text-[16px] leading-snug text-editorial-ink">
                &ldquo;The app is incredible, I did not expect it to be so fast with offline dictation!&rdquo;
              </p>
              <div className="mt-5 text-[13px] text-editorial-ink-3">— Stephen K. L.</div>
            </article>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <div className="mb-8">
            <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
              No migration · No account transfer
            </div>
            <h2 className="mt-2 text-[clamp(32px,4vw,50px)] font-semibold leading-[1.08] tracking-tight">
              How to switch in under five minutes
            </h2>
          </div>

          <ol className="space-y-9 max-w-[820px]">
            {steps.map((step) => (
              <li key={step.n} className="grid grid-cols-[auto_1fr] gap-6">
                <span className="pt-0.5 text-[34px] font-semibold leading-none text-editorial-ink">{step.n}</span>
                <div>
                  <h3 className="mb-1.5 text-[21px] font-semibold leading-[1.25] text-editorial-ink">{step.title}</h3>
                  <p className="text-[15px] leading-[1.65] text-editorial-ink-2">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
            <div>
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                Questions before switching
              </div>
              <h2 className="mt-2 text-[clamp(32px,3.3vw,44px)] font-semibold leading-[1.1] tracking-tight">
                The honest switch FAQ
              </h2>
              <p className="mt-4 text-[16px] leading-[1.65] text-editorial-ink-2">
                Pulled from real conversations with people who actually made the move.
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
              <div className="mt-8 text-sm text-editorial-ink-3">
                Not answered here?{" "}
                <a
                  href="mailto:support@voicetypr.com"
                  className="text-editorial-ink hover:underline"
                  data-track="wispr-alt-faq-contact-click"
                >
                  Email support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="ed-section" id="pricing">
        <div className="ed-container">
          <Suspense fallback={null}>
            <Pricing />
          </Suspense>
        </div>
      </section>

      {/* Related Guides */}
      <section className="ed-section">
        <div className="ed-container">
          <RelatedGuidesSection
            eyebrow="still comparing"
            title="Other alternatives worth reading"
            description="If Wispr Flow is not the only tool on your list, these pages lay out the same pay-once and local-transcription case for other popular options."
            links={relatedGuides}
            dataTrackPrefix="wispr-alt-related-guides"
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
                Try the Wispr Flow alternative with a 3-day trial
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/72">
                No credit card. Transcription runs locally by default. Pay once, no subscription.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  data-track="wispr-alt-final-cta-click"
                  className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink transition duration-300 ease-out hover:bg-editorial-surface active:scale-95"
                >
                  Start free trial
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex h-12 items-center rounded-md border border-white/18 bg-white/8 px-5 text-sm font-medium text-white transition hover:bg-white/14 active:scale-95"
                >
                  Buy lifetime license
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense>
        <SuccessModal />
      </Suspense>
      <Footer />
    </main>
  );
}
