
import Info from "@/app/components/profile/Info";
import  Statistics  from "@/app/components/profile/Statistics";
import  Achievements  from "@/app/components/profile/Achievements";
import getCourses from "@/app/lib/getCourses";
import Friends from "@/app/components/profile/Friends";


export default function page() {


    return ( 
        
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-4 text-stone-700 lg:m-10 ">
            <Info />
            <Statistics />
            <Achievements />
            <Friends />
        </div>
        
    )
    }    



