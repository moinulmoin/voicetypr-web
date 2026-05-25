import { describe, expect, it } from "vitest";

import {
  DEFAULT_DICTATION_WPM,
  DEFAULT_TYPING_WPM,
  DEFAULT_WORK_DAYS_PER_YEAR,
  calculateDictationVsTyping,
  calculateTypingLoad,
  calculateTypingSpeedWpm,
  countWords,
} from "./free-tools-calculations";

describe("free tools calculations", () => {
  it("counts words in a prompt", () => {
    expect(countWords("one two three")).toBe(3);
    expect(countWords("  spaced   words  ")).toBe(2);
  });

  it("calculates typing speed in wpm", () => {
    expect(calculateTypingSpeedWpm(50, 60)).toBe(50);
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
