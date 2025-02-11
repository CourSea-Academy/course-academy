/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'standalone',
    images: {
        domains: ["iombzprthtwanbfhyqtq.supabase.co"], // ✅ Add your Supabase storage domain here
    }
};

export default nextConfig;
