"use client"

import {useEffect} from 'react';
import { useMutation } from '@apollo/client';
import { INCREMENT_POST_VIEWS } from '../apollo/mutations';

const PageTracker = ({views, slug, avgTimeOnPage}) => {
  // const [incrementPostViews, { data, loading }] = useMutation(INCREMENT_POST_VIEWS);

  // Log page view
  useEffect(() => {
    // get current time
    const startTime = Date.now();
    // call api to increment page view count and get current count
    // return callback, store time on page
    return () => {
      const endTime = Date.now();
      const timeOnPage = endTime - startTime;
      console.log(`Time on page: ${timeOnPage}ms`);
    };
  }, []);

  return (
    <>
    {views}
    </>
  );
};

export default PageTracker;