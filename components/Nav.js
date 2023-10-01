import React from 'react';

const Nav = ({children, className}) => {
  return (
    <ul className={className}>
      {children}
    </ul>
  );
};

export default Nav;