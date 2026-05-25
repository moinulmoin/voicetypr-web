/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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
}

export default nextConfig
