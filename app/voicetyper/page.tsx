import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';

export const metadata: Metadata = {
  title: 'VoiceTyper Alternative in 2026 — VoiceTypr',
  description:
    'Looking for VoiceTyper or a voice typer app? VoiceTypr is offline voice-to-text for Mac and Windows. Speak, release, and paste clean text anywhere.',
  keywords: [
    'voicetyper',
    'voice typer',
    'voice typer app',
    'voice typing app',
    'voice to text app',
    'VoiceTypr',
  ],
  alternates: { canonical: 'https://voicetypr.com/voicetyper' },
  openGraph: {
    title: 'VoiceTyper Alternative in 2026 — VoiceTypr',
    description:
      'Offline voice-to-text for Mac and Windows. Built for people searching for a private voice typer app.',
    url: 'https://voicetypr.com/voicetyper',
    siteName: 'VoiceTypr',
    images: [{ url: '/voicetypr-og.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoiceTyper Alternative in 2026 — VoiceTypr',
    description:
      'Offline voice-to-text for Mac and Windows. Built for people searching for a private voice typer app.',
    images: ['/voicetypr-og.png'],
  },
};

const reasons = [
  'Type by talking in Cursor, Claude, ChatGPT, email, docs, Slack, and any app with a text field.',
  'Transcription runs locally on your device; optional AI formatting is separate and controlled by you.',
  'Works on macOS 13+ and Windows 10+ with one pay-once license.',
  'No browser tab, no account ritual, no monthly dictation subscription.',
] as const;

const comparisons = [
  ['Search term', 'VoiceTyper / voice typer', 'VoiceTypr'],
  ['What it means', 'A generic phrase people use for voice-to-text apps', 'The actual app name'],
  ['Best fit', 'Finding a tool that types what you say', 'Offline voice typing in every app'],
  ['Pricing', 'Usually unclear until signup', 'From $39 once'],
] as const;

export default function VoiceTyperPage() {
  return (
    <main id="main-content" className="landing-editorial min-h-screen">
      <Header />
      <section className="ed-section ed-section-hero pt-32 lg:pt-40">
        <div className="ed-container max-w-4xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">voicetyper · voice typer</p>
          <h1 className="text-[clamp(40px,6vw,70px)] font-semibold leading-[1.02] tracking-tight">
            Looking for VoiceTyper? The app is VoiceTypr.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-editorial-ink-2">
            People search for VoiceTyper, voice typer, and voice typing app when they want one thing: speak into the computer and get clean text where the cursor already is. VoiceTypr is built for that.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/download"
              className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
            >
              Download for free
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
              VoiceTypr is a voice typer for every text field.
            </h2>
          </div>
          <div className="space-y-4 text-[16px] leading-[1.7] text-editorial-ink-2">
            <p>
              The missing vowel is intentional: <strong className="font-medium text-editorial-ink">VoiceTypr</strong> is the product name. The workflow is simple: hold a hotkey, talk, release, and the text appears in the app you were already using.
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

      <Footer />
    </main>
  );
}
