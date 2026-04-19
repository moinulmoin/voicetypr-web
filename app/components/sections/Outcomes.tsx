export default function Outcomes() {
  return (
    <section className="ed-section">
      <div className="ed-container">
        <div className="bg-editorial-surface-2 rounded-[28px] p-10 md:p-14">
          <div className="ed-eyebrow">why founders keep it open all day</div>
          <h2
            className="font-serif text-[clamp(40px,4vw,64px)] leading-[1] max-w-[780px] mt-2 mb-10"
          >
            The things you didn&apos;t have time to write, you now have time to
            send.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-editorial-surface rounded-2xl border border-editorial-line p-7 flex flex-col gap-3.5 min-h-[240px]">
              <div className="font-serif text-[44px] leading-none text-editorial-accent">
                5×
              </div>
              <h3 className="font-serif text-[22px] leading-[1.15]">
                Prompt at speaking speed
              </h3>
              <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
                Your brain thinks at 400 wpm. Your fingers move at 60. Close the
                gap. ChatGPT, Claude, Cursor, specs, replies, all at the speed
                you actually talk.
              </p>
              <div className="mt-auto pt-3.5 border-t border-dashed border-editorial-line font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3">
                Outcome · throughput
              </div>
            </article>

            <article className="bg-editorial-surface rounded-2xl border border-editorial-line p-7 flex flex-col gap-3.5 min-h-[240px]">
              <div className="font-serif text-[44px] leading-none text-editorial-accent">
                0
              </div>
              <h3 className="font-serif text-[22px] leading-[1.15]">
                Audio never leaves your machine
              </h3>
              <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
                Whisper models run on-device. No cloud, no logs, no &ldquo;we
                may use your data to improve the service.&rdquo; Your
                half-formed ideas stay yours.
              </p>
              <div className="mt-auto pt-3.5 border-t border-dashed border-editorial-line font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3">
                Outcome · privacy
              </div>
            </article>

            <article className="bg-editorial-surface rounded-2xl border border-editorial-line p-7 flex flex-col gap-3.5 min-h-[240px]">
              <div className="font-serif text-[44px] leading-none text-editorial-accent">
                ∞
              </div>
              <h3 className="font-serif text-[22px] leading-[1.15]">
                Works where your cursor is
              </h3>
              <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
                Cursor, Notion, Slack, VS Code, Linear, Gmail, Discord, Figma
                comments, even that legacy Jira textarea. If you can click in
                it, you can talk into it.
              </p>
              <div className="mt-auto pt-3.5 border-t border-dashed border-editorial-line font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3">
                Outcome · reach
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
