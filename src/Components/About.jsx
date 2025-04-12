import React from 'react'
import image4 from "../images/img2.jpg";

const About = () => {
  return (
    <section id='About' className="h-screen pt-40  bg-gradient-to-r from-gray-200 to-gray-700 ">
        <h1 className='flex items-center justify-center text-5xl font-serif font-bold'>ABOUT - ME</h1>
        
        <section className='flex justify-evenly '>
              <div className="mt-10 md:mt-0 md:w-1/2  flex justify-center">
                     <img
                       src={image4}
                       alt="Nikhil"
                       className="w-96 h-96 rounded-full shadow-lg border-4 mt-20 border-gray-400 object-cover"
                     />
                   </div>
              <div>
               
              </div>

        </section>

    </section>
  )
}

export default About