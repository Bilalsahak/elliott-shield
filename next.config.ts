import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/elliott-shield",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
