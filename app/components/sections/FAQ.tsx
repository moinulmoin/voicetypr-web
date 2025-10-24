"use client";

import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "Windows says 'Unknown Publisher'. What should I do?",
    answer:
      "SmartScreen shows this because we don’t use a Microsoft code‑signing certificate yet. Even the basic option is roughly $200–$300/year, so as a solo founder I’m keeping costs lean for now. The app is safe: click More info → Run anyway. As more users launch the app, SmartScreen warnings fade automatically.",
  },
  {
    question: "Can I try VoiceTypr for free?",
    answer:
      "Yes, VoiceTypr includes a 3-day free trial with unlimited transcription. No card required: download, activate the trial, and start talking.",
  },
  {
    question: "Does it work with ChatGPT, Claude, and Cursor?",
    answer:
      "Absolutely. Place your cursor anywhere, hold the hotkey, and VoiceTypr pastes formatted text into ChatGPT, Claude, Cursor, VS Code, email, and any other app.",
  },
  {
    question: "Is my voice data private?",
    answer:
      "Yes. VoiceTypr runs locally using modern offline models; your audio never leaves your machine.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "macOS Ventura 13+ (Apple Silicon recommended) or Windows 10+. Minimum 4 GB RAM.",
  },
];

export default function FAQ() {
  return (
    <section className="relative py-24" id="faq">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Everything you need to know before switching your typing workflow to
            VoiceTypr.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card
              key={faq.question}
              className="rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm"
            >
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                {faq.question}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Any other questions?{" "}
          <a
            href="mailto:support@voicetypr.com"
            className="text-primary hover:underline"
            data-umami-event="faq-contact-click"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
