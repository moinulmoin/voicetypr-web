"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I try VoiceTypr for free?",
    answer:
      "Yes! VoiceTypr offers a 3-day free trial with unlimited transcription. Test all features before buying. No credit card required.",
  },
  {
    question: "Is it really lifetime or are there tricks?",
    answer:
      "It's truly lifetime. Buy once, get all future updates forever. No rebuy tricks, no upgrade fees, no subscriptions. The $19 price is an early bird discount though - will increase after launch week.",
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
    question: "Will it work on Windows/Intel Mac?",
    answer:
      "Windows version just launched! Works on both Intel and Apple Silicon Macs. Apple Silicon is more optimized for AI processing but Intel works great too.",
  },
  {
    question: "Can I use it on multiple computers?",
    answer:
      "Pro plan ($19): 1 device. Plus plan ($29): 2 devices. You can deactivate and reactivate on different machines as needed. No subscription means you actually own your license.",
  },
  {
    question: "I have a feature request",
    answer:
      "We'd love to hear it! DM us on X @voicetypr or email support@voicetypr.com. We review all requests and early users' feedback shapes our product.",
  },
  {
    question: "Windows shows 'Unknown Publisher' warning. Is it safe?",
    answer:
      "Yes, it's completely safe! To install: click 'More info' then 'Run anyway'. This warning appears because we don't have code signing yet (costs $129-290+/year). The app is open source - you can verify the code yourself on GitHub. Once more users download it, Windows SmartScreen will stop showing this warning automatically.",
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

        {/* FAQ items */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-2xl overflow-hidden bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors duration-300 px-6"
            >
              <AccordionTrigger
                className="text-lg font-medium py-5 hover:no-underline"
                data-umami-event="faq-toggle"
                data-umami-event-question={faq.question}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
