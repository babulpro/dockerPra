/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  
   experimental: {
    missingSuspenseWithCSRBailout: false, // Disable warning
  },
};
export default nextConfig;
