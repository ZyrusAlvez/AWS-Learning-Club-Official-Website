import React from "react";

const Top_Card = ({ title, subtitle }) => {
  return (
    <div className="border-pink border-2 rounded-2xl px-4 h-40 text-white flex flex-col justify-center font-inter w-80">
      <h1 className="text-2xl mb-2 font-bold">{title}</h1>
      <h2 className="">{subtitle}</h2>
    </div>
  );
};

export default Top_Card;
