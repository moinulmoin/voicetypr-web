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
    "VoiceTypr - Voice to Text Tool for Busy Founders & AI Super Users",
  description:
    "Voice to text tool for busy founders and AI super users. Stop typing prompts, ship 3x faster with voice dictation. Works with any app including ChatGPT, Claude, Cursor. One-time purchase, no subscription. Alternative to Dragon, SuperWhisper, Wispr Flow.",
  keywords: [
    "voice to text",
    "voice typing",
    "speech to text",
    "dictation software",
    "voice dictation",
    "ChatGPT voice input",
    "Claude voice typing",
    "Cursor voice commands",
    "AI prompt voice",
    "developer tools",
    "Dragon alternative",
    "Wispr Flow alternative",
    "SuperWhisper alternative",
    "macOS dictation",
    "Windows dictation",
    "voice transcription software",
    "Whisper AI",
    "offline transcription",
    "Tauri app",
    "productivity tools",
  ],
  authors: [{ name: "Moinul Moin" }],
  openGraph: {
    title:
      "VoiceTypr - Voice to Text Tool for Busy Founders & AI Super Users",
    description:
      "Voice to text tool for busy founders and AI super users. Stop typing prompts, ship 3x faster with voice. Works with any app including ChatGPT, Claude, Cursor. One-time purchase $19 (61% off). No subscription.",
    type: "website",
    url: "https://voicetypr.com",
    siteName: "VoiceTypr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VoiceTypr - Voice to Text for AI Power Users",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "VoiceTypr - Voice to Text Tool for Busy Founders & AI Super Users",
    description:
      "Voice to text tool for busy founders and AI super users. Stop typing, ship 3x faster. Works with any app. One-time purchase $19.",
    images: ["/og-image.png"],
    creator: "@moinulmoin",
  },
  alternates: {
    canonical: "https://voicetypr.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WT5KZRJM"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }} />
        {/* End Google Tag Manager (noscript) */}
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
        
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WT5KZRJM');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </body>
    </html>
  );
}
