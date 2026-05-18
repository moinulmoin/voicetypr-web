export type DiscoveryLink = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
};

export type ContextualUseCaseLink = {
  href: string;
  label: string;
  context: string;
};

const contextualUseCaseLinksBySlug: Record<string, ContextualUseCaseLink[]> = {
  adhd: [
    { href: '/use-cases/dyslexia', label: 'dyslexia', context: 'spelling friction and slower editing loops' },
    { href: '/use-cases/students', label: 'students', context: 'essay drafts, notes, and study writing' },
  ],
  dyslexia: [
    { href: '/use-cases/adhd', label: 'ADHD', context: 'capturing ideas before they disappear' },
    { href: '/use-cases/students', label: 'students', context: 'schoolwork that starts easier by voice' },
  ],
  rsi: [
    { href: '/use-cases/carpal-tunnel', label: 'carpal tunnel', context: 'hand and wrist strain from repetitive typing' },
    { href: '/use-cases/motor-impairments', label: 'motor impairments', context: 'assistive dictation across everyday text fields' },
  ],
  'carpal-tunnel': [
    { href: '/use-cases/rsi', label: 'RSI', context: 'broader repetitive strain and typing load' },
    { href: '/use-cases/motor-impairments', label: 'motor impairments', context: 'hands-light writing across normal apps' },
  ],
  'motor-impairments': [
    { href: '/use-cases/carpal-tunnel', label: 'carpal tunnel', context: 'specific wrist and hand pain workflows' },
    { href: '/use-cases/rsi', label: 'RSI', context: 'reducing repetitive keyboard load' },
  ],
  developers: [
    { href: '/use-cases/founders', label: 'founders', context: 'AI prompting, support replies, and product writing' },
    { href: '/use-cases/product-managers', label: 'product managers', context: 'specs, decisions, and issue context' },
  ],
  writers: [
    { href: '/use-cases/journalists', label: 'journalists', context: 'story notes, outlines, and first drafts' },
    { href: '/use-cases/marketers', label: 'marketers', context: 'campaign copy and fast draft work' },
  ],
  founders: [
    { href: '/use-cases/product-managers', label: 'product managers', context: 'product docs and decisions' },
    { href: '/use-cases/sales', label: 'sales', context: 'follow-ups, pipeline notes, and proposals' },
  ],
  journalists: [
    { href: '/use-cases/writers', label: 'writers', context: 'long-form drafting and editing' },
    { href: '/use-cases/researchers', label: 'researchers', context: 'notes, summaries, and synthesis work' },
  ],
  'product-managers': [
    { href: '/use-cases/founders', label: 'founders', context: 'operator writing across product, sales, and support' },
    { href: '/use-cases/consultants', label: 'consultants', context: 'recaps, recommendations, and client docs' },
  ],
  'customer-support': [
    { href: '/use-cases/sales', label: 'sales', context: 'follow-up writing and CRM notes' },
    { href: '/use-cases/recruiters', label: 'recruiters', context: 'candidate notes and outreach drafts' },
  ],
  lawyers: [
    { href: '/use-cases/consultants', label: 'consultants', context: 'client notes, memos, and recap emails' },
    { href: '/use-cases/writers', label: 'writers', context: 'long-form drafts that still need careful editing' },
  ],
  students: [
    { href: '/use-cases/researchers', label: 'researchers', context: 'notes, summaries, and longer academic writing' },
    { href: '/use-cases/adhd', label: 'ADHD', context: 'lower-friction idea capture' },
  ],
  researchers: [
    { href: '/use-cases/students', label: 'students', context: 'study notes, essays, and reading-to-draft workflows' },
    { href: '/use-cases/product-managers', label: 'product managers', context: 'synthesis, decisions, and structured docs' },
  ],
  recruiters: [
    { href: '/use-cases/sales', label: 'sales', context: 'outreach, follow-ups, and CRM-style notes' },
    { href: '/use-cases/customer-support', label: 'customer support', context: 'high-volume replies and fast summaries' },
  ],
  sales: [
    { href: '/use-cases/recruiters', label: 'recruiters', context: 'candidate notes and outreach loops' },
    { href: '/use-cases/customer-support', label: 'customer support', context: 'reply-heavy work and internal notes' },
  ],
  marketers: [
    { href: '/use-cases/writers', label: 'writers', context: 'first drafts and long-form copy' },
    { href: '/use-cases/sales', label: 'sales', context: 'follow-up copy, pitch framing, and proposals' },
  ],
  consultants: [
    { href: '/use-cases/product-managers', label: 'product managers', context: 'decision docs and stakeholder summaries' },
    { href: '/use-cases/lawyers', label: 'lawyers', context: 'careful client writing and note-heavy work' },
  ],
};

export function getContextualUseCaseLinks(slug: string): ContextualUseCaseLink[] {
  return contextualUseCaseLinksBySlug[slug] ?? [];
}

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
      description: 'A direct page for Windows users who want local transcription by default.',
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

