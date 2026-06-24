import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";
import {
  USE_CASE_CATEGORIES,
  getUseCasesByCategory,
  type UseCase,
  type UseCaseCategory,
} from "@/lib/use-cases";

export const metadata: Metadata = {
  title: "Use Cases — Voicetypr",
  description:
    "How people use Voicetypr: ADHD, RSI, developers, writers, journalists, product managers, support teams, students, and other typing-heavy workflows.",
  alternates: {
    canonical: "https://voicetypr.com/use-cases",
  },
  openGraph: {
    title: "Use Cases — Voicetypr",
    description:
      "How people use Voicetypr: ADHD, RSI, developers, writers, journalists, product managers, support teams, students, and other typing-heavy workflows.",
    url: "https://voicetypr.com/use-cases",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Use Cases — Voicetypr",
    description:
      "How people use Voicetypr: ADHD, RSI, developers, writers, journalists, product managers, support teams, students, and other typing-heavy workflows.",
    images: ["/voicetypr-og.png"],
  },
};

const H2_CLASS =
  "text-balance font-sans text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-foreground";

function UseCaseRow({ useCase }: { useCase: UseCase }) {
  return (
    <Link
      href={`/use-cases/${useCase.slug}`}
      className="group flex flex-col gap-2 rounded-2xl py-5 transition-colors hover:bg-muted/60 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:px-4"
      data-track="use-case-card-click"
      data-track-slug={useCase.slug}
    >
      <div className="flex-1">
        <h3 className="text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
          {useCase.navLabel}
        </h3>
        <p className="mt-1.5 max-w-[560px] text-[15px] leading-relaxed text-muted-foreground">
          {useCase.hubTeaser ?? `${useCase.hero.lede.split(".")[0]}.`}
        </p>
      </div>
      <span className="shrink-0 pt-1 text-[13px] font-medium text-sage transition-colors group-hover:text-foreground">
        View workflow →
      </span>
    </Link>
  );
}

export default function UseCasesHubPage() {
  const grouped = getUseCasesByCategory();
  const categoryOrder: UseCaseCategory[] = ["accessibility", "profession"];

  return (
    <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
      <SiteHeader />

      {/* Hero */}
      <Section className="pt-20 md:pt-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-balance font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[1.03] tracking-tight">
              Who uses{" "}
              <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
                Voicetypr
              </em>
            </h1>
            <p className="mt-5 max-w-[640px] text-balance text-lg leading-relaxed text-muted-foreground">
              Voice gets words into the app you already have open. Here&apos;s how that looks for
              creators, founders, developers, ADHD, RSI, and everyone else below.
            </p>
            <nav
              aria-label="Popular starting points"
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] font-medium"
            >
              <span className="w-full text-sm font-medium text-muted-foreground sm:w-auto sm:pr-1">
                Popular starting points
              </span>
              <Link
                href="/voice-typing"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-sage"
              >
                Voice typing
              </Link>
              <Link
                href="/offline-dictation-app-for-windows"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-sage"
              >
                Offline dictation for Windows
              </Link>
              <Link
                href="/best/accessible-dictation"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-sage"
              >
                Accessible dictation
              </Link>
              <Link
                href="/tools"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-sage"
              >
                Tools
              </Link>
            </nav>
          </div>
        </Container>
      </Section>

      {/* Categories */}
      {categoryOrder.map((category) => {
        const cases = grouped[category];
        if (cases.length === 0) return null;
        const meta = USE_CASE_CATEGORIES[category];
        return (
          <Section key={category}>
            <Container>
              <div className="max-w-[760px]">
                <h2 className={H2_CLASS}>{meta.label}</h2>
                <p className="mt-3.5 text-base leading-relaxed text-muted-foreground">
                  {meta.description}
                </p>
              </div>
              <div className="mt-6 max-w-[760px] divide-y divide-border">
                {cases.map((useCase) => (
                  <UseCaseRow key={useCase.slug} useCase={useCase} />
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Final CTA */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-center text-primary-foreground md:px-10 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-sage/30 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto mb-4 max-w-3xl text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight">
                Pick your workflow. Try it free.
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-balance text-base leading-relaxed text-primary-foreground/75">
                3-day free trial. Offline dictation by default. Works in the apps you already use.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex h-12 items-center rounded-xl bg-background px-5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 active:scale-95"
                >
                  Download free trial
                </Link>
                <Link
                  href="/#pricing"
                  className="inline-flex h-12 items-center rounded-xl border border-primary-foreground/20 px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 active:scale-95"
                >
                  Get lifetime license
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
