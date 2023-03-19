import React from "react";

const Stat = ({ stats, description }) => {
  return (
    <button className="stats1 w-full h-full flex flex-col items-center text-light-green bg-transparent border border-light-green hover:text-white py-2 2xl:py-3 px-6 xl:px-4 rounded-full">
      <span className="stats2">
        <p className="font-bold uppercase text-xl lg:text-2xl">{stats}</p>
        <p className="text-sm">{description}</p>
      </span>
    </button>
  );
};

export default Stat;
