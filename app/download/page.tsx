import type { Metadata } from "next";
import { headers, cookies } from "next/headers";
import DownloadPageClient from "./DownloadPageClient";
import { getLatestReleaseAssets } from "@/app/lib/github";

export const metadata: Metadata = {
  title: "Download VoiceTypr — Best Offline AI Dictation App for Mac & Windows",
  description: "Download the best offline AI voice dictation app for macOS and Windows. Works in ChatGPT, Claude, Cursor, Slack, Gmail, and any app. Pay once.",
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
    title: "Download VoiceTypr — Best Offline AI Dictation App",
    description: "Download the best offline AI voice dictation app for macOS and Windows. Works in any app. Pay once.",
    type: "website",
    url: "https://voicetypr.com/download",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download VoiceTypr — Best Offline AI Dictation App",
    description: "Download the best offline AI voice dictation app for macOS and Windows. Works in any app. Pay once.",
  },
  alternates: {
    canonical: "https://voicetypr.com/download",
  },
};

export default async function DownloadPage() {
  const [assets] = await Promise.all([getLatestReleaseAssets()]);
  
  // Read affonso_referral cookie (Next.js 15+)
  const cookieStore = await cookies();
  const affonsoReferral = cookieStore.get('affonso_referral')?.value || '';
  
  // Get referer header for analytics (sanitize to origin only, not full URL with paths/params)
  let referrer = '';
  try {
    const rawReferer = (await headers()).get('referer');
    if (rawReferer) referrer = new URL(rawReferer).origin;
  } catch { /* invalid URL, keep empty */ }
  
  const ua = (await headers()).get("user-agent")?.toLowerCase() || "";
  const defaultSelected = ua.includes("windows")
    ? "windows"
    : ua.includes("mac")
      ? "macos-silicon"
      : undefined;
      
  return <DownloadPageClient assets={assets} defaultSelected={defaultSelected} affonsoReferral={affonsoReferral} referrer={referrer} />;
}