import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/help";
import { alternativePages, seoPages } from "@/lib/seo-pages";
import { getAllUseCases } from "@/lib/use-cases";
import { getAllFreeTools } from "@/lib/free-tools";

const siteUrl = "https://voicetypr.com";
const lastModified = new Date("2026-05-25");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/download`,
      lastModified: lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/use-cases`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/wispr-flow-alternative`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/superwhisper-alternative`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.78,
    },
    {
      url: `${baseUrl}/aqua-voice-alternative`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.76,
    },
    {
      url: `${baseUrl}/offline-dictation-app-for-windows`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.78,
    },
    {
      url: `${baseUrl}/voice-input-for-cursor`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.78,
    },
    {
      url: `${baseUrl}/voice-typing`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.78,
    },
    {
      url: `${baseUrl}/voicetyper`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/affiliate`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/hipaa-compliant-dictation`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/zero-knowledge`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/air-gapped`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/gdpr-compliant`,
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    },
  ];

  const aiReadableRoutes: MetadataRoute.Sitemap = [
    "/llms.txt",
    "/pricing.md",
    "/accessibility.md",
    "/windows-dictation.md",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: lastModified,
    changeFrequency: "weekly",
    priority: 0.65,
  }));

  const toolRoutes: MetadataRoute.Sitemap = getAllFreeTools().map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: lastModified,
    changeFrequency: "weekly",
    priority: 0.68,
  }));

  const useCaseRoutes: MetadataRoute.Sitemap = getAllUseCases().map((useCase) => ({
    url: `${baseUrl}/use-cases/${useCase.slug}`,
    lastModified: lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const helpArticles = await getAllArticles();
  const helpRoutes: MetadataRoute.Sitemap = helpArticles.map((article) => ({
    url: `${baseUrl}/help/${article.slug}`,
    lastModified: lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const bestRoutes: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${baseUrl}/best/${page.slug}`,
    lastModified: lastModified,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const alternativeRoutes: MetadataRoute.Sitemap = alternativePages
    .filter((page) => page.slug !== "wispr-flow" && page.slug !== "superwhisper")
    .map((page) => ({
      url: `${baseUrl}/alternative/${page.slug}`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    }));

  return [
    ...staticRoutes,
    ...aiReadableRoutes,
    ...toolRoutes,
    ...useCaseRoutes,
    ...helpRoutes,
    ...bestRoutes,
    ...alternativeRoutes,
  ];
}
