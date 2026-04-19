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
          {/* Step 01 */}
          <article className="bg-editorial-surface border border-editorial-line rounded-2xl p-6 min-h-[260px] flex flex-col">
            <div className="ed-label">STEP 01</div>
            <h3 className="font-serif text-[24px] leading-[1.1] mt-3.5 mb-2.5">
              Install VoiceTypr
            </h3>
            <p className="text-editorial-ink-2 text-sm leading-[1.55] mb-4">
              Download the .dmg (Mac) or .exe (Windows). Apple Silicon, Intel
              and Windows 10+ all supported.
            </p>
            <div className="mt-auto min-h-[92px] flex items-end">
              <div className="flex gap-1.5">
                <span className="px-2 py-1 text-[11px] font-mono text-editorial-ink-2 rounded bg-editorial-surface-2">
                  macOS
                </span>
                <span className="px-2 py-1 text-[11px] font-mono text-editorial-ink-2 rounded bg-editorial-surface-2">
                  Windows
                </span>
              </div>
            </div>
          </article>

          {/* Step 02 */}
          <article className="bg-editorial-surface border border-editorial-line rounded-2xl p-6 min-h-[260px] flex flex-col">
            <div className="ed-label">STEP 02</div>
            <h3 className="font-serif text-[24px] leading-[1.1] mt-3.5 mb-2.5">
              Pick a model
            </h3>
            <p className="text-editorial-ink-2 text-sm leading-[1.55] mb-4">
              Base.en for English speed, Large v3 for full multilingual accuracy,
              Turbo when you want both. Download one, swap anytime.
            </p>
            <div className="mt-auto min-h-[92px] flex items-end">
              <div className="flex gap-1.5">
                <span className="px-2 py-1 text-[11px] font-mono text-editorial-ink-2 rounded bg-editorial-surface-2">
                  base.en
                </span>
                <span className="px-2 py-1 text-[11px] font-mono text-editorial-ink-2 rounded bg-editorial-surface-2">
                  large-v3
                </span>
                <span className="px-2 py-1 text-[11px] font-mono rounded bg-editorial-accent text-white">
                  large-v3-turbo
                </span>
              </div>
            </div>
          </article>

          {/* Step 03 */}
          <article className="bg-editorial-surface border border-editorial-line rounded-2xl p-6 min-h-[260px] flex flex-col">
            <div className="ed-label">STEP 03</div>
            <h3 className="font-serif text-[24px] leading-[1.1] mt-3.5 mb-2.5">
              Set your hotkey
            </h3>
            <p className="text-editorial-ink-2 text-sm leading-[1.55] mb-4">
              Toggle or push-to-talk. Works globally in any app, any text field,
              any time.
            </p>
            <div className="mt-auto min-h-[92px] flex items-end">
              <div className="flex gap-1.5">
                <span className="ed-kbd">⌘</span>
                <span className="ed-kbd">⇧</span>
                <span className="ed-kbd">Space</span>
              </div>
            </div>
          </article>

          {/* Step 04 */}
          <article className="bg-editorial-surface border border-editorial-line rounded-2xl p-6 min-h-[260px] flex flex-col">
            <div className="ed-label">STEP 04</div>
            <h3 className="font-serif text-[24px] leading-[1.1] mt-3.5 mb-2.5">
              Speak &amp; ship
            </h3>
            <p className="text-editorial-ink-2 text-sm leading-[1.55] mb-4">
              Hold the key, talk. Release. Polished text lands where your cursor
              is.
            </p>
            <div className="mt-auto min-h-[92px] flex items-end">
              <span className="font-serif italic text-editorial-ink-2 text-sm">
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
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
