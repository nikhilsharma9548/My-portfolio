import React, { useState, useEffect, useRef } from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";
import images from "../images/img3.png";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

     useEffect(() => {
      function handleClickOutside(event) {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          setMenuOpen(false);
        }
      }

      if (menuOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [menuOpen, setMenuOpen, sidebarRef]);

     const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 20) { // 50px se zyada scroll par color change
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = [
    { name: "Home", link: "Home" },
    { name: "About", link: "About" },
    { name: "Skills", link: "Skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "Contact" },
  ];

  return (
    <>
    <section id="header"  className={`fixed top-0 left-0 w-full transition-colors text-black z-50
    ${isScrolled ? "bg-slate-700 shadow-md" : " bg-gradient-to-r from-gray-200 to-gray-700"}`}>
      <div className={`flex items-center justify-between h-[70px] sm:h-20 px-4 md:px-10 `}>

        <div className="flex items-center gap-4 md:gap-3">
          <img
            src={images}
            alt="logo"
            className="w-12 h-12 rounded-full  object-cover"
          />
          <h1 className="text-lg md:text-lg lg:text-xl font-serif">PORTFOLIO</h1>
        </div>

      
        <div className=" px-5 py-3 rounded-full bg-gray-600/40 shadow-md shadow-black  hidden md:flex border  gap-6  text-xl">
          {navItems.map((item, i) => (  
             <Link
                key={i}
                to={item.link}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active-link-1"
                className="text-lg cursor-pointer px-1.5  transition-all duration-300 hover:text-white"
                 >
                {item.name}
              </Link>
      
          ))}
        </div>

        <div className={` md:hidden text-2xl transform transition-transform duration-300 ${menuOpen ? "-rotate-90" : "rotate-0"}`}  onClick={() => setMenuOpen(true)}>
         <HiOutlineBars2 className="text-3xl"/>
        </div>
      </div>


    </section>

   <AnimatePresence>
          {menuOpen &&(
            <div className='fixed inset-0 bg-black/40 z-50 md:hidden '>
              
              <motion.div
               initial ={{x: 250}}
              animate ={{x:10}}
              exit={{x:250}}
              transition={{duration: 0.4}}
              ref={sidebarRef}
              className="bg-gradient-to-br from-gray-200 to-gray-600 w-60 p-7 inset-0  fixed top-0 h-full justify-self-end pt-24">  

               <div className="flex items-start justify-end relative bottom-20 text-xl font-semibold"onClick={() => setMenuOpen(false)}><RxCross1/> </div>

            <div className="flex flex-col gap-1.5 px-4 py-2">
           {navItems.map((item, i) => (
          <Link  
            key={i}
            to={item.link}
            smooth={true} 
            duration={500}
            offset={true}
            spy={true}
            activeClass="active-link"
            className="text-lg cursor-pointer flex flex-col justify-center items-center pb-2 transition-all duration-150 "
            onClick={() => setMenuOpen(false) }>{item.name}
          </Link>
          ))}
         </div>

              </motion.div>
            </div>
          )}
   </AnimatePresence> 
      
    </>
  );
};

export default Header;


{/* <AnimatePresence>
          {menuOpen && (
        <motion.div id="menu" 
         initial={{x: 50 }}
            animate={{x: 0 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.3 }}
        className={`md:hidden bg-inherit flex flex-col justify-center items-end p-3 `}>
         
         <div className=" border-2 flex flex-col gap-1.5  border-gray-700/80 bg-gray-600 px-4 py-2  rounded-lg">
           {navItems.map((item, i) => (
          <Link  
            key={i}
            to={item.link}
            smooth={true} 
            duration={500}
            offset={true}
            spy={true}
            activeClass="active-link"
            className="text-lg cursor-pointer  p-0.7 flex flex-col bg-gray-700/90 justify-center items-center pb-2 px-20 transition-all duration-150 "
            onClick={() => setMenuOpen(false) }>{item.name}
          </Link>
          ))}
         </div>
        </motion.div>
      )}
      </AnimatePresence> */}