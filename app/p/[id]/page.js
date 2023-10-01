import moment from "moment";
import Link from "next/link";
import { getClient } from "../../../apollo/client";
import { GET_POST_BY_ID } from "../../../apollo/queries";
import Hero from "../../../components/Hero";
import BodyContainer from "../../../components/BodyContainer";
import CustomRenderer from "../../../components/CustomRenderer";
import PrettyJSON from "../../../components/PrettyJSON";
import Image from "next/image";
import HeaderImage from "../../../components/HeaderImage";

const SinglePost = async ({params}) => {
  const {data, loading} = await getClient().query({
    query: GET_POST_BY_ID,
    variables: { where: { id: params.id } },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  // console.log(data.post.content.document[8])

  if (loading) return <p>Loading...</p>

  return (
    <>
      {/* <Hero src={data.post.headerImage.publicUrl} /> */}
      <BodyContainer>
        <HeaderImage
          imageId={data.post.headerImage.id}
          className="max-w-full"
          attribution={data.post.headerImageAttribution}
          attributionUrl={data.post.headerImageAttributionUrl}
          alt={data.post.title}
        />
        <div className="mb-16 mt-8">
          <h1 className="text-2xl md:text-3xl font-display mb-2">{data.post.title}</h1>
          <h2 className="text-md md:text-md">
            Published on{' '}
            {moment(data.post.publishedAt || data.post.createdAt).format("MMMM Do[,] YYYY")}{" "}
            by <Link href={`/a/${data.post.author.id}`} className="text-primary-600 hover:text-primary-400">
              {data.post.author.name}
            </Link>
          </h2>
        </div>
        <div className="">
          {data.post.content?.document ?
            <>
              <CustomRenderer document={data.post.content.document} />
              {/* <PrettyJSON data={data.post.content.document} /> */}
            </> : <p>No content</p>
          }
        </div>
      </BodyContainer>
    </>
  )
}

export default SinglePost;