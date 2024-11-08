/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '/build',
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
      {
        protocol: 'https',
        hostname: 'media.giphy.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
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
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
