"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, Cpu, Sparkles, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  WPM Compare — animated bar chart                                   */
/* ------------------------------------------------------------------ */

function WPMCompare() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const rows = [
    { lab: "Handwriting", wpm: 18, w: 9, hl: false },
    { lab: "Typing (avg)", wpm: 40, w: 21, hl: false },
    { lab: "Typing (fast)", wpm: 75, w: 40, hl: false },
    { lab: "VoiceTypr voice", wpm: 190, w: 100, hl: true },
  ];

  return (
    <div
      ref={ref}
      className="bg-editorial-surface border border-editorial-line rounded-[20px] p-8 md:p-9"
    >
      <div className="ed-label mb-5">Benchmark &middot; words per minute</div>
      <h3
        className="font-serif text-[26px] leading-[1.1] mb-6"
      >
        Your mouth is faster than your fingers.
      </h3>

      <div>
        {rows.map((r, i) => (
          <div
            key={i}
            className="flex items-center gap-3.5 mb-4 last:mb-0"
          >
            <div className="w-[110px] text-sm text-editorial-ink-2 font-medium">
              {r.lab}
            </div>
            <div className="flex-1 h-[30px] bg-editorial-surface-2 rounded-lg relative overflow-hidden">
              <div
                className={`h-full rounded-lg flex items-center justify-end px-2.5 font-mono font-medium text-[11px] transition-[width] duration-[1.2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                  r.hl
                    ? "bg-editorial-accent text-white"
                    : "bg-editorial-line-2 text-editorial-ink"
                }`}
                style={{
                  width: visible ? `${r.w}%` : "0%",
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                {r.hl && visible && "fastest"}
              </div>
            </div>
            <div className="w-[90px] text-right font-mono font-medium text-sm text-editorial-ink">
              {r.wpm} wpm
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-dashed border-editorial-line text-editorial-ink-2 text-sm">
        Benchmarks: internal testing + 412 beta users. Your mileage depends on
        how much coffee.
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Flow Diagram — 4-node architecture grid                            */
/* ------------------------------------------------------------------ */

function FlowDiagram() {
  const nodes = [
    {
      badge: "capture",
      Icon: Mic,
      title: "Press your hotkey + speak",
      body: "Global hotkey (\u2318\u21E7Space default) fires in any app \u2014 Mac or Windows, browser, IDE, Slack.",
    },
    {
      badge: "on device",
      Icon: Cpu,
      title: "Whisper runs locally",
      body: "Audio never leaves your machine. No cloud round-trip, no API bills, no subscription.",
    },
    {
      badge: "format",
      Icon: Sparkles,
      title: "Optional AI polish",
      body: "Default, Prompts, Email, or Commit. Text (not audio) goes to your chosen AI provider \u2014 Gemini, OpenAI, or any OpenAI-compatible API (Groq, Ollama). Toggle off to keep raw.",
    },
    {
      badge: "paste",
      Icon: ArrowRight,
      title: "Appears where your cursor is",
      body: "Native paste on Mac + Windows. Feels like you typed it. Your colleagues can\u2019t tell.",
    },
  ];

  return (
    <div className="bg-editorial-surface border border-editorial-line rounded-[20px] p-8 md:p-9">
      <div className="ed-label mb-2">
        Architecture &middot; how the sausage is made
      </div>
      <h3 className="font-serif text-[26px] mb-1">Sound in. Text out. No detours.</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 mt-5 items-stretch">
        {nodes.map((n, i) => (
          <div
            key={i}
            className="bg-editorial-surface-2 border border-editorial-line rounded-xl p-4 relative"
          >
            <div className="absolute top-2.5 right-2.5 font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] text-editorial-accent bg-editorial-accent-wash px-1.5 py-1 rounded">
              {n.badge}
            </div>
            <div className="w-9 h-9 rounded-lg bg-editorial-surface border border-editorial-line grid place-items-center mb-3 text-editorial-ink">
              <n.Icon size={16} strokeWidth={1.75} />
            </div>
            <h5 className="font-sans font-semibold text-[13px] leading-[1.2] mb-1.5 text-editorial-ink">
              {n.title}
            </h5>
            <p className="text-[12px] leading-[1.5] text-editorial-ink-2">
              {n.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between font-mono text-[11px] uppercase tracking-[0.1em] text-editorial-ink-3">
        <span>&rarr; runs 100% offline</span>
        <span>&rarr; zero bytes leave device</span>
        <span>&rarr; mac + windows native</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Day In Life — timeline comparison                                  */
/* ------------------------------------------------------------------ */

function DayInLife() {
  const typingDay = [
    { label: "Slack triage", w: 22, kind: "t" as const },
    { label: "Standup notes", w: 10, kind: "t" as const },
    { label: "Spec draft", w: 26, kind: "t" as const },
    { label: "Email + replies", w: 18, kind: "t" as const },
    { label: "PR reviews", w: 14, kind: "t" as const },
  ];

  const voiceDay = [
    { label: "Slack", w: 8, kind: "v" as const },
    { label: "Notes", w: 3, kind: "v" as const },
    { label: "Spec", w: 9, kind: "v" as const },
    { label: "Email", w: 6, kind: "v" as const },
    { label: "PR", w: 5, kind: "v" as const },
  ];

  return (
    <div className="bg-editorial-surface border border-editorial-line rounded-[20px] p-8 md:p-9">
      <div className="ed-label mb-5">
        A day with VoiceTypr &middot; 9 AM &rarr; 6 PM
      </div>
      <h3 className="font-serif text-[26px] mb-1">
        Get ~93 minutes of your life back.
      </h3>

      {/* Timeline */}
      <div className="grid grid-cols-[60px_1fr] gap-x-4 gap-y-3 items-center mt-5">
        {/* Typing row */}
        <div className="text-right font-mono text-xs font-medium text-editorial-ink-3">
          TYPING
        </div>
        <div className="h-8 min-w-0 overflow-hidden rounded-lg bg-editorial-surface-2 flex items-center gap-1.5 px-1">
          {typingDay.map((c, i) => (
            <div
              key={i}
              className="h-[22px] min-w-0 rounded-md px-2 sm:px-2.5 flex items-center text-[11px] sm:text-[11.5px] font-medium whitespace-nowrap overflow-hidden text-ellipsis bg-[#d8cfbb] text-editorial-ink"
              style={{ width: `${c.w}%` }}
            >
              {c.label}
            </div>
          ))}
        </div>

        {/* Voice row */}
        <div className="text-right font-mono text-xs font-medium text-editorial-ink-3">
          VOICE
        </div>
        <div className="h-8 min-w-0 overflow-hidden rounded-lg bg-editorial-surface-2 flex items-center gap-1.5 px-1">
          {voiceDay.map((c, i) => (
            <div
              key={i}
              className="h-[22px] min-w-0 rounded-md px-2 sm:px-2.5 flex items-center text-[11px] sm:text-[11.5px] font-medium whitespace-nowrap overflow-hidden text-ellipsis bg-editorial-accent text-white"
              style={{ width: `${c.w}%` }}
            >
              {c.label}
            </div>
          ))}
          <div
            className="h-[22px] min-w-0 rounded-md px-2 sm:px-2.5 flex items-center text-[11px] sm:text-[11.5px] font-medium whitespace-nowrap overflow-hidden text-ellipsis border border-dashed border-editorial-line-2 text-editorial-ink-3 bg-transparent"
            style={{ width: "69%" }}
          >
            &#8593; reclaimed: 93 min
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-3.5 pt-5 border-t border-dashed border-editorial-line">
        {[
          { num: "93", unit: "min", label: "Saved per workday" },
          { num: "7.8", unit: "hrs", label: "Reclaimed per week" },
          { num: "21", unit: "days", label: "Per year, not typing" },
        ].map((s, i) => (
          <div key={i}>
            <div className="font-serif text-[38px] leading-none text-editorial-accent">
              {s.num}
              <span className="text-[18px]">{s.unit}</span>
            </div>
            <div className="ed-label mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Infographics — main section export                                 */
/* ------------------------------------------------------------------ */

export default function Infographics() {
  return (
    <section className="ed-section">
      <div className="ed-container">
        <p className="ed-eyebrow">the receipts &middot; three ways to see the gap</p>
        <h2
          className="font-serif text-[clamp(38px,4vw,60px)] leading-[1] mb-9 max-w-[720px]"
        >
          Different charts, same conclusion.
        </h2>

        <div className="grid grid-cols-1 gap-5">
          <WPMCompare />
          <FlowDiagram />
          <DayInLife />
        </div>
      </div>
    </section>
  );
}
