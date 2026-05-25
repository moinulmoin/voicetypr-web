export type SeoPage = {
  slug: string;
  h1: string;
  lede: string;
  angle: "roundup" | "comparison" | "category-owner";
  competitors: Array<{
    name: string;
    price: string;
    platforms: string;
    offline: string;
    limitation?: string;
    subscription: boolean;
  }>;
  whySwitch: string[];
  decisionSupport?: {
    searchIntent: string;
    bestFor: string[];
    notFor: string[];
    decisionCriteria: Array<{ title: string; body: string }>;
    competitorNotes: Array<{ title: string; body: string }>;
    faq: Array<{ q: string; a: string }>;
    offlineCaveat?: string;
  };
  ctaText: string;
};

export const seoPages: SeoPage[] = [
  {
    slug: "mac-dictation",
    h1: "The best dictation software for Mac in 2026",
    lede:
      "Most Mac dictation apps lock you into subscriptions or send your voice to the cloud. Here are the honest options — including the one that works offline.",
    angle: "roundup",
    competitors: [
      {
        name: "Apple Dictation",
        price: "Free",
        platforms: "macOS",
        offline: "No",
        subscription: false,
        limitation: "Free and built in, but less focused on long-form cross-app workflows.",
      },
      {
        name: "Superwhisper",
        price: "$12/mo",
        platforms: "macOS",
        offline: "Partial",
        subscription: true,
        limitation: "Strong Mac app, but subscription-priced and Mac-only.",
      },
      {
        name: "Wispr Flow",
        price: "$15/mo",
        platforms: "macOS",
        offline: "No",
        subscription: true,
        limitation: "Polished capture, but recurring pricing and cloud-first positioning are not for every buyer.",
      },
      {
        name: "VoiceTypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
        limitation: "Pay-once app for Mac + Windows with local transcription by default.",
      },
    ],
    whySwitch: [
      "Works in every app — not just a browser extension",
      "Transcribes your voice on your machine by default",
      "Pay once, use forever — no subscription trap",
      "Runs modern local models for fast private dictation",
    ],
    decisionSupport: {
      searchIntent:
        "Compare Apple Dictation, Superwhisper, Wispr Flow, and a pay-once local app for everyday Mac dictation.",
      bestFor: [
        "Mac users who want dictation in every app, not only in Apple text fields",
        "People who prefer a lifetime license over another monthly writing tool",
        "Privacy-sensitive drafting where voice should be transcribed on the user's machine by default",
      ],
      notFor: [
        "People who need full voice control commands for navigating the entire Mac",
        "Teams that mainly need shared meeting transcripts and collaboration notes",
      ],
      decisionCriteria: [
        {
          title: "Where text lands",
          body: "A useful Mac dictation tool should paste into the editor, browser, chat box, or AI prompt field you already have open.",
        },
        {
          title: "Privacy model",
          body: "Check whether voice is transcribed on-device, sent to a provider, or mixed with optional cloud formatting.",
        },
        {
          title: "Cost after the first year",
          body: "Subscription dictation tools often look cheap at signup and become expensive once they are part of your daily workflow.",
        },
      ],
      competitorNotes: [
        {
          title: "Apple Dictation",
          body: "Best for a free built-in start, but less focused on long-form power-user workflows and cross-app model control.",
        },
        {
          title: "Superwhisper",
          body: "Strong Mac-native product, but Mac-only and subscription-priced for users who want to own the tool.",
        },
        {
          title: "Wispr Flow",
          body: "Polished for fast capture, but its recurring price and cloud-first architecture are not right for every buyer.",
        },
      ],
      faq: [
        {
          q: "Is this a replacement for Apple Dictation?",
          a: "For everyday writing, prompts, and replies, yes. It is not meant to replace full macOS Voice Control navigation.",
        },
        {
          q: "Does VoiceTypr work on Intel Macs?",
          a: "Yes. VoiceTypr supports macOS 13+ on Intel and Apple Silicon, with Apple Silicon recommended for the fastest local models.",
        },
        {
          q: "What stays local?",
          a: "Your voice is transcribed on your machine by default. Optional AI formatting can send text only if you enable it.",
        },
      ],
    },
    ctaText: "Try VoiceTypr on Mac",
  },
  {
    slug: "windows-dictation",
    h1: "The best dictation software for Windows in 2026",
    lede:
      "Windows Speech Recognition was deprecated in 2024. Dragon still feels stuck in an older era. Here's what actually works in 2026.",
    angle: "roundup",
    competitors: [
      {
        name: "Windows Speech",
        price: "Free (deprecated)",
        platforms: "Windows",
        offline: "Yes",
        subscription: false,
      },
      {
        name: "Dragon",
        price: "$500+",
        platforms: "Windows",
        offline: "Yes",
        subscription: false,
      },
      {
        name: "Otter.ai",
        price: "$10/mo",
        platforms: "Web",
        offline: "No",
        subscription: true,
      },
      {
        name: "VoiceTypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "Replaces deprecated Windows Speech Recognition",
      "Modern local AI models without Dragon’s training ritual",
      "Works in every Windows app — VS Code, Word, browsers",
      "Works offline for local transcription after setup",
    ],
    decisionSupport: {
      searchIntent:
        "Find a practical replacement for deprecated Windows Speech Recognition, Dragon, and web-only transcription tools.",
      bestFor: [
        "Windows users who dictate into Word, browsers, Cursor, email, and chat",
        "People replacing classic Windows Speech Recognition with a modern local model",
        "Buyers who want private daily dictation without a recurring subscription",
      ],
      notFor: [
        "People who primarily need hands-free Windows navigation commands",
        "Teams looking for meeting recording, summaries, and shared transcript archives",
      ],
      decisionCriteria: [
        {
          title: "Windows support now",
          body: "Avoid tools whose Windows story is deprecated, browser-only, or secondary to a Mac product.",
        },
        {
          title: "Local transcription",
          body: "For sensitive prompts and documents, voice should be transcribed on the user's machine by default rather than uploaded for dictation.",
        },
        {
          title: "Setup friction",
          body: "Modern dictation should not require voice-profile training before it becomes useful in normal apps.",
        },
      ],
      competitorNotes: [
        {
          title: "Windows Speech Recognition",
          body: "Familiar to long-time users, but deprecated and no longer the forward path for Windows dictation.",
        },
        {
          title: "Dragon Professional",
          body: "Still useful for some specialist workflows, but expensive and heavier than most modern everyday dictation needs.",
        },
        {
          title: "Otter.ai",
          body: "Better suited to meetings and transcripts than private text entry in desktop apps.",
        },
      ],
      faq: [
        {
          q: "Is this for Windows 10 or Windows 11?",
          a: "VoiceTypr supports Windows 10 and later, so it covers people who are not ready or able to move every machine to Windows 11.",
        },
        {
          q: "Does it replace Windows Voice Access?",
          a: "It replaces dictation-first text entry, not the full accessibility command layer that Voice Access provides.",
        },
        {
          q: "Does local transcription work offline?",
          a: "After setup, local transcription runs on your machine. Optional AI formatting can use text-only provider calls when enabled.",
        },
      ],
    },
    ctaText: "Try VoiceTypr on Windows",
  },
  {
    slug: "offline-dictation",
    h1: "The best offline dictation app in 2026 — works without the internet",
    lede:
      "VoiceTypr transcribes your voice locally after setup — no internet needed for day-to-day dictation. Here are the real offline options, and what offline actually covers.",
    angle: "category-owner",
    competitors: [
      {
        name: "Windows Speech",
        price: "Free (deprecated)",
        platforms: "Windows",
        offline: "Yes",
        subscription: false,
        limitation: "Free legacy option, but deprecated for long-term Windows workflows.",
      },
      {
        name: "Dragon",
        price: "$500+",
        platforms: "Windows",
        offline: "Yes",
        subscription: false,
        limitation: "The legacy offline benchmark, but expensive and heavier to set up.",
      },
      {
        name: "Apple Dictation",
        price: "Free",
        platforms: "macOS",
        offline: "No",
        subscription: false,
        limitation: "Convenient on Mac, but not a cross-platform offline dictation app.",
      },
      {
        name: "VoiceTypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
        limitation: "Modern local models for Mac + Windows, sold as a lifetime license.",
      },
    ],
    whySwitch: [
      "Cross-platform local transcription for Mac and Windows",
      "Modern local AI models without Dragon’s setup overhead",
      "Install it on the machines where you need private dictation",
      "No monthly account portal for day-to-day local transcription",
    ],
    decisionSupport: {
      searchIntent:
        "Understand which dictation options use local transcription, and what offline does and does not cover.",
      bestFor: [
        "People who dictate sensitive drafts, prompts, notes, or client material",
        "Travel, low-connectivity, and locked-down environments after model setup",
        "Buyers comparing Dragon-style offline tools with modern local AI transcription",
      ],
      notFor: [
        "People who need cloud meeting bots, shared transcript workspaces, or live collaboration",
        "Buyers who need every optional enhancement, license check, update, and model download to happen without internet",
      ],
      decisionCriteria: [
        {
          title: "Define offline precisely",
          body: "Separate local transcription from setup, model downloads, license checks, updates, and optional AI formatting.",
        },
        {
          title: "Model quality",
          body: "Offline dictation is only useful if the local model is accurate enough for accents, punctuation, and long-form speech.",
        },
        {
          title: "App coverage",
          body: "Offline transcription still needs to land cleanly in the app where you are actually writing.",
        },
      ],
      competitorNotes: [
        {
          title: "Dragon",
          body: "The legacy offline benchmark for Windows, but its price and setup process are more than many users need.",
        },
        {
          title: "Windows Speech",
          body: "An older Windows option, now deprecated for users planning a long-term workflow.",
        },
        {
          title: "Apple Dictation",
          body: "Convenient on Mac, but not a cross-platform product you can buy once and standardize across machines.",
        },
      ],
      faq: [
        {
          q: "What does offline mean here?",
          a: "VoiceTypr transcribes your voice on your machine after setup. Optional AI formatting may send text if you enable it.",
        },
        {
          q: "Do I need internet to install models?",
          a: "Yes, setup and model downloads require connectivity. The offline claim is about day-to-day local transcription after setup.",
        },
        {
          q: "Is offline dictation the same as full voice control?",
          a: "No. Dictation enters text; voice control navigates the operating system. Some tools do both, but they solve different jobs.",
        },
      ],
      offlineCaveat:
        "Offline in this guide means local transcription after setup, not every surrounding service such as downloads, updates, licensing, or optional text formatting.",
    },
    ctaText: "Get offline dictation",
  },
  {
    slug: "windows-voice-typing",
    h1: "The best Windows voice typing software in 2026",
    lede:
      "Windows has built-in voice typing, but it is online-first and short-session focused. If you want private dictation that works across your desktop, compare the real options here.",
    angle: "roundup",
    competitors: [
      {
        name: "Windows Voice Typing",
        price: "Free",
        platforms: "Windows 11",
        offline: "No",
        limitation: "Free, but bare-bones: online-first, weak for long drafts, and no real workflow control.",
        subscription: false,
      },
      {
        name: "Windows Voice Access",
        price: "Free",
        platforms: "Windows 11 22H2+",
        offline: "Partial",
        limitation: "Free, but built for PC control first. Dictation is only one part of a heavier tool.",
        subscription: false,
      },
      {
        name: "Dragon Professional",
        price: "$500+",
        platforms: "Windows",
        offline: "Yes",
        limitation: "Offline, but expensive and still feels like legacy software.",
        subscription: false,
      },
      {
        name: "VoiceTypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        limitation: "Better daily UX: dashboard controls, optional AI polish, local transcription, and every-app writing.",
        subscription: false,
      },
    ],
    whySwitch: [
      "Works in normal Windows apps without a browser dictation box",
      "Local transcription for private prompts, emails, and docs",
      "Dashboard controls, presets, and optional AI polish for cleaner text",
      "Pay once instead of adding another monthly AI tool",
    ],
    decisionSupport: {
      searchIntent:
        "Compare Windows Voice Typing, Windows Voice Access, Dragon, and a local pay-once dictation app for everyday text entry.",
      bestFor: [
        "Windows users who want a dedicated voice typing tool instead of a built-in shortcut",
        "People writing long prompts, emails, specs, and notes across many apps",
        "Privacy-conscious users who want local transcription by default",
      ],
      notFor: [
        "Users who only need occasional short dictation inside a Microsoft text box",
        "People who need full desktop control commands more than text entry",
      ],
      decisionCriteria: [
        {
          title: "Short bursts vs long drafts",
          body: "Built-in voice typing is fine for quick snippets; long-form drafting needs a workflow that stays comfortable over repeated sessions.",
        },
        {
          title: "Built-in control vs dedicated app",
          body: "Voice Access is broader accessibility control. VoiceTypr is narrower and faster to understand: hold a hotkey, speak, paste text.",
        },
        {
          title: "Privacy expectations",
          body: "Check whether dictation is online-first, partially offline, or local by default.",
        },
      ],
      competitorNotes: [
        {
          title: "Windows Voice Typing",
          body: "Free and convenient, but designed for built-in Windows dictation rather than a cross-app paid workflow.",
        },
        {
          title: "Windows Voice Access",
          body: "Important accessibility software for controlling the PC, but heavier than many users need for simple text entry.",
        },
        {
          title: "Dragon Professional",
          body: "Powerful for some professional dictation users, but expensive if your main need is modern voice-to-text in everyday apps.",
        },
      ],
      faq: [
        {
          q: "Why not just use Windows Voice Typing?",
          a: "Use it if occasional short dictation is enough. VoiceTypr is for people who want a dedicated daily workflow across apps.",
        },
        {
          q: "Is VoiceTypr an accessibility controller?",
          a: "No. It focuses on dictation and paste-to-cursor text entry, not full PC command control.",
        },
        {
          q: "Does it work outside Microsoft apps?",
          a: "Yes. VoiceTypr pastes into normal text fields across browsers, editors, chat, email, and AI tools.",
        },
      ],
    },
    ctaText: "Try private Windows voice typing",
  },
  {
    slug: "windows-speech-to-text",
    h1: "The best speech-to-text app for Windows in 2026",
    lede:
      "For Windows users, speech-to-text splits into three buckets: free built-in tools, expensive legacy dictation, and modern local AI. Here is the practical choice.",
    angle: "category-owner",
    competitors: [
      {
        name: "Microsoft Dictate",
        price: "Free / Microsoft 365",
        platforms: "Office apps",
        offline: "No",
        subscription: false,
      },
      {
        name: "Windows Voice Typing",
        price: "Free",
        platforms: "Windows 11",
        offline: "No",
        subscription: false,
      },
      {
        name: "Dragon Professional",
        price: "$500+",
        platforms: "Windows",
        offline: "Yes",
        subscription: false,
      },
      {
        name: "VoiceTypr",
        price: "From $39 once",
        platforms: "Every app on Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "Dictate into Cursor, ChatGPT, Word, Gmail, Slack, Notion, and more",
      "No Microsoft 365 dependency for everyday dictation",
      "Better fit for long prompts and long-form drafts",
      "Private by default because audio stays on your machine",
    ],
    decisionSupport: {
      searchIntent:
        "Choose a Windows speech-to-text app for Office, browsers, AI prompts, developer tools, and everyday desktop writing.",
      bestFor: [
        "People who think in speech and need text in many Windows apps",
        "Users comparing Microsoft Dictate, Windows Voice Typing, Dragon, and local AI transcription",
        "Workers who want less keyboard load without committing to a subscription",
      ],
      notFor: [
        "Meeting-heavy teams that need speaker labels and collaboration transcripts",
        "Users who only dictate inside Microsoft Office and are satisfied with built-in tooling",
      ],
      decisionCriteria: [
        {
          title: "Scope of use",
          body: "Office-only tools solve a narrower problem than a desktop app that can paste into any text field.",
        },
        {
          title: "Ownership",
          body: "If speech-to-text becomes part of your daily writing stack, compare lifetime cost, not only first-month price.",
        },
        {
          title: "Sensitive text",
          body: "Local transcription matters when speech includes customer details, unreleased work, or private prompts.",
        },
      ],
      competitorNotes: [
        {
          title: "Microsoft Dictate",
          body: "Useful inside Office, but not the same as a system-wide speech-to-text workflow for every app.",
        },
        {
          title: "Windows Voice Typing",
          body: "Good for built-in short-form dictation, less differentiated for power users who want model control and lifetime pricing.",
        },
        {
          title: "Dragon Professional",
          body: "A serious legacy option, but the upfront price is hard to justify for many AI-era writing workflows.",
        },
      ],
      faq: [
        {
          q: "Is this only for Microsoft Word?",
          a: "No. VoiceTypr works anywhere a normal text field accepts pasted text.",
        },
        {
          q: "Is it a meeting transcription app?",
          a: "No. It is built for personal dictation into the app where you are writing, not for shared meeting records.",
        },
        {
          q: "Can I use it for AI prompts?",
          a: "Yes. Cursor, Claude, ChatGPT, and browser prompt boxes are core use cases.",
        },
      ],
    },
    ctaText: "Get Windows speech-to-text",
  },
  {
    slug: "accessible-dictation",
    h1: "The best accessible dictation software in 2026",
    lede:
      "If typing is painful, slow, or unreliable, dictation needs to work everywhere — not only inside one document editor. These are the accessible voice typing options worth comparing.",
    angle: "roundup",
    competitors: [
      {
        name: "Windows Voice Access",
        price: "Free",
        platforms: "Windows 11",
        offline: "Partial",
        limitation: "Free, but control-heavy. Great for navigation, clunky when you just need clean text.",
        subscription: false,
      },
      {
        name: "Apple Voice Control",
        price: "Free",
        platforms: "macOS",
        offline: "Partial",
        limitation: "Free, but Mac-only and command-first. Not a focused writing workflow.",
        subscription: false,
      },
      {
        name: "Dragon Professional",
        price: "$500+",
        platforms: "Windows",
        offline: "Yes",
        limitation: "Strong history, but the price is hard for basic text entry.",
        subscription: false,
      },
      {
        name: "VoiceTypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        limitation: "Better daily UX: dashboard controls, optional AI polish, local transcription, and cross-platform text entry.",
        subscription: false,
      },
    ],
    whySwitch: [
      "Works for RSI, carpal tunnel, dyslexia, ADHD, and low-energy typing days",
      "No browser-only workflow or per-app plugin setup",
      "Dashboard controls and optional AI polish keep the workflow easier to tune",
      "Lifetime pricing makes the accommodation tool easier to keep",
    ],
    decisionSupport: {
      searchIntent:
        "Compare dictation tools for people who need lower-friction typing due to pain, fatigue, dyslexia, ADHD, RSI, or carpal tunnel.",
      bestFor: [
        "People who need less typing in the apps they already use",
        "Accessibility buyers who want a simple hotkey-first dictation workflow",
        "Users who want an accommodation tool they can keep without monthly billing",
      ],
      notFor: [
        "People who need complete hands-free OS navigation and command vocabularies",
        "Clinical, school, or workplace accommodation programs that require formal certification language on-page",
      ],
      decisionCriteria: [
        {
          title: "Dictation vs voice control",
          body: "Accessible dictation enters text. Voice control also clicks, navigates, and commands the OS. Know which problem you are solving.",
        },
        {
          title: "Low-friction repetition",
          body: "The best accommodation is the one simple enough to use on tired days: one hotkey, speak, paste.",
        },
        {
          title: "Pricing durability",
          body: "For an everyday accessibility tool, predictable ownership can matter as much as the first feature checklist.",
        },
      ],
      competitorNotes: [
        {
          title: "Windows Voice Access",
          body: "Strong for controlling Windows, but broader and heavier than a dictation-only workflow.",
        },
        {
          title: "Apple Voice Control",
          body: "Useful for Mac accessibility, especially commands, but not a cross-platform paid dictation product.",
        },
        {
          title: "Dragon Professional",
          body: "Historically important for accessibility use, but expensive for users who mainly need modern text entry.",
        },
      ],
      faq: [
        {
          q: "Is VoiceTypr medical software?",
          a: "No. It is a productivity and accessibility-friendly dictation tool, not a medical device or clinical accommodation assessment.",
        },
        {
          q: "Can it help if typing hurts?",
          a: "It can reduce keyboard load by moving drafting, replies, and prompts to voice. It does not replace medical advice or ergonomic care.",
        },
        {
          q: "Does it control the computer by voice?",
          a: "No. VoiceTypr focuses on text dictation. Use Windows Voice Access or Apple Voice Control when you need full navigation commands.",
        },
      ],
    },
    ctaText: "Try accessible voice typing",
  },
];

export const alternativePages: SeoPage[] = [
  {
    slug: "superwhisper",
    h1: "The best Superwhisper alternative in 2026",
    lede:
      "Superwhisper is Mac-only and subscription-based. If you need cross-platform or want to own your software, here's what to switch to.",
    angle: "comparison",
    competitors: [
      {
        name: "Superwhisper",
        price: "$12/mo",
        platforms: "macOS only",
        offline: "Partial",
        subscription: true,
      },
      {
        name: "VoiceTypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "Works on Windows too — not just Mac",
      "Pay once instead of $144/year",
      "Local transcription by default; optional text cleanup when enabled",
      "Same Whisper models underneath",
    ],
    ctaText: "Switch from Superwhisper",
  },
  {
    slug: "wispr-flow",
    h1: "The best Wispr Flow alternative in 2026",
    lede:
      "Wispr Flow is slick but expensive at $15/month. If recurring pricing is the blocker, compare it against pay-once offline-first dictation for Mac and Windows.",
    angle: "comparison",
    competitors: [
      {
        name: "Wispr Flow",
        price: "$15/mo",
        platforms: "macOS + Windows",
        offline: "No",
        subscription: true,
      },
      {
        name: "VoiceTypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "Save $130 in the first year alone",
      "Own the software permanently",
      "Works on both Mac and Windows",
      "Your voice is transcribed locally by default",
    ],
    ctaText: "Switch from Wispr Flow",
  },
  {
    slug: "dragon",
    h1: "The best Dragon NaturallySpeaking alternative in 2026",
    lede:
      "Dragon remains powerful for specialized workflows, but many buyers find the upfront cost and setup heavier than everyday dictation needs. Here's the modern pay-once alternative.",
    angle: "comparison",
    competitors: [
      {
        name: "Dragon",
        price: "$500+",
        platforms: "Windows only",
        offline: "Yes",
        subscription: false,
      },
      {
        name: "VoiceTypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "Lower upfront price than Dragon Professional",
      "Modern local Whisper models without Dragon's profile-training workflow",
      "Works on Mac too",
      "Active development with regular updates",
    ],
    ctaText: "Replace Dragon",
  },
  {
    slug: "windows-speech-recognition",
    h1: "The best Windows Speech Recognition alternative in 2026",
    lede:
      "Classic Windows Speech Recognition is deprecated and replaced by Voice Access on newer Windows 11 releases. If you want modern offline dictation for every app, VoiceTypr is the cleaner upgrade.",
    angle: "comparison",
    competitors: [
      {
        name: "Windows Speech Recognition",
        price: "Free (deprecated)",
        platforms: "Windows 10 / older Windows 11",
        offline: "Yes",
        subscription: false,
      },
      {
        name: "Windows Voice Access",
        price: "Free",
        platforms: "Windows 11 22H2+",
        offline: "Partial",
        subscription: false,
      },
      {
        name: "VoiceTypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "Built for dictation-first writing, not full computer control",
      "Modern local Whisper transcription instead of the old Windows speech engine",
      "Works in every normal text field with one hotkey",
      "A clearer upgrade path for Windows users who still need offline privacy",
    ],
    ctaText: "Replace Windows Speech Recognition",
  },
];

export function getSeoPageBySlug(slug: string): SeoPage | undefined {
  return seoPages.find((p) => p.slug === slug);
}

export function getAlternativePageBySlug(slug: string): SeoPage | undefined {
  return alternativePages.find((p) => p.slug === slug);
}
