import { getClient } from "../apollo/client";
import { GET_ALL_POSTS } from "../apollo/queries";
import BodyContainer from "../components/BodyContainer";
import PostList from "../components/PostList";
import PrettyJSON from "../components/PrettyJSON";


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
      <BodyContainer>
        {data.posts.length > 0 ?
          <>
            <div className="mb-8">
              <h1 className="text-2xl font-display">Recent posts</h1>
            </div>
            <PostList posts={data.posts} />
          </>
          :
          <p>There are no posts published 🤷‍♂️</p>
        }
        {/* <PrettyJSON data={data} className="mt-10"/> */}
      </BodyContainer>
    </>
  )
}

export default Home;