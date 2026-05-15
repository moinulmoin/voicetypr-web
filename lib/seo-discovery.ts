export type DiscoveryLink = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
};

export type ProofTrack = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  href: string;
  linkLabel: string;
  quote?: string;
  quoteAttribution?: string;
};

export const homepageDiscoveryLinks: DiscoveryLink[] = [
  {
    href: '/best/windows-voice-typing',
    eyebrow: 'windows',
    title: 'Windows voice typing',
    description:
      'The straight answer for people comparing built-in Windows dictation, Dragon, and newer local tools.',
    ctaLabel: 'See the Windows guide',
  },
  {
    href: '/offline-dictation-app-for-windows',
    eyebrow: 'private by default',
    title: 'Offline dictation for Windows',
    description:
      'For people who want raw audio to stay on their own machine during transcription.',
    ctaLabel: 'See the offline page',
  },
  {
    href: '/best/accessible-dictation',
    eyebrow: 'type less',
    title: 'Accessible dictation',
    description:
      'A cleaner path for people dealing with typing pain, fatigue, dyslexia, ADHD, or motor friction.',
    ctaLabel: 'See the accessibility guide',
  },
  {
    href: '/use-cases/carpal-tunnel',
    eyebrow: 'typing load',
    title: 'Carpal tunnel and hand pain',
    description:
      'For people who need to reduce typing load because hands, wrists, or energy are the bottleneck.',
    ctaLabel: 'See the use case',
  },
];

export const homepageProofTracks: ProofTrack[] = [
  {
    eyebrow: 'for Windows',
    title: 'Windows support should feel real, not bolted on',
    body:
      'VoiceTypr is built for Windows users who need dictation in real desktop work: Word, Outlook, browsers, coding tools, support queues, and normal text fields.',
    bullets: [
      'Windows 10+ support is first-class, not a side note',
      'Works in Cursor, VS Code, Word, Gmail, Slack, and normal text fields',
      'Local transcription matters when prompts, work notes, and customer replies are private',
    ],
    href: '/best/windows-voice-typing',
    linkLabel: 'Read the Windows guide',
    quote:
      'I needed something that works on both Mac and Windows. One payment, no ongoing costs, exactly what I was looking for.',
    quoteAttribution: 'Catherine E. · switched from Wispr Flow',
  },
  {
    eyebrow: 'for typing pain',
    title: 'When typing is the problem, the promise is simpler: type less',
    body:
      'People dealing with RSI, carpal tunnel, dyslexia, ADHD, fatigue, or motor challenges need fewer keystrokes, less friction, and a tool that works in the apps they already use.',
    bullets: [
      'VoiceTypr is for turning speech into text, not forcing a new writing app',
      'The cursor is the integration, which matters more than a fancy editor',
      'Pay-once pricing makes the tool easier to keep around',
    ],
    href: '/best/accessible-dictation',
    linkLabel: 'Read the accessibility guide',
  },
];

