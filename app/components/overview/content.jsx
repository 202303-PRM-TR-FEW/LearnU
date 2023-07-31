import React, { useState } from "react";
import {FcCheckmark} from "react-icons/fc"
import {FiCheck} from "react-icons/fi"



function CourseContent () {
    return (
        <div >
          <div className=" mb-3 collapse collapse-arrow bg-zinc-200 rounded-lg shadow-lg">
            <input type="radio" name="my-accordion-2" checked="checked" /> 
            <div className="collapse-title font-semibold text-slate-700 dark:text-white undefined text-l font-medium">
            <div className="flex">
            <FcCheckmark className=" h-5 w-7 mr-2"/>
            <p>Introduction</p>
            </div>
            </div>
            <div className="collapse-content"> 
            <div className="mt-2">
                <div className="flex">
                <FcCheckmark className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">1. Essential part of this content</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">7m 25s</p>
            </div>
            <hr className=" border-t-1 border-zinc-300  mt-2"/>
            <div className="mt-2">
                <div className="flex">
                <FcCheckmark className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">2. Practice Strategy</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">9m 42s</p>
            </div>
            <hr className=" border-t-1 border-zinc-300  mt-2"/>
            <div className="mt-2">
                <div className="flex">
                <FcCheckmark className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">3. Methodology</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">5m 16s</p>
            </div>
            </div>
          </div>


          <div className="mb-3 collapse collapse-arrow bg-zinc-200 rounded-lg shadow-lg">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title font-semibold text-slate-700 dark:text-white undefined text-l font-medium">
            <div className="flex">
            <FcCheckmark className=" h-5 w-7  mr-2"/>
            <p>Advanced</p>
            </div>
            </div>
            <div className="collapse-content"> 
            <div className="mt-2">
                <div className="flex">
                <FcCheckmark className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">1. Essential part of this content</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">7m 25s</p>
            </div>
            <hr className=" border-t-1 border-zinc-300  mt-2"/>
            <div className="mt-2">
                <div className="flex">
                <FcCheckmark className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">2. Practice Strategy</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">9m 42s</p>
            </div>
            <hr className=" border-t-1 border-zinc-300  mt-2"/>
            <div className="mt-2">
                <div className="flex">
                <FiCheck className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">3. Methodology</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">5m 16s</p>
            </div>
            </div>
          </div>
          <div className="mb-3 collapse collapse-arrow bg-zinc-200 rounded-lg shadow-lg">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title font-semibold text-slate-700 dark:text-white undefined text-l font-medium">
            <div className="flex">
            <FiCheck className=" h-5 w-7  mr-2"/>
            <p>Applications</p>
            </div>
            </div>
            <div className="collapse-content"> 
            <div className="mt-2">
                <div className="flex">
                <FiCheck className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">1. Essential part of this content</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">7m 25s</p>
            </div>
            <hr className=" border-t-1 border-zinc-300  mt-2"/>
            <div className="mt-2">
                <div className="flex">
                <FiCheck className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">2. Practice Strategy</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">9m 42s</p>
            </div>
            <hr className=" border-t-1 border-zinc-300  mt-2"/>
            <div className="mt-2">
                <div className="flex">
                <FiCheck className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">3. Methodology</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">5m 16s</p>
            </div>
            </div>
          </div>
          <div className="mb-3 collapse collapse-arrow bg-zinc-200 rounded-lg shadow-lg">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title font-semibold text-slate-700 dark:text-white undefined text-l font-medium">
            <div className="flex">
            <FiCheck className=" h-5 w-7  mr-2"/>
            <p>Devalopment</p>
            </div>
            </div>
            <div className="collapse-content"> 
            <div className="mt-2">
                <div className="flex">
                <FiCheck className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">1. Essential part of this content</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">7m 25s</p>
            </div>
            <hr className=" border-t-1 border-zinc-300  mt-2"/>
            <div className="mt-2">
                <div className="flex">
                <FiCheck className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">2. Practice Strategy</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">9m 42s</p>
            </div>
            <hr className=" border-t-1 border-zinc-300  mt-2"/>
            <div className="mt-2">
                <div className="flex">
                <FiCheck className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">3. Methodology</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">5m 16s</p>
            </div>
            </div>
          </div>
          <div className="mb-3 collapse collapse-arrow bg-zinc-200 rounded-lg shadow-lg">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title font-semibold text-slate-700 dark:text-white undefined text-l font-medium">
            <div className="flex">
            <FiCheck className=" h-5 w-7  mr-2"/>
            <p>Trends and Benifits</p>
            </div>
            </div>
            <div className="collapse-content"> 
            <div className="mt-2">
                <div className="flex">
                <FiCheck className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">1. Essential part of this content</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">7m 25s</p>
            </div>
            <hr className=" border-t-1 border-zinc-300  mt-2"/>
            <div className="mt-2">
                <div className="flex">
                <FiCheck className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">2. Practice Strategy</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">9m 42s</p>
            </div>
            <hr className=" border-t-1 border-zinc-300  mt-2"/>
            <div className="mt-2">
                <div className="flex">
                <FiCheck className=" h-4 w-6 ml-1 mr-2"/>
                <p className="text-base">3. Methodology</p>
                </div>
                <p className=" ml-9 text-sm dark:text-white">5m 16s</p>
            </div>
            </div>
          </div>
        </div>

        
    )
}

export default CourseContent