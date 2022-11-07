/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailus.io',
        port: '',
        pathname: '/sources/blocks/**',
      },
    ],
  },
}

module.exports = nextConfig
