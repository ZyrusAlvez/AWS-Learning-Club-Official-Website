import React from "react";
import background from "../assets/background.jpg";

const Title = () => {
  return (
    <div className="h-full w-full">
      <div className="text-white absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl"><span className="text-yellow font-bold">AWS</span> 
        <br/>Learning Club!</h1>
      </div>
    </div>
  );
};

export default Title;
