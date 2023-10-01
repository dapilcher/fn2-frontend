import Link from 'next/link';
import React from 'react';

const NavItem = ({children, href}) => {
  return (
    <li className="ml-8">
      <Link href={href} className="text-grey-700 hover:text-red-500 uppercase font-display text-sm">
        {children}
      </Link>
    </li>
  );
};

export default NavItem;