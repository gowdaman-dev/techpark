'use client'
import { motion } from 'framer-motion'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from 'next/navigation'
import React from 'react'
import Transition from '../components/Transition';
import Image from 'next/image';
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
            <Transition />
            <div className="header overflow-hidden">
                <h1 id='Heading' className='text-8xl font-black'>Museum</h1>
            </div>
            <div className="w-1/2 overflow-hidden">
                <p id='subheading' className='text-3xl -translate-y-[100%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="w-fit grid place-items-start gap-0 gird-cols-4 mt-4">
                <div className="grid col-start-1 grid-cols-1 w-[400px] h-[600px] gap-0">
                    <div className="w-[400px] h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                        <Image src={'/imgs/mouse.jpg'} alt='mouse' width={400} height={600} className='w-full h-full opacity-50 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    </div>
                </div>
                <div className="grid col-start-2 grid-cols-1 w-fit gap-0">
                    <div className="w-[400px] h-[400px] group border rounded-md flex items-center justify-center cursor-pointer group">
                        <Image src={'/imgs/keyboard.jpg'} alt='mouse' width={400} height={400} className='w-full h-full opacity-50 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    </div>
                </div>
                <div className="grid col-start-3 grid-cols-1 w-fit gap-0">
                    <div className="w-[400px] h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                        <Image src={'/imgs/monitor.jpg'} alt='mouse' width={400} height={600} className='w-full h-full opacity-50 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    </div>
                </div>
                <div className="grid col-start-4 grid-cols-1 w-fit gap-0">
                    <div className="w-[400px] h-[400px] group border rounded-md flex items-center justify-center cursor-pointer group">
                        <Image src={'/imgs/monitor.jpg'} alt='mouse' width={400} height={400} className='w-full h-full opacity-50 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page