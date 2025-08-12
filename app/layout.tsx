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
    "VoiceTypr - Voice to Text tool for Busy Founders and AI Power Users",
  description:
    "AI-powered voice dictation for busy founders. Ship 3x faster with ChatGPT, Claude & Cursor. High accuracy, works everywhere. One-time purchase, no subscription.",
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
      "VoiceTypr - Voice to Text tool for Busy Founders and AI Power Users",
    description:
      "AI-powered voice dictation for busy founders. Ship 3x faster with ChatGPT, Claude & Cursor. High accuracy, works everywhere. One-time purchase, no subscription.",
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
      "VoiceTypr - Voice to Text tool for Busy Founders and AI Power Users",
    description:
      "Stop typing, start speaking. VoiceTypr turns voice to text instantly in any app. Perfect for AI Users. $19 one-time (61% off).",
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
  other: {
    'preconnect': 'https://assets.voicetypr.com',
    'dns-prefetch': 'https://assets.voicetypr.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://assets.voicetypr.com" />
        <link rel="dns-prefetch" href="https://assets.voicetypr.com" />
      </head>
      {/* Google Ads tracking (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17417755056"
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17417755056');
          `,
        }}
      />
      {/* End Google Ads tracking */}
      
      {/* JSON-LD Structured Data */}
      <Script
        id="json-ld-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "@id": "https://voicetypr.com/#software",
                "name": "VoiceTypr",
                "description": "AI-powered voice dictation for busy founders. Ship 3x faster with ChatGPT, Claude & Cursor. Works everywhere.",
                "applicationCategory": "ProductivityApplication",
                "operatingSystem": ["macOS 13.0+", "Windows 10+"],
                "downloadUrl": "https://voicetypr.com/download",
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Pro Plan - Launch Special",
                    "price": "19.00",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "description": "1 device activation - Lifetime license - Launch Special 61% off",
                    "seller": {
                      "@id": "https://voicetypr.com/#organization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "name": "Plus Plan - Launch Special",
                    "price": "29.00",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "description": "2 device activations - Lifetime license - Launch Special 70% off",
                    "seller": {
                      "@id": "https://voicetypr.com/#organization"
                    }
                  }
                ],
                "featureList": [
                  "100+ Languages Support",
                  "High Accuracy",
                  "Works with Any Application (ChatGPT, Claude, Cursor, VS Code)",
                  "100% Private - Offline Processing",
                  "Global Hotkey Support",
                  "Smart Formatting",
                  "Audio File Transcription",
                  "3-Day Free Trial",
                  "Lifetime Updates"
                ],
                "screenshot": "https://voicetypr.com/og-image.png",
                "author": {
                  "@type": "Person",
                  "name": "Moinul Moin",
                  "url": "https://twitter.com/moinulmoin"
                }
              },
              {
                "@type": "Organization",
                "@id": "https://voicetypr.com/#organization",
                "name": "VoiceTypr",
                "url": "https://voicetypr.com",
                "logo": "https://voicetypr.com/logo.png",
                "sameAs": [
                  "https://twitter.com/moinulmoin"
                ],
                "founder": {
                  "@type": "Person",
                  "name": "Moinul Moin"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://voicetypr.com/#website",
                "url": "https://voicetypr.com",
                "name": "VoiceTypr",
                "description": "Voice to Text tool for Busy Founders and AI Power Users",
                "publisher": {
                  "@id": "https://voicetypr.com/#organization"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://voicetypr.com/#webpage",
                "url": "https://voicetypr.com",
                "name": "VoiceTypr - Voice to Text tool for Busy Founders and AI Power Users",
                "isPartOf": {
                  "@id": "https://voicetypr.com/#website"
                },
                "about": {
                  "@id": "https://voicetypr.com/#software"
                },
                "description": "AI-powered voice dictation for busy founders. Ship 3x faster with ChatGPT, Claude & Cursor."
              }
            ]
          })
        }}
      />
      {/* End JSON-LD Structured Data */}
      
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
