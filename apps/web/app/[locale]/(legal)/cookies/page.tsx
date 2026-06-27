import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — Voicetypr",
  description:
    "We keep cookies simple. One necessary cookie remembers your banner choice; optional marketing tags (including Affonso attribution cookies for 30 days) load only with consent.",
  alternates: { canonical: "https://voicetypr.com/cookies" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cookie Policy — Voicetypr",
    description:
      "One necessary cookie. Optional marketing tags, including Affonso attribution cookies for 30 days, only with consent.",
    url: "https://voicetypr.com/cookies",
    siteName: "Voicetypr",
    type: "article",
  },
};

const pClass = "text-[15px] leading-relaxed text-muted-foreground";

export default function CookiesPage() {
  return (
    <>
      <header className="mb-12 border-b border-border pb-8">
        <h1 className="mb-3 font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-tight tracking-tight text-foreground">
          Cookie Policy
        </h1>
        <p className="text-sm text-muted-foreground">
          Last Updated: June 24, 2026
        </p>
      </header>

      <div className="space-y-5 rounded-2xl border border-border bg-muted p-5 md:p-6">
        <p className={pClass}>
          We keep cookies simple. We set one necessary cookie (
          <span className="rounded-md border border-border bg-card px-1.5 py-0.5 font-mono text-[13px] text-foreground">
            vt_consent
          </span>
          ) to remember your choice on the banner. If you accept, third&#8209;party marketing and advertising tags &mdash; loaded through Google Tag Manager, including conversion tags such as X (Twitter) Ads, plus the Affonso affiliate&#8209;attribution script &mdash; may set their own cookies (Affonso cookie window: 30 days). If you don&rsquo;t accept, they won&rsquo;t load.
        </p>

        <p className={pClass}>
          We also use OpenPanel for privacy&#8209;friendly product analytics. The service providers and tags we use may change from time to time.
        </p>

        <p className={pClass}>
          You can clear or block cookies anytime in your browser settings. Removing the{" "}
          <span className="rounded-md border border-border bg-card px-1.5 py-0.5 font-mono text-[13px] text-foreground">
            vt_consent
          </span>{" "}
          cookie will show the banner again.
        </p>

        <p className={pClass}>
          See our <Link href="/privacy" className="text-sage underline underline-offset-2">Privacy Policy</Link> for the full picture, and our <Link href="/terms" className="text-sage underline underline-offset-2">Terms of Service</Link> for license + refund terms.
        </p>
      </div>
    </>
  );
}
