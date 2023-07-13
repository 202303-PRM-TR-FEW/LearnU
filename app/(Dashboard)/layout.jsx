"use client"
import Aside from "../components/dashboard/Aside";
import { useState, createContext, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/userSlice";
import { fetchUser, sendUser } from "@/store/user-actions";
export const DarkModeContext = createContext();


export default function layout({ children }) {
    const [dark, setDark] = useState(true);
    const [open, setOpen] = useState(false);
    const { data: session, status } = useSession();
    const userData = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!session) return
        if (session.user) {
            dispatch(setUser(session.user.email))
            dispatch(fetchUser(session.user.email))
        }
    }, [session])

    // useEffect(() => {
    //     if (!session) return
    //     if (session.user) {
    //     }
    // }, [session])

    useEffect(() => {
        if (userData.changed) {
            console.log("userData", userData);
            dispatch(sendUser(userData))
        }
    }, [userData])

    const asideHandler = () => {
        setOpen((prev) => !prev);
        const sidebar = document.querySelector("aside");
        const maxSidebar = document.querySelector(".max");
        const miniSidebar = document.querySelector(".mini");
        const roundout = document.querySelector(".roundout");
        const maxToolbar = document.querySelector(".max-toolbar");
        const logo = document.querySelector(".logo");
        const content = document.querySelector(".content");
        if (!open) {
            sidebar.classList.remove("-translate-x-48");
            sidebar.classList.add("translate-x-none");
            maxSidebar.classList.remove("hidden");
            maxSidebar.classList.add("flex");
            miniSidebar.classList.remove("flex");
            miniSidebar.classList.add("hidden");
            maxToolbar.classList.add("translate-x-0");
            maxToolbar.classList.remove("translate-x-24", "scale-x-0");
            logo.classList.remove("ml-12");
            content.classList.remove("ml-12");
            content.classList.add("ml-12", "md:ml-60");
        } else {
            sidebar.classList.add("-translate-x-48");
            sidebar.classList.remove("translate-x-none");
            maxSidebar.classList.add("hidden");
            maxSidebar.classList.remove("flex");
            miniSidebar.classList.add("flex");
            miniSidebar.classList.remove("hidden");
            maxToolbar.classList.add("translate-x-24", "scale-x-0");
            maxToolbar.classList.remove("translate-x-0");
            logo.classList.add("ml-12");
            content.classList.remove("ml-12", "md:ml-60");
            content.classList.add("ml-12");
        }
    };

    const modeHandler = () => {
        setDark((prev) => !prev);
        if (dark) {
            document.documentElement.classList.add("dark");
            document.querySelector(".moon").classList.add("hidden");
            document.querySelector(".sun").classList.remove("hidden");
        } else {
            document.documentElement.classList.remove("dark");
            document.querySelector(".moon").classList.remove("hidden");
            document.querySelector(".sun").classList.add("hidden");
        }
    };
    return (
        <DarkModeContext.Provider value={dark}>
            <div className={`bg-white dark:bg-[#0F172A]`}>
                <>
                    <div className="fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10">
                        <div className="flex items-center justify-center flex-none h-full ml-12 duration-500 ease-in-out transform logo dark:text-white">
                            Home
                        </div>
                        <div className="flex items-center justify-center h-full grow"></div>
                        <div className="flex items-center justify-center flex-none h-full text-center">
                            {session ? (
                                <div className="flex items-center px-3 space-x-3">
                                    {session.user.image && (<div className="flex justify-center flex-none">
                                        <div className="flex w-8 h-8 ">
                                            <img
                                                src={session.user.image}
                                                alt="profile"
                                                className="object-cover rounded-full shadow"
                                            />
                                        </div>
                                    </div>)}
                                    <div
                                        onClick={() => signOut()}
                                        className="hidden text-sm text-black cursor-pointer md:block md:text-md dark:text-white"
                                    >
                                        {session.user.name}
                                    </div>
                                </div>
                            ) : (<button onClick={() => signIn()} className="px-8 py-3 text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-800">
                                Login
                            </button>)}
                        </div>

                    </div>
                    <Aside asideHandler={asideHandler} modeHandler={modeHandler} />
                </>
                <ToastContainer />
                <main className="min-h-screen px-2 pt-20 pb-4 ml-12 duration-500 ease-in-out transform content md:px-5 ">
                    {children}
                </main>
            </div>
        </DarkModeContext.Provider>
    );
}
