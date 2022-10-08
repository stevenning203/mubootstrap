/**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {
    images: {
      loader: 'akamai',
      path: '',
    },
    assetPrefix: (process.env.NODE_ENV === 'production') ? './' : undefined,
  };
  
  export default   nextConfig;