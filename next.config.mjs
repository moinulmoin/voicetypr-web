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
    ],
  },
  async rewrites() {
    return [
      {
        source: "/op1.js",
        destination: `${process.env.NEXT_PUBLIC_OPENPANEL_CDN_URL}/op1.js`,
      },
      {
        source: "/api/op/:path*",
        destination: `${process.env.NEXT_PUBLIC_OPENPANEL_API_URL}/:path*`,
      },
    ];
  },
}

export default nextConfig
