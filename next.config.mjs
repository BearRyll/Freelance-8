/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ignore ESLint errors during the build process
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
