import React, { useState } from "react";
import { motion } from "motion/react";
import WeatherApp from "../images/WeatherApp.png";
import { FaArrowLeft } from "react-icons/fa";
import LMS from "../images/Padho-Likho.png";
import { IoLogoGithub } from "react-icons/io";
import { LuLink } from "react-icons/lu";
import chatApp from "../images/chatApp.jpg";
import Auth from "../images/DoremonAuth.png";
import TimeAura from "../images/TimeAura.png";

const Projects = () => {

  const [showAll, setShowAll] = useState(false);

  const projectList = [
    {
      title: "TimeAura",
      description:
        "A simple E-commerce watch selling platform built with React, Node.js, and MongoDB. It allows users to login, purchase watches, view their profiles and order history.",
      github: "https://github.com/nikhilsharma9548/WatchStore-Frontend",
      demo: "https://watch-store-frontend-three.vercel.app",
      image: TimeAura,
    },
    {
      title: "Chat App",
      description:
        "A Chat App built using React JS, Tailwind CSS and Gemini API.",
      github: "https://github.com/nikhilsharma9548/ChatApp",
      demo: "https://chat-app-one-alpha-88.vercel.app",
      image: chatApp,
    },
    {
      title: "Weather App",
      description:
        "A HTML, CSS, JS app that fetches live weather data using an API. Displays current temperature and conditions.",
      github: "https://github.com/nikhilsharma9548/weather-app",
      demo: "https://weather-app-kohl-five-70.vercel.app",
      image: WeatherApp,
    },
    {
      title: "User Authentication App",
      description:
        "A simple user authentication app built with React, Node.js, and MongoDB. It allows users to register, login, verify email and reset their password.",
      github: "https://github.com/nikhilsharma9548/DoremonAuth",
      demo: "https://doremon-auth-frontend.vercel.app",
      image: Auth,
    },
    {
      title: "Learn Management System",
      description:
        "An efficient platform for managing and tracking online learning.",
      github: "https://github.com/nikhilsharma9548/Learn-management-system",
      demo: "https://learn-management-system-frontend.vercel.app",
      image: LMS,
    },
  ];

  const visibleProjects = showAll ? projectList : projectList.slice(0, 3);

  return (
    <section
      id="projects"
      className="pt-24 pb-10 md:pt-10 bg-gradient-to-r from-gray-200 to-gray-700 text-gray-800"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, translateY: "-100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-4xl text-3xl font-semibold"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-lg text-base mt-2"
        >
          Some cool stuff I’ve built recently 👇
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl max-md:w-[80%] mx-auto md:px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-3 rounded-xl hover:-translate-y-3 shadow-md hover:shadow-xl transition duration-500"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}

            <h3 className="sm:text-base text-md font-semibold mb-2">
              {project.title}
            </h3>

            <p className="sm:text-base text-sm mb-4">
              {project.description}
            </p>

            <div className="flex gap-6 items-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black sm:text-4xl text-2xl hover:scale-110 transition"
              >
                <IoLogoGithub />
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black sm:text-4xl text-2xl hover:scale-110 transition"
              >
                <LuLink />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-3 flex bg-black text-white rounded hover:bg-gray-800 transition gap-2 justify-center items-center"
        >
          {showAll ? "See Less " : "See More"} <FaArrowLeft className={!showAll ? "-rotate-180" : "-rotate-0"}/>
        </button>
      </div>
    </section>
  );
};

export default Projects;