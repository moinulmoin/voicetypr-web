import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import RelatedGuidesSection from '@/app/components/RelatedGuidesSection';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';
import { voiceTypingRelatedGuides } from '@/lib/seo-discovery';

export const metadata: Metadata = {
  title: 'Voice Typing Software in 2026 — VoiceTypr',
  description:
    'Voice typing for Mac and Windows that works in every app. VoiceTypr runs offline by default, starts at $39 once, and needs no monthly subscription.',
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
    title: 'Voice Typing Software in 2026 — VoiceTypr',
    description:
      'Voice typing for every app on Mac and Windows. Offline dictation by default, pay-once license, no monthly subscription.',
    url: 'https://voicetypr.com/voice-typing',
    siteName: 'VoiceTypr',
    images: [{ url: '/voicetypr-og.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voice Typing Software in 2026 — VoiceTypr',
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

export default function VoiceTypingPage() {
  return (
    <main id="main-content" className="landing-editorial min-h-screen">
      <Header />
      <section className="ed-section ed-section-hero pt-32 lg:pt-40">
        <div className="ed-container max-w-4xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">voice typing software</p>
          <h1 className="text-[clamp(40px,6vw,70px)] font-semibold leading-[1.02] tracking-tight">
            Voice typing software for <em>every app</em>
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
            Dictate into Cursor, Claude, ChatGPT, Gmail, Slack, docs, notes, or a support queue on Mac and Windows. Offline-first by default, pay once, no monthly subscription.
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
        <div className="ed-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">why voice typing</p>
            <h2 className="mt-3 text-[clamp(32px,4vw,50px)] font-semibold leading-[1.08] tracking-tight">
              Typing is the bottleneck. Talking is the input layer.
            </h2>
          </div>
          <div className="space-y-4 text-[16px] leading-[1.7] text-editorial-ink-2">
            <p>
              Most work is no longer just typing words into a document. It is prompts, replies, bug reports, notes, decisions, and instructions to tools. Voice typing makes those English-heavy parts faster without forcing you into a new workspace.
            </p>
            <p>
              VoiceTypr is designed for that workflow: stay in the app, speak naturally, and let the text land where it belongs.
            </p>
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container max-w-5xl">
          <h2 className="text-[clamp(32px,4vw,50px)] font-semibold leading-[1.08] tracking-tight">
            What people use voice typing for.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {workflows.map(([title, body]) => (
              <article key={title} className="rounded-2xl bg-editorial-surface-2 p-6">
                <h3 className="text-lg font-semibold tracking-tight text-editorial-ink">{title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-editorial-ink-2">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-container max-w-4xl">
          <h2 className="text-[clamp(32px,4vw,50px)] font-semibold leading-[1.08] tracking-tight">
            Why VoiceTypr instead of built-in dictation.
          </h2>
          <div className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex gap-3 text-[15px] leading-[1.6] text-editorial-ink-2">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-editorial-ink" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuidesSection
        eyebrow="Related guides"
        title="More specific voice typing guides"
        description="If pay-once dictation in every app is the goal, these pages cover Windows offline use, Cursor workflows, and platform comparisons."
        links={voiceTypingRelatedGuides}
        dataTrackPrefix="voice-typing-related-guides"
      />

      <section className="ed-section">
        <div className="ed-container">
          <div className="cta-dark-card relative overflow-hidden rounded-[2rem] bg-editorial-ink px-6 py-10 text-center text-white shadow-[0_28px_90px_rgba(24,24,26,0.18)] md:px-10 md:py-12">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#d4965d]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto mb-5 max-w-3xl text-[clamp(32px,4vw,48px)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
                Voice typing in every app, with a 3-day trial.
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/72">
                3-day free trial. No credit card. Offline-first on Mac and Windows.
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
