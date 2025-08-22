import moment from "moment";
import Link from "next/link";
import { getClient } from "../../../apollo/client";
import { GET_POST_BY_ID, GET_RECENT_POST_TITLES } from "../../../apollo/queries";
import CustomRenderer from "../../../components/CustomRenderer";
import PrettyJSON from "../../../components/PrettyJSON";
import HeaderImage from "../../../components/HeaderImage";
import TagList from "../../../components/TagList";
import PostListSmall from "../../../components/PostListSmall";


// MetapostsData
export async function generateMetadata({ params }, parent) {
  const { data } = await getClient().query({
    query: GET_POST_BY_ID,
    variables: { where: { id: params.id } },
  });

  return {
    title: `${data.post.title} | Flightless Nerd` || "Flightless Nerd",
  }
}

const SinglePost = async ({ params }) => {
  const { data: postsData, loading: postsLoading } = await getClient().query({
    query: GET_POST_BY_ID,
    variables: { where: { id: params.id } },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  const { data: recentsData, loading: recentsLoading } = await getClient().query({
    query: GET_RECENT_POST_TITLES,
    variables: { take: 4 },
  });

  // console.log(postsData.post.content.document[8])

  if (postsLoading) return <p>Loading...</p>

  return (
    <>
      {postsData.post.headerImage?.id && <HeaderImage
        imageId={postsData.post.headerImage.id}
        className="max-w-full"
        attribution={postsData.post.headerImageAttribution}
        attributionUrl={postsData.post.headerImageAttributionUrl}
        alt={postsData.post.title}
      />}
      <div className="mb-16 mt-8 w-full">
        <h1 className="text-3xl font-display mb-2">{postsData.post.title}</h1>
        <p className="text-md md:text-md mb-4">
          By <Link href={`/a/${postsData.post.author.id}`} className="text-primary-600 hover:text-primary-400">
            {postsData.post.author.name}
          </Link>
          <span className="mx-2">{"|"}</span>
          Updated on{' '}
          {moment(postsData.post.publishedAt || postsData.post.createdAt).format("MMMM Do[,] YYYY")}
        </p>
        <TagList tags={postsData.post.tags} />
      </div>
      <div className="flex flex-col gap-8 xl:grid xl:grid-cols-12 flex-1">
        <article className="flex flex-col col-span-9">
          {postsData.post.content?.document ?
            <div>
              <CustomRenderer document={postsData.post.content.document} />
              {/* <PrettyJSON postsData={postsData.post.content.document} /> */}
            </div> : <p>No content</p>
          }
        </article>
        <aside className="col-span-3">
          {recentsLoading ? (
            <p>Loading...</p>
          ) : (
            <PostListSmall posts={recentsData.posts} />
          )}
        </aside>
      </div>
    </>
  )
}

export default SinglePost;