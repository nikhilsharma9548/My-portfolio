import React from 'react'
import { FaCode } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
import { VscFileSubmodule } from "react-icons/vsc";
import image4 from "../images/img2.jpg";

const About = () => {
  return ( 
    <section id='About' className="h-full md:h-screen pt-40 overflow-hidden bg-gradient-to-r from-gray-200 to-gray-700">
      <h1 className='flex items-center justify-center text-4xl font-bold'>ABOUT-ME</h1>

      <div className='flex max-md:flex-col  justify-center w-full items-center gap-32 relative right-32'>
                    <div className="flex justify-center md:justify-end w-full  md:w-1/2">
                       <img
                      src={image4}
                      alt="Nikhil"
                        className="w-72 h-96 max-md:relative left-32 md:w-96 md:h-[500px] rounded-3xl shadow-lg  mt-20 border-gray-400 object-cover hover:scale-105 transition duration-500 translate-y-0  cursor-pointer"
                       />
                   </div>

                   <div className='w-full md:w-[80%] max-md:flex-col  justify-center md:justify-start items-center'>
                    <h1 className=" w-[80%]  max-md: relative max-md:left-48 max-md:bottom-20 max-md:text-balance text-xl md:text-2xl text-balance leading-relaxed">I am a <span className='font-bold'>Frontend Web Developer</span>. I build projects using <span className='font-bold'> HTML, CSS, JavaScript, React, and TailwindCSS</span>. I am always eager to learn new technologies and improve my skills.</h1>

                    <div className='flex max-md:flex-col text-gray-950 gap-10 relative md:top-20 
                    max-md:left-[11.5rem] max-md:bottom-10 max-md:text-balance  '>

                      <div className='h-52 w-72 bg-transparent  border-2 rounded-lg transition-all duration-500 hover:scale-105 hover:border-b-8 hover:border-r-8 hover:border-red-600'>
                        <p className='text-5xl px-6 pt-6'><FaCode /></p>
                        <p className='px-5 pt-2 text-xl'>Languages</p>
                        <p className='text-xl p-3 mx-3'>HTML, CSS, JavaScript, ReactJS, TailwindCSS</p>
                      </div>

                      <div className='h-52 w-72 bg-transparent border-2 rounded-lg transition-all duration-500 hover:scale-105 hover:border-b-8 hover:border-r-8 hover:border-red-600' >
                        <p className='text-5xl px-6 pt-6'><PiGraduationCapFill /></p>
                        <h1 className='px-5 pt-2 text-xl'>Education</h1>
                        <h1 className='text-xl p-2 mx-3 opacity-1'>Bachelor of Computer Applications(BCA)[Present]</h1>
                      </div>

                      <div className='h-52 w-72 bg-transparent  border-2 rounded-lg transition-all duration-500 hover:scale-105 hover:border-b-8 hover:border-r-8 hover:border-red-600'>
                        <p className='text-5xl px-6 pt-6'><VscFileSubmodule /></p>
                        <h1 className='px-5 pt-2 text-xl'>Projects</h1>
                        <h1 className='text-xl p-3 mx-3 opacity-'>Built more than 5 projects</h1>
                      </div>

                    </div>
                   </div>
      </div>
    </section>
   
  )
}

export default About