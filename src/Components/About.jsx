import React from 'react'
import { FaCode } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
import { VscFileSubmodule } from "react-icons/vsc";
import image4 from "../images/img2.jpg";

const About = () => {
  return ( 
    <section id='About' className="min-h-screen w-full  pt-14 overflow-hidden bg-gradient-to-r from-gray-200 to-gray-700">
  <h1 className='flex items-center justify-center  text-4xl font-bold mb-6'>ABOUT-ME</h1>

  <div className='flex flex-col md:flex-row relative md:right-80  justify-center items-center gap-10 md:gap-32 px-4'>
    
    <div className="flex justify-center md:justify-end w-full md:w-1/2">
      <img
        src={image4}
        alt="Nikhil"
        className="w-64 h-96 md:w-80 md:h-[420px] rounded-3xl shadow-lg mt-10 md:mt-20 border-gray-400 object-cover hover:scale-105 transition duration-500 cursor-pointer"
      />
    </div>

    <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-6 mt-6 md:mt-0'>
      <h1 className="text-center md:text-left text-base sm:text-lg md:text-2xl leading-relaxed px-2">
        I am a <span className='font-bold'>Frontend Web Developer</span>. I build projects using <span className='font-bold'> HTML, CSS, JavaScript, React, and TailwindCSS</span>. I am always eager to learn new technologies and improve my skills.
      </h1>

      <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-10'>
        <div className='h-52 w-72 bg-transparent border-2 rounded-lg transition-all duration-500 hover:scale-105 hover:border-b-8 hover:border-r-8 hover:border-red-600'>
          <p className='text-5xl p-5'><FaCode /></p>
          <p className='px-5 pt-2 text-xl'>Languages</p>
          <p className='text-xl p-3 mx-3'>HTML, CSS, JavaScript, ReactJS, TailwindCSS</p>
        </div>

        <div className='h-52 w-72 bg-transparent border-2 rounded-lg transition-all duration-500 hover:scale-105 hover:border-b-8 hover:border-r-8 hover:border-red-600'>
          <p className='text-5xl px-6 pt-6'><PiGraduationCapFill /></p>
          <h1 className='px-5 pt-2 text-xl'>Education</h1>
          <h1 className='text-xl p-2 mx-3'>Bachelor of Computer Applications(BCA)[Present]</h1>
        </div>

        <div className='h-52 w-72 bg-transparent border-2 rounded-lg transition-all duration-500 hover:scale-105 hover:border-b-8 hover:border-r-8 hover:border-red-600'>
          <p className='text-5xl px-6 pt-6'><VscFileSubmodule /></p>
          <h1 className='px-5 pt-2 text-xl'>Projects</h1>
          <h1 className='text-xl p-3 mx-3'>Built more than 5 projects</h1>
        </div>
      </div>
    </div>
  </div>
</section>
   
  )
}

export default About