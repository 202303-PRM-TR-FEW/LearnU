import Image from "next/image"

const Friends = () => {
    return (
        <div className="space-y-5 m-5">
            <div className="font-semibold text-3xl">
                Friends
            </div>
            <div className="w-full bg-gray-100 shadow-gray-200 dark:bg-gray-700 dark:shadow-none rounded-lg p-5 lg:m-5 space-y-5 ">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col lg:flex-row items-center space-x-5 ">
                        <div className=' w-8 h-8 lg:w-12 lg:h-12 rounded-full overflow-hidden  '>
                            <img className=' w-full h-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="profile" />
                        </div>
                        <p>William Walker</p>
                    </div>
                    <div className="text-blue-600">
                        PROFILE
                    </div>

                </div>
                <hr />
                <div className="flex justify-between items-center">
                    <div className="flex flex-col lg:flex-row items-center space-x-5">
                        <div className=' w-8 h-8 lg:w-12 lg:h-12 rounded-full overflow-hidden  '>
                            <img className=' w-full h-full object-cover' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
                        </div>
                        <p>William Walker</p>
                    </div>
                    <div className="text-blue-600">
                        PROFILE
                    </div>
                </div>
                <hr />
                <div className="text-blue-600" >
                    VIEW ALL
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0 items-center justify-center py-5">
                <button className="w-max border font-bold py-1 px-5 lg:px-16 rounded-lg hover:translate-y-1 transition-all text-[#0F172A] hover:text-white bg-white-500 border-[#0F172A] hover:bg-[#253762]">Find Friends</button>
                <button className="w-max border font-bold py-1 px-5 lg:px-16 rounded-lg hover:translate-y-1 transition-all hover:text-[#0F172A] text-white hover:bg-white border-[#0F172A] bg-[#253762]">Invite Friends</button>
            </div>
        </div>
    )
}

export default Friends
