/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// Configuration object tells the next-pwa plugin 
const withPWA = require("next-pwa")({
    dest: "public", // Destination directory for the PWA files
    // disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
    register: true, // Register the PWA service worker
    skipWaiting: true, // Skip waiting for service worker activation
    runtimeCaching: [
        {
            handler: "CacheFirst",
            urlPattern: /^http?.*/,
            options: {
                cacheName: 'offlineCache',
                expiration: {
                    maxEntries: 300,
                    maxAgeSeconds: 60 * 60 * 24 * 20, // 20 days
                }
            },
        }
    ],
});

// Export the combined configuration for Next.js with PWA support
module.exports = withPWA(nextConfig);