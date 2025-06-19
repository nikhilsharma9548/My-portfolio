import React from "react";
import WeatherApp from "../images/WeatherApp.png";
import LMS from "../images/LMS.png";
import { IoLogoGithub } from "react-icons/io";
import { LuLink } from "react-icons/lu";
const Projects = () => {
    const projectList = [
      {
        title: "Learn Management System",
        description:" An efficient platform for managing and tracking online learning.",
        github: "https://github.com/nikhilsharma9548",
        demo: "https://learn-management-system-delta.vercel.app/",
        image:LMS,
        
      },
      {
        title: "Weather App",
        description: "A HTML, CSS, JS app that fetches live weather data using an API. Displays current temperature and conditions.",
        github: "https://github.com/nikhilsharma9548",
        demo: "https://weather-app-kohl-five-70.vercel.app",
        image:WeatherApp,
      
      },
    ];
  
    return (
      <section id="projects"  className="py-14 h-auto lg:h-screen bg-gradient-to-r from-gray-200 to-gray-700 text-gray-800">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">My Projects</h2>
          <p className="text-lg mt-2">Some cool stuff I’ve built recently 👇</p>
        </div>
        <div className="max-w-6xl w-[80%]  mx-auto px-4 grid md:grid-cols-2 gap-8">
        
          {projectList.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              {project.image && (
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
    )}
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-black text-4xl hover:underline hover:scale-110 transition duration-300"
                >
                  <IoLogoGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-black text-4xl text-bold hover:underline hover:scale-110 transition duration-300"
                >
                 <LuLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  