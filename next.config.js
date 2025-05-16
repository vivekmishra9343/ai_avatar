/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reqres.in",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  basePath: process.env.NODE_ENV === "production" ? "/ai_avatar" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
