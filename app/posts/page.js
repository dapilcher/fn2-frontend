import React from 'react';
import { getClient } from '../../apollo/client';
import { GET_ALL_POSTS } from '../../apollo/queries';
import PostCardGrid from '../../components/PostCardGrid';

const page = async ({params}) => {
  const {data} = await getClient().query({
    query: GET_ALL_POSTS,
    variables: { take: 9 }
  })
  return (
    <div>
    {data.posts ?
      <PostCardGrid posts={data.posts} />
:
<p>No posts</p>
    }
    </div>
  );
};

export default page;