"use client"
import React from 'react';
import { useSelector } from 'react-redux';

const Overview = () => {
  // Access the recommended data from the Redux store using the useSelector hook.
  
  const user = useSelector((state) => state.user);
  const recommendedData = user.recommendedData
  console.log(recommendedData)
  return (
    <div>
      <h2>Overview Page</h2>
      {recommendedData && (
        <div>
          <img src={recommendedData.img} alt="Shoes" />
          <h3>{recommendedData.trainer}</h3>
          <p>{recommendedData.title}</p>
          <p>Course ID: {recommendedData.courseId}</p>
        </div>
      )}
    </div>
  );
};

export default Overview;
