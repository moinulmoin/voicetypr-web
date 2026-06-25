export const DEFAULT_TYPING_WPM = 45;
export const DEFAULT_DICTATION_WPM = 120;
export const DEFAULT_WORK_DAYS_PER_YEAR = 250;

export type DictationVsTypingInput = {
  wordsPerDay: number;
  typingWpm?: number;
  dictationWpm?: number;
  hourlyRate?: number;
};

export type DictationVsTypingResult = {
  typingMinutesPerDay: number;
  dictationMinutesPerDay: number;
  minutesSavedPerDay: number;
  hoursSavedPerYear: number;
  speedMultiplier: number;
  moneySavedPerYear?: number;
};

export type TypingLoadInput = {
  hoursTypingPerDay: number;
  daysPerWeek: number;
};

export type TypingLoadLevel = "light" | "moderate" | "heavy" | "extreme";

export type TypingLoadResult = {
  weeklyHours: number;
  level: TypingLoadLevel;
  label: string;
  breakMinutesPerHour: number;
  recommendation: string;
};

function positiveOrDefault(value: number | undefined, fallback: number) {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : fallback;
}

function nonNegative(value: number) {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

export function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function estimateTokens(text: string) {
  if (!text) return 0;
  return Math.ceil(text.length / 4);
}

export function countSentences(text: string) {
  const trimmed = text.trim();
  if (!trimmed) return 0;

  const matches = trimmed.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
  return matches ? matches.filter((part) => part.trim()).length : 1;
}

export function countLines(text: string) {
  if (!text) return 0;
  return text.split(/\r?\n/).length;
}

export function formatReadingMinutes(words: number, wpm = 200) {
  const safeWords = nonNegative(words);
  const safeWpm = positiveOrDefault(wpm, 200);
  if (safeWords === 0) return "0 min read";

  const minutes = safeWords / safeWpm;
  if (minutes < 1) return "< 1 min read";

  return `${formatMinutes(minutes)} read`;
}

export function calculateTypingSpeedWpm(words: number, seconds: number) {
  const safeWords = nonNegative(words);
  if (!Number.isFinite(seconds) || seconds <= 0) return 0;
  return (safeWords / seconds) * 60;
}

export function formatMinutes(minutes: number) {
  if (!Number.isFinite(minutes) || minutes <= 0) return "0 min";
  if (minutes < 60) return `${Math.round(minutes)} min`;
  const hours = Math.floor(minutes / 60);
  const remainder = Math.round(minutes % 60);
  return remainder > 0 ? `${hours}h ${remainder}m` : `${hours}h`;
}

export function formatHours(hours: number) {
  if (!Number.isFinite(hours) || hours <= 0) return "0 min";
  if (hours < 1) return `${Math.round(hours * 60)} min`;
  return `${hours.toFixed(1)} hours`;
}

export function calculateDictationVsTyping({
  wordsPerDay,
  typingWpm = DEFAULT_TYPING_WPM,
  dictationWpm = DEFAULT_DICTATION_WPM,
  hourlyRate,
}: DictationVsTypingInput): DictationVsTypingResult | null {
  const words = nonNegative(wordsPerDay);
  const typing = positiveOrDefault(typingWpm, DEFAULT_TYPING_WPM);
  const dictation = positiveOrDefault(dictationWpm, DEFAULT_DICTATION_WPM);

  if (words === 0) return null;

  const typingMinutesPerDay = words / typing;
  const dictationMinutesPerDay = words / dictation;
  const minutesSavedPerDay = Math.max(0, typingMinutesPerDay - dictationMinutesPerDay);
  const hoursSavedPerYear = (minutesSavedPerDay * DEFAULT_WORK_DAYS_PER_YEAR) / 60;
  const speedMultiplier = dictationMinutesPerDay > 0 ? typingMinutesPerDay / dictationMinutesPerDay : 0;
  const rate = typeof hourlyRate === "number" && Number.isFinite(hourlyRate) && hourlyRate > 0 ? hourlyRate : undefined;

  return {
    typingMinutesPerDay,
    dictationMinutesPerDay,
    minutesSavedPerDay,
    hoursSavedPerYear,
    speedMultiplier,
    moneySavedPerYear: rate ? hoursSavedPerYear * rate : undefined,
  };
}

export function calculateTypingLoad({
  hoursTypingPerDay,
  daysPerWeek,
}: TypingLoadInput): TypingLoadResult | null {
  const hoursPerDay = nonNegative(hoursTypingPerDay);
  const days = Math.min(7, Math.max(0, nonNegative(daysPerWeek)));

  if (hoursPerDay === 0 || days === 0) return null;

  const weeklyHours = hoursPerDay * days;

  let level: TypingLoadLevel = "light";
  let label = "Light load";
  let breakMinutesPerHour = 5;
  let recommendation = "Your current keyboard load looks manageable. Short breaks still help.";

  if (weeklyHours >= 30) {
    level = "extreme";
    label = "Extreme load";
    breakMinutesPerHour = 15;
    recommendation =
      "This is a lot of continuous typing. Dictation, breaks, and ergonomic setup are worth treating seriously.";
  } else if (weeklyHours >= 20) {
    level = "heavy";
    label = "Heavy load";
    breakMinutesPerHour = 12;
    recommendation =
      "You are in heavy typing territory. Voice input can reduce strain on long writing days.";
  } else if (weeklyHours >= 12) {
    level = "moderate";
    label = "Moderate load";
    breakMinutesPerHour = 8;
    recommendation = "A moderate weekly load adds up. Regular breaks and dictation can both help.";
  }

  return {
    weeklyHours,
    level,
    label,
    breakMinutesPerHour,
    recommendation,
  };
}
