import React from 'react'
import image4 from "../images/img2.jpg";

const About = () => {
  return ( 
    <section id='About' className="h-auto  bg-gradient-to-r from-gray-200 to-gray-700">
      <h1 className='flex items-center justify-center text-5xl font-serif font-bold'>ABOUT-ME</h1>

      <div className='flex max-md:flex-col justify-center w-full items-center gap-32 relative right-32'>
                    <div className="flex justify-center md:justify-end w-full md:w-1/2">
                       <img
                      src={image4}
                      alt="Nikhil"
                        className="w-72 h-96 max-md:relative left-32 md:w-96 md:h-[470px] rounded-3xl shadow-lg border-4 mt-20 border-gray-400 object-cover"
                       />
                   </div>

                   <div className='w-full md:w-[80%] max-md:flex-col  justify-center md:justify-start items-center'>
                    <h1 className=" w-[80%]  text-2xl text-balance leading-relaxed">I am a <span className='font-bold'>Frontend Web Developer</span>. I build projects using <span className='font-bold'> HTML, CSS, JavaScript, React, and TailwindCSS</span>. I am always eager to learn new technologies and improve my skills.</h1>

                    <div className='flex gap-10 relative top-20'>
                      <div className='bg-transparent border-4 h-52 w-80 rounded-lg '></div>
                      <div className='bg-transparent border-4 h-52 w-80 rounded-lg'></div>
                      <div className='bg-transparent border-4 h-52 w-80 rounded-lg'></div>
                    </div>
                   </div>
      </div>
    </section>
   
  )
}

export default About