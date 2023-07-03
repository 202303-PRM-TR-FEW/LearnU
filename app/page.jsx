import Link from "next/link"

export default function Home() {
    return (
        <>
        <div className="h-screen flex p-10 ">

        
        <div className="sm:grid sm:grid-cols-2 flex justify-center items-center bg-stone-100  rounded-3xl text-stone-600 shadow-xl">
            <div className="sm:w-screen-1/2 flex flex-col justify-center items-center ">
                <div className="w-1/2 space-y-5">
                    <div className="flex space-x-5 ">
                        <div>logo</div>
                        <p className=" font-bold text-blue-400 ">LearnU</p>
                    </div>
                    <div className=" space-y-5">
                        <h1 className="text-bold animate-text text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500 ">Discover Passion</h1>
                        <p className="text-sm text-stone-400">Find out what topics you find interesting. Learn a new skill & connect with people that are passionate about similar topics.</p>
                        <button className=" bg-blue-500 rouneded rounded-md text-stone-100 text-sm p-2 hover:bg-blue-400 active:bg-blue-600 hover:translate-y-1 transition-all" >
                            <Link href="/home">
                            GET STARTED
                            </Link>
                            </button>
                    </div>
                </div>

            </div>
            <div className="right-section sm:w-screen-1/2 h-full  bg-white justify-center rounded-3xl hidden sm:flex">
                <div className="flex items-center justify-center ">
                    <img className="w-3/5 " src={"https://assets.api.uizard.io/api/cdn/stream/a8ce660d-47da-404a-b3b3-63ca6970ddcf.png"} alt="" />  
                </div>
            </div>
        </div>
        </div>   
        </>
  )
}
