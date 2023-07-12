import React from "react";
import SearchForm from "@/app/components/search/seachForm";

function page () {
    const styling = {
        container: "ml-10 sm:ml-20",
        textHeader: " text-3xl font-semibold text-slate-700 dark:text-white undefined"
    }
    return (
        <div className={styling.container} >
            <h1 className={styling.textHeader}>Find your favorites</h1>
            <SearchForm/>

        </div>
        
    )
}

export default page