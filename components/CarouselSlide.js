import Link from "next/link";
import TagList from "./TagList";
import CloudImage from "./CloudImage";

const Slide = ({ sliding, post }) => (
  <>
    <div className={`carousel-slide ${sliding ? "sliding" : ""}`}>
      <Link href={`/p/${post.slug}`}>
          {post.headerImage && post.headerImage.id ? (
            <CloudImage
              imageId={post.headerImage.id}
              width="1920"
              height="1080"
              crop="auto"
							className="w-full"
              effects={[
                { aspectRatio: "16:9" }
              ]}
            />
          ) : (
            ""
          )}
      </Link>
      <div className="slide-text-box text-white absolute m-2 left-0 bottom-0 bg-black bg-opacity-50 p-2 md:m-12 md:p-4">
        <Link href={`/p/${post.slug}`}>
					<h1 className="font-display text-lg md:text-2xl">
            {post.title}
						</h1>
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
