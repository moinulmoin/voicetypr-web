import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";

export const metadata: Metadata = {
  title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
  description:
    "VoiceTypr is a private offline AI voice dictation app for Mac. Works in Cursor, Claude, ChatGPT, Gmail, Slack and any text field. Local transcription by default. Lifetime license.",
  keywords: [
    "mac dictation app",
    "offline dictation mac",
    "mac voice typing",
    "mac voice to text",
    "best dictation app for mac",
    "offline mac dictation",
  ],
  alternates: {
    canonical: "https://voicetypr.com/mac-dictation-app",
  },
  openGraph: {
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
    description: "VoiceTypr is a private offline AI voice dictation app for Mac. Pay once, no subscription.",
    url: "https://voicetypr.com/mac-dictation-app",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
    description: "VoiceTypr is a private offline AI voice dictation app for Mac. Pay once.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

export default function MacDictationAppPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Mac dictation app that actually works offline
        </h1>

        <p className="text-xl text-zinc-400 mb-12 max-w-3xl">
          VoiceTypr is a private offline dictation app for Mac. 
          Dictate into Cursor, Claude, ChatGPT, Gmail, Slack, Notion — any text field — with local AI models. No subscription.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">OFFLINE FIRST</div>
            <h3 className="text-2xl font-semibold mb-3">Local transcription by default</h3>
            <p className="text-zinc-400">
              Uses Whisper and Parakeet models that run on your Mac. 
              Your voice never leaves your machine unless you explicitly enable cloud cleanup.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">WORKS IN EVERY APP</div>
            <h3 className="text-2xl font-semibold mb-3">Global hotkey, any text field</h3>
            <p className="text-zinc-400">
              One shortcut works across Cursor, Claude, ChatGPT, Gmail, Slack, Notion, 
              VS Code, and every native Mac app.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">APPLE SILICON + INTEL</div>
            <h3 className="text-2xl font-semibold mb-3">Native support for both</h3>
            <p className="text-zinc-400">
              Optimized for M1, M2, M3, M4 Macs. Also works great on Intel Macs. 
              Fast transcription on both architectures.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">LIFETIME LICENSE</div>
            <h3 className="text-2xl font-semibold mb-3">Pay once, use forever</h3>
            <p className="text-zinc-400">
              One-time purchase. No monthly fees. All future updates included. 
              7-day money-back guarantee.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link
            href="/download"
            className="inline-flex items-center justify-center rounded-xl bg-white text-black px-8 py-4 text-lg font-medium hover:bg-zinc-200 transition-colors"
          >
            Download for Mac
          </Link>
          <Link
            href="/#pricing"
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
