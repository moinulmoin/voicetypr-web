export type FreeTool = {
  slug: string;
  title: string;
  shortTitle: string;
  lede: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
};

export const freeTools: readonly FreeTool[] = [
  {
    slug: "dictation-vs-typing",
    shortTitle: "Dictation vs typing",
    title: "Dictation vs typing calculator",
    lede: "See how much writing time you get back when dictation runs at speaking speed instead of keyboard speed.",
    description: "Compare typing time vs dictation time for your daily word volume.",
    metaTitle: "Dictation vs typing calculator | VoiceTypr",
    metaDescription:
      "Free calculator to compare typing vs dictation time, annual hours saved, and optional dollar value.",
  },
  {
    slug: "typing-load-calculator",
    shortTitle: "Typing load calculator",
    title: "Keyboard typing load calculator",
    lede: "Estimate weekly keyboard load and how many breaks make sense before strain becomes the bottleneck.",
    description: "Score weekly typing hours and get a practical break recommendation.",
    metaTitle: "Typing load calculator | VoiceTypr",
    metaDescription:
      "Free typing load calculator for founders and builders who write all day and want a realistic strain estimate.",
  },
  {
    slug: "typing-speed-test",
    shortTitle: "Typing speed test",
    title: "60-second typing speed test",
    lede: "Measure your real typing speed in one minute, then compare it against comfortable dictation speed.",
    description: "A simple 60-second WPM test with a restart button.",
    metaTitle: "Typing speed test (60 seconds) | VoiceTypr",
    metaDescription:
      "Free 60-second typing speed test to measure WPM and see how dictation compares.",
  },
] as const;

export function getAllFreeTools() {
  return freeTools;
}

export function getFreeToolBySlug(slug: string) {
  return freeTools.find((tool) => tool.slug === slug);
}
