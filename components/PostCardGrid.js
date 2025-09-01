import React from 'react';
import PostCard from "./PostCard";

const PostCardGrid = ({posts}) => {
  return (
    <ul className="grid md:grid-cols-2 gap-8 lg:gap-12">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostCardGrid;