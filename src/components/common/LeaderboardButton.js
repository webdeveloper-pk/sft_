import React from "react";

const LeaderboardButton = ({ text, bgColor, borderColor }) => {
  return (
    <button
      className={`text-lightest-white-bg ${bgColor} border ${borderColor} hover:bg-light-green hover:border-light-green py-4 w-[90px] rounded-full text-sm uppercase font-semibold`}
    >
      {text}
    </button>
  );
};

export default LeaderboardButton;
