/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiServer: '127.0.0.1:3010',
  }
}

module.exports = nextConfig
