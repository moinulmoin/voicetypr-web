import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import {
  USE_CASE_CATEGORIES,
  getUseCasesByCategory,
  type UseCase,
  type UseCaseCategory,
} from "@/lib/use-cases";

export const metadata: Metadata = {
  title: "Use cases — VoiceTypr",
  description:
    "Voice typing for ADHD, dyslexia, RSI, developers, writers, and founders. See how VoiceTypr fits the way you actually work — built for the people for whom typing is the bottleneck.",
  alternates: { canonical: "https://voicetypr.com/use-cases" },
  openGraph: {
    title: "Use cases — VoiceTypr",
    description:
      "How VoiceTypr fits real workflows. ADHD, dyslexia, RSI, developers, writers, founders.",
    url: "https://voicetypr.com/use-cases",
    siteName: "VoiceTypr",
    type: "website",
    images: ["/voicetypr-og.png"],
  },
  robots: { index: true, follow: true },
};

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <Link
      href={`/use-cases/${useCase.slug}`}
      className="group block bg-editorial-surface border border-editorial-line rounded-2xl p-7 [transition:transform_300ms_cubic-bezier(0.32,0.72,0,1),border-color_300ms] hover:border-editorial-ink-3 active:scale-[0.99] h-full flex flex-col gap-3"
      data-track="use-case-card-click"
      data-track-slug={useCase.slug}
    >
      <h3 className="font-serif text-[26px] md:text-[28px] leading-[1.1] tracking-[-0.005em] text-editorial-ink">
        {useCase.navLabel}
      </h3>
      <p className="text-editorial-ink-2 text-[15px] leading-[1.55] flex-1">
        {useCase.hero.lede.split(".")[0]}.
      </p>
      <div className="mt-2 inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3 group-hover:text-editorial-ink-2 [transition:color_200ms]">
        See the workflow
        <span aria-hidden className="[transition:transform_300ms_cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
          →
        </span>
      </div>
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

        <section className="ed-section pt-[120px] md:pt-[140px] pb-0">
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
                <div className="mb-9 max-w-[760px]">
                  <div className="ed-eyebrow">{meta.eyebrow}</div>
                  <h2 className="font-serif text-[clamp(32px,3.4vw,48px)] leading-[1.05] tracking-[-0.01em] mt-2 mb-3">
                    {meta.label}
                  </h2>
                  <p className="text-editorial-ink-2 text-[16px] leading-[1.6]">
                    {meta.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cases.map((useCase) => (
                    <li key={useCase.slug}>
                      <UseCaseCard useCase={useCase} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}

        {/* Don't see your niche */}
        <section className="ed-section">
          <div className="ed-container">
            <div className="bg-editorial-surface border border-editorial-line rounded-[24px] p-8 md:p-10 max-w-[820px]">
              <div className="ed-eyebrow">don&rsquo;t see your niche?</div>
              <h2 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.1] mt-3 mb-3">
                Tell me what&rsquo;s missing.
              </h2>
              <p className="text-editorial-ink-2 text-[16px] leading-[1.6] max-w-[600px] mb-6">
                If your work doesn&rsquo;t map onto these but voice could help,
                I want to hear about it. Concrete workflows beat hypothetical ones.
              </p>
              <a
                href="mailto:support@voicetypr.com"
                className="inline-flex items-center gap-2 rounded-full border border-editorial-line bg-editorial-surface-2 px-5 py-2.5 text-[14px] font-medium text-editorial-ink hover:border-editorial-ink-3 [transition:border-color_200ms,transform_300ms_cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                data-track="use-cases-contact-click"
              >
                Email support
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
