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
  assetPrefix: isProd ? '/portfolio/' : ''
}