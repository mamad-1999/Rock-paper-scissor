/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// Configuration object tells the next-pwa plugin 
const withPWA = require("next-pwa")({
    dest: "public", // Destination directory for the PWA files
    swSrc: "service-worker.js"
});

// Export the combined configuration for Next.js with PWA support
module.exports = withPWA(nextConfig);