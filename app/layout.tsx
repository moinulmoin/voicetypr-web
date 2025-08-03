import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { Analytics } from "@/components/analytics";
import { Providers } from "@/components/providers";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "VoiceTypr - Write 5x faster with your voice, open source AI voice to text dictation tool",
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
    "Windows",
  ],
  authors: [{ name: "Moinul Moin" }],
  openGraph: {
    title:
      "VoiceTypr - Write 5x faster with your voice, open source AI voice to text dictation tool",
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
        alt: "VoiceTypr - Write 5x faster with your voice, open source AI voice to text dictation tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "VoiceTypr - Write 5x faster with your voice, open source AI voice to text dictation tool",
    description:
      "Open source AI voice to text dictation tool, alternative to Wispr Flow, SuperWhisper for viber coders, super AI users in macOS, Windows",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
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
        {/* Twitter conversion tracking base code */}
        <Script
          id="twitter-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','q7p7w');
            `,
          }}
        />
        {/* End Twitter conversion tracking base code */}
      </body>
    </html>
  );
}
