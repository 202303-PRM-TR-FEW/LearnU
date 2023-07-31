"use client"

import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";


import Info from "@/app/[locale]/components/profile/Info";
import  Statistics  from "@/app/[locale]/components/profile/Statistics";
import  Achievements  from "@/app/[locale]/components/profile/Achievements";
import getCourses from "@/app/[locale]/lib/getCourses";
import Friends from "@/app/[locale]/components/profile/Friends";



export default function page() {
    const { data: session, status } = useSession();
    console.log(session)
    
    const user = useSelector((state) => state.user);
    console.log(user)
    
    const userCourseNumber = user.myCourses.length
    console.log(userCourseNumber)

    const savedCoursesNumber = user.savedCourses.length

    return ( 
        <>
        {session ?
            (<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 text-stone-700 lg:m-10 dark:text-stone-300 ">
                <Info user={session.user} userCourseNumber={userCourseNumber} savedCoursesNumber={savedCoursesNumber} />
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



