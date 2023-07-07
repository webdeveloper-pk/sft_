import React from "react";
import icon from "../../assets/images/simulator-question.png";

const SimulatorResult = ({ text, result }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex gap-x-2 md:gap-x-3 items-center">
        <div>
          <img
            src={icon}
            alt="icon"
            className="w-[16px] h-[16px] md:w-[22px] md:h-[22px]"
          />
        </div>
        <p className="text-xs md:text-sm lg:text-sm font-semibold text-lighter-gray2">
          {text}
        </p>
      </div>
      <div className="text-black font-bold text-sm md:text-base lg:text-sm xl:text-base">
        {result}
      </div>
    </div>
  );
};

export default SimulatorResult;
