import React from 'react';
import TagLink from './TagLink';

const TagList = ({tags}) => {
  return (
    <ul className="flex flex-row gap-2 mb-2">
      {tags.map(tag => (
        <TagLink name={tag.name} id={tag.id} key={`taglink-${tag.id}`} slug={tag.slug} />
      ))}
    </ul>
  );
};

export default TagList;