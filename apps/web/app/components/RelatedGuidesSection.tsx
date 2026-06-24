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
        <p className="mb-2 text-sm font-medium text-sage">{eyebrow}</p>
        <h2 className="font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-[620px] text-base leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            data-track={`${dataTrackPrefix}-click`}
            data-track-destination={link.href}
            className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-muted"
          >
            <p className="text-xs font-medium text-sage">{link.eyebrow}</p>
            <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-foreground">{link.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{link.description}</p>
            <div className="mt-6 text-sm font-medium text-foreground transition-colors group-hover:text-sage">
              {link.ctaLabel} →
            </div>
          </Link>
        ))}
      </div>
    </>
  );

  if (embedded) return content;

  return (
    <section className="pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-6">{content}</div>
    </section>
  );
}
