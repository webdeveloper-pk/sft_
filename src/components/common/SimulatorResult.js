import React from "react";
import icon from "../../assets/images/simulator-question.png";

const SimulatorResult = ({ text, result }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex gap-x-3 items-center">
        <div>
          <img src={icon} alt="icon" width={22} height="auto" />
        </div>
        <p className="text-sm md:text-xs lg:text-sm font-semibold text-lighter-gray2">
          {text}
        </p>
      </div>
      <div className="text-black font-bold text-base md:text-sm lg:text-base">
        {result}
      </div>
    </div>
  );
};

export default SimulatorResult;
