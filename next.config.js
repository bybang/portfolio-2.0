/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["media.licdn.com", "cdn.sanity.io"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
