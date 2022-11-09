/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};
