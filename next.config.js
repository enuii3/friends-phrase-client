/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'friends-phrase-backet.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
