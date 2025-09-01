import { ImageResponse } from 'next/server';
import { getClient } from '../../apollo/client';
import { GET_HEADERIMAGE_BY_SLUG } from '../../apollo/queries';
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
      <>
        {data.post?.headerImage?.id ? <CloudImage
          imageId={data.post.headerImage.id}
          alt={data.post.headerAltText || "Flightless Nerd"}
          width="1920"
          height="1080"
          crop="auto"
          // gravity="faces"
          effects={[
            { aspectRatio: "16:9" }
          ]}
        /> : <>
          <NextImage src="/opengraph-image.png" alt="Flightless Nerd" />
        </>}
      </>
    )
  )
}