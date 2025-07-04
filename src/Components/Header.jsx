import React, { useState } from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import { GiCrossedBones } from "react-icons/gi";
import { Link } from "react-scroll";
import images from "../images/img3.png";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: "Home", link: "Home" },
    { name: "About", link: "About" },
    { name: "Skills", link: "Skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "Contact" },
  ];

  return (
    <>
    <section id="header"  className={` fixed top-0 left-0 w-full  bg-gradient-to-r from-gray-200 to-gray-700 text-black  shadow-lg z-50
    `}>
      <div className="flex items-center justify-between h-20 px-4 md:px-10">

        <div className="flex items-center gap-4 md:gap-3">
          <img
            src={images}
            alt="logo"
            className="w-12 h-12 rounded-full shadow-xl object-cover"
          />
          <h1 className="text-lg md:text-lg lg:text-xl font-serif">PORTFOLIO</h1>
        </div>

      
        <div className="hidden md:flex items-center gap-6  text-xl">
          {navItems.map((item, i) => (
            
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
      
          ))}
        </div>

        <div className={` md:hidden text-2xl transform transition-transform duration-300 ${menuOpen ? "-rotate-90" : "rotate-0"}`}  onClick={toggleMenu}>
          {menuOpen ? <GiCrossedBones/> : <HiOutlineBars2 className="text-3xl"/>}
        </div>
      </div>

     {/* mobile view  */}
      <AnimatePresence>
          {menuOpen && (
        <motion.div id="menu" 
         initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
        className={`md:hidden bg-inherit flex flex-col transform duration-150 rounded-b-full border-black border-t justify-center items-center p-3 `}>
         
         <div className=" border-2 border-gray-700/80 px-4 py-2 rounded-lg">
           {navItems.map((item, i) => (
          <Link  
          key={i}
            to={item.link}
            smooth={true} 
            duration={500}
            offset={true}
            spy={true}
            activeClass="active-link"
            className="text-lg cursor-pointer p-0.5 flex flex-col justify-center items-center pb-2 px-28 rounded-lg transition-all duration-300 "
            onClick={() => setMenuOpen(false) }>{item.name}
          </Link>
          ))}
         </div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>

    
      
    </>
  );
};

export default Header;
