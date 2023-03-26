/**
   * @type {import('next').NextConfig}
   */
const nextConfig = {
  images: { unoptimized: true },
  experimental: { images: { unoptimized: true } },
  basePath: "/mubootstrap",

  assetPrefix: (process.env.NODE_ENV === 'production') ? './' : undefined,
  output: 'export',
  distDir: "out",
};

export default nextConfig;