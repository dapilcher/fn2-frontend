import React from 'react';

const NumberedHeading = ({number, text}) => {
  return (
    <>
      <div
      className="w-full flex flex-row items-center"
      >
        <span
        className="block w-full h-1 bg-red-500"
        />
        <span
        className="h-1 w-1 flex flex-col justify-center items-center border-4 border-red-500 font-bold text-xl p-6 font-display"
          style={{
            borderRadius: "50%",
          }}
        >
          {number}
        </span>
        <span
        className="block w-full h-1 bg-red-500"
        />
      </div>
      <div
      className="w-full flex flex-col justify-center items-center my-8"
      >
        <h2 className="font-display text-2xl">{text}</h2>
      </div>
    </>
  );
};

export default NumberedHeading;