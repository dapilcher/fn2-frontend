import Link from 'next/link';
// import { AdvancedImage } from '@cloudinary/react';
// import cld from '../lib/cloudinary';
import CloudImage from './CloudImage';
import Button from './Button';

// import { CldImage } from "next-cloudinary";

const PostCard = ({post}) => {
  // const image = cld.image(post.headerImage.filename);
  // console.log({image})
  // const publicId = `${process.env.NEXT_PUBLIC_CLOUDINARY_FILE}/${post.headerImage.id}`

  return (
    <li key={post.id} className="flex flex-col items-start">
        {/* <AdvancedImage cldImg={image} /> */}
        <CloudImage
          imageId={post.headerImage.id}
          alt={post.title}
          width="1000"
          height="500"
          crop="auto"
          gravity="faces"
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
        />
        <div className="py-4">
          <p className="text-2xl font-display">{post.title}</p>
          <p className="py-4">By {post.author.name}</p>
          <p>Some body text about what this post is about. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore blanditiis sequi velit voluptatem quisquam a expedita. Beatae perferendis suscipit libero quidem velit aut error cumque voluptatibus necessitatibus facere? Quam, provident?</p>
        </div>
        <Link href={`/p/${post.id}`}>
          <Button>Continue Reading</Button>
        </Link>
      </li>
  );
};

export default PostCard;