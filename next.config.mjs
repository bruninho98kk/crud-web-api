/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.totalwine.com',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'static.delhaize.be',
        pathname: '/media/**',
      },
      // Adicione outros domínios se necessário
    ],
  },
};

export default nextConfig;
