"use client";

import { Card, CardContent } from "@/components/ui/card";

// Demo testimonials with varied lengths for masonry effect
const testimonials = [
  {
    id: "1",
    content: "VoiceTypr has revolutionized my workflow! As a content creator, I can now draft blog posts 3x faster. The accuracy is incredible, and I love that it works offline. No more worrying about my ideas being sent to the cloud.",
    author: {
      name: "Emma Rodriguez",
      handle: "@emma_writes",
      verified: true
    },
    date: "2:34 PM · Dec 15, 2024",
    tweetUrl: "https://twitter.com/emma_writes/status/1234567890"
  },
  {
    id: "2",
    content: "Finally, a dictation tool that actually understands technical jargon! I've been using VoiceTypr for documenting my code, and it handles variable names and programming concepts perfectly. This is exactly what developers need.",
    author: {
      name: "David Park",
      handle: "@parkdev",
      verified: false
    },
    date: "9:21 AM · Dec 14, 2024",
    tweetUrl: "https://twitter.com/parkdev/status/1234567891"
  },
  {
    id: "3",
    content: "Game changer for accessibility! My RSI was getting worse, but VoiceTypr has allowed me to continue working without pain. The multi-language support is fantastic - I can seamlessly switch between English and Spanish. Thank you for building this! 🙏",
    author: {
      name: "Sofia Martinez",
      handle: "@sofiamartinez_ux",
      verified: true
    },
    date: "5:45 PM · Dec 13, 2024",
    tweetUrl: "https://twitter.com/sofiamartinez_ux/status/1234567892"
  },
  {
    id: "4",
    content: "Just replaced Dragon with @voicetypr. It's faster, more accurate, and the privacy-first approach is exactly what I needed for my legal work. Highly recommend!",
    author: {
      name: "Michael Chang",
      handle: "@mchang_law",
      verified: false
    },
    date: "11:30 AM · Dec 12, 2024",
    tweetUrl: "https://twitter.com/mchang_law/status/1234567893"
  },
  {
    id: "5",
    content: "As a novelist, VoiceTypr has been a revelation. I can capture ideas as fast as they come, walking around my office and just talking. The natural language processing is superb - it even handles my character names and made-up words correctly after a bit of training. This tool has literally doubled my daily word count!",
    author: {
      name: "Rebecca Thompson",
      handle: "@becwrites",
      verified: true
    },
    date: "8:15 PM · Dec 11, 2024",
    tweetUrl: "https://twitter.com/becwrites/status/1234567894"
  }
];

export default function Reviews() {
  return (
    <section className="relative py-24 overflow-hidden" id="reviews">
      {/* Section intro */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground mb-3">
          What Our Users Are Saying
        </h2>
        <p className="text-muted-foreground text-lg">
          Join thousands who've transformed their workflow with VoiceTypr
        </p>
      </div>

      {/* Flexbox Masonry with Centered Last Row */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <Card
                className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl hover:bg-card/60 transition-all duration-200 shadow-none cursor-pointer"
                onClick={() => window.open(testimonial.tweetUrl, "_blank")}
                data-umami-event="review-click"
                data-umami-event-author={testimonial.author.handle}
              >
                <CardContent className="p-6">
                  {/* Tweet author header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-base truncate">{testimonial.author.name}</span>
                        {testimonial.author.verified && (
                          <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                          </svg>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">{testimonial.author.handle}</div>
                    </div>
                  </div>
                  
                  {/* Tweet content */}
                  <p className="text-foreground leading-relaxed mb-4">
                    {testimonial.content}
                  </p>
                  
                  {/* Tweet date */}
                  <p className="text-sm text-muted-foreground">
                    {testimonial.date}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}