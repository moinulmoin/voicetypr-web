import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import RelatedGuidesSection from "../components/RelatedGuidesSection";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "Superwhisper Alternative in 2026 — VoiceTypr",
  description:
    "Looking for a Superwhisper alternative? VoiceTypr transcribes locally by default, works on Mac and Windows, and starts at $39 once. No monthly dictation subscription.",
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
    title: "Superwhisper Alternative in 2026 — VoiceTypr",
    description:
      "Local transcription by default on Mac and Windows. Pay once, dictate into any app you type in.",
    url: "https://voicetypr.com/superwhisper-alternative",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superwhisper Alternative in 2026 — VoiceTypr",
    description:
      "Local transcription by default on Mac and Windows. Pay once, dictate into any app you type in.",
    images: ["/voicetypr-og.png"],
  },
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
    q: "Does VoiceTypr work on Windows if I already use Superwhisper on Mac?",
    a: "Yes. VoiceTypr ships native builds for macOS and Windows under one lifetime license tier. You can run the same hotkey workflow on both machines without maintaining two separate subscriptions.",
  },
  {
    q: "What does local transcription mean in practice?",
    a: "Your voice is transcribed on your machine using Whisper (macOS and Windows) or Parakeet (macOS Apple Silicon) after setup. Optional AI formatting can send text—not audio—to your configured provider when you turn it on.",
  },
  {
    q: "Will it work with Cursor, Claude, and ChatGPT?",
    a: "Yes. Hold a hotkey, speak, release. VoiceTypr pastes into any text field, including Cursor, Claude desktop, ChatGPT, VS Code, Slack, Gmail, and Notion.",
  },
  {
    q: "Can I try VoiceTypr before canceling Superwhisper?",
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

export default function SuperwhisperAlternativePage() {
  return (
    <main id="main-content" className="landing-editorial min-h-screen">
      <Header />
      <section className="ed-section ed-section-hero pt-32 lg:pt-40">
        <div className="ed-container max-w-4xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">superwhisper alternative</p>
          <h1 className="text-[clamp(40px,6vw,70px)] font-semibold leading-[1.02] tracking-tight">
            The Superwhisper alternative for cross-platform, pay-once dictation
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
            The Superwhisper alternative that fits a Mac plus Windows stack: VoiceTypr transcribes locally by default, optional AI formatting can use cloud text workflows if enabled, and you pay once instead of adding another subscription.
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
                  <th className="px-5 py-4 font-medium text-editorial-ink">VoiceTypr</th>
                  <th className="px-5 py-4 font-medium text-editorial-ink-2">Superwhisper</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {rows.map(([criterion, voicetypr, competitor]) => (
                  <tr key={criterion} className="border-b border-editorial-line/50 last:border-b-0">
                    <td className="px-5 py-4 font-medium text-editorial-ink">{criterion}</td>
                    <td className="px-5 py-4 text-editorial-ink">{voicetypr}</td>
                    <td className="px-5 py-4 text-editorial-ink-2">{competitor}</td>
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
            Switch when the subscription stops matching the workflow
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
                Questions Superwhisper shoppers ask
              </h2>
              <p className="text-[16px] leading-[1.6] text-editorial-ink-2">
                Straight answers on platforms, privacy, and whether VoiceTypr fits a builder workflow.
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
        description="If Superwhisper is not the only app on your list, these pages cover the same lifetime-pricing and local-transcription story for other tools."
        links={relatedGuides}
        dataTrackPrefix="superwhisper-alt-related-guides"
      />

      <section className="ed-section">
        <div className="ed-container">
          <div className="cta-dark-card relative overflow-hidden rounded-[2rem] bg-editorial-ink px-6 py-10 text-center text-white shadow-[0_28px_90px_rgba(24,24,26,0.18)] md:px-10 md:py-12">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#d4965d]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto mb-5 max-w-3xl text-[clamp(32px,4vw,48px)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
                Try the Superwhisper alternative with a 3-day trial
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/72">
                No credit card. Transcription runs locally by default. One payment for Mac and Windows.
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
