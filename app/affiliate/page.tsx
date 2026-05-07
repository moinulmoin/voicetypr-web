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
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

const AFFONSO_URL = "https://voicetypr.affonso.io";

export const metadata: Metadata = {
  title: "VoiceTypr Affiliate Program — Earn up to 40% per sale",
  description:
    "Promote VoiceTypr, the offline AI voice-to-text app for Mac and Windows. Earn 25–40% commission on every lifetime sale. One-time product, high-intent buyers, Cursor/Claude/ChatGPT audience.",
  alternates: {
    canonical: "https://voicetypr.com/affiliate",
  },
  openGraph: {
    title: "Become a VoiceTypr Affiliate — Earn up to 40% per sale",
    description:
      "Promote an offline AI voice-to-text app your audience actually wants. Lifetime product, 25–40% commission.",
    url: "https://voicetypr.com/affiliate",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const tiers = [
  {
    name: "Starter",
    commission: "25%",
    per100: "$13+ per sale",
    who: "Any approved affiliate",
    how: "Sign up, get your link, start promoting.",
    highlight: false,
  },
  {
    name: "Creator",
    commission: "35%",
    per100: "$19+ per sale",
    who: "Approved creators with an engaged audience",
    how: "Ship one demo video or long-form post; we upgrade your tier for 60 days.",
    highlight: true,
  },
  {
    name: "Launch Partner",
    commission: "40%",
    per100: "$22+ per sale",
    who: "Top partners during a product launch week",
    how: "Coordinate a launch week with us. Capped to a small cohort per quarter.",
    highlight: false,
  },
];

const exampleEarnings = [
  { tier: "Pro ($35)", commission25: "$8.75", commission35: "$12.25", commission40: "$14.00" },
  { tier: "Plus ($56)", commission25: "$14.00", commission35: "$19.60", commission40: "$22.40" },
  { tier: "Max ($98)", commission25: "$24.50", commission35: "$34.30", commission40: "$39.20" },
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
    q: "How do I get upgraded to 35%?",
    a: "Ship one real piece of content (demo video, newsletter feature, long-form post) showing VoiceTypr in actual use. Reply to your approval email with the link and we bump your tier for 60 days. Renewable on your next piece of content.",
  },
  {
    q: "What about 40%?",
    a: "Launch Partner slots open around product launches (major releases, Product Hunt, platform expansions). Coordinate directly with us — it's a small cohort per quarter, application-based.",
  },
  {
    q: "Can I offer my audience a discount?",
    a: "Yes. Approved creators get a custom Polar coupon code (typically 10–20% off) they can share. Your commission is calculated on the discounted price.",
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
      className="group inline-flex items-center gap-2 rounded-lg bg-editorial-ink py-2 pl-5 pr-2 text-sm font-medium text-white transition-colors hover:bg-black"
    >
      {children}
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
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
        <section className="ed-section ed-section-hero flex min-h-[70vh] items-center pt-32 lg:pt-40">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-editorial-accent-wash px-3 py-1 text-xs font-medium text-editorial-accent-ink mb-6">
              <Sparkles className="h-3 w-3" />
              Earn up to 40% per sale
            </span>
            <h1 className="font-serif text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-[-0.02em] mb-6">
              Promote VoiceTypr.
              <br />
              Earn real money.
            </h1>
            <p className="mx-auto max-w-2xl text-balance text-[18px] leading-[1.6] text-editorial-ink-2">
              Offline AI voice-to-text for Mac and Windows. Pay-once lifetime
              product, high-intent buyers, and an audience that&apos;s already
              searching for an alternative to $15/month dictation apps.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <AffiliateCta
                href={AFFONSO_URL}
                event="affiliate-hero-apply-click"
              >
                Apply on Affonso
              </AffiliateCta>
              <Link
                href="#kit"
                className="inline-flex items-center gap-2 rounded-lg border border-editorial-line bg-white px-5 py-2.5 text-sm font-medium text-editorial-ink transition-colors hover:bg-editorial-surface-2"
              >
                See the creator kit
              </Link>
            </div>
          </div>
        </section>

        {/* Why promote VoiceTypr */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] leading-[1.1] tracking-[-0.01em]">
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
                  body: "$8.75 to $39.20 per conversion, depending on tier and plan. Not 5% of a $10/mo subscription that churns in a month.",
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
                    className="mt-0.5 h-5 w-5 text-editorial-accent-ink shrink-0"
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
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] leading-[1.1] tracking-[-0.01em]">
                Commission tiers
              </h2>
              <p className="mt-3 text-[16px] text-editorial-ink-2 sm:text-[17px]">
                Start at 25%. Ship content, get 35%. Partner on a launch, get 40%.
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
                        <span className="inline-block rounded-full bg-editorial-accent px-2 py-0.5 text-[10px] font-medium text-white">
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
                          At 25%
                        </th>
                        <th className="px-4 py-3 text-right text-[13px] font-medium text-editorial-ink">
                          At 35%
                        </th>
                        <th className="px-4 py-3 text-right text-[13px] font-medium text-editorial-ink">
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
                              ? "border-b border-editorial-line/60"
                              : ""
                          }
                        >
                          <td className="px-4 py-3 text-[14px] font-medium text-editorial-ink">
                            {row.tier}
                          </td>
                          <td className="px-4 py-3 text-right tabular-nums text-[14px] text-editorial-ink-2">
                            {row.commission25}
                          </td>
                          <td className="px-4 py-3 text-right tabular-nums text-[14px] text-editorial-ink-2">
                            {row.commission35}
                          </td>
                          <td className="px-4 py-3 text-right text-[14px] font-medium tabular-nums text-editorial-accent-ink">
                            {row.commission40}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-3 text-center text-[12px] text-editorial-ink-3">
                Prices shown reflect current promotional pricing. Base prices:
                Pro $50, Plus $80, Max $140.
              </p>
            </div>
          </div>
        </section>

        {/* Angles that convert */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] leading-[1.1] tracking-[-0.01em]">
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
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4">
            <div className="mb-10 text-center">
              <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] leading-[1.1] tracking-[-0.01em]">
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
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-editorial-accent-ink"
                    aria-hidden
                  />
                  <span>{fit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Creator kit */}
        <section className="py-24" id="kit">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] leading-[1.1] tracking-[-0.01em]">
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
                      className="mt-0.5 h-5 w-5 text-editorial-accent-ink shrink-0"
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
        <section className="py-24" id="affiliate-faq">
          <div className="mx-auto max-w-3xl px-4">
            <div className="mb-8 text-center">
              <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] leading-[1.1] tracking-[-0.01em]">
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
        <section className="py-24 text-center">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.02em] mb-4">
              Ready to promote?
            </h2>
            <p className="mx-auto mb-8 text-[17px] text-editorial-ink-2 leading-[1.6]">
              Sign up on Affonso in 60 seconds. Get your link, grab the kit,
              ship something real, unlock 35%.
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
                className="text-editorial-accent hover:underline"
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
