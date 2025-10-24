import { Metadata } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { Analytics } from "@/components/analytics";
import { CookieConsent } from "@/components/cookie-consent";
import { DeferredPixels } from "@/components/deferred-pixels";
import { Providers } from "@/components/providers";
import { cookies } from "next/headers";
import Script from "next/script";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "VoiceTypr — Offline AI voice to text app for founders and builders",
  description:
    "Offline AI voice to text app that runs locally. Private by default. Pay once, use forever.",
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
    title: "VoiceTypr — Offline AI voice to text app for founders and builders",
    description:
      "Offline AI voice to text app that runs locally. Private by default. Pay once, use forever.",
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
    title: "VoiceTypr — Offline AI voice to text app for founders and builders",
    description:
      "Offline AI voice to text app that runs locally. Private by default. Pay once, use forever.",
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
  other: {
    preconnect: "https://assets.voicetypr.com",
    "dns-prefetch": "https://assets.voicetypr.com",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookieStore = await cookies();
  const rawConsent = cookieStore.get("vt_consent")?.value;
  let marketingAllowed = false;
  if (rawConsent) {
    try {
      const parsed = JSON.parse(decodeURIComponent(rawConsent));
      marketingAllowed = !!parsed?.marketing;
    } catch {}
  }
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://assets.voicetypr.com" />
        <link rel="dns-prefetch" href="https://assets.voicetypr.com" />
      </head>
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
                  "Offline voice dictation for founders and makers. Ship 3x faster with ChatGPT, Claude & Cursor while keeping data private.",
                applicationCategory: "ProductivityApplication",
                operatingSystem: ["macOS 13.0+", "Windows 10+"],
                downloadUrl: "https://voicetypr.com/download",
                offers: [
                  {
                    "@type": "Offer",
                    name: "Pro Plan",
                    price: "50.00",
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
                    price: "80.00",
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
                    price: "140.00",
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
                  "100+ language support",
                  "High-accuracy transcription",
                  "Works with any application (ChatGPT, Claude, Cursor, VS Code)",
                  "Offline processing for full privacy",
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
                  "AI Powered Voice to Text tool for Busy Founders and AI Power Users",
                publisher: {
                  "@id": "https://voicetypr.com/#organization",
                },
              },
              {
                "@type": "WebPage",
                "@id": "https://voicetypr.com/#webpage",
                url: "https://voicetypr.com",
                name: "VoiceTypr - AI Voice to Text tool for Founders and AI Users",
                isPartOf: {
                  "@id": "https://voicetypr.com/#website",
                },
                about: {
                  "@id": "https://voicetypr.com/#software",
                },
                description:
                  "Offline AI voice dictation for busy founders and AI power users.",
              },
              {
                "@type": "FAQPage",
                "@id": "https://voicetypr.com/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Can I try VoiceTypr for free?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! VoiceTypr offers a 3-day free trial with unlimited transcription. Test all features before buying. No credit card required.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does it work with ChatGPT, Claude, and Cursor?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! Works anywhere you can type - ChatGPT, Claude, Cursor, VS Code, Slack, X, emails. Just position your cursor and start voice typing. Perfect for long prompts without typing fatigue.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is my voice data private?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Absolutely! VoiceTypr uses local AI models that run entirely on your device. Your voice never leaves your computer. No cloud, no servers, 100% offline.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Will it work on Windows/Intel Mac?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Windows version just launched! Works on both Intel and Apple Silicon Macs. Apple Silicon is more optimized for AI processing but Intel works great too.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      {/* End JSON-LD Structured Data */}

      <body className={`${fontSans.variable} font-sans antialiased `}>
        {/* Google Tag Manager (noscript) — only when Marketing consent is granted */}
        {marketingAllowed ? (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WT5KZRJM" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        ) : null}
        {/* End Google Tag Manager (noscript) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <CookieConsent />
        <Providers>
          <DeferredPixels />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
