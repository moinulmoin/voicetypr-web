import { cn } from '@/lib/utils';

const featureCards = [
  {
    label: 'Everywhere',
    title: 'Every app that takes a cursor',
    body: 'Dictate into Cursor, ChatGPT, Claude, Slack, Gmail, Notion, VS Code, and old textareas without changing your workflow.',
    wide: true,
    demo: (
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="mb-3 rounded-lg bg-editorial-ink px-3 py-2 text-sm text-white">Paste where cursor is</div>
        <div className="grid gap-2 sm:grid-cols-3">
          {['Cursor', 'Claude', 'Gmail', 'Notion', 'Slack', 'VS Code'].map((app) => (
            <span key={app} className="rounded-md border border-editorial-line bg-editorial-surface-2 px-3 py-2 text-xs font-medium text-editorial-ink-2">
              {app}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: 'Privacy',
    title: 'Audio stays local',
    body: 'Whisper and Parakeet models run on your machine. Optional AI cleanup sends text only when you choose it.',
    demo: (
      <div className="rounded-xl bg-white p-4 text-sm shadow-sm">
        {[
          ['Audio uploaded', '0 bytes'],
          ['Account required', 'No'],
          ['Transcription', 'Local'],
        ].map(([name, value]) => (
          <div key={name} className="flex justify-between border-b border-editorial-line py-3 first:pt-0 last:border-0 last:pb-0">
            <span>{name}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Models',
    title: 'Pick speed or accuracy',
    body: 'Switch between small fast models and larger accurate models per session, not per subscription tier.',
    demo: (
      <div className="rounded-xl bg-white p-4 text-xs shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-medium">Model picker</span>
          <span className="rounded-md bg-editorial-ink px-2 py-1 text-white">Turbo</span>
        </div>
        {[
          ['Whisper Base', '142 MB'],
          ['Whisper Large v3', '2.9 GB'],
          ['Whisper Turbo', '1.5 GB'],
          ['Parakeet', '0.6 GB'],
        ].map(([name, size], index) => (
          <div key={name} className="flex justify-between border-b border-editorial-line py-2 last:border-0">
            <span className={cn(index === 2 && 'font-semibold text-editorial-ink')}>{name}</span>
            <span className="font-mono text-editorial-ink-3">{size}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Hotkeys',
    title: 'Push, toggle, or remap',
    body: 'Hold to record, tap to toggle, or bind dictation to the shortcut your fingers already know.',
    demo: (
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="mb-4 text-xs font-medium uppercase tracking-widest text-editorial-ink-3">Current shortcut</div>
        <div className="flex items-center gap-2">
          {['⌘', '⇧', 'Space'].map((key) => (
            <kbd key={key} className="rounded-lg border border-b-2 border-editorial-line bg-editorial-surface-2 px-4 py-3 font-mono text-sm text-editorial-ink shadow-sm">
              {key}
            </kbd>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: 'Formatting',
    title: 'Cleaner text when you want it',
    body: 'Use your own API key for prompt, email, commit, and default cleanup presets. Turn it off to stay fully offline.',
    demo: (
      <div className="space-y-3 rounded-xl bg-white p-4 shadow-sm">
        <div className="flex flex-wrap gap-2">
          {['Default', 'Prompts', 'Email', 'Commit'].map((mode, index) => (
            <span
              key={mode}
              className={cn(
                'rounded-md border px-3 py-1.5 text-xs font-medium',
                index === 1
                  ? 'border-editorial-ink bg-editorial-ink text-white'
                  : 'border-editorial-line bg-editorial-surface-2 text-editorial-ink-2',
              )}
            >
              {mode}
            </span>
          ))}
        </div>
        <div className="rounded-lg bg-editorial-surface-2 p-3 text-sm leading-relaxed text-editorial-ink-2">
          “Turn this rough thought into a clean Cursor prompt.”
        </div>
      </div>
    ),
  },
  {
    label: 'Files',
    title: 'Drop in audio or video',
    body: 'Transcribe recordings locally from common audio and video formats without uploading them to a cloud service.',
    demo: (
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="rounded-xl border border-dashed border-editorial-line bg-editorial-surface-2 p-4 font-mono text-xs text-editorial-ink-2">
          wav · mp3 · m4a · flac · mp4 · webm
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-editorial-ink-3">
          <span>Processing locally</span>
          <span className="font-mono">00:18</span>
        </div>
      </div>
    ),
  },
  {
    label: 'History',
    title: 'Search, copy, export',
    body: 'Keep previous transcripts on your machine, find them later, copy again, or export when you need a record.',
    wide: true,
    demo: (
      <div className="rounded-xl bg-white p-4 font-mono text-xs text-editorial-ink-2 shadow-sm">
        {['search history', 'copy last transcript', 'export local JSON'].map((item) => (
          <div key={item} className="flex justify-between border-b border-editorial-line py-2 last:border-0">
            <span>→ {item}</span>
            <span>local</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section className="ed-section ed-section-wash" id="features">
      <div className="ed-container">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <h2 className="text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
              The daily tools, without the daily rental.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-editorial-ink-2 lg:justify-self-end">
            Local transcription, model choice, formatting presets, file upload, and every-app paste in one calm desktop utility.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className={cn(
                'flex min-h-80 flex-col rounded-2xl border border-editorial-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md',
                feature.wide && 'lg:col-span-2',
              )}
            >
              <div className="mb-8 inline-flex self-start rounded-md border border-editorial-line bg-editorial-surface-2 px-2.5 py-1 text-xs font-medium uppercase tracking-widest text-editorial-ink-3">
                {feature.label}
              </div>
              <div>
                <h3 className="max-w-md text-2xl font-semibold leading-tight tracking-tight text-editorial-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-editorial-ink-2">
                  {feature.body}
                </p>
              </div>

              <div className="mt-auto pt-8">
                <div className="rounded-2xl bg-editorial-surface-2 p-5">
                  {feature.demo}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
