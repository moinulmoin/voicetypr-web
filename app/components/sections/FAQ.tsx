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
    answer: "VoiceTypr works on both Intel and Apple Silicon Macs. However, Apple Silicon Macs are more optimized for the local ai processing."
  },
  {
    question: "What is the roadmap for VoiceTypr?",
    answer: "We want to keep VoiceTypr purposely minimal. Instead of chasing an endless list of features, we focus on shaping core feature and shipping bug fixes and quality-of-life improvements."
  },
  {
    question: "How is VoiceTypr different from others",
    answer: "VoiceTypr runs entirely on your computer. There are no $XXX/year subscriptions here: you pay once for fast, private, on-device transcription that does one job very well."
  },
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