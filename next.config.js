const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '121cdn.dev-projects.com',
      },
      {
        protocol: 'https',
        hostname: 'hhccdn.dev-projects.com',
      },
      {
        protocol: 'https',
        hostname: '121cdn.stg-projects.com',
      },
      {
        protocol: 'https',
        hostname: 'hhccdn.stg-projects.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
