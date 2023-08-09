"use client"
import { Reveal } from "./components/UI/Reveal";
import Loading from "./loading";

import { useUser } from '@auth0/nextjs-auth0/client';
import { AiOutlineDingding } from "react-icons/ai";
import {FaLanguage} from "react-icons/fa"
import Link from "next/link"
import {getTranslator} from 'next-intl/server';


export default async function Home() {
    const t = await getTranslator(locale, 'Index');
    const { user, isLoading } = useUser();

if (isLoading) return <Loading />;
    return (
        <>  
        <h1>{t('title')}</h1>
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
                                    <h1 className="flex-wrap w-full text-4xl font-semibold text-transparent animate-text bg-clip-text bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500">Discover Your Passion</h1>
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
                                    {!user && (<div>
                                        <a href="/api/auth/login" className="inline-block p-2 text-sm text-center rounded-md buttons bg-fuchsia-600 text-stone-100 hover:bg-fuchsia-400 active:bg-fuchsia-600">
                                        SIGN IN
                                    </a>
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