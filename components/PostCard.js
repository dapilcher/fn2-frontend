import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import TagList from './TagList';


const PostCard = ({ post }) => {
  return (
    <li key={`post-${post.id}`} className="flex flex-col items-start border-b border-grey-200 pb-4 mb-4 md:border-0 md:pb-0 md:mb-0 md:rounded-b-xl">
      {post.headerImage?.image.url && <Image
        src={post.headerImage.image.url}
        alt={post.title}
        width={post.headerImage.image.width || "1000"}
        height={post.headerImage.image.height || "500"}
        loading='eager'
        sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
        placeholder="blur"
        blurDataURL={post.headerImage.base64URL}
      />}
      <div className="py-4">
        <div className="">
          {post.tags.length > 0 && <TagList tags={post.tags} />}
        </div>
        <h2 className="text-2xl font-display">{post.title}</h2>
        <p className="my-2">
          <Link href={`/a/${post.author?.id}`} className="text-primary-600 hover:text-primary-400">
            {post.author?.name}
          </Link> // {moment(post.publishedAt || post.createdAt).format("MMMM Do[,] YYYY")}
        </p>
        {/* <p>{post.blurb}</p> */}
        <Link href={`/p/${post.slug}`}>
          <Button>Continue Reading →</Button>
        </Link>
      </div>
    </li>
  );
};

export default PostCard;