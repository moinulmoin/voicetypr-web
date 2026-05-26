"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  countLines,
  countSentences,
  countWords,
  estimateTokens,
  formatReadingMinutes,
} from "@/lib/free-tools-calculations";

const textareaClass =
  "min-h-[200px] w-full resize-none overflow-hidden rounded-2xl border border-editorial-line bg-white px-4 py-3 text-[15px] leading-relaxed text-editorial-ink outline-none focus-visible:border-editorial-ink";

export function PromptLengthCounter() {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  useEffect(() => {
    resizeTextarea();
  }, [text, resizeTextarea]);

  const stats = useMemo(() => {
    const characters = text.length;
    const words = countWords(text);
    const lines = countLines(text);
    const sentences = countSentences(text);
    const tokens = estimateTokens(text);
    const readingTime = formatReadingMinutes(words);

    return { characters, words, lines, sentences, tokens, readingTime };
  }, [text]);

  const statItems = [
    { label: "Characters", value: stats.characters.toLocaleString() },
    { label: "Words", value: stats.words.toLocaleString() },
    { label: "Lines", value: stats.lines.toLocaleString() },
    { label: "Sentences", value: stats.sentences.toLocaleString() },
    { label: "Est. tokens", value: stats.tokens.toLocaleString() },
    { label: "Reading time", value: stats.readingTime },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-editorial-line bg-white/82 p-5 backdrop-blur">
        <label htmlFor="prompt-input" className="text-[13px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
          Your prompt
        </label>
        <textarea
          ref={textareaRef}
          id="prompt-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your AI prompt here. Stats update as you write."
          aria-label="Prompt text"
          className={`mt-3 ${textareaClass}`}
        />
        <p className="mt-3 text-[13px] leading-relaxed text-editorial-ink-3">
          Token estimate is a rough heuristic for English. Different models tokenize differently.
        </p>
      </div>

      <div aria-live="polite" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {statItems.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-editorial-line bg-editorial-surface-2 px-4 py-3"
          >
            <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
              {item.label}
            </div>
            <div className="mt-1 text-[26px] font-semibold tracking-tight text-editorial-ink">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-editorial-line bg-white/82 px-5 py-4 backdrop-blur">
        <Link
          href="/download"
          className="inline-flex h-9 items-center rounded-md bg-editorial-ink px-3.5 text-[13px] font-medium text-white transition hover:opacity-90"
        >
          Dictate longer prompts faster with VoiceTypr
        </Link>
        <Link
          href="/voice-input-for-cursor"
          className="text-[13px] font-medium text-editorial-ink underline decoration-editorial-ink/25 underline-offset-4 transition hover:decoration-editorial-ink"
        >
          Voice input for Cursor
        </Link>
      </div>
    </div>
  );
}
