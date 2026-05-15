const iconClass = 'h-4 w-4';

const steps = [
  {
    label: '01',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path fill="currentColor" d="M11 3h2v9.17l3.59-3.58L18 10l-6 6-6-6 1.41-1.41L11 12.17V3Zm-6 14h2v2h10v-2h2v4H5v-4Z" />
      </svg>
    ),
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
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path fill="currentColor" d="M9 3h6v2h2a2 2 0 0 1 2 2v2h2v2h-2v2h2v2h-2v2a2 2 0 0 1-2 2h-2v2h-2v-2h-2v2H9v-2H7a2 2 0 0 1-2-2v-2H3v-2h2v-2H3V9h2V7a2 2 0 0 1 2-2h2V3Zm-2 4v10h10V7H7Zm3 3h4v4h-4v-4Z" />
      </svg>
    ),
    title: 'Pick a model',
    body: 'Choose speed, accuracy, or Apple Silicon performance. You can switch per session.',
    artifact: (
      <div className="rounded-xl bg-white p-4 text-xs">
        {[
          ['Base', 'fast', 34],
          ['Large v3', 'accurate', 100],
          ['Turbo', 'balanced', 66],
        ].map(([name, meta, width]) => (
          <div key={String(name)} className="mb-3 last:mb-0">
            <div className="mb-1 flex justify-between text-editorial-ink-2">
              <span>{name}</span>
              <span>{meta}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-editorial-surface-2">
              <div className="h-full rounded-full bg-editorial-ink" style={{ width: `${width}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: '03',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path fill="currentColor" d="M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v8h14V8H5Zm2 2h2v2H7v-2Zm3 0h2v2h-2v-2Zm3 0h2v2h-2v-2Zm3 0h1v2h-1v-2Zm-9 4h10v1H7v-1Z" />
      </svg>
    ),
    title: 'Set a hotkey',
    body: 'Toggle or push-to-talk. It works globally in any app, any text field, any time.',
    artifact: (
      <div className="rounded-xl bg-white p-4">
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
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path fill="currentColor" d="M5 4h14v2H5V4Zm0 4h9v2H5V8Zm0 4h7v2H5v-2Zm10.3 1.1 4.95 2.28-2.2 1.08 2.03 3.02-1.66 1.12-2.03-3.02-1.75 1.7.66-6.18Z" />
      </svg>
    ),
    title: 'Speak and paste',
    body: 'Hold the key, talk, release. Clean text lands wherever your cursor already is.',
    artifact: (
      <div className="rounded-xl bg-white p-4">
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
            Install. Pick a model. Set a key. <em>Talk</em>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-editorial-ink-2">
            No cloud account. No onboarding maze. Download, choose the local model you want, and start talking.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-10 right-10 top-4 hidden h-px bg-editorial-line lg:block" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step, index) => (
              <article
                key={step.label}
                className={`flex min-h-96 flex-col rounded-3xl border border-editorial-line bg-white/80 p-6 shadow-sm backdrop-blur lg:relative ${
                  index % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'
                }`}
              >
                <div className="relative z-10 mb-5 inline-flex h-9 items-center gap-2 self-start rounded-full bg-white px-3 text-sm font-medium text-editorial-ink-3 shadow-sm">
                  <span className="text-editorial-ink">{step.icon}</span>
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
      </div>
    </section>
  );
}