export function getRelatedGuidesForSeoSlug(slug: string): DiscoveryLink[] {
  return relatedGuidesBySlug[slug] ?? [];
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
  writers: [
    {
      href: '/voice-typing',
      eyebrow: 'general writing workflow',
      title: 'Voice typing in every app',
      description: 'A broader page for writers comparing whether voice belongs in their drafting workflow.',
      ctaLabel: 'See the general guide',
    },
    {
      href: '/best/accessible-dictation',
      eyebrow: 'lower typing load',
      title: 'Accessible dictation',
      description: 'Useful when writing volume, fatigue, or typing pain is part of the reason to switch.',
      ctaLabel: 'See the accessibility guide',
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
  journalists: [
    {
      href: '/use-cases/writers',
      eyebrow: 'same craft, broader writing',
      title: 'Writers use case',
      description: 'A closer page for people using dictation for long-form drafting, intros, and article flow.',
      ctaLabel: 'See the writers page',
    },
    {
      href: '/voice-typing',
      eyebrow: 'general workflow',
      title: 'Voice typing in every app',
      description: 'A broader page for journalists deciding whether system-wide dictation belongs in their workflow at all.',
      ctaLabel: 'See the general guide',
    },
  ],
  'product-managers': [
    {
      href: '/use-cases/founders',
      eyebrow: 'adjacent workflow',
      title: 'Founders use case',
      description: 'Useful when the PM workload overlaps with product, support, and AI-heavy solo operation.',
      ctaLabel: 'See the founders page',
    },
    {
      href: '/voice-input-for-cursor',
      eyebrow: 'ai drafting path',
      title: 'Voice input for Cursor',
      description: 'A tighter page for PMs who now spend a chunk of the day drafting context into AI tools.',
      ctaLabel: 'See the Cursor page',
    },
  ],
  'customer-support': [
    {
      href: '/best/accessible-dictation',
      eyebrow: 'lower typing load',
      title: 'Accessible dictation',
      description: 'A stronger page for support reps evaluating dictation mainly to reduce keyboard strain and fatigue.',
      ctaLabel: 'See the accessibility guide',
    },
    {
      href: '/best/windows-speech-to-text',
      eyebrow: 'windows support desks',
      title: 'Windows speech-to-text',
      description: 'A direct route for support teams doing long-form replies and notes across Windows apps.',
      ctaLabel: 'See the Windows guide',
    },
  ],
  lawyers: [
    {
      href: '/alternative/dragon',
      eyebrow: 'legacy comparison',
      title: 'Dragon alternative',
      description: 'Relevant for legal buyers comparing VoiceTypr against the old premium dictation default.',
      ctaLabel: 'See the Dragon comparison',
    },
    {
      href: '/best/accessible-dictation',
      eyebrow: 'typing load problem',
      title: 'Accessible dictation',
      description: 'A broader route for lawyers mainly using dictation to reduce drafting strain and repetitive typing.',
      ctaLabel: 'See the accessibility guide',
    },
  ],
  students: [
    {
      href: '/use-cases/adhd',
      eyebrow: 'attention friction',
      title: 'ADHD use case',
      description: 'A closer page for students who lose the thread between having the idea and typing the first sentence.',
      ctaLabel: 'See the ADHD page',
    },
    {
      href: '/use-cases/dyslexia',
      eyebrow: 'writing friction',
      title: 'Dyslexia use case',
      description: 'Useful when the student needs a lower-friction way to move ideas into text and edit after.',
      ctaLabel: 'See the dyslexia page',
    },
  ],
  researchers: [
    {
      href: '/use-cases/students',
      eyebrow: 'study-to-research bridge',
      title: 'Students use case',
      description: 'A nearby page for people using voice to turn dense reading and rough thinking into usable written notes.',
      ctaLabel: 'See the students page',
    },
    {
      href: '/use-cases/product-managers',
      eyebrow: 'synthesis workflow',
      title: 'Product managers use case',
      description: 'Useful when the work is heavy on synthesis, decisions, and writing across multiple apps.',
      ctaLabel: 'See the product managers page',
    },
  ],
  recruiters: [
    {
      href: '/use-cases/customer-support',
      eyebrow: 'high-volume writing',
      title: 'Customer support use case',
      description: 'A close cousin for people writing fast recaps, follow-ups, and operational notes all day.',
      ctaLabel: 'See the support page',
    },
    {
      href: '/use-cases/founders',
      eyebrow: 'hiring from the founder seat',
      title: 'Founders use case',
      description: 'Relevant when the same person is recruiting, selling, and running the rest of the company at once.',
      ctaLabel: 'See the founders page',
    },
  ],
  sales: [
    {
      href: '/use-cases/customer-support',
      eyebrow: 'reply-heavy workflow',
      title: 'Customer support use case',
      description: 'A nearby page for teams who live in follow-ups, notes, and long-form replies inside browser tools.',
      ctaLabel: 'See the support page',
    },
    {
      href: '/use-cases/founders',
      eyebrow: 'same hustle, different motion',
      title: 'Founders use case',
      description: 'Useful for solo operators handling sales, support, and product writing in the same day.',
      ctaLabel: 'See the founders page',
    },
  ],
  marketers: [
    {
      href: '/use-cases/writers',
      eyebrow: 'copy and drafting',
      title: 'Writers use case',
      description: 'A closer page for people who want to speak the first draft and edit later without changing tools.',
      ctaLabel: 'See the writers page',
    },
    {
      href: '/use-cases/founders',
      eyebrow: 'ai-heavy growth work',
      title: 'Founders use case',
      description: 'Relevant when marketing work also includes constant prompting, product context, and fast operational writing.',
      ctaLabel: 'See the founders page',
    },
  ],
  consultants: [
    {
      href: '/use-cases/product-managers',
      eyebrow: 'decision docs and recaps',
      title: 'Product managers use case',
      description: 'A close match for work built around recommendations, synthesis, and turning meetings into documents.',
      ctaLabel: 'See the product managers page',
    },
    {
      href: '/use-cases/founders',
      eyebrow: 'broad operator workflow',
      title: 'Founders use case',
      description: 'Useful for consultants who also spend a lot of time in AI tools, client email, and high-context writing.',
      ctaLabel: 'See the founders page',
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
