import React from "react";
import SearchForm from "@/app/components/search/seachForm";

function page () {
    const styling = {
        container: "ml-20",
        textHeader: "text-4xl flex-grow-1 m-0 overflow-hidden text-32 font-medium text-left tracking-normal leading-42 whitespace-pre opacity-100 visible font-rubik"
    }
    return (
        <div className={styling.container} >
            <h1 className={styling.textHeader}>Find your favorites</h1>
            <SearchForm/>

        </div>
        
    )
}

export default page