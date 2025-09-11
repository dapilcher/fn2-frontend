"use client"

import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import NavItem from "./NavItem";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-5 w-full justify-center">
      <nav className="flex flex-wrap justify-between items-center max-w-screen">
        <Link href="/" className="flex-shrink-0">
          <h1 className="font-display text-2xl md:text-xl flex items-center text-red-500 hover:text-red-500 uppercase">
            {/* <Image src="/Austrich_circle_cropped.png" width="48" height="48" alt="Flightless Nerd logo" className="mr-2"/> Flightless Nerd */}
            Flightless Nerd
          </h1>
        </Link>
        {/* TODO: HAMBURGER */}
        <div className="block md:hidden">
          {/* <button class="flex items-center px-2 py-1 border rounded fill-grey-800 border-grey-800 hover:fill-red-500 hover:border-red-500">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button> */}
          <button onClick={() => setIsMenuOpen(a => !a)} className="flex flex-col justify-center items-center">
            <div className="w-5 border-b-2 border-b-grey-900" />
            <div className={`w-5 border-b-2 border-b-grey-900 ${isMenuOpen ? "my-1" : "my-0.5"} transition-all`} />
            <div className="w-5 border-b-2 border-b-grey-900" />
          </button>
        </div>
        <div className={`w-full block flex-grow ${isMenuOpen ? "max-h-screen" : "max-h-0"} overflow-hidden transition-[max-height] duration-500 md:h-auto md:max-h-full md:flex md:justify-between md:items-center md:w-auto`}>
          <Nav className="md:flex md:flex-row">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="mailto:contact@flightlessnerd.com">Contact</NavItem>
          </Nav>
          <Nav className="flex flex-row mt-2 md:mt-0">
            <NavItem href="https://x.com/flightlessnews"><Image alt="X logo icon." className="fill-grey-700 hover:fill-red-500 h-5 w-5 md:h-4 md:w-4" width="16" height="16" src="/x.svg"  /></NavItem>
            {/* <NavItem href="https://discord.gg/v6rzyYCQvt"><Image className="fill-grey-700 hover:fill-red-500 h-5 w-5 md:h-4 md:w-4" width="16" height="16" src="/discord.svg"  /></NavItem> */}
            <NavItem href="https://twitch.tv/flightless_nerd"><Image alt="Twitch logo icon." className="fill-grey-700 hover:fill-red-500 h-5 w-5 md:h-4 md:w-4" width="16" height="16" src="/twitch.svg"  /></NavItem>
          </Nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;