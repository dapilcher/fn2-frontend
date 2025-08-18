import { getClient } from '../../../apollo/client';
import { GET_TAG_POSTS } from '../../../apollo/queries';
import BodyContainer from '../../../components/BodyContainer';
import PostList from '../../../components/PostList';
import PrettyJSON from '../../../components/PrettyJSON';

const TagPage = async ({ params }) => {
  const { data, loading } = await getClient().query({
    query: GET_TAG_POSTS,
    variables: {
      tagWhere: { id: params.id },
    },
  });

  if (loading) return <p>Loading...</p>
  return (
    <BodyContainer>
      {data &&
        <>
          <div className="mb-8">
            <h1 className="text-2xl font-display">Tag: {data.tag.name}</h1>
          </div>
          <PostList posts={data.tag.posts} />
        </>}
      {/* <PrettyJSON data={data} /> */}
    </BodyContainer>
  );
};

export default TagPage;