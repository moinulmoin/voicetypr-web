import type { Metadata } from "next";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import { CHANGELOG, type ChangelogEntry } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog — VoiceTypr",
  description:
    "Every VoiceTypr release, what shipped, what got fixed, and what changed. Curated from the desktop app's CHANGELOG.md, latest first.",
  alternates: { canonical: "https://voicetypr.com/changelog" },
  openGraph: {
    title: "Changelog — VoiceTypr",
    description:
      "Every VoiceTypr release, what shipped, what got fixed, and what changed. Latest first.",
    url: "https://voicetypr.com/changelog",
    siteName: "VoiceTypr",
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
      ? "bg-editorial-ink"
      : tone === "fix"
        ? "bg-editorial-ink-3"
        : "bg-editorial-line-2";

  return (
    <div className="mt-7">
      <div className="font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3 mb-3">
        {label}
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li
            key={`${label}-${i}`}
            className="grid grid-cols-[auto_1fr] gap-3 text-[15px] leading-[1.6] text-editorial-ink-2"
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
    <article className={`grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-12 py-10 first:pt-0 border-t first:border-t-0 border-editorial-line ${isFirst ? "pb-14" : ""}`}>
      <header className="lg:sticky lg:top-28 lg:self-start">
        <div className="flex flex-wrap items-baseline gap-3 lg:flex-col lg:items-start lg:gap-2">
          <div className={`leading-none tracking-[-0.04em] text-editorial-ink font-semibold ${isFirst ? "text-[clamp(42px,5vw,62px)]" : "text-[clamp(30px,3vw,42px)]"}`}>
            {entry.version}
          </div>
          {entry.latest ? (
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">latest</span>
          ) : null}
          <time
            dateTime={entry.date}
            className="font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3"
          >
            {formatDate(entry.date)}
          </time>
        </div>
      </header>

      <div>
        {entry.highlights && entry.highlights.length > 0 ? (
          <div className="rounded-xl border border-editorial-line bg-editorial-surface px-5 py-5 md:px-6 md:py-6">
            <div className="font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3 mb-3">
              Highlights
            </div>
            <ul className="space-y-2.5">
              {entry.highlights.map((item, i) => (
                <li
                  key={`hl-${entry.version}-${i}`}
                  className={`grid grid-cols-[auto_1fr] gap-3 leading-[1.4] ${isFirst ? "font-sans text-[19px] md:text-[21px] text-editorial-ink" : "font-sans text-[17px] md:text-[19px] text-editorial-ink"}`}
                >
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 rounded-full bg-editorial-ink"
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
        className="landing-editorial relative min-h-screen"
      >
        <Header />

        <section className="ed-section ed-section-hero pt-[120px] md:pt-[140px] pb-0">
          <div className="ed-container">
            <div className="max-w-[820px]">
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">what shipped, what got fixed</div>
              <h1 className="mt-3 mb-5 text-[clamp(46px,7vw,92px)] font-semibold leading-[0.95] tracking-[-0.05em]">
                Changelog
              </h1>
              <p className="max-w-[640px] text-[18px] leading-[1.55] text-editorial-ink-2 md:text-[20px]">
                Every release, latest first. Curated from the desktop app&rsquo;s{" "}
                <a
                  href={FULL_CHANGELOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-editorial-ink underline-offset-2 hover:underline"
                  data-track="changelog-source-click"
                >
                  CHANGELOG.md
                </a>
                . Plain language, no commit hashes.
              </p>
            </div>
          </div>
        </section>

        <section className="ed-section">
          <div className="ed-container">
            <div className="max-w-[1080px]">
              {CHANGELOG.map((entry, i) => (
                <Release key={entry.version} entry={entry} isFirst={i === 0} />
              ))}
            </div>

            <div className="mt-16 max-w-[1080px] flex flex-wrap items-center justify-between gap-4 pt-10 border-t border-editorial-line">
              <p className="font-sans font-medium uppercase tracking-[0.12em] text-[12.5px] text-editorial-ink-3">
                Earlier releases live on GitHub, including the unedited commit history.
              </p>
              <a
                href={RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-mono uppercase tracking-[0.14em] text-editorial-ink transition-colors hover:text-editorial-ink-2"
                data-track="changelog-releases-click"
              >
                View on GitHub
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
