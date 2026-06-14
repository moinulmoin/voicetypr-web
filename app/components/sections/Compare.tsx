const comparisons = [
  ['Price', '$80–$180 / year', 'from $39 once'],
  ['Default workflow', 'new editor, cloud account, or subscription tier', 'hotkey into the app you already use'],
  ['Platforms', 'often single-OS or subscription-first', 'macOS + Windows'],
  ['Audio privacy', 'often uploaded or synced to cloud', 'transcribed on your machine by default'],
  ['Offline-first dictation', 'offline support varies by tool and plan', 'on-device dictation by default'],
  ['Lifetime updates', 'subscription or paid upgrades', 'included'],
] as const;

export default function Compare() {
  return (
    <section className="ed-section !pt-20 !pb-28 bg-white/35" id="compare">
      <div className="ed-container">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Why <em>Voicetypr</em>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-editorial-ink-2">
            A side-by-side look at price, privacy, platforms, and workflow.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-editorial-line bg-white shadow-sm">
          <div className="md:hidden">
            {comparisons.map(([label, oldWay, voiceTypr]) => (
              <article key={label} className="border-b border-editorial-line p-5 last:border-b-0">
                <div className="text-xs font-medium uppercase tracking-widest text-editorial-ink-3">
                  {label}
                </div>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-xl border border-editorial-line bg-editorial-surface-2 p-4">
                    <div className="text-[11px] font-medium uppercase tracking-widest text-editorial-ink-3">
                      Typical dictation app
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-editorial-ink-2">
                      {oldWay}
                    </p>
                  </div>
                  <div className="rounded-xl bg-editorial-ink p-4 text-white dark:bg-[#0a0a0b] dark:border dark:border-white/8">
                    <div className="text-[11px] font-medium uppercase tracking-widest text-white/62">
                      Voicetypr
                    </div>
                    <p className="mt-2 text-sm font-medium leading-relaxed">
                      {voiceTypr}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-[0.9fr_1fr_1fr] border-b border-editorial-line text-xs font-medium uppercase tracking-widest text-editorial-ink-3">
              <div className="bg-editorial-surface-2 px-5 py-4">Criterion</div>
              <div className="border-l border-editorial-line px-5 py-4">Typical dictation app</div>
              <div className="border-l border-editorial-line bg-editorial-ink px-5 py-4 text-white/76 dark:bg-[#0a0a0b] dark:border-l dark:border-white/8">Voicetypr</div>
            </div>
            {comparisons.map(([label, oldWay, voiceTypr]) => (
              <div key={label} className="grid grid-cols-[0.9fr_1fr_1fr] border-b border-editorial-line last:border-b-0">
                <div className="bg-editorial-surface-2 px-5 py-4 text-sm font-medium text-editorial-ink">
                  {label}
                </div>
                <div className="border-l border-editorial-line px-5 py-4 text-sm leading-relaxed text-editorial-ink-2">
                  {oldWay}
                </div>
                <div className="border-l border-editorial-line bg-editorial-ink px-5 py-4 text-sm font-medium leading-relaxed text-white dark:bg-[#0a0a0b]">
                  {voiceTypr}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
