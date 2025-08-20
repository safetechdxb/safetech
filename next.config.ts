import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    dangerouslyAllowSVG:true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dl.dropboxusercontent.com",
      },
    ],
    unoptimized: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    
  }
};

export default nextConfig;
   