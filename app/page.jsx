"use client"
import { Reveal } from "./components/UI/Reveal";

import { AiOutlineDingding } from "react-icons/ai";
import {FaLanguage} from "react-icons/fa"
import { useSession, signIn } from "next-auth/react"
import Link from "next/link"


export default function Home() {


    const { data: session } = useSession()

    return (
        <>  
            <div className="container flex h-screen p-10 mx-auto">
                <div className="flex flex-wrap items-center justify-center shadow-xl sm:grid sm:grid-cols-2 bg-stone-100 rounded-3xl text-stone-600" >
                    <div className="flex flex-col items-center justify-center sm:w-screen-1/2">
                        <div className="w-1/2 space-y-5">
                            <Reveal>
                            <div className="flex items-center space-x-5">
                                <FaLanguage className="w-10 h-10 text-blue-500"/>
                                {/* <Link href="/" locale="en" >
                                    English
                                </Link>
                                <Link href="/" locale="tr" >
                                    Türkçe
                                </Link> */}
                            </div>
                            </Reveal>
                            <Reveal delay="0.6">
                            <div className="flex items-center">
                                <AiOutlineDingding size='2rem' className="text-blue-500" />
                                <p className="text-xl text-blue-400">LearnU</p>
                            </div>
                            </Reveal>
                            <div className="space-y-5 ">
                                <div className="space-y-5">
                                <Reveal delay="0.7">
                                    <h1 className="text-4xl text-transparent font-semibold animate-text bg-clip-text bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500 w-full flex-wrap">Discover Your Passion</h1>
                                </Reveal>    
                                <Reveal delay="0.8">
                                    <p className="text-sm text-stone-400">Find out what topics you find interesting, learn a new skill & connect with people that are passionate about similar topics.</p>
                                </Reveal>    
                                </div>
                                <Reveal delay="0.9">
                                <div className="flex flex-col justify-center gap-5 sm:flex-row sm:justify-start">
                                    <div>
                                        <button className="buttons bg-blue-500 rounded-md text-stone-100 text-sm p-2 hover:-translate-x-0.5 transition motion-reduce:hover:translate-x-0 hover:bg-blue-400 active:bg-blue-600">
                                            <Link href="/home">
                                            GET STARTED
                                            </Link>
                                        </button>
                                    </div>
                                    {!session?.user && (<div><button onClick={() => signIn(undefined, { callbackUrl: "/home" })} className="p-2 text-sm rounded-md buttons bg-fuchsia-600 text-stone-100 hover:bg-fuchsia-400 active:bg-fuchsia-600">
                                        SIGN IN
                                    </button>
                                    </div>
                                    )}
                                </div>
                                </Reveal>
                            </div>
                        </div>
                    </div> 
                    <div id="INTRO" className="flex flex-col items-center self-stretch justify-between flex-grow-0 flex-shrink-0 bg-white border border-gray-200 shadow-md opacity-100 w-691 h-804 ">   
                    </div>
                </div>
            </div>

        </>


    )
} 