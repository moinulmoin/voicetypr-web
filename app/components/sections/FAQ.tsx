const faqs = [
  {
    q: "Does VoiceTypr work on Windows?",
    a: "Yes — Windows 10 and later. Download the .exe installer, run it, and you're set. We ship Mac and Windows as first-class platforms.",
  },
  {
    q: "Windows says 'Unknown Publisher' — is it safe?",
    a: "Yes. SmartScreen shows that because I don't have a Microsoft code-signing cert yet (they cost $200-$300/year and I'm keeping solo-founder costs lean). Click More info → Run anyway. The warning fades as more people install it.",
  },
  {
    q: "Can I try VoiceTypr for free?",
    a: "Yes — 3-day free trial, unlimited transcription, no card required. Download, activate the trial, start talking.",
  },
  {
    q: "Does it work with ChatGPT, Claude, and Cursor?",
    a: "Yes. Place your cursor anywhere, hold the hotkey, and VoiceTypr pastes formatted text into ChatGPT, Claude, Cursor, VS Code, email, Slack — any app that takes a text cursor.",
  },
  {
    q: "Is my voice data private?",
    a: "Yes. Audio transcription runs 100% locally with Whisper on your machine — your audio never leaves your computer. The optional AI formatting presets send only the final text (never audio) to your chosen provider. Turn AI off to stay fully offline.",
  },
  {
    q: "Do I need an API key for the AI formatting presets?",
    a: "Only if you want them. Raw transcription works 100% offline with no key. The optional presets (Default, Prompts, Email, Commit) use your own API key from Gemini, OpenAI, or any OpenAI-compatible provider (Groq, Ollama, etc.). You control the provider, the cost, and the off switch.",
  },
  {
    q: "What are the system requirements?",
    a: "macOS Ventura 13+ (Apple Silicon recommended, Intel supported) or Windows 10+. Minimum 4 GB RAM.",
  },
  {
    q: "Does VoiceTypr work on Intel Macs?",
    a: "Yes. We ship a dedicated Intel build. Select 'macOS (Intel)' on the download page.",
  },
  {
    q: "Does it use my GPU on Windows?",
    a: "Yes — VoiceTypr auto-detects NVIDIA, AMD, and Intel GPUs for 5–10× faster transcription. Keep your graphics drivers current. If no GPU is available it falls back to CPU automatically; it always works.",
  },
  {
    q: "How do I cancel a recording I don’t want?",
    a: "Double-press Esc while recording to cancel — nothing gets transcribed, nothing gets pasted. Or just release the hotkey in push-to-talk mode.",
  },
  {
    q: "Is it open source?",
    a: "Yes. The core is open on GitHub at github.com/moinulmoin/voicetypr. Star it if it helps.",
  },
  {
    q: "Refunds?",
    a: "7 days, no questions. Email support@voicetypr.com. We refund first, ask questions after (if at all).",
  },
];

export default function FAQ() {
  return (
    <section className="ed-section" id="faq">
      <div className="ed-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
          {/* Left column */}
          <div>
            <div className="ed-eyebrow">everything people actually ask</div>
            <h2 className="font-serif text-[clamp(36px,3.6vw,54px)] leading-[1] mb-4 tracking-[-0.01em]">
              The honest FAQ.
            </h2>
            <p className="text-editorial-ink-2 text-[16px] leading-[1.6]">
              Not &ldquo;frequently asked marketing pitches.&rdquo; These are the
              real questions, pulled from my inbox.
            </p>
          </div>

          {/* Right column — FAQ list */}
          <div>
            {faqs.map((faq, i) => (
              <details
                key={faq.q}
                open={i === 0}
                className="group border-t border-editorial-line last:border-b last:border-editorial-line py-5 cursor-pointer"
              >
                <summary className="list-none flex justify-between items-start gap-6 font-serif text-[22px] leading-[1.2] [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <span className="w-7 h-7 rounded-full bg-editorial-surface-2 grid place-items-center font-mono text-sm text-editorial-ink-2 flex-shrink-0 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="text-editorial-ink-2 text-[15px] leading-[1.6] pt-3.5 max-w-[640px]">
                  {faq.a}
                </div>
              </details>
            ))}

            <div className="mt-8 text-sm text-editorial-ink-3">
              Any other questions?{" "}
              <a
                href="mailto:support@voicetypr.com"
                className="text-editorial-accent hover:underline"
                data-umami-event="faq-contact-click"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
