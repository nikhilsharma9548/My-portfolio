import React, { useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import images from "../images/img3.png";

const Header = () => {
  return (
    <section className="fixed flex h-28 md:h-24  w-full justify-between shadow-lg bg-gradient-to-r from-gray-200 to-gray-700 text-black font-serif px-4">

      <div className=" flex justify-center flex-col items-center ">
      <img
            src={images}
            alt="logo"
            className="w-20 h-20 items-center max-md:h-14 max-md:w-14  rounded-full shadow-xl object-cover"
          /> <h1 className=" text-2xl max-md:text-[17px]">PORTFOLIO</h1>
      </div>
      <div className="flex text-2xl w-[25%] max-md:hidden  items-center justify-center gap-10 shadow-lg rounded-full h-24 mt-2">
          <button >Home</button>
          <a href="#About" className="">About</a>
          <button>Projects</button>
          <button>Skills</button>
      </div>
      <div className="items-center flex justify-center max-md:hidden">
        <h1 className="p-4  mx-6 bg-white text-[18px] rounded-full hover:cursor-pointer flex gap-3  "><FaRegMessage style={{ fontSize: "1.4em" }} />CONTACT ME</h1>
      </div>

      
    </section>
  );
};

export default Header;
