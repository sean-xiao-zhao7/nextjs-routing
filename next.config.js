/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "seanxiao.com",
            },
        ],
    },
    experimental: {
        optimizePackageImports: ["icon-library"],
        webpackMemoryOptimizations: true,
    },
};

module.exports = withBundleAnalyzer(nextConfig);
