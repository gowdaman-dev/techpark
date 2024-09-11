'use client'
import Card from "@/app/components/Card";
import { motion } from "framer-motion";
import React from "react";
function page({ params: { parts } }) {
  return (
    <motion.div
      className="min-h-screen max-w-screen top-0 left-0"
    >
        <Card  model={parts} />
    </motion.div>
  );
}

export default page;

/*
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

*/
