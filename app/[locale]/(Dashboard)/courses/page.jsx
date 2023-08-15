"use client"
import React from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { IoIosStats } from "react-icons/io"
import { useEffect, useState } from "react"
import { useSelector, useDispatch  } from "react-redux";
import {useTranslations} from 'next-intl';





import { DarkModeContext } from '../layout'
import CourseDescription from '@/app/components/courses/CourseDescription'
import CourseCard from '@/app/components/courses/CourseCard'
import getCourses from "@/app/lib/getCourses"
import { setRecommendedData } from '@/store/userSlice';
import { Reveal } from '@/app/components/UI/Reveal'



const page = () => {
  const t = useTranslations('courses');

  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState('09cb9789-12c7-4c4a-9513-fa76146d0017')
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch(); 

  const savedCoursesId = user.myCourses.map((obj) => obj.id)

  const filteredCourses = courses.filter((course) =>
  savedCoursesId.includes(course.id)
);
  const handleSendData = (recommendedData) => {
    dispatch(setRecommendedData(recommendedData));
  };


  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourses();
      setCourses(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleSelectedCourseChange = () => {
      const selectedCourse = courses.find((course) => course.id === courseId)
      setSelectedCourse(selectedCourse)
    };

    if (courses.length > 0) {
      handleSelectedCourseChange();
    }
  }, [courseId, courses])


  const mode = useContext(DarkModeContext)
  const isDark = !mode


  const style = {
    main: `flex flex-col sm:flex-row font-bold rounded-lg`,
    left_section: `  w-full sm:w-screen-1/2 p-5 space-y-7`,
    right_section: ` w-full sm:w-screen-1/2 h-max p-5 sm:m-5 rounded-lg`,
    buttonContainer: `w-full text-sm grid grid-cols-1 md:grid-cols-2 gap-4 `,
    button: `w-full border font-bold py-2 px-4 rounded-lg hover:translate-y-1 transition-all`,
    linkButton: ` w-full font-bold py-2 px-4 rounded-lg hover:translate-y-1 transition-all`,
  }

  const light = {
    main: `bg-gray-100 text-stone-800`,
    right_section: `bg-white`,
    button: `text-[#0F172A] hover:text-white bg-white-500 border-[#0F172A] hover:bg-[#253762] `,
    linkButton: `bg-[#2d4781] hover:bg-[#253762] text-white  `,
  }

  const dark = {
    main: `bg-gray-700 text-stone-200`,
    right_section: `bg-[#253762] `,
    button: `text-stone-200 hover:text-[#0F172A] bg-[#253762] border-stone-200 hover:bg-stone-300`,
    linkButton: `bg-[#0F172A] hover:bg-[#3c5fad] text-white  `,

  }

  return (

    (filteredCourses.length === 0) ? (
      <div className='flex items-center justify-center w-full h-full'>
        <Link href="/home">
        <button className='p-5 bg-purple-700 rounded-lg' >
          {t("button1")}
        </button>
        </Link>
      </div>
    )
    : 
    
    (<div className={`${style.main} ${isDark ? dark.main : light.main}`}>
      <div className={style.left_section}>
      <Reveal>
        <div className='flex justify-between'>
          <h1 className='text-3xl'>{t("h1")}</h1>
          <div className='flex flex-row items-center space-x-1'>
            <IoIosStats className='text-stone-500' />
          </div>
        </div>
      </Reveal>

      <Reveal delay="0.6">
        <div className='space-y-5'>
         {filteredCourses.map(course => (
            <CourseCard key={course.id} title={course.courseName} trainer={course.trainerName} imgUrl={course.img} isDark={isDark} courseId={course.id}
              setCourseId={setCourseId} />
          ))}
              </div>
      </Reveal>      
            </div>
      <Reveal delay="0.6" >
            <div className={`${style.right_section} ${isDark ? dark.right_section : light.right_section}`}>
              <CourseDescription isDark={isDark} selectedCourse={selectedCourse} />
              <div className={style.buttonContainer}>
                <button onClick={() => handleSendData({courseId: selectedCourse.id })} className={`${style.button} ${isDark ? dark.button : light.button}`}>{t("button2")}</button>
                <Link href="/home">
                  <button className={`${style.linkButton} ${isDark ? dark.linkButton : light.linkButton}`}>{t("button3")}</button>
                </Link>
              </div>
            </div>
      </Reveal>        
          </div>)
          
  )
}

export default page