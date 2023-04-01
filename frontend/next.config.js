require('dotenv').config()
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  env: {
    NEXT_PUBLIC_CHAIN_ID: 1313161555
  }
}
