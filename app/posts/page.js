import React from 'react';
import Link from 'next/link';
import { getClient } from '../../apollo/client';
import { GET_ALL_POSTS } from '../../apollo/queries';
import PostCardGrid from '../../components/PostCardGrid';

const postsPerPage = 2;

const PostPage = async ({ searchParams }) => {
  const { page, limit } = await searchParams;
  const take = limit ? parseInt(limit) : postsPerPage;
  const skip = page ? (parseInt(page) - 1) * postsPerPage : 0;

  const { data } = await getClient().query({
    query: GET_ALL_POSTS,
    variables: { take, skip }
  });

  const numPages = Math.ceil(data.postsCount / take);
  const pages = Array.from({ length: numPages }, (_, i) => i + 1);

  return (
    <div>
      {data.posts ?
        <>
          <PostCardGrid posts={data.posts} />
          <div className="flex flex-row justify-center my-8">
            {page && page > 1 && <Link href={`/posts?page=${parseInt(page) - 1}&limit=${take}`} className="mr-4 text-primary-600 hover:text-primary-400">{"< Previous"}</Link>}
            {pages.map(p => <Link key={`page-link-${p}`} href={`/posts?page=${p}&limit=${take}`} className={`mx-4 ${p === parseInt(page) ? "text-primary-900" : "text-primary-600"} hover:text-primary-400`}>{p}</Link>)}
            {page && page < numPages && <Link href={`/posts?page=${parseInt(page) + 1}&limit=${take}`} className="ml-4 text-primary-600 hover:text-primary-400">{"Next >"}</Link>}
          </div>
        </>
        :
        <p>No posts</p>
      }
    </div>
  );
};

export default PostPage;