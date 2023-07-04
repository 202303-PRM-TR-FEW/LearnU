import React from 'react'

const CourseCard = ( {isDark, title, trainer} ) => {
    const imgUrl = "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080"

    //PROPS START
    const percentage = "45"
    //PROPS END
    
    const dark = {
        bg_dark: `bg-[#20293a] hover:bg-gray-600 hover:border-gray-500`,
    }

  return (
    <div className={`group shadow-sm text-xs sm:text-md font-normal w-full grid grid-cols-4  bg-white rounded-2xl  p-2 hover:border border-blue-300 hover:bg-blue-100 ${isDark? dark.bg_dark : ""} `}>

        <div className='left-section flex flex-grow items-center justify-center '>
            <div className='w-full h-full'>
                <img className='rounded-2xl w-full h-full object-cover ' src={imgUrl} alt="" />   
            </div>
        </div>

        <div className='right-section col-span-3 space-y-2 sm:space-y-5 p-4'>
            <div>
                <h1 className='sm:text-lg font-bold'> {title} </h1>
                <p className='text-stone-500'> {trainer} </p>
            </div>

            <div className='sm:space-y-2'>
                <div className=' progress-bar w-full sm:h-2.5 bg-gray-200 rounded-full group-hover:bg-white'>
                    <div className=" sm:h-2.5 bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${percentage}%` }}  > </div>
                </div>
                <p className='text-stone-500'> <span> {percentage}% </span> complete </p>
            </div>
        </div>
    </div>
  )
}

export default CourseCard