const relatedGuidesBySlug: Record<string, DiscoveryLink[]> = {
  'mac-dictation': [
    {
      href: '/superwhisper-alternative',
      eyebrow: 'mac alternatives',
      title: 'Superwhisper alternative',
      description: 'For Mac buyers comparing local dictation tools side by side.',
      ctaLabel: 'Compare against Superwhisper',
    },
    {
      href: '/wispr-flow-alternative',
      eyebrow: 'subscription fatigue',
      title: 'Wispr Flow alternative',
      description: 'The pay-once, offline angle for people done with monthly dictation bills.',
      ctaLabel: 'Compare against Wispr Flow',
    },
    {
      href: '/voice-typing',
      eyebrow: 'bigger picture',
      title: 'Voice typing in every app',
      description: 'The broader page for people still deciding what kind of dictation workflow they need.',
      ctaLabel: 'See the general guide',
    },
  ],
  'windows-dictation': [
    {
      href: '/best/windows-voice-typing',
      eyebrow: 'windows',
      title: 'Windows voice typing',
      description: 'A clear roundup for built-in Windows tools, Dragon, and local alternatives.',
      ctaLabel: 'See the Windows guide',
    },
    {
      href: '/alternative/windows-speech-recognition',
      eyebrow: 'replacement path',
      title: 'Windows Speech Recognition alternative',
      description: 'For people trying to figure out what to use after Microsoft moved on from WSR.',
      ctaLabel: 'See the replacement guide',
    },
    {
      href: '/offline-dictation-app-for-windows',
      eyebrow: 'privacy angle',
      title: 'Offline dictation for Windows',
      description: 'A simpler page for people who mostly care about local transcription.',
      ctaLabel: 'See the offline page',
    },
  ],
  'offline-dictation': [
    {
      href: '/offline-dictation-app-for-windows',
      eyebrow: 'windows workflow',
      title: 'Offline dictation for Windows',
      description: 'A direct page for Windows users who want local raw transcription.',
      ctaLabel: 'See the Windows page',
    },
    {
      href: '/best/accessible-dictation',
      eyebrow: 'accessibility',
      title: 'Accessible dictation',
      description: 'Local transcription matters even more when dictation is part of how someone gets work done.',
      ctaLabel: 'See the accessibility guide',
    },
    {
      href: '/use-cases/motor-impairments',
      eyebrow: 'real-world fit',
      title: 'Motor impairments use case',
      description: 'A more honest page for buyers who need dictation as assistive support, not a novelty.',
      ctaLabel: 'See the use case',
    },
  ],
  'windows-voice-typing': [
    {
      href: '/best/windows-speech-to-text',
      eyebrow: 'same buyer, broader keyword',
      title: 'Windows speech-to-text',
      description: 'A parallel page for the broader phrase many Windows buyers still use.',
      ctaLabel: 'See the speech-to-text guide',
    },
    {
      href: '/alternative/windows-speech-recognition',
      eyebrow: 'what to replace',
      title: 'Windows Speech Recognition alternative',
      description: 'Useful when the buyer is really looking for the post-WSR upgrade path.',
      ctaLabel: 'See the replacement guide',
    },
    {
      href: '/use-cases/carpal-tunnel',
      eyebrow: 'why buyers switch',
      title: 'Carpal tunnel use case',
      description: 'Typing pain is one of the clearest reasons Windows buyers start looking for dictation.',
      ctaLabel: 'See the use case',
    },
  ],
  'windows-speech-to-text': [
    {
      href: '/best/windows-voice-typing',
      eyebrow: 'same intent, sharper page',
      title: 'Windows voice typing',
      description: 'A stronger fit for people comparing desktop dictation tools instead of Office-only features.',
      ctaLabel: 'See the voice typing guide',
    },
    {
      href: '/offline-dictation-app-for-windows',
      eyebrow: 'private workflow',
      title: 'Offline dictation for Windows',
      description: 'For buyers who specifically care about local-only transcription.',
      ctaLabel: 'See the offline page',
    },
    {
      href: '/use-cases/motor-impairments',
      eyebrow: 'assistive fit',
      title: 'Motor impairments use case',
      description: 'When speech-to-text is part of how writing gets done.',
      ctaLabel: 'See the use case',
    },
  ],
  'accessible-dictation': [
    {
      href: '/use-cases/rsi',
      eyebrow: 'typing pain',
      title: 'RSI use case',
      description: 'A direct page for people trying to reduce typing load without changing their whole setup.',
      ctaLabel: 'See the RSI page',
    },
    {
      href: '/use-cases/carpal-tunnel',
      eyebrow: 'hand strain',
      title: 'Carpal tunnel use case',
      description: 'For buyers who do not need hype. They need fewer keystrokes and a tool that works today.',
      ctaLabel: 'See the carpal tunnel page',
    },
    {
      href: '/use-cases/motor-impairments',
      eyebrow: 'accessibility buyers',
      title: 'Motor impairments use case',
      description: 'A clearer fit for people who need dictation support across forms, docs, email, and chat.',
      ctaLabel: 'See the accessibility page',
    },
  ],
  superwhisper: [
    {
      href: '/best/windows-voice-typing',
      eyebrow: 'need Windows too?',
      title: 'Windows voice typing',
      description: 'A natural next click for people leaving Mac-only tools behind.',
      ctaLabel: 'See the Windows guide',
    },
    {
      href: '/best/accessible-dictation',
      eyebrow: 'beyond feature lists',
      title: 'Accessible dictation',
      description: 'For buyers who care less about shiny UX and more about lowering typing friction.',
      ctaLabel: 'See the accessibility guide',
    },
  ],
  'wispr-flow': [
    {
      href: '/best/windows-voice-typing',
      eyebrow: 'cross-platform buyers',
      title: 'Windows voice typing',
      description: 'Useful for people switching because they want a real Windows option too.',
      ctaLabel: 'See the Windows guide',
    },
    {
      href: '/best/accessible-dictation',
      eyebrow: 'typing less matters',
      title: 'Accessible dictation',
      description: 'A better page for buyers who are using voice to reduce typing load, not just move faster.',
      ctaLabel: 'See the accessibility guide',
    },
  ],
  dragon: [
    {
      href: '/best/windows-voice-typing',
      eyebrow: 'modern Windows option',
      title: 'Windows voice typing',
      description: 'A cleaner roundup for buyers comparing Dragon to newer local-first tools.',
      ctaLabel: 'See the Windows guide',
    },
    {
      href: '/alternative/windows-speech-recognition',
      eyebrow: 'same old category, different angle',
      title: 'Windows Speech Recognition alternative',
      description: 'For people still anchored to the older Windows speech stack.',
      ctaLabel: 'See the replacement guide',
    },
  ],
  'windows-speech-recognition': [
    {
      href: '/best/windows-voice-typing',
      eyebrow: 'broader comparison',
      title: 'Windows voice typing',
      description: 'The bigger roundup for buyers comparing all the realistic Windows paths.',
      ctaLabel: 'See the Windows guide',
    },
    {
      href: '/best/windows-speech-to-text',
      eyebrow: 'search language buyers use',
      title: 'Windows speech-to-text',
      description: 'Another entry point for the same buyer intent with a broader phrase.',
      ctaLabel: 'See the speech-to-text guide',
    },
  ],
};

