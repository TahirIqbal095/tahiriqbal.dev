import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["mdx", "md", "js", "jsx", "ts", "tsx"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },

  experimental: {
    mdxRs: true,
  },
};

export default withContentlayer(nextConfig);
