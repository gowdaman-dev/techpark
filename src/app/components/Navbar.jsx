
'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai'
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='max-w-screen h-fit p-4 px-10 flex items-center justify-between'>
            <h1 className='text-xl font-black text-violet-500'>
                Tech Savvy
            </h1>
            <nav className='md:flex hidden gap-8 font-semibold text-sm'>
                <Link className='hover:text-purple-400 transition-colors ease-in-out duration-300' href={'/'}>
                    Home
                </Link>
                <Link className='hover:text-purple-400 transition-colors ease-in-out duration-300' href={'/museum'}>
                    Museum
                </Link>
                <Link className='hover:text-purple-400 transition-colors ease-in-out duration-300' href={'/developer'}>
                    developers
                </Link>
                <Link className='hover:text-purple-400 transition-colors ease-in-out duration-300' href={'/about'}>
                    about
                </Link>
            </nav>
            <div className="md:hidden">
                <AiOutlineMenu onClick={() => setIsOpen(!isOpen)} className='text-3xl' />
                <AnimatePresence mode='wait'>
                    {
                        isOpen && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className="fixed z-10 top-0 left-0 w-full h-full bg-black text-white text-4xl">
                                <AiFillCloseCircle className='absolute text-white top-2 right-2 text-4xl' onClick={() => setIsOpen(!isOpen)} />
                                <div className="flex flex-col items-center justify-center h-full gap-6">
                                    <Link onClick={()=>setIsOpen(false)} className='hover:text-purple-400 transition-colors ease-in-out duration-300' href={'/'}>
                                        Home
                                    </Link>
                                    <Link onClick={()=>setIsOpen(false)} className='hover:text-purple-400 transition-colors ease-in-out duration-300' href={'/museum'}>
                                        Museum
                                    </Link>
                                    <Link onClick={()=>setIsOpen(false)} className='hover:text-purple-400 transition-colors ease-in-out duration-300' href={'/developer'}>
                                        developers
                                    </Link>
                                    <Link onClick={()=>setIsOpen(false)} className='hover:text-purple-400 transition-colors ease-in-out duration-300' href={'/about'}>
                                        about
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default NavBar