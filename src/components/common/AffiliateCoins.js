import React from "react";

const AffiliateCoins = ({ src, title, titleColor, description }) => {
  return (
    <div className="flex flex-col text-center">
      <img src={src} alt="coin" />
      <h1 className={`text-xl font-bold uppercase mt-6 ${titleColor}`}>
        {title}
      </h1>
      <p className="text-base font-semibold -mt-3">{description}</p>
    </div>
  );
};

export default AffiliateCoins;
