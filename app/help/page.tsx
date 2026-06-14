import type { Metadata } from "next";
import { getAllArticles } from "@/lib/help";
import HelpHubClient from "./HelpHubClient";

export const metadata: Metadata = {
  title: "Help Center – Voicetypr",
  description:
    "Guides, troubleshooting, and answers to common questions about Voicetypr.",
  alternates: {
    canonical: "https://voicetypr.com/help",
  },
  openGraph: {
    title: "Help Center – Voicetypr",
    description:
      "Guides, troubleshooting, and answers to common questions about Voicetypr.",
    url: "https://voicetypr.com/help",
    siteName: "Voicetypr",
    images: [{ url: "/voicetypr-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Center – Voicetypr",
    description:
      "Guides, troubleshooting, and answers to common questions about Voicetypr.",
    images: ["/voicetypr-og.png"],
  },
};

export default async function HelpHubPage() {
  const articles = await getAllArticles();
  return <HelpHubClient articles={articles} />;
}
