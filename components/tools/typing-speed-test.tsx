"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_DICTATION_WPM,
  calculateTypingSpeedWpm,
  countWords,
} from "@/lib/free-tools-calculations";

const PROMPT =
  "Voice typing helps founders move faster when the cursor is already in the right place and the draft needs to ship today.";

const TEST_DURATION_SECONDS = 10;

type Phase = "idle" | "running" | "done";

export function TypingSpeedTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [secondsLeft, setSecondsLeft] = useState(TEST_DURATION_SECONDS);
  const [text, setText] = useState("");

  const uiPhase: Phase =
    phase === "idle" ? "idle" : phase === "running" && secondsLeft > 0 ? "running" : "done";

  useEffect(() => {
    if (phase !== "running" || secondsLeft <= 0) return;
    const timer = window.setTimeout(() => setSecondsLeft((seconds) => seconds - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [phase, secondsLeft]);

  const wpm = useMemo(() => {
    if (uiPhase !== "done") return null;
    return calculateTypingSpeedWpm(countWords(text), TEST_DURATION_SECONDS);
  }, [uiPhase, text]);

  const start = () => {
    setText("");
    setSecondsLeft(TEST_DURATION_SECONDS);
    setPhase("running");
  };

  const reset = () => {
    setText("");
    setSecondsLeft(TEST_DURATION_SECONDS);
    setPhase("idle");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-editorial-line bg-white/82 px-5 py-4 backdrop-blur">
        <div>
          <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">Timer</div>
          <div className="text-[32px] font-semibold tracking-tight text-editorial-ink">
            {uiPhase === "running" ? `${secondsLeft}s` : uiPhase === "done" ? "Done" : `${TEST_DURATION_SECONDS}s`}
          </div>
        </div>
        <div className="flex gap-2">
          {uiPhase === "idle" ? (
            <Button onClick={start} className="bg-editorial-ink text-white hover:opacity-90">
              Start test
            </Button>
          ) : null}
          {uiPhase === "done" ? (
            <Button variant="outline" onClick={reset} className="border-editorial-line">
              Run again
            </Button>
          ) : null}
        </div>
      </div>

      <div className="rounded-2xl border border-editorial-line bg-editorial-surface-2 p-5">
        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">Prompt</p>
        <p className="mt-2 text-[15px] leading-relaxed text-editorial-ink-2">{PROMPT}</p>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={uiPhase !== "running"}
        aria-label="Type the prompt here"
        placeholder={
          uiPhase === "idle"
            ? "Press Start test, then type here for 10 seconds."
            : "Type the prompt here..."
        }
        className="min-h-[180px] w-full rounded-2xl border border-editorial-line bg-white px-4 py-3 text-[15px] leading-relaxed text-editorial-ink outline-none focus-visible:border-editorial-ink disabled:cursor-not-allowed disabled:bg-editorial-surface-2"
      />

      {uiPhase === "done" && wpm !== null ? (
        <div
          role="status"
          aria-live="polite"
          className="space-y-4 rounded-2xl border border-editorial-line bg-white/82 p-5"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">Your speed</div>
              <div className="mt-1 text-[34px] font-semibold tracking-tight text-editorial-ink">{wpm} WPM</div>
            </div>
            <div>
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">Typical dictation</div>
              <div className="mt-1 text-[34px] font-semibold tracking-tight text-editorial-ink">
                ~{DEFAULT_DICTATION_WPM} WPM
              </div>
              <p className="mt-2 text-[14px] text-editorial-ink-2">
                {wpm > 0 ? `Roughly ${(DEFAULT_DICTATION_WPM / wpm).toFixed(1)}x faster when you dictate instead.` : null}
              </p>
            </div>
          </div>
          <Link
            href="/download"
            className="inline-flex h-10 items-center rounded-md bg-editorial-ink px-4 text-sm font-medium text-white transition hover:opacity-90"
          >
            Try VoiceTypr free
          </Link>
        </div>
      ) : null}
    </div>
  );
}
