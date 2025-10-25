/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR Configuration - pages will be rendered on the server
  // Removed static export configuration for server-side rendering
  
  // Basic configuration for the physiotherapy website
  images: {
    unoptimized: true,
  },
  
  // Enable server-side features for SSR
  experimental: {
    // Add any experimental features here
  }
}

export default nextConfig
