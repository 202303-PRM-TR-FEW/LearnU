
"use client";
import React, { useState, useEffect } from "react";
import SearchForm from "@/app/[locale]/components/search/seachForm";
import getCourses from "@/app/[locale]/lib/getCourses";

function Page() {
  const styling = {
    container: "ml-10 sm:ml-20",
    textHeader: "text-3xl font-semibold text-slate-700 dark:text-white undefined",
  };

  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedCourses = await getCourses();
        
        setCoursesData(fetchedCourses);
      } catch (error) {
        console.error("Error fetching courses data:", error);
      }
    }

    fetchData();
  }, []);
  

  const filterCourses = (selectedCategory, searchQuery) => {
    return coursesData.filter((course) => {
      const matchesCategory = selectedCategory === "" || course.category === selectedCategory;
      const matchesSearch =
        course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.trainerName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  return (
    <div className={styling.container}>
      <h1 className={styling.textHeader}>Find your favorites</h1>
      <SearchForm filterCourses={filterCourses} />
    </div>
  );
}

export default Page;
