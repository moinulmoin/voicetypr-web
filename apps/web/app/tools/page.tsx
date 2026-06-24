import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import { getAllFreeTools } from "@/lib/free-tools";

const TOOLS_INDEX_URL = "https://voicetypr.com/tools";

const toolsIndexTitle =
  "Free writing tools — dictation vs typing, typing test & prompt counter | Voicetypr";
const toolsIndexDescription =
  "Free tools if you write all day: compare dictation vs typing time, test your speed, estimate keyboard load, and count prompt length.";

export const metadata: Metadata = {
  title: toolsIndexTitle,
  description: toolsIndexDescription,
  alternates: { canonical: TOOLS_INDEX_URL },
  openGraph: {
    title: "Free writing tools — Voicetypr",
    description: toolsIndexDescription,
    url: TOOLS_INDEX_URL,
    siteName: "Voicetypr",
    type: "website",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free writing tools — Voicetypr",
    description: toolsIndexDescription,
    images: ["/voicetypr-og.png"],
    creator: "@moinulmoin",
  },
  robots: { index: true, follow: true },
};

export default function ToolsIndexPage() {
  const tools = getAllFreeTools();

  return (
    <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
      <SiteHeader />

      {/* Hero */}
      <Section className="pt-20 md:pt-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">
                Voicetypr
              </Link>
              <span aria-hidden>/</span>
              <span>Free tools</span>
            </div>

            <header className="mb-10">
              <h1 className="max-w-3xl text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[1.03] tracking-tight">
                Free tools for{" "}
                <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                  faster writing
                </em>
              </h1>
              <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                Quick calculators to estimate typing load, measure speed, and see what dictation can save you.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              {tools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-muted"
                >
                  <h2 className="text-lg font-semibold tracking-tight text-foreground">{tool.shortTitle}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
