require('dotenv').config()
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CHAIN_ID: 1313161555,
    WEB3_HOST_PROVIDER: "https://testnet.aurora.dev"
  }
}

module.exports = nextConfig
