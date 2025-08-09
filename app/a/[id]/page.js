import { getClient } from '../../../apollo/client';
import { GET_AUTHOR_POSTS } from '../../../apollo/queries';
import BodyContainer from '../../../components/BodyContainer';
import PostList from '../../../components/PostList';

const AuthorPage = async ({params}) => {
  const {data, loading} = await getClient().query({
    query: GET_AUTHOR_POSTS,
    variables: { where: { id: params.id}}
  });

  if (loading) return <p>Loading...</p>
  return (
    <BodyContainer>
        <div className="mb-8">
          <h1 className="text-2xl font-display">By {data.user.name}</h1>
        </div>
      <PostList posts={data.user.posts} />
    </BodyContainer>
  );
};

export default AuthorPage;