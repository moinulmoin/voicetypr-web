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
      ? "bg-editorial-accent"
      : tone === "fix"
        ? "bg-editorial-ink-3"
        : "bg-[#a25c2a]";

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

function Release({ entry }: { entry: ChangelogEntry }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-14 py-12 first:pt-0 border-t first:border-t-0 border-editorial-line">
      {/* Version + date — sticky on large screens so it stays alongside the changes */}
      <header className="lg:sticky lg:top-28 lg:self-start">
        <div className="flex flex-wrap items-baseline gap-3 lg:flex-col lg:items-start lg:gap-2">
          <div className="font-serif text-[clamp(36px,3.6vw,48px)] leading-none tracking-[-0.015em] text-editorial-ink">
            {entry.version}
          </div>
          {entry.latest ? (
            <span className="ed-eyebrow">latest</span>
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
          <div className="bg-editorial-surface-2 rounded-2xl p-6 md:p-7">
            <div className="font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3 mb-3">
              Highlights
            </div>
            <ul className="space-y-2.5">
              {entry.highlights.map((item, i) => (
                <li
                  key={`hl-${entry.version}-${i}`}
                  className="grid grid-cols-[auto_1fr] gap-3 font-sans text-[18px] md:text-[20px] leading-[1.35] text-editorial-ink"
                >
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 rounded-full bg-editorial-accent"
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

        <section className="ed-section pt-[120px] md:pt-[140px] pb-0">
          <div className="ed-container">
            <div className="max-w-[820px]">
              <div className="ed-eyebrow">what shipped, what got fixed</div>
              <h1 className="font-serif text-[clamp(56px,7vw,108px)] leading-[0.96] tracking-[-0.025em] mt-3 mb-5">
                The <em>changelog.</em>
              </h1>
              <p className="text-[18px] md:text-[20px] leading-[1.55] text-editorial-ink-2 max-w-[640px]">
                Every release, latest first. Curated from the desktop app&rsquo;s{" "}
                <a
                  href={FULL_CHANGELOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-editorial-accent underline-offset-2 hover:underline"
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
              {CHANGELOG.map((entry) => (
                <Release key={entry.version} entry={entry} />
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
                className="inline-flex items-center gap-1.5 text-[13px] font-mono uppercase tracking-[0.14em] text-editorial-ink hover:text-editorial-accent [transition:color_180ms]"
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
