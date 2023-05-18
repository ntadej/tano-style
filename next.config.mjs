/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: false,
  env: {
    SITE_NAME: process.env.SITE_NAME,
    SITE_COLOR: process.env.SITE_COLOR_PRIMARY,
  },
}

export default nextConfig
