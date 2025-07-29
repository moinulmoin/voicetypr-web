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
      "Yes! VoiceTypr offers a free trial with 3 days of unlimited transcription. This lets you test all the core features before upgrading to Pro.",
  },
  {
    question: "Will it work on my Intel Mac?",
    answer:
      "VoiceTypr works on both Intel and Apple Silicon Macs. However, Apple Silicon Macs are more optimized for the local ai processing.",
  },
  {
    question: "Is it really lifetime or is there any tricks?",
    answer:
      "Yes, it's truly lifetime. When you buy VoiceTypr, you get all future updates forever. No tricks to rebuy, no upgrade fees, no hidden costs. Though the price may increase soon after early bird discounts.",
  },
  {
    question: "I have a feature request",
    answer:
      "You can mail us or dm us on X for your feature request. We'll review your requests and let you know if that's something we can work on.",
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
