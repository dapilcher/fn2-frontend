import Link from "next/link";
import TagList from "./TagList";
import CloudImage from "./CloudImage";

const Slide = ({ sliding, post }) => (
  <>
    <style global jsx>{`
			p {
				margin-bottom: 0.5rem;
			}
		`}</style>
    <style jsx>{`
			// max-width: 100%;
			.slide-img {
				width: 100%;
			}
			.slide-text-title {
				font-size: 1rem;
				font-weight: 500;
				color: #eee;
			}
			.slide-text-title:hover {
				text-decoration: none;
			}
			.slide-text-box {
				color: #eee;
				position: absolute;
				margin: 0.5rem;
				left: 0;
				bottom: 0;
				background-color: rgba(0, 0, 0, 0.5);
				padding: 0.5rem;
				// border-radius: 1rem 1rem 1rem 0;
			}
			.slide-text-content {
				display: none;
			}
			.hide__smol {
				display: none;
			}
			@media (min-width: 768px) {
				.slide-text-content {
					display: block;
				}
				.slide-text-box {
					color: #eee;
					position: absolute;
					bottom: 2rem;
					left: 0;
					margin: 2rem 3rem;
					padding: 1rem;
					// border-radius: 1rem 1rem 1rem 0;
				}
				.slide-text-title {
					font-family: Montserrat;
					font-size: 2rem;
					font-weight: 400;
				}
				.hide__smol {
					display: block;
				}
			}
		`}</style>
    <div className={`carousel-slide ${sliding ? "sliding" : ""}`}>
      <Link href={`/p/${post.id}`}>
          {post.headerImage && post.headerImage.id ? (
            <CloudImage
              imageId={post.headerImage.id}
              width="1920"
              height="1080"
              crop="auto"
              effects={[
                { aspectRatio: "16:9" }
              ]}
            />
          ) : (
            ""
          )}
      </Link>
      <div className="slide-text-box">
        <Link href={`/p/${post.id}`}>
					<h1 className="font-display text-lg md:text-xl">
            {post.title}
						</h1>
        </Link>
				<div className="font-body text-md font-light my-2 hidden md:block">{post.blurb || ""}</div>
        <div className="hide__smol">
          <TagList tags={post.tags} />
        </div>
      </div>
    </div>
  </>
);

export default Slide;
