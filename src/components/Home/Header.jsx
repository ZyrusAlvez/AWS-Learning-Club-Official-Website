import React, { useState } from "react";
import aws_logo from "../../assets/aws_logo.png"
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false)

  return (
    <div className="flex justify-between items-center w-full px-4 fixed pt-2 bg-black z-50">
      <img src={aws_logo} alt="AWS learning club Logo" className="w-14 h-14" />
      <div className="flex space-x-4 text-white">
        <div>

        </div>
        <IoMenu size={40} onClick={() => setShowNavigation((prev) => !prev)} className="cursor-pointer z-50"/>
        <h1 className="text-base hidden">Home</h1>
        <h1 className="text-base hidden">About Us</h1>
        <h1 className="text-base hidden">Events</h1>
        <h1 className="text-base hidden">Contact Us</h1>
      </div>
      <div className={`${showNavigation ? "block" : "hidden"} absolute bg-slate text-base text-white pt-2 pb-4 pl-4 w-40 h-auto flex flex-col justify-center rounded-md top-full right-4 z-10`}>
        <ul>
          <li className="pt-2">Home</li>
          <li className="pt-2">About Us</li>
          <li className="pt-2">Events</li>
          <li className="pt-2">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
