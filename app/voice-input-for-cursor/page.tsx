import type { Metadata } from "next";
import Link from "next/link";
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

export default function VoiceInputForCursorPage() {
  return (
    <>
      <Header />

      <main className="bg-[#0a0a0a] text-white">
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
                href="/pricing"
                className="inline-flex h-14 items-center rounded-xl border border-white/20 px-8 text-lg font-medium transition hover:bg-white/5 active:scale-[0.985]"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-16">
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
        </div>

        <div className="border-t border-white/10 py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-semibold tracking-[-1.5px] mb-6">Voice input for Cursor that actually works offline</h2>
            <Link
              href="/download"
              className="inline-flex h-14 items-center rounded-xl bg-white px-8 text-lg font-medium text-black transition hover:bg-white/90 active:scale-[0.985]"
            >
              Try VoiceTypr free
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
