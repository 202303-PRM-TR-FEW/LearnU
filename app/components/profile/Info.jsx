import {GrLocationPin} from 'react-icons/gr'

const Info = ( { user, userCourseNumber }) => {
    console.log(user)
    const userStatic = {

        location: "ANKARA",
        profileInfo : {
            followers: "2",
            following:"32",
        }
    }

    const dark = {
        numbersContainer: `bg-gray-100 rounded-xl border-4 border-gray-200 `,
    }
  return (
    <div className=" lg:grid lg:grid-cols-3 flex flex-col items-center justify-center space-y-5 ">

        
            <div className=' w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden  '>
                <img className=' w-full h-full object-cover' src={user.image} alt="profile" />
            </div>
        

        <div className='right-container flex flex-col justify-center items-center lg:col-span-2 lg:items-start space-y-5 '>

            <div>
                <h1 className='text-2xl font-bold'>{user.name}</h1>
                <div className='flex  items-center'>
                    <GrLocationPin className='w-4 h-4 dark:text-stone-200' />
                    <p className='text-xs'>{userStatic.location}</p>
                </div>    
            </div>
      
           

           <div className={`numbers-container flex flex-row justify-center items-center text-xs space-x-2 p-3 bg-gray-100 rounded-xl border-4 border-gray-200 dark:bg-gray-700`}
>
                <div className='text-center'>
                    <p className='font-bold text-base'>{userCourseNumber}</p>
                    <p>MY COURSES</p>
                </div>
                <div className='text-center'>
                    <p className='font-bold text-base'>{userStatic.profileInfo.followers}</p>
                    <p>FOLLOWERS</p>
                </div>
                <div className='text-center'>
                    <p className='font-bold text-base'>{userStatic.profileInfo.following}</p>
                    <p>FOLLOWING</p>
                </div>
           </div>

        </div>
    </div>
       
  )
}

export default Info