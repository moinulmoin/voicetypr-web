const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";
const normalizedApiUrl = apiUrl.replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${normalizedApiUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
