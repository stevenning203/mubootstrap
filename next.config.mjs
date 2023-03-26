/**
   * @type {import('next').NextConfig}
   */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '/',
    unoptimized: true,
  },
  assetPrefix: (process.env.NODE_ENV === 'production') ? './' : undefined,
  output: 'export',
  distDir: "out",
};

export default nextConfig;