export default function Outcomes() {
  return (
    <section className="ed-section">
      <div className="ed-container">
          <div className="ed-eyebrow">what changes day one</div>
          <h2 className="font-serif text-[clamp(40px,4vw,64px)] leading-[1] max-w-[780px] mt-2 mb-10">
            Talk. Get clean text where your cursor is.
          </h2>

          {/*
            Bento layout: one tall feature card (left, 7 cols) + two smaller
            cards stacked on the right (5 cols). Avoids the 3-equal-card grid
            that was making the section feel templated.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
            {/* Featured — throughput. Bigger numeral, more breathing room. */}
            <article className="lg:col-span-7 bg-editorial-surface rounded-2xl border border-editorial-line p-8 md:p-10 flex flex-col gap-5 min-h-[320px] md:min-h-[360px]">
              <div className="flex items-baseline gap-3">
                <div className="font-serif text-[clamp(72px,8vw,128px)] leading-none text-editorial-accent">
                  5×
                </div>
                <div className="font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3 pb-2">
                  faster than typing
                </div>
              </div>
              <h3 className="font-serif text-[clamp(24px,2.4vw,32px)] leading-[1.12] max-w-[520px]">
                Prompt at speaking speed.
              </h3>
              <p className="text-editorial-ink-2 text-[15.5px] leading-[1.6] max-w-[540px]">
                Your brain runs at ~400 wpm. Your fingers manage 60–80. Voice
                closes that gap. ChatGPT, Claude, Cursor, the spec you keep
                putting off, the Slack reply you keep rewriting — at the speed
                you actually think.
              </p>
              <div className="mt-auto grid grid-cols-3 gap-4 pt-6">
                <div>
                  <div className="font-serif text-[26px] leading-none text-editorial-ink mb-1.5">
                    150
                  </div>
                  <div className="font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3">
                    wpm dictating
                  </div>
                </div>
                <div>
                  <div className="font-serif text-[26px] leading-none text-editorial-ink mb-1.5">
                    &lt;2s
                  </div>
                  <div className="font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3">
                    capture latency
                  </div>
                </div>
                <div>
                  <div className="font-serif text-[26px] leading-none text-editorial-ink mb-1.5">
                    1
                  </div>
                  <div className="font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3">
                    hotkey
                  </div>
                </div>
              </div>
            </article>

            {/* Right column: two stacked smaller cards */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-5 md:gap-6">
              {/* Privacy */}
              <article className="bg-editorial-surface rounded-2xl border border-editorial-line p-7 flex flex-col gap-3 min-h-[160px]">
                <div className="flex items-center justify-between">
                  <div className="font-serif text-[44px] leading-none text-editorial-accent">
                    0
                  </div>
                  <span className="font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3">
                    100% offline
                  </span>
                </div>
                <h3 className="font-serif text-[20px] leading-[1.15]">
                  Audio never leaves your machine.
                </h3>
                <p className="text-editorial-ink-2 text-[14px] leading-[1.55]">
                  Local models do the work on-device. No cloud, no logs, no
                  &ldquo;we may use your data to improve the service.&rdquo;
                </p>
              </article>

              {/* Reach */}
              <article className="bg-editorial-surface rounded-2xl border border-editorial-line p-7 flex flex-col gap-3 min-h-[160px]">
                <div className="flex items-center justify-between">
                  <div className="font-serif text-[44px] leading-none text-editorial-accent">
                    ∞
                  </div>
                  <span className="font-sans font-medium uppercase tracking-[0.12em] text-[12px] text-editorial-ink-3">
                    any text field
                  </span>
                </div>
                <h3 className="font-serif text-[20px] leading-[1.15]">
                  Works where your cursor is.
                </h3>
                <p className="text-editorial-ink-2 text-[14px] leading-[1.55]">
                  Cursor, Notion, Slack, VS Code, Linear, Gmail, Discord, Figma
                  comments, even that legacy Jira textarea.
                </p>
              </article>
            </div>
          </div>
      </div>
    </section>
  );
}
