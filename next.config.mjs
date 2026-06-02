/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const api = process.env.HERMES_API_URL;
    if (!api) return [];
    return [{ source: "/hermes/:path*", destination: `${api}/:path*` }];
  },
};
export default nextConfig;
