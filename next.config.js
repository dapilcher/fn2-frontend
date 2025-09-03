module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dpilch/image/upload/**"
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/image/**"
      },
      {
        protocol: "https",
        hostname: "admin.flightlessnerd.com",
        pathname: "/image/**"
      }
    ]
  }
}