import Image from 'next/image';

const HeaderImage = ({image, attribution = null, attributionUrl = null, ...rest}) => {

  return (
    <div className="p-0">
            {image.image && <Image
              src={image.image.url}
              width={image.image.width || "1000"}
              height={image.image.height || "500"}
              loading='eager'
              sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
              placeholder="blur"
              blurDataURL={image.base64URL}
            {...rest}
            />}
      {attribution && (
        <>
          <p className="mt-1 text-sm text-secondary-500">Image by { attributionUrl ? <a href={attributionUrl} className="text-primary-500 hover:text-primary-400">{attribution}</a> : attribution}</p>
        </>
      )}
    </div>
  );
};

export default HeaderImage;