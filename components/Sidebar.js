import React from 'react';
import Button from "./Button";
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="col-span-3">
      <div className="w-full bg-grey-50 p-4 flex flex-col">
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
        {/* <h3 className="w-full font-display uppercase font-medium text-lg md:text-sm my-4">Popular Posts</h3>
        <Link href="#" className="text-md mb-2 font-body text-primary-600 hover:text-primary-400">Post 1</Link>
        <Link href="#" className="text-md mb-2 font-body text-primary-600 hover:text-primary-400">Post 2</Link>
        <Link href="#" className="text-md mb-2 font-body text-primary-600 hover:text-primary-400">Post 3</Link> */}
      </div>
    </aside>
  );
};

export default Sidebar;