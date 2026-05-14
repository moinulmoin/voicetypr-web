import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  Copy,
  DollarSign,
  Film,
  Mail,
  MessageSquare,
  TrendingUp,
  Users,
} from "lucide-react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

const AFFONSO_URL = "https://voicetypr.affonso.io";

export const metadata: Metadata = {
  title: "VoiceTypr Affiliate Program — 20% standard, 30% for selected partners",
  description:
    "Promote VoiceTypr, the offline AI voice-to-text app for Mac and Windows. Earn 20% per sale by default, or 30% as a selected partner.",
  alternates: {
    canonical: "https://voicetypr.com/affiliate",
  },
  openGraph: {
    title: "Become a VoiceTypr Affiliate — 20% standard, 30% for selected partners",
    description:
      "Promote an offline AI voice-to-text app your audience actually wants. 20% commission by default, 30% for selected partners.",
    url: "https://voicetypr.com/affiliate",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const tiers = [
  {
    name: "Standard",
    commission: "20%",
    per100: "$7.80+ per sale",
    who: "Any approved affiliate",
    how: "Sign up, get your link, start promoting.",
    highlight: true,
  },
  {
    name: "Creator",
    commission: "30%",
    per100: "$11.70+ per sale",
    who: "Selected creators and partners with an engaged audience",
    how: "Ship one demo video or long-form post; we upgrade your tier for 60 days.",
    highlight: false,
  },
];

const exampleEarnings = [
  { tier: "Pro ($39)", commission20: "$7.80", commission30: "$11.70" },
  { tier: "Plus ($59)", commission20: "$11.80", commission30: "$17.70" },
  { tier: "Max ($99)", commission20: "$19.80", commission30: "$29.70" },
  { tier: "Team ($199)", commission20: "$39.80", commission30: "$59.70" },
];

const angles = [
  {
    title: "Stop paying monthly for dictation",
    body: "Wispr Flow is $12–15/mo. Aqua is $8/mo. Neither offers lifetime. VoiceTypr is pay-once, offline, cross-platform. That's the pitch.",
  },
  {
    title: "Voice input for Cursor, Claude, ChatGPT",
    body: "Hold a hotkey, speak your prompt, paste clean text anywhere. Developers and AI builders eat this demo up.",
  },
  {
    title: "Offline and private by default",
    body: "Transcription runs locally on Metal (Mac) or CPU/GPU (Windows). No audio ever leaves the machine. Resonates with privacy-first audiences.",
  },
  {
    title: "Mac + Windows, same license",
    body: "Max tier covers 4 devices across both platforms. Most competitors are Mac-only or force a separate plan per OS.",
  },
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

const kit = [
  {
    icon: Film,
    title: "Demo videos",
    body: "30-second hero clip + 90-second walkthrough, vertical and landscape cuts, ready for YouTube Shorts, TikTok, Twitter, LinkedIn.",
  },
  {
    icon: Copy,
    title: "Screenshot + GIF pack",
    body: "Hotkey-to-paste GIFs in Cursor, Claude, ChatGPT, Slack, and email — no production work on your end.",
  },
  {
    icon: MessageSquare,
    title: "Tweet & thread templates",
    body: "5 tweet hooks and 3 thread starters pre-written with your link slot. Customize voice, keep structure.",
  },
  {
    icon: Mail,
    title: "Email swipes",
    body: "3 newsletter-ready drafts: announcement, comparison, deep-dive. Plug and send.",
  },
];

const faqs = [
  {
    q: "How does tracking work?",
    a: "We use Affonso (an independent affiliate platform). Every link carries your unique referral ID; Affonso matches it to checkouts through Polar and credits you automatically.",
  },
  {
    q: "When do I get paid?",
    a: "Affonso processes payouts monthly after the 30-day refund window closes on each sale. Minimum payout threshold and supported methods (PayPal, Wise, bank transfer) are set inside your Affonso dashboard.",
  },
  {
    q: "What's the cookie window?",
    a: "60 days. If a user clicks your link and purchases within 60 days, you get credit — even if they return later through another channel.",
  },
  {
    q: "Can I use paid ads?",
    a: "Yes, with constraints. No bidding on 'VoiceTypr' branded keywords, no misleading creatives (e.g. fake '90% off' claims), no impersonation. Everything else — content, SEO, newsletters, organic social, review sites — is fair game.",
  },
  {
    q: "How do I get upgraded to 30%?",
    a: "Ship one real piece of content (demo video, newsletter feature, long-form post) showing VoiceTypr in actual use. Reply to your approval email with the link and we bump your commission for 60 days. Renewable on your next piece of content.",
  },
  {
    q: "Are there higher tiers beyond 30%?",
    a: "Not currently. 20% is the standard rate for all approved affiliates, and 30% is available for selected creators and partners who ship real content.",
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
    a: "Commission is clawed back on refunded orders. Refund rate on VoiceTypr is low (<5%) since buyers trial the app 3 days before purchasing.",
  },
];

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
      data-umami-event={event}
      className="group inline-flex h-12 items-center gap-2 rounded-md bg-editorial-ink py-2 pl-5 pr-2 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
    >
      {children}
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5">
        <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
      </span>
    </a>
  );
}

export default function AffiliatePage() {
  return (
    <>
      <main id="main-content" className="landing-editorial min-h-screen">
        <Header />

        {/* Hero */}
        <section className="ed-section ed-section-hero pt-32 lg:pt-40">
          <div className="ed-container max-w-4xl text-center">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">20% standard · 30% selected partners</p>
            <h1 className="mt-4 text-[clamp(42px,6vw,68px)] font-semibold leading-[0.98] tracking-[-0.04em]">
              Promote VoiceTypr.
              <br />
              Earn real money.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-[18px] leading-[1.6] text-editorial-ink-2">
              Offline AI voice-to-text for Mac and Windows. Pay-once lifetime
              product, high-intent buyers, and an audience that&apos;s already
              searching for an alternative to $15/month dictation apps.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <AffiliateCta
                href={AFFONSO_URL}
                event="affiliate-hero-apply-click"
              >
                Apply on Affonso
              </AffiliateCta>
              <Link
                href="#kit"
                className="inline-flex h-12 items-center rounded-md border border-editorial-line bg-white px-5 text-sm font-medium text-editorial-ink transition duration-300 ease-out hover:bg-editorial-surface-2 active:scale-95"
              >
                See the creator kit
              </Link>
            </div>
          </div>
        </section>

        {/* Why promote VoiceTypr */}
        <section className="ed-section">
          <div className="ed-container max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-[clamp(30px,4vw,44px)] leading-[1.05] tracking-[-0.035em]">
                Why this program is different
              </h2>
              <p className="mt-3 text-[16px] text-editorial-ink-2 sm:text-[17px]">
                Most affiliate programs pay pennies on low-margin subscriptions.
                This one pays real money on a one-time product with a real audience fit.
              </p>
            </div>

            <div className="max-w-[720px] mx-auto">
              {[
                {
                  icon: DollarSign,
                  title: "Meaningful per-sale payout",
                  body: "$7.80 to $59.70 per conversion, depending on tier and plan. Not 5% of a $10/mo subscription that churns in a month.",
                },
                {
                  icon: TrendingUp,
                  title: "High-intent category",
                  body: "People searching 'Wispr Flow alternative' or 'offline dictation' already know what they want. Your job is to tell them it exists.",
                },
                {
                  icon: Users,
                  title: "Audience you already have",
                  body: "Works with Cursor, Claude, ChatGPT, Slack, email, any app. If your audience uses any of these, the demo sells itself.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 py-6 border-b border-editorial-line last:border-b-0"
                >
                  <item.icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-editorial-ink"
                    aria-hidden
                  />
                  <div>
                    <h3 className="text-[17px] font-medium text-editorial-ink mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-[1.6] text-editorial-ink-2">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commission tiers */}
        <section className="ed-section">
          <div className="ed-container max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-[clamp(30px,4vw,44px)] leading-[1.05] tracking-[-0.035em]">
                Commission tiers
              </h2>
              <p className="mt-3 text-[16px] text-editorial-ink-2 sm:text-[17px]">
                Start at 20%. Ship content as a selected creator, earn 30%.
              </p>
            </div>

            <div className="max-w-[720px] mx-auto mb-12">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`flex items-baseline justify-between gap-4 py-5 border-b border-editorial-line ${tier.highlight ? "" : ""}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[17px] font-medium text-editorial-ink">
                        {tier.name}
                      </h3>
                      {tier.highlight && (
                        <span className="inline-block rounded-full bg-editorial-ink px-2 py-0.5 text-[10px] font-medium text-white">
                          Most common
                        </span>
                      )}
                    </div>
                    <p className="text-[14px] text-editorial-ink-2">
                      {tier.who} · {tier.how}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[28px] font-semibold tracking-[-0.02em] text-editorial-ink">
                      {tier.commission}
                    </span>
                    <span className="ml-1 text-[13px] text-editorial-ink-2">
                      {tier.per100}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Earnings table */}
            <div className="mt-12">
              <h3 className="mb-4 text-center text-[17px] font-medium text-editorial-ink">
                What you earn per sale
              </h3>
              <div className="overflow-hidden rounded-xl border border-editorial-line bg-editorial-surface-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-editorial-line bg-editorial-surface-2">
                      <tr>
                        <th className="px-4 py-3 text-left text-[13px] font-medium text-editorial-ink">
                          Plan sold
                        </th>
                        <th className="px-4 py-3 text-right text-[13px] font-medium text-editorial-ink">
                          At 20%
                        </th>
                        <th className="px-4 py-3 text-right text-[13px] font-medium text-editorial-ink">
                          At 30%
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {exampleEarnings.map((row, idx) => (
                        <tr
                          key={row.tier}
                          className={
                            idx !== exampleEarnings.length - 1
                              ? "border-b border-editorial-line/60"
                              : ""
                          }
                        >
                          <td className="px-4 py-3 text-[14px] font-medium text-editorial-ink">
                            {row.tier}
                          </td>
                          <td className="px-4 py-3 text-right tabular-nums text-[14px] text-editorial-ink-2">
                            {row.commission20}
                          </td>
                          <td className="px-4 py-3 text-right text-[14px] font-medium tabular-nums text-editorial-ink">
                            {row.commission30}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-3 text-center text-[12px] text-editorial-ink-3">
                All plans are one-time purchases · lifetime license.
              </p>
            </div>
          </div>
        </section>

        {/* Angles that convert */}
        <section className="ed-section">
          <div className="ed-container max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-[clamp(30px,4vw,44px)] leading-[1.05] tracking-[-0.035em]">
                Angles that actually convert
              </h2>
              <p className="mt-3 text-[16px] text-editorial-ink-2 sm:text-[17px]">
                Steal these. Adapt them to your voice.
              </p>
            </div>

            <div className="max-w-[720px] mx-auto">
              {angles.map((angle) => (
                <div
                  key={angle.title}
                  className="py-6 border-b border-editorial-line last:border-b-0"
                >

                  <h3 className="text-[17px] font-medium text-editorial-ink mb-2">
                    {angle.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-editorial-ink-2">
                    {angle.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who's a good fit */}
        <section className="ed-section">
          <div className="ed-container max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="text-[clamp(30px,4vw,44px)] leading-[1.05] tracking-[-0.035em]">
                Who&apos;s a good fit
              </h2>
              <p className="mt-3 text-[16px] text-editorial-ink-2 sm:text-[17px]">
                If you match any of these, you&apos;ll do well.
              </p>
            </div>
            <ul className="max-w-[640px] mx-auto space-y-3">
              {fits.map((fit) => (
                <li
                  key={fit}
                  className="flex items-start gap-3 text-[15px] text-editorial-ink-2"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-editorial-ink"
                    aria-hidden
                  />
                  <span>{fit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Creator kit */}
        <section className="ed-section" id="kit">
          <div className="ed-container max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-[clamp(30px,4vw,44px)] leading-[1.05] tracking-[-0.035em]">
                Creator kit
              </h2>
              <p className="mt-3 text-[16px] text-editorial-ink-2 sm:text-[17px]">
                Delivered to approved affiliates on day one. You don&apos;t produce
                anything from scratch.
              </p>
            </div>
            <div className="max-w-[720px] mx-auto">
              {kit.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 py-5 border-b border-editorial-line last:border-b-0"
                  >
                    <Icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-editorial-ink"
                      aria-hidden
                    />
                    <div>
                      <h3 className="text-[17px] font-medium text-editorial-ink mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[15px] leading-[1.6] text-editorial-ink-2">
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="ed-section" id="affiliate-faq">
          <div className="ed-container max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="text-[clamp(30px,4vw,44px)] leading-[1.05] tracking-[-0.035em]">
                Frequently asked questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${idx}`}
                  className="border-b border-editorial-line"
                >
                  <AccordionTrigger className="text-left text-[15px] font-medium text-editorial-ink">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] leading-[1.6] text-editorial-ink-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="ed-section text-center">
          <div className="ed-container max-w-2xl">
            <h2 className="text-[clamp(34px,4vw,48px)] leading-[1.03] tracking-[-0.04em] mb-4">
              Ready to promote?
            </h2>
            <p className="mx-auto mb-8 text-[17px] text-editorial-ink-2 leading-[1.6]">
              Sign up on Affonso in 60 seconds. Get your link, grab the kit,
              start earning 20% on every sale.
            </p>
            <AffiliateCta
              href={AFFONSO_URL}
              event="affiliate-final-apply-click"
            >
              Apply on Affonso
            </AffiliateCta>
            <p className="mt-6 text-[13px] text-editorial-ink-3">
              Questions?{" "}
              <a
                href="mailto:support@voicetypr.com?subject=Affiliate%20program"
                className="text-editorial-ink hover:underline"
              >
                support@voicetypr.com
              </a>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
