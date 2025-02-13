import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    dirs: ["src", "components", "lib"],
  },
};

export default nextConfig;
