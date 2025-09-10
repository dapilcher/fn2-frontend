import Image from 'next/image';

const DocumentImage = (props) => {
  // console.log("DocumentImage props", props);
  return (
    // </div>
    <div className="mx-0 md:mx-10 my-10">
    {props.image?.data?.image ?
      <Image
        src={props.image.data?.image.url}
        alt={props.image.altText || props.image.data?.image.altText || ""}
        width={props.image.data?.image.width || "1000"}
        height={props.image.data?.image.height || "500"}
        loading="lazy"
        sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
        // placeholder="blur"
        // blurDataURL={props.image.data?.base64URL}
      /> : <div>Couldn't find image</div>}
      {props.caption &&
      <div className="font-body text-md mt-2 text-grey-300 text-light italic">
        {props.caption}
      </div>}
    </div>
  );
};

export default DocumentImage;