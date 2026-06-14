import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import RelatedGuidesSection from '@/app/components/RelatedGuidesSection';
import type { DiscoveryLink } from '@/lib/seo-discovery';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';

export const metadata: Metadata = {
  title: 'VoiceTyper App & Pricing — Voicetypr for Mac and Windows',
  description:
    'Looking for VoiceTyper, a voice typer app, or VoiceTyper pricing? Voicetypr is pay-once voice-to-text for Mac and Windows, from $39.',
  keywords: [
    'voicetyper',
    'voice typer',
    'voice typer app',
    'voicetyper pricing',
    'voicetyper cost',
    'voice typing app',
    'voice to text app',
    'Voicetypr',
  ],
  alternates: { canonical: 'https://voicetypr.com/voicetyper' },
  openGraph: {
    title: 'VoiceTyper App & Pricing — Voicetypr',
    description:
      'Voicetypr is the pay-once voice typer app for Mac and Windows. Offline dictation by default, pricing from $39.',
    url: 'https://voicetypr.com/voicetyper',
    siteName: 'Voicetypr',
    images: [{ url: '/voicetypr-og.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoiceTyper App & Pricing — Voicetypr',
    description:
      'Voicetypr is the pay-once voice typer app for Mac and Windows. Offline dictation by default, pricing from $39.',
    images: ['/voicetypr-og.png'],
  },
};

const reasons = [
  'Type by talking in Cursor, Claude, ChatGPT, email, docs, Slack, and any app with a text field.',
  'Transcription runs offline on your device by default. AI formatting features are separate and controlled by you.',
  'Works on macOS 13+ and Windows 10+ with one pay-once license.',
  'No browser tab, no account ritual, no monthly dictation subscription.',
] as const;

const comparisons = [
  ['Search term', 'VoiceTyper / voice typer', 'Voicetypr'],
  ['What it means', 'A generic phrase people use for voice-to-text apps', 'The actual app name'],
  ['Best fit', 'Finding a tool that types what you say', 'Offline voice typing in every app'],
  ['Pricing', 'Varies by the app you choose', 'From $39 once'],
] as const;

const faqs = [
  {
    q: 'Is it VoiceTyper or Voicetypr?',
    a: 'The product name is Voicetypr. People often search VoiceTyper or voice typer app because they are looking for an app that types what they say. Same intent, different spelling.',
  },
  {
    q: 'How much does Voicetypr cost?',
    a: 'Voicetypr starts at $39 for a lifetime license. There is also a 3-day free trial with no card required, so you can test the app before paying.',
  },
  {
    q: 'Is Voicetypr a voice typer app for Windows and Mac?',
    a: 'Yes. Voicetypr works on Windows 10+ and macOS 13+. Hold the hotkey, speak, release, and the text appears where your cursor already is.',
  },
] as const;

const voicetyperRelatedGuides: DiscoveryLink[] = [
  {
    href: '/voice-typing',
    eyebrow: 'general workflow',
    title: 'Voice typing in every app',
    description:
      'The full pay-once dictation guide if you want voice typing in every app, not just the VoiceTyper name.',
    ctaLabel: 'See the general guide',
  },
  {
    href: '/offline-dictation-app-for-windows',
    eyebrow: 'windows offline path',
    title: 'Offline dictation for Windows',
    description: 'Local transcription on Windows when offline privacy matters most.',
    ctaLabel: 'See the Windows page',
  },
  {
    href: '/best/mac-dictation',
    eyebrow: 'mac comparison',
    title: 'Mac dictation guide',
    description: 'Compare realistic local dictation options on Mac.',
    ctaLabel: 'See the Mac guide',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://voicetypr.com/voicetyper#webpage',
      url: 'https://voicetypr.com/voicetyper',
      name: 'VoiceTyper App & Pricing — Voicetypr',
      description: metadata.description,
      isPartOf: { '@id': 'https://voicetypr.com/#website' },
      about: { '@id': 'https://voicetypr.com/#product' },
      mainEntity: { '@id': 'https://voicetypr.com/voicetyper#faq' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://voicetypr.com/voicetyper#faq',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ],
};

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export default function VoiceTyperPage() {
  return (
    <main id="main-content" className="landing-editorial min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <Header />
      <section className="ed-section ed-section-hero pt-32 lg:pt-40">
        <div className="ed-container max-w-4xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">voicetyper · voice typer</p>
          <h1 className="text-[clamp(40px,6vw,70px)] font-semibold leading-[1.02] tracking-tight">
            Looking for VoiceTyper? The app is Voicetypr.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
            If you looked up VoiceTyper, voice typer, voice typer app, or voice typing app, you probably want one thing: speak into the computer and get clean text where the cursor already is. Voicetypr is built to help you write with your voice in every app.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/download"
              className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
            >
              Start 3-day free trial
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink shadow-sm transition duration-300 ease-out hover:bg-editorial-surface-2 active:scale-95"
            >
              Buy lifetime license
            </Link>
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">name clarity</p>
            <h2 className="mt-3 text-[clamp(32px,4vw,50px)] font-semibold leading-[1.08] tracking-tight">
              Voicetypr is a voice typer for every text field.
            </h2>
          </div>
          <div className="space-y-4 text-[16px] leading-[1.7] text-editorial-ink-2">
            <p>
              The missing vowel is intentional: <strong className="font-medium text-editorial-ink">Voicetypr</strong> is the product name. The workflow is simple: hold a hotkey, talk, release, and the text appears in the app you were already using.
            </p>
            <p>
              Use it for AI prompts, support replies, docs, specs, meeting follow-ups, or long messages you would rather say than type.
            </p>
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <div className="overflow-hidden rounded-xl bg-editorial-surface-2 p-1.5">
            <table className="w-full text-left text-sm">
              <tbody>
                {comparisons.map(([label, searchTerm, voiceTypr]) => (
                  <tr key={label} className="border-b border-editorial-line/60 last:border-b-0">
                    <th className="bg-white px-5 py-4 font-medium text-editorial-ink">{label}</th>
                    <td className="px-5 py-4 text-editorial-ink-2">{searchTerm}</td>
                    <td className="px-5 py-4 font-medium text-editorial-ink">{voiceTypr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <h2 className="text-[clamp(32px,4vw,50px)] font-semibold leading-[1.08] tracking-tight">
            Why people use it instead of a generic voice typer.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex gap-3 text-[15px] leading-[1.6] text-editorial-ink-2">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-editorial-ink" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">pricing and spelling</p>
            <h2 className="mt-3 text-[clamp(32px,4vw,50px)] font-semibold leading-[1.08] tracking-tight">
              The common VoiceTyper questions.
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <article key={faq.q} className="border-b border-editorial-line/70 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-[19px] font-semibold leading-snug text-editorial-ink">
                  {faq.q}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-editorial-ink-2">
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuidesSection
        eyebrow="Related guides"
        title="Guides people often read after VoiceTyper"
        description="VoiceTyper is a common misspelling of Voicetypr. These guides cover pricing, workflows, and platform-specific comparisons."
        links={voicetyperRelatedGuides}
        dataTrackPrefix="voicetyper-related-guides"
      />

      <section className="ed-section">
        <div className="ed-container">
          <div className="cta-dark-card relative overflow-hidden rounded-[2rem] bg-editorial-ink px-6 py-10 text-center text-white shadow-[0_28px_90px_rgba(24,24,26,0.18)] md:px-10 md:py-12">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#d4965d]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto mb-5 max-w-3xl text-[clamp(32px,4vw,48px)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
                Try Voicetypr—the app people mean when they look up VoiceTyper.
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/72">
                3-day free trial. No credit card. Pay once from $39 on Mac and Windows.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink transition duration-300 ease-out hover:bg-editorial-surface active:scale-95"
                >
                  Start 3-day free trial
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-12 items-center rounded-md border border-white/18 bg-white/8 px-5 text-sm font-medium text-white transition hover:bg-white/14 active:scale-95"
                >
                  Buy lifetime license
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
