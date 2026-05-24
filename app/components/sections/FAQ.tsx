import type { ReactNode } from 'react';

const faqs: Array<{ q: string; a: ReactNode }> = [
  {
    q: 'Does VoiceTypr work on Windows?',
    a: "Yes — Windows 10 and later. Download the .exe installer, run it, and you're set. We ship Mac and Windows as first-class platforms.",
  },
  {
    q: "Windows says 'Unknown Publisher' — is it safe?",
    a: "Yes. SmartScreen shows that because I don't have a Microsoft code-signing cert yet (they cost $200-$300/year and I'm keeping solo-founder costs lean). Click More info → Run anyway. The warning fades as more people install it.",
  },
  {
    q: 'Can I try VoiceTypr for free?',
    a: 'Yes — 3-day free trial, no card required. When the trial ends, buy a lifetime license only if it saves you time. No auto-charge, no card on file. Purchases include a 7-day money-back guarantee.',
  },
  {
    q: 'Does it work with ChatGPT, Claude, and Cursor?',
    a: 'Yes. Place your cursor anywhere, hold the hotkey, and VoiceTypr pastes formatted text into ChatGPT, Claude, Cursor, VS Code, email, Slack — any app that takes a text cursor.',
  },
  {
    q: 'Is my voice data private?',
    a: 'Yes. VoiceTypr transcribes your voice on your machine by default using local models (Whisper on Mac and Windows, Parakeet on Apple Silicon Macs). Optional cleaner-text features work on final text, not your voice recording, when you choose to enable them.',
  },
  {
    q: 'How does cleaner text work?',
    a: 'Local transcription works by default. If you enable cleaner text, VoiceTypr can send the final transcript text — not your voice recording — to the AI provider you configure, then paste back a polished version for prompts, emails, and everyday writing.',
  },
  {
    q: 'What are the system requirements?',
    a: 'macOS Ventura 13+ with Apple Silicon recommended, Intel Mac supported, or Windows 10+. Minimum 4 GB RAM.',
  },
  {
    q: 'Does it use my GPU on Windows?',
    a: 'Yes — VoiceTypr auto-detects NVIDIA, AMD, and Intel GPUs for faster transcription. If no GPU is available it falls back to CPU automatically; it still works.',
  },
];

export default function FAQ() {
  return (
    <section className="ed-section" id="faq">
      <div className="ed-container">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-4xl leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              The honest FAQ
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-editorial-ink-2">
              Real questions from buyers, Windows users, privacy-conscious teams, and people switching from subscription dictation apps.
            </p>
            <div className="mt-8 text-sm text-editorial-ink-3">
              Any other questions?{' '}
              <a
                href="mailto:support@voicetypr.com"
                className="text-editorial-ink underline underline-offset-4 hover:text-editorial-ink-2"
                data-umami-event="faq-contact-click"
              >
                Contact us
              </a>
            </div>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <article key={faq.q} className="grid gap-4 md:grid-cols-[4rem_1fr]">
                <div className="font-mono text-xs text-editorial-ink-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-editorial-ink">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-editorial-ink-2">
                    {faq.a}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
