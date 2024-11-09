import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Title = () => {
  const [text] = useTypewriter({
    words: [
      "Empowering Learners",
      "Elevating Skills",
      "Innovate Together",
      "Code the Future",
      "Data-Driven Insights",
      "Accelerate Growth",
      "Cloud Innovators",
    ],
    loop: {},
  });

  return (
    <div className="h-full w-full absolute flex flex-col text-white justify-center items-start pl-4 sm:pl-8">
      <h6 className="text-sm font-bold sm:text-base mt-16 tablet:text-3xl">
        University of Perpetual Help System Laguna - Biñan
      </h6>
      <h1 className="text-5xl font-extrabold sm:text-6xl tablet:text-[5rem]">
        <span className="text-yellow">AWS</span> Learning <br />
        <span className="text-8xl sm:text-9xl tablet:text-[8rem]">Club</span>
      </h1>
      <h3 className="text-xl sm:text-2xl tablet:text-3xl">
        {text}
        <Cursor />
      </h3>
      <div className="flex mt-6">
        <button className="text-sm rounded-full border-2 py-1 px-4 text-pink border-pink mr-4 hover:text-white hover:bg-pink active:bg-pink sm:text-base tablet:text-lg">
          Join the Club
        </button>
        <button className="text-sm rounded-full border-2 py-1 px-4 text-pink border-pink hover:text-white hover:bg-pink active:bg-pink sm:text-base tablet:text-lg">
          Register for Events
        </button>
      </div>
    </div>
  );
};

export default Title;
