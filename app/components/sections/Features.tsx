import type { ReactNode } from 'react';
import { ClaudeAI, Cursor, Gmail, Notion, OpenAI, Slack } from '@/components/icons';
import { cn } from '@/lib/utils';
import FeatureIdeaForm from './FeatureIdeaForm';

const appTargets = [
  { label: 'Cursor', Icon: Cursor },
  { label: 'ChatGPT', Icon: OpenAI },
  { label: 'Claude', Icon: ClaudeAI },
  { label: 'Gmail', Icon: Gmail },
  { label: 'Notion', Icon: Notion },
  { label: 'Slack', Icon: Slack },
] as const;

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
    label: 'Everywhere',
    title: 'Talk into every app',
    body: 'Dictate into Cursor, ChatGPT, Claude, Slack, Gmail, Notion, docs, and any text field without changing your workflow.',
    wide: true,
    demo: (
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="mb-3 rounded-lg bg-editorial-ink px-3 py-2 text-sm text-white">Paste where cursor is</div>
        <div className="grid gap-2 sm:grid-cols-3">
          {appTargets.map(({ label, Icon }) => (
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
    title: 'Local transcription by default',
    body: 'Your voice is transcribed on your machine with local models by default. Optional formatting is separate and controlled by you.',
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
          ['Whisper Turbo', '1.5 GB'],
          ['Parakeet', '0.6 GB'],
        ].map(([name, size]) => (
          <div key={name} className="flex justify-between border-b border-editorial-line py-2 last:border-0">
            <span className={cn(name === 'Whisper Turbo' && 'font-semibold text-editorial-ink')}>{name}</span>
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
    body: 'Polish rough dictation into cleaner prompts, emails, and everyday writing when you want it.',
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
    body: 'Drop in recordings or video clips and get a transcript without sending anything to the cloud.',
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
    body: 'Keep transcripts on your machine, find them later, copy again, or export what you need.',
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
    title: 'Work in 99+ languages',
    body: 'Speak naturally in English, Spanish, French, German, Italian, Dutch, and many more languages without switching tools.',
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
    body: 'Dictate in your native language and turn it into cleaner text in the language you want to send.',
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
    body: 'Save different writing styles for prompts, emails, notes, and everyday writing so dictated text fits the job.',
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
    body: 'Add product names, client names, acronyms, and phrases you use often so VoiceTypr handles your vocabulary better.',
    status: 'Soon',
    demo: (
      <div className="rounded-xl bg-white p-4 font-mono text-xs text-editorial-ink-2 shadow-sm">
        {['Voicetypr → VoiceTypr', 'MCP', 'Ideaplexa'].map((item) => (
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
    body: 'Set simple replacements for words and phrases that voice models hear wrong, then let VoiceTypr correct them for you.',
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
    body: 'If your laptop is weak, send heavier transcription work to a stronger VoiceTypr computer on your network.',
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
    label: 'AI automation',
    title: 'AI agent automation',
    body: 'Send audio files or voice recordings into VoiceTypr from local AI agent workflows, including OpenClaw and Hermes.',
    status: 'Soon',
    demo: (
      <div className="rounded-xl bg-white p-4 font-mono text-xs text-editorial-ink-2 shadow-sm">
        <div>voicetypr transcribe --file audio.wav</div>
        <div className="mt-2 text-editorial-ink-3">output: text or JSON</div>
      </div>
    ),
  },
  {
    label: 'Mobile',
    title: 'Capture ideas anywhere',
    body: 'We’re exploring mobile apps for quick thoughts, drafts, and voice notes when you’re away from your computer.',
    status: 'Exploring',
    demo: (
      <div className="rounded-xl bg-white p-4 text-xs shadow-sm">
        <div className="mx-auto max-w-28 rounded-[1.25rem] border border-editorial-line bg-editorial-surface-2 p-3">
          <div className="mb-3 h-1.5 w-10 rounded-full bg-editorial-line mx-auto" />
          <div className="space-y-2">
            <div className="rounded-lg bg-white px-3 py-2">Voice note</div>
            <div className="rounded-lg bg-editorial-ink px-3 py-2 font-medium text-white">Save the idea</div>
          </div>
        </div>
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
  'AI agent automation',
  'Mobile capture',
] as const;


export default function Features() {
  return (
    <section className="ed-section ed-section-wash" id="features">
      <div className="ed-container">
        <div className="max-w-3xl">
          <h2 className="text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            What&apos;s included
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-editorial-ink-2">
            Talk into any app, pick your model, use your own hotkey, and get clean text where your cursor is.
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
          <div className="rounded-3xl border border-editorial-ink bg-editorial-ink p-6 text-white shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/55">
              Coming next
            </p>
            <h3 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight !text-white">
              What we&apos;re building next
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/68">
              The core app is already live. These are extras on the way.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-white/78">
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
              Have a workflow VoiceTypr does not handle yet? Send the use case and we will use real requests to decide what ships next.
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
