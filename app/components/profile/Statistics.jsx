import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import { PiClockCountdownLight } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa";

export default function Statistics () {
    const data = {
        courses : "3",
        hours:"56",
        skills:"7",
    }

  return (
    <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start space-y-3 '>
        <h1 className='font-semibold text-lg '> Total Statistics </h1>

        <div className='cards flex flex-row space-x-2'>

            <div className='card shadow bg-gray-100 rounded-xl flex flex-col p-1 space-y-5 text-center '>
            <div className='icon bg-blue-200 w-full rounded-xl p-5 flex justify-center items-center '> 
                    <AiOutlineCheck className='text-blue-500' />
                </div>
                <div className='px-3'>
                    <p className='text-xs font-medium'>FINISHED COURSES</p>
                    <p className='font-bold  text-base'> {data.courses} </p>
                </div>
            </div>

            <div className='card shadow bg-gray-100 rounded-xl flex flex-col justify-center items-center p-1 space-y-5 text-center'>
                <div className='icon bg-orange-200 w-full rounded-xl p-5 flex justify-center items-center '> 
                    <PiClockCountdownLight className='text-orange-500 text-lg'  />
                </div>
                <div className='px-3'>
                    <p className='text-xs font-medium'>HOURS LEARNED</p>
                    <p className='font-bold  text-base'>{data.hours}</p>
                </div>
            </div>
            <div className='card shadow bg-gray-100 rounded-xl flex flex-col justify-center items-center p-1 space-y-5 text-center'>
            <div className='icon bg-lime-100 w-full rounded-xl p-5 flex justify-center items-center '> 
                    <FaTrophy className='text-lime-500' />
                </div>
                <div className='px-3'>
                    <p className='text-xs font-medium'>SKILLS ACHIEVED</p>
                    <p className='font-bold  text-base'> {data.skills} </p>
                </div>
            </div>
            

        </div>
    </div>
  )
}
