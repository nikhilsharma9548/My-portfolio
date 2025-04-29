import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import img1 from "../images/img1.jpg";
const Hero = () => {  
    return (
      
      <section id='Home' className="h-screen flex md:pt-40 flex-col max-md:justify-center items-center bg-gradient-to-r from-gray-200 to-gray-700 text-black text-center ">
  
         <div className=" md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={img1}
          alt="Nikhil"
          className="w-60 h-60 md:w-64 md:h-64 rounded-full shadow-lg  border-4 mt-20 border-white object-cover hover:scale-105 transition duration-300"
        />
      </div>

        <h1 className="text-2xl md:text-3xl mt-10 font-bold mb-4">Hi, I'm <span className="text-red-600 text-4xl font-bold">Nikhil Sharma</span></h1>
        <p className="text-[12px] md:text-xl mb-6">Frontend Web Developer | I build beautiful UIs with React</p>

        <div className="w-72 md:w-[340px] flex justify-between  md:mt-10">
        <a href="https://www.linkedin.com/in/nikhil-sharma-43a013341/"  target="_blank" className="px-3 py-3 flex gap-3  bg-red-400 hover:bg-red-700 rounded-full text-lg font-bold transition duration-300 ">
        <FaBagShopping  className="text-[22px]"/>
        

          HIRE ME
  
            </a>
            <a
              href="#"
              className="px-6 py-3 text-xl font-bold  bg-red-400 hover:bg-red-700 rounded-full transition duration-300"
            >
              Resume
            </a>
            </div>
        
      </section>
    );
  };
  
  export default Hero;
  