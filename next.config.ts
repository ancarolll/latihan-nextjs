/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'prod.spline.design', 'unpkg.com'],
    unoptimized: process.env.NODE_ENV === 'development'
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  }
}

module.exports = nextConfig