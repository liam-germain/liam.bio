const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  // experimental: {
  //   // Required:
  //   appDir: true,
  // },
};

module.exports = withNextVideo(nextConfig);
