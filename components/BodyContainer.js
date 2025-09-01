import React from 'react';

const BodyContainer = ({children}) => {
  return (
    <div className="w-full lg:max-w-4xl xl:max-w-6xl px-4 xl:p-0 flex flex-col justify-center">
      {children}
    </div>
  );
};

export default BodyContainer;