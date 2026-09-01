import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/consultation", destination: "/contact", permanent: true },
      {
        source: "/services",
        destination: "/services/communication-and-reputation",
        permanent: false,
      },
      {
        source: "/about/:slug",
        destination: "/services/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
