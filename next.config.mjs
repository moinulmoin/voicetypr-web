/** @type {import('next').NextConfig} */
const nextConfig = {
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
              '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json", </llms.txt>; rel="describedby"; type="text/markdown", </pricing.md>; rel="describedby"; type="text/markdown", </accessibility.md>; rel="describedby"; type="text/markdown", </windows-dictation.md>; rel="describedby"; type="text/markdown"',
          },
        ],
      },
    ];
  },
}

export default nextConfig
