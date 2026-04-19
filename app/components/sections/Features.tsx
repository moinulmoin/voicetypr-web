export default function Features() {
  const languages = [
    "EN",
    "ES",
    "FR",
    "DE",
    "IT",
    "PT",
    "NL",
    "SV",
    "NO",
    "PL",
    "JA",
    "ZH",
    "HI",
    "AR",
    "KO",
    "TR",
    "RU",
    "+82",
  ];

  const formatModes = ["Default", "Prompts", "Email", "Commit"];

  const apps = [
    "ChatGPT",
    "Claude",
    "Cursor",
    "VS Code",
    "Notion",
    "Slack",
    "Linear",
    "Gmail",
    "Discord",
    "X",
    "Figma",
  ];

  const models = [
    { name: "base.en", size: "142 MB", accent: false },
    { name: "large-v3", size: "2.9 GB", accent: false },
    { name: "large-v3-turbo \u25CF", size: "1.5 GB", accent: true },
  ];

  return (
    <section className="ed-section" id="features">
      <div className="ed-container">
        <div className="ed-eyebrow">the feature grid &middot; not a list, a toolkit</div>
        <h2 className="font-serif text-[clamp(42px,4.4vw,68px)] leading-[1] max-w-[760px] mt-2 mb-10">
          Little things that make <em>the big thing</em> addictive.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 grid-flow-dense">
          {/* 1. Languages — WIDE */}
          <div className="bg-editorial-surface border border-editorial-line rounded-[20px] p-7 min-h-[220px] flex flex-col lg:col-span-4">
            <div className="ed-label mb-2.5">languages</div>
            <h3 className="font-serif text-[26px] leading-[1.1] mb-2.5">
              99+ languages. Speak naturally. It just works.
            </h3>
            <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
              English, Spanish, French, German, Italian, Portuguese, Dutch,
              Swedish, Polish, Japanese, Mandarin, Hindi, Arabic, Korean,
              plus 85 more. Pick a model that supports your language; VoiceTypr
              handles the rest.
            </p>
            <div className="mt-auto pt-5">
              <div className="flex flex-wrap gap-1.5">
                {languages.map((l) => (
                  <span
                    key={l}
                    className="ed-chip text-[11px] px-2 py-1"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Hotkeys — MEDIUM */}
          <div className="bg-editorial-surface border border-editorial-line rounded-[20px] p-7 min-h-[220px] flex flex-col md:col-span-1 lg:col-span-2">
            <div className="ed-label mb-2.5">hotkeys</div>
            <h3 className="font-serif text-[26px] leading-[1.1] mb-2.5">
              Toggle or push-to-talk.
            </h3>
            <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
              Hold to record, or tap to toggle. Remap to anything you want.
            </p>
            <div className="mt-auto pt-5">
              <div className="flex gap-1.5">
                <span className="ed-kbd">&#8984;</span>
                <span className="ed-kbd">&#8679;</span>
                <span className="ed-kbd">Space</span>
              </div>
            </div>
          </div>

          {/* 3. Models — MEDIUM */}
          <div className="bg-editorial-surface border border-editorial-line rounded-[20px] p-7 min-h-[220px] flex flex-col md:col-span-1 lg:col-span-2">
            <div className="ed-label mb-2.5">models</div>
            <h3 className="font-serif text-[26px] leading-[1.1] mb-2.5">
              Multiple models, your call.
            </h3>
            <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
              Whisper base, large-v3, and 6×-faster turbo. Plus Parakeet on Mac. Pick per session.
            </p>
            <div className="mt-auto pt-5">
              <div className="flex flex-col gap-1 font-mono text-xs text-editorial-ink-2 leading-[1.8]">
                {models.map((m) => (
                  <div key={m.name} className="flex justify-between">
                    <span className={m.accent ? "text-editorial-accent" : ""}>
                      {m.name}
                    </span>
                    <span className={m.accent ? "text-editorial-accent" : ""}>
                      {m.size}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Formatting — MEDIUM */}
          <div className="bg-editorial-surface border border-editorial-line rounded-[20px] p-7 min-h-[220px] flex flex-col md:col-span-1 lg:col-span-2">
            <div className="ed-label mb-2.5">formatting</div>
            <h3 className="font-serif text-[26px] leading-[1.1] mb-2.5">
              4 AI presets, on tap.
            </h3>
            <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
              Default, Prompts, Email, Commit. Same voice, smarter tone out.
              Powered by Gemini, OpenAI, or any OpenAI-compatible API (Groq, Ollama).
            </p>
            <div className="mt-auto pt-5">
              <div className="flex flex-wrap gap-1.5">
                {formatModes.map((m, i) => (
                  <span
                    key={m}
                    className={
                      i === 1
                        ? "ed-chip text-[11px] px-2 py-1 bg-editorial-accent text-white border-editorial-accent"
                        : "ed-chip text-[11px] px-2 py-1"
                    }
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Works with everything — WIDE */}
          <div className="bg-editorial-surface border border-editorial-line rounded-[20px] p-7 min-h-[220px] flex flex-col lg:col-span-4">
            <div className="ed-label mb-2.5">works with everything</div>
            <h3 className="font-serif text-[26px] leading-[1.1] mb-2.5">
              Every app that takes a cursor.
            </h3>
            <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
              ChatGPT, Claude, Cursor, VS Code, Notion, Slack, Linear, Gmail,
              Discord, X, Figma, iMessage. Native paste, not a browser
              extension. Not a Chrome tab.
            </p>
            <div className="mt-auto pt-5">
              <div className="flex flex-wrap gap-2">
                {apps.map((app) => (
                  <span
                    key={app}
                    className="ed-chip text-[11px] px-2.5 py-1.5"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 6. Upload — MEDIUM */}
          <div className="bg-editorial-surface border border-editorial-line rounded-[20px] p-7 min-h-[220px] flex flex-col md:col-span-1 lg:col-span-2">
            <div className="ed-label mb-2.5">upload</div>
            <h3 className="font-serif text-[26px] leading-[1.1] mb-2.5">
              Drag in a file.
            </h3>
            <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
              Transcribe WAV, MP3, M4A, FLAC, OGG, MP4, WebM. Drop it in, done.
            </p>
            <div className="mt-auto pt-5">
              <div className="font-mono text-[11px] text-editorial-ink-2">
                wav · mp3 · m4a · flac · ogg · mp4 · webm
              </div>
            </div>
          </div>

          {/* 7. History — MEDIUM */}
          <div className="bg-editorial-surface border border-editorial-line rounded-[20px] p-7 min-h-[220px] flex flex-col md:col-span-1 lg:col-span-2">
            <div className="ed-label mb-2.5">history</div>
            <h3 className="font-serif text-[26px] leading-[1.1] mb-2.5">
              Searchable, exportable.
            </h3>
            <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
              Everything you&apos;ve dictated. Search, copy, export to
              JSON.
            </p>
            <div className="mt-auto pt-5">
              <div className="font-mono text-[11px] text-editorial-ink-2 leading-[1.6]">
                &rarr; search history
                <br />
                &rarr; export as JSON
                <br />
                &rarr; re-copy anything
              </div>
            </div>
          </div>

          {/* 8. Streaks — MEDIUM */}
          <div className="bg-editorial-surface border border-editorial-line rounded-[20px] p-7 min-h-[220px] flex flex-col md:col-span-1 lg:col-span-2">
            <div className="ed-label mb-2.5">streaks</div>
            <h3 className="font-serif text-[26px] leading-[1.1] mb-2.5">
              Track your progress.
            </h3>
            <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
              Daily streaks, words spoken, time saved. Quietly addictive.
            </p>
            <div className="mt-auto pt-5">
              <div className="font-mono text-[11px] text-editorial-ink-2">
                12-day streak &middot; 184k words &middot; 6h saved this week
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
