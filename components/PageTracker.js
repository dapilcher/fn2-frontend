"use client"

import {useEffect, useState} from 'react';
import { useMutation } from '@apollo/client';
import { INCREMENT_POST_VIEWS, UPDATE_AVG_TIME_ON_PAGE } from '../apollo/mutations';

const PageTracker = ({views, id, avgTimeOnPage}) => {
  const [incrementPostViews, { data: viewsData, loading: viewsLoading }] = useMutation(INCREMENT_POST_VIEWS);
  const [updateAvgTimeOnPage, { data: avgTimeData, loading: avgTimeLoading }] = useMutation(UPDATE_AVG_TIME_ON_PAGE);

  // Log page view
  useEffect(() => {
    // get current time
    const startTime = Date.now();
    // only track in production every 10 minutes, 5 seconds in dev
    // const trackTimeout = process.env.NODE_ENV === 'production' ? (1000 * 60 * 10) : 5000;

    // logic to store view in localstorage and only increment if not already viewed in last 10 mins
    // const lastViewed = localStorage.getItem(`lastViewed_${id}`);
    // const shouldTrackView = !lastViewed || lastViewed && startTime - lastViewed >= trackTimeout;
    // if (shouldTrackView) {
      // call api to increment page view count and get current count
      incrementPostViews({ variables: { id, views: (views || 0) + 1 } });
      // store view in localstorage
    //   localStorage.setItem(`lastViewed_${id}`, startTime);
    // }
    
    // return callback, store time on page
    return () => {
      const endTime = Date.now();
      const timeOnPage = endTime - startTime;
      // if (shouldTrackView) {
        // calculate new avg time on page
        const newViews = viewsData?.updatePost.views || (views || 0) + 1;
        const newAvgTimeOnPage = Math.round(((avgTimeOnPage * views) + timeOnPage) / newViews);
        // call update time on page mutation
        updateAvgTimeOnPage({ variables: { id, time: newAvgTimeOnPage }})
      // }
    };
  }, []);

  return (
    <>
    {/* {viewsData ? viewsData.updatePost.views : views} */}
    </>
  );
};

export default PageTracker;