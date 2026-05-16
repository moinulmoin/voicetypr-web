const workflowChips = [
  'Prompt faster',
  'Reply cleaner',
  'Capture specs',
  'Dictate notes',
  'Ship thoughts',
  'Stop rewriting',
];

export default function Outcomes() {
  return (
    <section className="ed-section">
      <div className="ed-container">
        <div className="max-w-3xl">
          <h2 className="text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Get clean text where your cursor is
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-editorial-ink-2">
            Stop rewriting the same thought by hand. VoiceTypr turns speech into usable text in the apps you already use.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-4 lg:grid-cols-3">
          <article className="rounded-3xl border border-editorial-line bg-white/80 p-6 shadow-sm backdrop-blur lg:col-span-2">
            <h3 className="text-2xl font-semibold tracking-tight text-editorial-ink">
              Prompt at speaking speed
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-editorial-ink-2">
              Your brain runs faster than your fingers. Capture the thought, clean it up, and paste it without switching tools.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-5">
              <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-editorial-line text-sm">
                <div className="bg-editorial-ink p-4 text-white">
                  <div className="text-3xl font-semibold">150</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/70">dictating</div>
                </div>
                <div className="border-l border-editorial-line bg-editorial-surface-2 p-4">
                  <div className="text-3xl font-semibold">less</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-editorial-ink-3">typing</div>
                </div>
                <div className="border-l border-editorial-line bg-editorial-surface-2 p-4">
                  <div className="text-3xl font-semibold">1</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-editorial-ink-3">hotkey</div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="h-2 overflow-hidden rounded-full bg-editorial-surface-2">
                  <div className="h-full w-1/3 rounded-full bg-editorial-line-2" />
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-editorial-surface-2">
                  <div className="h-full w-2/3 rounded-full bg-editorial-line-2" />
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-editorial-surface-2">
                  <div className="h-full w-full rounded-full bg-editorial-ink" />
                </div>
              </div>
            </div>

          </article>
          <article className="rounded-3xl border border-editorial-line bg-white/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-2xl font-semibold tracking-tight text-editorial-ink">
              Every text field works
            </h3>
            <p className="mt-3 text-base leading-relaxed text-editorial-ink-2">
              ChatGPT, Claude, Cursor, Slack, Notion, Gmail, or a legacy Jira textarea.
            </p>
            <div className="mt-8 rounded-2xl bg-white p-5">
              <div className="mb-4 rounded-xl bg-editorial-ink px-4 py-3 text-sm font-medium text-white">
                Draft this reply in my voice.
              </div>
              <div className="rounded-xl bg-editorial-surface-2 px-4 py-3 text-sm leading-relaxed text-editorial-ink-2">
                Sure — here&apos;s a clean version ready to paste where your cursor is.
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-editorial-line bg-white/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-xl font-semibold tracking-tight text-editorial-ink">
              Privacy by default
            </h3>
            <p className="mt-3 text-base leading-relaxed text-editorial-ink-2">
              Your voice is transcribed on your machine by default.
            </p>
            <div className="mt-6 rounded-2xl border border-editorial-line bg-editorial-surface-2 p-4 text-sm">
              <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                privacy check
              </div>
              <div className="rounded-xl bg-white px-4 py-1">
                <div className="flex justify-between border-b border-editorial-line py-3">
                  <span>Voice transcription</span>
                  <strong>On-device by default</strong>
                </div>
                <div className="flex justify-between py-3">
                  <span>Mode</span>
                  <strong>Local</strong>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-editorial-line bg-white/80 px-6 py-5 shadow-sm backdrop-blur lg:col-span-2">
            <h3 className="text-xl font-semibold tracking-tight text-editorial-ink">
              Fewer half-written thoughts
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-editorial-ink-2">
              Less typing friction, fewer abandoned drafts, and cleaner output while the idea is still fresh.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {workflowChips.map((chip) => (
                <div
                  key={chip}
                  className="rounded-full border border-editorial-line bg-editorial-surface-2 px-4 py-2 text-sm font-medium text-editorial-ink-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]"
                >
                  {chip}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
