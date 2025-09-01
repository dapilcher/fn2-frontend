import React from 'react';
import CloudImage from './CloudImage';

const DocumentImage = (props) => {
  // console.log("DocumentImage props", props);
  return (
    <div className="mx-0 md:mx-10 my-10">
      <CloudImage
        src={props.imageSrc}
        width="1920"
        height="1080"
        crop="auto"
        // gravity="faces"
        effects={[
          { aspectRatio: "16:9" }
        ]}
      />
      {/* <div
        style={{
          backgroundColor: "white",
          backgroundImage: `url(${props.imageSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          fontSize: 28,
          justifyContent: "space-between",
          minHeight: 500,
          padding: 16,
          width: "100%",
        }}
      /> */}
        <div className="font-body text-md mt-2 text-grey-300 text-light italic">
          {props.caption}
        </div>
      </div>
    // </div>
  );
};

export default DocumentImage;