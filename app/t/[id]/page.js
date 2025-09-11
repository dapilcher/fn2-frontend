import { getClient } from '../../../apollo/client';
import { GET_TAG, GET_TAG_POSTS } from '../../../apollo/queries';
import BodyContainer from '../../../components/BodyContainer';
import PostCardGrid from '../../../components/PostCardGrid';
import PrettyJSON from '../../../components/PrettyJSON';

// MetapostsData
export async function generateMetadata(props, parent) {
  const params = await props.params;
  const { data } = await getClient().query({
    query: GET_TAG,
    variables: { tagWhere: { slug: params.id } }, // update to use slug
  });

  return {
    title: `${data.tag?.name}` || "Flightless Nerd",
  }
}

const TagPage = async props => {
  const params = await props.params;
  const { data, loading } = await getClient().query({
    query: GET_TAG_POSTS,
    variables: {
      tagWhere: { slug: params.id },
      take: 10,
      skip: 0
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
          <PostCardGrid posts={data.tag.posts} />
        </>}
      {/* <PrettyJSON data={data} /> */}
    </BodyContainer>
  );
};

export default TagPage;