import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import RelatedGuidesSection from "../components/RelatedGuidesSection";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows | Superwhisper Alternative",
  description:
    "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Looking for a Superwhisper alternative? Local transcription by default, lifetime license, no subscription.",
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
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows | Superwhisper Alternative",
    description:
      "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Looking for a Superwhisper alternative? Local transcription by default, lifetime license, no subscription.",
    url: "https://voicetypr.com/superwhisper-alternative",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows | Superwhisper Alternative",
    description:
      "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Looking for a Superwhisper alternative? Local transcription by default, lifetime license, no subscription.",
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
    q: "Does VoiceTypr work on Windows if I already use Superwhisper on Mac?",
    a: "Yes. VoiceTypr ships native builds for macOS and Windows under one lifetime license tier. You can run the same hotkey workflow on both machines without maintaining two separate subscriptions.",
  },
  {
    q: "What does local transcription mean in practice?",
    a: "Your voice is transcribed on your machine after setup. Optional AI formatting can send text — not audio — to your configured provider when you turn it on.",
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
    <>
      <Header />

      <main className="bg-[#0a0a0a] text-white">
        <section className="border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6 pt-16 pb-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-sm text-white/60 mb-6">
                Superwhisper Alternative
              </div>
              <h1 className="text-6xl font-semibold tracking-[-2.5px] leading-none mb-6">
                VoiceTypr — Offline AI Voice Dictation for Mac &amp; Windows
              </h1>
              <p className="text-2xl text-white/70 leading-tight mb-8">
                A private, lifetime-priced Superwhisper alternative that works on both Mac and Windows with offline dictation by default.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/download"
                  className="inline-flex h-14 items-center rounded-xl bg-white px-8 text-lg font-medium text-black transition hover:bg-white/90 active:scale-[0.985]"
                >
                  Download free trial
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-14 items-center rounded-xl border border-white/20 px-8 text-lg font-medium transition hover:bg-white/5 active:scale-[0.985]"
                >
                  See pricing
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/50">3-day free trial • No credit card • Pay once, keep forever</p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-10">
              <div className="text-sm font-medium tracking-[3px] text-white/50">THE COMPARISON</div>
              <h2 className="mt-3 text-5xl font-semibold tracking-[-1.5px]">VoiceTypr vs Superwhisper</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-white/10 bg-white/[0.03]">
                  <tr>
                    <th className="px-5 py-4 font-medium text-white">Criterion</th>
                    <th className="px-5 py-4 font-medium text-white">VoiceTypr</th>
                    <th className="px-5 py-4 font-medium text-white/60">Superwhisper</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([criterion, voicetypr, competitor]) => (
                    <tr key={criterion} className="border-t border-white/10">
                      <td className="px-5 py-4 font-medium text-white">{criterion}</td>
                      <td className="px-5 py-4 text-white/90">{voicetypr}</td>
                      <td className="px-5 py-4 text-white/60">{competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-10">
              <div className="text-sm font-medium tracking-[3px] text-white/50">WHY PEOPLE SWITCH</div>
              <h2 className="mt-3 text-5xl font-semibold tracking-[-1.5px]">Switch when the subscription stops matching the workflow</h2>
            </div>

            <ul className="space-y-4 max-w-3xl">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3 text-[16px] leading-[1.6] text-white/75">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-400" aria-hidden />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.015] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="h-5 w-5 text-emerald-400" />
                  <div className="font-medium">Offline by default</div>
                </div>
                <p className="text-white/70">Transcription runs locally on your machine. No cloud required for core dictation.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.015] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="h-5 w-5 text-emerald-400" />
                  <div className="font-medium">Mac + Windows</div>
                </div>
                <p className="text-white/70">One app. Same features on both platforms. Superwhisper is Mac-only.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16" id="faq">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <div>
                <div className="text-sm font-medium tracking-[3px] text-white/50">BEFORE YOU SWITCH</div>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-1px]">Questions Superwhisper shoppers ask</h2>
                <p className="mt-4 text-[16px] leading-[1.6] text-white/70">
                  Straight answers on platforms, privacy, and whether VoiceTypr fits a builder workflow.
                </p>
              </div>
              <div>
                {faqs.map((faq, i) => (
                  <details
                    key={faq.q}
                    open={i === 0}
                    className="group cursor-pointer border-t border-white/10 py-5 last:border-b last:border-white/10"
                  >
                    <summary className="flex list-none items-start justify-between gap-6 text-[18px] font-semibold leading-[1.3] text-white [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-white/10 text-base font-light text-white/70 transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="max-w-[640px] pt-3.5 text-[15px] leading-[1.6] text-white/70">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-semibold tracking-[-1.5px] mb-6">Ready to switch?</h2>
            <p className="text-xl text-white/70 mb-8">3-day free trial. No credit card. Pay once.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/download"
                data-track="superwhisper-alt-final-cta-click"
                className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink transition hover:bg-editorial-surface active:scale-95"
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
        </section>
      </main>

      <div className="landing-editorial bg-editorial-bg">
        <RelatedGuidesSection
          eyebrow="still comparing"
          title="Other alternatives worth reading"
          description="If Superwhisper is not the only app on your list, these pages cover the same lifetime-pricing and local-transcription story for other tools."
          links={relatedGuides}
          dataTrackPrefix="superwhisper-alt-related-guides"
        />
      </div>

      <Footer />
    </>
  );
}