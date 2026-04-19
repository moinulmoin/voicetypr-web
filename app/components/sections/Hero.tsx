import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="ed-section pt-[120px] md:pt-[140px] pb-0">
      <div className="ed-container">
        <div className="mx-auto max-w-5xl text-center">
          <span className="ed-chip text-[13px]">
            <span className="ed-chip-dot" />
            v1.12 &middot; lifetime &middot; open source
          </span>

          <h1 className="mt-5 font-serif text-[clamp(40px,9vw,96px)] leading-[0.98] tracking-[-0.02em]">
            Talk like a human.
            <br />
            Get text like a <em>pro.</em>
          </h1>

          <p className="mx-auto mt-7 max-w-[640px] text-[19px] leading-[1.55] text-editorial-ink-2">
            <strong className="font-medium text-editorial-ink">
              Clean, paste-ready text in any app, on Mac or Windows.
            </strong>{" "}
            Talk to Claude, draft a Slack reply, write that PR description
              you&rsquo;ve been dodging. Fully local, ~5&times; faster than
            typing.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/download"
              data-umami-event="hero-start-trial-click"
              className="group inline-flex items-center gap-2 rounded-full bg-editorial-ink py-2 pl-5 pr-2 text-sm font-medium text-white transition-[transform,background-color,color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-black active:scale-[0.98]"
            >
              Start free 3-day trial
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </Link>
            <a
              href="https://youtu.be/L_yU879QbE4"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="hero-demo-click"
              className="inline-flex items-center rounded-full border border-editorial-line-2 bg-transparent px-5 py-3 text-sm font-medium text-editorial-ink transition-[transform,color,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-editorial-surface hover:text-editorial-accent active:scale-[0.98]"
            >
              Watch the demo &rarr;
            </a>
          </div>

          {/* Meta row */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-2 border-t border-dashed border-editorial-line-2 pt-6 font-mono text-xs uppercase tracking-[0.08em] text-editorial-ink-3">
            <span className="text-[#3a7a4f]">&bull; 100% local</span>
            <span>macOS 13+</span>
            <span>Windows 10+</span>
            <span>99+ languages</span>
            <span>No subscription</span>
          </div>
        </div>
      </div>
    </section>
  );
}
