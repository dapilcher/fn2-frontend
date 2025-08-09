import React from 'react';

const Button = ({children, ...rest}) => {
  return (
    <button
      className="px-4 py-2 font-display text-md bg-blue-500 hover:bg-red-500 transition-colors text-secondary-100 uppercase"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;