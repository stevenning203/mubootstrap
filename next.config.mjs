/**
   * @type {import('next').NextConfig}
   */
const nextConfig = {
  images: { unoptimized: true },
  experimental: { images: { unoptimized: true } },
  basePath: "/mubootstrap",
};

export default nextConfig;