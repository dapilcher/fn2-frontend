import { getClient } from "../apollo/client";
import { GET_ALL_POSTS } from "../apollo/queries";
import BodyContainer from "../components/BodyContainer";
import PostList from "../components/PostList";
import PrettyJSON from "../components/PrettyJSON";


const Home = async () => {
  const {data, loading} = await getClient().query({
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
      {data.posts.length > 0 ?
        <PostList posts={data.posts} /> :
        <BodyContainer>
          <p>There are no posts published 🤷‍♂️</p>
        </BodyContainer>
      }
      {/* <PrettyJSON data={data} className="mt-10"/> */}
    </>
  )
}

export default Home;