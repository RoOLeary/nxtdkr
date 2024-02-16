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
      {
        protocol: 'https',
        hostname: 'ronan-oleary.com',
      },
    ],
  },
  poweredByHeader: true,
  reactStrictMode: false,
};

export default nextConfig;
