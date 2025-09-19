import React from 'react';
import Link from 'next/link';
import { getClient } from '../../apollo/client';
import { GET_ALL_POSTS } from '../../apollo/queries';
import PostList from '../../components/PostList';

const postsPerPage = process.env.NODE_ENV === "production" ? 8 : 4;

const PostPage = async ({ searchParams }) => {
  const { page=1, limit=postsPerPage } = await searchParams;
  const take = limit ? parseInt(limit) : postsPerPage;
  const skip = page ? (parseInt(page) - 1) * postsPerPage : 0;

  const { data } = await getClient().query({
    query: GET_ALL_POSTS,
    variables: { take, skip }
  });

  const numPages = Math.ceil(data.postsCount / take);
  const pages = Array.from({ length: numPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col">
      <h1 className="font-display text-3xl mb-8">All Posts</h1>
      {data.posts ?
        <>
          <PostList posts={data.posts} title="All Posts" />
          <div className="flex flex-row my-8 justify-center">
            <div className="flex flex-col items-end flex-1">
              {page && page > 1 && <Link href={`/posts?page=${parseInt(page) - 1}&limit=${take}`} className="mr-4 text-primary-600 hover:text-primary-400">{"< Previous"}</Link>}
            </div>
            <div className="flex flex-row justify-center">
              {pages.map(p => <Link key={`page-link-${p}`} href={`/posts?page=${p}&limit=${take}`} className={`mx-4 ${p === parseInt(page) ? "text-red-500" : "text-primary-600"} hover:text-primary-400`}>{p}</Link>)}
            </div>
            <div className="flex flex-col items-start flex-1">
              {((page && page < numPages) || (!page && numPages > 1)) && <Link href={`/posts?page=${(parseInt(page) + 1 || 2)}&limit=${take}`} className="ml-4 text-primary-600 hover:text-primary-400">{"Next >"}</Link>}
            </div>
          </div>
        </>
        :
        <p>No posts</p>
      }
    </div>
  );
};

export default PostPage;