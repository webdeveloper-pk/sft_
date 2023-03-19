import React from "react";
import { Tooltip } from "antd";

const ChallengeButton = ({ text, bgColor, borderColor, tooltip }) => {
  return (
    <div className="challenge-tooltip">
      <Tooltip title={tooltip} color="#01c887">
        <button
          className={`flex justify-center items-center gap-x-1.5 text-lightest-white-bg ${bgColor} border ${borderColor} hover:bg-light-green hover:border-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm`}
        >
          <span>{text}</span>
        </button>
      </Tooltip>
    </div>
  );
};

export default ChallengeButton;
