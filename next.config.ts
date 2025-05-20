import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.b-e.az"],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
