import {Cloudinary} from "@cloudinary/url-gen";

// Create a Cloudinary instance, setting some Cloud and URL configuration parameters.
const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
  url: {
    secure: true ,
  }
});

// This creates a URL of the form: https://www.example.com/demo/image/upload/sample

export default cld;