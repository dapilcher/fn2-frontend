import CloudImage from "./CloudImage";

const HeaderImage = ({imageId, attribution = null, attributionUrl = null, ...rest}) => {

  return (
    <div className="p-0">
      <CloudImage
        imageId={imageId}
        width="1920"
        height="1080"
        crop="auto"
        // gravity="faces"
        effects={[
          {aspectRatio: "16:9"}
        ]}
        {...rest}
      />
      {attribution && (
        <>
          <p className="mt-1 text-sm text-secondary-500">Image by { attributionUrl ? <a href={attributionUrl} className="text-primary-500 hover:text-primary-400">{attribution}</a> : attribution}</p>
        </>
      )}
    </div>
  );
};

export default HeaderImage;