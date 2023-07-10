import Info from "@/app/components/profile/Info";
import { Statistics } from "@/app/components/profile/Statistics";
import getCourses from "@/app/lib/getCourses";


export default async function page() {
    const courses = await getCourses();
    console.log(courses);
    return ( 
        <>
        <div className="grid sm:grid-cols-2">
            <Info />
            <Statistics />
        </div>
        </>
    )
    }    



