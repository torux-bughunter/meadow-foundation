/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily disable static export for debugging
  // output: 'export',
  // trailingSlash: true,
  
  // Basic configuration for the physiotherapy website
  images: {
    unoptimized: true,
  },
  
  // Disable server-side features for static export
  experimental: {
    // Add any experimental features here
  }
}

export default nextConfig
