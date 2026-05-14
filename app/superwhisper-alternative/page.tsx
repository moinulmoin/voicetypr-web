import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
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
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">superwhisper alternative</p>
          <h1 className="text-[clamp(40px,6vw,70px)] font-semibold leading-[1.02] tracking-tight">
            Offline dictation for builders who work across Mac and Windows.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
            VoiceTypr is the pay-once Superwhisper alternative for people who dictate into Cursor, Claude, ChatGPT, email, and docs — without renting another subscription.
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
                    <td className="px-5 py-4 text-editorial-ink">VoiceTypr: {voicetypr}</td>
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
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">quick-win buyer intent</p>
          <h2 className="mt-2 text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-tight">
            Switch when the subscription stops matching the workflow.
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
      <Footer />
    </main>
  );
}
