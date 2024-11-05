import React, { useState } from "react";
import aws_logo from "../../assets/aws_logo.png";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <div className="flex justify-between items-center w-full px-4 fixed pt-2 bg-black z-50 sm:px-8">
      <img src={aws_logo} alt="AWS learning club Logo" className="w-14 h-14" />
      
      {/* Desktop Navigation */}
      <ul className="hidden space-x-4 text-white sm:flex">
        <li><a href="#home">Home</a></li>
        <li><a href="#about_us">About Us</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#contact_us">Contact Us</a></li>
      </ul>

      {/* Mobile Menu Icon */}
      <IoMenu size={40} onClick={() => setShowNavigation((prev) => !prev)} className="cursor-pointer z-50 sm:hidden text-pink" />
      
      {/* Mobile Navigation */}
      <div className={`${showNavigation ? "block" : "hidden"} absolute bg-slate text-base text-white pt-2 pb-4 pl-4 w-40 h-auto flex flex-col justify-center rounded-md top-full right-4 z-10`}>
        <ul>
          <li><a href="#home" className="pt-2 block">Home</a></li>
          <li><a href="#about_us" className="pt-2 block">About Us</a></li>
          <li><a href="#events" className="pt-2 block">Events</a></li>
          <li><a href="#contact_us" className="pt-2 block">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
