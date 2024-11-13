import React, { useState } from "react";
import aws_logo from "../../assets/aws_logo.png";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [activeHome, setActiveHome] = useState(true)
  const [activeAbout, setActiveAbout] = useState(false)
  const [activeEvents, setActiveEvents] = useState(false)
  const [activeContanct, setActiveContact] = useState(false)

  function navButtonClicked(buttonNumber){
    switch (buttonNumber){
      case 1:
        setActiveHome(true)
        setActiveAbout(false)
        setActiveEvents(false)
        setActiveContact(false)
        break
      case 2:
        setActiveHome(false)
        setActiveAbout(true)
        setActiveEvents(false)
        setActiveContact(false)
        break
      case 3:
        setActiveHome(false)
        setActiveAbout(false)
        setActiveEvents(true)
        setActiveContact(false)
        break
      case 4:
        setActiveHome(false)
        setActiveAbout(false)
        setActiveEvents(false)
        setActiveContact(true)
        break
    }
  }

  return (
    <div className="flex justify-between items-center w-full px-4 fixed pt-2 bg-black z-50 sm:px-8 tablet:h-[5rem]">
      <img src={aws_logo} alt="AWS learning club Logo" className="w-14 h-14 tablet:w-24 tablet:h-24" />
      
      {/* Desktop Navigation */}
      <ul className="hidden space-x-4 text-white sm:flex tablet:text-3xl tablet:gap-5">
        <li><a href="#home" className={activeHome ? "text-yellow" : "text-white"} onClick={() => navButtonClicked(1)}>Home</a></li>
        <li><a href="#about_us" className={activeAbout ? "text-yellow" : "text-white"} onClick={() => navButtonClicked(2)}>About Us</a></li>
        <li><a href="#events" className={activeEvents ? "text-yellow" : "text-white"} onClick={() => navButtonClicked(3)}>Events</a></li>
        <li><a href="#contact_us" className={activeContanct ? "text-yellow" : "text-white"} onClick={() => navButtonClicked(4)}>Contact Us</a></li>
      </ul>

      {/* Mobile Menu Icon */}
      <IoMenu size={40} onClick={() => setShowNavigation((prev) => !prev)} className="cursor-pointer z-50 sm:hidden text-pink" />
      
      {/* Mobile Navigation */}
      <div className={`${showNavigation ? "block" : "hidden"} absolute bg-slate text-base text-white pt-2 pb-4 pl-4 w-40 h-auto flex flex-col justify-center rounded-md top-full right-4 z-10 sm:hidden`}>
        <ul>
          <li><a href="#home" className={`pt-2 block ${activeHome ? "text-yellow" : "text-white"}`} onClick={() => navButtonClicked(1)}>Home</a></li>
          <li><a href="#about_us" className={`pt-2 block ${activeAbout ? "text-yellow" : "text-white"}`} onClick={() => navButtonClicked(2)}>About Us</a></li>
          <li><a href="#events" className={`pt-2 block ${activeEvents ? "text-yellow" : "text-white"}`} onClick={() => navButtonClicked(3)}>Events</a></li>
          <li><a href="#contact_us" className={`pt-2 block ${activeContanct ? "text-yellow" : "text-white"}`} onClick={() => navButtonClicked(4)}>Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
