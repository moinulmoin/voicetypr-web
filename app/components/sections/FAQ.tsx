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
    question: "How does offline mode work?",
    answer: "VoiceTypr downloads AI models directly to your device. Once downloaded, you can transcribe without any internet connection. Your data never leaves your device."
  },
  {
    question: "What is the roadmap for VoiceTypr?",
    answer: "We keep VoiceTypr purposely minimal so it always feels fast and reliable. Instead of chasing an endless list of features, we focus on perfecting speech-to-text dictation and shipping ongoing bug fixes and quality-of-life improvements."
  },
  {
    question: "How is VoiceTypr different from alternatives like SuperWhisper or Wispr?",
    answer: "VoiceTypr runs entirely on your computer—your voice never leaves your device unless you want it to. There are no $189/year subscriptions here: you pay once for fast, private, on-device transcription that does one job exceptionally well."
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