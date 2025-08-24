import type { Metadata } from "next";
import DownloadPageClient from "./DownloadPageClient";

export const metadata: Metadata = {
  title: "Download VoiceTypr - AI Voice to Text Software for Mac & Windows",
  description: "Download VoiceTypr voice to text software. Works with ChatGPT, Claude, Cursor. 100% private, offline processing. One-time purchase, no subscription.",
  keywords: [
    "download voice to text",
    "VoiceTypr download", 
    "voice typing software download",
    "speech to text download",
    "voice dictation software",
    "best voice dictation",
    "superwhisper alternative",
    "superwhisper alternative for macos",
    "superwhisper alternative for windows",
    "wispr flow alternative",
    "wispr flow alternative for macos",
    "wispr flow alternative for windows",
    "ChatGPT voice input",
    "Claude voice typing",
    "Cursor voice typing",
    "macOS voice to text",
    "Windows voice to text",
    "voice to text for macOS",
    "voice to text for Windows",
    "voice transcription download"
  ],
  openGraph: {
    title: "Download VoiceTypr - AI Voice to Text Software",
    description: "Download VoiceTypr voice to text software. Works with ChatGPT, Claude, Cursor. 100% private, offline processing.",
    type: "website",
    url: "https://voicetypr.com/download",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download VoiceTypr - AI Voice to Text Software",
    description: "Download VoiceTypr voice to text software. Works with ChatGPT, Claude, Cursor. 100% private, offline.",
  },
  alternates: {
    canonical: "https://voicetypr.com/download",
  },
};

export default function DownloadPage() {
  return <DownloadPageClient />;
}