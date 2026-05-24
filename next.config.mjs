/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Prefer AVIF (30-50% smaller than WebP) with WebP as fallback
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
