import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/tano',
  reactStrictMode: true,
  trailingSlash: false,
  env: {
    SITE_NAME: process.env.SITE_NAME,
    SITE_COLOR: process.env.SITE_COLOR_PRIMARY,
  },
}

export default nextConfig
