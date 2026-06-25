import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
} from "lucide-react";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";

const AFFONSO_URL = "https://voicetypr.affonso.io";

export const metadata: Metadata = {
  title: "Voicetypr Affiliate Program — 30% standard, 40% for selected partners",
  description:
    "Promote Voicetypr, the offline AI voice-to-text app for Mac and Windows. Earn 30% per sale by default, or 40% as a selected partner.",
  alternates: {
    canonical: "https://voicetypr.com/affiliate",
  },
  openGraph: {
    title: "Become a Voicetypr Affiliate — 30% standard, 40% for selected partners",
    description:
      "Promote an offline AI voice-to-text app your audience actually wants. 30% commission by default, 40% for selected partners.",
    url: "https://voicetypr.com/affiliate",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const tiers = [
  {
    name: "Standard",
    commission: "30%",
    per100: "$11.70+ per sale",
    who: "Any approved affiliate",
    how: "Sign up, get your link, start promoting.",
    highlight: true,
  },
  {
    name: "Creator",
    commission: "40%",
    per100: "$15.60+ per sale",
    who: "Selected creators and partners with an engaged audience",
    how: "Ship one demo video or long-form post; we move you to the 40% tier.",
    highlight: false,
  },
];

const exampleEarnings = [
  { tier: "1 device ($39)", commission30: "$11.70", commission40: "$15.60" },
  { tier: "2 devices ($69)", commission30: "$20.70", commission40: "$27.60" },
  { tier: "4 devices ($99)", commission30: "$29.70", commission40: "$39.60" },
];


const fits = [
  "AI workflow creators (Cursor, Claude, ChatGPT audiences)",
  "Mac productivity YouTubers and newsletter writers",
  "Windows productivity creators (underserved segment)",
  "Indie hacker / bootstrapper newsletters",
  "Developer-tools reviewers and comparison channels",
  "ADHD / accessibility / dyslexia creators",
  "Coding course creators and bootcamp instructors",
  "'Tools I use' content curators",
];


const faqs = [
  {
    q: "How does tracking work?",
    a: "We use Affonso (an independent affiliate platform). Every link carries your unique referral ID; Affonso matches it to checkouts through Polar and credits you automatically.",
  },
  {
    q: "When do I get paid?",
    a: "Affonso processes payouts monthly after the refund window closes on each sale. Minimum payout threshold and supported methods (PayPal, Wise, bank transfer) are set inside your Affonso dashboard.",
  },
  {
    q: "What's the cookie window?",
    a: "14 days. If a user clicks your link and purchases within 14 days, you get credit — even if they return later through another channel.",
  },
  {
    q: "Can I use paid ads?",
    a: "Yes, with constraints. No bidding on 'Voicetypr' branded keywords, no misleading creatives (e.g. fake '90% off' claims), no impersonation. Everything else — content, SEO, newsletters, organic social, review sites — is fair game.",
  },
  {
    q: "How do I get upgraded to 40%?",
    a: "Ship one real piece of content (demo video, newsletter feature, long-form post) showing Voicetypr in actual use. Reply to your approval email with the link and we move you to the 40% tier.",
  },
  {
    q: "Are there higher tiers beyond 40%?",
    a: "Not currently. 30% is the standard rate for all approved affiliates, and 40% is available for selected creators and partners who ship real content.",
  },
  {
    q: "Can I offer my audience a discount?",
    a: "Yes. Approved creators can get a custom Polar coupon code, usually 10–20% off, to share with their audience. Your commission is calculated on the discounted checkout total.",
  },
  {
    q: "What if someone asks me for a custom discount directly?",
    a: "If the sale ends up being closed manually through support, a one-off invoice, or an untracked discount outside your approved affiliate link or coupon, that referral can be excluded from commission. To keep attribution clean, send people through your tracked link or your assigned code.",
  },
  {
    q: "What if someone refunds?",
    a: "Commission is clawed back on refunded orders. Buyers can trial the app before purchasing, and refunds follow the Voicetypr refund policy.",
  },
];

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

function AffiliateCta({
  href,
  children,
  event,
}: {
  href: string;
  children: React.ReactNode;
  event?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-track={event}
      className="inline-flex h-12 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-95"
    >
      {children}
    </a>
  );
}

export default function AffiliatePage() {
  return (
    <>
      <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
        <SiteHeader />

        {/* Hero */}
        <Section className="pt-20 md:pt-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[1.03] tracking-tight">
                Promote Voicetypr.
                <br />
                Earn{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  real money
                </em>
                .
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                Offline AI voice-to-text for Mac and Windows. Pay-once software,
                high-intent buyers, and an audience that&apos;s already searching
                for an alternative to $15/month dictation apps.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <AffiliateCta
                  href={AFFONSO_URL}
                  event="affiliate-hero-apply-click"
                >
                  Apply
                </AffiliateCta>
                {/* TODO: Restore creator-kit CTA when real kit assets exist. */}
              </div>
            </div>
          </Container>
        </Section>


        {/* Commission tiers */}
        <Section>
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className={H2_CLASS}>Commission tiers</h2>
                <p className="mt-3.5 text-base leading-relaxed text-muted-foreground">
                  Start at 30%. Ship content as a selected creator, earn 40%.
                </p>
              </div>

              <div className="mx-auto mb-12 max-w-[720px]">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="flex items-baseline justify-between gap-4 border-b border-border py-5"
                  >
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {tier.name}
                        </h3>
                        {tier.highlight && (
                          <span className="inline-block rounded-full bg-sage-bg px-2 py-0.5 text-[10px] font-medium text-sage">
                            Most common
                          </span>
                        )}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {tier.who} · {tier.how}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="text-3xl font-bold tracking-tight text-foreground">
                        {tier.commission}
                      </span>
                      <span className="ml-1 text-[13px] text-muted-foreground">
                        {tier.per100}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Earnings table */}
              <div className="mt-12">
                <h3 className="mb-5 text-center text-lg font-semibold text-foreground">
                  What you earn per sale
                </h3>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-border">
                          <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                            Plan sold
                          </th>
                          <th scope="col" className="px-4 py-3 text-right text-sm font-semibold text-foreground">
                            At 30%
                          </th>
                          <th scope="col" className="px-4 py-3 text-right text-sm font-semibold text-foreground">
                            At 40%
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {exampleEarnings.map((row, idx) => (
                          <tr
                            key={row.tier}
                            className={
                              idx !== exampleEarnings.length - 1
                                ? "border-b border-border"
                                : ""
                            }
                          >
                            <td className="px-4 py-4 align-top text-sm font-medium text-foreground">
                              {row.tier}
                            </td>
                            <td className="px-4 py-4 text-right align-top text-sm tabular-nums text-muted-foreground">
                              {row.commission30}
                            </td>
                            <td className="px-4 py-4 text-right align-top text-sm font-medium tabular-nums text-foreground">
                              {row.commission40}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  All plans are one-time purchases · lifetime license.
                </p>
              </div>
            </div>
          </Container>
        </Section>


        {/* Who's a good fit */}
        <Section>
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <h2 className={H2_CLASS}>Who&apos;s a good fit</h2>
                <p className="mt-3.5 text-base leading-relaxed text-muted-foreground">
                  If you match any of these, you&apos;ll do well.
                </p>
              </div>
              <ul className="mx-auto max-w-[640px] space-y-3">
                {fits.map((fit) => (
                  <li
                    key={fit}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage"
                      aria-hidden
                    />
                    <span>{fit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>


        {/* FAQ */}
        <Section id="affiliate-faq">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <h2 className={H2_CLASS}>Frequently asked questions</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={faq.q}
                    value={`faq-${idx}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section>
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-center text-primary-foreground md:px-10 md:py-16">
              <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-sage/30 blur-3xl" />
              <div className="relative">
                <h2 className="mx-auto max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight">
                  Ready to promote?
                </h2>
                <p className="mx-auto mt-5 mb-8 max-w-xl text-balance text-base leading-relaxed text-primary-foreground/75">
                  Sign up in 60 seconds. Get your link and start earning 30% on
                  every sale.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={AFFONSO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="affiliate-final-apply-click"
                    className="inline-flex h-12 items-center rounded-xl bg-background px-5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 active:scale-95"
                  >
                    Apply
                  </a>
                </div>
                <p className="mt-6 text-sm text-primary-foreground/75">
                  Questions?{" "}
                  <a
                    href="mailto:support@voicetypr.com?subject=Affiliate%20program"
                    className="text-primary-foreground underline-offset-4 hover:underline"
                  >
                    support@voicetypr.com
                  </a>
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <SiteFooter />
      </main>
    </>
  );
}
