/** @type {import('next').NextConfig} */
const path = require('path');
require('dotenv').config()

const nextConfig = {
  //output: 'export',
  env: {
    API_URL: process.env.API_URL
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.scss"; @import "_mixins.scss";`,
  },
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 1000
}

module.exports = nextConfig
