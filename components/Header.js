import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className="py-5 w-full justify-center">
      <div className="flex flex-row justify-between items-center max-w-screen">
        <Link href="/">
          <h1 className="font-display text-xl md:text-xl flex items-center text-grey-700 hover:text-red-500 uppercase">
            {/* <Image src="/Austrich_circle_cropped.png" width="48" height="48" alt="Flightless Nerd logo" className="mr-2"/> Flightless Nerd */}
            Flightless Nerd
          </h1>
        </Link>
        {/* TODO: HAMBURGER */}
        <div className="hidden md:flex-1 md:flex md:flex-row md:justify-between md:items-center">
          <Nav className="md:flex md:flex-row">
            <NavItem href="/about">About</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </Nav>
          <Nav className="flex flex-row">
            <NavItem href="#"><Image className="text-grey-700 hover:text-red-500" src="/x.svg" width="16" height="16" /></NavItem>
            <NavItem href="#"><Image className="text-grey-700 hover:text-red-500" src="/discord.svg" width="16" height="16" /></NavItem>
            <NavItem href="#"><Image className="text-grey-700 hover:text-red-500" src="/twitch.svg" width="16" height="16" /></NavItem>
          </Nav>
        </div>
        <div className="md:hidden">
          MMM
        </div>
      </div>
    </header>
  );
};

export default Header;