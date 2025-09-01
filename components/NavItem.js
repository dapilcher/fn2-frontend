import Link from 'next/link';
import React from 'react';

const NavItem = ({children, href}) => {
  return (
    <li className="ml-0 mr-8 mt-2 md:mt-0 md:ml-8 md:mr-0">
      <Link href={href} className="text-grey-700 hover:text-red-500 uppercase font-display text-lg md:text-sm">
        {children}
      </Link>
    </li>
  );
};

export default NavItem;