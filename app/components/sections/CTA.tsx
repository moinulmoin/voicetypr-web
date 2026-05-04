import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="ed-section">
      <div className="ed-container">
        <div className="relative overflow-hidden rounded-[32px] border border-editorial-line bg-gradient-to-b from-white to-[#f0efeb] py-20 md:py-28 px-8 text-center">
          {/* Decorative accent glow — stronger */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -bottom-[35%] h-[280px]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, color-mix(in oklab, var(--color-editorial-accent) 38%, transparent), transparent 65%)",
            }}
          />
          {/* Subtle film-grain noise (low opacity, no scroll) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
            style={{
              backgroundImage:
                'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>")',
            }}
          />

          {/* Content sits above effects */}
          <div className="relative">
            <div className="mb-6 flex justify-center">
              <span className="ed-eyebrow">three days free, no card</span>
            </div>

            <h2 className="font-serif text-[clamp(64px,8.5vw,140px)] leading-[0.93] tracking-[-0.035em] mb-7 max-w-[920px] mx-auto">
              Stop typing. Start talking.
            </h2>

            <p className="text-editorial-ink-2 text-[19px] leading-[1.5] max-w-[560px] mx-auto mb-10">
              Free to try for 3 days. $50 once if you love it. No account, no
              card to start.
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link
                href="/download"
                data-umami-event="cta-download-click"
                className="group inline-flex items-center gap-2 rounded-lg bg-editorial-ink py-2 pl-6 pr-2 text-[15px] font-medium text-white transition-[transform,background-color,color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-black active:scale-[0.98]"
              >
                Start free 3-day trial
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </Link>
              <a
                href="https://youtu.be/L_yU879QbE4"
                target="_blank"
                rel="noopener noreferrer"
                data-umami-event="cta-demo-click"
                className="inline-flex items-center justify-center rounded-lg border border-editorial-line-2 bg-transparent text-editorial-ink px-6 py-3 text-[15px] font-medium transition-[transform,color,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-editorial-surface hover:text-editorial-accent active:scale-[0.98]"
              >
                See the demo &rarr;
              </a>
            </div>

            <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-editorial-ink-3">
              from $50 · lifetime · refund within 7 days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
