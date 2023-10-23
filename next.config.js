/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["https://picsum.photos/200"],
    },
};

module.exports = nextConfig
