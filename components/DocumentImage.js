import Image from 'next/image';

const DocumentImage = (props) => {
  // console.log("DocumentImage props", props);
  return (
    <div className="mx-0 md:mx-10 my-10">
      <Image
        src={props.image.data.image.url}
        alt={props.image.altText || props.image.data.image.altText || ""}
        width="1920"
        height="1080"
      />
        <div className="font-body text-md mt-2 text-grey-300 text-light italic">
          {props.caption}
        </div>
      </div>
    // </div>
  );
};

export default DocumentImage;