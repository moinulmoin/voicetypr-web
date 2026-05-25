export const FREE_TOOLS_ORIGIN = "https://voicetypr.com";

export type FreeTool = {
  slug: string;
  title: string;
  shortTitle: string;
  lede: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
};

export function getFreeToolCanonicalUrl(slug: string): string {
  return `${FREE_TOOLS_ORIGIN}/tools/${slug}`;
}

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
    ogTitle: "Dictation vs typing calculator — VoiceTypr",
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
    ogTitle: "Typing load calculator — VoiceTypr",
  },
  {
    slug: "typing-speed-test",
    shortTitle: "Typing speed test",
    title: "10-second typing speed test",
    lede: "Measure a quick typing sample, then compare it against comfortable dictation speed.",
    description: "A simple 10-second WPM test with a restart button.",
    metaTitle: "Typing speed test (10 seconds) | VoiceTypr",
    metaDescription:
      "Free 10-second typing speed test to measure WPM and see how dictation compares.",
    ogTitle: "10-second typing speed test — VoiceTypr",
  },
] as const;

export function getAllFreeTools() {
  return freeTools;
}

export function getFreeToolBySlug(slug: string) {
  return freeTools.find((tool) => tool.slug === slug);
}
