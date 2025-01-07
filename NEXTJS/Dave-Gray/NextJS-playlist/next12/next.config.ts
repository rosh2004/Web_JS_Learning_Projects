import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
        port: '',
        pathname: '/rosh2004/next-test-blogpost/main/images/**',
        search: ''
      }
    ],
    
  }
};

export default nextConfig;
