import React from 'react';
import PostCard from "../components/PostCard";

const PostList = ({posts}) => {
  return (
    <ul className="grid md:grid-cols-2 gap-8">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;