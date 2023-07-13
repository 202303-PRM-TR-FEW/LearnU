import Link from "next/link";
import { AiOutlineDingding } from "react-icons/ai";
export default function Home() {
    return (

        <div className="container h-screen flex p-10">
            <div className="sm:grid sm:grid-cols-2 flex flex-wrap justify-center items-center bg-stone-100 rounded-3xl text-stone-600 shadow-xl" >
                <div className="sm:w-screen-1/2 flex flex-col justify-center items-center">
                    <div className="w-1/2 space-y-5">

                        <div className="flex flex-row">
                            <AiOutlineDingding size='3rem' color='blue-500' />
                            <p className="font-bold mt-2 text-2xl text-blue-400">LearnU</p>
                        </div>
                        <div className="space-y-5 ">
                            <div className="">
                                <h1 className="text-bold animate-text text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-500">Discover Your Passion</h1>
                                <p className="text-sm text-stone-400"> Find out what topics you find interesting, learn a new skill & connect with people that are passionate about similar topics.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5 justify-center sm:justify-start">
                                <div>
                                    <button className="buttons bg-blue-500 rounded-md text-stone-100 text-sm p-2 hover:-translate-x-0.5 transition motion-reduce:hover:translate-x-0 hover:bg-blue-400 active:bg-blue-600">
                                        <Link href="/home">
                                            GET STARTED
                                        </Link>
                                    </button>
                                </div>
                                <div><button className="buttons  bg-fuchsia-600 rounded-md text-stone-100 text-sm p-2 hover:bg-fuchsia-400 active:bg-fuchsia-600">
                                    <Link href="/login">
                                        LOGIN
                                    </Link>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="INTRO" className="flex flex-col justify-between items-center flex-shrink-0 flex-grow-0 self-stretch w-691 h-804 opacity-100 bg-white  shadow-md border border-gray-200  ">
                </div>
            </div>
        </div>
    )
} 