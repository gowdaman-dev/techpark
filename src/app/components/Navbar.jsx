import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className='w-screen h-fit p-4 px-10 flex items-center justify-between'>
            <h1 className='text-xl font-black text-violet-500'>Tech Savvy</h1>
            <nav className='flex gap-8 font-semibold text-sm'>
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
        </div>
    )
}

export default NavBar