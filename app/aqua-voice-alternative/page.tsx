import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import RelatedGuidesSection from "../components/RelatedGuidesSection";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
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
  return JSON.stringify(value).replace(/</g, "\u003c");
}

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
    <main id="main-content" className="landing-editorial min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <Header />
      <section className="ed-section ed-section-hero pt-32 lg:pt-40">
        <div className="ed-container max-w-4xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">aqua voice alternative</p>
          <h1 className="text-[clamp(40px,6vw,70px)] font-semibold leading-[1.02] tracking-tight">
            The Aqua Voice alternative for pay-once dictation on Mac and Windows
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
            The Aqua Voice alternative for buyers tired of subscriptions: transcription runs locally by default, optional AI formatting can use cloud text workflows if enabled, and one license covers Mac and Windows.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/download"
              className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
            >
              Start free trial
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink shadow-sm transition duration-300 ease-out hover:bg-editorial-surface-2 active:scale-95"
            >
              Buy lifetime license
            </Link>
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">the comparison</p>
          <div className="mt-6 overflow-hidden rounded-xl bg-editorial-surface-2 p-1.5">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-editorial-line/60 bg-white">
                <tr>
                  <th className="px-5 py-4 font-medium text-editorial-ink">Criterion</th>
                  <th className="px-5 py-4 font-medium text-editorial-ink">Voicetypr</th>
                  <th className="px-5 py-4 font-medium text-editorial-ink-2">Aqua Voice</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {rows.map(([label, voicetypr, aqua]) => (
                  <tr key={label} className="border-b border-editorial-line/50 last:border-b-0">
                    <td className="px-5 py-4 font-medium text-editorial-ink">{label}</td>
                    <td className="px-5 py-4 text-editorial-ink">{voicetypr}</td>
                    <td className="px-5 py-4 text-editorial-ink-2">{aqua}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container max-w-3xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">why people switch</p>
          <h2 className="mt-2 text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-tight">
            Pay once and keep transcription on your machine by default
          </h2>
          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-3 text-[16px] leading-[1.6] text-editorial-ink-2">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-editorial-ink" aria-hidden />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ed-section" id="faq">
        <div className="ed-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">before you switch</div>
              <h2 className="mb-4 mt-2 text-[clamp(32px,3.6vw,44px)] font-semibold leading-[1.08] tracking-tight">
                Questions Aqua Voice shoppers ask
              </h2>
              <p className="text-[16px] leading-[1.6] text-editorial-ink-2">
                Pricing, platforms, and what local transcription means when you are comparing subscriptions.
              </p>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  open={i === 0}
                  className="group cursor-pointer border-t border-editorial-line py-5 last:border-b last:border-editorial-line"
                >
                  <summary className="flex list-none items-start justify-between gap-6 font-sans text-[19px] font-semibold leading-[1.3] text-editorial-ink [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-editorial-surface-2 text-base font-light text-editorial-ink-2 [transition:transform_400ms_cubic-bezier(0.32,0.72,0,1)] group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="max-w-[640px] pt-3.5 text-[15px] leading-[1.6] text-editorial-ink-2">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedGuidesSection
        eyebrow="still comparing"
        title="Other alternatives worth reading"
        description="If Aqua Voice is not the only subscription dictation app you are weighing, these pages compare Voicetypr to other common picks."
        links={relatedGuides}
        dataTrackPrefix="aqua-voice-alt-related-guides"
      />

      <section className="ed-section">
        <div className="ed-container">
          <div className="cta-dark-card relative overflow-hidden rounded-[2rem] bg-editorial-ink px-6 py-10 text-center text-white shadow-[0_28px_90px_rgba(24,24,26,0.18)] md:px-10 md:py-12">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#d4965d]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto mb-5 max-w-3xl text-[clamp(32px,4vw,48px)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
                Try the Aqua Voice alternative with a 3-day trial
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/72">
                No credit card. Transcription runs locally by default. Pay once for Mac and Windows.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  data-track="aqua-voice-alt-final-cta-click"
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
