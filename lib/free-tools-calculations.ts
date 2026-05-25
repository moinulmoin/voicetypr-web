export const DEFAULT_TYPING_WPM = 45;
export const DEFAULT_DICTATION_WPM = 120;
export const DEFAULT_WORK_DAYS_PER_YEAR = 250;
export const DEFAULT_WORK_DAYS_PER_MONTH = 22;

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

export type TimeSavingsInput = {
  words: number;
  typingWpm?: number;
  dictationWpm?: number;
};

export type TimeSavingsResult = {
  typingMinutes: number;
  dictationMinutes: number;
  minutesSaved: number;
  hoursSaved: number;
  percentFaster: number;
};

export type WordsToMinutesInput = {
  words: number;
  wpm?: number;
};

export type WordsToMinutesResult = {
  minutes: number;
  hours: number;
};

export type RoiInput = {
  wordsPerDay: number;
  workDaysPerMonth?: number;
  hourlyRate: number;
  typingWpm?: number;
  dictationWpm?: number;
};

export type RoiResult = TimeSavingsResult & {
  monthlyWords: number;
  monthlyHoursSaved: number;
  monthlyValue: number;
  annualValue: number;
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

export function calculateWordsToMinutes({ words, wpm = DEFAULT_DICTATION_WPM }: WordsToMinutesInput): WordsToMinutesResult {
  const safeWords = nonNegative(words);
  const safeWpm = positiveOrDefault(wpm, DEFAULT_DICTATION_WPM);
  const minutes = safeWords / safeWpm;

  return {
    minutes,
    hours: minutes / 60,
  };
}

export function calculateTimeSavings({
  words,
  typingWpm = DEFAULT_TYPING_WPM,
  dictationWpm = DEFAULT_DICTATION_WPM,
}: TimeSavingsInput): TimeSavingsResult {
  const safeWords = nonNegative(words);
  const typingMinutes = calculateWordsToMinutes({ words: safeWords, wpm: typingWpm }).minutes;
  const dictationMinutes = calculateWordsToMinutes({ words: safeWords, wpm: dictationWpm }).minutes;
  const minutesSaved = Math.max(0, typingMinutes - dictationMinutes);

  return {
    typingMinutes,
    dictationMinutes,
    minutesSaved,
    hoursSaved: minutesSaved / 60,
    percentFaster: dictationMinutes > 0 ? Math.max(0, ((typingMinutes - dictationMinutes) / dictationMinutes) * 100) : 0,
  };
}

export function calculateRoi({
  wordsPerDay,
  workDaysPerMonth = DEFAULT_WORK_DAYS_PER_MONTH,
  hourlyRate,
  typingWpm = DEFAULT_TYPING_WPM,
  dictationWpm = DEFAULT_DICTATION_WPM,
}: RoiInput): RoiResult {
  const monthlyWords = nonNegative(wordsPerDay) * nonNegative(workDaysPerMonth);
  const savings = calculateTimeSavings({ words: monthlyWords, typingWpm, dictationWpm });
  const monthlyHoursSaved = savings.hoursSaved;
  const monthlyValue = monthlyHoursSaved * nonNegative(hourlyRate);

  return {
    ...savings,
    monthlyWords,
    monthlyHoursSaved,
    monthlyValue,
    annualValue: monthlyValue * 12,
  };
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
