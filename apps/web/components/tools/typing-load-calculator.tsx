"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateTypingLoad } from "@/lib/free-tools-calculations";

const fieldClass =
  "h-11 border-border bg-card text-foreground shadow-none focus-visible:border-foreground";

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
      <div className="rounded-2xl border border-border bg-card p-5">
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

      <div className="rounded-2xl border border-border bg-muted p-5">
        {result ? (
          <div className="space-y-4">
            <div>
              <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Weekly keyboard load
              </div>
              <div className="mt-1 text-[30px] font-semibold tracking-tight text-foreground">
                {result.label}
              </div>
              <p className="mt-1 text-[14px] text-muted-foreground">{result.weeklyHours.toFixed(1)} hours / week</p>
            </div>
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              Suggested breaks: about {result.breakMinutesPerHour} minutes per hour away from the keyboard.
            </p>
            <p className="text-[14px] leading-relaxed text-muted-foreground">{result.recommendation}</p>
            <div className="flex flex-col items-start gap-3">
              <Link
                href="/download"
                className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Try Voicetypr free
              </Link>
              <Link
                href="/use-cases/rsi"
                className="text-[13px] text-muted-foreground underline-offset-2 transition hover:text-foreground hover:underline"
              >
                See the RSI use case
              </Link>
            </div>
          </div>
        ) : (
          <p className="text-[14px] text-muted-foreground">Enter valid numbers to see your load estimate.</p>
        )}
      </div>
    </div>
  );
}
