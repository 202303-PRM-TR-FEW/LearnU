"use client"

import { useUser } from "@auth0/nextjs-auth0/client";
import { useSelector } from "react-redux";


import Info from "@/app/components/profile/Info";
import  Statistics  from "@/app/components/profile/Statistics";
import  Achievements  from "@/app/components/profile/Achievements";

import Friends from "@/app/components/profile/Friends";



export default function page() {
    const {user} = useUser();
    
    const userData = useSelector((state) => state.user);
    
    const userCourseNumber = userData.myCourses.length

    const savedCoursesNumber = userData.savedCourses.length

    return ( 
        <>
        {session ?
            (<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 text-stone-700 lg:m-10 dark:text-stone-300 ">
                <Info user={user} userCourseNumber={userCourseNumber} savedCoursesNumber={savedCoursesNumber} />
                <Statistics />
                <Achievements />
                <Friends />
            </div>) 
            
            : 
            (<p> Please login</p>)
        
        }
        </>
        
    )
}    



