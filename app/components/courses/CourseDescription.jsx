import React from 'react'
import {AiFillClockCircle, AiFillStar} from "react-icons/ai"
import {useTranslations} from 'next-intl';

const CourseDescription = ({isDark, selectedCourse}) => {
  const t = useTranslations('courses');
  
  const style = {
    container : ` p-5 rounded-xl  h-full flex flex-col font-normal text-sm `,
    image_container : `bg-cover bg-center bg-no-repeat rounded-xl border-0 `,
    course_title : ` text-xl font-bold`,
    gray_500 : `text-gray-500`
  }

  const dark = {
    course_title : `text-stone-200`,
  }

  
  
  const courseDescriptionText = "This comprehensive course is designed to provide a solid foundation in web development. Whether you're a beginner or have some experience, this course will take you through the essentials of building websites from scratch."

  if (!selectedCourse) {
    return null; // or return a loading state if desired
  }

  return (

    <div className={`${style.container} ${isDark? dark.course_title : ""}`}>
        <img className={style.image_container} src={selectedCourse.img} alt="" />
      
      <div className='p-4 space-y-5'>
        <h2 className={style.course_title}>{selectedCourse.courseName}</h2>
        
        <div className='flex flex-row items-between items-center w-max rounded-full shadow p-1' >
        <img
          src={selectedCourse.img}
          alt="trainer"
          className="object-cover rounded-full shadow w-9 h-9"
       />
        <p className='px-2 '> {selectedCourse.trainerName}</p>
      </div>

      <div> 
      <div className='flex items-center space-x-1 text-gray-500'>
        <AiFillClockCircle />
        <p>{selectedCourse.duration.hours}{t("h")}{selectedCourse.duration.mins}{t("m")}</p>
      </div>  
      <div className='flex items-center space-x-1 text-gray-500'>
        <AiFillStar />
        <p>{selectedCourse.rating}/5.0</p>
      </div> 
      </div>

      <div className='space-y-3'>
        <h3 className='font-bold text-lg '>{t("description")}</h3>
        <p className={style.gray_500}>{courseDescriptionText}</p>
      </div>
    </div>
    </div>
  )
}

export default CourseDescription