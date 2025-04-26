import React from "react";
import images from "../images/img1.jpg";
const Hero = () => {  
    return (
      
      <section className="h-screen flex pt-20 flex-col  items-center bg-gradient-to-r from-gray-200 to-gray-700 text-black text-center ">
  
         <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={images}
          alt="Nikhil"
          className="w-48 h-48 md:w-72 md:h-72 rounded-full shadow-lg  border-4 mt-20 border-white object-cover hover:scale-105
           transtion duration-300"
        />
      </div>

        <h1 className="text-2xl md:text-5xl mt-10 font-bold mb-4">Hi, I'm <span className="text-red-600 text-4xl font-bold">Nikhil Sharma</span></h1>
        <p className="text-[12px] md:text-xl mb-6">Frontend Web Developer | I build beautiful UIs with React</p>
        <div className="w-96 flex justify-between mt-10">
        <a href="https://www.linkedin.com/in/nikhil-sharma-43a013341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank" className="px-6 py-3 flex gap-4 bg-red-400 hover:bg-red-700 rounded-full text-lg font-bold transition duration-300 ">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
</svg>

          HIRE ME
  
            </a>
            <a
              href="#projects"
              className="px-6 py-3 text-lg font-bold  bg-red-400 hover:bg-red-700 rounded-full transition duration-300"
            >
              View My Work
            </a>
            </div>
        
      </section>
    );
  };
  
  export default Hero;
  