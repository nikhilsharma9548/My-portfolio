import React from 'react'
import { FaCode } from "react-icons/fa6";
import {motion} from 'motion/react'
// import { motion,AnimatePresence } from "framer-motion";
import { PiGraduationCapFill } from "react-icons/pi";
import { VscFileSubmodule } from "react-icons/vsc";
import image4 from "../images/img2.jpg";

const About = () => {
  return ( 
    <section id='About' className=" w-full   flex-col md:flex-row  pt-24 md:pt-10 pb-10 overflow-hidden bg-gradient-to-r from-gray-200 to-gray-700">
  <motion.h1 
   initial={{opacity:0,translateY:'-100%'}}
    whileInView={{opacity:1,translateY:0}}
    transition={{duration:0.5}}
  className=' text-3xl text-center font-semibold '>ABOUT-ME</motion.h1>

  <div className='flex flex-col xl:flex-row  justify-center  gap-5  px-4'>
    <motion.div className="flex justify-center w-full md:w-auto"
    initial={{opacity:0,translateX:"-100%"}}
    whileInView={{opacity:1,translateX:0}}
    transition={{duration:0.5}}
    >
      <img
        src={image4}
        alt="Nikhil"
        className="w-60 h-80 md:w-68  rounded-3xl shadow-lg mt-10 md:mt-20 border-gray-400 object-cover hover:scale-105 transition duration-500 cursor-pointer"
      />
    </motion.div>
    <div className='xl:w-[60%] w-full flex flex-col justify-center items-center gap-14 '>
      <motion.h1 
       initial={{opacity:0,translateY:"-100%"}}
    whileInView={{opacity:1,translateY:0}}
    transition={{duration:0.5}}
      className="text-center sm:text-lg md:text-xl max-xl:w-[70vw] pt-20 leading-relaxed ">
        I am a <span className='font-semibold'>Frontend Web Developer</span>. I build projects using <span className='font-semibold'> HTML, CSS, JavaScript, React, and TailwindCSS</span>. I am always eager to learn new technologies and improve my skills.
      </motion.h1>

      <motion.div
       initial={{opacity:0,translateY:"100%"}}
    whileInView={{opacity:1,translateY:0}}
    transition={{duration:0.5}}
      className='flex flex-col pb-5 md:w-[90%] justify-center lg:w-full md:flex-row items-center md:items-start gap-6 md:gap-10 pt-5'>

        <div className='w-72 h-44 xl:h-40 xl:w-60 bg-transparent  border rounded-lg transition-all  duration-500 hover:-translate-y-1  hover:shadow-[5px_5px_2px_rgba(0,0,0,7)] hover:shadow-red-600/70'>
          <p className='text-4xl p-3'><FaCode /></p>
          <p className='px-4 pt-2 text-xl'>Languages</p>
          <p className=' p-1 mx-2'>HTML, CSS, JavaScript, ReactJS, TailwindCSS</p>
        </div>

        <div className='w-72 h-44 xl:h-40 xl:w-60 bg-transparent border rounded-lg  duration-500 hover:-translate-y-1 hover:shadow-[5px_5px_2px_rgba(0,0,0,7)]  hover:shadow-red-600/70'>
          <p className='text-4xl px-5 pt-5'><PiGraduationCapFill /></p>
          <h1 className='px-4 pt-2 text-xl'>Education</h1>
          <h1 className='p-1 mx-2'>Bachelor of Computer Applications(BCA)</h1>
        </div>

        <div className='w-72 h-44 xl:h-40 xl:w-60 bg-transparent border rounded-lg transition-all  duration-500 hover:-translate-y-1 hover:shadow-[5px_5px_2px_rgba(0,0,0,7)]  hover:shadow-red-600/70'>
          <p className='text-4xl px-5 pt-5'><VscFileSubmodule /></p>
          <h1 className='px-4 pt-2 text-xl'>Projects</h1>
          <h1 className=' p-3 '>Built more than 5 projects</h1>
        </div>
      </motion.div>
    </div>
  </div>
</section>
   
  ) 
}

export default About