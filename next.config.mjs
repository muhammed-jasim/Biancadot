/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransitions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.basehub.com" },
      { protocol: "https", hostname: "cdn.basehub.com" },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
