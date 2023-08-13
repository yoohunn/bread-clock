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
      {
        protocol: 'http',
        hostname: 'blogfiles.naver.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
