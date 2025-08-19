import React from 'react';
import { getClient } from '../apollo/client';
import Link from 'next/link';
import { GET_RECENT_POST_TITLES } from '../apollo/queries';
import Button from "./Button";
import CloudImage from './CloudImage';
import PostListSmall from './PostListSmall';

const Sidebar = async () => {
  const { data, loading } = await getClient().query({
    query: GET_RECENT_POST_TITLES,
    variables: {
      take: 4,
    },
  });

  return (
    <aside className="col-span-3 flex flex-col gap-4">
      <div className="w-full bg-grey-50 p-4 flex flex-col order-2 xl:order-1">
        <h3 className="w-full font-display uppercase font-medium text-lg md:text-sm">Welcome to Flightless Nerd</h3>
        <div className="w-full flex justify-start xl:justify-center">
          <img className="w-32 my-4" src="/Austrich_circle_cropped.png" />
        </div>
        <p className="text-sm font-body font-light">Here is a blurb about what Flightless Nerd is all about</p>
        <h3 className="w-full font-display uppercase font-medium text-lg md:text-sm mt-8">Subscribe to email list</h3>
        <form className="my-4">
          <input className="w-full mb-4 p-2 font-body" placeholder="Email Address" type="email" name="email" id="email" />
          <Button onSubmit="" >Subscribe</Button>
        </form>
      </div>
      <div className="w-full flex flex-col order-1 xl:order-2">
        <PostListSmall posts={data?.posts || []} />
        {/* <h3 className="w-full font-display uppercase font-medium text-lg md:text-sm my-4">Recent Posts</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.posts.map(post => (
            <Link key={post.id} href={`/p/${post.id}`} className="text-md mb-2 font-body text-primary-600 hover:text-primary-400">
              <div>
                <CloudImage
                  imageId={post.headerImage.id}
                  alt={post.title}
                  width="300"
                  height="150"
                  crop="auto"
                  gravity="faces"
                  sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
                />
              {post.title}
              </div>
            </Link>
          ))
        )} */}
        {/* <Link href="#" className="text-md mb-2 font-body text-primary-600 hover:text-primary-400">Post 1</Link>
        <Link href="#" className="text-md mb-2 font-body text-primary-600 hover:text-primary-400">Post 2</Link>
        <Link href="#" className="text-md mb-2 font-body text-primary-600 hover:text-primary-400">Post 3</Link> */}
      </div>
    </aside>
  );
};

export default Sidebar;