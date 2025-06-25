// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allow images from any domain
        port: "",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint at build time
  },
};

export default nextConfig;
