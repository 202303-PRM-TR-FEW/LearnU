import Info from "@/app/components/profile/Info";
import  Statistics  from "@/app/components/profile/Statistics";
import  Achievements  from "@/app/components/profile/Achievements";
import getCourses from "@/app/lib/getCourses";


export default async function page() {
    const courses = await getCourses();
    console.log(courses);
    return ( 
        <>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-4 ">
            <Info />
            <Statistics />
            <Achievements />
        </div>
        </>
    )
    }    



