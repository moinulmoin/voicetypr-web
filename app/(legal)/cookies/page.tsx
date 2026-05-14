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

const pClass = "text-editorial-ink-2 text-[15px] leading-[1.7]";

export default function CookiesPage() {
  return (
    <>
      <header className="mb-10 border-b border-editorial-line pb-7">
        <span className="ed-eyebrow">policy &middot; cookies</span>
        <h1 className="mt-3 mb-3 font-sans text-[clamp(34px,4.2vw,50px)] font-semibold leading-[1.08] tracking-[-0.02em] text-editorial-ink">
          Cookie Policy
        </h1>
        <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-editorial-ink-3">
          Last Updated: October 27, 2025
        </p>
      </header>

      <div className="space-y-5 rounded-2xl border border-editorial-line bg-editorial-surface-2 p-5 md:p-6">
        <p className={pClass}>
          We keep cookies simple. We set one necessary cookie (
          <span className="rounded-md border border-editorial-line bg-white px-1.5 py-0.5 font-mono text-[13px]">
            vt_consent
          </span>
          ) to remember your choice on the banner. If you accept, third&#8209;party marketing tags (via Google Tag Manager) may set their own cookies for attribution. If you don&rsquo;t accept, they won&rsquo;t load.
        </p>

        <p className={pClass}>
          You can clear or block cookies anytime in your browser settings. Removing the{" "}
          <span className="rounded-md border border-editorial-line bg-white px-1.5 py-0.5 font-mono text-[13px]">
            vt_consent
          </span>{" "}
          cookie will show the banner again.
        </p>

        <p className={pClass}>
          See our <Link href="/privacy" className="text-editorial-accent hover:underline">Privacy Policy</Link> for the full picture, and our <Link href="/terms" className="text-editorial-accent hover:underline">Terms of Service</Link> for license + refund terms.
        </p>
      </div>
    </>
  );
}
