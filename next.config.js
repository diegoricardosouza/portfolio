/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com']
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
