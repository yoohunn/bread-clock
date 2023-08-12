/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ldb-phinf.pstatic.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
