import Link from "next/link";
import Image from 'next/image';
import TagList from "./TagList";

const Slide = ({ sliding, post }) => (
  <>
    <div className={`carousel-slide ${sliding ? "sliding" : ""}`}>
      <Link href={`/p/${post.slug}`}>
      {post.headerImage?.image.url && <Image
        src={post.headerImage.image.url}
        alt={post.headerImage.altText || post.title}
        width={post.headerImage.image.width || "1920"}
        height={post.headerImage.image.height || "1080"}
        loading='eager'
        sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
        placeholder="blur"
        blurDataURL={post.headerImage.base64URL}
      />}
      </Link>
      <div className="slide-text-box text-white absolute m-2 left-0 bottom-0 bg-black bg-opacity-50 p-2 md:m-12 md:p-4">
        <Link href={`/p/${post.slug}`}>
					<h2 className="font-display text-lg md:text-2xl">
            {post.title}
						</h2>
        </Link>
				<div className="font-body text-md font-light my-4 hidden md:block">{post.blurb || ""}</div>
        <div className="hidden md:block">
          <TagList tags={post.tags} />
        </div>
      </div>
    </div>
  </>
);

export default Slide;
