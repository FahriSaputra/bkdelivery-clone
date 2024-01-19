/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bkdelivery.co.id",
        port: "",
      },
    ],
  },
};

export default nextConfig;
