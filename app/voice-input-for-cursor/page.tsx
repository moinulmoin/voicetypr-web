import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import RelatedGuidesSection from "../components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

export const metadata: Metadata = {
  title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows | Voice Input for Cursor",
  description:
    "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Looking for voice input for Cursor? Works in Cursor, Claude, ChatGPT and any text field. Local transcription by default.",
  keywords: [
    "voice input for cursor",
    "cursor voice typing",
    "cursor dictation",
    "voice to text cursor",
    "offline voice input",
    "ai voice cursor",
  ],
  alternates: {
    canonical: "https://voicetypr.com/voice-input-for-cursor",
  },
  openGraph: {
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows | Voice Input for Cursor",
    description:
      "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Voice input for Cursor that works offline by default.",
    url: "https://voicetypr.com/voice-input-for-cursor",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows | Voice Input for Cursor",
    description: "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Voice input for Cursor.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const useCases = [
  ["Prompt the agent", "Describe the full change — what should happen, what must not break, and how you'll know it's done — before it shrinks into a too-short prompt."],
  ["Explain a bug", "Dictate reproduction steps and expected behavior directly into the issue, chat, or Cursor composer."],
  ["Write PR notes", "Summarize what changed while the context is still in your head."],
  ["Leave useful comments", "Capture why the code exists, not just what it does, without breaking flow."],
] as const;

const checklist = [
  "Works in Cursor because it pastes text into the focused input, not a special integration.",
  "Dictation runs locally by default; your spoken prompts aren't sent to a cloud transcription service.",
  "Uses the same hotkey pattern across Claude, ChatGPT, VS Code, Slack, and docs.",
  "Starts at $39 once; the 2-device option is $59 for laptop + desktop.",
] as const;

const cursorRelatedGuides: DiscoveryLink[] = [
  {
    href: "/voice-typing",
    eyebrow: "broader workflow",
    title: "Voice typing in every app",
    description:
      "For developers who want the general pay-once dictation story before narrowing to Cursor-specific workflows.",
    ctaLabel: "See the general guide",
  },
  {
    href: "/best/windows-voice-typing",
    eyebrow: "windows developers",
    title: "Windows voice typing",
    description: "A better fit when the stack is Windows-heavy and the comparison starts with built-in tools.",
    ctaLabel: "See the Windows guide",
  },
  {
    href: "/use-cases/developers",
    eyebrow: "why builders switch",
    title: "Developers use case",
    description: "Prompts, PR notes, and issue context—the English around the code, not just Cursor paste-ins.",
    ctaLabel: "See the use case",
  },
];

export default function VoiceInputForCursorPage() {
  return (
    <>
      <Header />

      <main className="bg-[#0a0a0a] text-white">
        <section className="border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6 pt-16 pb-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-sm text-white/60 mb-6">
                Voice Input for Cursor
              </div>
              <h1 className="text-6xl font-semibold tracking-[-2.5px] leading-none mb-6">
                VoiceTypr — Offline AI Voice Dictation for Mac &amp; Windows
              </h1>
              <p className="text-2xl text-white/70 leading-tight mb-8">
                Private voice input for Cursor that runs offline by default. Works on Mac and Windows with a global hotkey.
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
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-10">
              <div className="text-sm font-medium tracking-[3px] text-white/50">DEVELOPER WORKFLOWS</div>
              <h2 className="mt-3 text-5xl font-semibold tracking-[-1.5px]">Write Cursor prompts with your voice</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {useCases.map(([title, body]) => (
                <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.015] p-8">
                  <h3 className="text-[18px] font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-white/70">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16">
          <div className="max-w-4xl mx-auto px-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm font-medium tracking-[3px] text-white/50">WHY IT WORKS</div>
              <h2 className="mt-3 text-5xl font-semibold tracking-[-1.5px]">Cursor rewards context. Voice makes context cheap.</h2>
            </div>
            <ul className="space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-[1.6] text-white/75">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-400" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-white/10 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="text-emerald-400 text-sm font-medium mb-3">OFFLINE BY DEFAULT</div>
                <h3 className="text-3xl font-semibold mb-4">Your voice never leaves your machine</h3>
                <p className="text-white/70">Transcription runs locally using Whisper and Parakeet models. No cloud required for core dictation in Cursor.</p>
              </div>
              <div>
                <div className="text-emerald-400 text-sm font-medium mb-3">WORKS EVERYWHERE</div>
                <h3 className="text-3xl font-semibold mb-4">One hotkey for Cursor + everything else</h3>
                <p className="text-white/70">Global shortcut works in Cursor, Claude, ChatGPT, Gmail, Slack, Notion, VS Code — any text field on your screen.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-semibold tracking-[-1.5px] mb-6">Voice input for Cursor that actually works offline</h2>
            <p className="text-xl text-white/70 mb-8">3-day free trial. No credit card. Works in Cursor, Claude, VS Code, and every text field.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/download"
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
          eyebrow="Related guides"
          title="More guides for Cursor and developer dictation"
          description="Compare broader typing guides, Windows-specific options, and developer workflows beyond Cursor paste-ins."
          links={cursorRelatedGuides}
          dataTrackPrefix="voice-input-for-cursor-related-guides"
        />
      </div>

      <Footer />
    </>
  );
}