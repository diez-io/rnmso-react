/** @type {import('next').NextConfig} */
const path = require('path');
require('dotenv').config();

const nextConfig = {
  // output: 'export',
  env: {
    API_URL: process.env.API_URL,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `@import "styles/variables.scss"; @import "styles/_mixins.scss";`,
  },
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 1000,
};

module.exports = nextConfig;
