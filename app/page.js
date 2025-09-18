import { getClient } from "../apollo/client";
import { GET_ALL_POSTS, GET_POPULAR_POSTS, GET_FEATURED_POSTS } from "../apollo/queries";
import Link from "next/link";
import BodyContainer from "../components/BodyContainer";
import PostCardGrid from "../components/PostCardGrid";
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
import PrettyJSON from "../components/PrettyJSON";

const numPosts = 4

const Home = async () => {
  // get latest posts
  const { data, loading, error } = await getClient().query({
    query: GET_ALL_POSTS,
  });

  // get popular posts
  const { data: popularPosts, loading: popularLoading, error: popularError } = await getClient().query({
    query: GET_POPULAR_POSTS,
    variables: { skip: 0, take: numPosts }
  });

  // featured posts for carousel
  const { data: featuredPosts } = await getClient().query({
    query: GET_FEATURED_POSTS
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading page.</p>

  return (
    <>
      {featuredPosts.posts?.length > 0 && <Carousel posts={featuredPosts.posts} />}
      {/* <BodyContainer> */}
      <div className="flex flex-col gap-12 xl:grid xl:grid-cols-12 flex-1">
        <section className="flex flex-col col-span-9">
          {popularPosts.posts?.length > 0 ?
            <>
              <h1 className="font-display text-xl w-full mb-4 xl:text-2xl flex items-center text-red-500 hover:text-red-500 uppercase">Popular posts</h1>
              <PostCardGrid posts={[...popularPosts.posts].sort((a, b) => b.popularScore - a.popularScore)} />
              <div className="full-width text-center my-12">
                <Link href="/posts">
                  <Button>View all posts →</Button>
                </Link>
              </div>
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