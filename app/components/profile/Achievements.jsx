import React from 'react'
import {FaTrophy} from "react-icons/fa"
import { PiClockCountdownLight } from "react-icons/pi";

export default function Achievements () {

  return (
    <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start space-y-3 m-5 '>
        <h2 className='font-semibold text-lg'>Achievements</h2>

        <div className='card w-full rounded-xl grid grid-cols-4
        shadow-md bg-gray-100 shadow-gray-200 dark:bg-gray-300 dark:shadow-none ' >
            
            <div className='flex justify-center items-center bg-orange-200 m-2 rounded-xl'>
            <PiClockCountdownLight className='text-orange-400 font-bold w-6 h-6' />
            </div>

            <div className='flex flex-col m-2 p-2 space-y-2 col-span-3  '>
                <div className='flex justify-between'>
                    <h2 className='font-semibold'>Committed Learner</h2>
                    <p className='text-xs'>2/3</p>
                </div>
                <div className=' progress-bar w-full sm:h-2.5 bg-gray-200 rounded-full group-hover:bg-white'>
                    <div className=" sm:h-2.5 bg-orange-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `15%` }}> </div>
                </div>
                    <p className='text-xs '>Reach a 3 day streak</p>
            </div>

        </div>
       
        <div className='card w-full rounded-xl grid grid-cols-4
        shadow-md bg-gray-100 shadow-gray-200 dark:bg-gray-300 dark:shadow-none ' >
            
            <div className='flex justify-center items-center bg-lime-100 m-2 rounded-xl'>
            <FaTrophy className='text-lime-500 w-5 h-5' />
            </div>

            <div className='flex flex-col m-2 p-2 space-y-2 col-span-3  '>
                <div className='flex justify-between'>
                    <h2 className='font-semibold'>Committed Learner</h2>
                    <p className='text-xs'>2/3</p>
                </div>
                <div className=' progress-bar w-full sm:h-2.5 bg-gray-200 rounded-full group-hover:bg-white'>
                    <div className=" sm:h-2.5 bg-lime-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `15%` }}> </div>
                </div>
                    <p className='text-xs '>Earn 1800 more points</p>
            </div>

        </div>

    </div>
  )
}

