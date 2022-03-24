/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
};

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/Roman-Leonchik/portfolio/gh-pages/' : '',
}