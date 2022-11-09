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
    ],
  },
};

module.exports = nextConfig;
