"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateTypingLoad } from "@/lib/free-tools-calculations";

const fieldClass =
  "h-11 border-editorial-line bg-white text-editorial-ink shadow-none focus-visible:border-editorial-ink";

export function TypingLoadCalculator() {
  const [hoursTypingPerDay, setHoursTypingPerDay] = useState("4");
  const [daysPerWeek, setDaysPerWeek] = useState("5");

  const result = useMemo(() => {
    return calculateTypingLoad({
      hoursTypingPerDay: Number(hoursTypingPerDay),
      daysPerWeek: Number(daysPerWeek),
    });
  }, [daysPerWeek, hoursTypingPerDay]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-2xl border border-editorial-line bg-white/82 p-5 backdrop-blur">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="hours-per-day">Hours typing per day</Label>
            <Input
              id="hours-per-day"
              type="number"
              min={0}
              step={0.5}
              value={hoursTypingPerDay}
              onChange={(e) => setHoursTypingPerDay(e.target.value)}
              className={fieldClass}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="days-per-week">Days per week</Label>
            <Input
              id="days-per-week"
              type="number"
              min={1}
              max={7}
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(e.target.value)}
              className={fieldClass}
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-editorial-line bg-editorial-surface-2 p-5">
        {result ? (
          <div className="space-y-4">
            <div>
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
                Weekly keyboard load
              </div>
              <div className="mt-1 text-[30px] font-semibold tracking-tight text-editorial-ink">
                {result.label}
              </div>
              <p className="mt-1 text-[14px] text-editorial-ink-2">{result.weeklyHours.toFixed(1)} hours / week</p>
            </div>
            <p className="text-[14px] leading-relaxed text-editorial-ink-2">
              Suggested breaks: about {result.breakMinutesPerHour} minutes per hour away from the keyboard.
            </p>
            <p className="text-[14px] leading-relaxed text-editorial-ink-2">{result.recommendation}</p>
            <div className="flex flex-col items-start gap-3">
              <Link
                href="/download"
                className="inline-flex h-10 items-center rounded-md bg-editorial-ink px-4 text-sm font-medium text-white transition hover:opacity-90"
              >
                Try VoiceTypr free
              </Link>
              <Link
                href="/use-cases/rsi"
                className="text-[13px] text-editorial-ink-3 underline-offset-2 transition hover:text-editorial-ink-2 hover:underline"
              >
                See the RSI use case
              </Link>
            </div>
          </div>
        ) : (
          <p className="text-[14px] text-editorial-ink-2">Enter valid numbers to see your load estimate.</p>
        )}
      </div>
    </div>
  );
}
