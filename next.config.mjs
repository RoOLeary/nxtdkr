/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'busylittlepixels.com',
      },
      {
        protocol: 'https',
        hostname: 'craft-ezhk.frb.io',
      },
    ],
  },
  poweredByHeader: true,
  reactStrictMode: false,
};

export default nextConfig;
