"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"


export const Reveal = ({children, delay=0.5}) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
    })

    return(
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: {opacity:0, y:75},
                    visible: {opacity:1, y:0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5, delay}}
            >
                {children}
            </motion.div>

        </div>
    )
}
