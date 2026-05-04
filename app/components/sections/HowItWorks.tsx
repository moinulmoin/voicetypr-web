export default function HowItWorks() {
  return (
    <section className="ed-section" id="how-it-works">
      <div className="ed-container">
        <div className="ed-eyebrow">how it works · four steps, two minutes</div>
        <h2 className="font-serif text-[clamp(40px,4.2vw,68px)] leading-[1] max-w-[720px]">
          Install. Pick a model. Set a key. Talk.
        </h2>
        <p className="text-[18px] text-editorial-ink-2 max-w-[560px] mt-4 mb-12">
          No cloud account. No onboarding wizard. No &ldquo;we&apos;ll email
          you when it&apos;s ready.&rdquo; Download, pick a model, start
          talking. About 90 seconds total.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Step 01 — warm cream */}
          <article className="bg-editorial-surface-2 border border-editorial-line rounded-2xl p-6 min-h-[280px] flex flex-col relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-3 right-3 font-serif text-[80px] leading-none text-editorial-line-2 select-none"
            >
              01
            </div>
            <div className="ed-label relative">install</div>
            <h3 className="font-serif text-[24px] leading-[1.1] mt-3.5 mb-2.5 relative">
              Install VoiceTypr
            </h3>
            <p className="text-editorial-ink-2 text-sm leading-[1.55] mb-4 relative">
              Download the .dmg (Mac) or .exe (Windows). Apple Silicon, Intel
              and Windows 10+ all supported.
            </p>
            <div className="mt-auto min-h-[60px] flex items-end relative">
              <div className="flex gap-1.5">
                <span className="px-2.5 py-1 text-[11px] font-mono text-editorial-ink-2 rounded bg-editorial-surface border border-editorial-line">
                  macOS
                </span>
                <span className="px-2.5 py-1 text-[11px] font-mono text-editorial-ink-2 rounded bg-editorial-surface border border-editorial-line">
                  Windows
                </span>
              </div>
            </div>
          </article>

          {/* Step 02 — white, with model bars visual */}
          <article className="bg-editorial-surface border border-editorial-line rounded-2xl p-6 min-h-[280px] flex flex-col relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-3 right-3 font-serif text-[80px] leading-none text-editorial-line select-none"
            >
              02
            </div>
            <div className="ed-label relative">pick a model</div>
            <h3 className="font-serif text-[24px] leading-[1.1] mt-3.5 mb-2.5 relative">
              Pick a model
            </h3>
            <p className="text-editorial-ink-2 text-sm leading-[1.55] mb-4 relative">
              Whisper Base for English speed, Whisper Large v3 for full
              multilingual accuracy, Turbo when you want both. Parakeet on
              Apple Silicon.
            </p>
            <div className="mt-auto min-h-[60px] flex items-end relative">
              <div className="flex flex-col gap-1.5 w-full font-mono text-[11px] text-editorial-ink-2">
                <div className="flex items-center gap-2">
                  <span className="w-14">Base</span>
                  <div className="flex-1 h-1.5 rounded-full bg-editorial-surface-2 overflow-hidden">
                    <div className="h-full w-[20%] bg-editorial-ink-3" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-14">Large v3</span>
                  <div className="flex-1 h-1.5 rounded-full bg-editorial-surface-2 overflow-hidden">
                    <div className="h-full w-[100%] bg-editorial-ink-3" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-editorial-accent">
                  <span className="w-14">Turbo</span>
                  <div className="flex-1 h-1.5 rounded-full bg-editorial-accent-wash overflow-hidden">
                    <div className="h-full w-[55%] bg-editorial-accent" />
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Step 03 — DARK signature key-art moment */}
          <article className="bg-editorial-ink text-white border border-white/10 rounded-2xl p-6 min-h-[280px] flex flex-col relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>")',
              }}
            />
            <div
              aria-hidden
              className="absolute -top-3 right-3 font-serif text-[80px] leading-none text-white/[0.08] select-none"
            >
              03
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55 relative">
              hotkey
            </div>
            <h3 className="font-serif text-[24px] leading-[1.1] mt-3.5 mb-2.5 text-white relative">
              Set your hotkey
            </h3>
            <p className="text-white/65 text-sm leading-[1.55] mb-4 relative">
              Toggle or push-to-talk. Works globally in any app, any text
              field, any time.
            </p>
            <div className="mt-auto min-h-[60px] flex items-end relative">
              <div className="flex gap-2 items-center">
                <span className="inline-flex items-center justify-center min-w-[36px] h-9 px-2.5 rounded-md bg-white/[0.06] border border-white/15 border-b-[2px] font-mono text-[12px] text-white">
                  &#8984;
                </span>
                <span className="inline-flex items-center justify-center min-w-[36px] h-9 px-2.5 rounded-md bg-white/[0.06] border border-white/15 border-b-[2px] font-mono text-[12px] text-white">
                  &#8679;
                </span>
                <span className="inline-flex items-center justify-center h-9 px-3.5 rounded-md bg-white/[0.06] border border-white/15 border-b-[2px] font-mono text-[12px] text-white">
                  Space
                </span>
              </div>
            </div>
          </article>

          {/* Step 04 — accent wash with caret moment */}
          <article className="bg-editorial-accent-wash border border-editorial-accent/20 rounded-2xl p-6 min-h-[280px] flex flex-col relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-3 right-3 font-serif text-[80px] leading-none text-editorial-accent/15 select-none"
            >
              04
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-editorial-accent-ink relative flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-editorial-accent" />
              ship
            </div>
            <h3 className="font-serif text-[24px] leading-[1.1] mt-3.5 mb-2.5 relative">
              Speak &amp; ship
            </h3>
            <p className="text-editorial-ink-2 text-sm leading-[1.55] mb-4 relative">
              Hold the key, talk. Release. Polished text lands where your
              cursor is.
            </p>
            <div className="mt-auto min-h-[60px] flex items-end relative">
              <div className="bg-white/70 border border-editorial-accent/15 rounded-md px-3 py-2 font-serif italic text-editorial-ink text-sm">
                &ldquo;Let&apos;s ship Tuesday and iterate from there.&rdquo;
                <span
                  style={{
                    width: 2,
                    height: 14,
                    background: "var(--color-editorial-accent)",
                    display: "inline-block",
                    verticalAlign: "-2px",
                    marginLeft: 2,
                    animation: "ed-caret 1.1s steps(2) infinite",
                  }}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
