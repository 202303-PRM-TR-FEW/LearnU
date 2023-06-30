import React from 'react'

import CourseDescription from '@/app/components/learning/CourseDescription'

const page = () => {
  const style ={
    main: `flex flex-col sm:flex-row bg-gray-100`,
    left_section_light : `  w-full sm:w-screen-1/2 p-5`,
    right_section_light: `bg-white w-full sm:w-screen-1/2 h-max`,
    h1_light: `text-3xl text-gray-800 font-bold`,
  }
  return (
    <div className={style.main}>
      <div className={style.left_section_light}>
          <h1 className={style.h1_light}>My Learning</h1>
      </div>
      <div className={style.right_section_light}>
        <CourseDescription />
        <div className='flex flex-row space-x-3 p-3 text-sm'>
          <button className='text-blue-500 hover:text-white bg-white-500 border border-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full'>REVIEW COURSE</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full'>CONTINUE LEARNING</button>
        </div>
      </div>
    </div>
  )
}

export default page