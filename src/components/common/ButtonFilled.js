import React from "react";

const ButtonFilled = ({
  textSize,
  buttonText,
  paddingX,
  paddingY,
  textColor,
}) => {
  return (
    <div
      className={`${textSize} ${paddingX} ${paddingY} text-white bg-light-green hover:text-light-green hover:bg-transparent 2xl:py-3 rounded-full uppercase font-semibold border border-light-green hover:cursor-pointer`}
      style={{ color: textColor }}
    >
      {buttonText}
    </div>
  );
};

export default ButtonFilled;
