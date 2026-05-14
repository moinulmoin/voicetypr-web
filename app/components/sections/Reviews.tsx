import { Mail } from 'lucide-react';
import { XformerlyTwitter, GitHub } from '@/components/icons';

const testimonials = [
  {
    id: 8,
    title: 'Switched from Wispr Flow',
    content:
      "I switched from Wispr Flow because I didn't want another monthly subscription, and I needed something that works on both Mac and Windows. VoiceTypr ticks both boxes. One payment, no ongoing costs, exactly what I was looking for.",
    author: { name: 'Catherine E.', handle: 'catherine.e', avatar: 'CE' },
    source: 'email' as const,
  },
  {
    id: 4,
    title: 'Local models, real privacy',
    content:
      'Coming from Wispr Flow, it makes a lot of sense, doing faster transcription using local AI models and having full privacy at this price. I really love using this.',
    author: { name: 'Alex B.', handle: 'alex.b', avatar: 'AB' },
    source: 'email' as const,
  },
  {
    id: 5,
    title: 'Model choice matters',
    content:
      "I love the app. It's really useful. I love the fact that you can select your own models. It's well designed and overall works really well. Kudos.",
    author: { name: 'Mark V.', handle: 'mark.v', avatar: 'MV' },
    source: 'email' as const,
  },
  {
    id: 7,
    title: 'Fast while fully offline',
    content:
      "The app is incredible, I did not expect it to be so fast while fully offline! I don't know how you did it, but you did an amazing job!",
    author: { name: 'Stephen K. L.', handle: 'stephenkl', avatar: 'SK' },
    source: 'github' as const,
  },
  {
    id: 1,
    title: 'Mac and Windows',
    content:
      "Great software for local voice transcription. So you can accelerate your speed at working / coding. It's available for Windows and Mac.",
    author: { name: 'Alaska', handle: '@alaska12345_', avatar: 'A' },
    source: 'twitter' as const,
  },
  {
    id: 2,
    title: 'Built for vibe coders',
    content: 'Vibe coders gonna love this.',
    author: { name: 'Paul Li', handle: '@PaulTheLi', avatar: 'PL' },
    source: 'twitter' as const,
  },
];

type Source = 'twitter' | 'email' | 'github';

function SourceIcon({ source }: { source: Source }) {
  const cls = 'h-4 w-4 text-editorial-ink-3';
  switch (source) {
    case 'github':
      return <GitHub className={cls} />;
    case 'twitter':
      return <XformerlyTwitter className={cls} />;
    case 'email':
      return <Mail className={cls} />;
  }
}

function sourceLabel(source: Source) {
  if (source === 'twitter') return 'Twitter/X';
  if (source === 'github') return 'GitHub';
  return 'Email';
}

export default function Reviews() {
  return (
    <section className="ed-section" id="testimonials">
      <div className="ed-container">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Loved by many creators.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-editorial-ink-2">
            Feedback from people switching off Wispr Flow, cloud-first dictation apps, and clunky legacy tools.
          </p>
        </div>

        <div className="columns-1 gap-4 md:columns-2 xl:columns-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="relative mb-4 break-inside-avoid rounded-2xl border border-editorial-line bg-editorial-surface-2 p-6 shadow-sm"
            >
              <div className="absolute right-5 top-5" aria-label={sourceLabel(t.source)} title={sourceLabel(t.source)}>
                <SourceIcon source={t.source} />
              </div>
              <blockquote className="pr-8 text-base leading-relaxed text-editorial-ink">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-xs font-medium text-editorial-ink-2 shadow-sm">
                  {t.author.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-editorial-ink">{t.author.name}</div>
                  <div className="text-xs text-editorial-ink-3">{t.author.handle}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
