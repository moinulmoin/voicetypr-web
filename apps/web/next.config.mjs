import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  outputFileTracingRoot: join(__dirname, "../.."),
  cacheComponents: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
      {
        protocol: "https",
        hostname: "sellwithboost.com",
      },
    ],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value:
              '</help>; rel="service-doc"; type="text/html", </llms.txt>; rel="describedby"; type="text/markdown", </pricing.md>; rel="describedby"; type="text/markdown", </accessibility.md>; rel="describedby"; type="text/markdown", </windows-dictation.md>; rel="describedby"; type="text/markdown"',
          },
        ],
      },
    ];
  },
  async redirects() {
    // Consolidate thin / cannibalizing doorway pages into the stronger
    // editorial equivalents (P1 items 7–8). 301 (permanent) so Google folds
    // link equity into the canonical target.
    return [
      {
        source: "/mac-dictation-app",
        destination: "/best/mac-dictation",
        permanent: true,
      },
      {
        source: "/offline-dictation-app",
        destination: "/best/offline-dictation",
        permanent: true,
      },
      {
        source: "/windows-voice-typing",
        destination: "/best/windows-voice-typing",
        permanent: true,
      },
      {
        source: "/dragon-dictation-alternative",
        destination: "/alternative/dragon",
        permanent: true,
      },
      {
        source: "/voice-typing-app",
        destination: "/voice-typing",
        permanent: true,
      },
    ];
  },
}

export default nextConfig
