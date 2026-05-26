import { describe, expect, it } from "vitest";

import {
  DEFAULT_DICTATION_WPM,
  DEFAULT_TYPING_WPM,
  DEFAULT_WORK_DAYS_PER_YEAR,
  calculateDictationVsTyping,
  calculateTypingLoad,
  calculateTypingSpeedWpm,
  countLines,
  countSentences,
  countWords,
  estimateTokens,
  formatHours,
  formatReadingMinutes,
  formatMinutes,
} from "./free-tools-calculations";

describe("free tools calculations", () => {
  it("counts words in a prompt", () => {
    expect(countWords("one two three")).toBe(3);
    expect(countWords("  spaced   words  ")).toBe(2);
  });

  it("estimates tokens with a chars-per-4 heuristic", () => {
    expect(estimateTokens("")).toBe(0);
    expect(estimateTokens("abcd")).toBe(1);
    expect(estimateTokens("abcde")).toBe(2);
    expect(estimateTokens("a".repeat(400))).toBe(100);
  });

  it("counts sentences from punctuation boundaries", () => {
    expect(countSentences("")).toBe(0);
    expect(countSentences("One sentence.")).toBe(1);
    expect(countSentences("First line. Second line! Third?")).toBe(3);
    expect(countSentences("No ending punctuation")).toBe(1);
  });

  it("counts lines including blank trailing lines", () => {
    expect(countLines("")).toBe(0);
    expect(countLines("single line")).toBe(1);
    expect(countLines("line one\nline two")).toBe(2);
    expect(countLines("line one\nline two\n")).toBe(3);
  });

  it("formats reading time at 200 wpm by default", () => {
    expect(formatReadingMinutes(0)).toBe("0 min read");
    expect(formatReadingMinutes(50)).toBe("< 1 min read");
    expect(formatReadingMinutes(200)).toBe("1 min read");
    expect(formatReadingMinutes(400)).toBe("2 min read");
    expect(formatReadingMinutes(12000)).toBe("1h read");
    expect(formatReadingMinutes(100, 100)).toBe("1 min read");
  });

  it("calculates typing speed in wpm", () => {
    expect(calculateTypingSpeedWpm(50, 60)).toBe(50);
  });

  it("returns zero typing speed for invalid durations", () => {
    expect(calculateTypingSpeedWpm(50, 0)).toBe(0);
    expect(calculateTypingSpeedWpm(50, -10)).toBe(0);
  });

  it("formats minutes and hours for display", () => {
    expect(formatMinutes(0)).toBe("0 min");
    expect(formatMinutes(45)).toBe("45 min");
    expect(formatMinutes(90)).toBe("1h 30m");
    expect(formatMinutes(Number.NaN)).toBe("0 min");
    expect(formatHours(0.5)).toBe("30 min");
    expect(formatHours(2.3)).toBe("2.3 hours");
    expect(formatHours(-1)).toBe("0 min");
  });

  it("compares dictation and typing time with defaults", () => {
    const result = calculateDictationVsTyping({ wordsPerDay: 3000 });

    expect(result).toMatchObject({
      typingMinutesPerDay: 3000 / DEFAULT_TYPING_WPM,
      dictationMinutesPerDay: 3000 / DEFAULT_DICTATION_WPM,
      minutesSavedPerDay: 3000 / DEFAULT_TYPING_WPM - 3000 / DEFAULT_DICTATION_WPM,
      hoursSavedPerYear: ((3000 / DEFAULT_TYPING_WPM - 3000 / DEFAULT_DICTATION_WPM) * DEFAULT_WORK_DAYS_PER_YEAR) / 60,
    });
  });

  it("adds annual dollar value when hourly rate is provided", () => {
    const result = calculateDictationVsTyping({ wordsPerDay: 3000, hourlyRate: 80 });

    expect(result?.moneySavedPerYear).toBeCloseTo((result?.hoursSavedPerYear ?? 0) * 80, 5);
  });

  it("scores typing load by weekly hours", () => {
    expect(calculateTypingLoad({ hoursTypingPerDay: 2, daysPerWeek: 5 })).toMatchObject({
      weeklyHours: 10,
      level: "light",
    });
    expect(calculateTypingLoad({ hoursTypingPerDay: 5, daysPerWeek: 5 })).toMatchObject({
      weeklyHours: 25,
      level: "heavy",
    });
  });

  it("returns null for invalid quantities", () => {
    expect(calculateDictationVsTyping({ wordsPerDay: 0 })).toBeNull();
    expect(calculateTypingLoad({ hoursTypingPerDay: 0, daysPerWeek: 5 })).toBeNull();
  });
});
