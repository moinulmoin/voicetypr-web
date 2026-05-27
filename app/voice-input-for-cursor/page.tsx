import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import type { DiscoveryLink } from "@/lib/seo-discovery";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

export const metadata: Metadata = {
  title: "Voice Input for Cursor in 2026 — VoiceTypr",
  description:
    "Use voice input in Cursor with VoiceTypr. Dictate prompts, bug reports, PR notes, and refactor plans locally, then paste into Cursor with a hotkey.",
  keywords: [
    "voice input for cursor",
    "cursor voice typing",
    "dictate into cursor",
    "voice prompts for cursor",
    "ai coding voice input",
    "developer dictation app",
  ],
  alternates: {
    canonical: "https://voicetypr.com/voice-input-for-cursor",
  },
  openGraph: {
    title: "Voice Input for Cursor in 2026 — VoiceTypr",
    description:
      "Dictate prompts, specs, bug reports, and PR notes into Cursor with local voice-to-text.",
    url: "https://voicetypr.com/voice-input-for-cursor",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Input for Cursor in 2026 — VoiceTypr",
    description:
      "Dictate prompts, specs, bug reports, and PR notes into Cursor with local voice-to-text.",
    images: ["/voicetypr-og.png"],
  },
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
    <main id="main-content" className="landing-editorial min-h-screen">
      <Header />
      <section className="ed-section ed-section-hero pt-32 lg:pt-40">
        <div className="ed-container max-w-4xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">voice input for cursor</p>
          <h1 className="text-[clamp(40px,6vw,70px)] font-semibold leading-[1.02] tracking-tight">
            Write Cursor prompts with your voice, not your keyboard.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
            VoiceTypr turns spoken prompts, implementation notes, and bug reports into clean text in Cursor. Hold a hotkey, talk, release, paste.
          </p>
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
              Buy lifetime license
            </Link>
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container max-w-5xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">developer workflows</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {useCases.map(([title, body]) => (
              <article key={title} className="rounded-xl bg-editorial-surface-2 p-6">
                <h3 className="text-[18px] font-medium text-editorial-ink">{title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-editorial-ink-2">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">why it works</p>
            <h2 className="mt-2 text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-tight">
              Cursor rewards context. Voice makes context cheap.
            </h2>
          </div>
          <ul className="space-y-4">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3 text-[16px] leading-[1.6] text-editorial-ink-2">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-editorial-ink" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RelatedGuidesSection
        eyebrow="Related guides"
        title="More guides for Cursor and developer dictation"
        description="Compare broader typing guides, Windows-specific options, and developer workflows beyond Cursor paste-ins."
        links={cursorRelatedGuides}
        dataTrackPrefix="voice-input-for-cursor-related-guides"
      />

      <section className="ed-section">
        <div className="ed-container">
          <div className="cta-dark-card relative overflow-hidden rounded-[2rem] bg-editorial-ink px-6 py-10 text-center text-white shadow-[0_28px_90px_rgba(24,24,26,0.18)] md:px-10 md:py-12">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#d4965d]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto mb-5 max-w-3xl text-[clamp(32px,4vw,48px)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
                Write your next Cursor prompt with your voice.
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/72">
                3-day free trial. No credit card. Works in Cursor, Claude, VS Code, and every text field.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink transition duration-300 ease-out hover:bg-editorial-surface active:scale-95"
                >
                  Start 3-day free trial
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
