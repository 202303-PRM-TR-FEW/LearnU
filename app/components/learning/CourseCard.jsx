"use client"
import React from 'react'
import {createContext, useState} from "react"

export const CourseIdContext = createContext();

const CourseCard = ( {isDark, title, trainer, imgUrl, courseId, setCourseId } ) => {
    
    const handleClick = () => {
        setCourseId(courseId);
      };

    const percentage = "45"
    const dark = {
        bg_dark: `bg-gray-600 hover:bg-gray-800 hover:border-gray-500 text-stone-200`,
    }

  return (
    <div className={` group shadow-sm text-xs sm:text-md font-normal w-full grid grid-cols-4 rounded-2xl  p-2 hover:border border-blue-300 hover:bg-blue-100 ${isDark? dark.bg_dark : "bg-white"} `} onClick={handleClick}>

        <div className='left-section flex flex-grow items-center justify-center '>
            <div className='w-full h-full'>
                <img className='rounded-2xl w-full h-full object-cover ' src={imgUrl} alt="" />   
            </div>
        </div>

        <div className='right-section col-span-3 space-y-2 sm:space-y-5 p-4'>
            <div>
                <h1 className='sm:text-lg font-bold'> {title} </h1>
                <p className='text-stone-400'> {trainer} </p>
            </div>

            <div className='sm:space-y-2'>
                <div className=' progress-bar w-full sm:h-2.5 bg-gray-200 rounded-full group-hover:bg-white'>
                    <div className=" sm:h-2.5 bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${percentage}%` }}> </div>
                </div>
                <p className='text-stone-400'> <span> {percentage}% </span> complete </p>
            </div>
        </div>
    </div>
  )
}

export default CourseCard