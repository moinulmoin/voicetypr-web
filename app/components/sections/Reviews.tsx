import { Mail } from "lucide-react";
import { XformerlyTwitter, GitHub } from "@/components/icons";

const testimonials = [
  { id: 1, content: "Great software for local voice transcription (audio to text). So you can accelerate your speed at working / coding. It's available for Windows and Mac.", author: { name: "Alaska", handle: "@alaska12345_", avatar: "A" }, source: "twitter" as const },
  { id: 2, content: "Vibe coders gonna love this.", author: { name: "Paul Li", handle: "@PaulTheLi", avatar: "PL" }, source: "twitter" as const },
  { id: 4, content: "Coming from Wispr Flow, it makes a lot of sense, doing faster transcription using local AI models and having full privacy and getting this software at this price. I really love using this.", author: { name: "Alex B.", handle: "alex.b", avatar: "AB" }, source: "email" as const },
  { id: 5, content: "I love the app. It's really useful. I love the fact that you can select your own models. It's well designed and overall works really well. Kudos.", author: { name: "Mark V.", handle: "mark.v", avatar: "MV" }, source: "email" as const },
  { id: 6, content: "Thanks for creating this tool. There aren't a lot of local first Windows dictation tools using AI models for typing", author: { name: "Josip J", handle: "josip.j", avatar: "JJ" }, source: "email" as const },
  { id: 7, content: "The app is incredible, I did not expect it to be so fast while fully offline! I don't know how you did it, but you did an amazing job!", author: { name: "Stephen K. L.", handle: "stephenkl", avatar: "SK" }, source: "github" as const },
  { id: 8, content: "I switched from Wispr Flow because I didn't want another monthly subscription, and I needed something that works on both Mac and Windows. VoiceTypr ticks both boxes. Being able to use my own API key gives me full control, and Moinul's support getting everything connected was brilliant. One payment, no ongoing costs, exactly what I was looking for.", author: { name: "Catherine E.", handle: "catherine.e", avatar: "CE" }, source: "email" as const },
];

type Source = "twitter" | "email" | "github";

function SourceIcon({ source }: { source: Source }) {
  const cls = "w-4 h-4 text-editorial-ink-3";
  switch (source) {
    case "github":
      return <GitHub className={cls} />;
    case "twitter":
      return <XformerlyTwitter className={cls} />;
    case "email":
      return <Mail className={cls} />;
  }
}

function sourceRole(t: (typeof testimonials)[number]) {
  if (t.source === "twitter") return t.author.handle;
  if (t.source === "email") return "via email";
  return "via GitHub";
}

// Card types: tall = Catherine (id 8), mini = Alaska(1), Paul(2), Josip(6)
// Regular = Alex(4), Mark(5), Stephen(7)
function isTall(id: number) {
  return id === 8;
}
function isMini(id: number) {
  return id === 1 || id === 2 || id === 6;
}

// Ordering: Tall first, then regulars, then minis
const ordered = [...testimonials].sort((a, b) => {
  const rank = (t: typeof a) => (isTall(t.id) ? 0 : isMini(t.id) ? 2 : 1);
  return rank(a) - rank(b);
});

export default function Reviews() {
  return (
    <section className="ed-section bg-editorial-surface-2" id="testimonials">
      <div className="ed-container">
        <span className="ed-eyebrow">loved by the makers who prompt all day</span>
        <h2 className="font-serif text-[clamp(40px,4vw,60px)] leading-[1] mb-10">
          People who switched, and stayed.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ordered.map((t) => {
            const tall = isTall(t.id);
            const mini = isMini(t.id);

            return (
              <div
                key={t.id}
                className={[
                  "bg-editorial-surface border border-editorial-line rounded-[18px] flex flex-col gap-4",
                  tall ? "lg:row-span-2 p-8" : "p-7",
                ].join(" ")}
              >
                {/* Source icon top-right */}
                <div className="flex justify-end">
                  <SourceIcon source={t.source as Source} />
                </div>

                {/* Quote */}
                <blockquote
                  className={[
                    "m-0 text-editorial-ink",
                    mini
                      ? "font-sans text-[15px] leading-[1.5] text-editorial-ink-2"
                      : "font-serif text-[22px] leading-[1.3]",
                  ].join(" ")}
                >
                  &ldquo;{t.content}&rdquo;
                </blockquote>

                {/* Who */}
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-[38px] h-[38px] rounded-full bg-editorial-surface-2 grid place-items-center font-mono text-[13px] text-editorial-ink-2">
                    {t.author.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.author.name}</div>
                    <div className="text-xs text-editorial-ink-3">{sourceRole(t)}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
