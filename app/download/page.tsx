import type { Metadata } from "next";
import { headers, cookies } from "next/headers";
import DownloadPageClient from "./DownloadPageClient";
import { getLatestReleaseAssets } from "@/app/lib/github";

export const metadata: Metadata = {
  title: "Voicetypr — Offline AI Voice Dictation for Mac & Windows",
  description: "Download Voicetypr, the private offline AI voice dictation app for Mac and Windows. Works in any app. Pay once, no subscription.",
  keywords: [
    "download voice to text",
    "Voicetypr download", 
    "voice typing software download",
    "speech to text download",
    "voice dictation software",
    "best voice dictation",
    "superwhisper alternative",
    "superwhisper alternative for macos",
    "superwhisper alternative for windows",
    "wispr flow alternative",
    "wispr flow alternative for macos",
  ],
  alternates: {
    canonical: "https://voicetypr.com/download",
  },
  openGraph: {
    title: "Voicetypr — Offline AI Voice Dictation for Mac & Windows",
    description: "Download the private offline AI voice dictation app for Mac and Windows. Pay once, no subscription.",
    url: "https://voicetypr.com/download",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voicetypr — Offline AI Voice Dictation for Mac & Windows",
    description: "Download the private offline AI voice dictation app for Mac and Windows. Pay once.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

export default async function DownloadPage() {
  const assets = await getLatestReleaseAssets();

  const cookieStore = await cookies();
  const affonsoReferral = cookieStore.get('affonso_referral')?.value || '';

  let referrer = '';
  try {
    const rawReferer = (await headers()).get('referer');
    if (rawReferer) referrer = new URL(rawReferer).origin;
  } catch { /* invalid URL, keep empty */ }

  const ua = (await headers()).get('user-agent')?.toLowerCase() || '';
  const defaultSelected = ua.includes('windows')
    ? 'windows'
    : ua.includes('mac')
      ? 'macos-silicon'
      : undefined;

  return (
    <DownloadPageClient
      assets={assets}
      defaultSelected={defaultSelected}
      affonsoReferral={affonsoReferral}
      referrer={referrer}
    />
  );
}