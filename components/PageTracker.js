"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useMutation } from '@apollo/client/react';
import { INCREMENT_POST_VIEWS, INCREMENT_UNIQUE_VISITORS, UPDATE_AVG_TIME_ON_PAGE } from '../apollo/mutations';

const PageTracker = ({ views, id, avgTimeOnPage, uniqueVisitors }) => {
  const [incrementPostViews, { data: viewsData, loading: viewsLoading }] = useMutation(INCREMENT_POST_VIEWS);
  const [incrementUniqueVisitors, { data: uniqueVisitorsData, loading: uniqueVisitorsLoading }] = useMutation(INCREMENT_UNIQUE_VISITORS);
  const [updateAvgTimeOnPage, { data: avgTimeData, loading: avgTimeLoading }] = useMutation(UPDATE_AVG_TIME_ON_PAGE);

  const pathname = usePathname();

  // Log page view
  useEffect(() => {
    // get current time
    const startTime = Date.now();

    // logic to store view in localstorage and only increment if not already viewed in last 10 mins
    const lastViewed = localStorage.getItem(`lastViewed_${id}`) || false;
    if (!lastViewed) {
      incrementUniqueVisitors({ variables: { id, uniqueVisitors: (uniqueVisitors || 0) + 1}})
    }
    localStorage.setItem(`lastViewed_${id}`, startTime);

    incrementPostViews({ variables: { id, views: (views || 0) + 1 } });

    // return callback, store time on page
    return () => {
      const endTime = Date.now();
      const timeOnPage = endTime - startTime;
      // calculate new avg time on page
      const newViews = viewsData?.updatePost.views || (views || 0) + 1;
      const newAvgTimeOnPage = Math.round(((avgTimeOnPage * views) + timeOnPage) / newViews);
      // call update time on page mutation
      updateAvgTimeOnPage({ variables: { id, time: newAvgTimeOnPage } })
    };
  }, [pathname]);

  return (
    <>
      {/* {viewsData ? viewsData.updatePost.views : views} */}
    </>
  );
};

export default PageTracker;