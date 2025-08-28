import { getClient } from "../apollo/client";
import { GET_ALL_POSTS } from "../apollo/queries";
import BodyContainer from "../components/BodyContainer";
import PostCardGrid from "../components/PostCardGrid";
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import PrettyJSON from "../components/PrettyJSON";
import defaultMetadata from "../lib/metadata";

export const metadata = defaultMetadata;

const Home = async () => {
  const { data, loading } = await getClient().query({
    query: GET_ALL_POSTS,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  if (loading) return <p>Loading...</p>
  return (
    <>
        {data.posts?.length > 0 && <Carousel posts={data.posts.slice(0,3)} />}
      {/* <BodyContainer> */}
          <div className="flex flex-col gap-12 xl:grid xl:grid-cols-12 flex-1">
            <section className="flex flex-col items-center justify-start col-span-9">
              {data.posts.length > 0 ?
                <>
                  <PostCardGrid posts={data.posts} />
                </>
                :
                <p>There are no posts published 🤷‍♂️</p>
              }
            </section>
            <Sidebar />
          </div>
        {/* <PrettyJSON data={data} className="mt-10"/> */}
      {/* </BodyContainer> */}
    </>
  )
}

export default Home;