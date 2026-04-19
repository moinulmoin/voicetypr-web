import Link from "next/link";

export default function CTA() {
  return (
    <section className="ed-section">
      <div className="ed-container">
        <div className="relative overflow-hidden rounded-[28px] border border-editorial-line bg-gradient-to-b from-white to-[#f5ede0] p-10 md:py-20 md:px-10 text-center">
          {/* Decorative green glow */}
          <div
            aria-hidden
            className="absolute inset-x-0 -bottom-[30%] h-[200px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, color-mix(in oklab, var(--color-editorial-accent) 30%, transparent), transparent 70%)",
            }}
          />

          {/* Content sits above glow */}
          <div className="relative">
            <div className="ed-eyebrow ed-eyebrow-center">
              ready to write without typing?
            </div>

            <h2 className="font-serif text-[clamp(54px,6vw,110px)] leading-[0.95] tracking-[-0.02em] mb-5">
              Stop typing. <em>Start shipping.</em>
            </h2>

            <p className="text-editorial-ink-2 text-[18px] max-w-[520px] mx-auto mb-8">
              Free to try for 3 days. $50 once if you love it. No account, no
              card to start.
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link
                href="/download"
                data-umami-event="cta-download-click"
                className="inline-flex items-center justify-center rounded-full bg-editorial-ink text-white px-7 py-3 text-[15px] font-medium hover:opacity-90 transition-opacity"
              >
                Start free 3-day trial
              </Link>
              <a
                href="https://youtu.be/L_yU879QbE4"
                target="_blank"
                rel="noopener noreferrer"
                data-umami-event="cta-demo-click"
                className="inline-flex items-center justify-center rounded-full border border-editorial-line bg-transparent text-editorial-ink px-7 py-3 text-[15px] font-medium hover:bg-editorial-surface-2 transition-colors"
              >
                See the demo →
              </a>
            </div>

            <div className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-editorial-ink-3">
              macOS 13+ · Windows 10+ · free lifetime updates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
