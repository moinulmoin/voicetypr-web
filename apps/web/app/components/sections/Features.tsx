import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { FEATURED_APPS } from '@/lib/constants';
import FeatureIdeaForm from './FeatureIdeaForm';

type FeatureCard = {
  label: string;
  title: string;
  body: string;
  demo: ReactNode;
  wide?: boolean;
  status?: string;
};

const featureCards: FeatureCard[] = [
  {
    label: 'Anywhere',
    title: 'Talk into every app',
    body: 'Dictate into Gmail, Slack, Notion, Google Docs, and more — plus ChatGPT, Claude, and Cursor when you use them. Any box where you type. Nothing to install per app.',
    wide: true,
    demo: (
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="mb-3 rounded-lg bg-editorial-ink px-3 py-2 text-sm text-white">Paste where you&apos;re typing</div>
        <div className="grid gap-2 sm:grid-cols-3">
          {FEATURED_APPS.map(({ label, Icon }) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-md border border-editorial-line bg-editorial-surface-2 px-3 py-2 text-xs font-medium text-editorial-ink-2"
            >
              <Icon className="h-3.5 w-3.5 shrink-0" />
              <span>{label}</span>
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: 'Privacy',
    title: 'Fast, private, offline-first',
    body: 'Speech becomes text on your Mac or PC. Your audio stays on your machine by default — not sent to the cloud.',
    demo: (
      <div className="rounded-xl bg-white p-4 text-sm shadow-sm">
        {[
          ['Processing', 'On-device'],
          ['Model', 'Local'],
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
    title: 'Pick your engine',
    body: 'On-device models like Whisper and Parakeet handle transcription. Want polished text? Optionally connect a cloud AI you already use — or skip the cloud entirely.',
    demo: (
      <div className="rounded-xl bg-white p-4 text-xs shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-medium">Model picker</span>
          <span className="rounded-md bg-editorial-ink px-2 py-1 text-white">Turbo</span>
        </div>
        {[
          ['Base', '142 MB'],
          ['Turbo', '1.5 GB'],
          ['Compact', '0.6 GB'],
        ].map(([name, size]) => (
          <div key={name} className="flex justify-between border-b border-editorial-line py-2 last:border-0">
            <span className={cn(name === 'Turbo' && 'font-semibold text-editorial-ink')}>{name}</span>
            <span className="font-mono text-editorial-ink-3">{size}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Hotkeys',
    title: 'Push, toggle, or remap',
    body: 'Hold to record, tap to toggle, or bind dictation to any shortcut your fingers already know — works system-wide.',
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
    title: 'Cleaner text when you need it',
    body: 'Turn rough dictation into polished prompts, emails, and everyday writing when you need clean output.',
    demo: (
      <div className="space-y-3 rounded-xl bg-white p-4 shadow-sm">
        <div className="flex flex-wrap gap-2">
          {['Default', 'Prompts', 'Email'].map((mode, index) => (
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
    title: 'Transcribe audio and video',
    body: 'Drop in recordings or video clips and get a transcript processed on your machine — no cloud transcription service in the loop.',
    demo: (
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="rounded-xl border border-dashed border-editorial-line bg-editorial-surface-2 p-4 font-mono text-xs text-editorial-ink-2">
          wav · mp3 · m4a · flac · mp4 · webm
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-editorial-ink-3">
          <span>Local transcription</span>
          <span className="font-mono">00:18</span>
        </div>
      </div>
    ),
  },
  {
    label: 'History',
    title: 'Search, copy, export',
    body: 'Every transcript stays on your machine. Search, re-copy, or export what you need.',
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
  {
    label: 'Languages',
    title: 'Dictation in 99+ languages',
    body: 'Speak naturally in English, Spanish, French, German, Italian, Portuguese, Hindi, Arabic, Japanese, and more — without switching tools.',
    demo: (
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="mb-3 text-xs font-medium uppercase tracking-widest text-editorial-ink-3">
          Popular languages
        </div>
        <div className="flex flex-wrap gap-2">
          {['English', 'Spanish', 'French', 'German', 'Italian', 'Dutch'].map((language) => (
            <span
              key={language}
              className="rounded-md border border-editorial-line bg-editorial-surface-2 px-3 py-1.5 text-xs font-medium text-editorial-ink-2"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: 'Translation',
    title: 'Speak in your language, write in theirs',
    body: 'Speak in your language. Paste in theirs — translation built in.',
    status: 'Soon',
    demo: (
      <div className="space-y-3 rounded-xl bg-white p-4 text-xs shadow-sm">
        <div className="rounded-lg bg-editorial-surface-2 px-3 py-2">
          Speak: Spanish
        </div>
        <div className="text-center text-editorial-ink-3">↓</div>
        <div className="rounded-lg bg-editorial-ink px-3 py-2 font-medium text-white">
          Send: English
        </div>
      </div>
    ),
  },
  {
    label: 'Writing profile',
    title: 'Write in the right style',
    body: 'Save writing presets for prompts, emails, and notes. Dictate once, get text that already sounds right for the job.',
    status: 'Soon',
    demo: (
      <div className="space-y-2 rounded-xl bg-white p-4 text-xs shadow-sm">
        {['Prompt mode', 'Email mode', 'Notes mode'].map((item) => (
          <div key={item} className="rounded-lg bg-editorial-surface-2 px-3 py-2">
            {item}
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Vocabulary',
    title: 'Teach it your words',
    body: 'Add product names, acronyms, and phrases you use daily so the transcription gets them right every time.',
    status: 'Soon',
    demo: (
      <div className="rounded-xl bg-white p-4 font-mono text-xs text-editorial-ink-2 shadow-sm">
        {['Voicetypr → Voicetypr', 'Newsletter', 'Ideaplexa'].map((item) => (
          <div key={item} className="border-b border-editorial-line py-2 last:border-0">
            {item}
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Replacements',
    title: 'Fix repeated mistakes automatically',
    body: 'Set replacements for words and phrases the model often mishears. Voicetypr swaps them before pasting.',
    status: 'Soon',
    demo: (
      <div className="rounded-xl bg-white p-4 text-xs shadow-sm">
        <div className="rounded-lg bg-editorial-surface-2 px-3 py-2">
          wrong phrase → right phrase
        </div>
      </div>
    ),
  },
  {
    label: 'Snippets',
    title: 'Reuse text you say often',
    body: 'Turn repeated intros, replies, signatures, and support phrases into reusable snippets you can trigger while writing.',
    status: 'Soon',
    demo: (
      <div className="space-y-2 rounded-xl bg-white p-4 text-xs shadow-sm">
        {['Meeting follow-up', 'Support reply', 'Prompt template'].map((item) => (
          <div key={item} className="flex justify-between rounded-lg bg-editorial-surface-2 px-3 py-2">
            <span>{item}</span>
            <span className="font-medium text-editorial-ink">snippet</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Remote',
    title: 'Use a stronger machine on your Wi‑Fi',
    body: 'Offload heavy transcription to a desktop or server on your local network. Your laptop stays fast.',
    status: 'Soon',
    demo: (
      <div className="rounded-xl bg-white p-4 text-xs shadow-sm">
        <div className="flex items-center justify-between rounded-lg bg-editorial-surface-2 px-3 py-2">
          <span>MacBook Air</span>
          <span>→</span>
          <span className="font-medium text-editorial-ink">Desktop GPU</span>
        </div>
        <div className="mt-3 rounded-lg border border-editorial-line px-3 py-2 text-editorial-ink-2">
          Share transcription on your Wi‑Fi
        </div>
      </div>
    ),
  },
  {
    label: 'AI Agents & Automation',
    title: 'AI Agents & Automation',
    body: 'CLI and API access so you can trigger transcription from your own scripts, AI agents, or automation tools.',
    status: 'Soon',
    demo: (
      <div className="rounded-xl bg-white p-4 font-mono text-xs text-editorial-ink-2 shadow-sm">
        <div>voicetypr transcribe --file audio.wav</div>
        <div className="mt-2 text-editorial-ink-3">output: text or JSON</div>
      </div>
    ),
  },

  {
    label: 'Your ideas',
    title: 'Want something else?',
    body: 'Have a feature idea that would make voice writing better? Tell us what slows you down, and we’ll use real workflows to shape what comes next.',
    demo: <FeatureIdeaForm />,
  },
] as const;
const roadmapLabels = [
  'Voice translation',
  'Writing profiles',
  'Custom vocabulary',
  'Text replacements',
  'Reusable snippets',
  'Stronger machine on your network',
  'AI Agents & Automation',
] as const;


export default function Features() {
  return (
    <section className="ed-section ed-section-wash" id="features">
      <div className="ed-container">
        <div className="max-w-3xl">
          <h2 className="text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            What&apos;s <em>included</em>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-editorial-ink-2">
            Dictate into any app. Set a hotkey. Get clean text pasted where you&apos;re typing.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 divide-editorial-line overflow-hidden rounded-3xl border border-editorial-line md:grid-cols-2 md:divide-x lg:grid-cols-3">
          {featureCards.map((feature) => {
            if (feature.status || feature.label === 'Your ideas') return null;

            return (
              <article
                key={feature.title}
                className={cn(
                  'flex min-h-80 flex-col border-b border-editorial-line bg-white p-6',
                  feature.wide && 'lg:col-span-2',
                )}
              >
                <div className="mb-8 flex flex-wrap items-center gap-2 self-start">
                  <span className="rounded-md bg-editorial-surface-2 px-2.5 py-1 text-xs font-medium uppercase tracking-widest text-editorial-ink-3">
                    {feature.label}
                  </span>
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
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-editorial-ink bg-editorial-ink p-6 text-white shadow-sm md:p-8 dark:border-white/14">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/62">
              Coming next
            </p>
            <h3 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight !text-white">
              What we&apos;re building next
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/76">
              We’re shipping powerful new capabilities that make Voicetypr much stronger.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-white/86">
              {roadmapLabels.map((feature) => (
                <li key={feature} className="rounded-full border border-white/14 bg-white/8 px-3 py-1.5">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-editorial-line bg-white/86 p-6 shadow-sm backdrop-blur md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-editorial-ink-3">
              Help shape the roadmap
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-editorial-ink">
              Tell us what slows down your writing
            </h3>
            <p className="mt-3 text-base leading-relaxed text-editorial-ink-2">
              Have a workflow Voicetypr does not handle yet? Send the use case and we will use real requests to decide what ships next.
            </p>
            <div className="mt-6">
              <FeatureIdeaForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
