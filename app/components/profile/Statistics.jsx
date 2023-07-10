import React from 'react'
import {TiTickOutline} from "react-icons/ti"

export const Statistics = () => {
  return (
    <div>
        <h1 className='font-bold text-lg'> Total Statistics </h1>

        <div className='cards flex flex-row space-x-2'>

            <div className='card bg-gray-100 rounded-xl flex flex-col justify-center items-center p-1 space-y-5 space-x-5 '>
                <div className='icon bg-blue-200 w-full rounded-xl p-5 flex justify-center items-center '> 
                    <TiTickOutline />
                </div>
                <div className='text-center '>
                    <p className='text-xs'>FINISHED COURSES</p>
                    <p className='font-bold  text-base'>3</p>
                </div>
            </div>
            <div className='card bg-gray-100 rounded-xl flex flex-col justify-center items-center p-1 space-y-5 space-x-5'>
                <div className='icon bg-orange-200 w-full rounded-xl p-5 flex justify-center items-center '> 
                    <TiTickOutline />
                </div>
                <div className='text-center '>
                    <p className='text-xs'>FINISHED COURSES</p>
                    <p className='font-bold  text-base'>3</p>
                </div>
            </div>
            <div className='card bg-gray-100 rounded-xl flex flex-col justify-center items-center p-1 space-y-5 space-x-5'>
                <div className='icon bg-green-200 w-full rounded-xl p-5 flex justify-center items-center'> 
                    <TiTickOutline />
                </div>
                <div className='text-center '>
                    <p className='text-xs'>FINISHED COURSES</p>
                    <p className='font-bold  text-base'>3</p>
                </div>
            </div>
            

        </div>
    </div>
  )
}
