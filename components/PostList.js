import React from 'react';
import PostListItem from "./PostListItem";

const PostList = ({ posts, title = null }) => {
  return (
    <>
      <ul className="flex flex-col justify-center gap-8">
        {posts.map(post => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default PostList;