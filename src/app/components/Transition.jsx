'use client'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from 'next/navigation'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
gsap.registerPlugin(useGSAP);
function Transition() {
    const path = usePathname()
    const container = useRef();
    useGSAP(() => {
        const timeline = gsap.timeline({})
        timeline.from("#poptitle", {
            opacity: 0,
            scale: .4,
        })
        timeline.to("#museumpop", {
            opacity: 1,
            duration: 1,
            height: '0',
            y: -40,

        })
    }, { scope: container })
    return (
        <div ref={container}>
            <div id='museumpop' initial={{ opacity: 1 }} animate={{
                opacity: 0, transition: {
                    delay: 3,
                    ease: 'anticipate',
                    y: "-100%"
                }
            }} className="h-screen w-screen top-0 left-0 bg-purple-50 inset-0 fixed flex z-10 items-center justify-center">
                <h1 id='poptitle' className='text-5xl font-bold'>{path !== '/' ? path.replace(/\//g, '') : "Home"}</h1>
            </div>
        </div>
    )
}

export default Transition