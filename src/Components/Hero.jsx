import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import Resume from "../images/Resume.pdf";
import img1 from "../images/img1.jpg";
const Hero = () => {  
    return (
      
      <section id='Home' className=" h-screen md:h-auto md:pb-32 md:mt-20 flex md:pt-14 pb-10 flex-col max-md:justify-center items-center bg-gradient-to-r from-gray-200 to-gray-700 text-black text-center ">
  
         <div className=" md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={img1}
          alt="Nikhil"
          className="w-48 h-48 md:w-52 md:h-52 rounded-full shadow-lg  border-4 mt-20 border-white object-cover hover:scale-105 transition duration-300"
        />
      </div>

        <h1 className="text-2xl md:text-3xl mt-10 font-bold mb-4">Hi, I'm <span className="text-red-600 text-4xl font-bold">Nikhil Sharma</span></h1>
        <p className="text-[12px] md:text-xl mb-6">Frontend Web Developer | I build beautiful UIs with React</p>

        <div className="w-72 md:w-[300px] flex items-center text-center justify-between  md:mt-10">
        <a href="https://www.linkedin.com/in/nikhil-sharma-43a013341/"  target="_blank" className="px-2 py-2 flex gap-3  bg-red-400 hover:bg-red-700 rounded-full text-lg font-bold transition duration-300 ">
        <FaBagShopping  className="text-[18px] mt-1"/>
        

          Hire me
  
            </a>
            <a
              href={Resume} download='Resume.pdf'
              className="px-4 py-2 text-lg font-bold  bg-red-400 hover:bg-red-700 rounded-full transition duration-300"
            >
              Resume
            </a>
            </div>
        
      </section>
    );
  };
  
  export default Hero;
  