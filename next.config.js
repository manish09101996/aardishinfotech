/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress.aardishinfotech.in",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;