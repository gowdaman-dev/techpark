'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { cyberText } from '../page'
function NavBar() {
    return (
        <>
            <nav className={"flex z-20 fixed w-screen text-black justify-center items-center h-20  "}>
                <motion.div
                    className="relative h-full flex justify-around items-center gap-10 ">
                    <Link
                        href="#"
                        className="relative flex h-full flex-col items-center justify-center gap-2 font-light hover:text-pink-400 text-md font-semibold">
                        Home
                    </Link>
                    <Link
                        href="#"
                        className="relative flex h-full flex-col items-center justify-center gap-2 font-light hover:text-pink-400 text-md font-semibold">
                        About
                    </Link>
                    <Link
                        href="#"
                        className="relative flex h-full flex-col items-center justify-center gap-2 font-light hover:text-pink-400 text-md font-semibold">
                        Services
                    </Link>
                    <Link
                        href="#"
                        className="relative flex h-full flex-col items-center justify-center gap-2 font-light hover:text-pink-400 text-md font-semibold">
                        Contact
                    </Link>
                </motion.div>
            </nav>
            <motion.div
                className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black"
                animate={{
                    scaleX: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    opacity: [0.25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25],
                }}
            />
        </>
    )
}

export default NavBar