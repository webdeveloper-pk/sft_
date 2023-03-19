import React from "react";
import stars from "../../assets/images/stars.png";

const Card = ({ src, name, message }) => {
  return (
    <div
      className="px-6 py-12 lg:py-8 xl:py-12 border border-light-green"
      style={{ borderRadius: "50px" }}
    >
      <div className="flex flex-row gap-x-3 items-center">
        <img src={src} alt="avatar" width="40px" height="40px" />
        <img src={stars} alt="stars" width="70px" height="auto" />
      </div>
      <p className="mt-3 text-light-green uppercase font-bold text-sm">
        {name} <span className="text-light-black px-1">REVIEWED</span> SFT
      </p>
      <p className="mt-3">{message}</p>
    </div>
  );
};

export default Card;
