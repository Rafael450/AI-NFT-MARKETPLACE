require('dotenv').config()
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
  env: {
    NFT_ADDRESS: "0x5D09017E117F53AF6065e62aB3e9888242e201F6",
    TOKEN_ADDRESS: "0x23A53c4eDE149C82409140Fa47DF01e732e428fC",
    MARKETPLACE_ADDRESS: "0x54d9e4557014D03a5Ba7c1d14F1EEBE97e3D558c",
    NEXT_PUBLIC_CHAIN_ID: "1313161555",
    WEB3_HOST_PROVIDER: "https://testnet.aurora.dev"
  }
}

module.exports = nextConfig
