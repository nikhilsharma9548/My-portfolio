import React, { useState } from "react";
import { FaRegMessage } from "react-icons/fa6"; 
import { FaBars, FaTimes } from "react-icons/fa"; 
import images from "../images/img3.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#Skills" },
  ];

  return (
    <section className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-200 to-gray-700 text-black font-serif shadow-lg z-50">
      <div className="flex items-center justify-between h-24 px-4 md:px-10">

        <div className="flex items-center gap-4">
          <img
            src={images}
            alt="logo"
            className="w-14 h-14 md:w-20 md:h-20 rounded-full shadow-xl object-cover"
          />
          <h1 className="text-xl md:text-2xl font-bold">PORTFOLIO</h1>
        </div>

      
        <div className="hidden md:flex items-center gap-8 text-lg">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="hover:text-white transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

      
        <div className="hidden md:flex items-center">
          <h1 className="px-4 py-2 bg-white text-[18px] rounded-full hover:cursor-pointer flex gap-2 hover:bg-black hover:text-white transition-all duration-300">
            <FaRegMessage style={{ fontSize: "1.2em" }} /> CONTACT ME
          </h1>
        </div>

  
        <div className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

    
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-gray-800 text-white py-4 transition-all duration-500">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-lg hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <h1 className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300">
            <FaRegMessage style={{ fontSize: "1.2em" }} /> CONTACT ME
          </h1>
        </div>
      )}
    </section>
  );
};

export default Header;
