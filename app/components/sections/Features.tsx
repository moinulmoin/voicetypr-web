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
    "iMessage",
  ];

  const models = [
    { name: "Whisper Base", size: "142 MB", accent: false },
    { name: "Whisper Large v3", size: "2.9 GB", accent: false },
    { name: "Whisper Large v3 Turbo", size: "1.5 GB", accent: true },
    { name: "Parakeet (Apple Silicon)", size: "0.6 GB", accent: false },
  ];

  return (
    <section className="ed-section ed-section-wash" id="features">
      <div className="ed-container">
        <div className="ed-eyebrow">built around how you actually work</div>
        <h2 className="font-serif text-[clamp(42px,4.4vw,68px)] leading-[1] max-w-[760px] mt-2 mb-10">
          Eight things I use every day.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 grid-flow-dense">
          {/* 1. Languages — WIDE, warm cream surface (sets tone for the bento) */}
          <div className="bg-editorial-surface-2 border border-editorial-line rounded-[20px] p-7 md:p-9 min-h-[240px] flex flex-col lg:col-span-4 relative overflow-hidden">
            <div className="absolute top-5 right-6 font-mono text-[10.5px] uppercase tracking-[0.14em] text-editorial-ink-3">
              99+ &middot; languages
            </div>
            <div className="ed-label mb-2.5">languages</div>
            <h3 className="font-serif text-[28px] md:text-[32px] leading-[1.05] mb-3 max-w-[640px]">
              99+ languages. Speak naturally. It just works.
            </h3>
            <p className="text-editorial-ink-2 text-[15px] leading-[1.6] max-w-[680px]">
              English, Spanish, French, German, Italian, Portuguese, Dutch,
              Swedish, Polish, Japanese, Mandarin, Hindi, Arabic, Korean,
              plus 85 more. Pick a model that supports your language; VoiceTypr
              handles the rest.
            </p>
            <div className="mt-auto pt-6">
              <div className="flex flex-wrap gap-1.5">
                {languages.map((l) => (
                  <span
                    key={l}
                    className="inline-flex items-center justify-center min-w-[36px] h-7 px-2.5 rounded-md bg-editorial-surface border border-editorial-line font-mono text-[11px] text-editorial-ink-2"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Hotkeys — DARK (signature key art moment) */}
          <div className="bg-editorial-ink text-white border border-white/10 rounded-[20px] p-7 min-h-[260px] flex flex-col md:col-span-1 lg:col-span-2 relative overflow-hidden">
            {/* subtle grain wash */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>")',
              }}
            />
            <div className="relative">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55 mb-2.5">
                hotkeys
              </div>
              <h3 className="font-serif text-[26px] leading-[1.1] mb-2.5 text-white">
                Toggle, push-to-talk, or remap.
              </h3>
              <p className="text-white/65 text-[14.5px] leading-[1.55]">
                Hold to record. Tap to toggle. Bind to whatever your fingers
                already know.
              </p>
            </div>
            <div className="relative mt-auto pt-6">
              <div className="flex gap-2 items-center">
                <span className="inline-flex items-center justify-center min-w-[40px] h-10 px-3 rounded-lg bg-white/[0.06] border border-white/15 border-b-[2px] font-mono text-[13px] text-white">
                  &#8984;
                </span>
                <span className="inline-flex items-center justify-center min-w-[40px] h-10 px-3 rounded-lg bg-white/[0.06] border border-white/15 border-b-[2px] font-mono text-[13px] text-white">
                  &#8679;
                </span>
                <span className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-white/[0.06] border border-white/15 border-b-[2px] font-mono text-[13px] text-white">
                  Space
                </span>
                <span className="ml-auto font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/45">
                  default
                </span>
              </div>
            </div>
          </div>

          {/* 3. Models — white with terminal-style mono block */}
          <div className="bg-editorial-surface border border-editorial-line rounded-[20px] p-7 min-h-[260px] flex flex-col md:col-span-1 lg:col-span-2">
            <div className="ed-label mb-2.5">models</div>
            <h3 className="font-serif text-[26px] leading-[1.1] mb-2.5">
              Multiple models, your call.
            </h3>
            <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
              Whisper base, large-v3, and 6×-faster turbo. Plus Parakeet on Mac.
              Pick per session.
            </p>
            <div className="mt-auto pt-5">
              <div className="rounded-md bg-[#1a1a1a] border border-editorial-ink p-3.5 font-mono text-[11.5px] leading-[1.7]">
                {models.map((m) => (
                  <div
                    key={m.name}
                    className={`flex justify-between ${
                      m.accent ? "text-[color:var(--color-editorial-accent-wash)]" : "text-white/65"
                    }`}
                  >
                    <span>{m.name}</span>
                    <span>{m.size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Formatting — accent wash (the green moment) */}
          <div className="bg-editorial-accent-wash border border-editorial-accent/20 rounded-[20px] p-7 min-h-[260px] flex flex-col md:col-span-1 lg:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-editorial-accent-ink mb-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-editorial-accent" />
              formatting
            </div>
            <h3 className="font-serif text-[26px] leading-[1.1] mb-2.5">
              4 AI presets, on tap.
            </h3>
            <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
              Default, Prompts, Email, Commit. Same voice, smarter tone out.
              Powered by Gemini, OpenAI, or any OpenAI-compatible API (Groq,
              Ollama).
            </p>
            <div className="mt-auto pt-5">
              <div className="flex flex-wrap gap-1.5">
                {formatModes.map((m, i) => (
                  <span
                    key={m}
                    className={
                      i === 1
                        ? "inline-flex items-center px-3 py-1.5 rounded-full bg-editorial-accent text-white text-[11.5px] font-medium"
                        : "inline-flex items-center px-3 py-1.5 rounded-full bg-white/70 border border-editorial-accent/15 text-editorial-ink text-[11.5px] font-medium"
                    }
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Upload — white, minimal */}
          <div className="bg-editorial-surface border border-editorial-line rounded-[20px] p-7 min-h-[260px] flex flex-col md:col-span-1 lg:col-span-2">
            <div className="ed-label mb-2.5">upload</div>
            <h3 className="font-serif text-[26px] leading-[1.1] mb-2.5">
              Drag in a file.
            </h3>
            <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
              Drag any audio or video file in. Transcribed where you drop it — never uploaded.
            </p>
            <div className="mt-auto pt-5">
              <div className="rounded-lg bg-editorial-surface-2 p-4 flex items-center justify-between">
                <div className="font-mono text-[11px] text-editorial-ink-2">
                  wav · mp3 · m4a · flac · ogg · mp4 · webm
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-editorial-ink-3">
                  drop
                </span>
              </div>
            </div>
          </div>

          {/* 6. Apps — DARK wide (the "everywhere" moment) */}
          <div className="bg-editorial-ink text-white border border-white/10 rounded-[20px] p-7 md:p-9 min-h-[240px] flex flex-col lg:col-span-4 relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 h-[280px] w-[280px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--color-editorial-accent) 30%, transparent), transparent 65%)",
              }}
            />
            <div className="relative flex flex-col h-full">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55 mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-editorial-accent" />
                works with everything
              </div>
              <h3 className="font-serif text-[28px] md:text-[32px] leading-[1.05] mb-3 max-w-[640px] text-white">
                Every app that takes a cursor.
              </h3>
              <p className="text-white/65 text-[15px] leading-[1.6] max-w-[640px]">
                Native paste, not a browser extension. Not a Chrome tab. If
                your cursor lands in it, you can dictate into it.
              </p>
              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-2">
                  {apps.map((app) => (
                    <span
                      key={app}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[12px] font-medium text-white/85"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 7. History — white */}
          <div className="bg-editorial-surface border border-editorial-line rounded-[20px] p-7 min-h-[240px] flex flex-col lg:col-span-4">
            <div className="ed-label mb-2.5">history</div>
            <h3 className="font-serif text-[26px] leading-[1.1] mb-2.5">
              Searchable, exportable.
            </h3>
            <p className="text-editorial-ink-2 text-[14.5px] leading-[1.55]">
              Every transcript stays on your machine. Search by text or date,
              copy, or export.
            </p>
            <div className="mt-auto pt-5">
              <div className="font-mono text-[11px] text-editorial-ink-2 leading-[1.8] bg-editorial-surface-2/60 rounded-md p-3.5 border border-editorial-line">
                <div>&rarr; search history</div>
                <div>&rarr; export as JSON</div>
                <div>&rarr; re-copy anything</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
