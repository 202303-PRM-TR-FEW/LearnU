"use client"

import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";


import Info from "@/app/components/profile/Info";
import  Statistics  from "@/app/components/profile/Statistics";
import  Achievements  from "@/app/components/profile/Achievements";
import getCourses from "@/app/lib/getCourses";
import Friends from "@/app/components/profile/Friends";



export default function page() {
    const { data: session, status } = useSession();
    console.log(session)
    
    const user = useSelector((state) => state.user);
    console.log(user)
    
    const userCourseNumber = user.savedCourses.length
    console.log(userCourseNumber)


    return ( 
        <>
        {session ?
            (<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 text-stone-700 lg:m-10 dark:text-stone-300 ">
                <Info user={session.user} userCourseNumber={userCourseNumber} />
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



