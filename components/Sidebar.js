import React from 'react';
import { getClient } from '../apollo/client';
import Image from 'next/image';
import Link from 'next/link';
import { GET_RECENT_POST_TITLES } from '../apollo/queries';
import Button from "./Button";
import CloudImage from './CloudImage';
import PostListSmall from './PostListSmall';
import Austrich_circle_cropped from '../public/Austrich_circle_cropped.png';

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
          <Image
            className="w-32 my-4"
            style={{height: "auto", width: "auto"}}
            height="128"
            width="128"
            src={Austrich_circle_cropped}
            // placeholder="blur"
            />
        </div>
        <div className="text-sm font-body font-light">
        <p className="mb-4">Flightless Nerd is a community of like-minded folks who enjoy all things "nerdy."</p>
        <p>Check back frequently for our thoughts on games we're playing, movies we're watching, books we're reading, and so much more.</p>
        </div>
        {false && <>
          <h3 className="w-full font-display uppercase font-medium text-lg md:text-sm mt-8">Subscribe to email list</h3>
          <form className="my-4">
            <input className="w-full mb-4 p-2 font-body" placeholder="Email Address" type="email" name="email" id="email" />
            <Button onSubmit="" >Subscribe</Button>
          </form>
        </>}
      </div>
      <div className="w-full flex flex-col order-1 xl:order-2">
        <PostListSmall posts={data?.posts || []} />
      </div>
    </aside>
  );
};

export default Sidebar;