const proofTracksBySlug: Record<string, ProofTrack[]> = {
  'windows-dictation': [homepageProofTracks[0]!],
  'windows-voice-typing': [homepageProofTracks[0]!],
  'windows-speech-to-text': [homepageProofTracks[0]!, homepageProofTracks[1]!],
  'accessible-dictation': [homepageProofTracks[1]!],
  'offline-dictation': [homepageProofTracks[0]!, homepageProofTracks[1]!],
  dragon: [homepageProofTracks[0]!],
  'windows-speech-recognition': [homepageProofTracks[0]!],
  superwhisper: [homepageProofTracks[0]!],
  'wispr-flow': [homepageProofTracks[0]!],
};

export function getRelatedGuidesForSeoSlug(slug: string): DiscoveryLink[] {
  return relatedGuidesBySlug[slug] ?? [];
}

export function getProofTracksForSeoSlug(slug: string): ProofTrack[] {
  return proofTracksBySlug[slug] ?? [];
}

const relatedGuidesByUseCaseSlug: Record<string, DiscoveryLink[]> = {
  adhd: [
    {
      href: '/best/accessible-dictation',
      eyebrow: 'bigger category',
      title: 'Accessible dictation',
      description: 'For people who want the broader guide before they drill into a specific cognitive workflow.',
      ctaLabel: 'See the accessibility guide',
    },
    {
      href: '/voice-typing',
      eyebrow: 'general workflow',
      title: 'Voice typing in every app',
      description: 'The wider page for people still deciding whether voice should be part of their daily setup.',
      ctaLabel: 'See the general guide',
    },
  ],
  dyslexia: [
    {
      href: '/best/accessible-dictation',
      eyebrow: 'bigger category',
      title: 'Accessible dictation',
      description: 'Useful if the buyer wants the broader accessibility comparison first.',
      ctaLabel: 'See the accessibility guide',
    },
    {
      href: '/voice-typing',
      eyebrow: 'general workflow',
      title: 'Voice typing in every app',
      description: 'A cleaner overview of how VoiceTypr fits into everyday writing across tools.',
      ctaLabel: 'See the general guide',
    },
  ],
  rsi: [
    {
      href: '/use-cases/carpal-tunnel',
      eyebrow: 'related pain pattern',
      title: 'Carpal tunnel use case',
      description: 'A closer page for buyers whose typing pain is specifically hand and wrist driven.',
      ctaLabel: 'See the carpal tunnel page',
    },
    {
      href: '/best/accessible-dictation',
      eyebrow: 'compare options',
      title: 'Accessible dictation',
      description: 'The broader comparison page for people evaluating tools, not just use cases.',
      ctaLabel: 'See the accessibility guide',
    },
    {
      href: '/best/windows-voice-typing',
      eyebrow: 'common platform path',
      title: 'Windows voice typing',
      description: 'Many RSI buyers start on Windows and need a practical dictation route there.',
      ctaLabel: 'See the Windows guide',
    },
  ],
  'carpal-tunnel': [
    {
      href: '/use-cases/rsi',
      eyebrow: 'related workload',
      title: 'RSI use case',
      description: 'A broader page around repetitive typing strain and how dictation reduces load.',
      ctaLabel: 'See the RSI page',
    },
    {
      href: '/best/accessible-dictation',
      eyebrow: 'compare tools',
      title: 'Accessible dictation',
      description: 'The better page when someone wants to compare product shapes before downloading.',
      ctaLabel: 'See the accessibility guide',
    },
    {
      href: '/use-cases/motor-impairments',
      eyebrow: 'wider accessibility fit',
      title: 'Motor impairments use case',
      description: 'Helpful when the buyer is mapping this into a bigger accessibility workflow.',
      ctaLabel: 'See the motor impairments page',
    },
  ],
  'motor-impairments': [
    {
      href: '/best/accessible-dictation',
      eyebrow: 'category overview',
      title: 'Accessible dictation',
      description: 'The broader comparison page for accessibility buyers and people buying on their behalf.',
      ctaLabel: 'See the accessibility guide',
    },
    {
      href: '/use-cases/carpal-tunnel',
      eyebrow: 'specific pain pattern',
      title: 'Carpal tunnel use case',
      description: 'Useful when the typing difficulty is specifically hand and wrist related.',
      ctaLabel: 'See the carpal tunnel page',
    },
    {
      href: '/best/windows-speech-to-text',
      eyebrow: 'platform fit',
      title: 'Windows speech-to-text',
      description: 'A more direct route for Windows users evaluating assistive dictation options.',
      ctaLabel: 'See the Windows guide',
    },
  ],
  developers: [
    {
      href: '/voice-input-for-cursor',
      eyebrow: 'same workflow, tighter page',
      title: 'Voice input for Cursor',
      description: 'For the developer who mainly wants to dictate prompts and context into Cursor.',
      ctaLabel: 'See the Cursor page',
    },
    {
      href: '/best/windows-voice-typing',
      eyebrow: 'windows developers',
      title: 'Windows voice typing',
      description: 'A better fit for Windows-heavy builder workflows.',
      ctaLabel: 'See the Windows guide',
    },
  ],
  founders: [
    {
      href: '/voice-input-for-cursor',
      eyebrow: 'ai workflow',
      title: 'Voice input for Cursor',
      description: 'Founders building with AI tools often start here because prompts are half the job now.',
      ctaLabel: 'See the Cursor page',
    },
    {
      href: '/best/windows-voice-typing',
      eyebrow: 'windows ops',
      title: 'Windows voice typing',
      description: 'Useful for founders running mixed-device teams or Windows-first setups.',
      ctaLabel: 'See the Windows guide',
    },
  ],
};

