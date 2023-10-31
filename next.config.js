/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.licdn.com", "cdn.sanity.io"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
