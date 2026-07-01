/**
 * Curated changelog for the public web. Manually maintained for now; later we
 * can pull from CHANGELOG.md in the desktop repo at build time. Source of
 * truth: https://github.com/moinulmoin/voicetypr/blob/main/CHANGELOG.md
 *
 * Curation rules:
 *   - Skip CI/release-script churn ("auto-set GITHUB_TOKEN", "release-it
 *     skipChecks") — users don't care.
 *   - Rewrite commit subjects into plain English where the original is too
 *     terse or too jargon-y.
 *   - Pull a 1-3 bullet "highlights" set per release for the visual scan.
 *   - Group everything else into Features / Fixes / Breaking (in that order).
 */

export type ChangelogEntry = {
  version: string;
  date: string; // ISO yyyy-mm-dd
  highlights?: string[];
  features?: string[];
  fixes?: string[];
  breaking?: string[];
  /** Marks the most recent release. Renders a "Latest" pill. */
  latest?: boolean;
};

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "2.0.4",
    date: "2026-07-01",
    latest: true,
    highlights: [
      "Cloud dictation starts faster — the first request skips the connection handshake",
      "Back-to-back recordings reuse a single connection instead of rebuilding it each time",
    ],
    features: [
      "Cloud STT: warms the active cloud speech-to-text connection at recording start so the first transcription skips the DNS, TCP, and TLS handshake",
      "AI formatting: pre-warms the active AI-polish connection whenever formatting is enabled with a configured provider",
      "Performance: reuses one pooled HTTP client across requests instead of rebuilding it per call, speeding up back-to-back dictations",
    ],
  },
  {
    version: "2.0.3",
    date: "2026-06-30",
    latest: false,
    highlights: [
      "Deepgram keys now validate correctly and report the real problem",
      "Each cloud provider card shows which model it's using",
    ],
    fixes: [
      "Cloud STT: validates the Deepgram API key against its documented token endpoint and surfaces a precise \"model unavailable — check the key's scopes and your plan\" message instead of a misleading \"invalid key\"",
      "Cloud STT: updates Soniox to its current async transcription model",
      "Cloud STT: shows the underlying transcription model on each cloud provider card",
    ],
  },
  {
    version: "2.0.2",
    date: "2026-06-30",
    latest: false,
    highlights: [
      "Hotkey engine rebuilt on one native trigger system for combos, holds, and taps",
      "Windows tray no longer crashes on startup and adapts its icon to light or dark",
    ],
    features: [
      "Hotkeys: unifies key combos, bare-modifier holds, and isolated taps onto one native trigger engine, retiring the old global-shortcut plugin",
      "Hotkeys: lone-modifier recording hotkeys now fire even while a Voicetypr text field is focused, via an in-app fallback",
      "Tray: theme-adaptive tray icon that matches the Windows light or dark taskbar",
    ],
    fixes: [
      "Tray: never crashes on startup when the system tray fails to initialize on Windows",
      "Windows: ships debug symbols (.pdb) so crash reports symbolicate to real frames",
      "Hotkeys: arms an upgraded combo at startup and no longer swallows bare modifiers on Windows",
      "Hotkeys: clears the old combo hotkey before saving a bare-modifier primary so recording can't double-fire",
      "Windows: guards monitor queries against a stale-handle crash when the display configuration changes",
    ],
  },
  {
    version: "2.0.1",
    date: "2026-06-25",
    latest: false,
    highlights: [
      "Crash and reliability hardening across Windows recording, the keyboard hook, and local Whisper",
      "Diagnostics reporting now defaults to opt-out with clearer consent wording",
    ],
    features: [
      "Diagnostics: crash and error reporting defaults to opt-out with clearer consent wording",
    ],
    fixes: [
      "Recording: prevents a Windows crash from an unbounded audio buffer size and isolates device-callback panics so a hiccup can't abort the app",
      "Recording: finalizes recorder teardown on a path independent of device disconnects",
      "Hotkeys: wraps the Windows low-level keyboard hook so a hook failure can't take down input",
      "Transcription: hard-timeouts in-process Whisper decoding to stop indefinite \"Transcribing…\" hangs, and aborts the watchdog before remapping completed results",
      "Hotkeys: single-tap triggers now work in onboarding, matching the Shortcuts page",
      "Settings: avoids a window-state panic when changing the pill offset",
      "Models: keeps a known model selected on startup, opens native microphone settings, and shows animated progress for Parakeet downloads",
      "Onboarding: exposes the model Repair action for parity with the dashboard",
      "Permissions: routes grant buttons to the native settings panes",
    ],
  },
  {
    version: "2.0.0",
    date: "2026-06-25",
    latest: false,
    highlights: [
      "Cloud speech-to-text arrives: Soniox, OpenAI, Groq, Deepgram, and Cohere, alongside local models",
      "AI polish rebuilt natively in Rust, with a unified transcription engine spanning local, cloud, and remote",
      "A new CLI, speaker diarization, richer history, and Windows GPU/CPU acceleration",
    ],
    features: [
      "Speech-to-text: adds cloud transcription providers — Soniox, OpenAI, Groq, Deepgram, and Cohere — selectable per recording",
      "AI formatting: rebuilds AI polish natively in Rust for OpenAI, Anthropic, Gemini, and custom OpenAI-compatible endpoints, with a searchable model catalog and a deterministic fallback when formatting fails",
      "Transcription: unifies local, cloud, and remote transcription behind one engine, with cancel-anywhere, a decode watchdog, silence handling, and device-disconnect recovery",
      "Upload: adds cloud speaker diarization for file uploads (Deepgram, Soniox), producing speaker-attributed transcripts you can save as .txt or .md",
      "CLI: installs the `voicetypr` command on your PATH so terminals, scripts, and AI agents can drive transcription directly, with consistent --json output",
      "History: stores rich per-entry metadata (source, engine, language, duration, diarized) with source, app, and date filters, plus a Show original / Show formatted toggle",
      "Windows: choose GPU, CPU, or Auto transcription acceleration in Settings and onboarding",
      "Shortcuts: streamlines the recording shortcut to one flow, with first-class single-key push-to-talk, a bindable Toggle AI formatting key, and lone-modifier hold-to-talk",
    ],
    fixes: [
      "Transcription: shows short, plain messages in the recording overlay instead of long internal error strings, pointing auth and model failures to Settings",
      "AI: validates custom OpenAI-compatible connections the way formatting actually runs, so Test no longer falsely passes on a public models list",
    ],
  },
  {
    version: "1.13.0",
    date: "2026-06-15",
    latest: false,
    highlights: [
      "A quiet pause no longer throws away your recording — silence now shows a non-destructive warning",
      "Bug reports include full system specs (GPU, CPU, model) for faster support",
      "More reliable recovery from stuck or auto-stopped recordings",
    ],
    features: [
      "Recording: replaces the destructive silence auto-stop with non-destructive warnings, so a quiet pause no longer discards in-progress audio",
      "Bug reports: collect full system specs (GPU, CPU, model) so issues are faster to diagnose",
    ],
    fixes: [
      "Recording: recovers from autonomous recorder stops that previously left recording stuck",
      "Recording: runs stop cleanup on the recorder-error path so a failed recorder no longer hangs the session",
      "Recording: requires sustained voice before treating audio as speech, reducing false starts from brief noise",
      "Windows: pauses media players that under-report pause support while recording",
      "Bug reports: skip software display adapters during GPU detection so the real GPU is reported",
    ],
  },
  {
    version: "1.12.10",
    date: "2026-06-10",
    latest: false,
    highlights: [
      "Local Whisper transcription no longer gets stuck in Transcribing on slow CPU-only systems",
      "Short CPU dictation is faster by avoiding hidden Whisper retry passes",
      "No-speech and timeout cases now give clearer feedback instead of silently inserting nothing",
    ],
    fixes: [
      "Transcription: disables Whisper temperature fallback retries for the CPU profile to reduce latency on short recordings",
      "Transcription: adds bounded timeout and cooperative cancellation handling for local Whisper recording transcription",
      "Feedback: treats empty output, [SOUND], and [BLANK_AUDIO] as no-speech cases with a clear message",
      "Release: pins Windows CI and release runners to VS 2022 so Windows builds do not fail on unsupported VS 2026 CMake generator detection",
    ],
  },
  {
    version: "1.12.9",
    date: "2026-06-08",
    latest: false,
    highlights: [
      "Model downloads now verify against current upstream checksums",
      "Windows toggle hotkeys no longer start and immediately stop from repeated key events",
      "Onboarding shows clearer download errors and only continues once a model is ready",
    ],
    fixes: [
      "Models: replaces stale checksum metadata so valid Whisper downloads are no longer deleted after verification",
      "Onboarding: surfaces terminal download errors and aligns model readiness with the main Models tab",
      "Windows: ignores duplicate toggle hotkey press events while the shortcut is held, preventing empty recordings",
    ],
  },
  {
    version: "1.12.8",
    date: "2026-06-05",
    latest: false,
    highlights: [
      "Model management stays responsive during downloads",
      "Settings can refresh model status without interrupting an active download",
    ],
    fixes: [
      "Models: keeps the UI responsive while a download is in progress",
      "Downloads: prevents status refreshes from racing active model operations",
    ],
  },
  {
    version: "1.12.7",
    date: "2026-06-05",
    latest: false,
    highlights: [
      "Windows model downloads and catalog metadata repaired",
      "Windows Vulkan sidecar warm-up is safer and less noisy",
    ],
    fixes: [
      "Windows: repairs local model catalog downloads and related runtime packaging",
      "Windows: warms the optional Vulkan sidecar more reliably without making the main app depend on Vulkan",
      "Updater: backs out a passive installer path that could hide elevation prompts on some machines",
    ],
  },
  {
    version: "1.12.6",
    date: "2026-06-04",
    latest: false,
    highlights: [
      "Windows transcription fallback is faster and safer on machines without GPU acceleration",
    ],
    fixes: [
      "Windows: optimizes transcription fallback so CPU-only recovery is more usable when GPU acceleration is unavailable",
    ],
  },
  {
    version: "1.12.5",
    date: "2026-06-02",
    latest: false,
    highlights: [
      "Windows GPU transcription hotfix for the 1.12.4 Vulkan sidecar regression",
      "Successful Vulkan sidecar responses now parse correctly instead of falling back to slow CPU mode",
    ],
    fixes: [
      "Windows: fixes Vulkan sidecar timing fields so GPU responses parse correctly",
      "Transcription: prevents the 1.12.4 GPU path from falling back to unusably slow CPU transcription after successful sidecar work",
    ],
  },
  {
    version: "1.12.4",
    date: "2026-06-01",
    latest: false,
    highlights: [
      "Windows now launches safely on machines without Vulkan drivers",
      "Updates ask before downloading or installing unless automatic installs are enabled",
      "Hotkey and push-to-talk reliability improvements with better support diagnostics",
    ],
    features: [
      "AI: restored the native Anthropic provider with current model aliases",
    ],
    fixes: [
      "Windows: moved optional Vulkan Whisper acceleration into a sidecar so the main app remains CPU-safe",
      "Updater: shows update availability without silently downloading or installing by default",
      "Windows: fixed updater elevation by using the basic UI installer flow",
      "Recording: prevents duplicate push-to-talk press events from starting overlapping flows",
      "Support: adds hotkey diagnostics/report context for shortcut failures",
      "macOS: keeps Parakeet sidecar JSON responses clean when CoreML emits native diagnostics",
    ],
  },
  {
    version: "1.12.3",
    date: "2026-04-29",
    latest: false,
    highlights: [
      "Auto-paste toggle so transcripts can land in history without inserting into the active app",
      "In-app bug and crash reports with redacted log excerpt and system info",
    ],
    features: [
      "Settings: auto-paste toggle keeps transcripts in history without auto-inserting them",
      "Support: in-app bug and crash report submission with system info and a redacted app-log excerpt",
    ],
    fixes: [
      "Support: hardened report validation, stale-submit guards, fallback behavior, and log redaction",
      "Settings: restored scrolling on Upload, General, Help, Advanced, and Formatting pages after the sidebar layout change",
    ],
  },
  {
    version: "1.12.2",
    date: "2026-04-27",
    highlights: [
      "Long recordings no longer truncate — captures hold their full length",
      "Sentence spacing preserved on insert; punctuation matches the host app",
      "Windows: WebView2 offline installer bundled for clean first-run installs",
    ],
    fixes: [
      "Transcription: fixes truncation in long recordings; preserves explicit insertion boundaries",
      "Transcription: preserves sentence spacing on insert and uses compatible punctuation matching",
      "Recording: hardened push-to-talk startup, license fallback, and abort handling",
      "Windows: reduced crash paths and bundled the WebView2 offline installer for clean first-run installs",
      "UI: kept sidebar navigation accessible and routed settings nav to the correct tab",
      "License: shows the Manage License button when a license is already active",
      "AI: persists AI formatting across restart by warming cached credentials from secure storage",
      "Updater: removed stale v1 dialog config and uses a versioned update marker for post-update UX",
      "Autostart: moved autostart toggles to backend-owned commands for atomic OS state management",
    ],
  },
  {
    version: "1.12.1",
    date: "2026-02-22",
    highlights: ["GPT-5 token + temperature compatibility for OpenAI users"],
    fixes: [
      "OpenAI: handles token and temperature compatibility for gpt-5",
    ],
    breaking: [
      "AI: removed the standalone Anthropic provider — Anthropic models still reachable via OpenAI-compatible config",
    ],
  },
  {
    version: "1.12.0",
    date: "2026-02-21",
    highlights: [
      "Intel Mac (x86_64) support",
      "Multi-provider AI formatting: OpenAI, Anthropic, Gemini, with curated model lists",
      "Pause-media-during-recording so podcasts don't talk over you",
    ],
    features: [
      "macOS: Intel Mac (x86_64) support",
      "AI: multi-provider AI formatting (OpenAI, Anthropic, Gemini) with curated model lists",
      "AI: language-aware formatting and stale microphone validation",
      "Recording: sound-on-end with toggle, plus a pill indicator mode dropdown (Never / Always / When Recording)",
      "Recording: indicator position setting with 6 options and configurable edge offset",
      "Audio: pause media during recording so background audio doesn't talk over your captures",
      "Crash reporter UI with GitHub issue integration",
    ],
    fixes: [
      "Windows: ARM64 crash fix — Vulkan GPU disabled, CPU threads optimized",
      "Windows: bundled runtime, hardened fresh-install behavior, hides console flash on recording start",
      "Audio: prevents app hang when an audio device doesn't respond to cleanup; platform-specific stream cleanup",
      "Audio: delay after start sound for Bluetooth headset compatibility",
      "Media: improved pause/resume reliability; uses osascript playback toggle on macOS",
      "AI: isolates custom and OpenAI provider key/config handling",
      "UI: removed unwanted white ring border; consistent ring styling on pill and toast",
      "UI: slider now shows a single value instead of a range",
      "Networking: per-request HTTP clients; media resumes on recording errors",
    ],
  },
  {
    version: "1.11.2",
    date: "2025-12-16",
    highlights: [
      "Session-aware auto-updates with notification support",
      "macOS: dock icon now follows main window visibility",
    ],
    features: [
      "Updater: session-aware auto-updates with notification support",
      "macOS: dock icon toggles based on main window visibility",
    ],
    fixes: [
      "Updater: auto-installs updates in the background; About section uses the unified update service",
      "Windows signing: avoids dropping empty password; uses pnpm tauri signer; correct key file path flag",
    ],
  },
  {
    version: "1.11.1",
    date: "2025-12-14",
    highlights: [
      "Pill UI simplified to a 3-dot indicator with a separate toast window",
      "Critical events queue for reliable delivery",
      "Clipboard retention preference",
    ],
    features: [
      "Pill UI simplified to a minimal 3-dot indicator with a separate toast window",
      "Pill/toast moves lower on screen and auto-repositions on monitor change",
      "Critical pill events queue for reliable delivery",
      "Clipboard retention preference",
      "AI model availability and auto-selection improvements",
    ],
    fixes: [
      "Microphone permission prompts deferred until onboarding completes",
      "Audio device listeners clean up properly",
      "AI config auto-selection improvements",
      "OpenAI config UX: Update button, better switch visibility",
      "Recording feedback: sound, throttle, and duration gates",
      "Toast notification: dynamic width and clearer error messages",
      "Recording errors routed via pill toast",
      "Microphone list synced with system",
      "Watchdog timeout treated as the only timeout signal",
      "Windows: device ID fallback and license status timeout",
      "Logs: API keys redacted",
      "License: error and reset edge cases hardened",
    ],
  },
  {
    version: "1.10.0",
    date: "2025-10-24",
    highlights: [
      "Parakeet MLX sidecar integration for Apple Silicon",
      "Parakeet v2/v3 with version-aware download/load/delete",
      "Tray model selection unified with the dashboard",
    ],
    features: [
      "Parakeet MLX sidecar integration (macOS Apple Silicon)",
      "Parakeet v2/v3 version-aware download / load / delete with FluidAudio 0.6.1",
      "Tray: unified model selection that stays in sync with the dashboard",
      "Replaced Python Parakeet with a Swift / FluidAudio implementation",
      "Windows: updated bundled ffmpeg",
    ],
    fixes: [
      "Audio: prevents empty / ultra-short recordings from erroring; mode-specific min durations (PTT ≥ 1s, Toggle ≥ 3s); auto-recovers Error → Idle",
      "macOS: bundles ffmpeg/ffprobe via platform config so packaged-app normalization works",
      "Parakeet: model selection persists across restarts",
      "Parakeet: scoped to macOS builds; sidecar build issues resolved",
      "Tray: gates selection until onboarding completes",
    ],
  },
];
