/**
 * Use-case data: structured per-niche content for /use-cases/* pages.
 * Each entry renders through the same editorial template — keep the voice
 * consistent with the homepage and FounderNote (direct, specific, no SaaS
 * marketing slop).
 */

export type UseCaseCategory = "accessibility" | "profession" | "workflow";

export const USE_CASE_PAGES_LAST_UPDATED = "2026-05-18";

export type UseCase = {
  slug: string;
  title: string; // metadata title
  ogTitle: string; // shorter for OG
  description: string; // metadata description, 145-155 chars
  navLabel: string; // hub card / nav label
  category: UseCaseCategory;
  /** Order within category. Lower = higher priority. */
  order: number;
  hero: {
    eyebrow: string;
    /** Use <em>...</em> markers around the italic accent word/phrase. */
    headline: string;
    lede: string;
    metaStrip: string[]; // tiny mono ribbon under the lede
  };
  pains: Array<{ title: string; body: string }>; // 3 entries
  outcomes: Array<{ marker: string; title: string; body: string; meta: string }>; // 3 entries
  workflows: Array<{ title: string; body: string }>; // 2-3 entries
  faqs: Array<{ q: string; a: string }>; // 4-5 entries
  finalCta: {
    eyebrow: string;
    /** Use <em>...</em> markers for italic accent. */
    headline: string;
    body: string;
  };
  keywords: string[];
};

export const USE_CASE_CATEGORIES: Record<UseCaseCategory, { label: string; eyebrow: string; description: string }> = {
  accessibility: {
    label: "Accessibility",
    eyebrow: "for the way you actually work",
    description:
      "If typing is the bottleneck — physical, cognitive, or otherwise — voice routes around it. These are the people VoiceTypr was built for first.",
  },
  profession: {
    label: "By profession",
    eyebrow: "what it looks like in your craft",
    description:
      "How VoiceTypr shows up day-to-day for the people who use it most. Concrete workflows, not generic productivity claims.",
  },
  workflow: {
    label: "By workflow",
    eyebrow: "for the things you do every day",
    description:
      "Specific tasks where dictating saves more than time — drafting, prompting, replying, capturing.",
  },
};

