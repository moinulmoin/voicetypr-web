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
    subscription: boolean;
  }>;
  whySwitch: string[];
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
      },
      {
        name: "Superwhisper",
        price: "$12/mo",
        platforms: "macOS",
        offline: "Partial",
        subscription: true,
      },
      {
        name: "Wispr Flow",
        price: "$15/mo",
        platforms: "macOS",
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
      "Works in every app — not just a browser extension",
      "Keeps raw audio on your machine during transcription",
      "Pay once, use forever — no subscription trap",
      "Runs Whisper locally — accurate even with accents",
    ],
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
      "Works offline for raw transcription after setup",
    ],
    ctaText: "Try VoiceTypr on Windows",
  },
  {
    slug: "offline-dictation",
    h1: "The best offline dictation software in 2026",
    lede:
      "If you need dictation that works without the internet, your options are surprisingly limited. Here's the complete list.",
    angle: "category-owner",
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
        name: "Apple Dictation",
        price: "Free",
        platforms: "macOS",
        offline: "No",
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
      "Cross-platform local transcription for Mac and Windows",
      "Modern local AI models without Dragon’s setup overhead",
      "Install it on the machines where you need private dictation",
      "No monthly account portal for day-to-day local transcription",
    ],
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
        name: "Dragon Professional",
        price: "$500+",
        platforms: "Windows",
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
      "Works in normal Windows apps without a browser dictation box",
      "Local transcription for private prompts, emails, and docs",
      "Modern Whisper models without Dragon's training ritual",
      "Pay once instead of adding another monthly AI tool",
    ],
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
        subscription: false,
      },
      {
        name: "Apple Voice Control",
        price: "Free",
        platforms: "macOS",
        offline: "Partial",
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
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "Works for RSI, carpal tunnel, dyslexia, ADHD, and low-energy typing days",
      "No browser-only workflow or per-app plugin setup",
      "Hotkey-based dictation keeps the interface simple",
      "Lifetime pricing makes the accommodation tool easier to keep",
    ],
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
      "Local transcription — no cloud dictation dependency",
      "Same Whisper models underneath",
    ],
    ctaText: "Switch from Superwhisper",
  },
  {
    slug: "wispr-flow",
    h1: "The best Wispr Flow alternative in 2026",
    lede:
      "Wispr Flow is slick but expensive at $15/month. If you want the same quality dictation without the recurring bill, there's one clear choice.",
    angle: "comparison",
    competitors: [
      {
        name: "Wispr Flow",
        price: "$15/mo",
        platforms: "Verify current release",
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
      "Your voice never leaves your device",
    ],
    ctaText: "Switch from Wispr Flow",
  },
  {
    slug: "dragon",
    h1: "The best Dragon NaturallySpeaking alternative in 2026",
    lede:
      "Dragon was the king of dictation for 20 years. But it's stagnated — no updates, no Mac support, and a $500 price tag. Here's the modern replacement.",
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
      "10x cheaper than Dragon Professional",
      "Modern AI — more accurate on current hardware",
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
