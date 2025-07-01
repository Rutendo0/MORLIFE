/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'standalone',
  experimental: {
    allowedDevOrigins: [
      /.*\.replit\.dev$/,
      'localhost:3000',
      '127.0.0.1:3000'
    ]
  }
}

export default nextConfig