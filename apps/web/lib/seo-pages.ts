export type SeoPage = {
  slug: string;
  h1: string;
  metaTitle?: string;
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
  switchGuide?: {
    voiceTyprIf: string[];
    otherIf: string[];
    notes?: Array<{ title: string; body: string }>;
  };
  decisionSupport?: {
    searchIntent: string;
    bestFor: string[];
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
        name: "Voicetypr",
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
          q: "Does Voicetypr work on Intel Macs?",
          a: "Yes. Voicetypr supports macOS 13+ on Intel and Apple Silicon, with Apple Silicon recommended for the fastest local models.",
        },
        {
          q: "What stays local?",
          a: "Your voice is transcribed on your machine by default. Optional AI formatting can send text only if you enable it.",
        },
      ],
    },
    ctaText: "Try Voicetypr on Mac",
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
        name: "Voicetypr",
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
          a: "Voicetypr supports Windows 10 and later, so it covers people who are not ready or able to move every machine to Windows 11.",
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
    ctaText: "Try Voicetypr on Windows",
  },
  {
    slug: "offline-dictation",
    metaTitle: "Best offline dictation app (2026) | Voicetypr",
    h1: "The best offline dictation app in 2026 — works without the internet",
    lede:
      "Voicetypr transcribes your voice locally after setup — no internet needed for day-to-day dictation. Here are the real offline options, and what offline actually covers.",
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
        name: "Voicetypr",
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
          a: "Voicetypr transcribes your voice on your machine after setup. Optional AI formatting may send text if you enable it.",
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
        name: "Voicetypr",
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
      decisionCriteria: [
        {
          title: "Short bursts vs long drafts",
          body: "Built-in voice typing is fine for quick snippets; long-form drafting needs a workflow that stays comfortable over repeated sessions.",
        },
        {
          title: "Built-in control vs dedicated app",
          body: "Voice Access is broader accessibility control. Voicetypr is narrower and faster to understand: hold a hotkey, speak, paste text.",
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
          a: "Use it if occasional short dictation is enough. Voicetypr is for people who want a dedicated daily workflow across apps.",
        },
        {
          q: "Is Voicetypr an accessibility controller?",
          a: "No. It focuses on dictation and paste-to-cursor text entry, not full PC command control.",
        },
        {
          q: "Does it work outside Microsoft apps?",
          a: "Yes. Voicetypr pastes into normal text fields across browsers, editors, chat, email, and AI tools.",
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
        name: "Voicetypr",
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
          a: "No. Voicetypr works anywhere a normal text field accepts pasted text.",
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
        name: "Voicetypr",
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
          q: "Is Voicetypr medical software?",
          a: "No. It is a productivity and accessibility-friendly dictation tool, not a medical device or clinical accommodation assessment.",
        },
        {
          q: "Can it help if typing hurts?",
          a: "It can reduce keyboard load by moving drafting, replies, and prompts to voice. It does not replace medical advice or ergonomic care.",
        },
        {
          q: "Does it control the computer by voice?",
          a: "No. Voicetypr focuses on text dictation. Use Windows Voice Access or Apple Voice Control when you need full navigation commands.",
        },
      ],
    },
    ctaText: "Try accessible voice typing",
  },
  {
    slug: "voice-to-text-for-developers",
    h1: "The best voice-to-text for developers in 2026",
    metaTitle: "Best Voice-to-Text for Developers (2026) — Prompts, Commits & Code",
    lede:
      "Most dictation tools are built for prose, not for editors, terminals, and AI prompt boxes. Here are the options that actually fit a developer's day — including the one that runs locally and pastes into any app.",
    angle: "roundup",
    competitors: [
      {
        name: "Wispr Flow",
        price: "$15/mo",
        platforms: "macOS + Windows",
        offline: "No",
        subscription: true,
        limitation: "Fast capture, but cloud-based and subscription-priced — your prompts and code context leave your machine.",
      },
      {
        name: "Superwhisper",
        price: "$8.49/mo+",
        platforms: "macOS",
        offline: "Partial",
        subscription: true,
        limitation: "Strong Mac-native dictation, but Mac-only and subscription-priced.",
      },
      {
        name: "Talon Voice",
        price: "Free (paid beta)",
        platforms: "macOS + Windows + Linux",
        offline: "Yes",
        subscription: false,
        limitation: "Powerful for hands-free coding and voice commands, but a steep learning curve and command-grammar setup.",
      },
      {
        name: "OpenAI Whisper (self-host)",
        price: "Free (DIY)",
        platforms: "Cross-platform",
        offline: "Yes",
        subscription: false,
        limitation: "It's a model, not an app — no hotkey, no paste-anywhere; you build and maintain the workflow yourself.",
      },
      {
        name: "Voicetypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
        limitation: "Pay-once app that pastes into any editor, terminal, or prompt box, with a scriptable CLI and local API.",
      },
    ],
    whySwitch: [
      "Pastes into Cursor, VS Code, the terminal, ChatGPT, and Claude — no per-app plugin",
      "Transcribes on your machine by default, so prompts and code context stay local",
      "Scriptable Agent CLI and a local HTTP API for automation",
      "Pay once instead of another monthly subscription on top of your AI bills",
    ],
    decisionSupport: {
      searchIntent:
        "Compare voice-to-text tools that fit a developer's workflow — dictating prompts, commit messages, PR descriptions, and docs across an editor, terminal, and AI chat.",
      bestFor: [
        "Developers who dictate prompts into Cursor, Claude Code, or ChatGPT all day",
        "People who want commit messages, PR descriptions, and docs by voice without leaving the app they're in",
        "Privacy-conscious devs who'd rather their code context and prompts stay on-device",
      ],
      decisionCriteria: [
        {
          title: "Does it work in your real tools?",
          body: "A dev-friendly tool has to paste into your editor, terminal, and AI prompt box — not just a notes window or a browser tab.",
        },
        {
          title: "Where does your text go?",
          body: "Prompts and code descriptions are sensitive. Check whether transcription runs on-device or streams audio to a provider.",
        },
        {
          title: "Can you script it?",
          body: "A CLI or local API turns dictation into something your own scripts and agents can call, not just a manual hotkey.",
        },
      ],
      competitorNotes: [
        {
          title: "Wispr Flow",
          body: "Polished and quick, but cloud-first and subscription-priced — a poor fit if you want prompts and code to stay local or to own the tool.",
        },
        {
          title: "Talon Voice",
          body: "The power tool for full hands-free coding and voice commands. Worth it for accessibility-driven setups, but it asks for setup time most people dictating prompts don't need.",
        },
        {
          title: "OpenAI Whisper",
          body: "Great model, and free if you wire it up yourself. You'll be building the hotkey, the paste step, and the app integration that a finished tool already gives you.",
        },
      ],
      faq: [
        {
          q: "Can I dictate into Cursor, VS Code, or Claude Code?",
          a: "Yes. Voicetypr pastes transcribed text into whatever field has your cursor, so it works in Cursor, VS Code, Claude Code, ChatGPT, Cline, Windsurf, Aider, and any terminal — no plugin to install.",
        },
        {
          q: "Can a script or agent call it directly?",
          a: "Yes. A scriptable Agent CLI and a local HTTP API let scripts and agents run transcription programmatically — pipe in audio, get text out, choose the model per call.",
        },
        {
          q: "Do my prompts and code stay private?",
          a: "By default your voice is transcribed on your machine, so audio never leaves the device. Optional AI formatting sends text only when you turn it on, never the audio.",
        },
      ],
    },
    ctaText: "Try Voicetypr for coding",
  },
  {
    slug: "dictation-for-writers",
    h1: "The best dictation software for writers in 2026",
    metaTitle: "Best Dictation Software for Writers (2026) — Novels & Blogs",
    lede:
      "Drafting a book or a backlog of posts by voice shouldn't mean renting a tool by the month or uploading unpublished work to the cloud. Here are the honest options for writers — including the one that drafts into your real manuscript, offline.",
    angle: "roundup",
    competitors: [
      {
        name: "Dragon Professional",
        price: "$699 once",
        platforms: "Windows",
        offline: "Yes",
        subscription: false,
        limitation: "Accurate offline dictation with deep editing commands, but a steep one-time price and Windows-only since the Mac edition was retired.",
      },
      {
        name: "Otter.ai",
        price: "Free; Pro $16.99/mo",
        platforms: "Web, iOS, Android",
        offline: "No",
        subscription: true,
        limitation: "Built to transcribe meetings and recordings in the cloud, not to draft a chapter straight into your editor.",
      },
      {
        name: "Apple Dictation",
        price: "Free",
        platforms: "macOS + iOS",
        offline: "Partial",
        subscription: false,
        limitation: "Free and built in, but tuned for short bursts rather than sustained long-form drafting and punctuation-heavy prose.",
      },
      {
        name: "Google Docs Voice Typing",
        price: "Free",
        platforms: "Chrome browser",
        offline: "No",
        subscription: false,
        limitation: "Free and fine in a pinch, but it only runs inside Google Docs in Chrome and sends your audio to Google's servers.",
      },
      {
        name: "Voicetypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
        limitation: "Pay-once app that drafts clean text into any writing tool — Scrivener, Word, Docs, Ulysses, or your CMS — with transcription on-device by default.",
      },
    ],
    whySwitch: [
      "Drafts into the writing app you already use — Scrivener, Word, Google Docs, Ulysses, or your CMS",
      "Transcribes your manuscript on your own machine by default, so unpublished drafts stay private",
      "Pay once instead of renting a dictation tool by the month while you write a book",
      "Local models keep up with long-form sessions — no time caps or upload limits",
    ],
    decisionSupport: {
      searchIntent:
        "Compare dictation tools for long-form writing — novels, articles, blog posts, and newsletters — by where the text lands, what it costs over time, and what stays private.",
      bestFor: [
        "Novelists and long-form writers who draft thousands of words by voice and want them in their real manuscript",
        "Bloggers and journalists who'd rather own a one-time tool than add another monthly subscription",
        "Writers handling unpublished or embargoed drafts who want voice transcribed on-device",
      ],
      decisionCriteria: [
        {
          title: "Does it write where you write?",
          body: "A dictation tool for writers should paste into your manuscript app — not leave you copying a transcript out of a separate window.",
        },
        {
          title: "Cost over a whole book",
          body: "A subscription looks small per month, but drafting a book or a year of posts turns it into a recurring bill; a one-time license is predictable.",
        },
        {
          title: "Who sees your draft?",
          body: "Unpublished work is sensitive. Check whether your voice is transcribed on-device or uploaded to a provider's servers.",
        },
      ],
      competitorNotes: [
        {
          title: "Dragon Professional",
          body: "The most powerful desktop dictation for accuracy and editing-by-voice, and it runs offline — but it's a $699 outlay and Windows-only, so Mac writers are out.",
        },
        {
          title: "Otter.ai",
          body: "Excellent for turning interviews and meetings into searchable transcripts, but it's a cloud recorder, not a tool for drafting prose into your editor.",
        },
        {
          title: "Google Docs Voice Typing",
          body: "A genuinely free option if you live in Google Docs and Chrome, but it stops at the Docs window and needs an internet connection to work.",
        },
      ],
      faq: [
        {
          q: "What's the best dictation tool for writing a novel?",
          a: "Look for long-form stamina, offline transcription, and text that lands in your manuscript app. Voicetypr pastes into Scrivener, Word, or Ulysses, runs locally by default, and is a one-time purchase.",
        },
        {
          q: "Is Dragon still worth it for writers?",
          a: "Dragon Professional is accurate, works offline, and has strong editing-by-voice commands, but it's $699 and Windows-only. Voicetypr is cheaper, pay-once, and runs on both macOS and Windows.",
        },
        {
          q: "Can I dictate directly into Scrivener or Word?",
          a: "Yes. Voicetypr types into whatever field holds your cursor, so it works in Scrivener, Word, Google Docs, Ulysses, and your CMS — no add-on per app.",
        },
      ],
    },
    ctaText: "Try Voicetypr for writing",
  },
  {
    slug: "free-voice-to-text",
    h1: "The best free voice-to-text apps in 2026",
    metaTitle: "Best Free Voice-to-Text Apps in 2026 — Honest Roundup",
    lede:
      "There are genuinely good free voice-to-text tools, and most are built right into your Mac, PC, or browser. Here's an honest map of what each free option does well, where it stops, and the one pay-once app worth knowing about.",
    angle: "roundup",
    competitors: [
      {
        name: "Apple Dictation",
        price: "Free",
        platforms: "macOS + iOS",
        offline: "Yes on Apple Silicon",
        subscription: false,
        limitation: "Free, built in, and runs on-device on Apple Silicon once the language model downloads — but it's Apple-only, and older Intel Macs lean on the cloud.",
      },
      {
        name: "Google Docs Voice Typing",
        price: "Free",
        platforms: "Web (Chrome)",
        offline: "No",
        subscription: false,
        limitation: "Genuinely free and accurate, but it only works inside Google Docs and Slides in Chrome, and it needs an internet connection.",
      },
      {
        name: "Windows Voice Typing",
        price: "Free",
        platforms: "Windows 11",
        offline: "No",
        subscription: false,
        limitation: "Free and system-wide via Win+H, but Windows-only and it streams your audio to Microsoft's cloud, so it won't work without internet.",
      },
      {
        name: "OpenAI Whisper (self-host)",
        price: "Free (DIY)",
        platforms: "Cross-platform",
        offline: "Yes",
        subscription: false,
        limitation: "The model is free and runs fully offline, but it's not an app — no hotkey, no paste-anywhere; you build and maintain the workflow yourself.",
      },
      {
        name: "Voicetypr",
        price: "From $39 once · free trial",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
        limitation: "Not free — pay once from $39 with a 3-day trial, no card — but it runs locally by default and pastes into any app on Mac or Windows.",
      },
    ],
    whySwitch: [
      "Works in every app — your editor, browser, chat box, or AI prompt — not just one document or one browser",
      "Runs offline by default, so a dropped connection never stops you mid-sentence",
      "One tool across macOS and Windows, with no per-app or per-browser limits",
      "A finished app with a hotkey and paste-anywhere — none of Whisper's DIY setup, and you pay once instead of subscribing",
    ],
    decisionSupport: {
      searchIntent:
        "Find a genuinely free voice-to-text tool, and figure out when a low-cost paid app earns its price. Compare the free built-in options from Apple, Google, and Microsoft, plus self-hosted Whisper, against a pay-once local app.",
      bestFor: [
        "People who want a free, built-in way to dictate and won't run into its one-app or one-OS boundary",
        "Anyone weighing the free tools against a single inexpensive app that works offline in every app",
        "Privacy-minded writers who'd rather their voice never touch a cloud service",
      ],
      decisionCriteria: [
        {
          title: "Free, or free-with-limits?",
          body: "Every free tool here has a boundary: one app, one browser, one operating system, or a hard internet requirement. Pick the one whose limit you'll never hit.",
        },
        {
          title: "Does it work where you actually write?",
          body: "Apple and Windows dictation type into most text fields; Google's only works inside Docs. Check that your pick reaches your editor, terminal, and AI prompt box, not just a notes window.",
        },
        {
          title: "Online or on-device?",
          body: "Google Docs Voice Typing and Windows Win+H send your audio to the cloud and need internet. Apple Dictation on Apple Silicon, self-hosted Whisper, and Voicetypr keep transcription on your machine.",
        },
      ],
      competitorNotes: [
        {
          title: "Apple Dictation",
          body: "The best free starting point on a Mac: system-wide, and on-device on Apple Silicon once the language model downloads. It's Apple-only, so it leaves Windows and the rest of your devices out.",
        },
        {
          title: "Google Docs Voice Typing",
          body: "Accurate and free, and great if you live in Google Docs. It won't follow you into other apps or browsers, and it needs a connection because the recognition runs in the cloud.",
        },
        {
          title: "OpenAI Whisper",
          body: "An excellent open model that's free and runs offline — if you're willing to wire it up. You'll be building the hotkey, the paste step, and the app integration a finished tool already hands you.",
        },
      ],
      faq: [
        {
          q: "What's the best fully free option?",
          a: "It depends on your platform. On a Mac, Apple Dictation is hard to beat — it's built in and runs on-device on Apple Silicon. On Windows 11, Win+H Voice Typing works system-wide but sends audio to the cloud. For writing inside Google Docs, Google's Voice Typing is accurate, and for a fully offline DIY setup, self-hosted Whisper is free. Each is genuinely free; each has a boundary.",
        },
        {
          q: "Is Voicetypr free?",
          a: "No. Voicetypr is pay-once from $39, with a 3-day free trial and no card required. It's the paid option on this list — worth a look once a free tool's limit (one app, one browser, or a cloud requirement) starts getting in your way.",
        },
        {
          q: "Which free options actually work offline?",
          a: "Apple Dictation runs on-device on Apple Silicon Macs once the language model downloads, and self-hosted Whisper runs fully offline. Google Docs Voice Typing and Windows Win+H stream audio to the cloud, so they need internet. Voicetypr transcribes on your machine by default.",
        },
      ],
    },
    ctaText: "Try Voicetypr free for 3 days",
  },
  {
    slug: "dictation-for-students",
    h1: "The best dictation software for students in 2026",
    metaTitle: "Best Dictation Software for Students (2026) — Free & Paid",
    lede:
      "There's a solid free dictation tool for almost every student — and a pay-once one for when the free options get in your way. Here's an honest look at what each is actually good for.",
    angle: "roundup",
    competitors: [
      {
        name: "Otter.ai",
        price: "Free tier; Pro from $8.33/mo",
        platforms: "Web, iOS, Android",
        offline: "No",
        subscription: true,
        limitation:
          "Built to record and transcribe lectures and meetings, not to dictate into the essay you're writing; the free tier caps at 300 minutes a month with a 30-minute limit per recording.",
      },
      {
        name: "Google Docs Voice Typing",
        price: "Free",
        platforms: "Chrome browser",
        offline: "No",
        subscription: false,
        limitation:
          "Free with no word limit, but it only works inside Google Docs in Chrome and needs an internet connection.",
      },
      {
        name: "Apple Dictation",
        price: "Free",
        platforms: "macOS + iOS",
        offline: "On Apple Silicon",
        subscription: false,
        limitation:
          "Free, built in, and works in any text field, but it's tuned for short phrases and light on formatting for long essays.",
      },
      {
        name: "Windows Voice Typing",
        price: "Free",
        platforms: "Windows 11",
        offline: "No",
        subscription: false,
        limitation:
          "Free and built in (Win+H), but online-first and better for quick snippets than a full assignment.",
      },
      {
        name: "Voicetypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
        limitation:
          "Pay-once app that transcribes on your laptop and pastes clean text into any app, including your school's web portal.",
      },
    ],
    whySwitch: [
      "Works in any app — your essay editor, the school portal, email, and Google Docs alike",
      "Transcribes on your laptop by default, so notes and drafts stay on your machine",
      "Pay once instead of a subscription that renews every month on a student budget",
      "Helps when typing is the barrier — dyslexia, dysgraphia, RSI, or a late-night deadline",
    ],
    decisionSupport: {
      searchIntent:
        "Compare free and paid dictation tools for student work — essays, lecture notes, and assignments — on the web, a Mac, or a Windows laptop.",
      bestFor: [
        "Students drafting essays and assignments who want to speak first and edit later",
        "Note-takers who'd rather not add a monthly fee on a student budget",
        "Students who dictate because typing is slow or painful — dyslexia, dysgraphia, or RSI",
      ],
      decisionCriteria: [
        {
          title: "Free, pay-once, or subscription",
          body: "On a student budget the math matters. Free built-in tools cover a lot, a one-time license avoids renewals, and a subscription keeps charging every month you keep writing.",
        },
        {
          title: "Where you actually write",
          body: "Some tools only work in one place — Google Docs, or a Mac text field. Check that dictation reaches the editor, browser portal, and email box where your coursework actually lives.",
        },
        {
          title: "Does it work without wifi",
          body: "Cloud tools stop when the connection drops. If you write in the library, on the bus, or on patchy campus wifi, on-device transcription keeps going.",
        },
      ],
      competitorNotes: [
        {
          title: "Otter.ai",
          body: "Best for recording a lecture or meeting and getting a searchable transcript afterward. It's a transcription service, not a dictate-into-your-essay tool, and the free tier stops at 300 minutes a month.",
        },
        {
          title: "Google Docs Voice Typing",
          body: "Genuinely free with no word limit, which is hard to beat for drafting straight into Docs. It only works inside Google Docs in Chrome, though, and processes your speech in the cloud, so you need a connection.",
        },
        {
          title: "Apple Dictation",
          body: "Free, built into every Mac, and works in any text field — a fine place to start. It's built for short phrases and light on formatting, so long essays can get tiring.",
        },
      ],
      faq: [
        {
          q: "Is there a free option for students?",
          a: "Yes, several. Google Docs Voice Typing is free with no word limit but only works in Docs in Chrome; Apple Dictation and Windows Voice Typing are free and built into the OS; Otter.ai has a free tier capped at 300 minutes a month. Voicetypr is a paid, pay-once app for when those limits get in your way.",
        },
        {
          q: "Do I need an internet connection?",
          a: "It depends on the tool. Google Docs Voice Typing and Otter.ai process your speech in the cloud, so they need wifi. Voicetypr transcribes on your laptop by default, so it keeps working in the library or on a weak connection.",
        },
        {
          q: "Can dictation help if typing is hard for me?",
          a: "Many students dictate because of dyslexia, dysgraphia, or a hand injury, and speaking a draft can be faster and less painful than typing it. Voicetypr lets you write by voice in any app — it isn't a medical device or an academic-integrity or grading tool.",
        },
      ],
    },
    ctaText: "Try Voicetypr for coursework",
  },
  {
    slug: "voice-to-text-for-chatgpt",
    h1: "The best voice-to-text for ChatGPT in 2026",
    metaTitle: "Best Voice-to-Text for ChatGPT (2026) — Dictate Anywhere",
    lede:
      "ChatGPT's built-in voice is genuinely good — but it only works inside ChatGPT. Here are the honest options for dictating prompts everywhere you type, including the one that runs locally and pastes into any app.",
    angle: "roundup",
    competitors: [
      {
        name: "ChatGPT voice & dictation",
        price: "Free in the app",
        platforms: "iOS, Android, web, desktop",
        offline: "No",
        subscription: false,
        limitation: "Free and good, but it only works inside ChatGPT — you can't dictate the same way into Claude, your editor, or email.",
      },
      {
        name: "Wispr Flow",
        price: "$15/mo",
        platforms: "macOS + Windows",
        offline: "No",
        subscription: true,
        limitation: "Fast and polished across apps, but cloud-based and subscription-priced — your prompts leave your machine.",
      },
      {
        name: "Superwhisper",
        price: "$8.49/mo+",
        platforms: "macOS + Windows",
        offline: "Partial",
        subscription: true,
        limitation: "Capable local-first dictation, but Pro is subscription-priced and the one-time lifetime license runs around $250 up front.",
      },
      {
        name: "Voicetypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
        limitation: "Pay-once app that dictates into ChatGPT, Claude, your editor — anywhere your cursor is — with local transcription by default.",
      },
    ],
    whySwitch: [
      "Dictates into ChatGPT and Claude, Cursor, Gemini, email — anywhere your cursor sits",
      "Transcribes on your machine by default, so your prompts stay private",
      "Pay once instead of stacking another subscription on top of ChatGPT Plus",
      "Scriptable Agent CLI and a local HTTP API for automating dictation",
    ],
    decisionSupport: {
      searchIntent:
        "Compare ChatGPT's built-in voice with dedicated dictation tools for talking prompts into ChatGPT, Claude, and other AI chat all day.",
      bestFor: [
        "People who dictate prompts into ChatGPT all day and want the same speed in Claude, Gemini, and Cursor",
        "Writers and researchers who'd rather their prompts be transcribed on-device",
        "Anyone who'd rather pay once than add another subscription on top of ChatGPT Plus",
      ],
      decisionCriteria: [
        {
          title: "Does it work outside ChatGPT?",
          body: "ChatGPT's own voice is great inside the app, but stops at the app boundary. A general dictation tool should paste into Claude, Cursor, email, and any other prompt box too.",
        },
        {
          title: "Where do your prompts go?",
          body: "Prompts can carry sensitive context. Check whether your speech is transcribed on-device or streamed to a provider before the text ever reaches the model.",
        },
        {
          title: "What it costs on top of your AI bills",
          body: "You may already pay for ChatGPT Plus or Claude. A pay-once dictation tool avoids piling a second monthly fee on top of the subscriptions you already have.",
        },
      ],
      competitorNotes: [
        {
          title: "ChatGPT voice & dictation",
          body: "Built in, free, and genuinely useful for talking to ChatGPT. The catch is the boundary: it dictates into ChatGPT, not into Claude, your editor, or the rest of your apps.",
        },
        {
          title: "Wispr Flow",
          body: "Polished and fast across apps, but cloud-first and subscription-priced — a poor fit if you'd rather keep prompts local or own the tool outright.",
        },
        {
          title: "Superwhisper",
          body: "Capable and increasingly local-first, but Pro is a subscription and the lifetime option asks for roughly $250 up front.",
        },
      ],
      faq: [
        {
          q: "Doesn't ChatGPT already have voice?",
          a: "Yes — ChatGPT has built-in Voice Mode and dictation, and they work well. The limitation is that they only work inside ChatGPT. The moment you switch to Claude, Cursor, or your email, you're back to typing. A system-wide tool like Voicetypr dictates into all of them.",
        },
        {
          q: "Does it work with Claude and other AI chat?",
          a: "Yes. Voicetypr pastes transcribed text wherever your cursor is, so the same hotkey dictates into ChatGPT, Claude, Gemini, Perplexity, Cursor, and any other prompt box or app.",
        },
        {
          q: "Do my prompts stay private?",
          a: "By default your voice is transcribed on your machine, so the audio never leaves the device. Optional AI formatting sends text only when you turn it on, never the audio.",
        },
      ],
    },
    ctaText: "Try Voicetypr for ChatGPT",
  },
  {
    slug: "dictation-app",
    h1: "The best dictation app in 2026",
    metaTitle: "The Best Dictation App in 2026 — Offline & Pay-Once Picks",
    lede:
      "Search \"best dictation app\" and you get meeting recorders, browser add-ons, and a stack of subscriptions. Here's an honest look at the real options — including the one that transcribes offline and types into any app at your cursor.",
    angle: "category-owner",
    competitors: [
      {
        name: "Dragon",
        price: "$699 once",
        platforms: "Windows",
        offline: "Yes",
        subscription: false,
        limitation: "The heavyweight for desktop dictation, but a professional-grade price, Windows-only, with no current Mac version.",
      },
      {
        name: "Otter.ai",
        price: "$16.99/mo",
        platforms: "Web + iOS + Android",
        offline: "No",
        subscription: true,
        limitation: "Excellent for recording and transcribing meetings, but it's a cloud recorder — not built to type at your cursor across apps.",
      },
      {
        name: "Apple Dictation",
        price: "Free",
        platforms: "macOS + iOS",
        offline: "Partial",
        subscription: false,
        limitation: "Free and built in, with on-device dictation on Apple Silicon, but tied to Apple's text fields and light on long-form, cross-app control.",
      },
      {
        name: "Superwhisper",
        price: "$8.49/mo+",
        platforms: "macOS + Windows",
        offline: "Partial",
        subscription: true,
        limitation: "Strong, privacy-minded dictation with local models, but subscription-priced for people who'd rather own the tool.",
      },
      {
        name: "Wispr Flow",
        price: "$15/mo",
        platforms: "macOS + Windows",
        offline: "No",
        subscription: true,
        limitation: "Fast, polished capture, but cloud-based and subscription-priced — your voice is transcribed off your machine.",
      },
      {
        name: "Voicetypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
        limitation: "Pay-once app for Mac and Windows that transcribes locally by default and pastes into any app at your cursor.",
      },
    ],
    whySwitch: [
      "Types into every app — editor, browser, chat box, or prompt field — not just one text window",
      "Transcribes your voice on your machine by default, so audio never leaves the device",
      "Pay once from $39 — no monthly subscription to keep dictating",
      "Runs fast local Whisper and Parakeet models on both Mac and Windows",
    ],
    decisionSupport: {
      searchIntent:
        "Find the best overall dictation app — weighing built-in, cloud, and pay-once tools for typing by voice across everyday apps.",
      bestFor: [
        "Anyone who wants to type by voice in any app, not just a notes window or a meeting recorder",
        "People who'd rather pay once than add another monthly subscription to their stack",
        "Privacy-minded users who want their voice transcribed on their own machine",
      ],
      decisionCriteria: [
        {
          title: "Where does the text land?",
          body: "A real dictation app pastes into whatever editor, browser, chat box, or prompt field has your cursor — it doesn't trap your words in its own window.",
        },
        {
          title: "Where does your voice go?",
          body: "Check whether audio is transcribed on-device or streamed to a provider's servers. On-device transcription keeps your recordings off the cloud entirely.",
        },
        {
          title: "What does it cost over time?",
          body: "Subscriptions look cheap at signup and add up year after year. A one-time license or a built-in tool can cost far less across the life of the app.",
        },
      ],
      competitorNotes: [
        {
          title: "Dragon",
          body: "The heavyweight for professional desktop dictation, with deep accuracy and voice commands. The trade-offs are a $699 license, Windows-only support, and no current Mac version.",
        },
        {
          title: "Otter.ai",
          body: "Built to record and transcribe meetings, not to type at your cursor. For searchable meeting notes it's excellent; for dictating into any app, it's a different category of tool.",
        },
        {
          title: "Superwhisper",
          body: "A strong, privacy-minded dictation app with solid local models on Mac and Windows. The main trade-off is subscription pricing for people who'd rather buy the tool once.",
        },
      ],
      faq: [
        {
          q: "What's the difference between a dictation app and a transcription app?",
          a: "A dictation app types your spoken words into the app you're using right now. A transcription app like Otter records and writes up meetings or audio files after the fact. Voicetypr is a dictation app — speak, and clean text lands at your cursor.",
        },
        {
          q: "Do I need an internet connection?",
          a: "No. Voicetypr transcribes your voice on your machine by default, so core dictation works fully offline. Optional AI formatting sends text only, and only if you turn it on.",
        },
        {
          q: "Is a pay-once app really cheaper than a subscription?",
          a: "Over time, usually yes. Voicetypr is a one-time purchase from $39, while cloud dictation tools commonly run $8–$17 a month — more than the price of Voicetypr within the first year.",
        },
      ],
    },
    ctaText: "Try Voicetypr free",
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
        name: "Voicetypr",
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
      "Same style of on-device transcription, with Mac and Windows builds and lifetime pricing.",
    ],
    switchGuide: {
      voiceTyprIf: [
        'You need Windows as well as Mac',
        'You want pay-once pricing instead of another subscription',
        'You want local transcription by default',
      ],
      otherIf: [
        "You only dictate on Mac and already like Superwhisper's workflow",
        'You want the lightest possible install with minimal setup',
      ],
      notes: [
        { title: 'Superwhisper', body: 'Strong Mac capture tool with polished UX, but recurring pricing and no Windows build.' },
        { title: 'Voicetypr', body: 'Same style of on-device transcription, broader platform coverage, and lifetime pricing for daily dictation.' },
      ],
    },
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
        name: "Voicetypr",
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
    switchGuide: {
      voiceTyprIf: [
        'Recurring pricing is the blocker',
        'You want offline-first transcription on your machine',
        'You dictate into many apps with one hotkey',
      ],
      otherIf: [
        'You want the most polished cloud-first capture with minimal setup',
        'You are fine paying monthly for convenience',
      ],
      notes: [
        { title: 'Wispr Flow', body: 'Fast cloud workflow, but subscription pricing and less offline-first positioning.' },
        { title: 'Voicetypr', body: 'Built for founders who want local transcription, lifetime pricing, and cross-app paste.' },
      ],
    },
    ctaText: "Switch from Wispr Flow",
  },
  {
    slug: "dragon",
    metaTitle: "Best Dragon alternative (2026) | Voicetypr",
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
        name: "Voicetypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "Lower upfront price than Dragon Professional",
      "Modern on-device transcription without Dragon's profile-training workflow",
      "Works on Mac too",
      "Active development with regular updates",
    ],
    switchGuide: {
      voiceTyprIf: [
        "You want modern dictation without Dragon's training workflow",
        'You need Mac and Windows support',
        'You want a much lower upfront price',
      ],
      otherIf: [
        'You need deep medical/legal command vocabularies',
        'You already invested in Dragon profiles and macros',
      ],
      notes: [
        { title: 'Dragon', body: 'Still powerful for specialized command-and-control workflows, but heavy setup and price.' },
        { title: 'Voicetypr', body: 'Modern on-device dictation for everyday writing in any text field.' },
      ],
    },
    ctaText: "Replace Dragon",
  },
  {
    slug: "windows-speech-recognition",
    metaTitle: "Best Windows Speech Recognition alt (2026) | Voicetypr",
    h1: "The best Windows Speech Recognition alternative in 2026",
    lede:
      "Classic Windows Speech Recognition is deprecated and replaced by Voice Access on newer Windows 11 releases. If you want modern offline dictation for every app, Voicetypr is the cleaner upgrade.",
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
        name: "Voicetypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "Built for dictation-first writing, not full computer control",
      "Modern on-device transcription instead of the old Windows speech engine",
      "Works in every normal text field with one hotkey",
      "A clearer upgrade path for Windows users who still need offline privacy",
    ],
    switchGuide: {
      voiceTyprIf: [
        'You want dictation into normal apps, not full OS control',
        'You need a clearer upgrade from deprecated Windows Speech Recognition',
        'You want offline local transcription with a modern hotkey workflow',
      ],
      otherIf: [
        'You need hands-free navigation and command control — Voice Access is the better fit',
        'You only need occasional short Windows Voice Typing snippets',
      ],
      notes: [
        { title: 'Windows Speech Recognition', body: 'Deprecated path on newer Windows releases; fine historically, weak as a long-term plan.' },
        { title: 'Voicetypr', body: 'Dictation-first writing tool for every text field with local models and one hotkey.' },
      ],
    },
    ctaText: "Replace Windows Speech Recognition",
  },
  {
    slug: "otter-ai",
    h1: "The best Otter.ai alternative in 2026",
    lede:
      "Otter.ai records and transcribes meetings in the cloud. If what you actually want is to dictate into any app — offline, pay once — here's the alternative.",
    angle: "comparison",
    competitors: [
      {
        name: "Otter.ai",
        price: "Free; Pro $16.99/mo",
        platforms: "Web, iOS, Android",
        offline: "No",
        subscription: true,
      },
      {
        name: "Voicetypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "Dictate into any app — Otter records meetings, it doesn't type at your cursor",
      "Transcribes on your machine by default instead of uploading audio to the cloud",
      "Pay once instead of $16.99/month",
      "Works offline on Mac and Windows, no internet required",
    ],
    switchGuide: {
      voiceTyprIf: [
        "You want to dictate text into apps, not record and transcribe meetings",
        "You'd rather your voice stay on your machine",
        "You want pay-once pricing instead of a monthly subscription",
      ],
      otherIf: [
        "Your main job is recording meetings and calls and getting searchable transcripts with summaries",
        "You need shared, collaborative meeting notes across a team",
      ],
      notes: [
        { title: "Otter.ai", body: "A polished cloud service for recording meetings and producing summaries and searchable transcripts — built around capture after the fact, not live dictation." },
        { title: "Voicetypr", body: "A dictation tool: hold a hotkey, speak, and clean text lands at your cursor in any app, transcribed on-device by default." },
      ],
    },
    ctaText: "Switch from Otter.ai",
  },
  {
    slug: "macwhisper",
    h1: "The best MacWhisper alternative in 2026",
    lede:
      "MacWhisper is a private, pay-once Mac app — but it's built around transcribing audio and video files, and it only runs on macOS. If you want dictation into any app across Mac and Windows, here's the alternative.",
    angle: "comparison",
    competitors: [
      {
        name: "MacWhisper",
        price: "Free; Pro €59 once",
        platforms: "macOS only",
        offline: "Yes — on-device",
        subscription: false,
      },
      {
        name: "Voicetypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "Works on Windows too — MacWhisper is Mac-only",
      "Built for dictation into any app at your cursor, not transcribing files after the fact",
      "v2 adds a scriptable Agent CLI and local HTTP API for your own workflows",
      "Like MacWhisper, transcription runs on-device — but Voicetypr is dictation-first on both Mac and Windows",
    ],
    switchGuide: {
      voiceTyprIf: [
        "You work across Mac and Windows, not just macOS",
        "You want to dictate into any app at your cursor as your main workflow",
        "You want to script dictation with the v2 Agent CLI and local HTTP API",
      ],
      otherIf: [
        "You're Mac-only and mainly transcribe existing audio and video files — MacWhisper is excellent at that",
        "You need batch file transcription, speaker labels, or subtitle (SRT/VTT) export",
      ],
      notes: [
        { title: "MacWhisper", body: "A polished, private Mac app built around transcribing audio and video files on-device — batch jobs, speaker labels, and subtitle export — with system-wide dictation added in Pro." },
        { title: "Voicetypr", body: "A dictation-first tool on Mac and Windows: hold a hotkey, speak, and clean text lands at your cursor in any app, transcribed on-device, with a scriptable Agent CLI in v2." },
      ],
    },
    ctaText: "Switch from MacWhisper",
  },
  {
    slug: "willow-voice",
    h1: "The best Willow Voice alternative in 2026",
    lede:
      "Willow Voice is a polished AI dictation app, but it runs in the cloud by default and bills monthly. If you'd rather keep transcription on your machine and pay once, here's the alternative.",
    angle: "comparison",
    competitors: [
      {
        name: "Willow Voice",
        price: "$15/mo",
        platforms: "macOS, Windows, iOS",
        offline: "Cloud; optional offline (Mac)",
        subscription: true,
      },
      {
        name: "Voicetypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "Transcribes on your machine by default — Willow runs in the cloud unless you turn on its optional offline mode",
      "Pay once instead of $15/month",
      "Offline dictation on Windows too — Willow's offline mode is Mac and iOS only",
      "Same hotkey-to-cursor dictation, transcribed on-device, for a one-time price",
    ],
    switchGuide: {
      voiceTyprIf: [
        "You want transcription that runs on-device by default, not in the cloud",
        "You'd rather pay once than subscribe monthly",
        "You want offline dictation on Windows as well as Mac",
      ],
      otherIf: [
        "You prefer Willow's cloud-based workflow and are fine paying monthly",
        "You want its iPhone app and cloud sync across Mac, Windows, and phone",
      ],
      notes: [
        { title: "Willow Voice", body: "A polished AI dictation app for Mac, Windows, and iPhone, but it runs in the cloud by default and bills as a monthly subscription." },
        { title: "Voicetypr", body: "Hotkey-to-cursor dictation that transcribes on-device by default, on Mac and Windows, for a one-time price." },
      ],
    },
    ctaText: "Switch from Willow Voice",
  },
  {
    slug: "talon",
    h1: "The best Talon Voice alternative in 2026",
    lede:
      "Talon Voice is a powerful, beloved tool for controlling your whole computer by voice — but it has a real learning curve. If you only need plain dictation that types into any app, here's the simpler, pay-once alternative.",
    angle: "comparison",
    competitors: [
      {
        name: "Talon Voice",
        price: "Free; paid beta on Patreon",
        platforms: "macOS, Windows, Linux",
        offline: "Yes",
        subscription: false,
      },
      {
        name: "Voicetypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "No command grammars or scripting to learn — hold a hotkey, speak, and clean text lands at your cursor",
      "Plain dictation into any app, not a voice-control system you have to configure",
      "A polished, ready-to-use app: install and start dictating in minutes",
      "Transcribes on-device by default, and you pay once instead of keeping up a Patreon pledge for the latest build",
    ],
    switchGuide: {
      voiceTyprIf: [
        "You just want to dictate text and have it appear in any app, with almost no setup",
        "You'd rather not learn command grammars or maintain config files",
        "You want a polished pay-once app with on-device transcription",
      ],
      otherIf: [
        "You need full hands-free control of your computer — voice commands, clicking, and navigating without a keyboard, not just dictation",
        "You rely on Talon's deep customization and scripting, or use eye tracking and noise control as part of an accessibility or RSI setup",
      ],
      notes: [
        { title: "Talon Voice", body: "A powerful, well-loved hands-free system for operating your whole computer by voice, eye tracking, and noises — widely used for accessibility, RSI, and voice coding. That power comes with command grammars and configuration to learn." },
        { title: "Voicetypr", body: "Dictation only, by design: hold a hotkey, speak, and clean text pastes into any app at your cursor, transcribed on-device. Nothing to script, pay once." },
      ],
    },
    ctaText: "Switch from Talon",
  },
  {
    slug: "notta",
    h1: "The best Notta alternative in 2026",
    lede:
      "Notta records and transcribes meetings in the cloud. If what you actually want is to dictate into any app — offline, pay once — here's the alternative.",
    angle: "comparison",
    competitors: [
      {
        name: "Notta",
        price: "Free; Pro $13.99/mo",
        platforms: "Web, iOS, Android, Chrome",
        offline: "No",
        subscription: true,
      },
      {
        name: "Voicetypr",
        price: "From $39 once",
        platforms: "macOS + Windows",
        offline: "Yes — local by default",
        subscription: false,
      },
    ],
    whySwitch: [
      "Dictate into any app — Notta transcribes meetings, it doesn't type at your cursor",
      "Transcribes on your machine by default instead of uploading audio to the cloud",
      "Pay once instead of $13.99/month",
      "Works offline on Mac and Windows, no internet required",
    ],
    switchGuide: {
      voiceTyprIf: [
        "You want to dictate text into apps, not record and transcribe meetings",
        "You'd rather your voice stay on your machine",
        "You want pay-once pricing instead of a monthly subscription",
      ],
      otherIf: [
        "Your main job is recording and summarizing meetings and calls across Zoom, Google Meet, and Teams",
        "You need multi-language meeting transcription shared across a team",
      ],
      notes: [
        { title: "Notta", body: "A cloud transcription and meeting-notes service — its bots join Zoom, Google Meet, and Teams calls to produce speaker-labeled transcripts and summaries in dozens of languages, built around meetings rather than live dictation." },
        { title: "Voicetypr", body: "A dictation tool: hold a hotkey, speak, and clean text lands at your cursor in any app, transcribed on-device by default." },
      ],
    },
    ctaText: "Switch from Notta",
  },
];


export function getSeoPageMetaTitle(page: SeoPage): string {
  if (page.metaTitle) return page.metaTitle;
  return `${page.h1} — Voicetypr`;
}

export function getSeoPageBySlug(slug: string): SeoPage | undefined {
  return seoPages.find((p) => p.slug === slug);
}

export function getAlternativePageBySlug(slug: string): SeoPage | undefined {
  return alternativePages.find((p) => p.slug === slug);
}
