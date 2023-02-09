/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: [
      '@ui5/webcomponents',
      '@ui5/webcomponents-fiori',
      '@ui5/webcomponents-base',
      '@ui5/webcomponents-icons',
      '@ui5/webcomponents-react',
      '@ui5/webcomponents-react-base',
  ]
}

module.exports = nextConfig
