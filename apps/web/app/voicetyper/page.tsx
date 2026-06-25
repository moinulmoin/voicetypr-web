import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { SiteHeader } from '@/components/marketing/site-header';
import { SiteFooter } from '@/components/marketing/site-footer';
import { Section, Container } from '@/components/marketing/section';
import { FinalCTA } from '@/components/marketing/FinalCTA';

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

const H2_CLASS =
  'text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground';

export default function VoiceTyperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
        <SiteHeader />

        {/* Hero */}
        <Section className="pt-20 md:pt-24">
          <Container>
            <div className="max-w-4xl">
              <h1 className="text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-tight tracking-tight">
                Looking for VoiceTyper? The app is{' '}
                <em className="italic font-normal" style={{ fontFamily: 'var(--font-serif)' }}>
                  Voicetypr
                </em>
                .
              </h1>
              <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                If you looked up VoiceTyper, voice typer, voice typer app, or voice typing app, you probably want one thing: speak into the computer and get clean text where the cursor already is. Voicetypr is built to help you write with your voice in every app.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex h-12 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-95"
                >
                  Start 3-day free trial
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-12 items-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted active:scale-95"
                >
                  Buy lifetime license
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* Name clarity */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <h2 className={H2_CLASS}>
                  Voicetypr is a voice typer for every text field.
                </h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  The missing vowel is intentional: <strong className="font-semibold text-foreground">Voicetypr</strong> is the product name. The workflow is simple: hold a hotkey, talk, release, and the text appears in the app you were already using.
                </p>
                <p>
                  Use it for AI prompts, support replies, docs, specs, meeting follow-ups, or long messages you would rather say than type.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Comparison table */}
        <Section>
          <Container>
            <div className="max-w-4xl overflow-hidden rounded-2xl border border-border bg-card">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {comparisons.map(([label, searchTerm, voiceTypr]) => (
                      <tr key={label} className="border-b border-border last:border-b-0">
                        <th className="bg-muted px-5 py-4 font-semibold text-foreground">{label}</th>
                        <td className="px-5 py-4 text-muted-foreground">{searchTerm}</td>
                        <td className="px-5 py-4 font-medium text-foreground">{voiceTypr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </Section>

        {/* Why people use it */}
        <Section>
          <Container>
            <div className="max-w-4xl">
              <h2 className={H2_CLASS}>
                Why people use it instead of a generic voice typer.
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {reasons.map((reason) => (
                  <div key={reason} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-sage" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <h2 className={H2_CLASS}>
                  The common{' '}
                  <em className="italic font-normal" style={{ fontFamily: 'var(--font-serif)' }}>
                    VoiceTyper
                  </em>{' '}
                  questions.
                </h2>
              </div>
              <div>
                {faqs.map((faq) => (
                  <article key={faq.q} className="border-b border-border py-6 last:border-b-0">
                    <h3 className="text-xl font-semibold leading-snug text-foreground">
                      {faq.q}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Final CTA */}
        <FinalCTA
          headline="Try Voicetypr—the app people mean when they look up VoiceTyper."
          subtitle="3-day free trial. No credit card. Pay once from $39 on Mac and Windows."
          primaryLabel="Start 3-day free trial"
          secondaryHref="/#pricing"
          headlineClassName="mx-auto mb-5 max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight"
          subtitleClassName="mx-auto mb-8 max-w-xl text-balance text-base leading-relaxed text-primary-foreground/75"
        />

        <SiteFooter />
      </main>
    </>
  );
}
