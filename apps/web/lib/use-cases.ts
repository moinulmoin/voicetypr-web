/**
 * Use-case data: structured per-niche content for /use-cases/* pages.
 * Each entry renders through the same editorial template — keep the voice
 * consistent with the homepage and FounderNote (direct, specific, no SaaS
 * marketing slop).
 */

import { USE_CASE_ES } from "./use-cases.es";

export type UseCaseCategory = "accessibility" | "profession";

export const USE_CASE_PAGES_LAST_UPDATED = "2026-06-27";

export type UseCase = {
  slug: string;
  title: string; // metadata title
  ogTitle: string; // shorter for OG
  description: string; // metadata description, 145-155 chars
  navLabel: string; // hub card / nav label
  /** One-line hub card teaser (~120 chars). Falls back to hero lede on the hub. */
  hubTeaser?: string;
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
      "If typing is the bottleneck — physical, cognitive, or otherwise — voice routes around it. These are the people Voicetypr was built for first.",
  },
  profession: {
    label: "By profession",
    eyebrow: "what it looks like in your craft",
    description:
      "How Voicetypr shows up day-to-day for the people who use it most. Concrete workflows, not generic productivity claims.",
  },
};

const USE_CASE_ENTRIES: UseCase[] = [
  // ──────────────────────────────────────────────────────────────────────
  // ACCESSIBILITY
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "adhd",
    title: "Voicetypr for ADHD — Voice typing that bypasses the friction",
    ogTitle: "Voicetypr for ADHD",
    description:
      "Type at the speed you think. Voice typing for people with ADHD: capture ideas before they vanish, write at speaking speed, and reduce typing friction.",
    navLabel: "ADHD",
    hubTeaser:
      "Capture fleeting ideas at speaking speed—local voice typing that pastes into Slack, Docs, or whatever app already has focus.",
    category: "accessibility",
    order: 1,
    hero: {
      eyebrow: "voicetypr for adhd",
      headline: "The thought just left. <em>Catch it before it does.</em>",
      lede:
        "If your brain runs faster than your fingers — and the idea is gone by the time you finish typing the first sentence — voice closes that gap. Voicetypr captures the thought at speaking speed, locally, and pastes it wherever your cursor is.",
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
          "While you're locked in, voice keeps up with the velocity. Turn on automatic punctuation cleanup if you want — so you leave the session with real paragraphs, not one endless block of speech.",
      },
    ],
    faqs: [
      {
        q: "Will it pick up my voice when I'm thinking out loud and tripping over words?",
        a:
          'Yes. On-device transcription handles filler words, restarts, and "um" / "uh" reasonably well. The optional Default formatting preset cleans those up further when you don\'t want them in the final output. Keep AI formatting off if you\'d rather see exactly what you said.',
      },
      {
        q: "Can I use it for journaling with local transcription?",
        a:
          "Yes. Voicetypr transcribes your voice on your machine by default. Optional AI formatting sends text only when you explicitly turn it on, never the audio.",
      },
      {
        q: "Does it work with Things / Apple Notes / Obsidian / Notion?",
        a:
          "Yes. Voicetypr pastes into any text field that accepts keyboard input. Place your cursor where you want the text, hold the hotkey, talk. The app you're in doesn't need to know anything about Voicetypr.",
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
      body: "Hold the hotkey, say the thought once, and paste it where you were already working—still on-device by default. Try Voicetypr free for 3 days.",
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
    title: "Voicetypr for Dyslexia — Bypass spelling friction, write at speaking speed",
    ogTitle: "Voicetypr for Dyslexia",
    description:
      "Voice typing for dyslexia. Write what you mean without fighting spelling, autocorrect, or re-reading loops. Local transcription with pay-once pricing.",
    navLabel: "Dyslexia",
    hubTeaser:
      "Say what you mean first; let transcription carry spelling and pacing so you edit ideas—not every keystroke.",
    category: "accessibility",
    order: 2,
    hero: {
      eyebrow: "voicetypr for dyslexia",
      headline: "Say what you mean. <em>Skip the spelling fight.</em>",
      lede:
        "If reading your draft is slower than writing it — and autocorrect keeps changing the wrong words — skip the fight. Speak, get text, keep moving.",
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
          "Yes for most domain vocabulary — the medium and large on-device models are trained on a broad corpus including technical terms, names, places. Domain-specific jargon (rare scientific terms, niche product names) sometimes needs a quick edit, but the common-word miss rate is very low.",
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
          "No. Voicetypr transcribes your voice on your machine by default. Optional AI formatting sends text only when enabled; your audio is not sent for model training.",
      },
      {
        q: "Does it work for someone whose first language isn't English?",
        a:
          "Yes — Voicetypr supports 99+ languages. Dictation works in your native tongue or in English. You can switch via the model language picker.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Write at the speed <em>you talk.</em>",
      body: "Get ideas onto the page at speaking speed, then edit with your eyes when you're ready. Local transcription by default; 3-day trial, lifetime license available.",
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
    title: "Voicetypr for RSI — Voice typing for wrist pain and repetitive strain",
    ogTitle: "Voicetypr for RSI",
    description:
      "Wrist pain or RSI slowing your typing? Voicetypr is offline voice-to-text that shifts daily writing off your hands. Pay once, lifetime license.",
    navLabel: "RSI / wrist pain",
    hubTeaser:
      "Route daily writing through voice so wrists and forearms get relief while replies and docs still land on time.",
    category: "accessibility",
    order: 3,
    hero: {
      eyebrow: "voicetypr for rsi",
      headline: "When typing hurts. <em>Talk instead.</em>",
      lede:
        "Wrist pain, repetitive strain, post-tendonitis recovery — when your hands are the bottleneck, voice is the relief valve. Voicetypr runs offline and works in every app you already use, so you don't have to give up your tools to give your hands a break.",
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
          "Yes. Voicetypr only needs a microphone and a hotkey it can listen for. It doesn't care what your input hardware looks like. Custom hotkeys are supported if the defaults conflict.",
      },
      {
        q: "What about taking a break — can I disable it temporarily?",
        a:
          "Yes — there's a global pause from the menu bar / tray, and you can quit the app entirely without losing settings.",
      },
      {
        q: "Will it work with my voice if I'm tired and not enunciating clearly?",
        a:
          "The medium on-device model handles tired-voice speech better than people expect. If clarity drops noticeably, the large model is more accurate at the cost of speed; you can switch per-session.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Give your <em>hands a break.</em>",
      body: "Shift the repetitive writing off your wrists without changing apps—offline dictation by default. Start a 3-day trial and keep it with a one-time license.",
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
    title: "Voicetypr for Carpal Tunnel — Voice typing when your hands need a break",
    ogTitle: "Voicetypr for Carpal Tunnel",
    description:
      "Voice typing for carpal tunnel and hand pain. Dictate emails, docs, prompts, and replies locally in any app on Mac or Windows. Pay once.",
    navLabel: "Carpal tunnel",
    hubTeaser:
      "Dictate email, tickets, and docs when gripping a keyboard hurts—local transcription in the apps you already use.",
    category: "accessibility",
    order: 4,
    hero: {
      eyebrow: "voicetypr for carpal tunnel",
      headline: "Your hands are asking for less. <em>Give them voice.</em>",
      lede:
        "Carpal tunnel turns ordinary typing into a negotiation with pain. Voicetypr lets you keep writing emails, prompts, docs, and replies while your hands do less of the work. Hold a hotkey, talk, release. The text lands where your cursor already is.",
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
          "If you are dictating medical notes, work accommodations, or private emails, cloud transcription can feel wrong. Voicetypr keeps audio on your machine by default.",
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
          "Word, Gmail, Slack, Notion, Cursor, Google Docs, support inboxes. If you can paste into it, Voicetypr can put text there.",
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
          "No. Voicetypr is a writing tool, not treatment. It can reduce typing load, but you should still follow medical and ergonomic guidance for your specific condition.",
      },
      {
        q: "Will it work on Windows?",
        a:
          "Yes. Voicetypr works on Windows and macOS. It pastes text into normal Windows apps, including Word, Gmail, Slack, Cursor, VS Code, and browser text fields.",
      },
      {
        q: "Is the audio sent to a cloud transcription service?",
        a:
          "No. Voicetypr transcribes your voice on your machine by default. Optional AI formatting can send final text to an AI provider if you enable it, but not the original audio.",
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
      body: "Keep answering email and docs when typing hurts: dictate locally, paste anywhere. Three-day free trial; pay once if it becomes daily gear.",
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
    title: "Voicetypr for Motor Impairments — Accessible voice typing in every app",
    ogTitle: "Voicetypr for Motor Impairments",
    description:
      "Accessible voice typing for people with motor impairments. Dictate into Windows or Mac apps with local transcription and lifetime pricing.",
    navLabel: "Motor impairments",
    hubTeaser:
      "Hands-free input into any text field on Mac or Windows, with on-device transcription and a lifetime license option.",
    category: "accessibility",
    order: 5,
    hero: {
      eyebrow: "accessible voice typing",
      headline: "Typing should not decide <em>how much you get to say.</em>",
      lede:
        "For many people who rely on assistive input, the hard part is not having something to say. It is getting words through a keyboard often enough, long enough, and with low enough friction. Voicetypr turns speech into text in the apps you already use, with local transcription by default.",
      metaStrip: ["windows + mac", "local transcription", "works in every text field"],
    },
    pains: [
      {
        title: "Accessibility tools often split control and writing.",
        body:
          "Voice control helps you move around the computer. Dictation helps you create text. Voicetypr focuses on the writing side so emails, forms, docs, prompts, and messages do not depend entirely on typing.",
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
          "Voicetypr pastes into standard text inputs across Windows and Mac. No special plugin per app.",
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
        q: "Is Voicetypr a full computer control tool?",
        a:
          "No. It is a dictation tool. Windows Voice Access and Apple Voice Control are better for navigating the computer by voice. Voicetypr is for turning speech into text inside the apps where you write.",
      },
      {
        q: "Can I try it before paying?",
        a:
          "Yes. The trial is 3 days and does not require a card. That gives you time to test your microphone, shortcut, apps, and comfort level.",
      },
      {
        q: "Does it work with accessibility hardware?",
        a:
          "Yes. Voicetypr only needs a microphone and a shortcut it can listen for. It works alongside split keyboards, vertical mice, adaptive keyboards, and other input hardware.",
      },
      {
        q: "Does it support Windows users?",
        a:
          "Yes. Windows support is a first-class part of the product, not an afterthought. The app is built for both Windows and macOS workflows.",
      },
      {
        q: "What if my speech is not perfectly clear?",
        a:
          "On-device transcription handles many accents, pauses, and restarts well, but no dictation system is perfect. Use the trial with your real voice and real microphone before buying.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Say it once. <em>Put it where it belongs.</em>",
      body: "Put text where your cursor is with a hotkey—not a hunt through menus. On-device transcription by default; try free for 3 days, then buy once.",
    },
    keywords: [
      "accessible voice typing",
      "dictation software for accessibility",
      "voice typing motor impairment",
      "assistive dictation software",
      "windows accessibility dictation",
    ],
  },
  {
    slug: "broken-wrist",
    title: "Voicetypr for a Broken Wrist — Keep writing while it heals",
    ogTitle: "Voicetypr for a Broken Wrist",
    description:
      "Broke your wrist? Keep writing without slow one-handed hunt-and-peck. Voicetypr turns your voice into text in any app, on-device, and you pay once.",
    navLabel: "Broken wrist",
    hubTeaser:
      "A cast doesn't pause your deadlines. Talk your emails, docs, and messages into any app instead of pecking them out one-handed.",
    category: "accessibility",
    order: 6,
    hero: {
      eyebrow: "voicetypr for a broken wrist",
      headline: "Your wrist is in a cast. <em>Your deadlines aren't.</em>",
      lede:
        "One-handed typing is slow, and the to-do list didn't shrink when you got the cast. Hold a hotkey, say the sentence, and Voicetypr types it for you—in whatever app you were already in, transcribed on your own machine.",
      metaStrip: ["one-handed trigger", "local transcription", "works in every app"],
    },
    pains: [
      {
        title: "One-handed typing turns a five-minute email into twenty.",
        body:
          "Hunt-and-peck with your good hand is fine for a quick reply. A full inbox, a report, or a class assignment is a different story—every word costs three times the effort, and the cast doesn't come off for six weeks.",
      },
      {
        title: "Most dictation is stuck in one app or sent to the cloud.",
        body:
          "Phone dictation lives on your phone. Some tools only work inside their own editor. Others stream your audio to a server. When you just need to get work done at your computer, none of that fits.",
      },
      {
        title: "You don't want a subscription for a six-week problem.",
        body:
          "A temporary injury shouldn't sign you up for a recurring bill. You need something that works today, keeps working when the cast comes off, and doesn't keep charging you after.",
      },
    ],
    outcomes: [
      {
        marker: "1 hand",
        title: "Trigger it without the injured wrist",
        body:
          "Press the hotkey with your good hand—or use push-to-talk—then talk. You never need both hands to start.",
        meta: "Outcome · one-handed",
      },
      {
        marker: "any app",
        title: "Type where you were already working",
        body:
          "Email, Docs, Slack, your IDE, a web form—Voicetypr pastes into whatever field has your cursor. No new app to learn while you're already adjusting.",
        meta: "Outcome · everywhere",
      },
      {
        marker: "once",
        title: "Pay once, keep it after you heal",
        body:
          "A lifetime license, not a rental. When your wrist is back to full speed, a lot of people keep using it anyway.",
        meta: "Outcome · no subscription",
      },
    ],
    workflows: [
      {
        title: "Clear the inbox without the cast slowing you down",
        body:
          "Open the reply, hold the hotkey, say what you mean, release. The text lands in the message. Batch a morning of email in the time one-handed typing would've taken for a handful.",
      },
      {
        title: "Keep the assignment or report moving",
        body:
          "Put the cursor in the doc and talk the draft out in paragraphs. Edit with your good hand. The hard part—producing the words—stops depending on two working wrists.",
      },
      {
        title: "Work in chat and code review hands-light",
        body:
          "Slack replies, PR comments, quick notes—say them instead of typing them. Push-to-talk on Option/Alt+Space keeps it to one key and one hand.",
      },
    ],
    faqs: [
      {
        q: "Can I start it with one hand if my wrist is in a cast?",
        a:
          "Yes. The hotkey is a single combo you can hit with your good hand (⌘+Shift+Space on macOS, Ctrl+Shift+Space on Windows), and there's a push-to-talk option on Option/Alt+Space. You never need the injured hand to trigger it.",
      },
      {
        q: "Does it work in every app, or just one?",
        a:
          "Any app with a text field that accepts keyboard input. Place your cursor where you want the text, hold the hotkey, talk—email, Docs, Slack, your editor, a web form. The app doesn't need to know anything about Voicetypr.",
      },
      {
        q: "Is my voice uploaded anywhere?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your audio stays on your device. Optional AI formatting sends text only when you turn it on, never the audio.",
      },
      {
        q: "Will I still want it once my wrist heals?",
        a:
          "Plenty of people do—talking is faster than typing for a lot of writing. Either way there's no subscription: it's a one-time purchase, so keeping it costs nothing extra.",
      },
      {
        q: "Does it work on both Mac and Windows?",
        a:
          "Yes—macOS (Apple Silicon and Intel) and Windows 10+. There's a 3-day free trial with no card, so you can confirm it fits your setup before buying.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Heal your wrist. <em>Keep your momentum.</em>",
      body: "Hold the hotkey with your good hand, say the sentence, and paste it where you were already working—on-device by default. Try Voicetypr free for 3 days.",
    },
    keywords: [
      "voice typing for a broken wrist",
      "how to type with a broken wrist",
      "dictation software for a broken wrist",
      "voice to text broken wrist",
      "speech to text one handed typing",
      "typing with a cast",
      "voicetypr broken wrist",
    ],
  },
  {
    slug: "hand-surgery-recovery",
    title: "Voicetypr for Hand Surgery Recovery — Keep working while you heal",
    ogTitle: "Voicetypr for Hand Surgery Recovery",
    description:
      "Voice typing after hand surgery: keep email, docs, and messages moving while typing's off-limits. On-device, works in any app, Mac or Windows, pay once.",
    navLabel: "Hand surgery recovery",
    hubTeaser:
      "Told to rest the hand for weeks? Talk your email, docs, and replies into any app—transcribed on your own machine.",
    category: "accessibility",
    order: 7,
    hero: {
      eyebrow: "voicetypr for hand surgery recovery",
      headline: "Your surgeon said no typing. <em>Your inbox didn't.</em>",
      lede:
        "Carpal tunnel release, a tendon repair, a fracture pinned back together—each one comes with the same instruction: rest the hand. The report's still due, though, and the inbox keeps filling. Hold a hotkey, say the sentence, and Voicetypr types it into whatever app you're already in, transcribed on your own machine.",
      metaStrip: ["off-keyboard input", "local transcription", "works in every app"],
    },
    pains: [
      {
        title: "Your surgeon said rest the hand. Work didn't get the memo.",
        body:
          "Carpal tunnel, tendon, and fracture repairs all come with weeks of restricted typing—and using the hand too early can strain the repair and set healing back. The deadlines don't move to match your recovery.",
      },
      {
        title: "This isn't a two-day problem.",
        body:
          "Splints often stay on for several weeks, and light typing may not be cleared until around the six-week mark, with full strength later still. School and work don't pause for that whole window, so you need a way to keep producing words the entire time.",
      },
      {
        title: "Every workaround drags the hand back in.",
        body:
          "Pecking with the other hand is slow, and you end up bracing with the healing one anyway. Phone dictation lives on your phone, away from the work. Browser tools trap you in their own editor. None of them keep the operated hand fully off the keyboard.",
      },
    ],
    outcomes: [
      {
        marker: "0",
        title: "Keystrokes on the healing hand",
        body:
          "Trigger with your other hand or push-to-talk, then talk. The operated hand never has to reach the keyboard to get a paragraph down.",
        meta: "Outcome · off-keyboard",
      },
      {
        marker: "any app",
        title: "Type where you were already working",
        body:
          "Email, Docs, Slack, your IDE, a web form—Voicetypr pastes into whatever field has your cursor. No new tool to learn mid-recovery.",
        meta: "Outcome · everywhere",
      },
      {
        marker: "once",
        title: "Pay once, keep it after you're cleared",
        body:
          "A lifetime license, not a rental for a recovery window. When the splint's off, plenty of people keep dictating anyway.",
        meta: "Outcome · no subscription",
      },
    ],
    workflows: [
      {
        title: "Keep the inbox moving while the splint's on",
        body:
          "Open the reply, trigger the hotkey, say what you mean, release. The message lands. Clear a morning of email without the operated hand touching the keyboard once.",
      },
      {
        title: "Keep the report or coursework on schedule",
        body:
          "Put the cursor in the doc and talk the draft out in paragraphs. Do the light edits once you're cleared for them. Producing the words stops waiting on a healed hand.",
      },
      {
        title: "Stand-ups, tickets, and prompts hands-light",
        body:
          "Slack updates, Jira tickets, AI prompts—say them instead of typing them. Push-to-talk on Option/Alt+Space keeps the trigger to a single key your good hand can reach.",
      },
    ],
    faqs: [
      {
        q: "My surgeon told me to keep the hand still—can I use this without it?",
        a:
          "Yes. Trigger the hotkey with your other hand, or use push-to-talk on Option/Alt+Space, then speak. The operated hand never has to touch the keyboard. Always follow your surgeon's guidance on what your hand is cleared to do.",
      },
      {
        q: "Will this help my hand heal?",
        a:
          "No. Voicetypr is productivity software, not medical treatment—it doesn't heal anything and it doesn't replace your recovery plan. What it does is reduce typing load so you can keep working while typing is restricted. Follow your surgeon and hand therapist on the medical side.",
      },
      {
        q: "Is my voice uploaded anywhere?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your audio stays on your device. Optional AI formatting sends text only when you turn it on, never the audio.",
      },
      {
        q: "It's only for a few weeks—do I have to subscribe?",
        a:
          "No. Voicetypr is a one-time purchase, not a subscription, so a temporary recovery window doesn't sign you up for a recurring bill. There's also a 3-day free trial with no card.",
      },
      {
        q: "Does it work on both Mac and Windows?",
        a:
          "Yes—macOS (Apple Silicon and Intel) and Windows 10+. You can confirm it fits your microphone and your apps during the free trial before buying.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Rest the hand. <em>Keep the work moving.</em>",
      body: "Trigger with your good hand, say the sentence, and paste it where you were already working—on-device by default. Try Voicetypr free for 3 days.",
    },
    keywords: [
      "voice typing after hand surgery",
      "how to type after hand surgery",
      "dictation software for hand surgery recovery",
      "voice to text after hand surgery",
      "speech to text after hand surgery",
      "voice dictation after hand surgery",
      "voicetypr hand surgery recovery",
    ],
  },
  {
    slug: "tendonitis",
    title: "Voicetypr for Tendonitis — Cut the keystrokes, keep writing",
    ogTitle: "Voicetypr for Tendonitis",
    description:
      "Voice typing for tendonitis: cut keystroke load so flared wrists and forearms can rest while you still ship email, docs, and replies. Local, pay once.",
    navLabel: "Tendonitis",
    hubTeaser:
      "Shift the bulk of drafting off your hands—dictate email, docs, and replies in any app while sore wrists and forearms rest.",
    category: "accessibility",
    order: 8,
    hero: {
      eyebrow: "voicetypr for tendonitis",
      headline: "It flares every time you type. <em>So type less.</em>",
      lede:
        "Tendonitis is an overuse injury, and a full day of typing keeps feeding it. Voicetypr moves the bulk of your writing to your voice—hold a hotkey, talk, release—so the keyboard stops taking every keystroke while your wrists and forearms get a break.",
      metaStrip: ["less keyboard load", "local transcription", "any app, any field"],
    },
    pains: [
      {
        title: "Rest is the prescription. Your job won't let you fill it.",
        body:
          "Tendonitis is an overuse injury, so almost every plan starts with resting the tendon. A day of email, tickets, and documents is the opposite of rest—each typing block aggravates the exact thing that needs a break.",
      },
      {
        title: "It clocks out later than you do.",
        body:
          "The ache doesn't stop when the laptop closes. Stiff in the morning, sore through the evening, grip that quits halfway through a jar—heavy typing days are the ones that flare it worst, and the keyboard is where the repetition lives.",
      },
      {
        title: "De Quervain's turns the spacebar into a trigger.",
        body:
          "If it's the thumb-side kind, the base of your thumb and the radial wrist light up with every grip, pinch, and reach for the spacebar or a modifier key. The keys your thumbs hit most are the ones that hurt.",
      },
    ],
    outcomes: [
      {
        marker: "fewer",
        title: "Keystrokes per email and doc",
        body:
          "Hold the hotkey, say the paragraph, release. You still edit by hand—but drafting, the part with the most repetition, comes off the keyboard.",
        meta: "Outcome · load",
      },
      {
        marker: "any",
        title: "App, any text field",
        body:
          "Gmail, Slack, Word, Notion, Linear, your editor, a web form. If the cursor blinks in it, the text pastes in—no per-app plugin.",
        meta: "Outcome · reach",
      },
      {
        marker: "once",
        title: "Pay once, keep it past the flare",
        body:
          "A lifetime license, not a rental. When the flare settles you can keep using it—plenty of people do—without another subscription to cancel.",
        meta: "Outcome · no subscription",
      },
    ],
    workflows: [
      {
        title: "Get through email on a flare day",
        body:
          "Open the reply, hold the hotkey, say what you mean, release. Batch a morning of inbox without adding a morning of keystrokes—the part that would normally have your forearms aching by lunch.",
      },
      {
        title: "Long docs without the drafting marathon",
        body:
          "Specs, reports, customer write-ups. Talk them out in blocks and keep the keyboard for edits. Your hands work at editing pace, not drafting pace, on exactly the pieces that used to cost the most typing.",
      },
      {
        title: "The small typing that quietly aggravates it",
        body:
          "Slack one-liners, ticket notes, AI prompts, form fields. None of it feels like much on its own; across a day it's the repetition tendons hate most. Dictate the lot and the count stays low.",
      },
    ],
    faqs: [
      {
        q: "Does this help with De Quervain's, or just general wrist tendonitis?",
        a:
          "Either, the same way: it's not treatment, but typing less means fewer of the grips, pinches, and spacebar reaches that aggravate the thumb-side tendons. You hold a hotkey and talk instead of hammering the keys for every draft.",
      },
      {
        q: "Can I trigger it without straining my wrist or thumb?",
        a:
          "The hotkey is one combo—⌘+Shift+Space on macOS, Ctrl+Shift+Space on Windows—and there's push-to-talk on Option/Alt+Space. If the defaults strain you, set a custom hotkey you can reach comfortably.",
      },
      {
        q: "Does Voicetypr treat or heal tendonitis?",
        a:
          "No. It's a writing tool, not medical treatment—it reduces how much you type, it doesn't fix the tendon. Keep following your clinician's and ergonomic advice; this just takes drafting load off your hands while you do.",
      },
      {
        q: "Is my voice uploaded anywhere?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your audio stays on your device. Optional AI formatting sends text only when you turn it on, never the audio.",
      },
      {
        q: "Will I still want it once the flare settles?",
        a:
          "Many people keep it—talking is faster than typing for a lot of writing—and it's pay-once, so keeping it costs nothing extra. macOS (Apple Silicon and Intel) and Windows 10+, with a 3-day trial and no card.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Same work, <em>fewer keystrokes.</em>",
      body: "Shift the drafting to your voice and let the keyboard handle the edits—on-device by default, in every app you already use. Try Voicetypr free for 3 days, then pay once.",
    },
    keywords: [
      "voice typing for tendonitis",
      "dictation software for tendonitis",
      "voice to text tendonitis",
      "speech to text tendonitis",
      "typing with wrist tendonitis",
      "dictation for de quervain's",
      "voicetypr tendonitis",
    ],
  },
  {
    slug: "arthritis",
    title: "Voicetypr for Arthritis — Keep writing when typing hurts",
    ogTitle: "Voicetypr for Arthritis",
    description:
      "Voice typing for arthritis in the hands. When stiff joints make typing hurt, dictate emails, docs, and replies in any app—local transcription, pay once.",
    navLabel: "Arthritis",
    hubTeaser:
      "Bad joint day? Talk your emails, docs, and replies into any app instead of forcing stiff, sore fingers across the keyboard.",
    category: "accessibility",
    order: 9,
    hero: {
      eyebrow: "voicetypr for arthritis",
      headline: "Some days, every keystroke hurts. <em>Say it instead.</em>",
      lede:
        "Stiff, swollen finger joints make a full day at the keyboard its own kind of work — worse on cold mornings and during a flare. Hold a hotkey, say the email or doc out loud, and Voicetypr types it where your cursor already is. Transcription runs on your own machine.",
      metaStrip: ["lower keystroke load", "local transcription", "any text field"],
    },
    pains: [
      {
        title: "Short messages are fine. A full workday at the keyboard isn't.",
        body:
          "A quick reply you can manage. A loaded inbox, a long report, or back-to-back docs is a different ask — the keystrokes pile up and your finger joints keep the tally. Voice moves the bulk of the writing off your hands.",
      },
      {
        title: "Cold mornings and flare days move the goalposts.",
        body:
          "When joints are stiff and swollen, you miss keys and hit the wrong ones, and the whole thing slows down. The amount of typing your hands can take changes day to day — sometimes hour to hour.",
      },
      {
        title: "Stiffness turns ten fingers into two.",
        body:
          "Sore knuckles push you into hunt-and-peck — whole-hand and wrist motions to press the keys instead of light finger taps. It works, but it's slow, and it's not how you want to write for an hour straight.",
      },
    ],
    outcomes: [
      {
        marker: "1",
        title: "A hotkey, not a hundred keystrokes",
        body:
          "Press once, speak the paragraph, release. You still edit with the keyboard, but the drafting load comes off your fingers.",
        meta: "Outcome · hand load",
      },
      {
        marker: "any",
        title: "App, any text field",
        body:
          "Gmail, Word, Slack, Notion, Google Docs, browser forms. If your cursor blinks in it, Voicetypr can paste text there.",
        meta: "Outcome · reach",
      },
      {
        marker: "once",
        title: "Buy it once, keep it for good",
        body:
          "A lifetime license, not a rental. An input tool you lean on shouldn't disappear because a subscription lapsed.",
        meta: "Outcome · permanence",
      },
    ],
    workflows: [
      {
        title: "Clear the inbox on a stiff-hands morning",
        body:
          "Open the reply, hold the hotkey, say what you mean, release. Skim once and send. Batch a morning of email in the time sore joints would've spent on a handful of messages.",
      },
      {
        title: "Keep the long document moving",
        body:
          "Put the cursor in the doc and talk the draft out in blocks. Use the keyboard only for edits and structure, so the day looks more like editing load than a full session of drafting by hand.",
      },
      {
        title: "Chat, comments, and AI prompts hands-light",
        body:
          "Slack threads, ticket replies, prompt boxes — say them instead of typing through the stiffness. Push-to-talk on Option/Alt+Space keeps the trigger to a single key.",
      },
    ],
    faqs: [
      {
        q: "Holding a key is hard when my joints are stiff — is there an easier trigger?",
        a:
          "The default is hold-to-talk because it's predictable, but you can map it to whichever shortcut your hands reach most comfortably, and push-to-talk on Option/Alt+Space is a single key. Short dictation bursts work well on stiff days.",
      },
      {
        q: "Does Voicetypr treat or help my arthritis?",
        a:
          "No. It's a writing tool, not treatment — it can't do anything for the condition itself. What it does is cut how much typing your hands have to do. Keep following the medical and ergonomic guidance for your situation.",
      },
      {
        q: "Is my voice uploaded anywhere?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your audio stays on your device. Optional AI formatting sends text only when you turn it on, never the recording.",
      },
      {
        q: "Will it work with my split keyboard, vertical mouse, or other adaptive gear?",
        a:
          "Yes. Voicetypr only needs a microphone and a shortcut it can listen for. It sits alongside whatever input hardware you already use — it doesn't replace or fight it.",
      },
      {
        q: "Mac and Windows? Can I try it before paying?",
        a:
          "Both — macOS (Apple Silicon and Intel) and Windows 10+. There's a 3-day free trial with no card, plus a 7-day money-back window, so you can test it with your real voice and apps before you commit.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Keep the words coming. <em>Keep the keystrokes down.</em>",
      body: "Talk the email, doc, or reply into the app you're already in and let your hands do less of the typing—on-device by default. Try Voicetypr free for 3 days.",
    },
    keywords: [
      "voice typing for arthritis",
      "dictation for arthritis in hands",
      "dictation software for arthritis",
      "voice to text arthritis",
      "speech to text arthritis",
      "typing with arthritis in hands",
      "voicetypr arthritis",
    ],
  },
  {
    slug: "parkinsons",
    title: "Voicetypr for Parkinson's — Let your voice do the typing",
    ogTitle: "Voicetypr for Parkinson's",
    description:
      "Voice typing for Parkinson's: when tremor and slowed movement make typing slow and error-prone, dictate into any app instead. On-device, pay once.",
    navLabel: "Parkinson's",
    hubTeaser:
      "When tremor and slowed movement make typing a fight, dictate emails, notes, and replies into any app—transcribed on-device.",
    category: "accessibility",
    order: 10,
    hero: {
      eyebrow: "voicetypr for parkinson's",
      headline: "Typing turned slow and unsteady. <em>Talk it through instead.</em>",
      lede:
        "Tremor and slowed movement turn a short email into a long, error-prone one—keys missed, keys hit twice, the cursor landing in the wrong place. Voicetypr lets you hold a hotkey, say the sentence, and have it land where your cursor already is, transcribed on your own machine.",
      metaStrip: ["fewer keystrokes", "local transcription", "works in every text field"],
    },
    pains: [
      {
        title: "Tremor turns one keystroke into three.",
        body:
          "Hands that shake while reaching for the keys hit the wrong one, hit it twice, or fight the same word over and over. The longer the message, the more of it is correction.",
      },
      {
        title: "Slowed, stiff movement makes a paragraph a slog.",
        body:
          "With bradykinesia, movements start late and lose speed and size as you go. A note that once took a minute now takes several, and your hands are tired before the last line is done.",
      },
      {
        title: "So the longer messages just don't get written.",
        body:
          "When every word costs effort, the detailed email, the considered reply, the full update get cut short or skipped. The thinking is all there—getting it onto the screen is the bottleneck.",
      },
    ],
    outcomes: [
      {
        marker: "1",
        title: "One hotkey instead of a keyboard of keys",
        body:
          "Press the shortcut, say the sentence, release. The bulk of the keystrokes—and the misfires that come with them—are gone. You still edit, but your hands stop carrying every word.",
        meta: "Outcome · hand load",
      },
      {
        marker: "any",
        title: "App, any text field",
        body:
          "Gmail, Outlook, Word, Slack, Notes, a browser form. If your cursor blinks in it, Voicetypr pastes there. No plugin to install per app.",
        meta: "Outcome · reach",
      },
      {
        marker: "once",
        title: "Pay once, not a monthly bill",
        body:
          "A lifetime license from $39, not a subscription. A tool you lean on for daily writing shouldn't vanish because a renewal email got missed.",
        meta: "Outcome · permanence",
      },
    ],
    workflows: [
      {
        title: "Email and replies without the correction loop",
        body:
          "Open the reply, hold the hotkey, say what you mean, release. No chasing the cursor back to fix a doubled letter. A morning of email gets handled in the time the keyboard would've taken for a handful of them.",
      },
      {
        title: "Forms and appointment admin",
        body:
          "Pharmacy portals, insurance forms, appointment requests—the web forms that punish slow, unsteady typing. Dictate the answer straight into the field, then read it once and edit before you submit.",
      },
      {
        title: "The longer writing you'd otherwise skip",
        body:
          "The detailed update to family, the work document, the journal entry. Talk it out in paragraphs and use the keyboard only for small fixes. How much you write stops depending on how long your hands can keep going.",
      },
    ],
    faqs: [
      {
        q: "Parkinson's has changed my voice a little—will it still understand me?",
        a:
          "Maybe, and the honest answer is it depends on your voice. The clearer your speech, the more accurate any dictation gets, and some people with Parkinson's find their voice grows softer or less distinct over time. The way to know how it does with your voice is to try it: the 3-day trial needs no card, so you can test it with your own microphone first. The medium on-device model is the default; the large model is more accurate if you want to trade a little speed for it.",
      },
      {
        q: "Do I have to hold the key down the whole time? My hands aren't steady.",
        a:
          "The default is hold-to-talk, but you can set whatever shortcut is easiest to reach and use short bursts instead of long holds. Push-to-talk lives on Option/Alt+Space. If a combo is hard to hit reliably, pick a simpler custom hotkey in settings.",
      },
      {
        q: "Is my voice sent to the cloud?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your audio stays on your device—which matters when you're dictating medical messages or private notes. Optional AI formatting sends text only when you turn it on, never the audio.",
      },
      {
        q: "Does this do anything for Parkinson's itself?",
        a:
          "No. Voicetypr is writing software, not a medical device or treatment, and it doesn't claim to affect the condition or its symptoms. All it does is take typing off your hands by letting you speak text instead. Keep following your clinician's guidance for anything medical.",
      },
      {
        q: "Does it work on my computer and in the apps I use?",
        a:
          "It runs on macOS (Apple Silicon and Intel) and Windows 10+, and pastes into any normal text field—email, Word, browser forms, Slack, Notes. There's nothing to integrate; you set a hotkey, hold it, talk, release.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Let the keyboard rest. <em>Say it instead.</em>",
      body: "Hold the hotkey, say the sentence, and paste it where your cursor already is—transcribed on your own machine. Try Voicetypr free for 3 days, no card.",
    },
    keywords: [
      "voice typing for parkinson's",
      "dictation software for parkinson's",
      "voice to text parkinson's",
      "speech to text parkinsons",
      "typing with parkinson's tremor",
      "voicetypr parkinsons",
    ],
  },
  {
    slug: "essential-tremor",
    title: "Voicetypr for Essential Tremor — Write without fighting the keys",
    ogTitle: "Voicetypr for Essential Tremor",
    description:
      "Voice typing for essential tremor and hand tremors. Skip the wrong keys and constant backspacing—speak, and clean text lands in any app, on-device.",
    navLabel: "Essential tremor",
    hubTeaser:
      "Shaky hands make every keystroke a fight—say the sentence instead and let clean text land in whatever app has your cursor.",
    category: "accessibility",
    order: 11,
    hero: {
      eyebrow: "voicetypr for essential tremor",
      headline: "Your hands shake. <em>Your words don't have to.</em>",
      lede:
        "When a tremor turns precise keystrokes into a guessing game of wrong letters and backspaces, voice routes around the fine-motor part entirely. Hold a hotkey, say the sentence, and Voicetypr types it where your cursor already is—transcribed on your own machine.",
      metaStrip: ["one hotkey, then talk", "local transcription", "works in every app"],
    },
    pains: [
      {
        title: "The keys you hit aren't the keys you meant.",
        body:
          "A tremor nudges your finger a key over, so a quick message turns into a loop of typing, backspacing, and retyping the same line. The longer the writing, the more the misfires stack up.",
      },
      {
        title: "Staying accurate takes focus you'd rather spend on the work.",
        body:
          "Aiming each finger to avoid mis-hits is its own kind of effort. By the end of a long email or document, the concentration it took to type cleanly is more tiring than the thinking behind it.",
      },
      {
        title: "Small targets fight back—keys and the cursor alike.",
        body:
          "Landing the pointer on a little button can take three or four tries, and the keyboard asks for the same fine control you're already short on. Every precise click and keystroke is a small negotiation.",
      },
    ],
    outcomes: [
      {
        marker: "1 key",
        title: "Trigger it without fine aim",
        body:
          "Press the shortcut, hold push-to-talk, and talk. Starting dictation doesn't ask for the pinpoint accuracy that hitting the right keys does.",
        meta: "Outcome · input",
      },
      {
        marker: "any",
        title: "App, any text field",
        body:
          "Email, Docs, Slack, browser forms, your notes—Voicetypr pastes into whatever field has your cursor. No precise clicking between editors required.",
        meta: "Outcome · reach",
      },
      {
        marker: "local",
        title: "Audio stays on your machine",
        body:
          "Your voice is transcribed on your own device by default. Private notes, medical context, and work writing stay with you. Optional AI formatting sends text only, never the recording.",
        meta: "Outcome · privacy",
      },
    ],
    workflows: [
      {
        title: "Clear the inbox without the backspace loop",
        body:
          "Open the reply, hold the hotkey, say what you mean, release. The line lands as clean text instead of the wrong-letter-then-backspace rhythm. A morning of email stops depending on steady fingers.",
      },
      {
        title: "Long documents without the focus drain",
        body:
          "Talk the draft out in paragraphs and let the keyboard sit. The energy you'd spend aiming each keystroke goes into what you're actually saying. Do the light edits at the end, when a few precise keys are all it takes.",
      },
      {
        title: "Forms, chat, and AI prompts you'd otherwise peck at",
        body:
          "Web forms and prompt boxes punish imprecise typing. Place the cursor once, dictate the answer, and skip the per-key accuracy. Push-to-talk on Option/Alt+Space keeps the trigger simple.",
      },
    ],
    faqs: [
      {
        q: "Do I need steady hands to trigger it?",
        a:
          "No. The hotkey is one combo (⌘+Shift+Space on macOS, Ctrl+Shift+Space on Windows), and push-to-talk sits on Option/Alt+Space. Starting dictation doesn't need the pinpoint accuracy that hitting the right letters does. If a combo is awkward, set an easier one.",
      },
      {
        q: "Does it work in every app, or just one editor?",
        a:
          "Any app with a text field that accepts keyboard input. Put your cursor where you want the words—email, Docs, Slack, a web form—hold the hotkey, and talk. There's no per-app plugin to set up.",
      },
      {
        q: "Is my voice uploaded anywhere?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your audio stays on your device. Optional AI formatting sends text only when you turn it on, never the recording.",
      },
      {
        q: "Will this help my tremor?",
        a:
          "Voicetypr isn't medical software and doesn't treat or change a tremor. It's an input alternative: a way to get text in by speaking instead of by fine finger control, so typing stops being the bottleneck. For anything about the tremor itself, talk to a clinician.",
      },
      {
        q: "Can I try it with my own voice and setup first?",
        a:
          "Yes—there's a 3-day free trial with no card, on macOS (Apple Silicon and Intel) and Windows 10+. Test your microphone, the hotkey, and your apps before deciding. If it sticks, it's a one-time purchase, not a subscription.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Skip the keyboard fight. <em>Say it instead.</em>",
      body: "When a tremor makes precise typing tiring, dictate locally and paste clean text into any app. Try Voicetypr free for 3 days—pay once if it earns a place.",
    },
    keywords: [
      "voice typing for essential tremor",
      "dictation software for essential tremor",
      "voice to text essential tremor",
      "speech to text hand tremors",
      "dictation for hand tremors",
      "typing with hand tremors",
      "voicetypr essential tremor",
    ],
  },
  {
    slug: "fibromyalgia",
    title: "Voicetypr for Fibromyalgia — Voice typing on hard days",
    ogTitle: "Voicetypr for Fibromyalgia",
    description:
      "Voice typing for fibromyalgia. On high-pain, foggy, low-energy days, dictate emails, notes, and docs in any app with local transcription, and pay once.",
    navLabel: "Fibromyalgia",
    hubTeaser:
      "When pain, fatigue, and fog stack up, talk your emails and docs into any app instead of forcing them out keystroke by keystroke.",
    category: "accessibility",
    order: 12,
    hero: {
      eyebrow: "voicetypr for fibromyalgia",
      headline: "Some days, typing costs too much. <em>Say it instead.</em>",
      lede:
        "Aching hands, deep fatigue, and fog that makes the first sentence feel impossible—on a flare day, typing is expensive twice over. Hold a hotkey, talk, and Voicetypr puts the words where your cursor already is, transcribed on your own machine.",
      metaStrip: ["lower typing load", "local transcription", "good days and bad"],
    },
    pains: [
      {
        title: "On a flare day, typing is the first thing that gives.",
        body:
          "Aching, stiff, sometimes tingling hands make a couple of lines fine and a full inbox or a long report a problem. Past a certain length, every paragraph costs your hands something. Dictation moves the bulk of that off your fingers and onto your voice.",
      },
      {
        title: "Fog turns the first sentence into a wall.",
        body:
          "On a foggy day, holding the thought, the spelling, and the keystrokes all at once is a lot to ask. Saying it out loud asks for less—you start by talking, not by composing a clean sentence with sore hands.",
      },
      {
        title: "Fatigue means you ration the energy you have.",
        body:
          "When you wake up tired and the tank is half full, every typed message spends a little of it. Voice spends less, so more is left for the actual work—or for the rest of the day.",
      },
    ],
    outcomes: [
      {
        marker: "less",
        title: "Typing load on a hard day",
        body:
          "Press the hotkey, say the paragraph, release. You still edit with the keyboard, but your hands stop carrying every single word.",
        meta: "Outcome · physical load",
      },
      {
        marker: "0",
        title: "Blank-page standoff",
        body:
          "Talking your way in asks less than typing from nothing when the fog is thick. Say the first line out loud and the draft is already moving.",
        meta: "Outcome · starting effort",
      },
      {
        marker: "once",
        title: "Pay once, there on the good days too",
        body:
          "A lifetime license, not a rental. It's around on the days you feel fine and the days you don't—no subscription to defend when money is tight.",
        meta: "Outcome · no subscription",
      },
    ],
    workflows: [
      {
        title: "Clear the inbox on a high-pain morning",
        body:
          "Open the reply, hold the hotkey, say what you mean, release. Skim once, send. Batch a morning of email in the time stiff hands would have spent on a handful of replies.",
      },
      {
        title: "Long docs without the pain building all afternoon",
        body:
          "Talk the first draft in blocks, with breaks when you need them. Keep the keyboard for edits and structure, so your hands do editing-load work instead of drafting-load work.",
      },
      {
        title: "Notes and prompts when the fog is thick",
        body:
          "When forming a sentence and typing it at the same time is too much, just say it. Dump the thought into your notes app, or talk the context into ChatGPT or Claude, and tidy it later.",
      },
    ],
    faqs: [
      {
        q: "Does holding a key hurt if my hands are already sore?",
        a:
          "It shouldn't have to. The default hold-to-talk hotkey is one combo you can set to the easiest reachable keys, and push-to-talk on Option/Alt+Space is a single key. On a bad-hands day, short dictation bursts keep the holding to a minimum.",
      },
      {
        q: "Will it understand me on a foggy, low-energy day when my voice is tired?",
        a:
          "The medium on-device model handles tired, less-crisp speech better than people expect. If clarity really drops, the large model is more accurate at the cost of speed, and you can switch per session.",
      },
      {
        q: "Is my voice uploaded anywhere?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your audio stays on your device. Optional AI formatting sends text only when you turn it on, never the audio.",
      },
      {
        q: "Does Voicetypr treat or help my fibromyalgia?",
        a:
          "No. It's a writing tool, not treatment, and it makes no medical claims. All it does is lower the typing load when your hands, energy, or focus aren't up for it. Keep following your own medical and ergonomic guidance.",
      },
      {
        q: "Does it work on both Mac and Windows, and can I try it first?",
        a:
          "Yes—macOS (Apple Silicon and Intel) and Windows 10+. There's a 3-day free trial with no card, so you can test it with your real voice, microphone, and apps on a good day and a bad one before paying.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "On the hard days, <em>let your voice carry it.</em>",
      body: "Shift the heavy typing off sore hands and a foggy head, and paste it where your cursor already is—on-device by default. Try Voicetypr free for 3 days.",
    },
    keywords: [
      "voice typing for fibromyalgia",
      "dictation software for fibromyalgia",
      "voice to text fibromyalgia",
      "speech to text fibromyalgia",
      "typing with fibromyalgia pain",
      "voicetypr fibromyalgia",
    ],
  },
  {
    slug: "dysgraphia",
    title: "Voicetypr for Dysgraphia — Talk past the writing barrier",
    ogTitle: "Voicetypr for Dysgraphia",
    description:
      "Voice typing for dysgraphia. Get ideas onto the page without forming letters or fighting the keyboard. Local transcription, pay once, works in any app.",
    navLabel: "Dysgraphia",
    hubTeaser:
      "Knowing what to say isn't the problem; getting it onto the page is. Speak the words; let transcription do the writing.",
    category: "accessibility",
    order: 13,
    hero: {
      eyebrow: "voicetypr for dysgraphia",
      headline: "You know what to say. <em>Writing it down is the hard part.</em>",
      lede:
        "With dysgraphia, the ideas are usually clear. It's the mechanical act of writing or typing them out, letter by letter, that stalls. Voicetypr lets you say the sentence and get clean text wherever your cursor is, so the words reach the page without routing through your hand first.",
      metaStrip: ["say it, skip the writing", "local transcription", "pastes into any app"],
    },
    pains: [
      {
        title: "You can explain it out loud in a minute. Writing it takes an hour.",
        body:
          "Say the idea to someone and it's clear. Sit down to write it and every word takes deliberate effort—so much that there's little attention left for the point you're making. The thinking and the writing end up competing for the same focus.",
      },
      {
        title: "The keyboard isn't the fix people assume it is.",
        body:
          "Switching from pen to keys removes some of it: spacing happens on its own, letter shapes stop mattering. But for a lot of people the act of producing each word by hand is still slow and draining. The bottleneck was never the pen—it's turning thought into motor output at all.",
      },
      {
        title: "So what lands on the page is shorter than what's in your head.",
        body:
          "When every paragraph costs that much, you trim without meaning to. The detailed reply becomes one line. The assignment you have plenty to say about turns into the bare minimum. You don't run out of ideas; you run out of patience for producing them.",
      },
    ],
    outcomes: [
      {
        marker: "0",
        title: "Letters you have to form",
        body:
          "You speak the sentence; the model writes it out. Forming each letter, the spacing, the slow motor part of producing words—none of it sits between the thought and the text anymore.",
        meta: "Outcome · production",
      },
      {
        marker: "any",
        title: "Any app, any text field",
        body:
          "Google Docs, Word, the school portal, email, Notion, a web form. If your cursor lands in it, your voice can fill it—no per-app plugin to set up.",
        meta: "Outcome · reach",
      },
      {
        marker: "local",
        title: "Transcribed on your device",
        body:
          "Schoolwork, private notes, job applications—your voice is turned into text on your own machine by default. Optional AI formatting sends text only if you turn it on, never the audio.",
        meta: "Outcome · privacy",
      },
    ],
    workflows: [
      {
        title: "The assignment you can talk about but dread writing",
        body:
          "Open the doc, hold the hotkey, and say what you'd say if someone asked you about the topic. You get paragraphs to edit instead of a blank page to dread. The grade rides on the ideas, not on whether your handwriting stayed on the line.",
      },
      {
        title: "Email, forms, and replies without the typing tax",
        body:
          "Place the cursor in the field, talk the answer, edit once, send. Job applications, web forms, and long replies stop being a wall of keystrokes between you and done.",
      },
      {
        title: "Notes that don't fight your attention",
        body:
          "Writing and thinking pull on the same focus, so notes during a class or meeting suffer. Say them instead—your attention stays on what's being said while the words land in your notes app.",
      },
    ],
    faqs: [
      {
        q: "Is this the same as a tool for dyslexia?",
        a:
          "They're different problems. Reading-focused tools help when decoding text is hard. Voicetypr helps the other direction—when you know what you want to say but producing the written words is the barrier. It turns speech into text so the page stops depending on your hand.",
      },
      {
        q: "Will it fix or treat dysgraphia?",
        a:
          "No. Voicetypr isn't therapy or treatment, and it won't change how writing works for you. It's a writing tool: a way to produce text by speaking, so the motor and transcription effort stops sitting between your ideas and the page.",
      },
      {
        q: "Does it spell and write the words out for me?",
        a:
          "Yes—you speak, and the on-device model writes the words out, so recalling exact spelling and forming each letter stops being part of the job. Unusual names or niche terms sometimes need a quick edit, but everyday vocabulary lands correctly.",
      },
      {
        q: "Does it work in Google Docs and for schoolwork?",
        a:
          "Yes. Voicetypr pastes into any text field that accepts keyboard input—Google Docs, Word, the school portal, email, Notion. Put the cursor where the writing goes, hold the hotkey (⌘+Shift+Space on macOS, Ctrl+Shift+Space on Windows), and talk.",
      },
      {
        q: "Is my voice sent anywhere?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your audio stays on your device. Optional AI formatting sends text only when you switch it on, never the recording. There's a 3-day free trial with no card to test it on your real apps first.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Get it on the page <em>without writing it.</em>",
      body: "Say the sentence and get clean text wherever your cursor is—local transcription by default. Try Voicetypr free for 3 days, no card.",
    },
    keywords: [
      "voice typing for dysgraphia",
      "dictation software for dysgraphia",
      "voice to text dysgraphia",
      "speech to text dysgraphia",
      "dysgraphia writing aid",
      "voicetypr dysgraphia",
    ],
  },
  {
    slug: "blind",
    title: "Voicetypr for Blind Users — Voice typing with your screen reader",
    ogTitle: "Voicetypr for Blind Users",
    description:
      "Voice typing for blind and low-vision users. Enter text faster by speaking, then review and edit with your screen reader. Local transcription, pay once.",
    navLabel: "Blind & low vision",
    hubTeaser:
      "Speak text into any field, then review it with your screen reader—faster input that pairs with VoiceOver, NVDA, or JAWS.",
    category: "accessibility",
    order: 14,
    hero: {
      eyebrow: "voicetypr for blind users",
      headline: "Composing it word by word is slow. <em>Speak it instead.</em>",
      lede:
        "Your screen reader handles output. Entering a long message is still the slow part—word by word, confirming each one by ear. Voicetypr lets you speak the text into any field, then review and edit it with VoiceOver, NVDA, or JAWS the way you already do.",
      metaStrip: ["works with your screen reader", "local transcription", "pastes into any field"],
    },
    pains: [
      {
        title: "Reading is fast. Writing it out isn't.",
        body:
          "A screen reader gets you through a page quickly. Composing a reply runs the other direction—every word entered, then confirmed by ear. For a long email or message, that adds up.",
      },
      {
        title: "Most dictation ships your audio to a server.",
        body:
          "You dictate personal messages, sometimes with people nearby. Cloud tools stream that audio off your machine. Voicetypr transcribes on-device by default, so your voice stays with you.",
      },
      {
        title: "Voice input only helps if you can check it yourself.",
        body:
          "Speech recognition still misses things—names, homophones, the odd dropped word. That's fine when the text lands in a normal field your screen reader can read back and let you fix. It's not fine when a tool traps the text in its own window.",
      },
    ],
    outcomes: [
      {
        marker: "spoken",
        title: "Text entry at speaking speed",
        body:
          "Hold the hotkey, say the sentence, release. A paragraph goes in at the speed you talk instead of word by word—then you review it with your reader.",
        meta: "Outcome · input",
      },
      {
        marker: "local",
        title: "Audio stays on your machine",
        body:
          "Transcription runs on-device by default. Private messages and personal details aren't streamed to a transcription server.",
        meta: "Outcome · privacy",
      },
      {
        marker: "any",
        title: "Pastes into any text field",
        body:
          "Email, chat, search boxes, docs, forms. The text arrives as if typed, so whatever screen reader you use reads it straight back.",
        meta: "Outcome · reach",
      },
    ],
    workflows: [
      {
        title: "Compose a long message, then review it your way",
        body:
          "Navigate to the field with your screen reader as usual, hold the hotkey, say the message, release. It pastes in. Arrow back through it with VoiceOver or NVDA, fix anything the recognizer missed, send.",
      },
      {
        title: "Forms, search bars, and address fields",
        body:
          "Short strings are tedious to enter and confirm one character at a time. Speak the query or the field value instead; your screen reader announces the result so you know it landed.",
      },
      {
        title: "Notes, chat, and docs where the words pile up",
        body:
          "Slack replies, quick notes, a paragraph in a doc—say them instead of entering them by hand. Push-to-talk sits on Option/Alt+Space, one key you can hit without hunting for a button.",
      },
    ],
    faqs: [
      {
        q: "Does Voicetypr replace my screen reader?",
        a:
          "No. It only handles input—getting words into a field. Your screen reader still does navigation and reads everything back, including the text you just dictated. They run side by side.",
      },
      {
        q: "Can I review and correct what it transcribed?",
        a:
          "Yes. The text pastes into the field as if you typed it, so your screen reader reads it back and you edit it the usual way. Speech recognition isn't perfect; reviewing with your reader is part of the workflow.",
      },
      {
        q: "Does it work with VoiceOver, NVDA, and JAWS?",
        a:
          "Yes. Voicetypr pastes into any standard text field, so whatever reads that field reads the dictated text—VoiceOver on macOS, NVDA or JAWS on Windows 10+.",
      },
      {
        q: "Is my voice sent to the cloud?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your audio stays on your device. Optional AI formatting sends text only when you turn it on—never the audio.",
      },
      {
        q: "Can I start it without finding a button on screen?",
        a:
          "Yes. It's a global hotkey—⌘+Shift+Space on macOS, Ctrl+Shift+Space on Windows—plus push-to-talk on Option/Alt+Space. You trigger it from the keyboard, anywhere, without locating an on-screen control.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Speak the words. <em>Review them your way.</em>",
      body: "Speak text into any field, then check and fix it with the screen reader you already use—audio stays on your machine by default. Try Voicetypr free for 3 days.",
    },
    keywords: [
      "voice typing for blind users",
      "dictation for screen reader users",
      "dictation software for the blind",
      "voice to text for the visually impaired",
      "speech to text for blind users",
      "text entry with a screen reader",
      "voicetypr blind",
    ],
  },
  {
    slug: "one-handed-typing",
    title: "Voicetypr for One-Handed Typing — Speak, don't hunt-and-peck",
    ogTitle: "Voicetypr for One-Handed Typing",
    description:
      "Voice typing for one-handed typists—permanent or situational. Skip slow hunt-and-peck: speak, and clean text pastes into any app, transcribed on-device.",
    navLabel: "One-handed typing",
    hubTeaser:
      "One hand on the keyboard—by limb difference or because the other's holding a baby? Talk the words in; keep your hand for edits.",
    category: "accessibility",
    order: 15,
    hero: {
      eyebrow: "voicetypr for one-handed typing",
      headline: "One hand on the keys. <em>Let voice do the typing.</em>",
      lede:
        "Whether you've always typed one-handed or your other arm is just full right now, hunt-and-peck is slow and the cross-keyboard reaches add up. Hold a hotkey, say the sentence, and Voicetypr types it for you—your hand stays free to edit and navigate, transcribed on your own machine.",
      metaStrip: ["one-hand trigger", "local transcription", "works in every app"],
    },
    pains: [
      {
        title: "Hunt-and-peck is slow, and QWERTY isn't helping.",
        body:
          "The keyboard was laid out for two hands. Type with one and the common letters are spread across the board, so every word is a series of reaches. A quick reply is fine; an inbox or a long doc turns into a grind.",
      },
      {
        title: "Every shortcut assumes you've got two hands.",
        body:
          "Capitals, copy-paste, the modifier-plus-key combos you lean on—they want one hand holding and another pressing. Sticky Keys helps, but you're still chasing letters one at a time.",
      },
      {
        title: "Sometimes the other hand is just full.",
        body:
          "A sleeping baby on your arm. A grip on a crutch or a railing. Something you're carrying that you can't put down yet. The keyboard doesn't care why the second hand is gone—it still wants it.",
      },
    ],
    outcomes: [
      {
        marker: "1 hand",
        title: "Trigger and talk with the hand you have",
        body:
          "Press the hotkey with one hand—or use push-to-talk—then speak. Starting a dictation never depends on a second hand.",
        meta: "Outcome · one-handed",
      },
      {
        marker: "any app",
        title: "Lands where your cursor already is",
        body:
          "Email, Docs, Slack, a browser form, your editor—Voicetypr pastes into whatever field has focus. No per-app setup, no separate window to wrangle one-handed.",
        meta: "Outcome · everywhere",
      },
      {
        marker: "edit",
        title: "Keep your hand for the precise parts",
        body:
          "Voice produces the words; your hand does what it's good at—placing the cursor, fixing a line, hitting a shortcut. The volume leaves the keyboard, the precision stays.",
        meta: "Outcome · your hand",
      },
    ],
    workflows: [
      {
        title: "Clear the inbox without pecking it out",
        body:
          "Open the reply, hold the hotkey, say what you mean, release. The text lands in the message. A morning of email takes minutes instead of the slog one-handed typing turns it into.",
      },
      {
        title: "Draft the long doc, edit with your hand",
        body:
          "Put the cursor in the doc and talk it out in paragraphs. Then use your hand for the edits—the part one hand is actually fast at. Producing the words stops depending on reaching every key.",
      },
      {
        title: "Write while the other hand is occupied",
        body:
          "Holding a baby, on crutches, one arm in a sling—push-to-talk on Option/Alt+Space keeps it to one key. Answer the message or note the thing without putting down whatever you're holding.",
      },
    ],
    faqs: [
      {
        q: "Can I trigger it with just one hand?",
        a:
          "Yes. The hotkey is a single combo you can hit with one hand (⌘+Shift+Space on macOS, Ctrl+Shift+Space on Windows), and push-to-talk lives on Option/Alt+Space. You never need a second hand to start talking.",
      },
      {
        q: "I type one-handed all the time, not because of an injury—is this still for me?",
        a:
          "Yes. Limb difference, amputation, hemiplegia, or a hand that's simply always busy—the workflow is the same. Voice carries the bulk of the words; your hand stays free for editing and navigation. It isn't tied to recovering from anything.",
      },
      {
        q: "Can I still use my keyboard and Sticky Keys?",
        a:
          "Yes. Voice and keyboard coexist. Dictate the long stretches, then use your hand—Sticky Keys, shortcuts, arrow keys, whatever you've set up—for corrections and moving the cursor. Nothing about Voicetypr disables your existing setup.",
      },
      {
        q: "Is my voice uploaded anywhere?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your audio stays on your device. Optional AI formatting sends text only when you turn it on, never the audio.",
      },
      {
        q: "Does it work on both Mac and Windows?",
        a:
          "Yes—macOS (Apple Silicon and Intel) and Windows 10+. There's a 3-day free trial with no card, so you can confirm one-handed triggering and your microphone work before buying.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Keep one hand free. <em>Say the rest.</em>",
      body: "Trigger it with the hand you have, say the sentence, and paste it where your cursor already is—on-device by default. Try Voicetypr free for 3 days.",
    },
    keywords: [
      "voice typing one handed",
      "one handed typing alternative",
      "one handed dictation software",
      "voice to text one handed",
      "speech to text one handed",
      "typing with one hand",
      "voicetypr one handed",
    ],
  },

    // ──────────────────────────────────────────────────────────────────────
  // PROFESSION
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "developers",
    title: "Voicetypr for Developers — Voice typing for prompts, commits, and PR descriptions",
    ogTitle: "Voicetypr for Developers",
    description:
      "Dictate prompts to Cursor, commit messages, PR descriptions, and design docs. Offline voice typing built for developers who write more English than code.",
    navLabel: "Developers",
    hubTeaser:
      "Dictate Cursor prompts, PR descriptions, and design docs—keep sensitive context local by default.",
    category: "profession",
    order: 1,
    hero: {
      eyebrow: "voicetypr for developers",
      headline: "Dictate the English. <em>Type the code.</em>",
      lede:
        "Most of your day isn't typing code anymore — it's typing prose: prompts, PR descriptions, Slack threads, and docs. Voicetypr handles the English so your hands can focus on the part that still needs them.",
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
          "Sensitive prompts and pre-release context stay off the cloud by default. Still on-device by default.",
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
          "Transcription runs on your machine. Your half-formed prompts about an unreleased feature don't end up in someone else's training pipeline.",
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
          "Yes. Voicetypr pastes into any text field that accepts keyboard input. Cursor's prompt box is a normal textarea — paste-in works the same as in any other app.",
      },
      {
        q: "What about terminal commands?",
        a:
          "It works, but voice for terminal commands is usually slower than typing them. Most developers use voice for their text editor and chat tools, not their shell.",
      },
      {
        q: "Will it work over SSH / on a remote machine?",
        a:
          "Voicetypr runs on your local machine and pastes into the local app — including your terminal. If the terminal is connected to a remote machine, the text reaches the remote shell the same way typed text would.",
      },
      {
        q: "How does it compare to the macOS / Windows built-in dictation?",
        a:
          "Built-in dictation hallucinates names, drops punctuation on long blocks, and on macOS in particular has a hard time with technical vocabulary. Voicetypr uses a broader on-device model trained on more varied speech and handles tech-speak much better.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Stop typing the <em>English-side</em> of the job.",
      body: "Stop burning keystrokes on prompts and PR prose—dictate locally, paste into Cursor, GitHub, or Slack. Free for 3 days; lifetime license if it sticks.",
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
    title: "Voicetypr for Writers — Draft by speaking, edit later",
    ogTitle: "Voicetypr for Writers",
    description:
      "Voice typing for writers, novelists, and content creators. Draft by speaking, edit later. Local transcription, pay-once, works in every writing app.",
    navLabel: "Writers",
    hubTeaser:
      "Talk the messy first draft in Scrivener, Docs, or Notion; polish on a second pass when your editor brain wakes up.",
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
          "Unfinished drafts and plot material deserve discretion. Still on-device by default.",
      },
      {
        title: "Built-in dictation can't handle a long block.",
        body:
          "macOS dictation drops out after thirty seconds. Apple Notes' transcription mangles names. The native tools aren't built for sustained drafting.",
      },
    ],
    outcomes: [
      {
        marker: "draft",
        title: "Long chapters in one session",
        body:
          "Speaking keeps drafting momentum: many writers finish a rough chapter or essay block in a single voice session, then edit on a second pass.",
        meta: "Outcome · pace",
      },
      {
        marker: "local",
        title: "Pre-publication privacy",
        body:
          "Transcribed on your machine by default. Optional AI formatting can send text only if you enable it.",
        meta: "Outcome · privacy",
      },
      {
        marker: "any",
        title: "Writing app",
        body:
          "Scrivener, Ulysses, Bear, iA Writer, Word, Google Docs, Substack, Notion. Voicetypr pastes into all of them.",
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
          "Yes. Voicetypr supports 99+ languages — pick your model language in settings.",
      },
      {
        q: "What about transcribing interviews?",
        a:
          "Voicetypr is built for first-person dictation, not multi-speaker transcription. For interview audio specifically, a dedicated transcription workflow or transcription-focused service is a better fit.",
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
      body: "Separate drafting from editing: talk the chapter today, tighten tomorrow. Local transcription by default; 3-day trial, then a pay-once license.",
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
    title: "Voicetypr for Founders — Talk to your AI tools at the speed of thought",
    ogTitle: "Voicetypr for Founders",
    description:
      "Built by a solo founder, for solo founders. Dictate prompts, support replies, specs, and Slack updates. Local transcription, pay-once, no subscription.",
    navLabel: "Founders & solopreneurs",
    hubTeaser:
      "Dump specs, investor updates, and agent prompts by voice between meetings—without another subscription tab open.",
    category: "profession",
    order: 3,
    hero: {
      eyebrow: "voicetypr for founders",
      headline: "You're the bottleneck. <em>Voice unbottlenecks you.</em>",
      lede:
        "When you're the only one shipping product, support, marketing, and ops, every minute typing is a minute not building. Voicetypr is the dictation tool a solo founder built because he was tired of paying $180 a year for one.",
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
          "Yes. Voicetypr is built and maintained by Moinul Moin, an indie operator. The whole story is in the founder essay.",
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
      body: "Ship the spec, reply, and investor note while the idea is still warm—voice in, paste in place. Try 3 days free; lifetime pricing when you're convinced.",
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
    title: "Voicetypr for Journalists — Capture the story before the trail goes cold",
    ogTitle: "Voicetypr for Journalists",
    description:
      "Voice typing for journalists and reporters. Summarize interviews, draft intros, and write faster in your usual apps with local transcription.",
    navLabel: "Journalists",
    hubTeaser:
      "Turn interview memory into ledes, nut grafs, and summaries in your CMS or doc—while the quotes still sound fresh.",
    category: "profession",
    order: 4,
    hero: {
      eyebrow: "voicetypr for journalists",
      headline: "The interview happened. <em>Write while it's still alive.</em>",
      lede:
        "Reporting moves faster than typing. Right after an interview or press event, the shape of the story is clear for about fifteen minutes. Voicetypr helps you dump that structure, angle, and first draft into the app you already use before the signal fades.",
      metaStrip: ["fresh-context drafting", "local transcription", "works in every editor"],
    },
    pains: [
      {
        title: "The best lines arrive when you're away from the keyboard.",
        body:
          "A clean intro, a sharper angle, and the paragraph that states why the story matters — they often land on the walk back from the interview.",
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
          "Google Docs, Word, Notes, Notion, CMS draft boxes, email. If the story takes shape in a normal text field, Voicetypr fits there.",
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
          "Not primarily. Voicetypr is strongest for your own first-person drafting and summaries. For multi-speaker audio transcription, a dedicated transcription workflow is usually a better fit.",
      },
      {
        q: "Can I use it inside Google Docs or my CMS draft box?",
        a:
          "Yes. Voicetypr works anywhere a normal text field accepts keyboard input, including browser-based editors and CMS forms.",
      },
      {
        q: "What if I quote names or places the model might miss?",
        a:
          "You should still do an editorial pass. Voicetypr is for getting the draft out fast, not for skipping fact-checking or proper-name cleanup.",
      },
      {
        q: "Does local transcription mean every surrounding service is offline?",
        a:
          "No. It means normal dictation is transcribed on your machine after setup. Downloads, updates, licensing, and optional text-only AI formatting can still use network services.",
      },
      {
        q: "Can I draft in non-English languages?",
        a:
          "Yes. Voicetypr supports 99+ languages, so multilingual reporting workflows are fine as long as you pick the right language in settings.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Catch the angle <em>before typing flattens it.</em>",
      body: "File the lede and summary while the interview is still in your head. Still on-device by default; 3-day trial, lifetime license option.",
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
    title: "Voicetypr for Product Managers — product specs and updates at speaking speed",
    ogTitle: "Voicetypr for Product Managers",
    description:
      "Voice typing for product managers. Dictate product specs, user stories, sprint updates, and decision docs in Notion, Jira, Slack, and Google Docs.",
    navLabel: "Product managers",
    hubTeaser:
      "Convert standup reasoning into product specs, decision logs, and Jira stories before the next meeting wipes the nuance.",
    category: "profession",
    order: 5,
    hero: {
      eyebrow: "voicetypr for product managers",
      headline: "Product work happens in meetings. <em>The writing happens after.</em>",
      lede:
        "Most PM work starts as spoken reasoning — in standups, user calls, design reviews, and stakeholder chaos. Voicetypr helps you turn that reasoning into product specs, updates, and decision docs without spending the next hour retyping what you already know.",
      metaStrip: ["product specs · docs · jira", "local transcription", "cross-app workflow"],
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
          "Product spec in Notion, ticket in Jira, update in Slack, recap in email, notes in Docs. A good dictation workflow needs to follow your cursor, not trap you in one editor.",
      },
      {
        title: "Meeting context decays before the documentation happens.",
        body:
          "By the time you finally type the notes, the nuance is gone. Voice is the fastest way to capture the actual reasoning while it still feels obvious.",
      },
    ],
    outcomes: [
      {
        marker: "1-pass",
        title: "Product spec draft in one sitting",
        body:
          "Talk through problem, users, edge cases, and non-goals once—then edit the doc instead of fighting a blank page at keyboard speed.",
        meta: "Outcome · throughput",
      },
      {
        marker: "any",
        title: "Works in the stack you already have",
        body:
          "Notion, Jira, Linear, Slack, email, docs, browser forms. Product writing usually lives in text fields across six tools. Voicetypr meets you there.",
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
        title: "Talk the product spec before you polish it",
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
          "Yes. Voicetypr works anywhere a normal text field accepts keyboard input, including browser-based product tools.",
      },
      {
        q: "Is this meant to replace meeting notes software?",
        a:
          "No. Voicetypr is strongest for your own drafting and synthesis after the meeting, not as a bot that joins and records group calls.",
      },
      {
        q: "What about product terms and internal jargon?",
        a:
          "Modern on-device dictation usually handles product and technical language well, but you should still do a quick pass for company-specific names.",
      },
      {
        q: "Does it help with AI-heavy PM workflows too?",
        a:
          "Yes. PMs now spend a surprising amount of time prompting AI tools for specs, summaries, rewrites, and analysis. Voice is often the fastest input method there.",
      },
      {
        q: "Can I use it on Windows and Mac?",
        a:
          "Yes. Voicetypr supports Windows 10+ and macOS 13+.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Document the decision <em>while it still makes sense.</em>",
      body: "Turn the reasoning from your last standup into a product spec or decision log before the next meeting. Local by default; free trial, then pay once.",
    },
    keywords: [
      "voice typing for product managers",
      "dictation software for product managers",
      "dictate product specs",
      "voice typing for product specs",
      "voice to text for product managers",
    ],
  },
  {
    slug: "customer-support",
    title: "Voicetypr for Customer Support — Reply faster without torching your hands",
    ogTitle: "Voicetypr for Customer Support",
    description:
      "Voice typing for customer support reps. Dictate ticket replies, CRM notes, and escalation context faster in help desks, chat, and email.",
    navLabel: "Customer support",
    hubTeaser:
      "Clear ticket queues by dictating empathetic replies and internal notes—fewer repetitive keystrokes per shift.",
    category: "profession",
    order: 6,
    hero: {
      eyebrow: "voicetypr for customer support",
      headline: "The replies are repetitive. <em>The typing doesn't have to be.</em>",
      lede:
        "Support work means typing all day: replies, summaries, follow-ups, internal notes, and escalation context. Voicetypr moves the long-form parts to speech so your fingers are not carrying every customer conversation alone.",
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
          "Zendesk, Intercom, Help Scout, Gmail, Slack, CRMs, browser-based support tools. If there is a cursor, Voicetypr can work there.",
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
          "Usually yes. Voicetypr works in normal text fields across browser tools, desktop apps, and email clients.",
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
          "No. Voicetypr is an input tool, not a workflow automation platform. It helps you write the response faster inside the tools you already use.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Get through the queue <em>with fewer keystrokes.</em>",
      body: "Close more tickets with less finger fatigue—dictate replies, paste into your help desk. Offline by default; 3-day trial, lifetime license.",
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
    title: "Voicetypr for Lawyers — Legal writing without paying Dragon prices",
    ogTitle: "Voicetypr for Lawyers",
    description:
      "Voice typing for lawyers. Dictate client emails, case notes, drafts, and time-entry context faster with local transcription by default.",
    navLabel: "Lawyers",
    hubTeaser:
      "Draft client emails, matter notes, and time-entry context by voice—local by default for confidential material.",
    category: "profession",
    order: 7,
    hero: {
      eyebrow: "voicetypr for lawyers",
      headline: "The thinking is legal. <em>The bottleneck is still typing.</em>",
      lede:
        "Legal work involves a ridiculous amount of text: client emails, case notes, summaries, draft arguments, internal memos, and time-entry detail. Voicetypr helps solo and small-firm lawyers move that drafting load to voice without buying into heavier legacy dictation stacks.",
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
          "Client details, case facts, negotiation notes, and internal strategy drafts are the moments where offline-first transcription matters most.",
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
          "For lawyers who mainly need faster everyday writing, Voicetypr is a much smaller commitment than high-ticket legacy software.",
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
          "Not in every scenario. Firms with deep custom legal vocabulary or highly specialized legacy workflows may still prefer Dragon-style tooling. Voicetypr is the cleaner fit for many modern solo and small-team dictation workflows.",
      },
      {
        q: "Can I use it in Word and browser-based tools?",
        a:
          "Yes. Voicetypr works in normal text fields across Word, browser apps, email, docs, and notes.",
      },
      {
        q: "Are you making legal compliance guarantees here?",
        a:
          "No. Voicetypr is a dictation tool with local transcription by default. It is not presented as a legal compliance certification layer.",
      },
      {
        q: "Will it handle names and legal terms perfectly?",
        a:
          "You should still do an edit pass, especially for names, citations, and jurisdiction-specific language. Voicetypr helps you draft faster; it does not remove the lawyer's review step.",
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
      body: "Move first drafts of client email and matter notes to voice; keep review in your hands. Local transcription by default; try free for 3 days.",
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
    title: "Voicetypr for Students — Get the draft out before perfection kills it",
    ogTitle: "Voicetypr for Students",
    description:
      "Voice typing for students. Dictate essays, lecture notes, outlines, and study prompts faster in Google Docs, Word, Notion, and browser tools.",
    navLabel: "Students",
    hubTeaser:
      "Outline essays, lecture notes, and study answers by speaking—paste into Docs, Word, or browser forms.",
    category: "profession",
    order: 8,
    hero: {
      eyebrow: "voicetypr for students",
      headline: "You know what to say. <em>Typing is what slows it down.</em>",
      lede:
        "A lot of schoolwork is not thinking, it is transferring thought into text. Essays, notes, outlines, application answers, discussion posts, study prompts. Voicetypr helps students get the first pass out faster, especially when typing is tiring, slow, or mentally sticky.",
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
          "Google Docs, Word, Notion, browser assignments, chat, email, prompt boxes. Voicetypr works where the coursework already happens.",
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
          "Yes. Voicetypr works anywhere a normal text field accepts keyboard input, including Docs, Word, browser forms, and notes apps.",
      },
      {
        q: "Is this only for students with ADHD or dyslexia?",
        a:
          "No. It can help for those cases, but plenty of students use voice simply because speaking the first draft is faster than typing it.",
      },
      {
        q: "Does it write the essay for me?",
        a:
          "No. Voicetypr turns your speech into text. It is an input tool, not a ghostwriter.",
      },
      {
        q: "Can I use it for study prompts and AI tools too?",
        a:
          "Yes. Prompt boxes in ChatGPT, Claude, and similar tools are normal text fields, so Voicetypr works there as well.",
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
      body: "Beat blank-page paralysis on essays and notes—speak the draft, paste into Docs or Word. On-device by default; 3-day trial, pay-once license.",
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
    title: "Voicetypr for Researchers — Capture the idea before the paper version shows up",
    ogTitle: "Voicetypr for Researchers",
    description:
      "Voice typing for researchers. Dictate field notes, literature summaries, memos, and draft sections in Docs, Word, Notion, and your email client.",
    navLabel: "Researchers",
    hubTeaser:
      "Capture literature takeaways and draft sections after reading blocks—voice before the insight fades.",
    category: "profession",
    order: 9,
    hero: {
      eyebrow: "voicetypr for researchers",
      headline: "The thought is clear now. <em>It won't stay that way forever.</em>",
      lede:
        "Research work produces a constant stream of half-finished thinking: paper notes, literature reactions, method caveats, draft paragraphs, and synthesis after meetings. Voicetypr helps you capture those before they flatten into vague bullet points or disappear completely.",
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
          "Early-stage interpretations, unpublished findings, and collaborator context can be sensitive. Offline-first dictation is simply a better default for that kind of material.",
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
          "Yes. Voicetypr works anywhere a normal text field accepts keyboard input, including Word, Docs, note apps, and email.",
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
          "Yes. Prompt boxes are normal text fields, so Voicetypr works there the same way it does in docs or notes.",
      },
      {
        q: "Is this a meeting transcription platform?",
        a:
          "No. Voicetypr is strongest for your own dictation and synthesis, not as a multi-speaker recording or collaboration system.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Capture the real thought. <em>Polish the paper later.</em>",
      body: "Capture the insight right after the paper block—dictate notes and draft sections locally. Free for 3 days; lifetime license when it's daily workflow.",
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
    title: "Voicetypr for Recruiters — Candidate notes before the next call starts",
    ogTitle: "Voicetypr for Recruiters",
    description:
      "Voice typing for recruiters. Dictate candidate notes, outreach drafts, interview summaries, and CRM updates faster in your usual tools.",
    navLabel: "Recruiters",
    hubTeaser:
      "Log interview impressions and outreach drafts into your ATS or email while candidates are still top of mind.",
    category: "profession",
    order: 10,
    hero: {
      eyebrow: "voicetypr for recruiters",
      headline: "The call ended. <em>The notes still need to exist.</em>",
      lede:
        "Recruiting is full of short windows between conversations. Candidate notes, outreach follow-ups, scorecards, and CRM updates all need to be written while the person is still fresh in your head. Voicetypr helps you get that context down before the next meeting wipes it out.",
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
          "Recruiting workflows jump across browser tools, notes, spreadsheets, and inboxes. Voicetypr follows the cursor instead of forcing a new workflow.",
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
          "Usually yes. Voicetypr works anywhere a normal text field accepts keyboard input, including browser apps.",
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
          "Yes. Prompt boxes and search fields are normal text inputs, so Voicetypr works there as well.",
      },
      {
        q: "Is this a recruiting automation platform?",
        a:
          "No. Voicetypr is an input tool. It helps you write inside the recruiting stack you already use.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Keep the signal. <em>Lose some of the typing.</em>",
      body: "Log candidate signal while it's fresh—voice notes into CRM or email, no retyping marathon. Local by default; 3-day trial, lifetime pricing.",
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
    title: "Voicetypr for Sales — Follow up while the call still has heat",
    ogTitle: "Voicetypr for Sales",
    description:
      "Voice typing for sales reps. Dictate follow-ups, CRM notes, call recaps, and proposal drafts across Gmail, Salesforce, HubSpot, and Slack.",
    navLabel: "Sales",
    hubTeaser:
      "Send follow-ups and CRM call notes right after the meeting—voice keeps tone natural and typing light.",
    category: "profession",
    order: 11,
    hero: {
      eyebrow: "voicetypr for sales",
      headline: "The deal moves on speed. <em>The admin still wants paragraphs.</em>",
      lede:
        "Sales work is full of writing that matters but never feels like the main event: follow-up emails, CRM updates, discovery notes, proposal context, and internal handoffs. Voicetypr cuts the typing tax so you can get the words into the system before momentum drops.",
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
          "Sales work jumps across Gmail, HubSpot, Salesforce, notes, docs, and browser forms. Voicetypr fits that reality.",
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
          "Usually yes. Voicetypr works anywhere a normal text field accepts keyboard input, including browser-based CRM tools.",
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
          "Yes. Prompt boxes and browser forms are normal text fields, so Voicetypr works there too.",
      },
      {
        q: "Does it replace CRM automation or sequencing tools?",
        a:
          "No. It speeds up how you get words into email, CRM, and docs — it doesn't replace those tools.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Send the follow-up. <em>Do less typing to get there.</em>",
      body: "Send the follow-up before the prospect goes cold—dictate, paste into CRM or Gmail. Still on-device by default; try free for 3 days.",
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
    title: "Voicetypr for Marketers — Talk the draft before the campaign gets flattened",
    ogTitle: "Voicetypr for Marketers",
    description:
      "Voice typing for marketers. Dictate campaign briefs, copy drafts, content outlines, and strategy notes faster in the tools you already use.",
    navLabel: "Marketers",
    hubTeaser:
      "Talk campaign briefs, ad copy angles, and content outlines into Notion or Docs before creative energy dips.",
    category: "profession",
    order: 12,
    hero: {
      eyebrow: "voicetypr for marketers",
      headline: "The campaign starts as talk. <em>The draft still needs words.</em>",
      lede:
        "Marketing work produces a huge amount of text before anything ships: briefs, hooks, ad copy, landing page structure, emails, angle tests, and internal notes. Voicetypr helps you get those first passes out quickly so the good idea arrives before over-editing kills it.",
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
          "Yes. Voicetypr works anywhere a normal text field accepts keyboard input, including browser tools and docs.",
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
          "No. It speeds up how you get words into email, CRM, and docs — it doesn't replace those tools.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Talk the first angle. <em>Edit the sharper version.</em>",
      body: "Brief the campaign and rough the copy by voice before the energy dips. Local transcription by default; 3-day trial, then a one-time license.",
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
    title: "Voicetypr for Consultants — The meeting ends, the memo still needs to happen",
    ogTitle: "Voicetypr for Consultants",
    description:
      "Voice typing for consultants. Dictate client recaps, workshop notes, proposal drafts, and internal memos in the tools you already bill through.",
    navLabel: "Consultants",
    hubTeaser:
      "Dictate client recaps, workshop notes, and proposal skeletons between calls—same apps, less typing tax.",
    category: "profession",
    order: 13,
    hero: {
      eyebrow: "voicetypr for consultants",
      headline: "The client call is over. <em>The write-up still isn't.</em>",
      lede:
        "Consulting work creates constant translation pressure: meeting to memo, discussion to proposal, insight to recommendation, notes to email. Voicetypr helps you move that text-heavy follow-through faster so the useful thinking survives the handoff into written form.",
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
          "Consulting writing happens across docs, browser tools, chat, email, and prompts. Voicetypr works across the whole spread.",
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
          "Yes. Voicetypr works anywhere a normal text field accepts keyboard input, including docs, email, and browser tools.",
      },
      {
        q: "Is this mainly for consultants who write long memos?",
        a:
          "It helps there, but it is just as useful for recaps, proposals, workshop notes, and AI prompt-heavy client work.",
      },
      {
        q: "Will it still need editing?",
        a:
          "Yes. Voicetypr is best at getting the first pass out fast. Most consultants will still refine tone, structure, and wording afterward.",
      },
      {
        q: "Can I use it with prompt-based consulting workflows too?",
        a:
          "Yes. Prompt boxes in AI tools are normal text fields, so Voicetypr fits there naturally.",
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
      body: "Get the client recap and proposal skeleton down between calls—not after midnight typing. Local by default; free trial, lifetime license available.",
    },
    keywords: [
      "dictation software for consultants",
      "voice typing for consultants",
      "voice to text for consulting notes",
      "dictate client recap emails",
      "consulting memos by voice",
    ],
  },
  {
    slug: "doctors",
    title: "Voicetypr for Doctors — Write referrals and emails faster",
    ogTitle: "Voicetypr for Doctors",
    description:
      "Voice typing for doctors. Dictate referral letters, emails to colleagues, paper drafts, and admin faster—local transcription by default, you pay once.",
    navLabel: "Doctors",
    hubTeaser:
      "Dictate referral letters, colleague emails, and paper drafts by voice—on-device by default, not a clinical notes tool.",
    category: "profession",
    order: 14,
    hero: {
      eyebrow: "voicetypr for doctors",
      headline: "The diagnosis takes minutes. <em>The letter takes longer.</em>",
      lede:
        "Referral letters, emails to colleagues, paper drafts, patient handouts, admin forms — the medicine moves fast and the writing is the drag. Hold a hotkey, say the sentence, and Voicetypr types it where your cursor already is, transcribed on your own machine.",
      metaStrip: ["referrals · emails · admin", "local transcription", "pay once · lifetime"],
    },
    pains: [
      {
        title: "The appointment ends; the writing doesn't.",
        body:
          "Every patient leaves a trail of text behind them — a referral, a letter, an email, a form. The clinical decision took minutes; the writing eats the gaps between patients and the hours after clinic.",
      },
      {
        title: "Cloud dictation sends your audio to someone else's server.",
        body:
          "A referral or a colleague email often names a patient. That is exactly the audio you don't want streamed off your machine. Voicetypr transcribes on-device by default, so it stays with you.",
      },
      {
        title: "Medical dictation is built and priced for the hospital.",
        body:
          "Enterprise dictation stacks and their subscriptions are overkill when what you actually need is faster everyday writing. You shouldn't sign up for a recurring bill to get letters off your desk.",
      },
    ],
    outcomes: [
      {
        marker: "voice",
        title: "Faster first drafts of everything you write",
        body:
          "Referral letters, emails to colleagues, handouts, admin forms — get them out of your head at speaking speed instead of typing each one out.",
        meta: "Outcome · drafting",
      },
      {
        marker: "0",
        title: "Audio leaving your machine",
        body:
          "Transcription runs on your machine by default, so the patient detail in a draft email or letter isn't streamed to a server. You stay responsible for how that record is handled.",
        meta: "Outcome · privacy",
      },
      {
        marker: "any app",
        title: "Types where you already work",
        body:
          "Your email, Word, the browser, a referral or insurance form — Voicetypr pastes into whatever field has your cursor, not one locked-in editor.",
        meta: "Outcome · everywhere",
      },
    ],
    workflows: [
      {
        title: "Referral letters between patients",
        body:
          "Dictate the referral the way you'd explain the case to the colleague receiving it, then edit for precision. Faster than typing each one out while the next patient waits.",
      },
      {
        title: "Email, colleague messages, and admin",
        body:
          "Replies to colleagues, MDT follow-ups, the quick clinical question, the form that needs a paragraph of context — say them instead of typing them. The inbox stops being an evening job.",
      },
      {
        title: "Papers, abstracts, and patient handouts",
        body:
          "Talk through the structure of a paper, a case write-up, a conference abstract, or a plain-language handout before you polish the wording. Voice is strong at getting the first draft out of your head.",
      },
    ],
    faqs: [
      {
        q: "Can I use this for clinical notes — is it HIPAA compliant?",
        a:
          "No. Voicetypr is a dictation tool that types text wherever your cursor is, and on-device transcription keeps your audio on your machine by default — but it is not a certified clinical documentation or EHR system and makes no HIPAA or medical-compliance guarantee. You remain responsible for protected health information and your record-keeping obligations. Use it for the writing load around care — letters, emails, drafts, and handouts.",
      },
      {
        q: "Does it work in my email, Word, and the browser?",
        a:
          "Yes. Voicetypr pastes into any text field that accepts keyboard input — email, Word, a browser form, your notes app. Place the cursor, hold the hotkey, talk.",
      },
      {
        q: "Is my voice uploaded anywhere?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your audio stays on your device. Optional AI formatting sends text only when you switch it on, never the audio. How you handle any patient detail in that text stays your responsibility.",
      },
      {
        q: "Will it get drug names and clinical terms right?",
        a:
          "Do an edit pass, especially for drug names, dosages, and patient names. Voicetypr speeds up the first draft; it doesn't remove your review step.",
      },
      {
        q: "Why pay once instead of a subscription?",
        a:
          "Because faster writing becomes part of your day, and a one-time license (from $39) keeps working without a recurring bill. There's a 3-day free trial with no card so you can confirm it fits first.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Get the letters off your desk. <em>Get your evening back.</em>",
      body: "Dictate referral letters, colleague emails, and drafts at speaking speed — transcribed on your own machine by default. Not a clinical-record tool; pay once, and try free for 3 days.",
    },
    keywords: [
      "voice typing for doctors",
      "dictation software for physicians",
      "voice to text for doctors",
      "speech to text for physicians",
      "dictate referral letters",
      "voicetypr doctors",
    ],
  },
  {
    slug: "therapists",
    title: "Voicetypr for Therapists — Clear the post-session writing pile",
    ogTitle: "Voicetypr for Therapists",
    description:
      "Voice typing for therapists and counselors. Draft progress notes, summaries, and referral emails by voice between sessions—local transcription, pay once.",
    navLabel: "Therapists",
    hubTeaser:
      "Draft progress notes, summaries, and referral emails by voice—clear the after-session pile while audio stays on your machine.",
    category: "profession",
    order: 15,
    hero: {
      eyebrow: "voicetypr for therapists",
      headline: "The session ends. <em>The writing doesn't.</em>",
      lede:
        "Every session leaves writing behind—a progress note, a treatment summary, the referral email, the intake reply. Voicetypr lets you talk that drafting out between clients instead of typing it after hours, and the audio is transcribed on your own machine.",
      metaStrip: ["notes · summaries · email", "local transcription", "pay once · lifetime"],
    },
    pains: [
      {
        title: "One session, several pieces of writing.",
        body:
          "A single client can leave a progress note, a treatment summary, and an email to a referral source. Stack that across a full caseload and the writing becomes a second shift after the last appointment.",
      },
      {
        title: "Ten minutes between clients isn't enough to type a note.",
        body:
          "Thorough notes don't fit in the gap between sessions, so they slide to the end of the day. The drafting backs up, and the catch-up lands on your own evening.",
      },
      {
        title: "This is the most private writing you do.",
        body:
          "Session content, summaries, referral context—this is the last material you'd want streamed to a cloud service for transcription. Where the draft gets transcribed matters here more than almost anywhere.",
      },
    ],
    outcomes: [
      {
        marker: "voice",
        title: "The after-session pile, drafted faster",
        body:
          "Talk the note out the way you'd describe the session to a colleague, then edit for precision. Speaking moves faster than building each line one keystroke at a time.",
        meta: "Outcome · drafting",
      },
      {
        marker: "local",
        title: "Local by default",
        body:
          "Your spoken draft is transcribed on your own machine, so the audio doesn't go to a cloud service. Optional AI formatting sends text only when you turn it on, never the recording.",
        meta: "Outcome · privacy",
      },
      {
        marker: "any",
        title: "App, any text field",
        body:
          "Email, Word, Google Docs, your notes app, a browser form. If your cursor blinks in it, Voicetypr pastes the text there—no plugin per app.",
        meta: "Outcome · reach",
      },
    ],
    workflows: [
      {
        title: "Progress notes while the session is fresh",
        body:
          "After a client leaves, place the cursor in your note and talk through what happened, what you observed, and the plan—in the ten minutes before the next client, not at 9pm. Edit for precision before you save.",
      },
      {
        title: "Summaries and referral emails without the typing tax",
        body:
          "Treatment summaries, referral letters, the email to a referral source or insurer—say them the way you'd explain the case out loud, then tighten the wording. The long writing stops eating your evenings.",
      },
      {
        title: "The between-session admin pile",
        body:
          "Intake replies, scheduling messages, notes for supervision, the reply you owe a parent or partner agency. Hold the hotkey, say it, paste. The small writing that quietly fills the gaps gets cleared as you go.",
      },
    ],
    faqs: [
      {
        q: "Is this a HIPAA-compliant clinical documentation or EHR system?",
        a:
          "No. Voicetypr is a dictation tool that drafts text faster—it isn't an EHR, a clinical records system, or a HIPAA-compliance layer, and it isn't presented as one. Transcription runs on your own machine by default, which keeps audio off the cloud, but you remain responsible for client confidentiality and your record-keeping obligations. Treat what it produces as a draft you review against your own practice's requirements.",
      },
      {
        q: "Is my voice or session content uploaded anywhere?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your audio stays on your device. Optional AI formatting sends text only when you explicitly turn it on—never the recording.",
      },
      {
        q: "Will it get clinical terms and client names right?",
        a:
          "Common terms and names transcribe well; less common medication names, diagnoses, or unusual names sometimes need a quick fix. You should do a review pass anyway—Voicetypr speeds up the drafting, it doesn't remove your read-through.",
      },
      {
        q: "Does it work in the apps I write in?",
        a:
          "Yes. It pastes into normal text fields—email, Word, Google Docs, your notes app, browser forms. Place the cursor where you want the text, hold the hotkey, talk. There's nothing to integrate per app.",
      },
      {
        q: "Mac and Windows? And can I try it first?",
        a:
          "Both—macOS (Apple Silicon and Intel) and Windows 10+. It's a one-time purchase from $39, not a subscription, with a 3-day free trial that needs no card, so you can test it with your own voice and apps before buying.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Clear the writing pile <em>before you clock out.</em>",
      body: "Talk your progress notes, summaries, and referral emails into the apps you already draft in—transcribed on your own machine by default. Try Voicetypr free for 3 days, then pay once.",
    },
    keywords: [
      "voice typing for therapists",
      "dictation software for therapists",
      "voice to text for counselors",
      "speech to text for therapists",
      "dictation for counselors",
      "voice dictation for progress notes",
      "voicetypr therapists",
    ],
  },
  {
    slug: "real-estate-agents",
    title: "Voicetypr for Real Estate Agents — Dictate listings and follow-ups",
    ogTitle: "Voicetypr for Real Estate Agents",
    description:
      "Voice typing for real estate agents. Dictate listing descriptions, client follow-ups, and CRM notes between showings—in any app, on-device, pay once.",
    navLabel: "Real estate agents",
    hubTeaser:
      "Write a listing by talking through the property, then dictate the follow-up and CRM note before the next showing.",
    category: "profession",
    order: 16,
    hero: {
      eyebrow: "voicetypr for real estate agents",
      headline: "Write the listing in a minute. <em>Talk through the house.</em>",
      lede:
        "Listing descriptions, follow-up emails, CRM notes, offer summaries—the writing never stops, and a lot of it happens between showings, away from a desk. Hold a hotkey, say it out loud, and Voicetypr drops clean text into your CRM, Gmail, or MLS portal, transcribed on your own machine.",
      metaStrip: ["listings · follow-ups · crm", "local transcription", "works in every app"],
    },
    pains: [
      {
        title: "Most of the writing happens between showings.",
        body:
          "You're rarely at a desk. The listing copy, the follow-up, the CRM note, the offer recap—they pile up in the car, in the lobby, in the ten minutes before the next appointment. Typing all of that on a laptop balanced on your knee is its own job.",
      },
      {
        title: "The listing description is the field you keep skipping.",
        body:
          "You know the property cold—the light in the kitchen, the lot, the upgrades. Turning that into three tidy paragraphs in the MLS form is the part that stalls, and a thin description costs you showings.",
      },
      {
        title: "The follow-up that lands is the one you send now.",
        body:
          "Right after a showing you know exactly what to say to that buyer. An hour and two appointments later, the email gets shorter, flatter, and easier to put off until tomorrow—when it matters less.",
      },
    ],
    outcomes: [
      {
        marker: "1 min",
        title: "A listing draft from a walk-through",
        body:
          "Talk through the property the way you'd describe it to a buyer, and you've got a draft description to tidy in the form instead of a blank MLS field to fill from nothing.",
        meta: "Outcome · listings",
      },
      {
        marker: "any",
        title: "App, any text field",
        body:
          "Your CRM, Gmail, the MLS portal, Docs, a web form—if your cursor blinks in it, Voicetypr pastes the text there. No per-app plugin to set up.",
        meta: "Outcome · reach",
      },
      {
        marker: "local",
        title: "Audio stays on your machine",
        body:
          "Client names, addresses, and deal terms are transcribed on your own device by default. Optional AI formatting sends text only when you turn it on, never the recording.",
        meta: "Outcome · privacy",
      },
    ],
    workflows: [
      {
        title: "Listing description from a walk-through",
        body:
          "Walk the property—or picture it—and talk through the layout, the light, the upgrades, the neighborhood. Stop. Now you have a description to trim and polish in the MLS form instead of a blank box to start from.",
      },
      {
        title: "Follow-ups and CRM notes right after the showing",
        body:
          "Back in the car, open the email or your CRM, hold the hotkey, and say what the buyer reacted to, what they want next, and what you promised. The follow-up goes out while the showing's still warm, and the note's in the system before the next appointment.",
      },
      {
        title: "Offer summaries and client texts on the move",
        body:
          "Dictate the offer recap for your client, the counter terms for your file, or a quick update from a laptop between meetings. Push-to-talk on Option/Alt+Space keeps the trigger to one key when you're moving fast.",
      },
    ],
    faqs: [
      {
        q: "Does it work in my CRM and the MLS portal?",
        a:
          "Yes, in any normal text field that takes keyboard input—including browser-based CRMs and most MLS web forms. Place your cursor where you want the text, hold the hotkey, and talk. The portal doesn't need to know anything about Voicetypr.",
      },
      {
        q: "Can I really write a listing description by talking?",
        a:
          "You can talk out the draft, which is the slow part. Describe the property the way you'd walk a buyer through it, then tidy the wording in the form. Turn on AI formatting if you want cleaner punctuation and paragraphs; leave it off for the raw transcript.",
      },
      {
        q: "Is my clients' information sent anywhere?",
        a:
          "No. Transcription runs on your machine with a local model by default, so names, addresses, and deal terms stay on your device. Optional AI formatting sends text only when you turn it on, never the audio.",
      },
      {
        q: "Can I use it on the go, away from my desk?",
        a:
          "Yes. It runs on your laptop, so you can dictate from the car or a lobby between showings. Press the hotkey with one hand or use push-to-talk on Option/Alt+Space, then talk.",
      },
      {
        q: "Is it a subscription? Mac and Windows?",
        a:
          "It's pay once from $39, not a monthly bill, on macOS (Apple Silicon and Intel) and Windows 10+. There's a 3-day free trial with no card, so you can test it with your CRM and your own voice before buying.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Sell all day. <em>Write between showings.</em>",
      body: "Talk out the listing, the follow-up, and the CRM note between appointments and paste them where you already work—on-device by default. Try Voicetypr free for 3 days, then pay once.",
    },
    keywords: [
      "voice typing for real estate agents",
      "dictation software for realtors",
      "voice to text for real estate agents",
      "speech to text for realtors",
      "dictation for realtors",
      "voicetypr real estate",
    ],
  },
  {
    slug: "novelists",
    title: "Voicetypr for Novelists — Draft your book by voice",
    ogTitle: "Voicetypr for Novelists",
    description:
      "Voice typing for novelists drafting a book. Talk scenes and dialogue at speaking speed, edit later. Local transcription, pay once, any writing app.",
    navLabel: "Novelists",
    hubTeaser:
      "Narrate the scene into Scrivener or Word the way you'd tell it, then revise another day—pay once for the whole book.",
    category: "profession",
    order: 17,
    hero: {
      eyebrow: "voicetypr for novelists",
      headline: "The book's in your head. <em>Say it onto the page.</em>",
      lede:
        "You can see the scene before you can type it. Hold the hotkey, narrate it the way you'd tell a friend, and Voicetypr lands the words in Scrivener, Word, or wherever you draft—transcribed on your own machine.",
      metaStrip: ["narrate whole scenes", "local transcription", "pay once for the book"],
    },
    pains: [
      {
        title: "The scene plays faster than you can type it.",
        body:
          "You can see it—who walks in, what's said, where it turns. But forty words a minute can't keep up with a scene running in your head, so half of it cools before it reaches the page. The blank page wins by default.",
      },
      {
        title: "A novel is months of work, and a subscription bills every one of them.",
        body:
          "Eighty thousand words is not a weekend. It's showing up for the better part of a year. A dictation subscription turns each of those months into another charge—you end up renting the tool that's meant to help you finish.",
      },
      {
        title: "An unfinished manuscript doesn't belong on someone's server.",
        body:
          "Your draft is rough, unsold, and yours. Most cloud dictation streams every scene to a server you don't control. For a book no one is meant to read yet, that's the wrong default.",
      },
    ],
    outcomes: [
      {
        marker: "~130",
        title: "Draft at the speed you tell the story",
        body:
          "Speaking runs around 130 words a minute against roughly 40 typing—illustrative, but you feel it. The scene reaches the page while it's still warm, and the draft grows instead of stalling.",
        meta: "Outcome · pace",
      },
      {
        marker: "once",
        title: "Pay once for the whole book",
        body:
          "A lifetime license, not a monthly rental. Draft for as many months as the novel takes without another bill landing while you're mid-chapter.",
        meta: "Outcome · no subscription",
      },
      {
        marker: "any",
        title: "Write where you already write",
        body:
          "Scrivener, Word, Ulysses, Google Docs—Voicetypr pastes into whatever has your cursor. No exporting, no new editor to learn mid-manuscript.",
        meta: "Outcome · scope",
      },
    ],
    workflows: [
      {
        title: "Narrate the scene, revise on a different day",
        body:
          "Open your manuscript to the next chapter, hold the hotkey, and tell the scene out loud—who's there, what's said, what breaks. Release, and a complete, messy scene is on the page. Revision is tomorrow's job, not this sentence's.",
      },
      {
        title: "Talk the dialogue in each character's voice",
        body:
          "Dialogue reads true when it sounds spoken. Say each line the way the character would, let Voicetypr type it, then go back to set the tags and beats. The exchange keeps the rhythm you heard before you started fixing it.",
      },
      {
        title: "Keep the daily word count moving anywhere",
        body:
          "The thousand-words-a-day habit doesn't need a chair. Pacing the room or out on a walk with a tethered laptop, hold the hotkey and keep adding to the manuscript on the days sitting at the desk feels impossible.",
      },
    ],
    faqs: [
      {
        q: "How long a stretch can I dictate in one go?",
        a:
          "As long as a scene needs. Voicetypr processes the whole block after you release the hotkey, so there's no thirty-second cutoff like the macOS built-in tool and no live-streaming drop-off. Talk through a full scene, then release.",
      },
      {
        q: "Will dialogue and punctuation come out clean?",
        a:
          "Punctuation comes through better than the native dictation, but spoken-line formatting—quotation marks, em-dashes, dialogue tags—usually wants a quick editorial pass. That's revision you'd do anyway. Turn the Default formatting preset off if you'd rather clean a raw transcript yourself.",
      },
      {
        q: "Is my unpublished manuscript sent anywhere?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your draft and your audio stay on your device. Optional AI formatting sends text only when you switch it on—never the audio, never the recording.",
      },
      {
        q: "A novel takes months. Do I keep paying the whole time?",
        a:
          "No. It's a one-time purchase, not a subscription, so the tool costs the same whether the book takes three months or a year. There's a 3-day free trial with no card, then a pay-once license.",
      },
      {
        q: "Does it work in Scrivener, Word, Ulysses, and Google Docs?",
        a:
          "Yes—any of them, plus any other text field that accepts keyboard input. Put the cursor where the next line goes, hold the hotkey, talk. The app doesn't need a plugin or to know anything about Voicetypr.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Write the novel <em>at the speed you tell it.</em>",
      body: "Narrate the scene, let it land in Scrivener or Word, and revise another day—on-device by default. Try Voicetypr free for 3 days, then pay once for the whole book.",
    },
    keywords: [
      "voice typing for novelists",
      "voice dictation for novelists",
      "voice to text for novelists",
      "speech to text for fiction writers",
      "dictate a novel",
      "voice typing for authors",
      "voicetypr novelists",
    ],
  },
  {
    slug: "academics",
    title: "Voicetypr for Academics — Dictate the papers, grants, and feedback",
    ogTitle: "Voicetypr for Academics",
    description:
      "Voice typing for academics. Dictate journal papers, grant proposals, lecture notes, and student feedback in Word, LaTeX, Google Docs, and your LMS.",
    navLabel: "Academics",
    hubTeaser:
      "The teaching, publishing, and admin writing stacks up. Talk papers, grant drafts, and feedback into Word, LaTeX, or your LMS.",
    category: "profession",
    order: 18,
    hero: {
      eyebrow: "voicetypr for academics",
      headline: "The paper, the grant, the feedback. <em>Talk it out, edit at the end.</em>",
      lede:
        "Faculty life is a writing job wearing a teaching badge: journal revisions, grant proposals, lecture notes, grading comments, and an inbox that never empties. Voicetypr lets you say the draft at speaking speed, in whatever you write in, then spend your energy on the edit instead of the keystrokes.",
      metaStrip: ["papers · grants · feedback", "local transcription", "word · latex · docs · lms"],
    },
    pains: [
      {
        title: "Every part of the job ends in prose.",
        body:
          "Teaching, publishing, and service all funnel into writing—lecture notes, journal papers, peer reviews, committee memos, letters, and a standing inbox. The research is only half of it; writing it all up is the other half, and it never clears.",
      },
      {
        title: "By the fortieth paper, your feedback shrinks to one word.",
        body:
          "Real comments take real keystrokes. Somewhere in the grading stack, \"this argument needs evidence on page three\" becomes \"unclear\"—not because you stopped caring, but because typing every note out doesn't scale.",
      },
      {
        title: "Unpublished work doesn't belong in someone's cloud.",
        body:
          "Manuscripts under review, grant aims, and confidential recommendation letters are exactly the material you don't want streamed to a server by default. Offline-first dictation is the saner starting point.",
      },
    ],
    outcomes: [
      {
        marker: "speak",
        title: "First drafts at talking speed",
        body:
          "Say the introduction, the specific aims, or the reviewer rebuttal the way you'd explain it to a colleague, then edit the transcript. Speaking is faster than typing for long prose, and that gap adds up across a writing-heavy day.",
        meta: "Outcome · throughput",
      },
      {
        marker: "any",
        title: "Works where academic writing actually happens",
        body:
          "Word, Overleaf and other LaTeX editors, Google Docs, the LMS comment box, your email client, and browser forms. If your cursor lands in the field, you can dictate into it—no per-app plugin.",
        meta: "Outcome · scope",
      },
      {
        marker: "0",
        title: "Audio leaving your machine",
        body:
          "Transcription runs on-device with a local model. Your unreviewed manuscript and the letter you're writing for a student stay on your computer, not in a vendor's logs.",
        meta: "Outcome · privacy",
      },
    ],
    workflows: [
      {
        title: "Journal papers and the response to reviewers",
        body:
          "Talk the discussion section out in paragraphs, then tighten it. When the revise-and-resubmit lands, dictate the point-by-point response—the part where you stay civil while explaining why reviewer two is wrong—and edit the tone afterward.",
      },
      {
        title: "Grant proposals and lecture notes",
        body:
          "Specific aims, broader impacts, and the project narrative go faster when you say them first and shape them second. Same for course material: talk through the lecture, the reading guide, or the slide bullets, then format what you said.",
      },
      {
        title: "Grading feedback, letters, and the student inbox",
        body:
          "Put the cursor in the LMS comment box and speak the feedback each paper actually deserves. Dictate the recommendation letter, the reply to the anxious advisee, the email to a collaborator three time zones away—then move on.",
      },
    ],
    faqs: [
      {
        q: "Does it work in Overleaf and other LaTeX editors?",
        a:
          "Yes. Voicetypr pastes into any text field that accepts keyboard input, and Overleaf's editor is a normal text area in the browser. Dictate the prose; type the math and markup by keyboard, where it's faster anyway.",
      },
      {
        q: "Can it handle equations, citations, and technical terms?",
        a:
          "It transcribes academic prose well, but expect a cleanup pass for symbols, citation keys, and unusual names. The workflow most people settle on: voice for the sentences, keyboard for the LaTeX, BibTeX, and notation.",
      },
      {
        q: "Are unpublished manuscripts and recommendation letters private?",
        a:
          "Yes. Transcription runs on your machine with a local model by default, so the audio never leaves your device. Optional AI formatting sends text only when you switch it on—never the recording.",
      },
      {
        q: "Can I dictate grading feedback straight into the LMS?",
        a:
          "If the comment box accepts typed text—Canvas, Moodle, Blackboard, Google Classroom—you can dictate into it. Place your cursor, hold the hotkey, say the comment, release.",
      },
      {
        q: "Does it work on Mac and Windows?",
        a:
          "Yes—macOS (Apple Silicon and Intel) and Windows 10+. There's a 3-day free trial with no card, and it's a one-time purchase from $39, so a temporary writing crunch doesn't become a recurring bill.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Say the draft. <em>Save your energy for the edit.</em>",
      body: "Talk your papers, grants, and feedback into Word, LaTeX, or the LMS—transcribed on your own machine. Free for 3 days, no card; pay once from $39 if it sticks.",
    },
    keywords: [
      "voice typing for academics",
      "voice dictation for professors",
      "voice to text for professors",
      "speech to text for academics",
      "dictation for academic writing",
      "dictation software for lecturers",
      "voicetypr academics",
    ],
  },
  {
    slug: "bloggers",
    title: "Voicetypr for Bloggers — Talk the draft, publish faster",
    ogTitle: "Voicetypr for Bloggers",
    description:
      "Voice typing for bloggers and content creators. Talk out the first draft, beat the blank page, and batch posts in WordPress, Ghost, Notion, or Docs.",
    navLabel: "Bloggers",
    hubTeaser:
      "Beat the blank page on a publishing schedule—talk the outline, intro, and first draft into WordPress, Ghost, or Notion.",
    category: "profession",
    order: 19,
    hero: {
      eyebrow: "voicetypr for bloggers",
      headline: "The blank page comes back every week. <em>Talk straight past it.</em>",
      lede:
        "Publishing on a cadence means staring down a fresh blank post this week, then every week after. Hold a hotkey, talk the outline and the first draft out loud, and Voicetypr drops the words into WordPress, Ghost, Notion, or your CMS—transcribed on your own machine.",
      metaStrip: ["outline · intro · first draft", "local transcription", "wordpress · ghost · cms"],
    },
    pains: [
      {
        title: "The blank post resets every week.",
        body:
          "The hard part of blogging on a schedule isn't writing one post—it's starting the next one, and the one after that. Talking out the intro is far easier than typing into an empty editor, so the cadence stops depending on willpower.",
      },
      {
        title: "You can explain the post in two minutes. Typing it takes two hours.",
        body:
          "The idea is clear when you say it to a friend or argue it out on a walk. It stalls the moment you sit down to type it cleanly. Voice keeps the version that sounded good out loud instead of letting it flatten at the keyboard.",
      },
      {
        title: "Consistency is the whole game, and typing is what breaks it.",
        body:
          "When every post is a slog to type, the writing day slips, the calendar gaps, and the blog goes quiet. Lowering the cost of a first draft is what keeps the posts shipping.",
      },
    ],
    outcomes: [
      {
        marker: "draft",
        title: "A first draft in one sitting",
        body:
          "Talk the intro, the outline, and the body in one pass, then edit on a second. The post exists by the time you sit down to polish it.",
        meta: "Outcome · velocity",
      },
      {
        marker: "any",
        title: "Editor, any blog platform or CMS",
        body:
          "WordPress, Ghost, Substack, Medium, Notion, Google Docs, a headless CMS field. If your cursor blinks in it, the text pastes in—no plugin per platform.",
        meta: "Outcome · reach",
      },
      {
        marker: "once",
        title: "Pay once, post on any cadence",
        body:
          "A lifetime license from $39, not a monthly bill riding on a blog that may not pay yet. Publish weekly or twice a year—the tool costs the same.",
        meta: "Outcome · no subscription",
      },
    ],
    workflows: [
      {
        title: "Turn a talked-through idea into a draft",
        body:
          "You already explained the post to a friend, or worked it out in your head on a walk. Open the editor, hold the hotkey, and say it the same way. The version that sounded good out loud is now sitting in the draft instead of evaporating.",
      },
      {
        title: "Outline the post before you fill it",
        body:
          "Dictate the angle, the subheads, and a line on what each section covers. Now you're writing into a structure instead of a blank page—and the SEO outline you'd have typed slowly is already down.",
      },
      {
        title: "Batch a week of posts on your writing day",
        body:
          "Block the time, then rough out several posts back-to-back by voice—one talked-through draft, then the next. A content calendar is easier to keep when first drafts cost minutes of talking instead of hours of typing.",
      },
    ],
    faqs: [
      {
        q: "Does it work in WordPress, Ghost, and my CMS?",
        a:
          "Yes. Voicetypr pastes into any text field that accepts keyboard input—the WordPress block editor, the Ghost editor, Substack, Medium, Notion, Google Docs, or a headless CMS field in the browser. Place your cursor, hold the hotkey, talk.",
      },
      {
        q: "Won't the post still need editing after I dictate it?",
        a:
          "Yes, and that's the workflow. You talk the messy first draft fast, then edit it into shape on a second pass. The win is getting past the blank page, not shipping unedited transcript.",
      },
      {
        q: "Will a dictated post sound robotic, or like me?",
        a:
          "Spoken drafts usually read more like you than copy assembled word-by-word, because that's how you actually talk. The optional Default formatting preset cleans up punctuation and paragraph breaks; turn it off if you want the raw transcript to shape yourself.",
      },
      {
        q: "Can it handle a long-form, 1,500-word post in one go?",
        a:
          "Yes. The model processes the whole block after you release the hotkey, so there's no streaming drop-off on long sessions. You still pick the keywords and structure—voice just gets the words down faster than typing them.",
      },
      {
        q: "Is my audio or my unpublished draft uploaded anywhere?",
        a:
          "No. Transcription runs on your machine with a local model by default, so your audio and your unpublished posts stay on your device. Optional AI formatting sends text only when you turn it on, never the recording.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Hit publish more often. <em>Talk the draft first.</em>",
      body: "Beat the blank page on a cadence: talk the outline and first draft into your editor, then polish—on-device by default. Try Voicetypr free for 3 days, then pay once.",
    },
    keywords: [
      "voice typing for bloggers",
      "voice dictation for content creators",
      "voice to text for blogging",
      "speech to text for content creators",
      "dictation for bloggers",
      "voicetypr bloggers",
    ],
  },
];

const USE_CASE_BY_SLUG: Record<string, UseCase> = Object.fromEntries(
  USE_CASE_ENTRIES.map((entry) => [entry.slug, entry]),
);

export function getAllUseCases(): UseCase[] {
  return [...USE_CASE_ENTRIES].sort((a, b) => {
    if (a.category !== b.category) {
      const order: UseCaseCategory[] = ["accessibility", "profession"];
      return order.indexOf(a.category) - order.indexOf(b.category);
    }
    return a.order - b.order;
  });
}

export function getUseCasesByCategory(): Record<UseCaseCategory, UseCase[]> {
  const grouped: Record<UseCaseCategory, UseCase[]> = {
    accessibility: [],
    profession: [],
  };
  for (const entry of getAllUseCases()) {
    grouped[entry.category].push(entry);
  }
  return grouped;
}

export function getUseCase(slug: string, locale?: string): UseCase | null {
  if (locale === "es") {
    const es = USE_CASE_ES[slug];
    if (es) return es;
  }
  return USE_CASE_BY_SLUG[slug] ?? null;
}

export function getAllUseCaseSlugs(): string[] {
  return Object.keys(USE_CASE_BY_SLUG);
}
