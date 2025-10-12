"use client";

import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "Can I try VoiceTypr for free?",
    answer:
      "Yes! VoiceTypr offers a 3-day free trial with unlimited transcription. Test all features before buying. No credit card required.",
  },

  {
    question: "Does it work with ChatGPT, Claude, and Cursor?",
    answer:
      "Yes! Works anywhere you can type - ChatGPT, Claude, Cursor, VS Code, Slack, X, emails. Just position your cursor and start voice typing. Perfect for long prompts without typing fatigue.",
  },
  {
    question: "Is my voice data private?",
    answer:
      "Absolutely! VoiceTypr uses local AI models that run entirely on your device. Your voice never leaves your computer. No cloud, no servers, 100% offline.",
  },
  {
    question: "Windows shows 'Unknown Publisher' warning. Is it safe?",
    answer:
      "Yes, it's completely safe! To install: click 'More info' then 'Run anyway'. This warning appears because we don't have code signing yet (costs $129-290+/year). The app is open source - you can verify the code yourself on GitHub. Once more users download it, Windows SmartScreen will stop showing this warning automatically.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "macOS 13 or later, Windows 10 or later and minimum 4 GB RAM required.",
  },
];

export default function FAQ() {
  return (
    <section className="relative py-24" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground text-center">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ items - Simple list format */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-4 transition-all duration-300 hover:bg-card/70 hover:shadow-lg"
            >
              <h3 className="text-lg font-medium">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
