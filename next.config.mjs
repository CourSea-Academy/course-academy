/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'standalone',
    images: {
        domains: ["iombzprthtwanbfhyqtq.supabase.co"], 
    },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
};

export default nextConfig;
