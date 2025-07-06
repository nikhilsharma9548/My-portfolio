import React from "react";
import{motion} from 'motion/react';
import WeatherApp from "../images/WeatherApp.png";
import LMS from "../images/Padho-Likho.png";
import { IoLogoGithub } from "react-icons/io";
import { LuLink } from "react-icons/lu";
import chatApp from "../images/chatApp.jpg"
const Projects = () => {
    const projectList = [
      {
        title: "Learn Management System",
        description:" An efficient platform for managing and tracking online learning.",
        github: "https://github.com/nikhilsharma9548/Learn-management-system",
        demo: "https://learn-management-system-delta.vercel.app/",
        image:LMS,
        
      },
      {
        title:"Chat App",
        description:"A Chat App bulid to using react js ,tailwind CSS, gemini API ",
        github: "https://github.com/nikhilsharma9548/ChatApp",
        demo: "https://chat-app-one-alpha-88.vercel.app/",
        image:chatApp,
      },
      {
        title: "Weather App",
        description: "A HTML, CSS, JS app that fetches live weather data using an API. Displays current temperature and conditions.",
        github: "https://github.com/nikhilsharma9548/weather-app",
        demo: "https://weather-app-kohl-five-70.vercel.app",
        image:WeatherApp,
      
      },
    ];
  
    return (
      <section id="projects"  className="pt-24 pb-10 md:pt-10 bg-gradient-to-r from-gray-200 to-gray-700 text-gray-800">
        <div className="text-center mb-10">
          <motion.h2 
          initial ={{opacity:0, translateY:"-100%"}}
          whileInView={{opacity:1,translateY:0}}
          transition={{duration:0.5}}

          className="md:text-4xl text-3xl font-semibold">My Projects</motion.h2>
          <motion.p 
          initial ={{opacity:0, translateX: 100}}
          whileInView={{opacity:1,translateX:0}}
          transition={{duration:0.5}}
          className="md:text-lg text-base mt-2">Some cool stuff I’ve built recently 👇</motion.p>
        </div>

        <div className="max-w-7xl max-md:w-[80%]  mx-auto md:px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div 
            initial ={{opacity:0, scale:0.8}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.3}}

            key={index} className="bg-white p-3 rounded-xl hover:-translate-y-3 hover:duration-500 shadow-md hover:shadow-xl transition duration-500">
              {project.image && (
            <img src={project.image} alt={project.title} className="w-full h-48  object-cover rounded-md mb-4" />
    )}
              <h3 className=" sm:text-base text-md font-semibold mb-2">{project.title}</h3>
              <p className="sm:text-base text-sm mb-4">{project.description}</p>
              <div className="flex gap-6 items-end justify-start">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-black  sm:text-4xl text-2xl hover:underline hover:scale-110 transition duration-300"
                >
                  <IoLogoGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-black sm:text-4xl text-2xl text-bold hover:underline hover:scale-110 transition duration-300"
                >
                 <LuLink />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  