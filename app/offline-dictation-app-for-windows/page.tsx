import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import { offlineWindowsRelatedGuides } from "@/lib/seo-discovery";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

export const metadata: Metadata = {
  title: "Offline Dictation App for Windows in 2026 — VoiceTypr",
  description:
    "VoiceTypr is an offline dictation app for Windows. Speak into Cursor, ChatGPT, email, docs, and any text field with local transcription from $39 once.",
  keywords: [
    "offline dictation app for windows",
    "windows offline voice typing",
    "windows dictation app",
    "voice to text windows offline",
    "private dictation windows",
  ],
  alternates: {
    canonical: "https://voicetypr.com/offline-dictation-app-for-windows",
  },
  openGraph: {
    title: "Offline Dictation App for Windows in 2026 — VoiceTypr",
    description:
      "Local voice-to-text for Windows. Speak into Cursor, ChatGPT, email, docs, and any app.",
    url: "https://voicetypr.com/offline-dictation-app-for-windows",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offline Dictation App for Windows in 2026 — VoiceTypr",
    description:
      "Local voice-to-text for Windows. Speak into Cursor, ChatGPT, email, docs, and any app.",
    images: ["/voicetypr-og.png"],
  },
};

const benefits = [
  "Transcribes your voice on your Windows machine after setup/model download instead of depending on a browser tab or cloud transcription service.",
  "Works in Word, Outlook, Edge, Chrome, Gmail, Google Docs, Cursor, VS Code, Claude, ChatGPT, Slack, Notion, and normal text fields.",
  "Pay once from $39; public device-count options cover 1, 2, or 4 machines, with more devices available by contacting support.",
  "Designed for Windows users who need a real desktop workflow, not a Mac-first tool with Windows as an afterthought.",
] as const;

const workflows = [
  ["Word, Outlook, and browser forms", "Dictate long replies, reports, forms, and everyday office writing without moving everything into a separate dictation editor."],
  ["Cursor and VS Code", "Dictate prompts, bug notes, PR descriptions, commit context, and code comments without leaving the editor."],
  ["Docs and support replies", "Talk through the answer, paste clean text, then edit the final 10%."],
] as const;

export default function OfflineDictationForWindowsPage() {
  return (
    <main id="main-content" className="landing-editorial min-h-screen">
      <Header />
      <section className="ed-section ed-section-hero pt-32 lg:pt-40">
        <div className="ed-container max-w-4xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">offline dictation for windows</p>
          <h1 className="text-[clamp(40px,6vw,70px)] font-semibold leading-[1.02] tracking-tight">
            Private Windows voice typing for every app you already use.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
            VoiceTypr gives Windows users local AI dictation with a simple hotkey. Speak, release, and the text appears where your cursor already is.
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
        <div className="ed-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">why it ranks</p>
            <h2 className="mt-2 text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-tight">
              Windows dictation is still underserved.
            </h2>
          </div>
          <div className="rounded-2xl border border-editorial-line bg-white/80 p-6 shadow-sm backdrop-blur">
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-[16px] leading-[1.6] text-editorial-ink-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-editorial-ink" aria-hidden />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container max-w-5xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">common workflows</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {workflows.map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-editorial-line bg-white/80 p-6 shadow-sm backdrop-blur">
                <h3 className="text-[18px] font-medium text-editorial-ink">{title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-editorial-ink-2">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuidesSection
        eyebrow="keep the Windows cluster tight"
        title="These are the next pages Windows buyers usually open"
        description="Offline is one angle. Replacement path, broader Windows comparison, and typing-load use cases usually come right after it."
        links={offlineWindowsRelatedGuides}
        dataTrackPrefix="offline-windows-related-guides"
      />

      <Footer />
    </main>
  );
}
