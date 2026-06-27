import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { SiteHeader } from '@/components/marketing/site-header';
import { SiteFooter } from '@/components/marketing/site-footer';
import { Section, Container } from '@/components/marketing/section';
import RelatedGuidesSection from '@/app/components/RelatedGuidesSection';
import { voiceTypingRelatedGuides } from '@/lib/seo-discovery';

export const metadata: Metadata = {
  title: 'Voice Typing Software in 2026 — Voicetypr',
  description:
    'Voice typing for Mac and Windows that works in every app. Voicetypr runs offline by default, starts at $39 once, and needs no monthly subscription.',
  keywords: [
    'voice typing',
    'voice typing software',
    'voice typing app',
    'voice to text software',
    'dictation software',
    'offline voice typing',
  ],
  alternates: { canonical: 'https://voicetypr.com/voice-typing' },
  openGraph: {
    title: 'Voice Typing Software in 2026 — Voicetypr',
    description:
      'Voice typing for every app on Mac and Windows. Offline dictation by default, pay-once license, no monthly subscription.',
    url: 'https://voicetypr.com/voice-typing',
    siteName: 'Voicetypr',
    images: [{ url: '/voicetypr-og.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voice Typing Software in 2026 — Voicetypr',
    description:
      'Voice typing for every app on Mac and Windows. Offline dictation by default, pay-once license, no monthly subscription.',
    images: ['/voicetypr-og.png'],
  },
};

const workflows = [
  ['AI prompts', 'Talk through the full context for Cursor, Claude, ChatGPT, or any agent before your fingers compress it.'],
  ['Email and chat', 'Reply in Gmail, Slack, Notion, Linear, or docs without switching tools or opening a browser tab.'],
  ['Specs and notes', 'Capture the long explanation while it is still clear, then edit the final text after it lands.'],
  ['Accessibility and fatigue', 'Reduce typing load when your hands, attention, or energy are the bottleneck.'],
] as const;

const reasons = [
  'Works anywhere a cursor accepts text — not just Google Docs or a browser extension.',
  'Your voice is transcribed offline by default.',
  'Built for macOS 13+ and Windows 10+.',
  'One-time purchase from $39, with device-count options for multiple machines.',
] as const;

const H2_CLASS =
  'text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground';

export default function VoiceTypingPage() {
  return (
    <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
      <SiteHeader />

      {/* Hero */}
      <Section className="pt-20 md:pt-24">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[1.03] tracking-tight">
              Voice typing software for{' '}
              <em className="italic font-normal" style={{ fontFamily: 'var(--font-serif)' }}>
                every app
              </em>
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              Dictate into Cursor, Claude, ChatGPT, Gmail, Slack, docs, notes, or a support queue on Mac and Windows. Offline-first by default, pay once, no monthly subscription.
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

      {/* Why voice typing */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <h2 className={H2_CLASS}>When typing slows you down, talking is faster.</h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Most work isn&apos;t one long document — it&apos;s emails, notes, replies, outlines, and forms across many apps. Voice typing gets the first draft out faster without opening another editor.
              </p>
              <p>
                Voicetypr is designed for that workflow: stay in the app, speak naturally, and let the text land where it belongs.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What people use voice typing for */}
      <Section>
        <Container>
          <div className="max-w-5xl">
            <h2 className={H2_CLASS}>What people use voice typing for.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {workflows.map(([title, body]) => (
                <article key={title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Voicetypr instead of built-in dictation */}
      <Section>
        <Container>
          <div className="max-w-4xl">
            <h2 className={H2_CLASS}>Why Voicetypr instead of built-in dictation.</h2>
            <div className="mt-8 space-y-4">
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

      {/* Related guides */}
      <Section>
        <Container>
          <RelatedGuidesSection
            eyebrow="Related guides"
            title="More specific voice typing guides"
            description="If pay-once dictation in every app is the goal, these pages cover Windows offline use, Cursor workflows, and platform comparisons."
            links={voiceTypingRelatedGuides}
            dataTrackPrefix="voice-typing-related-guides"
            embedded
          />
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-center text-primary-foreground md:px-10 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-sage/30 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight">
                Voice typing in every app, with a 3-day trial.
              </h2>
              <p className="mx-auto mt-5 mb-8 max-w-2xl text-balance text-base leading-relaxed text-primary-foreground/75">
                3-day free trial. No credit card. Offline-first on Mac and Windows.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex h-12 items-center rounded-xl bg-background px-5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 active:scale-95"
                >
                  Start 3-day free trial
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-12 items-center rounded-xl border border-primary-foreground/20 px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 active:scale-95"
                >
                  Buy lifetime license
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
