"use client"
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getCourses from '@/app/lib/getCourses';
import { setMyLearning } from '@/store/userSlice';

const Overview = () => {
  const [coursesData, setCoursesData] = useState([]);
  const  setyling = {
    container: "ml-10  flex flex-col md:flex-row",
    preview: "preview w-full md:w-1/2",
    overview: "overview bg-gradient w-full md:w-1/2"
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedCourses = await getCourses();
        setCoursesData(fetchedCourses);
      } catch (error) {
        console.error('Error fetching courses data:', error);
      }
    }

    fetchData();
  }, []);

  const user = useSelector((state) => state.user);
  const recommendedData = user.recommendedData;
  const recommendedCourseId = recommendedData?.courseId;


  const recommendedCourse = coursesData.find((course) => course.id === recommendedCourseId);

  return (
    <div>
      {recommendedCourse && (
        <div className={setyling.container}>
          <div className={setyling.preview}>
          <div className="video-player-container flex justify-center ">
              <video className='rounded-lg w-2/3  ' controls poster={recommendedCourse.img}>
                Your browser does not support the video tag.
              </video>
            </div>
            <h4>{recommendedCourse.courseName}</h4>
            <div className='flex m-4'>
            <img className='rounded-full w-10' src={recommendedCourse.img} alt={recommendedCourse.courseName} />
            <p>{recommendedCourse.trainerName}</p>
            </div>
            <p>Duration: {recommendedCourse.duration.hours} hours {recommendedCourse.duration.mins} mins</p>
            <p>Category: {recommendedCourse.category}</p>
            <p>Rating: {recommendedCourse.rating}</p>
            <div>
              <h4></h4>
              <span>Welcome to my course! Get ready to explore diverse topics and gain practical knowledge. All levels are welcome, from beginners to experts. Let's learn together and unlock your potential!</span>
            </div>
          </div>
          <div className={setyling.overview}>
            <h1>overview</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