const USE_CASE_ENTRIES: UseCase[] = [
  // ──────────────────────────────────────────────────────────────────────
  // ACCESSIBILITY
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "adhd",
    title: "VoiceTypr for ADHD — Voice typing that bypasses the friction",
    ogTitle: "VoiceTypr for ADHD",
    description:
      "Type at the speed you think. Voice typing for people with ADHD: capture ideas before they vanish, write at speaking speed, and reduce typing friction.",
    navLabel: "ADHD",
    category: "accessibility",
    order: 1,
    hero: {
      eyebrow: "voicetypr for adhd",
      headline: "The thought just left. <em>Catch it before it does.</em>",
      lede:
        "If your brain runs faster than your fingers — and the idea is gone by the time you finish typing the first sentence — voice closes that gap. VoiceTypr captures the thought at speaking speed, locally, and pastes it wherever your cursor is.",
      metaStrip: ["speaking-speed capture", "local transcription", "no setup ritual"],
    },
    pains: [
      {
        title: "The idea was there. Now it isn't.",
        body:
          "By the time you have opened the right app, found the right doc, and typed the first sentence, the thought can move on. For many people with ADHD, voice input helps capture the thread before it disappears.",
      },
      {
        title: "Starting is the hardest part.",
        body:
          "Cold-start friction is real. A blank doc with a blinking cursor is a tax. Talking out loud is, for a lot of people, much easier than starting to type from nothing.",
      },
      {
        title: "Hyperfocus produces 1,000 words; later you can't read them.",
        body:
          "When you're locked in, typing keeps up but punctuation and spelling don't. Going back to clean it up later is a different cognitive mode entirely.",
      },
    ],
    outcomes: [
      {
        marker: "<2s",
        title: "From thought to text",
        body:
          "Hold the hotkey, say the thing, release. Text appears in whatever app you were already in. No new window, no friction.",
        meta: "Outcome · capture",
      },
      {
        marker: "0",
        title: "New apps to learn",
        body:
          "Works inside Notion, Apple Notes, Things, Bear, Cursor, ChatGPT, Slack, Gmail. Wherever you would normally type, you can now talk.",
        meta: "Outcome · zero overhead",
      },
      {
        marker: "∞",
        title: "Sessions",
        body:
          "Pay once and keep the workflow around. No streak to maintain. No new writing app you have to remember to open.",
        meta: "Outcome · permanence",
      },
    ],
    workflows: [
      {
        title: "Capture the idea before it vanishes",
        body:
          "You're mid-task, an unrelated thought hits. Hold the hotkey, say it into your inbox / Things / Notion / wherever you keep the next-action list. Forty-five seconds later you're back on the original task. The idea is captured in your own words.",
      },
      {
        title: "Get past the blank page",
        body:
          "Open the doc. Talk for ninety seconds about whatever you actually want to say. Stop. Now you have a draft to edit, not a blank page to start. Most ADHD writing blocks are starting blocks.",
      },
      {
        title: "Hyperfocus without the punctuation tax",
        body:
          "While you're locked in, voice keeps up with the velocity. The Default formatting preset cleans punctuation and capitalization automatically — so when you come out of the session, you have prose, not a wall of unbroken stream-of-thought.",
      },
    ],
    faqs: [
      {
        q: "Will it pick up my voice when I'm thinking out loud and tripping over words?",
        a:
          "Yes. The medium Whisper model handles filler words, restarts, and \"um\" / \"uh\" reasonably well. The optional Default formatting preset cleans those up further when you don't want them in the final output. Keep AI formatting off if you'd rather see exactly what you said.",
      },
      {
        q: "Can I use it for journaling with local transcription?",
        a:
          "Yes. VoiceTypr transcribes your voice on your machine by default. Optional AI formatting sends text only when you explicitly turn it on, never the audio.",
      },
      {
        q: "Does it work with Things / Apple Notes / Obsidian / Notion?",
        a:
          "Yes. VoiceTypr pastes into any text field that accepts keyboard input. Place your cursor where you want the text, hold the hotkey, talk. The app you're in doesn't need to know anything about VoiceTypr.",
      },
      {
        q: "I get distracted; will I forget the hotkey?",
        a:
          "Default is ⌘+Shift+Space on macOS or Ctrl+Shift+Space on Windows. There's also a push-to-talk option on Option/Alt+Space. Most people internalize one in a week.",
      },
      {
        q: "Will it still help on low-focus days?",
        a:
          "Yes. The cognitive load of pressing one hotkey and talking is lower than the load of typing from scratch. People with ADHD often find dictation easier on days when typing feels impossible.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Catch the thought <em>before it leaves.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for adhd",
      "adhd writing tools",
      "dictation app for adhd",
      "voice to text adhd",
      "voicetypr adhd",
    ],
  },
  {
    slug: "dyslexia",
    title: "VoiceTypr for Dyslexia — Bypass spelling friction, write at speaking speed",
    ogTitle: "VoiceTypr for Dyslexia",
    description:
      "Voice typing for dyslexia. Write what you mean without fighting spelling, autocorrect, or the slow-down of constantly re-reading. Local transcription, pay-once.",
    navLabel: "Dyslexia",
    category: "accessibility",
    order: 2,
    hero: {
      eyebrow: "voicetypr for dyslexia",
      headline: "Say what you mean. <em>Skip the spelling fight.</em>",
      lede:
        "If reading what you've typed is slower than typing it in the first place — and autocorrect keeps swapping the wrong word for the wrong reason — voice bypasses the loop entirely. You speak, the text appears, you keep moving.",
      metaStrip: ["speaking-speed capture", "local transcription", "no autocorrect wars"],
    },
    pains: [
      {
        title: "Autocorrect wages a private war on your spelling.",
        body:
          "It corrects words you spelled correctly to words you didn't mean. It misses words you spelled wrong. Either way, you're spending cognitive energy on the wrong thing.",
      },
      {
        title: "Reading what you typed slows the loop.",
        body:
          "If proofreading takes longer than drafting, you avoid drafting. The cost of writing goes up. The amount you write goes down.",
      },
      {
        title: "Long-form drafts are a tax, not a tool.",
        body:
          "The exact moment you most want to capture a complex idea is the exact moment spelling gets in the way of doing it.",
      },
    ],
    outcomes: [
      {
        marker: "0",
        title: "Spelling decisions per sentence",
        body:
          "You speak the words. The model writes them. Whether you remember how to spell \"accommodation\" stops mattering.",
        meta: "Outcome · friction",
      },
      {
        marker: "local",
        title: "Local",
        body:
          "Your voice is transcribed on your machine. Your drafts stay yours.",
        meta: "Outcome · privacy",
      },
      {
        marker: "any",
        title: "App",
        body:
          "Works in Word, Pages, Google Docs, Notion, Substack, email — anywhere a cursor blinks. No plugin to install per app.",
        meta: "Outcome · reach",
      },
    ],
    workflows: [
      {
        title: "Long-form drafting without the spelling stutter",
        body:
          "Open the doc. Hold the hotkey for as long as you have a thought. Release. Repeat. Edit at the end, when your brain is in editing mode. Drafting and editing become two distinct passes instead of one tangled one.",
      },
      {
        title: "Email and replies without autocorrect interference",
        body:
          "Place the cursor in the reply box. Talk. The text appears as paste, not as native typing — autocorrect on the host app doesn't get a chance to second-guess your words.",
      },
      {
        title: "School / work writing where the assessment is the idea, not the typo",
        body:
          "Voice removes the gap between your reading-level vocabulary and your typing-level vocabulary. The vocabulary you'd use in a conversation is now the vocabulary that ends up on the page.",
      },
    ],
    faqs: [
      {
        q: "Does the model spell uncommon words correctly?",
        a:
          "Yes for most domain vocabulary — the medium and large Whisper models are trained on a broad corpus including technical terms, names, places. Domain-specific jargon (rare scientific terms, niche product names) sometimes needs a quick edit, but the common-word miss rate is very low.",
      },
      {
        q: "What about names and proper nouns?",
        a:
          "Common names work. Unusual ones occasionally need a quick correction. The Default formatting preset preserves capitalization on names it recognizes; you can also add a custom preset that knows your specific frequent names if you want.",
      },
      {
        q: "Does AI formatting help or hurt for dyslexic writing?",
        a:
          "Helps if you want clean punctuation and paragraph breaks; turn it off if you want the raw transcript. The Email preset is good for replies. The Prompts preset is best for AI conversations. Both are off by default — you opt in.",
      },
      {
        q: "Is my voice data used to train models?",
        a:
          "No. VoiceTypr transcribes your voice on your machine using Whisper by default. Optional AI formatting sends text only when enabled; your audio is not sent for model training.",
      },
      {
        q: "Does it work for someone whose first language isn't English?",
        a:
          "Yes — VoiceTypr supports 99+ languages. Dictation works in your native tongue or in English. You can switch via the model language picker.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Write at the speed <em>you talk.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for dyslexia",
      "dyslexia writing tool",
      "dictation app for dyslexia",
      "voice to text dyslexia",
      "voicetypr dyslexia",
    ],
  },
  {
    slug: "rsi",
    title: "VoiceTypr for RSI — Voice typing for wrist pain and repetitive strain",
    ogTitle: "VoiceTypr for RSI",
    description:
      "Wrist pain or RSI keeping you from typing? VoiceTypr is offline voice-to-text that takes the load off your hands. Pay once, lifetime.",
    navLabel: "RSI / wrist pain",
    category: "accessibility",
    order: 3,
    hero: {
      eyebrow: "voicetypr for rsi",
      headline: "When typing hurts. <em>Talk instead.</em>",
      lede:
        "Wrist pain, repetitive strain, post-tendonitis recovery — when your hands are the bottleneck, voice is the relief valve. VoiceTypr runs offline and works in every app you already use, so you don't have to give up your tools to give your hands a break.",
      metaStrip: ["fewer keystrokes", "local transcription", "works in every text field"],
    },
    pains: [
      {
        title: "Keystroke counts add up faster than you'd think.",
        body:
          "Keystrokes add up across emails, forms, prompts, and documents. Past a certain volume, your hands keep score. Voice input can move the bulk of drafting away from the keyboard while keeping the keyboard for edits.",
      },
      {
        title: "Voice tools that exist either lock you in or send your audio away.",
        body:
          "macOS dictation hallucinates. Wispr is cloud. Dragon is annual. None of them give you offline, lifetime, all-app voice with privacy intact.",
      },
      {
        title: "You stopped writing because writing hurt.",
        body:
          "When the cost of typing goes up, the artifacts you avoid first are the long-form ones — the design docs, the customer replies, the considered pull-request descriptions. Quality drops before output drops.",
      },
    ],
    outcomes: [
      {
        marker: "less",
        title: "Keyboard load for the same output",
        body:
          "Talk through the draft, then use the keyboard for corrections and structure. The keyboard stops carrying every word.",
        meta: "Outcome · load",
      },
      {
        marker: "any",
        title: "App, any text field",
        body:
          "Slack, Linear, Gmail, Word, GitHub, Notion. If your cursor blinks, it accepts the paste.",
        meta: "Outcome · scope",
      },
      {
        marker: "0",
        title: "Subscription anxiety",
        body:
          "Pay once, lifetime. Your accommodation tool isn't going to stop working when a renewal email gets blocked.",
        meta: "Outcome · permanence",
      },
    ],
    workflows: [
      {
        title: "PR descriptions and code review comments without typing them out",
        body:
          "The longest form-fields developers fill in are GitHub PR bodies and review comments. They are also the most skipped when typing hurts. Hold the hotkey, say the change in two paragraphs, paste. You're back to writing the descriptions you used to write before the strain.",
      },
      {
        title: "Email and Slack on a recovery day",
        body:
          "You can answer your inbox without giving up the day. Dictate replies, dictate updates, dictate the part of the standup you would have typed. Hands rest, work continues.",
      },
      {
        title: "Long-form drafting at low keystroke cost",
        body:
          "Specs, design docs, customer post-mortems. Talk through them. Edit lightly. The 4,000-word output that used to cost you a day of typing now costs you ninety minutes of speaking and thirty minutes of edit.",
      },
    ],
    faqs: [
      {
        q: "Does it really reduce keystrokes that much?",
        a:
          "For a typical voice-typing workflow, you press a hotkey, speak, and release. For long emails and documents, that can remove most of the drafting keystrokes while still leaving room for manual edits.",
      },
      {
        q: "Can I use it with one hand if my other hand is in a brace?",
        a:
          "Yes. Push-to-talk lives on Option/Alt+Space and is one-key reachable. Hold-mode default is two keys, also one-handed if you can reach the modifier with the same hand.",
      },
      {
        q: "Does it work with vertical mice / split keyboards / accessibility hardware?",
        a:
          "Yes. VoiceTypr only needs a microphone and a hotkey it can listen for. It doesn't care what your input hardware looks like. Custom hotkeys are supported if the defaults conflict.",
      },
      {
        q: "What about taking a break — can I disable it temporarily?",
        a:
          "Yes — there's a global pause from the menu bar / tray, and you can quit the app entirely without losing settings.",
      },
      {
        q: "Will it work with my voice if I'm tired and not enunciating clearly?",
        a:
          "The medium Whisper model handles tired-voice speech better than people expect. If clarity drops noticeably, the large model is more accurate at the cost of speed; you can switch per-session.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Give your <em>hands a break.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for rsi",
      "voice dictation rsi",
      "rsi typing alternative",
      "wrist pain voice typing",
      "voicetypr rsi",
    ],
  },


  {
    slug: "carpal-tunnel",
    title: "VoiceTypr for Carpal Tunnel — Voice typing when your hands need a break",
    ogTitle: "VoiceTypr for Carpal Tunnel",
    description:
      "Voice typing for carpal tunnel and hand pain. Dictate emails, docs, prompts, and replies locally in any app. Pay once, lifetime.",
    navLabel: "Carpal tunnel",
    category: "accessibility",
    order: 4,
    hero: {
      eyebrow: "voicetypr for carpal tunnel",
      headline: "Your hands are asking for less. <em>Give them voice.</em>",
      lede:
        "Carpal tunnel turns ordinary typing into a negotiation with pain. VoiceTypr lets you keep writing emails, prompts, docs, and replies while your hands do less of the work. Hold a hotkey, talk, release. The text lands where your cursor already is.",
      metaStrip: ["fewer keystrokes", "local transcription", "works in every app"],
    },
    pains: [
      {
        title: "Short replies are fine. Long ones are the problem.",
        body:
          "A two-line message may be manageable. A support reply, a project update, or a long doc can push your hands past the line. Dictation moves the heavy text from your fingers to your voice.",
      },
      {
        title: "Most dictation tools add a new place to work.",
        body:
          "Browser dictation and document-only tools force you into their editor first. That creates extra copy-paste work and more mouse use, which is exactly what you were trying to reduce.",
      },
      {
        title: "Privacy matters more when health is involved.",
        body:
          "If you are dictating medical notes, work accommodations, or private emails, cloud transcription can feel wrong. VoiceTypr keeps audio on your machine by default.",
      },
    ],
    outcomes: [
      {
        marker: "1",
        title: "Hotkey instead of hundreds of keystrokes",
        body:
          "Press once, speak a paragraph, release. You still edit, but the bulk of the typing is gone.",
        meta: "Outcome · hand load",
      },
      {
        marker: "any",
        title: "App, any text field",
        body:
          "Word, Gmail, Slack, Notion, Cursor, Google Docs, support inboxes. If you can paste into it, VoiceTypr can put text there.",
        meta: "Outcome · reach",
      },
      {
        marker: "$0/mo",
        title: "No accommodation subscription",
        body:
          "Pay once and keep it. The tool you rely on should not become another monthly bill to justify.",
        meta: "Outcome · permanence",
      },
    ],
    workflows: [
      {
        title: "Email and message batches with fewer hand movements",
        body:
          "Open the inbox, place the cursor, dictate the answer, skim once, send. The mouse and keyboard still exist, but they stop carrying the whole workload.",
      },
      {
        title: "Long documents without the pain spike",
        body:
          "Talk through the first draft in blocks. Use the keyboard only for edits and structure. That keeps your hand use closer to editing load than drafting load.",
      },
      {
        title: "AI prompts and work notes on Windows",
        body:
          "Prompt boxes get long fast. Dictate the context into ChatGPT, Claude, Cursor, or your notes app instead of typing through discomfort.",
      },
    ],
    faqs: [
      {
        q: "Do I have to hold a key the whole time?",
        a:
          "The default workflow uses a hold-to-talk hotkey because it is predictable and avoids accidental capture. If holding a key is difficult, set the easiest reachable shortcut and use short dictation bursts. A fuller hands-free mode is a natural roadmap item for people with hand pain.",
      },
      {
        q: "Does this replace medical advice or ergonomics?",
        a:
          "No. VoiceTypr is a writing tool, not treatment. It can reduce typing load, but you should still follow medical and ergonomic guidance for your specific condition.",
      },
      {
        q: "Will it work on Windows?",
        a:
          "Yes. VoiceTypr works on Windows and macOS. It pastes text into normal Windows apps, including Word, Gmail, Slack, Cursor, VS Code, and browser text fields.",
      },
      {
        q: "Is the audio sent to a cloud transcription service?",
        a:
          "No. VoiceTypr transcribes your voice on your machine by default. Optional AI formatting can send final text to an AI provider if you enable it, but not the original audio.",
      },
      {
        q: "Is it good for short or long dictation?",
        a:
          "Both. Short bursts are easiest during recovery days. Longer sessions work when you want to draft an email, note, prompt, or document without typing the whole thing.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Keep writing. <em>Use your hands less.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for carpal tunnel",
      "dictation software carpal tunnel",
      "hands free typing carpal tunnel",
      "carpal tunnel typing alternative",
      "windows dictation carpal tunnel",
    ],
  },
  {
    slug: "motor-impairments",
    title: "VoiceTypr for Motor Impairments — Accessible voice typing in every app",
    ogTitle: "VoiceTypr for Motor Impairments",
    description:
      "Accessible voice typing for people with motor impairments. Dictate into Windows or Mac apps with local transcription and lifetime pricing.",
    navLabel: "Motor impairments",
    category: "accessibility",
    order: 5,
    hero: {
      eyebrow: "accessible voice typing",
      headline: "Typing should not decide <em>how much you get to say.</em>",
      lede:
        "For many people who rely on assistive input, the hard part is not having something to say. It is getting words through a keyboard often enough, long enough, and with low enough friction. VoiceTypr turns speech into text in the apps you already use, with local transcription by default.",
      metaStrip: ["windows + mac", "local transcription", "works in every text field"],
    },
    pains: [
      {
        title: "Accessibility tools often split control and writing.",
        body:
          "Voice control helps you move around the computer. Dictation helps you create text. VoiceTypr focuses on the writing side so emails, forms, docs, prompts, and messages do not depend entirely on typing.",
      },
      {
        title: "Per-app dictation breaks the flow.",
        body:
          "A tool that only works in one editor is not enough when your day moves between forms, chat, email, documents, and browser apps. The cursor should be the integration.",
      },
      {
        title: "Recurring pricing makes assistive software fragile.",
        body:
          "If a tool becomes part of how you communicate, losing it because a subscription renews badly is not acceptable. Lifetime pricing makes the setup easier to keep.",
      },
    ],
    outcomes: [
      {
        marker: "any",
        title: "Text field",
        body:
          "VoiceTypr pastes into standard text inputs across Windows and Mac. No special plugin per app.",
        meta: "Outcome · access",
      },
      {
        marker: "local",
        title: "Local audio",
        body:
          "Private messages, accommodation requests, medical context, school work, and job applications stay on your machine during transcription.",
        meta: "Outcome · privacy",
      },
      {
        marker: "3 days",
        title: "Trial without a card",
        body:
          "Test the hotkey, your microphone, your apps, and your workflow before paying.",
        meta: "Outcome · fit",
      },
    ],
    workflows: [
      {
        title: "Forms and job applications",
        body:
          "Long web forms punish slow or painful typing. Dictate the answer directly into the field, then edit the final text before submitting.",
      },
      {
        title: "School and workplace writing",
        body:
          "Use voice for paragraphs, reflections, emails, reports, and discussion posts. Keep the keyboard for corrections instead of making it the main path for every word.",
      },
      {
        title: "Daily communication without saving every word for later",
        body:
          "Messages pile up when each one costs physical effort. Voice lets you answer while the thought is fresh instead of waiting for a better hand day.",
      },
    ],
    faqs: [
      {
        q: "Is VoiceTypr a full computer control tool?",
        a:
          "No. It is a dictation tool. Windows Voice Access and Apple Voice Control are better for navigating the computer by voice. VoiceTypr is for turning speech into text inside the apps where you write.",
      },
      {
        q: "Can I try it before paying?",
        a:
          "Yes. The trial is 3 days and does not require a card. That gives you time to test your microphone, shortcut, apps, and comfort level.",
      },
      {
        q: "Does it work with accessibility hardware?",
        a:
          "Yes. VoiceTypr only needs a microphone and a shortcut it can listen for. It works alongside split keyboards, vertical mice, adaptive keyboards, and other input hardware.",
      },
      {
        q: "Does it support Windows users?",
        a:
          "Yes. Windows support is a first-class part of the product, not an afterthought. The app is built for both Windows and macOS workflows.",
      },
      {
        q: "What if my speech is not perfectly clear?",
        a:
          "Whisper handles many accents, pauses, and restarts well, but no dictation system is perfect. Use the trial with your real voice and real microphone before buying.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Say it once. <em>Put it where it belongs.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "accessible voice typing",
      "dictation software for accessibility",
      "voice typing motor impairment",
      "assistive dictation software",
      "windows accessibility dictation",
    ],
  },

    // ──────────────────────────────────────────────────────────────────────
  // PROFESSION
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "developers",
    title: "VoiceTypr for Developers — Voice typing for prompts, commits, and PR descriptions",
    ogTitle: "VoiceTypr for Developers",
    description:
      "Dictate prompts to Cursor, commit messages, PR descriptions, and design docs. Offline voice typing built for developers who write more English than code.",
    navLabel: "Developers",
    category: "profession",
    order: 1,
    hero: {
      eyebrow: "voicetypr for developers",
      headline: "Dictate the English. <em>Type the code.</em>",
      lede:
        "Most of your day isn't typing code anymore — it's typing English at compilers, agents, reviewers, and Slack. VoiceTypr handles the English so your hands can focus on the part that still needs them.",
      metaStrip: [
        "cursor · claude · chatgpt",
        "slack · linear · notion",
        "local transcription",
      ],
    },
    pains: [
      {
        title: "Prompts cost more than they used to.",
        body:
          "The English-side of your job grew. Specs, prompts, replies, post-mortems — they all consume real keystrokes and real time. Voice cuts the cost.",
      },
      {
        title: "Cloud dictation is a non-starter for sensitive prompts.",
        body:
          "You don't want production logs, customer details, or pre-public feature work going to a third-party transcription server. Local-first or it doesn't ship.",
      },
      {
        title: "PR descriptions and design docs get skipped when typing is expensive.",
        body:
          "Quality artifacts are the first thing to go when keystrokes hurt or take too long. The team feels the gap before you do.",
      },
    ],
    outcomes: [
      {
        marker: "voice",
        title: "Faster for prompt-heavy work",
        body:
          "Speaking can be faster than typing for long prompts, replies, and descriptions. Across a day of text fields, that lower keyboard load compounds.",
        meta: "Outcome · throughput",
      },
      {
        marker: "0",
        title: "Audio leaving your machine",
        body:
          "Whisper runs locally. Your half-formed prompts about an unreleased feature don't end up in someone else's training pipeline.",
        meta: "Outcome · privacy",
      },
      {
        marker: "any",
        title: "Stack, any tool",
        body:
          "Cursor, Claude, ChatGPT, VS Code, JetBrains, Slack, Gmail, Linear, GitHub, Notion. If your cursor lands in it, you can dictate into it.",
        meta: "Outcome · scope",
      },
    ],
    workflows: [
      {
        title: "Prompts in Cursor / Claude / ChatGPT",
        body:
          "The agent prompt boxes are where you type the most English in a typical day. Hold the hotkey, talk through the problem the way you'd explain it to a colleague, paste. The agent gets a more natural, more specific prompt than you would have typed.",
      },
      {
        title: "Commit messages and PR descriptions",
        body:
          "Two paragraphs of context per PR is the difference between a useful review and a rubber stamp. Dictate them. Reviewers thank you. You catch your own bugs by saying them out loud.",
      },
      {
        title: "Design docs and post-mortems",
        body:
          "The 2,000-word design doc that used to feel like homework now costs about fifteen minutes of speaking. The artifacts your team relies on actually get written.",
      },
    ],
    faqs: [
      {
        q: "Can I dictate code?",
        a:
          "Honestly, no — and you wouldn't want to. Voice is great for English. \"const foo equals null\" gets transcribed as \"const four equals nul\" half the time. Voice for prompts and prose; keyboard for code.",
      },
      {
        q: "Does it work in Cursor's agent prompt box specifically?",
        a:
          "Yes. VoiceTypr pastes into any text field that accepts keyboard input. Cursor's prompt box is a normal textarea — paste-in works the same as in any other app.",
      },
      {
        q: "What about terminal commands?",
        a:
          "It works, but voice for terminal commands is usually slower than typing them. Most developers use voice for their text editor and chat tools, not their shell.",
      },
      {
        q: "Will it work over SSH / on a remote machine?",
        a:
          "VoiceTypr runs on your local machine and pastes into the local app — including your terminal. If the terminal is connected to a remote machine, the text reaches the remote shell the same way typed text would.",
      },
      {
        q: "How does it compare to the macOS / Windows built-in dictation?",
        a:
          "Built-in dictation hallucinates names, drops punctuation on long blocks, and on macOS in particular has a hard time with technical vocabulary. VoiceTypr uses Whisper, which is trained on a broader corpus and handles tech-speak much better.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Stop typing the <em>English-side</em> of the job.",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for developers",
      "voice prompts cursor",
      "dictation for engineers",
      "voicetypr developers",
      "ai voice typing for coding",
    ],
  },
  {
    slug: "writers",
    title: "VoiceTypr for Writers — Draft by speaking, edit later",
    ogTitle: "VoiceTypr for Writers",
    description:
      "Voice typing for writers, novelists, and content creators. Draft by speaking, edit later. Local transcription, pay-once, works in every writing app.",
    navLabel: "Writers",
    category: "profession",
    order: 2,
    hero: {
      eyebrow: "voicetypr for writers",
      headline: "Draft fast. <em>Edit slow.</em>",
      lede:
        "Drafting and editing are two different cognitive modes. Voice lets you separate them. Talk the first draft at speaking speed, then come back to edit when your brain is in the right gear for it.",
      metaStrip: ["speaking-speed drafting", "local transcription", "any writing app"],
    },
    pains: [
      {
        title: "Typing forces editing-while-drafting.",
        body:
          "Every backspace is a tiny edit. Drafting becomes a slow-motion edit, and editing becomes a slow-motion redraft. Two passes get tangled.",
      },
      {
        title: "Cloud dictation is a hard pass for unfinished work.",
        body:
          "Half-baked ideas, character names, plot beats — none of it should be sent to a server. You want a tool that respects pre-publication privacy.",
      },
      {
        title: "Built-in dictation can't handle a long block.",
        body:
          "macOS dictation drops out after thirty seconds. Apple Notes' transcription mangles names. The native tools aren't built for sustained drafting.",
      },
    ],
    outcomes: [
      {
        marker: "≈ 2×",
        title: "More drafted per session",
        body:
          "Talking is roughly twice as fast as typing for most people. The first draft of a 3,000-word piece becomes a one-hour task, not a half-day one.",
        meta: "Outcome · pace",
      },
      {
        marker: "local",
        title: "Pre-publication privacy",
        body:
          "Audio stays on your machine. Drafts, plot notes, character backstory — none of it touches a third-party server.",
        meta: "Outcome · privacy",
      },
      {
        marker: "any",
        title: "Writing app",
        body:
          "Scrivener, Ulysses, Bear, iA Writer, Word, Google Docs, Substack, Notion. VoiceTypr pastes into all of them.",
        meta: "Outcome · scope",
      },
    ],
    workflows: [
      {
        title: "Talk the first draft, type the second",
        body:
          "Open the doc, hold the hotkey, talk the chapter / essay / piece in three or four passes with breaks. End the session with a complete first draft. Tomorrow's editing is now possible because you stopped editing the part you wrote ten seconds ago.",
      },
      {
        title: "Capture the idea before the day eats it",
        body:
          "On a walk. In the kitchen. The plot beat just landed. Hold the hotkey on your phone-tethered laptop or open a quick Notes window — the capture takes ninety seconds and the idea survives.",
      },
      {
        title: "Long-form replies, intros, and pitches",
        body:
          "Three-paragraph cold emails to editors, pitch responses, agent queries — these benefit from sounding like spoken language. Dictating produces text that reads less like you typed it and more like you said it.",
      },
    ],
    faqs: [
      {
        q: "Does it handle long blocks of speech without dropping out?",
        a:
          "Yes — sessions can run as long as your battery and microphone hold out. The model processes the whole block at once after you release the hotkey, so there's no streaming drop-off the way there is with cloud tools that stream live.",
      },
      {
        q: "Will it punctuate fiction-style prose with dialogue?",
        a:
          "It punctuates better than the macOS native tool, but dialogue formatting (em-dashes, quotation marks for spoken lines) sometimes needs a quick editorial pass. The Default formatting preset handles common punctuation; turn it off if you want raw transcript to clean yourself.",
      },
      {
        q: "Can I use it for non-English drafting?",
        a:
          "Yes. VoiceTypr supports 99+ languages — pick your model language in settings.",
      },
      {
        q: "What about transcribing interviews?",
        a:
          "VoiceTypr is built for first-person dictation, not multi-speaker transcription. For interview audio specifically, a tool like Whisper.cpp directly or a transcription-focused service is a better fit.",
      },
      {
        q: "Will it slow down my old laptop?",
        a:
          "The medium model runs comfortably on any Apple Silicon Mac and most modern Windows machines. On older Intel hardware (8GB RAM), use the small model for a better balance.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Get the draft out <em>at the speed you think.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for writers",
      "dictation app for writers",
      "novelist dictation tool",
      "voice writing software",
      "voicetypr writers",
    ],
  },
  {
    slug: "founders",
    title: "VoiceTypr for Founders — Talk to your AI tools at the speed of thought",
    ogTitle: "VoiceTypr for Founders",
    description:
      "Built by a solo founder, for solo founders. Dictate prompts, support replies, specs, and Slack updates. Local transcription, pay-once, no subscription.",
    navLabel: "Founders & solopreneurs",
    category: "profession",
    order: 3,
    hero: {
      eyebrow: "voicetypr for founders",
      headline: "You're the bottleneck. <em>Voice unbottlenecks you.</em>",
      lede:
        "When you're the only one shipping product, support, marketing, and ops, every minute typing is a minute not building. VoiceTypr is the dictation tool a solo founder built because he was tired of paying $180 a year for one.",
      metaStrip: ["12+ hr/day workflows", "local transcription", "pay once · lifetime"],
    },
    pains: [
      {
        title: "Subscription stack already eats your runway.",
        body:
          "You don't need another $15/mo line item. Especially not for a tool that works the same way it did three years ago.",
      },
      {
        title: "AI prompting is now half your job.",
        body:
          "Cursor, Claude, ChatGPT — the prompt box is where you spend more time than your design tool. The faster you can fill it, the faster everything else gets done.",
      },
      {
        title: "Customer support replies stack up.",
        body:
          "Inbox-zero is impossible when each reply needs three paragraphs of typed context. Voice makes the inbox tractable again.",
      },
    ],
    outcomes: [
      {
        marker: "$0",
        title: "Recurring",
        body:
          "Pay once. No renewal email. The tool you onboarded with is the tool you'll be using in three years.",
        meta: "Outcome · cost",
      },
      {
        marker: "voice",
        title: "Faster on prompts and replies",
        body:
          "The longest text fields in your day — agent prompts, support replies, drafts — move from typed to spoken.",
        meta: "Outcome · throughput",
      },
      {
        marker: "local",
        title: "Local by default",
        body:
          "Pre-public feature notes, customer details, pricing experiments — your voice is transcribed on your laptop by default. Optional AI formatting sends text only if you enable it.",
        meta: "Outcome · privacy",
      },
    ],
    workflows: [
      {
        title: "Prompt the agent without composing the prompt",
        body:
          "Hold the hotkey, talk through the problem out loud, paste into Cursor / Claude. The prompt that comes out is more specific than the one you would have typed because typing forces tightening, and tightening removes context the agent needed.",
      },
      {
        title: "Support replies, batched",
        body:
          "Open the inbox at the end of a focus block. Reply to ten threads in a row by dictating each one. The replies sound like a human wrote them because a human did, just not via fingers.",
      },
      {
        title: "Customer interview synthesis",
        body:
          "Right after a call, dump the synthesis to Notion or Linear by talking. Specifics fade fast — voice is the fastest way to capture them while they're still loud in your head.",
      },
    ],
    faqs: [
      {
        q: "Why pay-once instead of subscription?",
        a:
          "Because dictation is a tool, not a service. The model doesn't get materially better month-over-month. You shouldn't pay forever for something that does the same thing forever. Founders should be on the receiving end of a fair deal.",
      },
      {
        q: "Will it work with my single-person Slack / Linear / Gmail / Cursor stack?",
        a:
          "Yes — every text field that accepts keyboard input is a target. There's nothing to integrate; you set a hotkey, hold it, talk, release.",
      },
      {
        q: "Is it built by a solo founder?",
        a:
          "Yes. VoiceTypr is built and maintained by Moinul Moin, an indie operator. The whole story is in the founder essay.",
      },
      {
        q: "Refunds if it doesn't fit my workflow?",
        a:
          "Seven days, no questions. Email support@voicetypr.com.",
      },
      {
        q: "What if I need more than one device?",
        a:
          "Pick the device count you need at checkout: 1, 2, or 4 devices. If you need more, email support and we can help.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Built by a founder. <em>For founders.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for founders",
      "founder productivity tool",
      "ai voice typing solopreneur",
      "indie hacker voice typing",
      "voicetypr founders",
    ],
  },
  {
    slug: "journalists",
    title: "VoiceTypr for Journalists — Capture the story before the trail goes cold",
    ogTitle: "VoiceTypr for Journalists",
    description:
      "Voice typing for journalists and reporters. Summarize interviews, draft intros, and write faster in your usual apps with local transcription.",
    navLabel: "Journalists",
    category: "profession",
    order: 4,
    hero: {
      eyebrow: "voicetypr for journalists",
      headline: "The interview happened. <em>Write while it's still alive.</em>",
      lede:
        "Reporting moves faster than typing. Right after an interview or press event, the shape of the story is clear for about fifteen minutes. VoiceTypr helps you dump that structure, angle, and first draft into the app you already use before the signal fades.",
      metaStrip: ["fresh-context drafting", "local transcription", "works in every editor"],
    },
    pains: [
      {
        title: "The best lines arrive when you're away from the keyboard.",
        body:
          "A clean intro, a sharper framing, the actual nut graf — they often land on the walk back from the interview, not when you sit down to type. If you wait, you lose detail.",
      },
      {
        title: "Interview notes turn into backlog fast.",
        body:
          "Quotes, scene details, follow-up questions, and side observations pile up. Typing everything from scratch slows the jump from reporting to writing.",
      },
      {
        title: "Built-in dictation is fine for snippets, not newsroom rhythm.",
        body:
          "Short browser or OS dictation can handle a line. It usually feels worse when you need a full summary, a rough opener, or a 600-word draft in one run.",
      },
    ],
    outcomes: [
      {
        marker: "fast",
        title: "Post-interview capture",
        body:
          "Speak the angle, best quotes, and next questions while they're still fresh. The working doc exists before the formal write-up begins.",
        meta: "Outcome · recall",
      },
      {
        marker: "any",
        title: "Editor, any tool",
        body:
          "Google Docs, Word, Notes, Notion, CMS draft boxes, email. If the story takes shape in a normal text field, VoiceTypr fits there.",
        meta: "Outcome · scope",
      },
      {
        marker: "local",
        title: "Source-sensitive drafting",
        body:
          "Your voice is transcribed on your machine by default, which matters when your notes involve unpublished reporting or sensitive context.",
        meta: "Outcome · privacy",
      },
    ],
    workflows: [
      {
        title: "Interview to story skeleton",
        body:
          "Right after the call, hold the hotkey and talk through what happened: the lede, the strongest quote, the tension, the missing hole. By the time you sit down, the skeleton is already in the doc.",
      },
      {
        title: "Draft the intro by speaking it like you'd pitch it",
        body:
          "If you can explain the story to your editor out loud, you can usually draft the top five paragraphs the same way. Speaking often finds the cleaner sentence before typing does.",
      },
      {
        title: "Field notes that don't rot in your phone",
        body:
          "After an event, dump details into a notes app or doc immediately: names, gestures, contradictions, scene texture. Voice is faster than pecking all of that into a phone keyboard.",
      },
    ],
    faqs: [
      {
        q: "Is this for transcribing full interviews?",
        a:
          "Not primarily. VoiceTypr is strongest for your own first-person drafting and summaries. For multi-speaker audio transcription, a dedicated transcription workflow is usually a better fit.",
      },
      {
        q: "Can I use it inside Google Docs or my CMS draft box?",
        a:
          "Yes. VoiceTypr works anywhere a normal text field accepts keyboard input, including browser-based editors and CMS forms.",
      },
      {
        q: "What if I quote names or places the model might miss?",
        a:
          "You should still do an editorial pass. VoiceTypr is for getting the draft out fast, not for skipping fact-checking or proper-name cleanup.",
      },
      {
        q: "Does local transcription mean every surrounding service is offline?",
        a:
          "No. It means normal dictation is transcribed on your machine after setup. Downloads, updates, licensing, and optional text-only AI formatting can still use network services.",
      },
      {
        q: "Can I draft in non-English languages?",
        a:
          "Yes. VoiceTypr supports 99+ languages, so multilingual reporting workflows are fine as long as you pick the right language in settings.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Catch the angle <em>before typing flattens it.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for journalists",
      "dictation software for journalists",
      "voice typing for reporters",
      "journalist dictation software",
      "voice to text for journalists",
    ],
  },
  {
    slug: "product-managers",
    title: "VoiceTypr for Product Managers — PRDs, specs, and updates at speaking speed",
    ogTitle: "VoiceTypr for Product Managers",
    description:
      "Voice typing for product managers. Dictate PRDs, user stories, sprint updates, and decision docs in Notion, Jira, Slack, and docs.",
    navLabel: "Product managers",
    category: "profession",
    order: 5,
    hero: {
      eyebrow: "voicetypr for product managers",
      headline: "Product work happens in meetings. <em>The writing happens after.</em>",
      lede:
        "Most PM work starts as spoken reasoning — in standups, user calls, design reviews, and stakeholder chaos. VoiceTypr helps you turn that reasoning into PRDs, updates, and decision docs without spending the next hour retyping what you already know.",
      metaStrip: ["prds · docs · jira", "local transcription", "cross-app workflow"],
    },
    pains: [
      {
        title: "The product decision is clear in your head, fuzzy on the page.",
        body:
          "You can explain the tradeoff out loud in thirty seconds, but typing the same thing into a spec takes twenty minutes because typing forces unnecessary compression too early.",
      },
      {
        title: "PM writing is scattered across too many tools.",
        body:
          "PRD in Notion, ticket in Jira, update in Slack, recap in email, notes in Docs. A good dictation workflow needs to follow your cursor, not trap you in one editor.",
      },
      {
        title: "Meeting context decays before the documentation happens.",
        body:
          "By the time you finally type the notes, the nuance is gone. Voice is the fastest way to capture the actual reasoning while it still feels obvious.",
      },
    ],
    outcomes: [
      {
        marker: "3×",
        title: "Faster first-pass documentation",
        body:
          "PRDs, user stories, decision logs, and sprint updates get drafted at speaking speed instead of at keyboard speed.",
        meta: "Outcome · throughput",
      },
      {
        marker: "any",
        title: "Works in the stack you already have",
        body:
          "Notion, Jira, Linear, Slack, email, docs, browser forms. Product writing usually lives in text fields across six tools. VoiceTypr meets you there.",
        meta: "Outcome · scope",
      },
      {
        marker: "local",
        title: "Safer for pre-launch product context",
        body:
          "Roadmap notes, customer quotes, and unreleased feature details are transcribed on your machine by default.",
        meta: "Outcome · privacy",
      },
    ],
    workflows: [
      {
        title: "Talk the PRD before you polish it",
        body:
          "Open the doc and dictate the problem, users, edge cases, and non-goals exactly as you would explain them to engineering. Then edit. The blank-page tax disappears.",
      },
      {
        title: "Turn calls into decision logs immediately",
        body:
          "Right after a review or customer call, dump the decision, rationale, open questions, and follow-ups into Notion or Linear by voice before another meeting wipes the cache.",
      },
      {
        title: "Jira and Slack without the micro-fatigue",
        body:
          "User story details, acceptance criteria, stakeholder updates, and async clarifications are annoying mostly because of the typing. Voice cuts that friction.",
      },
    ],
    faqs: [
      {
        q: "Can I use it in Notion, Jira, or Linear?",
        a:
          "Yes. VoiceTypr works anywhere a normal text field accepts keyboard input, including browser-based product tools.",
      },
      {
        q: "Is this meant to replace meeting notes software?",
        a:
          "No. VoiceTypr is strongest for your own drafting and synthesis after the meeting, not as a bot that joins and records group calls.",
      },
      {
        q: "What about product terms and internal jargon?",
        a:
          "Modern Whisper-based dictation usually handles product and technical language well, but you should still do a quick pass for company-specific names.",
      },
      {
        q: "Does it help with AI-heavy PM workflows too?",
        a:
          "Yes. PMs now spend a surprising amount of time prompting AI tools for specs, summaries, rewrites, and analysis. Voice is often the fastest input method there.",
      },
      {
        q: "Can I use it on Windows and Mac?",
        a:
          "Yes. VoiceTypr supports Windows 10+ and macOS 13+.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Document the decision <em>while it still makes sense.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for product managers",
      "dictation software for product managers",
      "dictate product specs",
      "voice typing for prds",
      "voice to text for product managers",
    ],
  },
  {
    slug: "customer-support",
    title: "VoiceTypr for Customer Support — Reply faster without torching your hands",
    ogTitle: "VoiceTypr for Customer Support",
    description:
      "Voice typing for customer support reps. Dictate ticket replies, CRM notes, and escalation context faster in help desks, chat, and email.",
    navLabel: "Customer support",
    category: "profession",
    order: 6,
    hero: {
      eyebrow: "voicetypr for customer support",
      headline: "The replies are repetitive. <em>The typing doesn't have to be.</em>",
      lede:
        "Support work means typing all day: replies, summaries, follow-ups, internal notes, and escalation context. VoiceTypr moves the long-form parts to speech so your fingers are not carrying every customer conversation alone.",
      metaStrip: ["tickets · crm · email", "local transcription", "every-app input"],
    },
    pains: [
      {
        title: "Support is a typing job disguised as a people job.",
        body:
          "Even when you know the answer, you still have to type the answer, type the note, type the handoff, and type the follow-up. The work multiplies through text fields.",
      },
      {
        title: "Empathy takes more words than macros give you.",
        body:
          "The best support replies sound human, not like a copied snippet. But writing human-sounding context repeatedly is expensive when every sentence costs keystrokes.",
      },
      {
        title: "Case notes are where fatigue becomes visible.",
        body:
          "The customer-facing reply gets written. The internal context often gets skipped because no one wants to type another paragraph after the ticket is done.",
      },
    ],
    outcomes: [
      {
        marker: "faster",
        title: "Longer replies without slower queues",
        body:
          "Speaking out a thoughtful response is usually faster than typing it, especially when the answer needs nuance rather than a canned macro.",
        meta: "Outcome · speed",
      },
      {
        marker: "any",
        title: "Help desk, any tool",
        body:
          "Zendesk, Intercom, Help Scout, Gmail, Slack, CRMs, browser-based support tools. If there is a cursor, VoiceTypr can work there.",
        meta: "Outcome · scope",
      },
      {
        marker: "less",
        title: "Keyboard load across the whole queue",
        body:
          "Voice works for customer replies and for the internal note you usually postpone. That compounds across dozens of tickets.",
        meta: "Outcome · strain",
      },
    ],
    workflows: [
      {
        title: "Reply first, refine second",
        body:
          "Hold the hotkey and explain the fix the way you would explain it to a customer on a call. Then tighten the phrasing. The response stays warm without taking forever.",
      },
      {
        title: "Case notes right after the ticket",
        body:
          "Once the reply is out, dictate the internal summary immediately: what happened, what changed, what to watch for. The note actually gets written because it no longer costs another typing block.",
      },
      {
        title: "Escalation context that engineers can actually use",
        body:
          "Instead of a vague one-line handoff, talk through the reproduction steps, customer environment, and business impact. Voice makes it easier to include the context you would otherwise skip.",
      },
    ],
    faqs: [
      {
        q: "Can I use it in my help desk or CRM?",
        a:
          "Usually yes. VoiceTypr works in normal text fields across browser tools, desktop apps, and email clients.",
      },
      {
        q: "Is this just for canned replies?",
        a:
          "No. It is most useful when the reply needs context, empathy, or explanation that a macro does not cover well.",
      },
      {
        q: "What about sensitive customer data?",
        a:
          "Normal dictation is transcribed on your machine by default after setup. Optional text-only AI formatting can be enabled separately if you want it.",
      },
      {
        q: "Will this slow me down if I still need to edit?",
        a:
          "Usually not. The time win comes from getting a strong first pass into the box quickly, then making a short edit instead of writing from zero.",
      },
      {
        q: "Does it replace help desk automation?",
        a:
          "No. VoiceTypr is an input tool, not a workflow automation platform. It helps you write the response faster inside the tools you already use.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Get through the queue <em>with fewer keystrokes.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for customer support",
      "dictation software for customer support reps",
      "voice typing for customer service reps",
      "dictation for support teams",
      "voice to text for support tickets",
    ],
  },
  {
    slug: "lawyers",
    title: "VoiceTypr for Lawyers — Legal writing without paying Dragon prices",
    ogTitle: "VoiceTypr for Lawyers",
    description:
      "Voice typing for lawyers. Dictate client emails, case notes, drafts, and time-entry context faster with local transcription by default.",
    navLabel: "Lawyers",
    category: "profession",
    order: 7,
    hero: {
      eyebrow: "voicetypr for lawyers",
      headline: "The thinking is legal. <em>The bottleneck is still typing.</em>",
      lede:
        "Legal work involves a ridiculous amount of text: client emails, case notes, summaries, draft arguments, internal memos, and time-entry detail. VoiceTypr helps solo and small-firm lawyers move that drafting load to voice without buying into heavier legacy dictation stacks.",
      metaStrip: ["drafts · notes · email", "local transcription", "pay once · lifetime"],
    },
    pains: [
      {
        title: "Legal writing is never just one paragraph.",
        body:
          "Even a simple client update turns into context, caveats, and next steps. The cost is not one sentence; it is the constant accumulation of precise text.",
      },
      {
        title: "Older legal dictation options feel heavy and expensive.",
        body:
          "A lot of legal buyers still assume they need a large Dragon-style investment to dictate seriously. That pricing and setup burden is hard to justify for many modern small-practice workflows.",
      },
      {
        title: "The private stuff is exactly what you least want floating around.",
        body:
          "Client details, case facts, negotiation notes, and internal strategy drafts are the moments where local-first transcription matters most.",
      },
    ],
    outcomes: [
      {
        marker: "voice",
        title: "Faster first drafts of routine legal writing",
        body:
          "Client updates, internal summaries, rough argument structure, and detailed time-entry notes get out of your head faster.",
        meta: "Outcome · drafting",
      },
      {
        marker: "local",
        title: "Local by default for normal dictation",
        body:
          "Your spoken draft is transcribed on your machine after setup, which is a better starting point than cloud-first consumer dictation.",
        meta: "Outcome · privacy",
      },
      {
        marker: "$39",
        title: "Lower entry price than legacy legal dictation",
        body:
          "For lawyers who mainly need faster everyday writing, VoiceTypr is a much smaller commitment than high-ticket legacy software.",
        meta: "Outcome · cost",
      },
    ],
    workflows: [
      {
        title: "Client emails that sound like you wrote them",
        body:
          "Dictate the explanation the way you would say it to the client, then edit for precision. It is faster than building every paragraph one keystroke at a time.",
      },
      {
        title: "Case notes right after the event",
        body:
          "After a call, meeting, or filing, dump the facts, next steps, and risks into your notes immediately. Voice reduces the chance that key detail gets shortened or skipped.",
      },
      {
        title: "Argument structure before formal drafting",
        body:
          "Talk through the outline, the weak point, the counterargument, and the supporting facts before you start polishing language. Voice is strong at structure-first drafting.",
      },
    ],
    faqs: [
      {
        q: "Is this a replacement for Dragon Legal in every scenario?",
        a:
          "Not in every scenario. Firms with deep custom legal vocabulary or highly specialized legacy workflows may still prefer Dragon-style tooling. VoiceTypr is the cleaner fit for many modern solo and small-team dictation workflows.",
      },
      {
        q: "Can I use it in Word and browser-based tools?",
        a:
          "Yes. VoiceTypr works in normal text fields across Word, browser apps, email, docs, and notes.",
      },
      {
        q: "Are you making legal compliance guarantees here?",
        a:
          "No. VoiceTypr is a dictation tool with local transcription by default. It is not presented as a legal compliance certification layer.",
      },
      {
        q: "Will it handle names and legal terms perfectly?",
        a:
          "You should still do an edit pass, especially for names, citations, and jurisdiction-specific language. VoiceTypr helps you draft faster; it does not remove the lawyer's review step.",
      },
      {
        q: "Why would a lawyer care about pay-once pricing?",
        a:
          "Because dictation is infrastructure. If it becomes part of your daily writing routine, recurring subscription cost adds up fast for a tool that should simply keep working.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Move the first draft to voice. <em>Keep the review in your hands.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "dictation software for lawyers",
      "voice typing for legal writing",
      "legal dictation software",
      "voice to text for lawyers",
      "dictate client emails lawyer",
    ],
  },
  {
    slug: "students",
    title: "VoiceTypr for Students — Get the draft out before perfection kills it",
    ogTitle: "VoiceTypr for Students",
    description:
      "Voice typing for students. Dictate essays, notes, outlines, and study prompts faster in Docs, Word, Notion, and browser tools.",
    navLabel: "Students",
    category: "profession",
    order: 8,
    hero: {
      eyebrow: "voicetypr for students",
      headline: "You know what to say. <em>Typing is what slows it down.</em>",
      lede:
        "A lot of schoolwork is not thinking, it is transferring thought into text. Essays, notes, outlines, application answers, discussion posts, study prompts. VoiceTypr helps students get the first pass out faster, especially when typing is tiring, slow, or mentally sticky.",
      metaStrip: ["essays · notes · prompts", "local transcription", "works in school tools"],
    },
    pains: [
      {
        title: "Students spend the whole day in text fields.",
        body:
          "Google Docs, Word, Canvas, Notion, browser forms, AI tools, email. The work is spread across apps, but the bottleneck is the same: too much typing.",
      },
      {
        title: "The first paragraph costs the most energy.",
        body:
          "A lot of students know the answer out loud before they can get themselves to type it. Voice helps bypass the blank-page stall and gets the rough version on-screen.",
      },
      {
        title: "Typing fatigue compounds across a whole week.",
        body:
          "One essay is manageable. Add lecture notes, reading reflections, emails, and applications, and the keyboard becomes the actual workload.",
      },
    ],
    outcomes: [
      {
        marker: "first",
        title: "Drafts appear sooner",
        body:
          "Talking through the answer gets you from blank page to workable draft faster, which makes editing and improving it much easier.",
        meta: "Outcome · momentum",
      },
      {
        marker: "any",
        title: "School tools, any text field",
        body:
          "Google Docs, Word, Notion, browser assignments, chat, email, prompt boxes. VoiceTypr works where the coursework already happens.",
        meta: "Outcome · scope",
      },
      {
        marker: "helpful",
        title: "Useful beyond accessibility labels",
        body:
          "Some students use voice because of ADHD, dyslexia, or fatigue. Others just use it because speaking the first draft is faster than typing it.",
        meta: "Outcome · flexibility",
      },
    ],
    workflows: [
      {
        title: "Talk the ugly first draft",
        body:
          "Open the essay doc, dictate the rough answer in full sentences, then come back to structure and citations. Voice is strongest at getting the raw material out.",
      },
      {
        title: "Notes and summaries after class",
        body:
          "Right after a lecture, explain the concepts back into your notes in your own words. That gives you both recall and a usable study sheet.",
      },
      {
        title: "Applications, emails, and discussion posts",
        body:
          "The long-tail writing load is bigger than the big essay. Voice helps with the constant smaller pieces that still consume real time and energy.",
      },
    ],
    faqs: [
      {
        q: "Can I use it in Google Docs or Word?",
        a:
          "Yes. VoiceTypr works anywhere a normal text field accepts keyboard input, including Docs, Word, browser forms, and notes apps.",
      },
      {
        q: "Is this only for students with ADHD or dyslexia?",
        a:
          "No. It can help for those cases, but plenty of students use voice simply because speaking the first draft is faster than typing it.",
      },
      {
        q: "Does it write the essay for me?",
        a:
          "No. VoiceTypr turns your speech into text. It is an input tool, not a ghostwriter.",
      },
      {
        q: "Can I use it for study prompts and AI tools too?",
        a:
          "Yes. Prompt boxes in ChatGPT, Claude, and similar tools are normal text fields, so VoiceTypr works there as well.",
      },
      {
        q: "What if I need to edit heavily afterward?",
        a:
          "That is normal. The win is getting from zero to first draft faster. Editing a rough draft is usually much easier than typing from nothing.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Say the first draft. <em>Edit the smarter one.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for students",
      "dictation software for students",
      "speech to text for students",
      "voice to text for essays",
      "dictation for university students",
    ],
  },
  {
    slug: "researchers",
    title: "VoiceTypr for Researchers — Capture the idea before the paper version shows up",
    ogTitle: "VoiceTypr for Researchers",
    description:
      "Voice typing for researchers. Dictate notes, literature summaries, memos, and draft sections faster in Docs, Word, Notion, and email.",
    navLabel: "Researchers",
    category: "profession",
    order: 9,
    hero: {
      eyebrow: "voicetypr for researchers",
      headline: "The thought is clear now. <em>It won't stay that way forever.</em>",
      lede:
        "Research work produces a constant stream of half-finished thinking: paper notes, literature reactions, method caveats, draft paragraphs, and synthesis after meetings. VoiceTypr helps you capture those before they flatten into vague bullet points or disappear completely.",
      metaStrip: ["notes · memos · drafts", "local transcription", "works in every editor"],
    },
    pains: [
      {
        title: "Most research writing starts as spoken reasoning.",
        body:
          "You usually know how to explain the limitation or the result out loud before you can force it into tidy academic prose. Typing too early can make the thinking smaller than it was.",
      },
      {
        title: "The notes pile up faster than the synthesis.",
        body:
          "Papers, annotations, lab notes, meeting recaps, side ideas. Researchers accumulate text fragments all week, then lose time trying to stitch them back together later.",
      },
      {
        title: "You do not always want rough work in a cloud tool first.",
        body:
          "Early-stage interpretations, unpublished findings, and collaborator context can be sensitive. Local-first dictation is simply a better default for that kind of material.",
      },
    ],
    outcomes: [
      {
        marker: "faster",
        title: "More synthesis while context is fresh",
        body:
          "Instead of saving your real thinking for later, you can dictate the interpretation now and clean it up afterward.",
        meta: "Outcome · synthesis",
      },
      {
        marker: "any",
        title: "Works in the tools research already uses",
        body:
          "Word, Google Docs, Notion, email, browser forms, note apps, and AI tools. Research writing rarely lives in one place.",
        meta: "Outcome · scope",
      },
      {
        marker: "local",
        title: "Safer default for unpublished work",
        body:
          "Voice dictation runs on your machine after setup, which is a cleaner starting point for rough notes and pre-publication drafts.",
        meta: "Outcome · privacy",
      },
    ],
    workflows: [
      {
        title: "Literature reaction before it goes stale",
        body:
          "Right after reading a paper, dictate what matters, what feels weak, and where it connects to your work. Those reactions are hard to reconstruct later from highlights alone.",
      },
      {
        title: "Method caveats and result interpretation",
        body:
          "Open the draft or notes doc and talk through what the result probably means, what it definitely does not mean, and what you still need to check. Then edit that into formal prose.",
      },
      {
        title: "Meeting recap into a real memo",
        body:
          "After advisor meetings, research standups, or collaborator calls, dump the important decisions and next steps by voice before the nuance disappears.",
      },
    ],
    faqs: [
      {
        q: "Can I use it for academic writing in Word or Google Docs?",
        a:
          "Yes. VoiceTypr works anywhere a normal text field accepts keyboard input, including Word, Docs, note apps, and email.",
      },
      {
        q: "Is it good for writing final publishable prose in one pass?",
        a:
          "Usually it is best for getting the first pass out. Most researchers will still do a serious edit for clarity, citations, and tone.",
      },
      {
        q: "What about technical terms and citations?",
        a:
          "It handles a lot surprisingly well, but you should still expect a cleanup pass for specific names, jargon, and reference formatting.",
      },
      {
        q: "Can I use it for AI prompts and literature-synthesis tools too?",
        a:
          "Yes. Prompt boxes are normal text fields, so VoiceTypr works there the same way it does in docs or notes.",
      },
      {
        q: "Is this a meeting transcription platform?",
        a:
          "No. VoiceTypr is strongest for your own dictation and synthesis, not as a multi-speaker recording or collaboration system.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Capture the real thought. <em>Polish the paper later.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for researchers",
      "dictation software for researchers",
      "voice to text for research notes",
      "dictation for literature review notes",
      "research writing by voice",
    ],
  },
  {
    slug: "recruiters",
    title: "VoiceTypr for Recruiters — Candidate notes before the next call starts",
    ogTitle: "VoiceTypr for Recruiters",
    description:
      "Voice typing for recruiters. Dictate candidate notes, outreach drafts, interview summaries, and CRM updates faster in your usual tools.",
    navLabel: "Recruiters",
    category: "profession",
    order: 10,
    hero: {
      eyebrow: "voicetypr for recruiters",
      headline: "The call ended. <em>The notes still need to exist.</em>",
      lede:
        "Recruiting is full of short windows between conversations. Candidate notes, outreach follow-ups, scorecards, and CRM updates all need to be written while the person is still fresh in your head. VoiceTypr helps you get that context down before the next meeting wipes it out.",
      metaStrip: ["notes · outreach · crm", "local transcription", "every-app input"],
    },
    pains: [
      {
        title: "Recruiting creates text faster than typing keeps up.",
        body:
          "Every interview produces notes. Every promising lead needs outreach. Every pipeline change wants CRM context. The writing overhead is constant.",
      },
      {
        title: "Good candidate detail decays quickly.",
        body:
          "The useful nuance is often in how someone explained a project or hesitated on a tradeoff. If you wait too long to write it, the memory gets flatter.",
      },
      {
        title: "Template outreach still needs a human pass.",
        body:
          "The best recruiter messages do not sound pasted. They still need real context, and that means typing more than you want to type.",
      },
    ],
    outcomes: [
      {
        marker: "fast",
        title: "Candidate notes captured before the next call",
        body:
          "Voice makes it easier to record the actual signal from the conversation while it is still sharp.",
        meta: "Outcome · recall",
      },
      {
        marker: "any",
        title: "Works in ATS, CRM, docs, and email",
        body:
          "Recruiting workflows jump across browser tools, notes, spreadsheets, and inboxes. VoiceTypr follows the cursor instead of forcing a new workflow.",
        meta: "Outcome · scope",
      },
      {
        marker: "human",
        title: "Outreach that still sounds personal",
        body:
          "Talking through why a candidate is a fit often sounds more natural than typing a stiff message from scratch.",
        meta: "Outcome · tone",
      },
    ],
    workflows: [
      {
        title: "Post-screen call recap",
        body:
          "Right after the call, dictate strengths, gaps, risks, and a recommendation into the ATS or notes doc. The whole recap takes a minute instead of becoming another task.",
      },
      {
        title: "Candidate outreach with real context",
        body:
          "Open the email or LinkedIn draft and speak why the role fits, what stood out in the profile, and what you want them to know. Then tighten it.",
      },
      {
        title: "Hiring manager handoff notes",
        body:
          "Dictate the part that matters: what the person has really done, what to probe next, and what felt unusually strong or weak.",
      },
    ],
    faqs: [
      {
        q: "Can I use it inside my ATS or browser-based recruiting tools?",
        a:
          "Usually yes. VoiceTypr works anywhere a normal text field accepts keyboard input, including browser apps.",
      },
      {
        q: "Is it only useful for candidate notes?",
        a:
          "No. Recruiters also use it for outreach drafts, internal summaries, follow-ups, and hiring-manager notes.",
      },
      {
        q: "What if I still need to clean up the note after dictating?",
        a:
          "That is normal. The win is getting a strong first pass into the system fast while the conversation is still clear.",
      },
      {
        q: "Can it help with AI sourcing or outreach prompts too?",
        a:
          "Yes. Prompt boxes and search fields are normal text inputs, so VoiceTypr works there as well.",
      },
      {
        q: "Is this a recruiting automation platform?",
        a:
          "No. VoiceTypr is an input tool. It helps you write inside the recruiting stack you already use.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Keep the signal. <em>Lose some of the typing.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for recruiters",
      "dictation software for recruiters",
      "dictate candidate notes",
      "voice to text for recruiting outreach",
      "recruiter notes by voice",
    ],
  },
  {
    slug: "sales",
    title: "VoiceTypr for Sales — Follow up while the call still has heat",
    ogTitle: "VoiceTypr for Sales",
    description:
      "Voice typing for sales reps. Dictate follow-ups, CRM notes, call recaps, and proposal drafts faster across your sales workflow.",
    navLabel: "Sales",
    category: "profession",
    order: 11,
    hero: {
      eyebrow: "voicetypr for sales",
      headline: "The deal moves on speed. <em>The admin still wants paragraphs.</em>",
      lede:
        "Sales work is full of writing that matters but never feels like the main event: follow-up emails, CRM updates, discovery notes, proposal context, and internal handoffs. VoiceTypr cuts the typing tax so you can get the words into the system before momentum drops.",
      metaStrip: ["follow-ups · crm · proposals", "local transcription", "works in every tool"],
    },
    pains: [
      {
        title: "Every call creates a second job.",
        body:
          "You finish the meeting, then have to write the recap, update the CRM, send the follow-up, and note the next steps. The sales conversation is over; the typing just started.",
      },
      {
        title: "The best follow-ups usually do not get written instantly.",
        body:
          "When energy is high, you know exactly what to say. Ten calls later, the email gets shorter, flatter, and less persuasive.",
      },
      {
        title: "CRM hygiene dies when typing feels expensive.",
        body:
          "Reps know they should leave better notes. They often skip it because nobody wants to type another detailed summary between calls.",
      },
    ],
    outcomes: [
      {
        marker: "faster",
        title: "Follow-ups out while the call is still fresh",
        body:
          "Voice makes it easier to send the useful recap now instead of telling yourself you will do it later.",
        meta: "Outcome · timing",
      },
      {
        marker: "better",
        title: "Richer CRM notes",
        body:
          "Because dictating a paragraph is cheap, you keep more detail about objections, timing, and political context.",
        meta: "Outcome · context",
      },
      {
        marker: "any",
        title: "Email, CRM, docs, proposal tools",
        body:
          "Sales work jumps across Gmail, HubSpot, Salesforce, notes, docs, and browser forms. VoiceTypr fits that reality.",
        meta: "Outcome · scope",
      },
    ],
    workflows: [
      {
        title: "Discovery call to follow-up email",
        body:
          "Open the draft and talk through what you heard, what matters, and what happens next. Then edit. The email lands faster and sounds closer to the actual conversation.",
      },
      {
        title: "CRM updates between calls",
        body:
          "Dictate objections, budget reality, decision-maker dynamics, and next steps right after the call instead of leaving vague one-liners.",
      },
      {
        title: "Proposal framing and internal handoff",
        body:
          "Before the formal proposal gets polished, use voice to dump the business context and win strategy into a working doc the team can use.",
      },
    ],
    faqs: [
      {
        q: "Can I use it in my CRM?",
        a:
          "Usually yes. VoiceTypr works anywhere a normal text field accepts keyboard input, including browser-based CRM tools.",
      },
      {
        q: "Is this just for follow-up emails?",
        a:
          "No. Reps also use it for call notes, CRM updates, proposal outlines, handoffs, and internal summaries.",
      },
      {
        q: "Will dictated sales writing sound too rough?",
        a:
          "The first pass may be rough, but it is usually easier to edit a spoken draft than to type one from zero when you are moving fast.",
      },
      {
        q: "Can I use it for sales prompts in AI tools too?",
        a:
          "Yes. Prompt boxes and browser forms are normal text fields, so VoiceTypr works there too.",
      },
      {
        q: "Does it replace CRM automation or sequencing tools?",
        a:
          "No. VoiceTypr is an input layer. It helps you create the text faster inside the tools you already run.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Send the follow-up. <em>Do less typing to get there.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for sales reps",
      "dictation software for sales",
      "dictate CRM notes",
      "voice to text for sales follow up emails",
      "sales notes by voice",
    ],
  },
  {
    slug: "marketers",
    title: "VoiceTypr for Marketers — Talk the draft before the campaign gets flattened",
    ogTitle: "VoiceTypr for Marketers",
    description:
      "Voice typing for marketers. Dictate campaign briefs, copy drafts, content outlines, and strategy notes faster in the tools you already use.",
    navLabel: "Marketers",
    category: "profession",
    order: 12,
    hero: {
      eyebrow: "voicetypr for marketers",
      headline: "The campaign starts as talk. <em>The draft still needs words.</em>",
      lede:
        "Marketing work produces a huge amount of text before anything ships: briefs, hooks, ad copy, landing page structure, emails, angle tests, and internal notes. VoiceTypr helps you get those first passes out quickly so the good idea arrives before over-editing kills it.",
      metaStrip: ["copy · briefs · outlines", "local transcription", "works in every app"],
    },
    pains: [
      {
        title: "Marketing is more writing than it looks from the outside.",
        body:
          "A campaign means docs, pages, ads, emails, prompts, and notes. The final asset is visible; the typing workload behind it usually is not.",
      },
      {
        title: "The first strong angle often sounds obvious out loud.",
        body:
          "You can hear the hook in your head or explain it to a teammate, but typing it cleanly from scratch slows down the part that was already there.",
      },
      {
        title: "Prompt-heavy marketing work still creates keyboard fatigue.",
        body:
          "A lot of modern marketing includes feeding context into AI tools. That can mean as much typing as the final copy itself.",
      },
    ],
    outcomes: [
      {
        marker: "faster",
        title: "More first drafts on the page",
        body:
          "Briefs, hooks, emails, and outlines appear faster when you speak them first and edit second.",
        meta: "Outcome · velocity",
      },
      {
        marker: "any",
        title: "Works across docs, CMS, prompts, and chat",
        body:
          "Notion, Docs, ads managers, CMS fields, Slack, email, AI prompt boxes. Marketing writing is fragmented, so the input tool has to be flexible.",
        meta: "Outcome · scope",
      },
      {
        marker: "natural",
        title: "Voice can sound more like actual language",
        body:
          "Spoken first drafts often feel more human than copy assembled word-by-word under keyboard pressure.",
        meta: "Outcome · tone",
      },
    ],
    workflows: [
      {
        title: "Campaign brief from spoken thinking",
        body:
          "Dictate the audience, problem, message, objections, and CTA into the brief before you start formatting it into something tidy.",
      },
      {
        title: "Landing page and email draft passes",
        body:
          "Open the doc or page builder note field and talk through the headline, story, proof, and offer. Then trim it. The structure comes out faster this way.",
      },
      {
        title: "AI prompting without the keyboard tax",
        body:
          "If half the work now is context-setting for AI tools, voice is often the fastest way to feed them the nuance they need.",
      },
    ],
    faqs: [
      {
        q: "Can I use it in Notion, Google Docs, and CMS fields?",
        a:
          "Yes. VoiceTypr works anywhere a normal text field accepts keyboard input, including browser tools and docs.",
      },
      {
        q: "Is this only for long-form copy?",
        a:
          "No. Marketers use it for briefs, outlines, prompt inputs, internal notes, ad concepts, emails, and landing page drafts.",
      },
      {
        q: "Will spoken copy need editing?",
        a:
          "Of course. The point is not perfect final copy in one pass. The point is getting a stronger first draft on the page faster.",
      },
      {
        q: "Can voice really help with marketing angles?",
        a:
          "Often yes. Speaking can surface a more natural hook or objection-handling line than typing under pressure.",
      },
      {
        q: "Does it replace copy tools or AI writing apps?",
        a:
          "No. VoiceTypr is an input layer. It helps you feed better raw material into the rest of your writing stack.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Talk the first angle. <em>Edit the sharper version.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "voice typing for marketers",
      "dictation software for marketers",
      "voice to text for marketing copy",
      "dictate campaign briefs",
      "marketing copy by voice",
    ],
  },
  {
    slug: "consultants",
    title: "VoiceTypr for Consultants — The meeting ends, the memo still needs to happen",
    ogTitle: "VoiceTypr for Consultants",
    description:
      "Voice typing for consultants. Dictate client recaps, internal notes, proposal drafts, and memos faster without changing your workflow.",
    navLabel: "Consultants",
    category: "profession",
    order: 13,
    hero: {
      eyebrow: "voicetypr for consultants",
      headline: "The client call is over. <em>The write-up still isn't.</em>",
      lede:
        "Consulting work creates constant translation pressure: meeting to memo, discussion to proposal, insight to recommendation, notes to email. VoiceTypr helps you move that text-heavy follow-through faster so the useful thinking survives the handoff into written form.",
      metaStrip: ["memos · proposals · recap notes", "local transcription", "every-app workflow"],
    },
    pains: [
      {
        title: "Consulting work turns every conversation into paperwork.",
        body:
          "Even a good call creates a trail of notes, summaries, emails, and next-step docs. The real cost is not the meeting, it is the writing after it.",
      },
      {
        title: "Strong recommendations arrive before the polished memo does.",
        body:
          "You often know the answer while speaking with the team, then lose force when you sit down to type the same logic into careful consultant prose.",
      },
      {
        title: "Travel days and packed calendars kill detail.",
        body:
          "Between calls, transit, and workshops, there is rarely a calm hour for writing. Voice helps capture context in the small gaps that actually exist.",
      },
    ],
    outcomes: [
      {
        marker: "faster",
        title: "Meeting-to-memo turnaround",
        body:
          "Speaking the recap right after the call gets the useful version into text before your day moves on.",
        meta: "Outcome · speed",
      },
      {
        marker: "any",
        title: "Docs, email, notes, proposal tools",
        body:
          "Consulting writing happens across docs, browser tools, chat, email, and prompts. VoiceTypr works across the whole spread.",
        meta: "Outcome · scope",
      },
      {
        marker: "clearer",
        title: "Recommendations that still sound like thinking",
        body:
          "Voice often preserves the logic and cadence of a recommendation better than typing it out under deadline pressure.",
        meta: "Outcome · clarity",
      },
    ],
    workflows: [
      {
        title: "Client call to recap email",
        body:
          "Open the draft and speak the situation, decisions, next steps, and unresolved questions immediately. Then tighten it into client-ready text.",
      },
      {
        title: "Working memos and synthesis docs",
        body:
          "Instead of waiting for the perfect block of writing time, dictate the interpretation, recommendation, and open risks while the reasoning is still alive.",
      },
      {
        title: "Proposal framing from spoken logic",
        body:
          "Use voice to dump the real shape of the problem, what you would do, and why it matters. Formal proposal language can come later.",
      },
    ],
    faqs: [
      {
        q: "Can I use it for client emails and internal docs?",
        a:
          "Yes. VoiceTypr works anywhere a normal text field accepts keyboard input, including docs, email, and browser tools.",
      },
      {
        q: "Is this mainly for consultants who write long memos?",
        a:
          "It helps there, but it is just as useful for recaps, proposals, workshop notes, and AI prompt-heavy client work.",
      },
      {
        q: "Will it still need editing?",
        a:
          "Yes. VoiceTypr is best at getting the first pass out fast. Most consultants will still refine tone, structure, and wording afterward.",
      },
      {
        q: "Can I use it with prompt-based consulting workflows too?",
        a:
          "Yes. Prompt boxes in AI tools are normal text fields, so VoiceTypr fits there naturally.",
      },
      {
        q: "Does it replace note-taking or project-management software?",
        a:
          "No. It is an input tool that helps you generate the text inside the systems you already use.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Get the memo started. <em>Keep the thinking intact.</em>",
      body: "VoiceTypr transcribes your voice on your machine by default and is sold as a lifetime license. Try it free for 3 days.",
    },
    keywords: [
      "dictation software for consultants",
      "voice typing for consultants",
      "voice to text for consulting notes",
      "dictate client recap emails",
      "consulting memos by voice",
    ],
  },
];

const USE_CASE_BY_SLUG: Record<string, UseCase> = Object.fromEntries(
  USE_CASE_ENTRIES.map((entry) => [entry.slug, entry]),
);

export function getAllUseCases(): UseCase[] {
  return [...USE_CASE_ENTRIES].sort((a, b) => {
    if (a.category !== b.category) {
      const order: UseCaseCategory[] = ["accessibility", "profession", "workflow"];
      return order.indexOf(a.category) - order.indexOf(b.category);
    }
    return a.order - b.order;
  });
}

export function getUseCasesByCategory(): Record<UseCaseCategory, UseCase[]> {
  const grouped: Record<UseCaseCategory, UseCase[]> = {
    accessibility: [],
    profession: [],
    workflow: [],
  };
  for (const entry of getAllUseCases()) {
    grouped[entry.category].push(entry);
  }
  return grouped;
}

export function getUseCase(slug: string): UseCase | null {
  return USE_CASE_BY_SLUG[slug] ?? null;
}

export function getAllUseCaseSlugs(): string[] {
  return Object.keys(USE_CASE_BY_SLUG);
}
