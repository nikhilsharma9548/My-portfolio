import {motion, useScroll, useTransform } from "motion/react";
import { FaBagShopping } from "react-icons/fa6";
import Resume from "../images/Resume.pdf";
import img1 from "../images/img1.jpg";
const Hero = () => {  
  
    return (
      
    <section id='Home' className="max-md:h-screen flex md:pt-40 md:pb-28  flex-col justify-center items-center bg-gradient-to-r from-gray-200 to-gray-700 text-black text-center ">

        <motion.div className=" mt-0 md:w-1/2 flex justify-center"
         initial={{opacity: 0, scale: 0.5}}
         animate={{opacity: 1, scale: 1}}
         transition={{duration:0.5}}
        >
          <motion.img
            src={img1}
            alt="Nikhil"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-sm border-2 shadow-white object-cover hover:scale-105 transition duration-300"
          />
        </motion.div>

        <motion.h1 
         initial={{opacity: 0, translateX:-100 }}
         animate={{opacity: 1, translateX:0 }}
         transition={{duration:0.5}}

        className="text-xl gap-2 md:text-2xl md:items-end flex max-md:flex-col mt-5 font-semibold mb-4">Hi, I'm<span className="text-red-600/90 text-4xl md:text-4xl font-semibold">Nikhil Sharma</span></motion.h1>

        <motion.p 
         initial={{opacity: 0, translateX:100 }}
         animate={{opacity: 1, translateX:0 }}
         transition={{duration:0.5}}
        className="text-[12px] px-10 flex max-md:flex-col md:text-xl text-sm mb-10 sm:mb-2 ">FullStack Web Developer <br />skilled in  building responsive, user-friendly, and scalable web applications.</motion.p>

        <motion.div 
            initial={{opacity: 0, y:-50 }}
            animate={{opacity: 1, y:0  }}
            transition={{duration:0.5}}
        className="w-72 md:w-[300px] flex items-center justify-center text-center md:gap-16 gap-10 md:mt-10 ">
            <a href="https://www.linkedin.com/in/nikhil-sharma-43a013341" 
              target="_blank"
              className="px-3 py-1.5 flex gap-2 border-gray-700 border bg-red-500 hover:bg-red-700 rounded-full text-lg md:font-semibold transition duration-300 ">
            <FaBagShopping  className="text-[18px] mt-1"/>Hire me</a>

            <a href={Resume} download='Resume.pdf'
              className="px-4 py-1.5 text-lg md:font-semibold border-gray-700 border bg-red-500 hover:bg-red-700 rounded-full transition duration-300">Resume</a>
        </motion.div>
        
    </section>
    );
  };
  
  export default Hero;
  
