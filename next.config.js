/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.simpleicons.org', 'cdn.jsdelivr.net', 'icon.icepanel.io', 'symbols.getvecta.com', 'www.svgrepo.com', 'cdn-icons-png.flaticon.com'],
  },
  poweredByHeader: false,
}

module.exports = nextConfig