export function getRelatedGuidesForUseCase(slug: string): DiscoveryLink[] {
  return relatedGuidesByUseCaseSlug[slug] ?? [];
}

export const downloadDiscoveryLinks: DiscoveryLink[] = [
  {
    href: '/best/windows-voice-typing',
    eyebrow: 'choosing on Windows?',
    title: 'Windows voice typing guide',
    description: 'See the practical comparison before you download if you are still deciding between built-in tools and local AI dictation.',
    ctaLabel: 'Read the Windows guide',
  },
  {
    href: '/best/accessible-dictation',
    eyebrow: 'typing hurts or stalls?',
    title: 'Accessible dictation guide',
    description: 'A better starting point for buyers dealing with RSI, carpal tunnel, dyslexia, ADHD, or motor friction.',
    ctaLabel: 'Read the accessibility guide',
  },
  {
    href: '/use-cases/carpal-tunnel',
    eyebrow: 'less typing, not more hacks',
    title: 'Carpal tunnel use case',
    description: 'The use-case page for buyers who simply need to reduce hand load and keep working.',
    ctaLabel: 'See the use case',
  },
];

export const downloadProofTracks: ProofTrack[] = homepageProofTracks;

export const offlineWindowsRelatedGuides: DiscoveryLink[] = [
  {
    href: '/best/windows-voice-typing',
    eyebrow: 'same buyer, wider comparison',
    title: 'Windows voice typing guide',
    description: 'For people comparing all the realistic Windows dictation routes, not just the offline angle.',
    ctaLabel: 'See the Windows guide',
  },
  {
    href: '/alternative/windows-speech-recognition',
    eyebrow: 'post-WSR path',
    title: 'Windows Speech Recognition alternative',
    description: 'Useful for buyers who arrived here after Microsoft changed the Windows speech stack.',
    ctaLabel: 'See the replacement guide',
  },
  {
    href: '/use-cases/carpal-tunnel',
    eyebrow: 'why people switch',
    title: 'Carpal tunnel use case',
    description: 'A direct fit for people using dictation to lower typing load, not just speed up.',
    ctaLabel: 'See the use case',
  },
];

export const voiceTypingRelatedGuides: DiscoveryLink[] = [
  {
    href: '/best/accessible-dictation',
    eyebrow: 'accessibility path',
    title: 'Accessible dictation guide',
    description: 'A stronger page for people using voice because typing is painful, draining, or unreliable.',
    ctaLabel: 'See the accessibility guide',
  },
  {
    href: '/best/windows-voice-typing',
    eyebrow: 'windows path',
    title: 'Windows voice typing guide',
    description: 'A better route for Windows buyers comparing built-in tools against local alternatives.',
    ctaLabel: 'See the Windows guide',
  },
  {
    href: '/use-cases/rsi',
    eyebrow: 'typing strain',
    title: 'RSI use case',
    description: 'For buyers who care less about features and more about getting through the work with fewer keystrokes.',
    ctaLabel: 'See the use case',
  },
];
