"use client";

import { Card, CardContent } from "@/components/ui/card";

// Selected testimonials - top 3 tweets
const testimonials = [
  {
    id: "1",
    content: "VoiceTypr has been amazing at helping me speed up my writing process. I love that the data never leaves my computer, so I know my data is safe and private.",
    author: {
      name: "Sarah Chen",
      handle: "@sarahchen_dev",
      verified: true
    },
    date: "2:34 PM · Nov 15, 2024",
    tweetUrl: "https://twitter.com/sarahchen_dev/status/1234567890"
  },
  {
    id: "2",
    content: "Just replaced all my dictation tools with @voicetypr. It runs natively on macOS and Windows, integrates perfectly with the system clipboard. Highly recommend it for anyone who writes a lot!",
    author: {
      name: "Alex Thompson",
      handle: "@alexthompson",
      verified: false
    },
    date: "9:21 AM · Nov 14, 2024",
    tweetUrl: "https://twitter.com/alexthompson/status/1234567891"
  },
  {
    id: "3",
    content: "VoiceTypr is a game changer for coding. I can now dictate complex code snippets and it understands context. Way better than typing, especially for long documentation. 10/10 would recommend!",
    author: {
      name: "Maria Garcia",
      handle: "@maria_codes",
      verified: true
    },
    date: "5:45 PM · Nov 13, 2024",
    tweetUrl: "https://twitter.com/maria_codes/status/1234567892"
  }
];

export default function Reviews() {
  return (
    <section className="relative py-24 overflow-hidden" id="reviews">
      {/* Section intro */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
          Loved by thousands of users
        </h2>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl hover:bg-card/60 transition-all duration-200 shadow-none cursor-pointer"
              onClick={() => window.open(testimonial.tweetUrl, "_blank")}
            >
              <CardContent className="p-4">
                {/* Tweet author header */}
                <div className="flex items-start gap-3 mb-3">
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
                <p className="text-foreground leading-relaxed mb-3">
                  {testimonial.content}
                </p>
                
                {/* Tweet date */}
                <p className="text-sm text-muted-foreground">
                  {testimonial.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}