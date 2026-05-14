import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

export const metadata: Metadata = {
  title: "Voice Input for Cursor — VoiceTypr",
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
    title: "Voice Input for Cursor — VoiceTypr",
    description:
      "Dictate prompts, specs, bug reports, and PR notes into Cursor with local voice-to-text.",
    url: "https://voicetypr.com/voice-input-for-cursor",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Input for Cursor — VoiceTypr",
    description:
      "Dictate prompts, specs, bug reports, and PR notes into Cursor with local voice-to-text.",
    images: ["/voicetypr-og.png"],
  },
};

const useCases = [
  ["Prompt the agent", "Talk through the change, constraints, edge cases, and acceptance criteria before the idea collapses into a one-line prompt."],
  ["Explain a bug", "Dictate reproduction steps and expected behavior directly into the issue, chat, or Cursor composer."],
  ["Write PR notes", "Summarize what changed while the context is still in your head."],
  ["Leave useful comments", "Capture why the code exists, not just what it does, without breaking flow."],
] as const;

const checklist = [
  "Works in Cursor because it pastes text into the focused input, not a special integration.",
  "Runs locally, so private code context and dictated notes stay on your machine.",
  "Uses the same hotkey pattern across Claude, ChatGPT, VS Code, Slack, and docs.",
  "Starts at $39 once; the 2-device Plus plan is $59 for laptop + desktop.",
] as const;

export default function VoiceInputForCursorPage() {
  return (
    <main id="main-content" className="landing-editorial min-h-screen">
      <Header />
      <section className="ed-section ed-section-hero pt-32 lg:pt-40">
        <div className="ed-container max-w-4xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">voice input for cursor</p>
          <h1 className="text-[clamp(40px,6vw,70px)] font-semibold leading-[1.02] tracking-tight">
            Speak the context Cursor needs before your fingers compress it.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
            VoiceTypr turns spoken prompts, implementation notes, and bug reports into clean text in Cursor. Hold a hotkey, talk, release, paste.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/download"
              className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
            >
              Download for free
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
      <Footer />
    </main>
  );
}
