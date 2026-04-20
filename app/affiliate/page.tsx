import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import GridBackground from "../components/GridBackground";

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

export default function AffiliatePage() {
  return (
    <>
      <main id="main-content" className="relative min-h-screen">
        <GridBackground />
        <Header />

        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32 lg:pt-40">
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <Badge variant="outline" className="mb-6 gap-1.5">
              <Sparkles className="h-3 w-3" />
              Earn up to 40% per sale
            </Badge>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              <span className="block bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Promote VoiceTypr.
              </span>
              <span className="block bg-gradient-to-r from-foreground/70 via-foreground to-foreground bg-clip-text text-transparent">
                Earn real money.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-balance text-xl text-muted-foreground">
              Offline AI voice-to-text for Mac and Windows. Pay-once lifetime
              product, high-intent buyers, and an audience that&rsquo;s already
              searching for an alternative to $15/month dictation apps.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" data-umami-event="affiliate-hero-apply-click">
                <a href={AFFONSO_URL} target="_blank" rel="noopener noreferrer">
                  Apply on Affonso
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#kit">See the creator kit</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why promote VoiceTypr */}
        <section className="relative py-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Why this program is different
              </h2>
              <p className="mt-3 text-muted-foreground sm:text-lg">
                Most affiliate programs pay pennies on low-margin subscriptions.
                This one pays real money on a one-time product with a real audience fit.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="rounded-2xl border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <DollarSign className="mb-3 h-6 w-6 text-primary" aria-hidden />
                <h3 className="mb-2 text-lg font-semibold">Meaningful per-sale payout</h3>
                <p className="text-sm text-muted-foreground">
                  $8.75 to $39.20 per conversion, depending on tier and plan. Not
                  5% of a $10/mo subscription that churns in a month.
                </p>
              </Card>
              <Card className="rounded-2xl border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <TrendingUp className="mb-3 h-6 w-6 text-primary" aria-hidden />
                <h3 className="mb-2 text-lg font-semibold">High-intent category</h3>
                <p className="text-sm text-muted-foreground">
                  People searching &ldquo;Wispr Flow alternative&rdquo; or
                  &ldquo;offline dictation&rdquo; already know what they want. Your
                  job is to tell them it exists.
                </p>
              </Card>
              <Card className="rounded-2xl border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <Users className="mb-3 h-6 w-6 text-primary" aria-hidden />
                <h3 className="mb-2 text-lg font-semibold">Audience you already have</h3>
                <p className="text-sm text-muted-foreground">
                  Works with Cursor, Claude, ChatGPT, Slack, email, any app. If
                  your audience uses any of these, the demo sells itself.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Commission tiers */}
        <section className="relative py-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Commission tiers</h2>
              <p className="mt-3 text-muted-foreground sm:text-lg">
                Start at 25%. Ship content, get 35%. Partner on a launch, get 40%.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {tiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={`rounded-2xl border p-6 backdrop-blur-sm ${
                    tier.highlight
                      ? "border-primary bg-card/70 shadow-lg"
                      : "border-border/50 bg-card/50"
                  }`}
                >
                  {tier.highlight && (
                    <Badge className="mb-3">Most affiliates land here</Badge>
                  )}
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <div className="mt-2 mb-4">
                    <span className="text-4xl font-bold">{tier.commission}</span>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {tier.per100}
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Who: </span>
                    {tier.who}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">How: </span>
                    {tier.how}
                  </p>
                </Card>
              ))}
            </div>

            {/* Earnings table */}
            <div className="mt-12">
              <h3 className="mb-4 text-center text-lg font-semibold">
                What you earn per sale
              </h3>
              <Card className="overflow-hidden rounded-2xl border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-border/50 bg-muted/20">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">
                          Plan sold
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          At 25%
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          At 35%
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
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
                              ? "border-b border-border/30"
                              : ""
                          }
                        >
                          <td className="px-4 py-3 font-medium">{row.tier}</td>
                          <td className="px-4 py-3 text-right tabular-nums">
                            {row.commission25}
                          </td>
                          <td className="px-4 py-3 text-right tabular-nums">
                            {row.commission35}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold tabular-nums text-primary">
                            {row.commission40}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Prices shown reflect current promotional pricing. Base prices:
                Pro $50, Plus $80, Max $140.
              </p>
            </div>
          </div>
        </section>

        {/* Angles that convert */}
        <section className="relative py-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Angles that actually convert
              </h2>
              <p className="mt-3 text-muted-foreground sm:text-lg">
                Steal these. Adapt them to your voice.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {angles.map((angle) => (
                <Card
                  key={angle.title}
                  className="rounded-2xl border-border/50 bg-card/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="mb-2 text-lg font-semibold">{angle.title}</h3>
                  <p className="text-sm text-muted-foreground">{angle.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who's a good fit */}
        <section className="relative py-24">
          <div className="mx-auto max-w-4xl px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Who&rsquo;s a good fit
              </h2>
              <p className="mt-3 text-muted-foreground sm:text-lg">
                If you match any of these, you&rsquo;ll do well.
              </p>
            </div>
            <Card className="rounded-2xl border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <ul className="grid gap-3 sm:grid-cols-2">
                {fits.map((fit) => (
                  <li
                    key={fit}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                      aria-hidden
                    />
                    <span>{fit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Creator kit */}
        <section className="relative py-24" id="kit">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Creator kit</h2>
              <p className="mt-3 text-muted-foreground sm:text-lg">
                Delivered to approved affiliates on day one. You don&rsquo;t produce
                anything from scratch.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {kit.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="rounded-2xl border-border/50 bg-card/50 p-6 backdrop-blur-sm"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon
                          className="h-5 w-5 text-primary"
                          aria-hidden
                        />
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.body}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-24" id="affiliate-faq">
          <div className="mx-auto max-w-3xl px-4">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${idx}`}
                  className="border-border/50"
                >
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <Card className="rounded-2xl border-border/50 bg-card/50 p-10 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Ready to promote?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground sm:text-lg">
                Sign up on Affonso in 60 seconds. Get your link, grab the kit,
                ship something real, unlock 35%.
              </p>
              <Button asChild size="lg" data-umami-event="affiliate-final-apply-click">
                <a href={AFFONSO_URL} target="_blank" rel="noopener noreferrer">
                  Apply on Affonso
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <p className="mt-6 text-xs text-muted-foreground">
                Questions?{" "}
                <a
                  href="mailto:support@voicetypr.com?subject=Affiliate%20program"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  support@voicetypr.com
                </a>
              </p>
            </Card>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
