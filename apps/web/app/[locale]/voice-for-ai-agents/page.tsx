import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import RelatedGuidesSection from "@/app/components/RelatedGuidesSection";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import type { DiscoveryLink } from "@/lib/seo-discovery";

export const metadata: Metadata = {
  title: "Voice for AI Agents — Dictate to Cursor, Claude Code & a Transcription CLI | Voicetypr",
  description:
    "Voicetypr is offline-first voice for AI agents. Dictate prompts into Cursor, Claude Code, ChatGPT, Cline, Windsurf, Aider, any terminal or editor — drive transcription programmatically with a scriptable Agent CLI and local HTTP API — and use it as the voice layer for personal AI agents like OpenClaw, NanoClaw, and Hermes.",
  keywords: [
    "voice for ai agents",
    "voice input for claude code",
    "dictate to cursor",
    "voice coding",
    "transcription cli",
    "voice for cline",
    "voice for windsurf",
    "personal ai agent voice",
    "voice for openclaw",
    "voice for hermes agent",
    "offline voice dictation",
  ],
  alternates: {
    canonical: "https://voicetypr.com/voice-for-ai-agents",
  },
  openGraph: {
    title: "Voice for AI Agents — Dictate to Cursor, Claude Code & a Transcription CLI | Voicetypr",
    description:
      "Offline-first voice for AI agents. Dictate into any agent's input, and drive transcription programmatically with a scriptable Agent CLI and local HTTP API.",
    url: "https://voicetypr.com/voice-for-ai-agents",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice for AI Agents — Dictate to Cursor, Claude Code & a Transcription CLI | Voicetypr",
    description: "Offline-first voice for AI agents. Dictate to Cursor and Claude Code, and call transcription from a CLI.",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

const capabilities = [
  {
    eyebrow: "Capability 1 — dictate in",
    title: "Speak into any agent's input box",
    body: "Voicetypr pastes text into whatever field has your cursor. So it works in Cursor, Claude Code, ChatGPT, Cline, Windsurf, Aider — any terminal or editor. There's no plugin to install and no special integration to maintain. Hold the hotkey, describe the change, and the prompt lands where you're typing.",
  },
  {
    eyebrow: "Capability 2 — drive it",
    title: "Call transcription from your own scripts",
    body: "A scriptable Agent CLI and a local HTTP API (available while Network Sharing is on) let agents and scripts call transcription directly. Pipe an audio file in, get text out, choose the model and engine per call, and route to a running instance over the network when you need to.",
  },
] as const;

const agents = [
  "Cursor",
  "Claude Code",
  "ChatGPT",
  "Cline",
  "Windsurf",
  "Aider",
  "Any terminal",
  "Any editor",
] as const;

const personalAgents = [
  {
    name: "OpenClaw",
    href: "https://github.com/openclaw/openclaw",
    body: "The self-hosted personal AI assistant that lives in WhatsApp, Telegram, Slack, and the apps you already use. Dictate to it instead of thumb-typing.",
  },
  {
    name: "NanoClaw",
    href: "https://github.com/nanocoai/nanoclaw",
    body: "The lightweight, container-isolated personal agent. Talk to it in your messaging channels with one hotkey — the voice step stays on your machine.",
  },
  {
    name: "Hermes",
    href: "https://github.com/nousresearch/hermes-agent",
    body: "Nous Research's memory-keeping agent across Telegram, Discord, Slack, and the terminal. One system-wide voice layer for all of it.",
  },
] as const;

const cliFeatures = [
  "voicetypr status and voicetypr models to check the running instance and list installed models.",
  "voicetypr transcribe --file <path> to transcribe an audio file, or voicetypr record --until-silence to capture and transcribe live.",
  "Add --json for machine-readable output: { text, words, metadata, model, engine }.",
  "Per-call --model and --engine, plus --server <host:port> (and optional --password) to route to a running instance.",
] as const;

const checklist = [
  "Works across Cursor, Claude Code, ChatGPT, Cline, Windsurf, and Aider because it pastes into the focused field — not a per-app plugin.",
  "Local Whisper and Parakeet models run on your device by default; your voice never leaves your machine in local mode.",
  "Optional cloud STT and optional AI text formatting are opt-in — AI formatting sends text only, using your own provider and key.",
  "The Agent CLI and local HTTP API give scripts and agents direct, machine-readable access to transcription.",
] as const;

const faqs = [
  {
    q: "Does Voicetypr have a plugin for Cursor or Claude Code?",
    a: "No plugin is needed. Voicetypr pastes transcribed text into whatever input field has your cursor, so it works in Cursor, Claude Code, ChatGPT, Cline, Windsurf, Aider, and any terminal or editor without a special integration.",
  },
  {
    q: "Can an AI agent or script call Voicetypr directly?",
    a: "Yes. A scriptable Agent CLI and a local HTTP API (available while Network Sharing is on) let agents and scripts run transcription programmatically. Use commands like voicetypr transcribe --file <path> and voicetypr record --until-silence, and add --json for structured output.",
  },
  {
    q: "Is there an MCP server?",
    a: "Not yet. Today you integrate through the Agent CLI and the local HTTP API. Both return machine-readable JSON, so they're straightforward to wire into agent tooling.",
  },
  {
    q: "Does it run offline?",
    a: "Yes. Transcription runs locally by default using Whisper and Parakeet models, so no audio is sent to a cloud service in local mode. Optional cloud STT and optional AI text formatting are opt-in, and AI formatting sends text only, using your own provider and key.",
  },
  {
    q: "How do I get JSON output for my pipeline?",
    a: "Add --json to a CLI call. For example, voicetypr transcribe note.wav --json returns { text, words, metadata, model, engine }. You can also set --model and --engine per call, and use --server <host:port> with an optional --password to route to a running instance.",
  },
] as const;

const aiAgentsRelatedGuides: DiscoveryLink[] = [
  {
    href: "/voice-input-for-cursor",
    eyebrow: "single-tool focus",
    title: "Voice input for Cursor",
    description:
      "For developers who mainly want to dictate prompts, PR notes, and context straight into the Cursor composer.",
    ctaLabel: "See the Cursor page",
  },
  {
    href: "/voice-typing",
    eyebrow: "broader workflow",
    title: "Voice typing in every app",
    description:
      "The general pay-once dictation story for builders deciding whether voice belongs in their daily setup.",
    ctaLabel: "See the general guide",
  },
  {
    href: "/network-transcription",
    eyebrow: "drive it remotely",
    title: "Network transcription",
    description:
      "How the local HTTP API and --server routing let agents and scripts reach a running instance over the network.",
    ctaLabel: "See network transcription",
  },
];

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

export default function VoiceForAiAgentsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Voicetypr", item: "https://voicetypr.com/" },
      { "@type": "ListItem", position: 2, name: "Voice for AI agents", item: "https://voicetypr.com/voice-for-ai-agents" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
        <SiteHeader />

        {/* Hero */}
        <Section className="pt-20 md:pt-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-foreground">
                  Voicetypr
                </Link>
                <span aria-hidden>/</span>
                <span>Voice for AI agents</span>
              </div>

              <h1 className="font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-tight tracking-tight">
                Native voice for AI{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  agents
                </em>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Dictate into Cursor, Claude Code, ChatGPT, Cline, Windsurf, Aider — any terminal or editor — because Voicetypr pastes where your cursor is. Then drive transcription programmatically with a scriptable Agent CLI and a local HTTP API. It&apos;s also the voice layer for personal AI agents like OpenClaw, NanoClaw, and Hermes — speak to them wherever they live. Offline-first, with local Whisper and Parakeet models.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Offline by default</span>
                <span>Mac + Windows</span>
                <span>Scriptable CLI + local API</span>
                <span>Pay once</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex h-12 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-95"
                >
                  Start 3-day free trial
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-12 items-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted active:scale-95"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* Two capabilities */}
        <Section>
          <Container>
            <div className="mb-8 max-w-[760px]">
              <p className="mb-2 text-sm font-medium text-sage">Two ways to use it</p>
              <h2 className={H2_CLASS}>Dictate into agents, or let agents call Voicetypr</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {capabilities.map((cap) => (
                <article key={cap.title} className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-sm font-medium text-sage">{cap.eyebrow}</p>
                  <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-foreground">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{cap.body}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Works in your stack */}
        <Section>
          <Container>
            <div className="mb-8 max-w-[760px]">
              <p className="mb-2 text-sm font-medium text-sage">Works in your stack</p>
              <h2 className={H2_CLASS}>One hotkey, every agent you already use</h2>
              <p className="mt-3 max-w-[620px] text-base leading-relaxed text-muted-foreground">
                Because Voicetypr pastes into the focused field, there&apos;s no per-tool setup. The same global hotkey works wherever you type.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {agents.map((agent) => (
                <li
                  key={agent}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-[15px] font-medium text-foreground"
                >
                  <Check className="h-4 w-4 flex-shrink-0 text-sage" />
                  <span>{agent}</span>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        {/* Personal AI agents */}
        <Section>
          <Container>
            <div className="mb-8 max-w-[760px]">
              <p className="mb-2 text-sm font-medium text-sage">Personal AI agents</p>
              <h2 className={H2_CLASS}>Your agent lives in your chat apps. Give it ears.</h2>
              <p className="mt-3 max-w-[620px] text-base leading-relaxed text-muted-foreground">
                The new wave of self-hosted personal agents runs in the messaging apps and terminal you already use. Voicetypr is the system-wide voice layer: hold one hotkey and talk to your agent in whatever channel it lives in, on Mac or Windows.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {personalAgents.map((a) => (
                <article key={a.name} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{a.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{a.body}</p>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-sage underline underline-offset-2"
                  >
                    {a.name} on GitHub →
                  </a>
                </article>
              ))}
            </div>

            <p className="mt-5 max-w-[620px] text-sm leading-relaxed text-muted-foreground">
              These agents are self-hosted and privacy-minded — and so is Voicetypr. In local mode your speech is transcribed on your own machine and never sent to us, so the voice layer stays private regardless of how your agent is set up.
            </p>
          </Container>
        </Section>

        {/* CLI example */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <p className="mb-2 text-sm font-medium text-sage">Transcription CLI</p>
                <h2 className={H2_CLASS}>A CLI built for agents and scripts</h2>
                <p className="mt-3 max-w-[520px] text-base leading-relaxed text-muted-foreground">
                  Run transcription from a shell, a build step, or an agent tool. Add{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">--json</code>{" "}
                  for structured output you can pipe anywhere.
                </p>
                <ul className="mt-6 space-y-4">
                  {cliFeatures.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-sage" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                  <span className="ml-2 text-xs font-medium text-muted-foreground">terminal</span>
                </div>
                <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed text-foreground">
                  <code>
                    <span className="text-muted-foreground">$ </span>voicetypr transcribe note.wav --json{"\n"}
                    {"{\n"}
                    {'  "text": "Refactor the auth middleware to use the new token store.",\n'}
                    {'  "words": [ /* per-word timing */ ],\n'}
                    {'  "metadata": { "duration": 4.2, "language": "en" },\n'}
                    {'  "model": "parakeet",\n'}
                    {'  "engine": "local"\n'}
                    {"}\n"}
                    {"\n"}
                    <span className="text-muted-foreground">$ </span>voicetypr record --until-silence --json{"\n"}
                    <span className="text-muted-foreground">$ </span>voicetypr transcribe clip.wav \{"\n"}
                    {"    "}--model whisper --engine local \{"\n"}
                    {"    "}--server 192.168.1.20:8080 --password ••••
                  </code>
                </pre>
              </div>
            </div>
          </Container>
        </Section>

        {/* Why it works for builders */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-2 text-sm font-medium text-sage">Built for builders</p>
                <h2 className={H2_CLASS}>Agent-friendly, and offline-first by default</h2>
              </div>
              <ul className="space-y-4">
                {checklist.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-sage" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section>
          <Container>
            <div className="mb-8 max-w-[760px]">
              <p className="mb-2 text-sm font-medium text-sage">FAQ</p>
              <h2 className={H2_CLASS}>Voice for AI agents, answered</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <article key={item.q} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">{item.q}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{item.a}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Related Guides */}
        <Section>
          <Container>
            <RelatedGuidesSection
              eyebrow="Related guides"
              title="More ways to put voice in your dev workflow"
              description="Narrow to a single tool, see the broader dictation story, or learn how scripts reach a running instance over the network."
              links={aiAgentsRelatedGuides}
              dataTrackPrefix="voice-for-ai-agents-related-guides"
              embedded
            />
          </Container>
        </Section>

        {/* Final CTA */}
        <FinalCTA
          headline="Give your AI agents a voice"
          subtitle="3-day free trial. No credit card. Dictate into Cursor and Claude Code, and call transcription from your own scripts."
          primaryLabel="Start free trial"
          primaryDataTrack="voice-for-ai-agents-final-cta-click"
          secondaryHref="/#pricing"
          headlineClassName="mx-auto mb-5 max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight"
          subtitleClassName="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-primary-foreground/75"
        />

        <SiteFooter />
      </main>
    </>
  );
}
