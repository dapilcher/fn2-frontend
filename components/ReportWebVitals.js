"use client"

import { useReportWebVitals } from 'next/web-vitals';

const ReportWebVitals = ({children}) => {
  useReportWebVitals((metric) => {
    console.log(metric)
  });

  return (
    <>
    </>
  );
};

export default ReportWebVitals;