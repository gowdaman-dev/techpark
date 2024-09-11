'use client'
import { AnimatePresence, animate, motion } from 'framer-motion'
import { useRef as UseRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from 'react'
import Transition from '../components/Transition';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai'
import Card from '../components/Card';
import { useRouter } from 'next/navigation';
gsap.registerPlugin(useGSAP);

function page() {
    const Container = UseRef();
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
        timeline.from("#products1", {
            opacity: 0,
            y: '100px',
            duration: .3,
            stagger: 0.2
        })
        timeline.from("#products2", {
            opacity: 0,
            y: '100px',
            delay: -1,
            duration: .3,
            stagger: 0.2
        })
        timeline.from("#products3", {
            opacity: 0,
            y: '100px',
            delay: -1,
            duration: .3,
            stagger: 0.2
        })
        timeline.from("#products4", {
            opacity: 0,
            y: '100px',
            delay: -1,
            duration: .3,
            stagger: 0.2
        })
    }, { scope: Container })
    const [show, setShow] = useState('');
    const anime = (variants) => {
        return {
            initial: 'initial',
            animate: 'enter',
            exit: 'initial',
            variants
        }
    }
    const modelpopup = {
        initial: {
            opacity: 0,
            transition: {
                duration: .5,
                ease: "linear"
            }
        },
        enter: {
            opacity: 1,
            transition: {
                duration: .5,
                ease: "linear"
            }
        }
    }
    const modelpopupinner = {
        initial: {
            opacity: 0,
            y: '100px',
            transition: {
                duration: .5,
                ease: "linear"
            }
        },
        enter: {
            opacity: 1,
            y: '0',
            transition: {
                duration: .5,
                ease: "linear"
            }
        }
    }
    const router = useRouter()
    return (
        <div ref={Container} className='px-10 py-3 max-w-screen h-fit'>
            <Transition />
            <div className="header overflow-hidden">
                <h1 id='Heading' className='xl:text-8xl md:text-6xl text-4xl font-black'>Museum</h1>
            </div>
            <div className="md:w-1/2 w-full overflow-hidden">
                <p id='subheading' className='md:text-3xl text-2xl -translate-y-[100%]'>
                    Let the Hardware be the strongest knowledge you get .
                </p>
            </div>

            <div className="h-full w-full grid justify-stretch gap-0 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4">
                <div id='products1' onClick={() => { router.push('/museum/monitor') }} className=" relative w-full overflow-hidden h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/monitor.jpg'} alt='mouse' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Monitor
                    </h1>
                </div>
                <div id='products1' onClick={() => { router.push('/museum/keyboard') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/keyboard.jpg'} alt='Keyboard' width={400} height={400} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Keyboard
                    </h1>
                </div>
                <div id='products1' onClick={() => { router.push('/museum/scanner') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/scanner.jpg'} alt='Scanner' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Scanner
                    </h1>
                </div>
                <div id='products1' onClick={() => { router.push('/museum/modem') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/modem.jpg'} alt='Modem' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Modem
                    </h1>
                </div>
                <div id='products4' onClick={() => { router.push('/museum/lan') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/lan.jpg'} alt='Router' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Router
                    </h1>
                </div>

                <div id='products4' onClick={() => { router.push('/museum/projector') }} className=" relative w-full overflow-hidden h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/projector.jpg'} alt='Projector' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Projector
                    </h1>
                </div>
                <div id='products4' onClick={() => { router.push('/museum/oldmobile') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/oldmobile.jpg'} alt='Mobile' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Mobile
                    </h1>
                </div>
                <div id='products2' onClick={() => { router.push('/museum/telephone') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/telephone.jpg'} alt='Telephone' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Telephone
                    </h1>
                </div>
                <div id='products2' onClick={() => { router.push('/museum/dvd') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/dvd.jpg'} alt='DVD Player' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        DVD Player
                    </h1>
                </div>
                <div id='products2' onClick={() => { router.push('/museum/cddrive') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/cddrive.jpg'} alt='CD Drive' width={420} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        CD Drive
                    </h1>
                </div>
                <div id='products2' onClick={() => { router.push('/museum/hub') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/hub.jpg'} alt='Network Hub' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Network Hub
                    </h1>
                </div>
                <div id='products2' onClick={() => { router.push('/museum/barcodescanner') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/barcodescanner.jpg'} alt='Bar Code Scanner' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Bar Code Scanner
                    </h1>
                </div>
                <div id='products4' onClick={() => { router.push('/museum/newmobile') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/newmobile.jpg'} alt='Smart Phone' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Smart Phone
                    </h1>
                </div>
                <div id='products4' onClick={() => { router.push('/museum/camera') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/camera.jpg'} alt='Camera' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Camera
                    </h1>
                </div>
                <div id='products3' onClick={() => { router.push('/museum/cpu') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/cpu.jpg'} alt='CPU' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        CPU
                    </h1>
                </div>
                <div id='products3' onClick={() => { router.push('/museum/mouse') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/mouse.jpg'} alt='mouse' width={400} height={400} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Mouse
                    </h1>
                </div>
                <div id='products3' onClick={() => { router.push('/museum/printer') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/printer.jpg'} alt='Printer' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Printer
                    </h1>
                </div>
                <div id='products3' onClick={() => { router.push('/museum/biomatric') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/biometric.jpg'} alt='Biometric' width={420} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Biometric
                    </h1>
                </div>
            </div>
            <footer className='p-4'>

            </footer>
        </div>
    )
}

export default page