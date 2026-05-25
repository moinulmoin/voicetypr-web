import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/sections/Footer";
import Header from "@/app/components/sections/Header";
import { getAllFreeTools } from "@/lib/free-tools";

const TOOLS_INDEX_URL = "https://voicetypr.com/tools";

const toolsIndexTitle =
  "Free writing tools — dictation vs typing, speed test & load calculator | VoiceTypr";
const toolsIndexDescription =
  "Free dictation vs typing calculator, 10-second typing speed test, and keyboard typing load calculator for founders who write all day.";

export const metadata: Metadata = {
  title: toolsIndexTitle,
  description: toolsIndexDescription,
  alternates: { canonical: TOOLS_INDEX_URL },
  openGraph: {
    title: "Free writing tools — VoiceTypr",
    description: toolsIndexDescription,
    url: TOOLS_INDEX_URL,
    siteName: "VoiceTypr",
    type: "website",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free writing tools — VoiceTypr",
    description: toolsIndexDescription,
    images: ["/voicetypr-og.png"],
    creator: "@moinulmoin",
  },
  robots: { index: true, follow: true },
};

export default function ToolsIndexPage() {
  const tools = getAllFreeTools();

  return (
    <main id="main-content" className="landing-editorial relative min-h-screen">
      <Header />
      <section className="ed-section ed-section-hero pb-0 pt-[120px] md:pt-[140px]">
        <div className="ed-container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-2 text-sm text-editorial-ink-3">
              <Link href="/" className="transition-colors hover:text-editorial-ink">
                VoiceTypr
              </Link>
              <span>/</span>
              <span>Free tools</span>
            </div>

            <header className="mb-10">
              <h1 className="max-w-3xl text-[clamp(38px,5.2vw,62px)] font-semibold leading-[1.06] tracking-[-0.04em]">
                Free tools for faster writing
              </h1>
              <p className="mt-5 max-w-2xl text-[17px] leading-[1.65] text-editorial-ink-2">
                Quick calculators to estimate typing load, measure speed, and see what dictation can save you.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              {tools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="rounded-2xl border border-editorial-line bg-white/82 p-5 transition hover:border-editorial-ink/30"
                >
                  <h2 className="text-[18px] font-semibold tracking-tight text-editorial-ink">{tool.shortTitle}</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-editorial-ink-2">{tool.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
