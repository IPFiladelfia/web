/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ipfiladelfia.com.br"],
  },
};

module.exports = nextConfig;
