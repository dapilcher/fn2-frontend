export const viewportMetadata = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};

export const siteMetadata = {
  metadataBase: new URL("https://flightlessnerd.com"),
  title: {
    default: "Flightless Nerd",
    template: "%s | Flightless Nerd"
  },
  openGraph: {
    siteName: "Flightless Nerd",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {
    canonical: "/"
  },
  applicationName: "Flightless Nerd",
  appleWebApp: {
    title: "Flightless Nerd",
    statusBarStyle: "default",
    capable: true
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
      // {
      //   url: "/favicon-16x16.png",
      //   sizes: "16x16",
      //   type: "image/png"
      // }
      // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
    // apple: [
    //   {
    //     url: "/apple-icon-57x57.png",
    //     sizes: "57x57",
    //     type: "image/png"
    //   },
    //   {
    //     url: "/apple-icon-60x60.png",
    //     sizes: "60x60",
    //     type: "image/png"
    //   }
      // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    // ]
  }
};

export const postMetadata = (post) => ({
  title: post.title,
  description: post.blurb,
  keywords: post.keywords?.split(",") || ["video games"],
  openGraph: {
    url: "https://flightlessnerd.com",
    type: "website",
    title: post.title,
    description:
      post.blurb,
    images: [
      {
        url: post.headerImage.image.url,
        width: post.headerImage.image.width,
        height: post.headerImage.image.height,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description:
      post.blurb,
    site: "@FlightlessNews",
    creator: "@FlightlessNews",
    images: [
      {
        url: post.headerImage.image.url,
        width: post.headerImage.image.width,
        height: post.headerImage.image.height,
      }
    ]
  },
  alternates: {
    canonical: "https://flightlessnerd.com"
  }
});