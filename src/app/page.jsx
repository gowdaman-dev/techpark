'use client'
import Image from "next/image";
import Transition from "./components/Transition";
import { AnimatePresence, motion } from "framer-motion";
export default function Home() {
  return (
    <div className="max-w-screen overflow-hidden">
      <Transition />
      <div className='h-screen w-screen flex flex-col items-center justify-center bg-white text-gray-900 p-4 sm:p-6 md:p-8'>
        <h1 className='text-6xl font-bold md:text-8xl sm:text-7xl text-center'>Tech Savvy Museum</h1>
        <p className='mt-4 font-semibold text-2xl md:text-4xl sm:text-3xl text-center'>
          Lets explore the world of Tech and Art
        </p>
        <motion.div
          className='mt-8 flex flex-col items-center gap-4 sm:gap-6 md:gap-8 animate-fade-in'
          initial='hidden'
          animate='visible'
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
          }}>

          <p className='max-w-xl text-lg leading-relaxed md:text-xl sm:text-base text-center'>
            Explore the world of tech and art, learn about the creative minds behind them and witness the magic of technology unfold before your eyes.
          </p>
          <motion.div
            className='mt-8 flex items-center justify-center animate-fade-in'
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } }
            }}>
            <motion.a
              href='/museum'
              className='bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold text-center cursor-pointer text-sm md:text-base lg:text-lg px-4 py-2 rounded-full transition-colors ease-in-out duration-300 hover:scale-110'
            >
              Explore the Museum
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
