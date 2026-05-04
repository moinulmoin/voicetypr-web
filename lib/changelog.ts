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
    version: "1.12.3",
    date: "2026-04-29",
    latest: true,
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

export function getLatestVersion(): ChangelogEntry | null {
  return CHANGELOG[0] ?? null;
}
