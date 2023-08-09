"use client"

import { useUser } from "@auth0/nextjs-auth0/client";
import { useSelector } from "react-redux";


import Info from "@/app/[locale]/components/profile/Info";
import  Statistics  from "@/app/[locale]/components/profile/Statistics";
import  Achievements  from "@/app/[locale]/components/profile/Achievements";

import Friends from "@/app/[locale]/components/profile/Friends";
import { Reveal } from "@/app/[locale]/components/UI/Reveal";



export default function page() {
    const {user} = useUser();
    
    const userData = useSelector((state) => state.user);
    
    const userCourseNumber = userData.myCourses.length

    const savedCoursesNumber = userData.savedCourses.length

    return ( 
        <>
        {session ?
            (<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 text-stone-700 lg:m-10 dark:text-stone-300 ">
                <Reveal>
                <Info user={user} userCourseNumber={userCourseNumber} savedCoursesNumber={savedCoursesNumber} />
                </Reveal>
                <Reveal delay="0.6">
                <Statistics />
                </Reveal>
                <Reveal delay="0.7">
                <Achievements />
                </Reveal>
                <Reveal delay="0.8">
                <Friends />
                </Reveal>
            </div>) 
            
            : 
            (<p> Please login</p>)
        
        }
        </>
        
    )
}    



