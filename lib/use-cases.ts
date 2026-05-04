/**
 * Use-case data: structured per-niche content for /use-cases/* pages.
 * Each entry renders through the same editorial template — keep the voice
 * consistent with the homepage and FounderNote (direct, specific, no SaaS
 * marketing slop).
 */

export type UseCaseCategory = "accessibility" | "profession" | "workflow";

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
      "Type at the speed you think. Voice typing for people with ADHD: capture ideas before they vanish, write at speaking speed, no medication required.",
    navLabel: "ADHD",
    category: "accessibility",
    order: 1,
    hero: {
      eyebrow: "voicetypr for adhd",
      headline: "The thought just left. <em>Catch it before it does.</em>",
      lede:
        "If your brain runs faster than your fingers — and the idea is gone by the time you finish typing the first sentence — voice closes that gap. VoiceTypr captures the thought at speaking speed, locally, and pastes it wherever your cursor is.",
      metaStrip: ["~5× faster than typing", "100% offline", "no setup ritual"],
    },
    pains: [
      {
        title: "The idea was there. Now it isn't.",
        body:
          "By the time you've opened the right app, found the right doc, and typed the first sentence, the thought has moved. ADHD working memory is a leaky bucket; typing leaks the most.",
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
          "Pay once. Use it forever. No login. No streak to maintain. No app you have to remember to open.",
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
        q: "Can I use it for journaling without anything getting sent to a server?",
        a:
          "Yes — that's the design. Audio transcription runs 100% locally on your machine. Nothing leaves your computer unless you explicitly turn on AI formatting (and even then it only sends the final text, never the audio).",
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
        q: "Will it work if I haven't taken my meds today?",
        a:
          "Yes. The cognitive load of pressing one hotkey and talking is genuinely lower than the load of typing — that's the whole point. People with ADHD report dictating works better on days when typing feels impossible.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Catch the thought <em>before it leaves.</em>",
      body: "VoiceTypr is offline, lifetime, no account. Try it for a working week.",
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
      "Voice typing for dyslexia. Write what you mean without fighting spelling, autocorrect, or the slow-down of constantly re-reading. 100% offline.",
    navLabel: "Dyslexia",
    category: "accessibility",
    order: 2,
    hero: {
      eyebrow: "voicetypr for dyslexia",
      headline: "Say what you mean. <em>Skip the spelling fight.</em>",
      lede:
        "If reading what you've typed is slower than typing it in the first place — and autocorrect keeps swapping the wrong word for the wrong reason — voice bypasses the loop entirely. You speak, the text appears, you keep moving.",
      metaStrip: ["~5× faster than typing", "100% offline", "no autocorrect wars"],
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
        marker: "100%",
        title: "Local",
        body:
          "Audio never leaves your machine. No cloud accidentally training on private writing. Your drafts are yours.",
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
          "No. Audio is processed locally on your machine using Whisper. It never leaves the device. There is no cloud account, no training pipeline, no \"we may use your data to improve our service.\"",
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
      body: "VoiceTypr is offline, lifetime, no account. Try it for a working week.",
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
      metaStrip: ["fewer keystrokes", "100% offline", "works in every text field"],
    },
    pains: [
      {
        title: "Keystroke counts add up faster than you'd think.",
        body:
          "An average knowledge worker types 20-40k keystrokes a day. Past a certain volume, your hands keep score. Voice cuts that count by 60-80% without changing what you produce.",
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
        marker: "−70%",
        title: "Keystrokes for the same output",
        body:
          "Talk for ninety seconds; press the hotkey once. The keystrokes that used to come out of your hand now come out of your throat.",
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
          "On a typical voice-typing workflow, you press one hotkey to start, speak, and release. For a 200-word email that's 1-3 keystrokes vs about 1,200 if you typed it. Across a day with mostly long-form writing, 60-80% reduction is realistic.",
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
      body: "VoiceTypr is offline, lifetime, no account. Try it for a working week.",
    },
    keywords: [
      "voice typing for rsi",
      "voice dictation rsi",
      "rsi typing alternative",
      "wrist pain voice typing",
      "voicetypr rsi",
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
        "100% offline",
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
        marker: "5×",
        title: "Faster on the English-side of the job",
        body:
          "Speaking is ~150 wpm. Typing is ~80. Across a day of prompts, replies, and descriptions, that delta compounds.",
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
      body: "VoiceTypr is offline, lifetime, no account. Try it for a working week.",
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
    title: "VoiceTypr for Writers — Draft at speaking speed, edit later",
    ogTitle: "VoiceTypr for Writers",
    description:
      "Voice typing for writers, novelists, and content creators. Draft at 150 wpm, edit later. 100% offline, pay-once, works in every writing app.",
    navLabel: "Writers",
    category: "profession",
    order: 2,
    hero: {
      eyebrow: "voicetypr for writers",
      headline: "Draft fast. <em>Edit slow.</em>",
      lede:
        "Drafting and editing are two different cognitive modes. Voice lets you separate them. Talk the first draft at speaking speed, then come back to edit when your brain is in the right gear for it.",
      metaStrip: ["~150 wpm dictating", "100% offline", "any writing app"],
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
        marker: "100%",
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
      body: "VoiceTypr is offline, lifetime, no account. Try it for a working week.",
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
      "Built by a solo founder, for solo founders. Dictate prompts, support replies, specs, and Slack updates. 100% offline, pay-once, no subscription.",
    navLabel: "Founders & solopreneurs",
    category: "profession",
    order: 3,
    hero: {
      eyebrow: "voicetypr for founders",
      headline: "You're the bottleneck. <em>Voice unbottlenecks you.</em>",
      lede:
        "When you're the only one shipping product, support, marketing, and ops, every minute typing is a minute not building. VoiceTypr is the dictation tool a solo founder built because he was tired of paying $180 a year for one.",
      metaStrip: ["12+ hr/day workflows", "100% offline", "pay once · lifetime"],
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
        marker: "5×",
        title: "Faster on prompts and replies",
        body:
          "The longest text fields in your day — agent prompts, support replies, drafts — drop from typed to spoken.",
        meta: "Outcome · throughput",
      },
      {
        marker: "100%",
        title: "Local",
        body:
          "Pre-public feature notes, customer details, pricing experiments — nothing leaves your laptop. Founders should not be sending half-formed thoughts to anyone else's server.",
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
        q: "Will there be a team plan when I'm ready to hire?",
        a:
          "Yes — a multi-seat plan is in active development. The Max plan covers 4 devices on a single license today, which works for very small teams.",
      },
    ],
    finalCta: {
      eyebrow: "three days, no card",
      headline: "Built by a founder. <em>For founders.</em>",
      body: "VoiceTypr is offline, lifetime, no account. Try it for a working week.",
    },
    keywords: [
      "voice typing for founders",
      "founder productivity tool",
      "ai voice typing solopreneur",
      "indie hacker voice typing",
      "voicetypr founders",
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
