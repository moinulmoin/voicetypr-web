"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DEFAULT_DICTATION_WPM,
  DEFAULT_TYPING_WPM,
  calculateDictationVsTyping,
  formatHours,
  formatMinutes,
} from "@/lib/free-tools-calculations";

const fieldClass =
  "h-11 border-editorial-line bg-white text-editorial-ink shadow-none focus-visible:border-editorial-ink";

export function DictationVsTypingTool() {
  const [wordsPerDay, setWordsPerDay] = useState("3000");
  const [typingWpm, setTypingWpm] = useState(String(DEFAULT_TYPING_WPM));
  const [dictationWpm, setDictationWpm] = useState(String(DEFAULT_DICTATION_WPM));
  const [hourlyRate, setHourlyRate] = useState("");

  const result = useMemo(() => {
    return calculateDictationVsTyping({
      wordsPerDay: Number(wordsPerDay),
      typingWpm: Number(typingWpm),
      dictationWpm: Number(dictationWpm),
      hourlyRate: hourlyRate ? Number(hourlyRate) : undefined,
    });
  }, [dictationWpm, hourlyRate, typingWpm, wordsPerDay]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-2xl border border-editorial-line bg-white/82 p-5 backdrop-blur">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="words-per-day">Words written per day</Label>
            <Input
              id="words-per-day"
              type="number"
              min={100}
              value={wordsPerDay}
              onChange={(e) => setWordsPerDay(e.target.value)}
              className={fieldClass}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="typing-wpm">Your typing speed (WPM)</Label>
            <Input
              id="typing-wpm"
              type="number"
              min={10}
              value={typingWpm}
              onChange={(e) => setTypingWpm(e.target.value)}
              className={fieldClass}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dictation-wpm">Dictation speed (WPM)</Label>
            <Input
              id="dictation-wpm"
              type="number"
              min={40}
              value={dictationWpm}
              onChange={(e) => setDictationWpm(e.target.value)}
              className={fieldClass}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hourly-rate">Hourly value (optional)</Label>
            <Input
              id="hourly-rate"
              type="number"
              min={0}
              placeholder="e.g. 75"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className={fieldClass}
            />
          </div>
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-editorial-ink-3">
          Defaults assume ~45 WPM typing and ~120 WPM comfortable dictation. Adjust to your real numbers.
        </p>
      </div>

      <div className="rounded-2xl border border-editorial-line bg-editorial-surface-2 p-5">
        {result ? (
          <div className="space-y-4">
            <div>
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                Time saved per day
              </div>
              <div className="mt-1 text-[34px] font-semibold tracking-tight text-editorial-ink">
                {formatMinutes(result.minutesSavedPerDay)}
              </div>
            </div>
            <div className="grid gap-3 text-[14px] text-editorial-ink-2">
              <p>Typing: {formatMinutes(result.typingMinutesPerDay)} / day</p>
              <p>Dictation: {formatMinutes(result.dictationMinutesPerDay)} / day</p>
              <p>Annual time back: {formatHours(result.hoursSavedPerYear)}</p>
              <p>Speed multiplier: {result.speedMultiplier.toFixed(1)}x</p>
              {result.moneySavedPerYear ? (
                <p>Estimated annual value: ${Math.round(result.moneySavedPerYear).toLocaleString()}</p>
              ) : null}
            </div>
            <Link
              href="/download"
              className="inline-flex h-10 items-center rounded-md bg-editorial-ink px-4 text-sm font-medium text-white transition hover:opacity-90"
            >
              Try VoiceTypr free
            </Link>
          </div>
        ) : (
          <p className="text-[14px] text-editorial-ink-2">Enter valid numbers to see your estimate.</p>
        )}
      </div>
    </div>
  );
}
