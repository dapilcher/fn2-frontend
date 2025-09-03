import { getClient } from '../../../apollo/client';
import { GET_AUTHOR, GET_AUTHOR_POSTS } from '../../../apollo/queries';
import BodyContainer from '../../../components/BodyContainer';
import PostCardGrid from '../../../components/PostCardGrid';
import PrettyJSON from '../../../components/PrettyJSON';

// MetapostsData
export async function generateMetadata({ params }, parent) {
  const { data } = await getClient().query({
    query: GET_AUTHOR,
    variables: { where: { id: params.id } }, // update to use slug
  });

  return {
    title: `${data.author?.name}` || "Flightless Nerd",
  }
}

const AuthorPage = async ({params}) => {
  const {data, loading} = await getClient().query({
    query: GET_AUTHOR_POSTS,
    variables: {
      where: { id: params.id},
      take: 10,
      skip: 0
    },
  });

  if (loading) return <p>Loading...</p>
  return (
    <BodyContainer>
        <div className="mb-8">
          <h1 className="text-2xl font-display">By {data.user.name}</h1>
        </div>
      <PostCardGrid posts={data.user.posts} />
      {/* <PrettyJSON data={data} /> */}
    </BodyContainer>
  );
};

export default AuthorPage;