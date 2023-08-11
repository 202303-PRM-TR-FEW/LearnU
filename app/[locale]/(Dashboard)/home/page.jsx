"use client"
import getCourses from "@/app/lib/getCourses";
import CoursesCard from "@/app/components/home/CoursesCard";
import Title from "@/app/components/UI/Title";
import CategoryCard from "@/app/components/home/CategoryCard";
import { TbWorld } from "react-icons/tb";
import { MdOutlineDesignServices,MdBusinessCenter,MdOutlineScreenshotMonitor } from "react-icons/md";
import { BsLightbulbFill,BsGridFill } from "react-icons/bs";
import {FaCamera} from "react-icons/fa";
import LearningCard from "@/app/components/home/LearningCard";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useEffect,useState } from "react";
import { Reveal } from "@/app/components/UI/Reveal";

import {useTranslations} from 'next-intl';


export default function page() {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [coursesViewer, setCoursesViewer] = useState(4);
    const myCoursesIds = useSelector(state => state.user.myCourses);
    const t = useTranslations('home');


    useEffect(() => {
        async function fetchCourses() {
          const fetchedCourses = await getCourses();
          setCourses(fetchedCourses);
            setFilteredCourses(fetchedCourses);
        }
        fetchCourses();
      }, []);

        const filteredCoursesHandler = (filter)=>{
            const filtered = filter === "All" ? courses : courses.filter(course => course.category === filter);
            setFilteredCourses(filtered);
        }

    const myLearning = courses.filter(course =>  myCoursesIds.some(idObj => idObj.id === course.id));
    const otherCourses = filteredCourses.filter(course =>  myCoursesIds.every(idObj => idObj.id !== course.id));


    return (
        <div className="flex flex-col w-full h-full">
            <Reveal>
            <Title title={t('title1')}/>
            </Reveal>
            <Reveal delay="0.6">
            <div className="grid gap-2 mb-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {otherCourses.slice(0,coursesViewer).map((course) => (
                    <CoursesCard key={course.id} id={course.id} title={course.courseName} img={course.img} mins={course.duration.mins} hours={course.duration.hours} rating={course.rating} price={course.price} trainer={course.trainerName} />
                ))}
            </div>
            </Reveal>
                <button className="self-center px-4 py-2 mb-8 text-xl text-center text-white bg-blue-600 rounded-lg disabled:cursor-not-allowed disabled:bg-blue-950"
                onClick={() => setCoursesViewer(prev => prev+4)} disabled={coursesViewer >= otherCourses.length}>{t('button1')}</button>
            <Reveal delay="0.7">
            <Title title={t('title2')} />
            </Reveal>
            <Reveal delay="0.8">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12 sm:justify-between lg:flex-nowrap">
                <CategoryCard filter={filteredCoursesHandler} title={t('categories.1')} Icon={TbWorld} />
                <CategoryCard filter={filteredCoursesHandler} title={t('categories.2')} Icon={MdOutlineDesignServices} />
                <CategoryCard filter={filteredCoursesHandler} title={t('categories.3')} Icon={MdOutlineScreenshotMonitor} />
                <CategoryCard filter={filteredCoursesHandler} title={t('categories.4')} Icon={BsLightbulbFill} />
                <CategoryCard filter={filteredCoursesHandler} title={t('categories.5')} Icon={MdBusinessCenter} />
                <CategoryCard filter={filteredCoursesHandler} title={t('categories.6')} Icon={FaCamera} />
                <CategoryCard filter={filteredCoursesHandler} title="All" Icon={BsGridFill} />
            </div>
            </Reveal>
            <Reveal delay="0.9">
            <Title title={t('title3')} />
            </Reveal>
            <Reveal delay="1">
            <div className="grid gap-4 lg:grid-cols-2">
                {myLearning?.slice(0,2).map((course) => (
                    <LearningCard completed={70} key={course.id} id={course.id} title={course.courseName} img={course.img} trainer={course.trainerName} />
                ))}
            </div>
            </Reveal>
            {myLearning?.length >= 1 ? (
                    <Link href="/courses" className="self-center w-64 px-4 py-2 mt-8 text-2xl text-center text-white bg-blue-600 rounded-lg">{t('button2')}</Link>
                ):
                (
                <p className="text-2xl text-slate-800 dark:text-white">{t("quote")}</p>
                )
                }
        </div>

    )
}
