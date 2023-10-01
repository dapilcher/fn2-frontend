import React from 'react';

const BodyContainer = ({children}) => {
  return (
    <div className="w-full lg:max-w-4xl px-4 lg:p-0 flex flex-col justify-center">
      {children}
    </div>
  );
};

export default BodyContainer;