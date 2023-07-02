import React from 'react'
import {AiFillClockCircle, AiFillStar} from "react-icons/ai"

const CourseDescription = ({isDark}) => {

  console.log(isDark)
  const style = {
    container : ` p-5 rounded-xl  h-full flex flex-col `,
    image_container : `bg-cover bg-center bg-no-repeat rounded-xl border-0 `,
    course_title : ` text-xl font-bold`,
    gray_500 : `text-gray-500`
  }

  const dark = {
    course_title : `text-stone-200`,
  }

  //PROPS - MAY COME FROM REDUX LIB WHEN THE API IS DETERMINED AND LIBARY IS CONSTRUCTED
  const imgUrl = "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080"

  const courseTitle = "Becoming a Photographer"

  const trainerSvg = "https://avatars.githubusercontent.com/u/78679521?v=4" 

  const time = "43"
  const rating = "4.7"
  
  const courseDescriptionText = "This comprehensive course is designed to provide a solid foundation in web development. Whether you're a beginner or have some experience, this course will take you through the essentials of building websites from scratch."

  return (

    <div className={`${style.container} ${isDark? dark.course_title : ""}`}>
        <img className={style.image_container} src={imgUrl} alt="" />
      
      <div className='p-4 space-y-5'>
        <h2 className={style.course_title}>{courseTitle}</h2>
        
        <div className='flex flex-row items-between items-center w-max rounded-full shadow p-1' >
        <img
          src={trainerSvg}
          alt="trainer"
          className="object-cover rounded-full shadow w-9 h-9"
       />
        <p className='px-2 '> Clara Manning</p>
      </div>

      <div> 
      <div className='flex items-center space-x-1 text-gray-500'>
        <AiFillClockCircle />
        <p>{time}m</p>
      </div>  

      <div className='flex items-center space-x-1 text-gray-500'>
        <AiFillStar />
        <p>{rating}/5.0</p>
      </div> 
      </div>

      <div className='space-y-3'>
        <h3 className='font-bold text-lg '>Course Description</h3>
        <p className={style.gray_500}>{courseDescriptionText}</p>
      </div>
    </div>

    </div>
  )
}

export default CourseDescription