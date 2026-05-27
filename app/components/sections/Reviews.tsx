import Avatar from 'boring-avatars';
import { Gmail, XformerlyTwitter, GitHub } from '@/components/icons';

const featuredTestimonial = {
  id: 8,
  title: 'Switched from Wispr Flow',
  content:
    "I switched from Wispr Flow because I didn't want another monthly subscription, and I needed something that works on both Mac and Windows. VoiceTypr ticks both boxes. One payment, no ongoing costs, exactly what I was looking for.",
  author: { name: 'Catherine E.', handle: 'catherine.e', avatar: 'CE' },
  source: 'email' as const,
};

const testimonials = [
  featuredTestimonial,
  {
    id: 10,
    title: 'Bought because it is not SaaS',
    content:
      'This is an amazing product. I purchased the max plan to show my appreciation for you not being a SaaS. Thanks again for a great product.',
    author: { name: 'James H.', handle: 'james.h', avatar: 'JH' },
    source: 'email' as const,
  },
  {
    id: 7,
    title: 'Works fully offline',
    content:
      "The app is incredible, I did not expect it to be so fast while fully offline! I don't know how you did it, but you did an amazing job!",
    author: { name: 'Stephen K. L.', handle: 'stephenkl', avatar: 'SK' },
    source: 'github' as const,
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
    id: 9,
    title: 'Lightweight on Windows',
    content:
      "I've really fallen in love with your app. Real privacy on Windows and the lightweight feel of the software is just great.",
    author: { name: 'Mathieu B.', handle: 'mathieu.b', avatar: 'MB' },
    source: 'email' as const,
  },
  {
    id: 11,
    title: 'Game-changer workflow',
    content:
      "I'm really impressed with VoiceTypr on Windows. It's a game-changer for my workflow, and I'd happily purchase a license soon.",
    author: { name: 'Andreas K.', handle: 'andreas.k', avatar: 'AK' },
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
    id: 12,
    title: 'Reasonable price',
    content:
      'It works quite well. I went ahead and bought the license because I want to support you. The price is reasonable and I want to thank you.',
    author: { name: 'Wtin J.', handle: 'wtin.j', avatar: 'WJ' },
    source: 'email' as const,
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
  switch (source) {
    case 'github':
      return <GitHub className="h-4 w-4 text-[#181717] dark:text-editorial-ink-2" />;
    case 'twitter':
      return <XformerlyTwitter className="h-4 w-4 text-[#111111] dark:text-editorial-ink-2" />;
    case 'email':
      return <Gmail className="h-4 w-4 dark:text-editorial-ink-2" />;
  }
}

function sourceLabel(source: Source) {
  if (source === 'twitter') return 'Twitter/X';
  if (source === 'github') return 'GitHub';
  return 'Email';
}
const avatarColors = ['#E8DFD2', '#D8CDBD', '#D4965D', '#8B857B', '#18181A'] as const;
const supportingTestimonials = testimonials.slice(1);


export function FeaturedTestimonial() {
  return (
    <section className="relative z-10 py-6 md:py-10">
      <div className="ed-container">
        <article className="mx-auto max-w-4xl rounded-3xl border border-editorial-line bg-white/86 p-6 text-center shadow-sm backdrop-blur md:p-9">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-editorial-ink-3">
            Why people switch
          </p>
          <blockquote className="mx-auto max-w-3xl text-xl font-semibold leading-snug tracking-tight text-editorial-ink md:text-2xl">
            &ldquo;{featuredTestimonial.content}&rdquo;
          </blockquote>

          <div className="mx-auto mt-7 flex w-fit items-center justify-center gap-3 rounded-2xl border border-editorial-line bg-editorial-surface-2 px-4 py-3 text-left">
            <div className="overflow-hidden rounded-full ring-1 ring-editorial-line">
              <Avatar
                size={44}
                name={`${featuredTestimonial.author.name}-${featuredTestimonial.author.handle}`}
                variant="beam"
                colors={[...avatarColors]}
              />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-editorial-ink">{featuredTestimonial.author.name}</div>
              <div className="flex items-center gap-1.5 text-xs text-editorial-ink-3">
                <SourceIcon source={featuredTestimonial.source} />
                Switched from Wispr Flow
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}



export default function Reviews() {
  return (
    <section className="ed-section !pt-20 !pb-24" id="testimonials">
      <div className="ed-container">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            What people are <em>saying</em>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-editorial-ink-2">
            From writers, founders, and developers who pay once and dictate into the tools they already use.
          </p>
        </div>

        <div className="columns-1 gap-4 md:columns-2 xl:columns-3">
          {supportingTestimonials.map((t) => (
            <article
              key={t.id}
              className="relative mb-4 break-inside-avoid rounded-2xl border border-editorial-line bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              <div className="absolute right-5 top-5" aria-label={sourceLabel(t.source)} title={sourceLabel(t.source)}>
                <SourceIcon source={t.source} />
              </div>
              <blockquote className="pr-8 text-base leading-relaxed text-editorial-ink">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-3">
                <div className="overflow-hidden rounded-full ring-1 ring-editorial-line">
                  <Avatar
                    size={40}
                    name={`${t.author.name}-${t.author.handle}`}
                    variant="beam"
                    colors={[...avatarColors]}
                  />
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
