import type { Metadata } from "next";
import { getAllArticles } from "@/lib/help";
import HelpHubClient from "./HelpHubClient";

export const metadata: Metadata = {
  title: "Help Center – VoiceTypr",
  description:
    "Guides, troubleshooting, and answers to common questions about VoiceTypr.",
};

export default async function HelpHubPage() {
  const articles = await getAllArticles();
  return <HelpHubClient articles={articles} />;
}
