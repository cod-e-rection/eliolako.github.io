/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "/eliolako.github.io",
  assetPrefix: "/eliolako.github.io/",
};

module.exports = nextConfig;