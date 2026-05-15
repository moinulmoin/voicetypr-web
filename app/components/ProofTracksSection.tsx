import Link from 'next/link';
import type { ProofTrack } from '@/lib/seo-discovery';

type ProofTracksSectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tracks: ProofTrack[];
  dataTrackPrefix?: string;
  embedded?: boolean;
};

export default function ProofTracksSection({
  eyebrow,
  title,
  description,
  tracks,
  dataTrackPrefix = 'proof-tracks',
  embedded = false,
}: ProofTracksSectionProps) {
  if (tracks.length === 0) return null;

  const content = (
    <>
      <div className="mb-10 max-w-[820px]">
        <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
          {eyebrow}
        </div>
        <h2 className="mt-2 text-[clamp(32px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.02em] text-editorial-ink">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-[680px] text-[16px] leading-[1.65] text-editorial-ink-2">
            {description}
          </p>
        ) : null}
      </div>

      <div className={`grid gap-4 ${tracks.length > 1 ? 'lg:grid-cols-2' : 'max-w-[760px]'}`}>
        {tracks.map((track) => (
          <article key={`${track.eyebrow}-${track.title}`} className="rounded-2xl border border-editorial-line bg-white/80 p-7 shadow-sm backdrop-blur md:p-8">
            <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
              {track.eyebrow}
            </div>
            <h3 className="mt-3 text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-editorial-ink">
              {track.title}
            </h3>
            <p className="mt-4 max-w-[560px] text-[15px] leading-[1.65] text-editorial-ink-2">
              {track.body}
            </p>

            <ul className="mt-6 space-y-3">
              {track.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-[15px] leading-[1.6] text-editorial-ink-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-editorial-ink" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {track.quote ? (
              <blockquote className="mt-7 rounded-xl bg-editorial-surface-2 p-5 text-[15px] leading-[1.65] text-editorial-ink">
                “{track.quote}”
                {track.quoteAttribution ? (
                  <footer className="mt-3 text-[12px] font-medium uppercase tracking-[0.12em] text-editorial-ink-3">
                    {track.quoteAttribution}
                  </footer>
                ) : null}
              </blockquote>
            ) : null}

            <div className="mt-7">
              <Link
                href={track.href}
                data-track={`${dataTrackPrefix}-click`}
                data-track-destination={track.href}
                className="text-sm font-medium text-editorial-ink underline underline-offset-4 transition-colors hover:text-black"
              >
                {track.linkLabel}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );

  if (embedded) return content;

  return (
    <section className="ed-section">
      <div className="ed-container">{content}</div>
    </section>
  );
}
