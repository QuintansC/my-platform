/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "pub-10cf4bd62e35457db881bc576d2d281a.r2.dev",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
