import React, { useState, useEffect, useRef } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";
import images from "../images/img3.png";
import { motion, AnimatePresence } from "framer-motion";

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
      if (window.scrollY > 30) { // 50px se zyada scroll par color change
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
    { name: "Home", link: "Home",  },
    { name: "About", link: "About" },
    { name: "Skills", link: "Skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "Contact" },
  ];
   const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};


  return (
    <>
    <section id="header"  className={`fixed top-0 left-0 w-full transition-colors text-black z-50
    ${isScrolled ? "bg-[#6082B6] shadow-md text-white" : "bg-[#7393B3]"}`}>
      <div className={`flex items-center justify-between h-[70px] sm:h-20 px-4 md:px-10 `}>

        <Link className="flex items-center gap-4 md:gap-3"
        to="Home"
        smooth={true}>
          <img
            src={images}
            alt="logo"
            className="w-12 h-12 rounded-full  object-cover"
          />
          <h1 className="text-lg md:text-lg lg:text-xl font-serif">PORTFOLIO</h1>
        </Link>

      
        <div className=" px-5 py-3 rounded-full bg-[#7393B3]/40 shadow-md shadow-black  hidden md:flex border  gap-6  text-xl">
          {navItems.map((item, i) => (  
             <Link
                key={i}
                to={item.link}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active-link-1"
                className="text-lg cursor-pointer px-1.5  transition-all duration-150   hover:text-white"
                 >
                {item.name}
              </Link>
      
          ))}
        </div>

          <div className={` md:hidden text-2xl transform transition-transform duration-300
           ${menuOpen ? "-rotate-180" : "rotate-0"}`} >
         {!menuOpen ? (<CgMenuLeft className="text-3xl" onClick={() => setMenuOpen(true)}/>) 
         :(<RxCross1 className="text-3xl" onClick={() => setMenuOpen(false)}/>) }
        </div>

      </div>


    </section>

          {/* menu bar for mobile view */}

   <AnimatePresence>
          {menuOpen &&(
     
<div>
  <motion.div
    initial={{ y: -250 }}
    animate={{ y: 20 }}
    exit={{ y: -250 }}
    transition={{ duration: 0.3 }}
    ref={sidebarRef}
    className="w-full fixed"
  >
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-1.5 px-4 py-2 pt-14 text-white"
    >
      {navItems.map((item, i) => (
        <motion.div key={i} variants={itemAnimation}>
          <Link  
            to={item.link}
            smooth={true} 
            duration={500}
            offset={true}
            spy={true}
            activeClass="active-link"
            className="text-lg cursor-pointer  px-2 py-2 rounded-md justify-center bg-slate-600/90 flex flex-col pb-2 transition-all duration-150"
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
</div>
          )}
   </AnimatePresence> 
      
    </>
  );
};

export default Header;