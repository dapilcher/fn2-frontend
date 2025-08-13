"use client"

import { CldImage } from "next-cloudinary";

const CloudImage = ({imageId, ...rest}) => {
  const publicId = `${process.env.NEXT_PUBLIC_CLOUDINARY_FILE}/${imageId}`

  return (
    <CldImage
      src={publicId}
      {...rest}
    />
  )
};

export default CloudImage;