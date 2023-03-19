import React from "react";
import bg from "../../assets/images/affiliate-flower.png";
import glow from "../../assets/images/affiliate-leader-glow.png";

const LeaderCard = ({
  trophy,
  src,
  name,
  country,
  profit,
  size,
  equity,
  gain,
}) => {
  return (
    <div className="bg-black rounded-2xl text-white font-semibold px-3 py-2 relative">
      <div className="absolute left-12 md:left-14 lg:left-24 xl:left-[23%] 2xl:left-[26%] top-0">
        <img src={bg} alt="bg" />
      </div>
      <div className="absolute -right-2 top-3">
        <img src={trophy} alt="bg" width="70%" />
      </div>
      <div className="absolute -right-2 top-20">
        <img src={glow} alt="bg" width="100%" height="300px" />
      </div>
      <div>
        <div className="-mt-20 flex flex-col items-center">
          <img src={src} alt="avatar" />
          <div className="text-center mt-2">
            <h1 className="text-white uppercase font-bold text-2xl">{name}</h1>
            <p className="text-white font-semibold text-base -mt-2">
              {country}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center my-6 gap-x-12 lg:gap-x-24 text-white uppercase font-semibold">
        <div>
          <p className="text-sm md:text-base">profit</p>
          <p className="text-lg md:text-xl">{profit}</p>
          <p className="text-sm md:text-base mt-3">account size</p>
          <p className="text-lg md:text-xl text-xl">{size}</p>
        </div>
        <div>
          <p className="text-sm md:text-base">Equity</p>
          <p className="text-lg md:text-xl">{equity}</p>
          <p className="text-sm md:text-base mt-3">Gain</p>
          <p className="text-lg md:text-xl">{gain}</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
