import React, { useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import images from "../images/img3.png";

const Header = () => {
  return (
    <section className="fixed flex h-28 md:h-24  w-full justify-between shadow-lg bg-gradient-to-r from-gray-200 to-gray-700 text-black font-serif px-4">

      <div className=" flex justify-center items-center gap-5">
      <img
            src={images}
            alt="logo"
            className="w-20 h-20 items-center max-md:h-12 max-md:w-12 max-md:mx-0 rounded-full shadow-xl mx-5 object-cover"
          /> <h1 className=" text-2xl max-md:text-[20px]">PORTFOLIO</h1>
      </div>
      <div className="flex text-xl w-[25%] max-md:hidden  items-center justify-center gap-8 shadow-lg rounded-full h-20 mt-2">
          <button >Home</button>
          <a href="#About" className="">About</a>
          <button>Projects</button>
          <button>Skills</button>
      </div>
      <div className="items-center  flex justify-center max-md:hidden">
        <h1 className="p-4  mx-6 bg-white text-[18px] rounded-full hover:cursor-pointer flex gap-2  "><FaRegMessage style={{ fontSize: "1.2em"}} />CONTACT ME</h1>
      </div>

      
    </section>
  );
};

export default Header;
