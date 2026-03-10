/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    // Menghilangkan warning cross-origin dev resource
    allowedDevOrigins: ["http://localhost:3000", "http://127.0.0.1:3000"]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lautanrejeki.co.id',
      },
    ],
  },
};

export default nextConfig;