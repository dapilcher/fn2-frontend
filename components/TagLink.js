import Link from 'next/link';
import React from 'react';

const TagLink = ({id, name, slug}) => {
  return (
    <li>
      <Link href={`/t/${slug}`}>
        <button
          className="px-2 py-1 font-display text-sm bg-yellow-500 hover:bg-yellow-300 transition-colors text-grey-700 uppercase"
          key={id}>
          {name}
        </button>
      </Link>
    </li>
  );
};

export default TagLink;