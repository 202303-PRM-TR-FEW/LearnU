import {AiFillClockCircle, AiFillStar} from "react-icons/ai"
import React from "react"



const CourseDescription = ({isDark, selectedCourse}) => {
  
    const style = {
      container : ` p-5 rounded-xl h-full flex flex-col font-normal text-sm `,
      image_container : `bg-cover bg-center bg-no-repeat rounded-xl border-0 `,
      course_title : ` text-3xl font-semibold text-slate-700 dark:text-white undefined`,
      gray_500 : `text-gray-500 font-semibold dark:text-white undefined `
    }
  
    const dark = {
      course_title : `text-stone-200`,
    }
  
    
    
    const courseDescriptionText = "Welcome to my course! Get ready to explore diverse topics and gain practical knowledge. All levels are welcome, from beginners to experts. Let's learn together and unlock your potential!"
  
    if (!selectedCourse) {
      return null; 
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
          <p className='px-2 font-semibold text-slate-700 dark:text-white undefined'> {selectedCourse.trainerName}</p>
        </div>
  
        <div> 
        <div className='flex items-center space-x-1 font-semibold dark:text-white undefined text-gray-500'>
          <AiFillClockCircle />
          <p>{selectedCourse.duration.hours}h {selectedCourse.duration.mins}m</p>
        </div>  
  
        <div className='flex items-center space-x-1 text-gray-500 font-semibold dark:text-white undefined'>
          <AiFillStar />
          <p>{selectedCourse.rating}/5.0</p>
        </div> 
        </div>
  
        <div className='space-y-3'>
          <h3 className='font-bold text-lg font-semibold text-slate-700 dark:text-white undefined  '>Course Description</h3>
          <p className={style.gray_500}>{courseDescriptionText}</p>
        </div>
      </div>
      </div>
    )
  }
  
  export default CourseDescription