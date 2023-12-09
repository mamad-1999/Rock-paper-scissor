const withPWA = require("@ducanh2912/next-pwa").default({
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    dest: "public",
    fallbacks: {
        //image: "/static/images/fallback.png",
        document: "/fallback", // if you want to fallback to a custom page rather than /_offline
        // font: '/static/font/fallback.woff2',
        // audio: ...,
        // video: ...,
    },
    workboxOptions: {
        disableDevLogs: true,
    },
    // ... other options you like
});
/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... other options you like
};

module.exports = withPWA(nextConfig);