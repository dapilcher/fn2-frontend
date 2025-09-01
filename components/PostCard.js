import moment from 'moment';
import Link from 'next/link';
// import { AdvancedImage } from '@cloudinary/react';
// import cld from '../lib/cloudinary';
import CloudImage from './CloudImage';
import Button from './Button';
import TagLink from './TagLink';
import TagList from './TagList';

// import { CldImage } from "next-cloudinary";

const PostCard = ({ post }) => {
  return (
    <li key={`post-${post.id}`} className="flex flex-col items-start border-b border-grey-200 pb-4 mb-4 md:border-0 md:pb-0 md:mb-0 md:rounded-b-xl">
      {/* <AdvancedImage cldImg={image} /> */}
      {post.headerImage?.id && <CloudImage
        imageId={post.headerImage.id}
        alt={post.title}
        width="1000"
        height="500"
        crop="auto"
        gravity="faces"
        sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
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