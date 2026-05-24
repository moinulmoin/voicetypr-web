import { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import type { ReactNode } from "react";
import { Suspense } from "react";

import "@/app/globals.css";
// import { Analytics } from "@/components/analytics"; // Umami disabled in favor of OpenPanel
import { OpenPanel } from "@/components/openpanel";
import CookieConsent from "@/components/cookie-consent";
import { DeferredPixels } from "@/components/deferred-pixels";
import { Providers } from "@/components/providers";
import Script from "next/script";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Instrument Serif — modern editorial serif with REAL italic. Reserved for the
// rare <em> punctuation accent inside hero / brand-moment H2 / final CTA only.
// Headings themselves use Geist (sans) with heavier weight. Loaded with both
// styles so editorial numerals and prices that opt into Tailwind's
// font-serif utility still render in upright serif.
const fontSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Mono falls back to the system stack via Tailwind's default `font-mono`.
// No web font download for mono.
export const metadata: Metadata = {
  title: "VoiceTypr — Offline AI voice to text for Mac & Windows",
  description:
    "Speak into any app. VoiceTypr transcribes on your machine by default, works with Cursor, ChatGPT, Slack, Gmail, and docs, and is sold as a lifetime license.",
  keywords: [
    "voice to text",
    "voice typing",
    "speech to text",
    "dictation software",
    "voice dictation",
    "best voice dictation",
    "superwhisper alternative",
    "superwhisper alternative for macos",
    "superwhisper alternative for windows",
    "wispr flow alternative",
    "wispr flow alternative for macos",
    "wispr flow alternative for windows",
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
    "voice to text for macOS",
    "voice to text for Windows",
    "voice transcription software",
    "Whisper AI",
    "offline transcription",
    "Tauri app",
    "productivity tools",
  ],
  authors: [{ name: "Moinul Moin" }],
  openGraph: {
    title: "VoiceTypr — Offline AI voice to text for Mac & Windows",
    description:
      "Speak into any app. VoiceTypr transcribes on your machine by default, works with Cursor, ChatGPT, Slack, Gmail, and docs, and is sold as a lifetime license.",
    type: "website",
    url: "https://voicetypr.com",
    siteName: "VoiceTypr",
    images: [
      {
        url: "/voicetypr-og.png",
        width: 1200,
        height: 630,
        alt: "VoiceTypr — Offline AI voice to text app for founders and builders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceTypr — Offline AI voice to text for Mac & Windows",
    description:
      "Speak into any app. VoiceTypr transcribes on your machine by default, works with Cursor, ChatGPT, Slack, Gmail, and docs, and is sold as a lifetime license.",
    images: ["/voicetypr-og.png"],
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://voicetypr.com"),
  other: {
    preconnect: "https://assets.voicetypr.com",
    "dns-prefetch": "https://assets.voicetypr.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://assets.voicetypr.com" />
        <link rel="dns-prefetch" href="https://assets.voicetypr.com" />
      </head>
      <body className={`${fontSans.variable} ${fontSerif.variable} font-sans antialiased`}>
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
                name: "VoiceTypr",
                description:
                  "Speak into Cursor, ChatGPT, Claude, Slack, Gmail, and docs with local transcription by default. Pay once for private AI voice-to-text on Mac and Windows.",
                applicationCategory: "ProductivityApplication",
                operatingSystem: ["macOS 13.0+", "Windows 10+"],
                downloadUrl: "https://voicetypr.com/download",
                offers: [
                  {
                    "@type": "Offer",
                    name: "Pro Plan",
                    price: "39.00",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    description:
                      "Includes 1 device activation, lifetime license, free updates.",
                    seller: {
                      "@id": "https://voicetypr.com/#organization",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Plus Plan",
                    price: "59.00",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    description:
                      "Includes 2 device activations, lifetime license, free updates.",
                    seller: {
                      "@id": "https://voicetypr.com/#organization",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Max Plan",
                    price: "99.00",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    description:
                      "Includes 4 device activations, lifetime license, free updates.",
                    seller: {
                      "@id": "https://voicetypr.com/#organization",
                    },
                  },
                ],
                featureList: [
                  "99+ language support",
                  "High-accuracy transcription",
                  "Works with any application (ChatGPT, Claude, Cursor, VS Code)",
                  "Local transcription by default for privacy",
                  "Global hotkey support",
                  "Smart formatting modes",
                  "Audio file transcription",
                  "3-day free trial",
                  "Lifetime updates",
                ],
                screenshot: "https://voicetypr.com/voicetypr-og.png",
                author: {
                  "@type": "Person",
                  name: "Moinul Moin",
                  url: "https://twitter.com/moinulmoin",
                },
              },
              {
                "@type": "Organization",
                "@id": "https://voicetypr.com/#organization",
                name: "VoiceTypr",
                url: "https://voicetypr.com",
                logo: "https://voicetypr.com/logo.png",
                sameAs: ["https://twitter.com/moinulmoin"],
                parentOrganization: {
                  "@id": "https://ideaplexa.com/#organization",
                },
                founder: {
                  "@type": "Person",
                  name: "Moinul Moin",
                },
              },
              {
                "@type": "Organization",
                "@id": "https://ideaplexa.com/#organization",
                name: "Ideaplexa LLC",
                url: "https://ideaplexa.com",
              },
              {
                "@type": "WebSite",
                "@id": "https://voicetypr.com/#website",
                url: "https://voicetypr.com",
                name: "VoiceTypr",
                description:
                  "Local transcription by default for founders, builders, and AI power users who write all day.",
                publisher: {
                  "@id": "https://voicetypr.com/#organization",
                },
              },
            ],
          }),
        }}
      />
      {/* End JSON-LD Structured Data */}

        <a
          href="#main-content"
          data-markdown-skip
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <CookieConsent />
        <Suspense fallback={null}>
          <Providers>
            <DeferredPixels />
            {children}
            {/* <Analytics /> */} {/* Umami disabled in favor of OpenPanel */}
            <OpenPanel />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
