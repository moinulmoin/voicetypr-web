import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="ed-section !pt-[160px] md:!pt-[200px] pb-0 relative overflow-hidden">
      <div className="ed-container relative">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-[clamp(40px,9vw,96px)] leading-[0.98] tracking-[-0.02em]">
            Type by talking,
            <br />
            in every app you use.
          </h1>

          <p className="mx-auto mt-7 max-w-[640px] text-[19px] leading-[1.55] text-editorial-ink-2">
            <strong className="font-medium text-editorial-ink">
              Offline voice-to-text for Mac and Windows.
            </strong>{" "}
            ~150 words a minute. Pay once, yours forever.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/download"
              data-umami-event="hero-download-click"
              className="group inline-flex items-center gap-2 rounded-lg bg-editorial-ink py-2 pl-5 pr-2 text-sm font-medium text-white transition-[transform,background-color,color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-black active:scale-[0.98]"
            >
              Download for free
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </Link>
            <Link
              href="/#pricing"
              data-umami-event="hero-pricing-click"
              className="inline-flex items-center rounded-lg border border-editorial-line-2 bg-transparent px-5 py-3 text-sm font-medium text-editorial-ink transition-[transform,color,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-editorial-surface hover:text-editorial-accent active:scale-[0.98]"
            >
              Buy lifetime license
            </Link>
          </div>

          {/* Meta row — trust signals after the CTAs */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-7 gap-y-2 font-mono text-xs uppercase tracking-[0.08em] text-editorial-ink-3">
            <span className="text-[#3a7a4f]">&bull; 100% offline</span>
            <span>pay once</span>
            <span>3-day trial</span>
            <span>macOS 13+</span>
            <span>Windows 10+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
