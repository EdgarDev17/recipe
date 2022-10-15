//This line of code is for Square Payments API
const withTM = require('next-transpile-modules')(['@square/web-sdk', 'react-square-web-payments-sdk'])

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
    images: {
        domains: ['spoonacular.com', 'lh3.googleusercontent.com']
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        esmExternals: 'loose'
    }
})

module.exports = nextConfig
