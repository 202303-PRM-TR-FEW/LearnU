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
    <div className='w-full h-full flex flex-col '>
        <h1 className='mb-8 text-3xl font-semibold'>
            Total Statistics
        </h1>

        <div className=' grid gap-2 mb-12 md:grid-cols-3 sm:grid-cols-2 '>
            <div className='flex flex-col items-start justify-between p-2 bg-slate-100 rounded-3xl dark:bg-slate-800 space-y-5'>
                <div className='icon bg-blue-200 w-full rounded-xl p-7 flex justify-center items-center '> 
                        <AiOutlineCheck className='text-blue-500' />
                    </div>
                    <div className='w-full px-3 flex flex-col justify-center items-center space-y-2'>
                        <p className=' text-md sm:text-xs font-medium'>HOURS LEARNED</p>
                        <p className='font-bold  text-base'> {data.hours} </p>
                    </div>
            </div>
            <div className='flex flex-col items-start justify-between p-2 bg-slate-100 rounded-3xl dark:bg-slate-800 space-y-5'>
                <div className='icon bg-orange-200 w-full rounded-xl p-7 flex justify-center items-center '> 
                        <PiClockCountdownLight className='text-orange-500' />
                    </div>
                    <div className='w-full px-3 flex flex-col justify-center items-center space-y-2'>
                        <p className=' text-md sm:text-xs font-medium'>SKILLS ACHIEVED</p>
                        <p className='font-bold  text-base'> {data.skills} </p>
                    </div>
            </div>
            <div className='flex flex-col items-start justify-between p-2 bg-slate-100 rounded-3xl dark:bg-slate-800 space-y-5'>
                <div className='icon bg-lime-100 w-full rounded-xl p-7 flex justify-center items-center '> 
                        <FaTrophy className='text-lime-500' />
                    </div>
                    <div className='w-full px-3 flex flex-col justify-center items-center space-y-2'>
                        <p className=' text-md sm:text-xs font-medium'>FINISHED COURSES</p>
                        <p className='font-bold  text-base'> {data.courses} </p>
                    </div>
            </div>


        </div>

    </div>

    
  )
}
