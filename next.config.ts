import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript type errors during build
  },
};

export default nextConfig;
