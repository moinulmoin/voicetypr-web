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
    answer: "Yes! VoiceTypr offers a free trial with 3 days of unlimited transcription. This lets you test all the core features before upgrading to Pro."
  },
  {
    question: "Will it work on my Intel Mac?",
    answer: "VoiceTypr works on both Intel and Apple Silicon Macs."
  },
  {
    question: "Which platforms are supported?",
    answer: "VoiceTypr is currently available for macOS (13+). We're working on Windows support."
  },
  {
    question: "Can I use my Pro license on all my devices?",
    answer: "Yes, you can activate your Pro license on up to 1 device."
  },
  {
    question: "How does offline mode work?",
    answer: "VoiceTypr downloads AI models directly to your device. Once downloaded, you can transcribe without any internet connection. Your data never leaves your device."
  },
  {
    question: "What languages are supported?",
    answer: "VoiceTypr supports over 100 languages for transcription and can translate them all to English. The accuracy varies by language, with major languages having the best support."
  }
];

export default function FAQ() {
  return (
    <section className="relative py-24" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
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
              <AccordionTrigger className="text-lg font-medium py-5 hover:no-underline">
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