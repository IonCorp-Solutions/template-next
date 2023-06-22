/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")


const  nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "@template/styles")],
    prependData: '@import "@styles/core.scss";',
  },
  images: {
    domains: [""],
    deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  basePath: "",
}

module.exports = nextConfig
