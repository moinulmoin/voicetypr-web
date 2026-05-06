import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — VoiceTypr",
  description:
    "We keep cookies simple. One necessary cookie remembers your banner choice; optional marketing tags load only with consent.",
  alternates: { canonical: "https://voicetypr.com/cookies" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cookie Policy — VoiceTypr",
    description:
      "One necessary cookie. Optional marketing tags only with consent.",
    url: "https://voicetypr.com/cookies",
    siteName: "VoiceTypr",
    type: "article",
  },
};

const pClass = "text-editorial-ink-2 text-[15.5px] leading-[1.65]";

export default function CookiesPage() {
  return (
    <>
      <header className="mb-10">
        <span className="ed-eyebrow">policy &middot; cookies</span>
        <h1 className="font-serif text-[clamp(40px,4.5vw,60px)] leading-[1.05] tracking-[-0.025em] mt-2 mb-3">
          Cookie Policy
        </h1>
        <p className="font-sans font-medium uppercase tracking-[0.12em] text-[12.5px] text-editorial-ink-3">
          Last Updated: October 27, 2025
        </p>
      </header>

      <div className="space-y-5">
        <p className={pClass}>
          We keep cookies simple. We set one necessary cookie (
          <span className="font-mono text-[13px] bg-editorial-surface-2 px-1.5 py-0.5 rounded">vt_consent</span>
          ) to remember your choice on the banner. If you accept, third&#8209;party marketing tags (via Google Tag Manager) may set their own cookies for attribution. If you don&rsquo;t accept, they won&rsquo;t load.
        </p>

        <p className={pClass}>
          You can clear or block cookies anytime in your browser settings. Removing the
          {" "}
          <span className="font-mono text-[13px] bg-editorial-surface-2 px-1.5 py-0.5 rounded">vt_consent</span>
          {" "}
          cookie will show the banner again.
        </p>

        <p className={pClass}>
          See our <Link href="/privacy" className="text-editorial-accent hover:underline">Privacy Policy</Link> for the full picture, and our <Link href="/terms" className="text-editorial-accent hover:underline">Terms of Service</Link> for license + refund terms.
        </p>
      </div>
    </>
  );
}
