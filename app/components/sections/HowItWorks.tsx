const steps = [
  {
    label: '01',
    title: 'Install VoiceTypr',
    body: 'Download the Mac or Windows app. Apple Silicon, Intel, and Windows 10+ are supported.',
    artifact: (
      <div className="space-y-2 rounded-xl bg-white p-4 text-sm shadow-sm">
        <div className="flex items-center justify-between border-b border-editorial-line pb-2">
          <span>macOS</span>
          <span className="rounded-full bg-editorial-surface-2 px-2 py-1 text-xs">ready</span>
        </div>
        <div className="flex items-center justify-between pt-1">
          <span>Windows</span>
          <span className="rounded-full bg-editorial-surface-2 px-2 py-1 text-xs">ready</span>
        </div>
      </div>
    ),
  },
  {
    label: '02',
    title: 'Pick a model',
    body: 'Choose speed, accuracy, or Apple Silicon performance. You can switch per session.',
    artifact: (
      <div className="rounded-xl bg-white p-4 text-xs shadow-sm">
        {[
          ['Base', 'fast', 'w-1/3'],
          ['Large v3', 'accurate', 'w-full'],
          ['Turbo', 'balanced', 'w-2/3'],
        ].map(([name, meta, width]) => (
          <div key={name} className="mb-3 last:mb-0">
            <div className="mb-1 flex justify-between text-editorial-ink-2">
              <span>{name}</span>
              <span>{meta}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-editorial-surface-2">
              <div className={`${width} h-full rounded-full bg-editorial-ink`} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: '03',
    title: 'Set a hotkey',
    body: 'Toggle or push-to-talk. It works globally in any app, any text field, any time.',
    artifact: (
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="mb-3 text-xs uppercase tracking-widest text-editorial-ink-3">global shortcut</div>
        <div className="flex gap-2">
          {['⌘', '⇧', 'Space'].map((key) => (
            <span key={key} className="rounded-lg border border-b-2 border-editorial-line bg-editorial-surface-2 px-4 py-3 font-mono text-sm">
              {key}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: '04',
    title: 'Speak and paste',
    body: 'Hold the key, talk, release. Clean text lands wherever your cursor already is.',
    artifact: (
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="mb-2 rounded-lg bg-editorial-ink px-3 py-2 text-sm text-white">Raw voice</div>
        <div className="rounded-lg bg-editorial-surface-2 px-3 py-2 text-sm text-editorial-ink-2">
          Let&apos;s ship Tuesday and iterate from there.
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="ed-section" id="how-it-works">
      <div className="ed-container">
        <div className="max-w-3xl">
          <h2 className="text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Install. Pick a model. Set a key. Talk.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-editorial-ink-2">
            No cloud account. No onboarding maze. Download, choose the local model you want, and start talking.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.label} className="flex min-h-96 flex-col rounded-2xl border border-editorial-line bg-editorial-surface-2 p-6 shadow-sm">
              <div className="mb-5 inline-flex h-8 w-12 items-center justify-center rounded-full border border-editorial-line bg-white text-sm font-medium text-editorial-ink-3 shadow-sm">
                {step.label}
              </div>
              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-editorial-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-editorial-ink-2">
                {step.body}
              </p>
              <div className="mt-auto pt-8">{step.artifact}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
