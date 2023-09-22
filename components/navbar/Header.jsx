"use client"

import { Avatar } from "@mui/material";
import React from "react";
import { BiLogoFlutter, BiMoon, BiSearchAlt2, BiSolidUserCircle } from 'react-icons/bi';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


const Header = () => {
  return (
    <header className="relative  top-0  py-1 rounded-md px-6 flex items-center justify-between z-10   ">
      {/* Left Side (Logo) */}
      <div className="">
        <button className="">
        <BiLogoFlutter className="  text-bla w-6 h-6" />
        </button>
       
      </div>

      {/* Right Side (Search, Dark Mode, Profile) */}
      <div className="flex items-center   space-x-4 ">
        {/* Search Bar */}
        <div className=" hidden sm:flex relative items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 text-white py-2 pl-8 pr-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ">
            <BiSearchAlt2 className="w-5 h-5" />
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <button className=" ">
          <DarkModeOutlinedIcon className=" w-6 h-6" />
        </button>

        {/* Profile Icon */}
        <div className="relative">
          <button className="">
       
          <Avatar  src="https://i.ibb.co/M8xpz2L/1000006471-modified.jpg" alt="1000006471-modified"  className=" w-7 h-7"/>
          </button>
          {/* Add notifications or other indicators here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
