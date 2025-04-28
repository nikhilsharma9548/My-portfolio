import React, { useState } from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import { GiCrossedBones } from "react-icons/gi";
import { FaRegMessage } from "react-icons/fa6"; 
 import '../index.css';

import { Link } from "react-scroll";
// import { FaBars, FaTimes } from "react-icons/fa"; 
import images from "../images/img3.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: "Home", link: "Home" },
    { name: "About", link: "About" },
    { name: "Projects", link: "projects" },
    { name: "Skills", link: "Skills" },
    { name: "Contact", link: "Contact" },
  ];

  return (
    <section className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-200 to-gray-700 text-black font-serif shadow-lg z-50">
      <div className="flex items-center justify-between h-28 px-4 md:px-10">

        <div className="flex items-center gap-4">
          <img
            src={images}
            alt="logo"
            className="w-14 h-14 md:w-20 md:h-20 rounded-full shadow-xl object-cover"
          />
          <h1 className="text-xl md:text-2xl font-bold">PORTFOLIO</h1>
        </div>

      
        <div className="hidden md:flex items-center gap-8 text-xl">
          {navItems.map((item, i) => (
            <h1
              key={i}
              href={item.link}
              className="hover:text-white transition-all duration-300"
            >
              <Link
                key={i}
                to={item.link}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active-link"
                className="text-xl cursor-pointer pb-3 transition-all duration-300"
              >
                {item.name}
              </Link>
            </h1>
          ))}
        </div>

      
        <div className="hidden md:flex items-center">
          <h1 className="px-4 py-2 bg-white text-[18px] rounded-full hover:cursor-pointer flex gap-2 hover:bg-black hover:text-white transition-all duration-300">
            <FaRegMessage style={{ fontSize: "1.2em" }} /> CONTACT ME
          </h1>
        </div>

  
        <div className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <GiCrossedBones /> : <HiOutlineBars2 className="text-3xl" />}
        </div>
      </div>

    
      {menuOpen && (
        <div id="menu" 
        className="md:hidden absolute left-64 right-0  flex flex-col  items-end gap-4 rounded-md bg-gray-800 text-white py-4 px-4 shadow-lg transition-transform duration-300 ease-in-out z-50 ">

          

          {navItems.map((item, i) => (
            <h1
              key={i}
              href={item.link}
              className="text-lg hover:text-gray-300 text-center w-full py-0 px-4  rounded-md hover:bg-gray-700 transition-all duration-300 "
              onClick={() => setMenuOpen(false)}
            >
          
             <Link
             key={i}
             to={item.link}
             smooth={true}
             duration={500}
             offset={-70}
             spy={true}
             activeClass="active-link"
             className="text-lg cursor-pointer pb-3 transition-all duration-300"
           >
             {item.name}
           </Link>
            </h1>
          ))}
          {/* <button  className="flex items-center  rounded-full  text-center w-full py-0 px-10  hover:bg-gray-700 transition-all duration-300">
             Contact-Me
          </button> */}
        </div>
      )}
    </section>
  );
};

export default Header;
