import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

export const metadata: Metadata = {
  title: "Superwhisper Alternative — VoiceTypr (Offline, Mac + Windows, Pay-once)",
  description:
    "Looking for a Superwhisper alternative? VoiceTypr is offline, works on Mac and Windows, and starts at $39 once. No monthly dictation subscription.",
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
    title: "Superwhisper Alternative — VoiceTypr",
    description:
      "Offline voice-to-text for Mac and Windows. Pay once, use it anywhere you type.",
    url: "https://voicetypr.com/superwhisper-alternative",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superwhisper Alternative — VoiceTypr",
    description:
      "Offline voice-to-text for Mac and Windows. Pay once, use it anywhere you type.",
    images: ["/voicetypr-og.png"],
  },
};

const rows = [
  ["Pricing", "From $39 once", "Monthly, annual, or higher lifetime price"],
  ["Platforms", "Mac + Windows", "Mac-first; Windows support depends on current release"],
  ["Offline transcription", "Yes — local Whisper and Parakeet models", "Partial/local options, depending on model and setup"],
  ["Best fit", "Builders who want private dictation everywhere", "Apple-heavy users who want a polished Mac workflow"],
] as const;

const reasons = [
  "You want one license that covers a Windows desktop and a Mac laptop.",
  "You dictate prompts, PR notes, docs, Slack replies, and emails into many different apps.",
  "You prefer paying once instead of adding another monthly tool to the stack.",
  "You want your voice processed locally by default, not routed through a cloud account.",
] as const;

export default function SuperwhisperAlternativePage() {
  return (
    <main id="main-content" className="landing-editorial min-h-screen">
      <Header />
      <section className="ed-section ed-section-hero pt-32 lg:pt-40">
        <div className="ed-container max-w-4xl">
          <p className="ed-eyebrow">superwhisper alternative</p>
          <h1 className="font-serif text-[clamp(44px,6vw,76px)] leading-[1.02] tracking-[-0.03em]">
            Offline dictation for builders who work across Mac and Windows.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
            VoiceTypr is the pay-once Superwhisper alternative for people who dictate into Cursor, Claude, ChatGPT, email, and docs — without renting another subscription.
          </p>
          <Link
            href="/download"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-editorial-ink py-2 pl-5 pr-2 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            Try VoiceTypr free
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </span>
          </Link>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <p className="ed-eyebrow">side by side</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-editorial-line bg-editorial-surface">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-editorial-line bg-editorial-surface-2">
                <tr>
                  <th className="px-5 py-4 font-medium text-editorial-ink">Criterion</th>
                  <th className="px-5 py-4 font-medium text-editorial-ink">VoiceTypr</th>
                  <th className="px-5 py-4 font-medium text-editorial-ink-2">Superwhisper</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([criterion, voicetypr, competitor]) => (
                  <tr key={criterion} className="border-b border-editorial-line/70 last:border-b-0">
                    <td className="px-5 py-4 font-medium text-editorial-ink">{criterion}</td>
                    <td className="px-5 py-4 text-editorial-accent-ink">{voicetypr}</td>
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
          <p className="ed-eyebrow">quick-win buyer intent</p>
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.02em]">
            Switch when the subscription stops matching the workflow.
          </h2>
          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-3 text-[16px] leading-[1.6] text-editorial-ink-2">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-editorial-accent-ink" aria-hidden />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
