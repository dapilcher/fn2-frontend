import { ImageResponse } from "next/og";
import { getClient } from '../../../apollo/client';
import { GET_HEADERIMAGE_BY_SLUG } from '../../../apollo/queries';
import NextImage from 'next/image';

// Image metadata
export const size = {
  width: 1920,
  height: 1080,
}

export const contentType = 'image/png'

// Image generation
export default async function Image({ params }) {
  const { data } = await getClient().query({ query: GET_HEADERIMAGE_BY_SLUG, variables: { slug: params.id } })

  return new ImageResponse(
    (
      // ImageResponse JSX element
      (<>
        {data.post?.headerImage?.image ? <NextImage
          src={data.post.headerImage.image.url}
          alt={data.post.headerAltText || "Flightless Nerd"}
          width={data.post.headerImage.image.width || "1920"}
          height={data.post.headerImage.image.height || "1080"}
        /> : <>
          <NextImage src="/opengraph-image.png" alt="Flightless Nerd" />
        </>}
      </>)
    )
  );
}