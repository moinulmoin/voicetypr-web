import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";

export const metadata: Metadata = {
  title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
  description:
    "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Dictate into any app, including Cursor, Claude, ChatGPT, Gmail, Slack, Notion, and Google Docs. Pay once, no subscription.",
  keywords: [
    "voice typing app",
    "voice typer",
    "voice typing app for mac",
    "voice typing app for windows",
    "offline voice typing",
    "private voice typing app",
    "offline dictation app",
    "voice to text app",
  ],
  alternates: {
    canonical: "https://voicetypr.com/voice-typing-app",
  },
  openGraph: {
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
    description:
      "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Dictate into any app. Pay once, no subscription.",
    url: "https://voicetypr.com/voice-typing-app",
    siteName: "VoiceTypr",
    images: [
      {
        url: "/voicetypr-og.png",
        width: 1200,
        height: 630,
        alt: "VoiceTypr — Offline AI Voice Dictation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
    description:
      "VoiceTypr is a private offline AI voice dictation app for Mac and Windows. Pay once, no subscription.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

export default function VoiceTypingAppPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          A private voice typing app that works everywhere
        </h1>

        <p className="text-xl text-zinc-400 mb-12 max-w-3xl">
          Looking for a voice typer app for your computer? VoiceTypr is an offline AI dictation app for Mac and Windows that lets you speak into any app, including Cursor, Claude, ChatGPT, Gmail, Slack, Notion, and Google Docs.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">OFFLINE BY DEFAULT</div>
            <h3 className="text-2xl font-semibold mb-3">Your voice never leaves your machine</h3>
            <p className="text-zinc-400">
              Transcription happens locally using Whisper and Parakeet models. No cloud required for core dictation.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">WORKS EVERYWHERE</div>
            <h3 className="text-2xl font-semibold mb-3">Any app. Any text field.</h3>
            <p className="text-zinc-400">
              Cursor, Claude, ChatGPT, Gmail, Slack, Notion, Google Docs, VS Code, Word — if it accepts text, VoiceTypr works.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">MAC + WINDOWS</div>
            <h3 className="text-2xl font-semibold mb-3">True cross-platform support</h3>
            <p className="text-zinc-400">
              One app. One license. Works on both macOS and Windows with the same features and hotkeys.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">PAY ONCE</div>
            <h3 className="text-2xl font-semibold mb-3">No subscriptions. Ever.</h3>
            <p className="text-zinc-400">
              Lifetime license. One-time payment. All future updates included. No recurring fees.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link
            href="/download"
            className="inline-flex items-center justify-center rounded-xl bg-white text-black px-8 py-4 text-lg font-medium hover:bg-zinc-200 transition-colors"
          >
            Download VoiceTypr
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-lg font-medium hover:bg-white/5 transition-colors"
          >
            See pricing
          </Link>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-zinc-500">More guides available on the site.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
