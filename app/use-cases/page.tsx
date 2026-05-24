import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";
import {
  USE_CASE_CATEGORIES,
  getUseCasesByCategory,
  type UseCase,
  type UseCaseCategory,
} from "@/lib/use-cases";

export const metadata: Metadata = {
  title: "Use Cases — VoiceTypr",
  description:
    "How people use VoiceTypr: ADHD, RSI, developers, writers, journalists, product managers, support teams, students, and other typing-heavy workflows.",
  alternates: {
    canonical: "https://voicetypr.com/use-cases",
  },
  openGraph: {
    title: "Use Cases — VoiceTypr",
    description:
      "How people use VoiceTypr: ADHD, RSI, developers, writers, journalists, product managers, support teams, students, and other typing-heavy workflows.",
    url: "https://voicetypr.com/use-cases",
    siteName: "VoiceTypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Use Cases — VoiceTypr",
    description:
      "How people use VoiceTypr: ADHD, RSI, developers, writers, journalists, product managers, support teams, students, and other typing-heavy workflows.",
    images: ["/voicetypr-og.png"],
  },
};

function UseCaseRow({ useCase }: { useCase: UseCase }) {
  return (
    <Link
      href={`/use-cases/${useCase.slug}`}
      className="group flex flex-col gap-2 py-5 transition-colors hover:bg-editorial-surface-2/60 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
      data-track="use-case-card-click"
      data-track-slug={useCase.slug}
    >
      <div className="flex-1">
        <h3 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.01em] text-editorial-ink transition-colors group-hover:text-editorial-ink md:text-[30px]">
          {useCase.navLabel}
        </h3>
        <p className="mt-1 max-w-[560px] text-[15px] leading-[1.6] text-editorial-ink-2">
          {useCase.hero.lede.split(".")[0]}.
        </p>
      </div>
      <span className="shrink-0 pt-1 text-[13px] font-medium text-editorial-ink-2 transition-colors group-hover:text-editorial-ink">
        View workflow →
      </span>
    </Link>
  );
}

export default function UseCasesHubPage() {
  const grouped = getUseCasesByCategory();
  const categoryOrder: UseCaseCategory[] = [
    "accessibility",
    "profession",
    "workflow",
  ];

  return (
    <>
      <main
        id="main-content"
        className="landing-editorial relative min-h-screen"
      >
        <Header />

        <section className="ed-section ed-section-hero pb-0 pt-[120px] md:pt-[140px]">
          <div className="ed-container">
            <div className="max-w-[820px]">
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                Use cases · the people we built it for
              </div>
              <h1 className="mt-3 mb-5 text-[clamp(44px,6.4vw,76px)] font-bold leading-[1.02] tracking-[-0.02em]">
                Real workflows from the people we built it for
              </h1>
              <p className="max-w-[640px] text-[18px] leading-[1.6] text-editorial-ink-2 md:text-[19px]">
                When typing is the bottleneck — physical, cognitive, or because
                the English side of your job grew faster than your fingers —
                voice routes around it. Here&apos;s how that looks for the people who use VoiceTypr daily.
              </p>
            </div>
          </div>
        </section>

        {categoryOrder.map((category) => {
          const cases = grouped[category];
          if (cases.length === 0) return null;
          const meta = USE_CASE_CATEGORIES[category];
          return (
            <section key={category} className="ed-section">
              <div className="ed-container">
                <div className="mb-2 max-w-[760px]">
                  <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                    {meta.eyebrow}
                  </div>
                  <h2 className="mt-2 mb-3 text-[clamp(30px,3.1vw,42px)] font-semibold leading-[1.12] tracking-[-0.01em]">
                    {meta.label}
                  </h2>
                  <p className="text-[16px] leading-[1.65] text-editorial-ink-2">
                    {meta.description}
                  </p>
                </div>
                <div className="mt-5 max-w-[760px] divide-y divide-editorial-line/70">
                  {cases.map((useCase) => (
                    <UseCaseRow key={useCase.slug} useCase={useCase} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="ed-section">
          <div className="ed-container">
            <div className="relative overflow-hidden rounded-[2rem] bg-editorial-ink px-6 py-10 text-center text-white shadow-[0_28px_90px_rgba(24,24,26,0.18)] md:px-10 md:py-12">
              <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#d4965d]/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <h2 className="mx-auto mb-4 max-w-3xl text-[clamp(36px,5vw,64px)] font-bold leading-[1.04] tracking-[-0.02em] !text-white">
                  Pick your workflow. Try it free.
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-[16px] leading-[1.6] text-white/72">
                  3-day free trial. Offline dictation by default. Works in the apps you already use.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/download"
                    className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink transition duration-300 ease-out hover:bg-editorial-surface active:scale-95"
                  >
                    Download free trial
                  </Link>
                  <Link
                    href="/#pricing"
                    className="inline-flex h-12 items-center rounded-md border border-white/18 bg-white/8 px-5 text-sm font-medium text-white transition hover:bg-white/14 active:scale-95"
                  >
                    Get lifetime license
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
