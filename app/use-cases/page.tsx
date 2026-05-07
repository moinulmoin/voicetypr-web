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
    "How people use VoiceTypr. ADHD, dyslexia, RSI, developers, writers, founders — concrete workflows, not generic productivity claims.",
};

function UseCaseRow({ useCase }: { useCase: UseCase }) {
  return (
    <Link
      href={`/use-cases/${useCase.slug}`}
      className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 py-6 border-b border-editorial-line [transition:opacity_200ms] hover:opacity-70"
      data-track="use-case-card-click"
      data-track-slug={useCase.slug}
    >
      <div className="flex-1">
        <h3 className="font-serif text-[clamp(22px,2.5vw,32px)] leading-[1.15] tracking-[-0.01em] text-editorial-ink group-hover:text-editorial-accent-ink [transition:color_200ms]">
          {useCase.navLabel}
        </h3>
        <p className="text-editorial-ink-2 text-[15px] leading-[1.55] mt-1 max-w-[520px]">
          {useCase.hero.lede.split(".")[0]}.
        </p>
      </div>
      <span className="font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3 group-hover:text-editorial-ink-2 [transition:color_200ms] shrink-0">
        See the workflow →
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

        <section className="ed-section ed-section-hero pt-[120px] md:pt-[140px] pb-0">
          <div className="ed-container">
            <div className="max-w-[820px]">
              <div className="ed-eyebrow">use cases · the people we built it for</div>
              <h1 className="font-serif text-[clamp(56px,7vw,108px)] leading-[0.96] tracking-[-0.025em] mt-3 mb-5">
                Voice for the way <em>you actually work.</em>
              </h1>
              <p className="text-[18px] md:text-[20px] leading-[1.55] text-editorial-ink-2 max-w-[640px]">
                When typing is the bottleneck — physical, cognitive, or just
                because the English-side of your job grew faster than your
                fingers — voice routes around it. Here&rsquo;s how that looks
                across the people we built VoiceTypr for first.
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
                  <div className="ed-eyebrow">{meta.eyebrow}</div>
                  <h2 className="font-serif text-[clamp(32px,3.4vw,48px)] leading-[1.05] tracking-[-0.01em] mt-2 mb-3">
                    {meta.label}
                  </h2>
                  <p className="text-editorial-ink-2 text-[16px] leading-[1.6]">
                    {meta.description}
                  </p>
                </div>
                <div className="max-w-[720px] mt-6">
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
            <div className="max-w-[720px] py-8 border-t border-editorial-line">
              <p className="text-editorial-ink-2 text-[16px] leading-[1.6]">
                Don&apos;t see your use case?{" "}
                <a
                  href="mailto:support@voicetypr.com"
                  className="text-editorial-accent hover:underline"
                  data-track="use-cases-contact-click"
                >
                  Tell me what you need
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
