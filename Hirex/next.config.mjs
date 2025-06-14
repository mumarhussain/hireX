const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*", // Catches all routes starting with /api/
        destination: "http://localhost:8000/:path*", // Proxies to backend
      },
      // Optional: Explicit routes (alternative approach)
      {
        source: "/login",
        destination: "http://localhost:8000/login",
      },
      {
        source: "/me",
        destination: "http://localhost:8000/me",
      },
    ];
  },
};

export default nextConfig;
