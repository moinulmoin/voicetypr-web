import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { Analytics } from "@/components/analytics";
import { Providers } from "@/components/providers";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "VoiceTypr - Open Source AI Voice to Text Dictation Tool",
  description:
    "Open source AI voice to text dictation tool, alternative to Wispr Flow, SuperWhisper for viber coders, super AI users in macOS, Windows.",
  keywords: [
    "voice to text",
    "AI dictation",
    "Wispr Flow alternative",
    "SuperWhisper alternative",
    "open source",
    "voice transcription",
    "viber coders",
    "macOS",
    "Windows"
  ],
  authors: [{ name: "Moinul Moin" }],
  openGraph: {
    title: "VoiceTypr - Open Source AI Voice to Text Dictation Tool",
    description:
      "Open source AI voice to text dictation tool, alternative to Wispr Flow, SuperWhisper for viber coders, super AI users in macOS, Windows.",
    type: "website",
    url: "https://voicetypr.com",
    siteName: "VoiceTypr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VoiceTypr - Open Source AI Voice to Text Dictation Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceTypr - Open Source AI Voice to Text Dictation Tool",
    description:
      "Open source AI voice to text dictation tool, alternative to Wispr Flow, SuperWhisper for viber coders, super AI users in macOS, Windows",
    images: ["/og-image.png"],
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <body className={`${fontSans.variable} font-sans antialiased `}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
