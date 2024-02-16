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
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog/tech/:slug*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/strategy/:slug*',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
