import type { Metadata } from "next";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import { CHANGELOG, type ChangelogEntry } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog — Voicetypr",
  description:
    "Every Voicetypr release, what shipped, what got fixed, and what changed. Curated from the desktop app's CHANGELOG.md, latest first.",
  alternates: { canonical: "https://voicetypr.com/changelog" },
  openGraph: {
    title: "Changelog — Voicetypr",
    description:
      "Every Voicetypr release, what shipped, what got fixed, and what changed. Latest first.",
    url: "https://voicetypr.com/changelog",
    siteName: "Voicetypr",
    type: "website",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const RELEASES_URL = "https://github.com/moinulmoin/voicetypr/releases";
const FULL_CHANGELOG_URL =
  "https://github.com/moinulmoin/voicetypr/blob/main/CHANGELOG.md";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ReleaseSection({
  label,
  items,
  tone,
}: {
  label: string;
  items: string[] | undefined;
  tone: "feature" | "fix" | "breaking";
}) {
  if (!items || items.length === 0) return null;

  const dotColor =
    tone === "feature"
      ? "bg-sage"
      : tone === "fix"
        ? "bg-muted-foreground"
        : "bg-foreground";

  return (
    <div className="mt-7">
      <div className="mb-3 font-sans text-sm font-semibold text-foreground">
        {label}
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li
            key={`${label}-${i}`}
            className="grid grid-cols-[auto_1fr] gap-3 text-[15px] leading-relaxed text-muted-foreground"
          >
            <span
              aria-hidden
              className={`mt-2 h-1.5 w-1.5 rounded-full ${dotColor}`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Release({ entry, isFirst = false }: { entry: ChangelogEntry; isFirst?: boolean }) {
  return (
    <article className={`grid grid-cols-1 gap-8 border-t border-border py-10 first:border-t-0 first:pt-0 lg:grid-cols-[200px_1fr] lg:gap-12 ${isFirst ? "pb-14" : ""}`}>
      <header className="lg:sticky lg:top-28 lg:self-start">
        <div className="flex flex-wrap items-baseline gap-3 lg:flex-col lg:items-start lg:gap-2">
          <div className={`font-sans font-bold leading-none tracking-tight text-foreground ${isFirst ? "text-[clamp(2.625rem,5vw,3.875rem)]" : "text-[clamp(1.875rem,3vw,2.625rem)]"}`}>
            {entry.version}
          </div>
          {entry.latest ? (
            <span className="rounded-full bg-sage-bg px-2.5 py-0.5 text-xs font-semibold text-sage">latest</span>
          ) : null}
          <time
            dateTime={entry.date}
            className="font-sans text-xs font-medium text-muted-foreground"
          >
            {formatDate(entry.date)}
          </time>
        </div>
      </header>

      <div>
        {entry.highlights && entry.highlights.length > 0 ? (
          <div className="rounded-2xl border border-border bg-muted px-5 py-5 md:px-6 md:py-6">
            <div className="mb-3 font-sans text-sm font-semibold text-foreground">
              Highlights
            </div>
            <ul className="space-y-2.5">
              {entry.highlights.map((item, i) => (
                <li
                  key={`hl-${entry.version}-${i}`}
                  className={`grid grid-cols-[auto_1fr] gap-3 leading-snug text-foreground ${isFirst ? "font-sans text-[19px] md:text-[21px]" : "font-sans text-[17px] md:text-[19px]"}`}
                >
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 rounded-full bg-sage"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <ReleaseSection label="Features" items={entry.features} tone="feature" />
        <ReleaseSection label="Fixes" items={entry.fixes} tone="fix" />
        <ReleaseSection
          label="Breaking changes"
          items={entry.breaking}
          tone="breaking"
        />
      </div>
    </article>
  );
}

export default function ChangelogPage() {
  return (
    <>
      <main
        id="main-content"
        className="min-h-dvh bg-background font-sans text-foreground"
      >
        <SiteHeader />

        {/* Hero */}
        <Section className="pt-20 md:pt-24">
          <Container>
            <div className="max-w-[820px]">
              <h1 className="text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[1.03] tracking-tight">
                Changelog
              </h1>
              <p className="mt-5 max-w-[640px] text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
                Every release, latest first. Curated from the desktop app&rsquo;s{" "}
                <a
                  href={FULL_CHANGELOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline-offset-2 hover:underline"
                  data-track="changelog-source-click"
                >
                  CHANGELOG.md
                </a>
                . Plain language, no commit hashes.
              </p>
            </div>
          </Container>
        </Section>

        {/* Releases */}
        <Section>
          <Container>
            <div className="max-w-[1080px]">
              {CHANGELOG.map((entry, i) => (
                <Release key={entry.version} entry={entry} isFirst={i === 0} />
              ))}
            </div>

            <div className="mt-16 flex max-w-[1080px] flex-wrap items-center justify-between gap-4 border-t border-border pt-10">
              <p className="text-sm text-muted-foreground">
                Earlier releases live on GitHub, including the unedited commit history.
              </p>
              <a
                href={RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-muted-foreground"
                data-track="changelog-releases-click"
              >
                View on GitHub
                <span aria-hidden>→</span>
              </a>
            </div>
          </Container>
        </Section>

        <SiteFooter />
      </main>
    </>
  );
}
