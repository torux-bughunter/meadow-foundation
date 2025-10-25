/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR Configuration - Force server-side rendering
  // Ensure pages are rendered on the server for each request
  
  // Basic configuration for the physiotherapy website
  images: {
    unoptimized: true,
  },
  
  // Enable server-side features for SSR
  experimental: {
    // Add any experimental features here
  },
  
  // Force dynamic rendering for all routes
  output: undefined, // Remove any static export configuration
}

export default nextConfig
