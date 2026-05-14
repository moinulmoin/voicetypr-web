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
        offline: "Yes — 100%",
        subscription: false,
      },
    ],
    whySwitch: [
      "Works in every app — not just a browser extension",
      "Never sends audio to the cloud",
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
        offline: "Yes — 100%",
        subscription: false,
      },
    ],
    whySwitch: [
      "Replaces deprecated Windows Speech Recognition",
      "More accurate than Dragon on modern hardware",
      "Works in every Windows app — VS Code, Word, browsers",
      "No cloud connection needed ever",
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
        offline: "Yes — 100%",
        subscription: false,
      },
    ],
    whySwitch: [
      "Only cross-platform option that works offline",
      "Modern AI models — more accurate than Dragon",
      "Fits on a USB drive — take it anywhere",
      "No account, no login, no cloud dependency",
    ],
    ctaText: "Get offline dictation",
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
        offline: "Yes — 100%",
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
        platforms: "macOS only",
        offline: "No",
        subscription: true,
      },
      {
        name: "VoiceTypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — 100%",
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
        offline: "Yes — 100%",
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
];

export function getSeoPageBySlug(slug: string): SeoPage | undefined {
  return seoPages.find((p) => p.slug === slug);
}

export function getAlternativePageBySlug(slug: string): SeoPage | undefined {
  return alternativePages.find((p) => p.slug === slug);
}
