/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@supabase/supabase-js'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/inquilinos',
        destination: '/',
        permanent: true,
      },
      {
        source: '/inquilinos/coliving',
        destination: '/coliving',
        permanent: true,
      },
      {
        source: '/inquilinos/temporal',
        destination: '/temporal',
        permanent: true,
      },
      {
        source: '/inquilinos/vacacional',
        destination: '/vacacional',
        permanent: true,
      },
      {
        source: '/alquiler-temporal',
        destination: '/temporal',
        permanent: true,
      },
      {
        source: '/alquiler-vacacional',
        destination: '/vacacional',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
