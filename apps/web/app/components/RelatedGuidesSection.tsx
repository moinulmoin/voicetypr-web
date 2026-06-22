import Link from 'next/link';
import type { DiscoveryLink } from '@/lib/seo-discovery';

type RelatedGuidesSectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  links: DiscoveryLink[];
  dataTrackPrefix?: string;
  embedded?: boolean;
};

export default function RelatedGuidesSection({
  eyebrow,
  title,
  description,
  links,
  dataTrackPrefix = 'related-guides',
  embedded = false,
}: RelatedGuidesSectionProps) {
  if (links.length === 0) return null;

  const content = (
    <>
      <div className="mb-10 max-w-[760px]">
        <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
          {eyebrow}
        </div>
        <h2 className="mt-2 text-[clamp(30px,3.8vw,46px)] font-semibold leading-[1.08] tracking-[-0.02em] text-editorial-ink">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-[620px] text-[16px] leading-[1.65] text-editorial-ink-2">
            {description}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            data-track={`${dataTrackPrefix}-click`}
            data-track-destination={link.href}
            className="group rounded-2xl border border-editorial-line bg-white/80 p-6 shadow-sm backdrop-blur transition-colors hover:bg-editorial-surface"
          >
            <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
              {link.eyebrow}
            </div>
            <h3 className="mt-3 text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-editorial-ink">
              {link.title}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.65] text-editorial-ink-2">
              {link.description}
            </p>
            <div className="mt-6 text-sm font-medium text-editorial-ink transition-colors group-hover:text-black">
              {link.ctaLabel} →
            </div>
          </Link>
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
