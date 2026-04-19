export default function Demo() {
  return (
    <section className="ed-section pt-12 md:pt-16 pb-0">
      <div className="ed-container">
        <div className="mb-6 flex justify-center">
          <span className="ed-eyebrow">see it work &middot; 20 seconds</span>
        </div>

        <div className="mx-auto max-w-5xl">
          <div
            className="relative aspect-[8/5] overflow-hidden rounded-[28px] border border-editorial-line p-4 md:p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18),0_2px_8px_-2px_rgba(0,0,0,0.06),inset_0_1px_0_#fff]"
            style={{
              background: "linear-gradient(to bottom, #ffffff, #f3f3f0)",
            }}
          >
            {/* Accent glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -bottom-[25%] h-[85%]"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 100%, color-mix(in oklab, var(--color-editorial-accent) 28%, transparent), transparent 65%)",
              }}
            />

            <video
              controls
              muted
              playsInline
              preload="none"
              poster="/voicetypr-demo-poster.jpg"
              aria-label="VoiceTypr demo — press hotkey, speak, text pastes at the cursor"
              className="relative h-full w-full rounded-[22px] border border-editorial-line bg-editorial-ink object-cover shadow-[0_6px_14px_-6px_rgba(0,0,0,0.1)]"
            >
              <source
                src="https://assets.voicetypr.com/voicetypr-ph-2.mp4#t=0,20"
                type="video/mp4"
              />
            </video>
          </div>

          <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-editorial-ink-3">
            want the full walkthrough?{" "}
            <a
              href="https://youtu.be/L_yU879QbE4"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="demo-full-walkthrough-click"
              className="text-editorial-ink-2 underline underline-offset-4 transition-colors hover:text-editorial-accent"
            >
              watch on youtube &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
