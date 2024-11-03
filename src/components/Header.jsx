import React from "react";
import aws_logo from "../assets/aws_logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full px-2 absolute">
      <img src={aws_logo} alt="AWS learning club Logo" className="w-11 h-11" />
      <div className="flex space-x-4 text-white">
        <h1 className="text-base">Home</h1>
        <h1 className="text-base">About Us</h1>
        <h1 className="text-base">Events</h1>
        <h1 className="text-base">Contact Us</h1>
      </div>
    </div>
  );
};

export default Header;
