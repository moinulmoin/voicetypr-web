import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "Voice Input for Cursor — Offline Dictation for Developers | VoiceTypr",
  description:
    "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Voice input for Cursor that works offline by default. Dictate prompts, PR notes, and comments into Cursor, Claude, ChatGPT and any text field.",
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
    title: "Voice Input for Cursor — Offline Dictation for Developers | VoiceTypr",
    description:
      "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Voice input for Cursor that works offline by default.",
    url: "https://voicetypr.com/voice-input-for-cursor",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Input for Cursor — Offline Dictation for Developers | VoiceTypr",
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
    <main id="main-content" className="landing-editorial relative min-h-screen">
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
              <span>Voice input for Cursor</span>
            </div>

            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
              developer workflow
            </p>
            <h1 className="mt-3 text-[clamp(40px,6vw,70px)] font-semibold leading-[1.02] tracking-tight">
              Voice input for <em>Cursor</em>, offline by default
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
              Private voice input that runs offline by default on Mac and Windows with a global hotkey. Hold a key, speak, and the text lands in the Cursor composer — or any other text field on your screen.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.1em] text-editorial-ink-3">
              <span>Offline by default</span>
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
                href="/#pricing"
                className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink shadow-sm transition duration-300 ease-out hover:bg-editorial-surface-2 active:scale-95"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Developer workflows */}
      <section className="ed-section">
        <div className="ed-container max-w-5xl">
          <div className="mb-8">
            <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
              Developer workflows
            </div>
            <h2 className="mt-2 text-[clamp(32px,4vw,50px)] font-semibold leading-[1.08] tracking-tight">
              Write Cursor prompts with your voice
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map(([title, body]) => (
              <article key={title} className="rounded-2xl bg-editorial-surface-2 p-6">
                <h3 className="text-lg font-semibold tracking-tight text-editorial-ink">{title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-editorial-ink-2">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                Why it works
              </div>
              <h2 className="mt-2 text-[clamp(32px,4vw,50px)] font-semibold leading-[1.08] tracking-tight">
                Cursor rewards context. Voice makes context cheap.
              </h2>
            </div>
            <ul className="space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-[1.65] text-editorial-ink-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-editorial-ink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Offline + works everywhere */}
      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-editorial-line bg-editorial-surface-2 p-6">
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                Offline by default
              </div>
              <h3 className="mt-3 text-[21px] font-semibold leading-[1.2] text-editorial-ink">
                Your voice never leaves your machine
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-editorial-ink-2">
                Transcription runs locally using Whisper and Parakeet models. No cloud required for core dictation in Cursor.
              </p>
            </article>
            <article className="rounded-2xl border border-editorial-line bg-editorial-surface-2 p-6">
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                Works everywhere
              </div>
              <h3 className="mt-3 text-[21px] font-semibold leading-[1.2] text-editorial-ink">
                One hotkey for Cursor + everything else
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-editorial-ink-2">
                Global shortcut works in Cursor, Claude, ChatGPT, Gmail, Slack, Notion, VS Code — any text field on your screen.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="ed-section">
        <div className="ed-container">
          <RelatedGuidesSection
            eyebrow="Related guides"
            title="More guides for Cursor and developer dictation"
            description="Compare broader typing guides, Windows-specific options, and developer workflows beyond Cursor paste-ins."
            links={cursorRelatedGuides}
            dataTrackPrefix="voice-input-for-cursor-related-guides"
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
                Voice input for Cursor that actually works offline
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/72">
                3-day free trial. No credit card. Works in Cursor, Claude, VS Code, and every text field.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  data-track="voice-input-cursor-final-cta-click"
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
