'use client'
import { motion } from 'framer-motion'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from 'next/navigation'
import React from 'react'
import Transition from '../components/Transition';
gsap.registerPlugin(useGSAP);

function page() {
    const container = useRef();
    useGSAP(() => {
        const timeline = gsap.timeline({});
        timeline.from("#Heading", {
            opacity: 0,
            y: '100px',
            delay: 1.4,
            duration: 1
        })
        timeline.to("#subheading", {
            opacity: 1,
            y: '0',
            delay: -1.4,
            duration: 1
        })
    }, { scope: container })
    return (
        <div ref={container} className='px-10 py-3'>
            {/* <Transition /> */}
            <div className="header overflow-hidden">
                <h1 id='Heading' className='text-8xl font-black'>Museum</h1>
            </div>
            <div className="w-1/2 overflow-hidden">
                <p id='subheading' className='text-3xl -translate-y-[100%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <motion.div initial={{ opacity: 0, transition: { duration: 1 } }} animate={{ opacity: 1, transition: { delay: 2, ease: 'linear' } }} className="searcher flex w-full bg-gray-100 px-4 py-6 my-2 rounded">
                <input spellCheck="false" autoComplete type="text" placeholder='Search...' className='w-full p-2 border outline-none border-gray-200 rounded-lg' />
            </motion.div>
            <div className="w-[400px] h-[400px] group border rounded-md flex items-center justify-center cursor-pointer">
                <h4 className='text-5xl font-semibold skew-y-12  group-hover:-skew-y-12 transition-all duration-500 ease-in-out '>mouse</h4>
            </div>
        </div>
    )
}

export default page