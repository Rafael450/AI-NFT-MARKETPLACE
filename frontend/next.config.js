require('dotenv').config()
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CHAIN_ID: 1313161555
  }
}

module.exports = nextConfig
