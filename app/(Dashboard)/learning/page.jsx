"use client"
import React from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import {IoIosStats} from "react-icons/io"

import { DarkModeContext } from '../layout'
import CourseDescription from '@/app/components/learning/CourseDescription'
import CourseCard from '@/app/components/learning/CourseCard'

const page = () => {
  const data = [
    {
      id: 1,
      title: "Course Title 1",
      trainer: "trainer name 1",
      duration: "00",
      rating: "3.0",
      description: "This comprehensive course is designed to provide a solid foundation in web development. Whether you're a beginner or have some experience, this course will take you through the essentials of building websites from scratch."
    },
    {
      id: 2,
      title: "Course Title 2",
      trainer: "trainer name 2",
      duration: "01",
      rating: "4.5",
      description: "This comprehensive course is designed to provide a solid foundation in web development. Whether you're a beginner or have some experience, this course will take you through the essentials of building websites from scratch."
    },
    {
      id: 3,
      title: "Course Title 3",
      trainer: "trainer name 3",
      duration: "02",
      rating: "4.2",
      description: "This comprehensive course is designed to provide a solid foundation in web development. Whether you're a beginner or have some experience, this course will take you through the essentials of building websites from scratch."
    },
    {
      id: 4,
      title: "Course Title 4",
      trainer: "trainer name 4",
      duration: "03",
      rating: "4.8",
      description: "This comprehensive course is designed to provide a solid foundation in web development. Whether you're a beginner or have some experience, this course will take you through the essentials of building websites from scratch."
    },
  ];
  

  const mode = useContext(DarkModeContext)
  const isDark = !mode
  

  const style ={
    main: `flex flex-col sm:flex-row font-bold rounded-lg`,
    left_section : `  w-full sm:w-screen-1/2 p-5 space-y-7`,
    right_section: ` w-full sm:w-screen-1/2 h-max p-5 sm:m-5 rounded-lg`,
    buttonContainer:`w-full text-sm grid grid-cols-1 md:grid-cols-2 gap-4 `,
    button: `w-full border font-bold py-2 px-4 rounded-lg hover:translate-y-1 transition-all`,
    linkButton:` w-full font-bold py-2 px-4 rounded-lg hover:translate-y-1 transition-all`,
  }

  const light = {
    main:`bg-gray-100 text-stone-800`,
    right_section: `bg-white`,
    button: `text-[#0F172A] hover:text-white bg-white-500 border-[#0F172A] hover:bg-[#253762] `,
    linkButton:`bg-[#2d4781] hover:bg-[#253762] text-white  `,
  }

  const dark ={
    main: `bg-gray-700 text-stone-200`,
    right_section: `bg-[#253762] `,
    button: `text-stone-200 hover:text-[#0F172A] bg-[#253762] border-stone-200 hover:bg-stone-300`,
    linkButton:`bg-[#0F172A] hover:bg-[#3c5fad] text-white  `,

  }

  return (
    <div className={`${style.main} ${isDark ? dark.main : light.main}`}>
      <div className={style.left_section}>
        <div className='flex justify-between'>
          <h1 className='text-3xl'>My Learning</h1>
          <div className='flex flex-row space-x-1 items-center'>
            <IoIosStats className='text-stone-500' />
            <p className='text-stone-500 font-normal'>Statistics</p>
          </div>

        </div>
          <div className='space-y-5'>
            {data.map(course => (
              <CourseCard key={course.id} title={course.title} trainer={course.trainer} isDark={isDark} />
            ))}
          </div> 
      </div>
      <div className={`${style.right_section} ${isDark? dark.right_section : light.right_section}`}>
        <CourseDescription isDark={isDark}/>
        <div className={style.buttonContainer}>
          <button className={`${style.button} ${isDark? dark.button : light.button}`}>REVIEW COURSE</button>
          <Link href="/#">
            <button className={`${style.linkButton} ${isDark? dark.linkButton : light.linkButton}`}>CONTINUE LEARNING</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page