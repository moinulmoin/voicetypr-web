import { Card } from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";
import { XformerlyTwitter, GitHub } from "@/components/icons";

// Testimonials data with realistic feedback
const testimonials = [
  {
    id: 1,
    content: "Great software for local voice transcription (audio to text). So you can accelerate your speed at working / coding. It's available for Windows and Mac.",
    author: {
      name: "Alaska",
      handle: "@alaska12345_",
      avatar: "A",
    },
    source: "twitter",
  },
  {
    id: 2,
    content: "Vibe coders gonna love this.",
    author: {
      name: "Paul Li",
      handle: "@PaulTheLi",
      avatar: "PL",
    },
    source: "twitter",
  },

  {
    id: 4,
    content: "Coming from Wispr Flow, it makes a lot of sense, doing faster transcription using local AI models and having full privacy and getting this software at this price. I really love using this.",
    author: {
      name: "Alex B.",
      handle: "alex.b",
      avatar: "AB",
    },
    source: "email",
  },
  {
    id: 5,
    content: "I love the app. It's really useful. I love the fact that you can select your own models. It's well designed and overall works really well. Kudos.",
    author: {
      name: "Mark V.",
      handle: "mark.v",
      avatar: "MV",
    },
    source: "email",
  },
  {
    id: 6,
    content: "Thanks for creating this tool. There aren't a lot of local first Windows dictation tools using AI models for typing",
    author: {
      name: "Josip J",
      handle: "josip.j",
      avatar: "JJ",
    },
    source: "email",
  },
  {
    id: 7,
    content: "The app is incredible, I did not expect it to be so fast while fully offline! I don't know how you did it, but you did an amazing job!",
    author: {
      name: "Stephen K. L.",
      handle: "stephenkl",
      avatar: "SK",
    },
    source: "github",
  },
  {
    id: 8,
    content: "I switched from Wispr Flow because I didn't want another monthly subscription, and I needed something that works on both Mac and Windows. VoiceTypr ticks both boxes. Being able to use my own API key gives me full control, and Moinul's support getting everything connected was brilliant. One payment, no ongoing costs, exactly what I was looking for.",
    author: {
      name: "Catherine E.",
      handle: "catherine.e",
      avatar: "CE",
    },
    source: "email",
  },
];

export default function Reviews() {
  return (
    <section className="relative py-24 overflow-hidden" id="testimonials">
      {/* Section intro */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground mb-3">
          Makers love VoiceTypr
        </h2>
        <p className="text-muted-foreground text-lg">
          Join the makers shipping faster with voice
        </p>
      </div>

      {/* Masonry Grid Layout */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="break-inside-avoid bg-card/80 backdrop-blur-sm border-border/50 rounded-2xl p-6 hover:bg-card/90 transition-all duration-200 group"
            >
              {/* Author Info & Source Icon - Top */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold text-primary">
                      {testimonial.author.avatar}
                    </span>
                  </div>

                  {/* Name and Handle */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">
                      {testimonial.author.name}
                    </p>
                    {testimonial.source === "twitter" && (
                      <p className="text-xs text-muted-foreground truncate">
                        {testimonial.author.handle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Source Icon - Top Right */}
                {testimonial.source === "github" ? (
                  <GitHub className="w-4 h-4 text-muted-foreground/50" />
                ) : testimonial.source === "twitter" ? (
                  <XformerlyTwitter className="w-4 h-4 text-muted-foreground/50" />
                ) : (
                  <Mail className="w-4 h-4 text-muted-foreground/50" />
                )}
              </div>

              {/* Testimonial Content */}
              <p className="text-sm leading-relaxed text-foreground/90">
                {testimonial.content}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}