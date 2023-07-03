import getCourses from "@/app/lib/getCourses"

export default async function page() {
    const courses = await getCourses()
    console.log("courses", courses)
    return (
        <div>page</div>
    )
}
