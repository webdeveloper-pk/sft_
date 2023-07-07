import React from "react";

const AffiliatePortalCard = ({ bgColor, src, title, total }) => {
  return (
    <div
      className={`${bgColor} rounded-md px-6 md:px-10 py-8 flex flex-row justify-start items-center gap-x-6`}
    >
      <div>
        <img
          src={src}
          alt="portal-card"
          className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px]"
        />
      </div>
      <div>
        <h1 className="text-black font-medium text-base lg:text-xl xl:text-2xl">
          {title}
        </h1>
        <p className="text-black font-bold text-lg lg:text-2xl xl:text-3xl">
          {total}
        </p>
      </div>
    </div>
  );
};

export default AffiliatePortalCard;
