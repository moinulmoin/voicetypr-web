const comparisons = [
  ['Price', '$80–$180 / year', 'from $39 once'],
  ['Platforms', 'many tools are single-OS or subscription-first', 'macOS + Windows'],
  ['Works offline', 'offline support varies by tool and plan', 'local transcription by default'],
  ['Audio privacy', 'uploaded or synced to cloud', 'never leaves device'],
  ['Lifetime updates', 'subscription or paid upgrades', 'included'],
  ['Model footprint', 'cloud-hosted or 1–4 GB', '~140 MB–3 GB'],
];

export default function Compare() {
  return (
    <section className="ed-section">
      <div className="ed-container">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Pay once. Keep your money
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-editorial-ink-2">
            The point is not only cheaper pricing. It is owning a local workflow that keeps working everywhere you type.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-editorial-line bg-white shadow-sm">
          <div className="grid grid-cols-[0.9fr_1fr_1fr] border-b border-editorial-line text-xs font-medium uppercase tracking-widest text-editorial-ink-3">
            <div className="bg-editorial-surface-2 px-5 py-4">Criterion</div>
            <div className="border-l border-editorial-line px-5 py-4">Typical dictation app</div>
            <div className="border-l border-editorial-line bg-editorial-ink px-5 py-4 text-white/70">VoiceTypr</div>
          </div>
          {comparisons.map(([label, oldWay, voiceTypr]) => (
            <div key={label} className="grid grid-cols-[0.9fr_1fr_1fr] border-b border-editorial-line last:border-b-0">
              <div className="bg-editorial-surface-2 px-5 py-4 text-sm font-medium text-editorial-ink">
                {label}
              </div>
              <div className="border-l border-editorial-line px-5 py-4 text-sm leading-relaxed text-editorial-ink-2">
                {oldWay}
              </div>
              <div className="border-l border-editorial-line bg-editorial-ink px-5 py-4 text-sm font-medium leading-relaxed text-white">
                {voiceTypr}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
