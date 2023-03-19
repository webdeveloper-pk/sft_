import React from "react";

const AffiliatePortalCard = ({ bgColor, src, title, total }) => {
  return (
    <div
      className={`${bgColor} rounded-md px-6 md:px-10 py-8 flex flex-row justify-start items-center gap-x-6`}
    >
      <div>
        <img src={src} alt="card-image" />
      </div>
      <div>
        <h1 className="text-black font-medium text-lg md:text-2xl">{title}</h1>
        <p className="text-black font-bold text-xl md:text-3xl">{total}</p>
      </div>
    </div>
  );
};

export default AffiliatePortalCard;
