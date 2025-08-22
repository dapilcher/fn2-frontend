import React from 'react';

const Quote = (props) => {
  return (
    <blockquote className="full-width flex flex-col items-center my-10">
      <p className="p-8 border-l-8 border-red-500 max-w-xl bg-grey-50 text-grey-500 text-lg md:text-xl font-light italic">
        {props.content}
      </p>
      {props.attribution.discriminant ? (
        <div
          style={{
            fontWeight: "bold",
            color: "#718096",
            margin: 0,
            padding: 0,
          }}
        >
          <NotEditable>— </NotEditable>
          {props.attribution.value.text}
        </div>
      ) : null}
    </blockquote>
  );
};

export default Quote;