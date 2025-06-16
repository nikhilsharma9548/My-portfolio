import React from 'react'
import { FaCode } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
import { VscFileSubmodule } from "react-icons/vsc";
import image4 from "../images/img2.jpg";

const About = () => {
  return ( 
    <section id='About' className=" w-full h-full md:h-screen  flex-col md:flex-row  pt-10 overflow-hidden bg-gradient-to-r from-gray-200 to-gray-700">
  <h1 className=' text-4xl md:text-3xl text-center font-bold mb-6'>ABOUT-ME</h1>

  <div className='flex flex-col xl:flex-row  justify-center  gap-10 xl:gap-28 px-4'>
    
    <div className="flex justify-center w-full md:w-auto">
      <img
        src={image4}
        alt="Nikhil"
        className="w-60 h-80 md:w-68  rounded-3xl shadow-lg mt-10 md:mt-20 border-gray-400 object-cover hover:scale-105 transition duration-500 cursor-pointer"
      />
    </div>

    <div className='xl:w-[60%] w-full flex flex-col justify-center items-center gap-6 '>

      <h1 className="text-center w-[90%] sm:text-lg md:text-xl xl:mt-0 leading-relaxed ">
        I am a <span className='font-bold'>Frontend Web Developer</span>. I build projects using <span className='font-bold'> HTML, CSS, JavaScript, React, and TailwindCSS</span>. I am always eager to learn new technologies and improve my skills.
      </h1>

      <div className='flex flex-col  md:w-[90%] justify-center lg:w-full md:flex-row items-center md:items-start gap-6 md:gap-10'>

        <div className='w-60 h-44 xl:h-48 xl:w-64 bg-transparent  border-2 rounded-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-red-600'>
          <p className='text-4xl p-4'><FaCode /></p>
          <p className='px-4 pt-2 text-lg xl:text-xl  '>Languages</p>
          <p className='text-base xl:text-xl p-1 mx-2'>HTML, CSS, JavaScript, ReactJS, TailwindCSS</p>
        </div>

        <div className='w-60 h-44 xl:h-48 xl:w-64 bg-transparent border-2 rounded-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-red-600'>
          <p className='text-4xl px-5 pt-5'><PiGraduationCapFill /></p>
          <h1 className='px-4 pt-2 text-base xl:text-xl'>Education</h1>
          <h1 className='text-lg xl:text-xl p-1 mx-2'>Bachelor of Computer Applications(BCA)</h1>
        </div>

        <div className='w-60 h-44 xl:h-48 xl:w-64 bg-transparent border-2 rounded-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-red-600'>
          <p className='text-4xl px-5 pt-5'><VscFileSubmodule /></p>
          <h1 className='px-4 pt-2 text-base xl:text-xl'>Projects</h1>
          <h1 className='text-lg xl:text-xl p-3 mx-3'>Built more than 5 projects</h1>
        </div>
      </div>
    </div>
  </div>
</section>
   
  ) 
}

export default About