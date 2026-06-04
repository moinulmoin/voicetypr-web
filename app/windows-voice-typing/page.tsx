import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";

export const metadata: Metadata = {
  title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
  description:
    "VoiceTypr is a private offline AI voice dictation app for Windows 10+. Works in any app with a global hotkey. Local transcription by default. Pay once, no subscription.",
  keywords: [
    "windows voice typing",
    "windows dictation app",
    "offline voice typing windows",
    "voice to text windows",
    "best dictation app for windows",
    "offline dictation windows",
  ],
  alternates: {
    canonical: "https://voicetypr.com/windows-voice-typing",
  },
  openGraph: {
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
    description: "VoiceTypr is a private offline AI voice dictation app for Windows. Pay once.",
    url: "https://voicetypr.com/windows-voice-typing",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceTypr — Offline AI Voice Dictation for Mac & Windows",
    description: "VoiceTypr is a private offline AI voice dictation app for Windows. Pay once.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

export default function WindowsVoiceTypingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Windows voice typing that actually works offline
        </h1>

        <p className="text-xl text-zinc-400 mb-12 max-w-3xl">
          VoiceTypr is a private offline voice typing app for Windows 10+. 
          Dictate into any app using a global hotkey. Local AI transcription by default. No subscription.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">OFFLINE BY DEFAULT</div>
            <h3 className="text-2xl font-semibold mb-3">Local transcription on Windows</h3>
            <p className="text-zinc-400">
              Uses Whisper models running locally. Your voice is processed on your machine — 
              no cloud required for core dictation.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">ANY APP ON WINDOWS</div>
            <h3 className="text-2xl font-semibold mb-3">Works in Cursor, Notepad, browsers, everything</h3>
            <p className="text-zinc-400">
              One global hotkey works across all Windows apps. 
              Cursor, VS Code, Notepad, browsers, Slack, Gmail — anywhere you type.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">GPU ACCELERATION</div>
            <h3 className="text-2xl font-semibold mb-3">Uses your graphics card when available</h3>
            <p className="text-zinc-400">
              Automatically detects and uses NVIDIA, AMD, or Intel GPUs on Windows 
              for faster transcription when possible.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-emerald-400 text-sm font-medium mb-3">LIFETIME LICENSE</div>
            <h3 className="text-2xl font-semibold mb-3">One payment, yours forever</h3>
            <p className="text-zinc-400">
              No recurring fees. All updates included. 
              7-day money-back guarantee if it doesn&apos;t save you time.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link
            href="/download"
            className="inline-flex items-center justify-center rounded-xl bg-white text-black px-8 py-4 text-lg font-medium hover:bg-zinc-200 transition-colors"
          >
            Download for Windows
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
