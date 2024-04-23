'use client'
import { AnimatePresence, animate, motion } from 'framer-motion'
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from 'react'
import Transition from '../components/Transition';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai'
import Card from '../components/Card';
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
    }, { scope: container })
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
    return (
        <div ref={container} className='px-10 py-3 max-w-screen h-fit'>
            <Transition />
            <div className="header overflow-hidden">
                <h1 id='Heading' className='xl:text-8xl md:text-6xl text-4xl font-black'>Museum</h1>
            </div>
            <div className="md:w-1/2 w-full overflow-hidden">
                <p id='subheading' className='md:text-3xl text-2xl -translate-y-[100%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <AnimatePresence mode='wait'>
                {
                    show && (
                        <motion.div
                            {...anime(modelpopup)}
                            className=" fixed z-[2] backdrop-blur-3xl h-screen w-screen top-0 left-0 grid place-items-center">
                            <motion.div
                                {...anime(modelpopupinner)}
                                className=" relative h-[90%] w-[90%] rounded-lg">
                                <AiOutlineClose className='cursor-pointer absolute top-10 right-10 text-black z-10' onClick={() => setShow('')} />
                                <Card model={show} />
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>

            <div className="h-full w-full grid justify-stretch gap-0 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4">
                <div id='products1' onClick={() => { setShow('monitor') }} className=" relative w-full overflow-hidden h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/monitor.jpg'} alt='mouse' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Monitor
                    </h1>
                </div>
                <div id='products1' onClick={() => { setShow('keyboard') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/keyboard.jpg'} alt='Keyboard' width={400} height={400} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Keyboard
                    </h1>
                </div>
                <div id='products1' onClick={() => { setShow('scanner') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/scanner.jpg'} alt='Scanner' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Scanner
                    </h1>
                </div>
                <div id='products1' onClick={() => { setShow('modem') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/modem.jpg'} alt='Modem' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Modem
                    </h1>
                </div>
                <div id='products4' onClick={() => { setShow('lan') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/lan.jpg'} alt='Router' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Router
                    </h1>
                </div>

                <div id='products4' onClick={() => { setShow('projector') }} className=" relative w-full overflow-hidden h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/projector.jpg'} alt='Projector' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Projector
                    </h1>
                </div>
                <div id='products4' onClick={() => { setShow('oldmobile') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/oldmobile.jpg'} alt='Mobile' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Mobile
                    </h1>
                </div>
                <div id='products2' onClick={() => { setShow('telephone') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/telephone.jpg'} alt='Telephone' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Telephone
                    </h1>
                </div>
                <div id='products2' onClick={() => { setShow('dvd') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/dvd.jpg'} alt='DVD Player' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        DVD Player
                    </h1>
                </div>
                <div id='products2' onClick={() => { setShow('cddrive') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/cddrive.jpg'} alt='CD Drive' width={420} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        CD Drive
                    </h1>
                </div>
                <div id='products2' onClick={() => { setShow('hub') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/hub.jpg'} alt='Network Hub' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Network Hub
                    </h1>
                </div>
                <div id='products2' onClick={() => { setShow('barcodescanner') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/barcodescanner.jpg'} alt='Bar Code Scanner' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Bar Code Scanner
                    </h1>
                </div>
                <div id='products4' onClick={() => { setShow('newmobile') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/newmobile.jpg'} alt='Smart Phone' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Smart Phone
                    </h1>
                </div>
                <div id='products4' onClick={() => { setShow('camera') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/camera.jpg'} alt='Camera' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Camera
                    </h1>
                </div>
                <div id='products3' onClick={() => { setShow('cpu') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/cpu.jpg'} alt='CPU' width={400} height={420} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        CPU
                    </h1>
                </div>
                <div id='products3' onClick={() => { setShow('mouse') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/mouse.jpg'} alt='mouse' width={400} height={400} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Mouse
                    </h1>
                </div>
                <div id='products3' onClick={() => { setShow('printer') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
                    <Image src={'/imgs/printer.jpg'} alt='Printer' width={400} height={600} className='group-hover:scale-105 h-full w-full opacity-70 group-hover:opacity-100 transition-all ease-linear duration-300' />
                    <h1 className='absolute text-4xl text-white font-light md:opacity-0 md:translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear duration-300'>
                        Printer
                    </h1>
                </div>
                <div id='products3' onClick={() => { setShow('biomatric') }} className=" relative w-full overflow-hidden  h-[600px] group border rounded-md flex items-center justify-center cursor-pointer group">
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