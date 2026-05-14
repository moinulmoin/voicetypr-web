const faqs = [
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
    a: 'Yes — 3-day free trial, unlimited transcription, no card required. Download, activate the trial, start talking.',
  },
  {
    q: 'Does it work with ChatGPT, Claude, and Cursor?',
    a: 'Yes. Place your cursor anywhere, hold the hotkey, and VoiceTypr pastes formatted text into ChatGPT, Claude, Cursor, VS Code, email, Slack — any app that takes a text cursor.',
  },
  {
    q: 'Is my voice data private?',
    a: 'Yes. Audio transcription runs 100% locally with on-device models (Whisper on Mac and Windows, Parakeet on Apple Silicon Macs) — your audio never leaves your computer. The optional AI formatting presets send only the final text, never audio, to your chosen provider. Turn AI off to stay fully offline.',
  },
  {
    q: 'Do I need an API key for the AI formatting presets?',
    a: 'Only if you want them. Raw transcription works 100% offline with no key. The optional presets use your own API key from Gemini, OpenAI, or any OpenAI-compatible provider. You control the provider, cost, and off switch.',
  },
  {
    q: 'What are the system requirements?',
    a: 'macOS Ventura 13+ with Apple Silicon recommended, Intel supported, or Windows 10+. Minimum 4 GB RAM.',
  },
  {
    q: 'Does VoiceTypr work on Intel Macs?',
    a: "Yes. We ship a dedicated Intel build. Select 'macOS (Intel)' on the download page.",
  },
  {
    q: 'Does it use my GPU on Windows?',
    a: 'Yes — VoiceTypr auto-detects NVIDIA, AMD, and Intel GPUs for faster transcription. If no GPU is available it falls back to CPU automatically; it still works.',
  },
  {
    q: 'How do I cancel a recording I don’t want?',
    a: 'Double-press Esc while recording to cancel — nothing gets transcribed and nothing gets pasted. Or release the hotkey in push-to-talk mode.',
  },
];

export default function FAQ() {
  return (
    <section className="ed-section" id="faq">
      <div className="ed-container">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-4xl leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              The honest FAQ.
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

          <div className="border-t border-editorial-line">
            {faqs.map((faq, index) => (
              <article key={faq.q} className="grid gap-4 border-b border-editorial-line py-6 md:grid-cols-[4rem_1fr] md:py-7">
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
