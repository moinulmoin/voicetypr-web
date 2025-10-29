import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://voicetypr.com"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/*",
    },
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}