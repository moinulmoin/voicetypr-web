import type { ReactNode } from "react";
import Link from "next/link";
import { Section, Container } from "@/components/marketing/section";

/**
 * The closing call-to-action band used across SEO/landing pages.
 *
 * A `bg-primary` rounded box with a soft sage blur accent, a headline,
 * an optional subtitle, and two links: a primary download/trial button
 * and a secondary pricing button. All copy is passed in by the page so
 * per-page wording is preserved verbatim during migration.
 *
 * Default classes reproduce the canonical (air-gapped) block exactly.
 * `headlineClassName` / `subtitleClassName` exist so the one outlier page
 * (network-transcription, which uses a wider non-balanced subtitle and an
 * extra `mb-5` on the headline) can still render 1:1.
 */

const PRIMARY_LINK_CLASS =
  "inline-flex h-12 items-center rounded-xl bg-background px-5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 active:scale-95";

const SECONDARY_LINK_CLASS =
  "inline-flex h-12 items-center rounded-xl border border-primary-foreground/20 px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 active:scale-95";

type FinalCTAProps = {
  /** Headline (<h2>). Pass JSX with <em> for the emphasized serif word. */
  headline: ReactNode;
  /** Subtitle paragraph beneath the headline. Omitted from the DOM when absent. */
  subtitle?: ReactNode;
  /** Primary (download/trial) button destination. @default "/download" */
  primaryHref?: string;
  /** Primary button label. @default "Download Voicetypr" */
  primaryLabel?: string;
  /** Optional analytics hook on the primary button (e.g. "network-transcription-final-cta-click"). */
  primaryDataTrack?: string;
  /** Secondary (pricing) button destination. @default "/pricing" */
  secondaryHref?: string;
  /** Secondary button label. @default "Buy lifetime license" */
  secondaryLabel?: string;
  /** Optional analytics hook on the secondary button. */
  secondaryDataTrack?: string;
  /** Headline <h2> class list. @default canonical landing style */
  headlineClassName?: string;
  /** Subtitle <p> class list. @default canonical landing style */
  subtitleClassName?: string;
};

export function FinalCTA({
  headline,
  subtitle,
  primaryHref = "/download",
  primaryLabel = "Download Voicetypr",
  primaryDataTrack,
  secondaryHref = "/pricing",
  secondaryLabel = "Buy lifetime license",
  secondaryDataTrack,
  headlineClassName =
    "mx-auto max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight",
  subtitleClassName =
    "mx-auto mt-5 mb-8 max-w-xl text-balance text-base leading-relaxed text-primary-foreground/75",
}: FinalCTAProps) {
  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-center text-primary-foreground md:px-10 md:py-16">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-sage/30 blur-3xl" />
          <div className="relative">
            <h2 className={headlineClassName}>{headline}</h2>
            {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={primaryHref} data-track={primaryDataTrack} className={PRIMARY_LINK_CLASS}>
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                data-track={secondaryDataTrack}
                className={SECONDARY_LINK_CLASS}
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
