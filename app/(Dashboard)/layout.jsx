"use client"
import Aside from "../components/dashboard/Aside";
import { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function layout({ children }) {
    const [dark, setDark] = useState(true);
    const [open, setOpen] = useState(false);
    // const { isAuthenticated, user } = useAuth0();

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
        <div className={`bg-white dark:bg-[#0F172A]`}>
            {/* {isAuthenticated && ( */}
            <>
                <div className="fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10">
                    <div className="flex items-center justify-center flex-none h-full ml-12 duration-500 ease-in-out transform logo dark:text-white">
                        Home
                    </div>
                    <div className="flex items-center justify-center h-full grow"></div>
                    <div className="flex items-center justify-center flex-none h-full text-center">
                        <div className="flex items-center px-3 space-x-3">
                            <div className="flex justify-center flex-none">
                                <div className="flex w-8 h-8 ">
                                    <img
                                        src={"https://avatars.githubusercontent.com/u/78679521?v=4"}
                                        alt="profile"
                                        className="object-cover rounded-full shadow"
                                    />
                                </div>
                            </div>
                            <div
                                className="hidden text-sm text-black cursor-pointer md:block md:text-md dark:text-white"
                            >
                                {/* {user.name} */}Ahmed
                            </div>
                        </div>
                    </div>
                </div>
                <Aside asideHandler={asideHandler} modeHandler={modeHandler} />
            </>
            {/* )} */}
            <ToastContainer />
            <main className="min-h-screen px-2 pt-20 pb-4 ml-12 duration-500 ease-in-out transform content md:px-5 ">
                {children}
            </main>
        </div>
    );
}
