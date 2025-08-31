import Link from "next/link";
import CloudImage from "./CloudImage";

const PostListSmall = ({posts = [], sectionTitle = "Recent posts"}) => {
  return (
    <div className="md:my-8 xl:m-0">
      <h1 className="font-display text-lg xl:text-base flex items-center text-red-500 hover:text-red-500 uppercase">
        {sectionTitle}
      </h1>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:flex xl:flex-col">
      {posts.map(post => (
        <li key={`post-${post.id}`} className="flex flex-col w-full">
          <Link href={`/p/${post.slug}`} className="text-md mb-2 font-body text-primary-600 hover:text-primary-400 hover:opacity-90 transition-all">
            <div className="relative">
              <CloudImage
                imageId={post.headerImage?.id}
                alt={post.headerAltText || post.title}
                width="710"
                height="355"
                crop="auto"
                gravity="faces"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
              {post.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default PostListSmall;