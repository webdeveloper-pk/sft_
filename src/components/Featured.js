import React from "react";
import forbes from "../assets/images/forbes.png";
import coindesk from "../assets/images/coindesk.png";
import cnn from "../assets/images/cnn.png";
import tradingview from "../assets/images/tradingview.png";

const Featured = () => {
  return (
    <section className="px-6 md:px-8 py-4 lg:py-6 bg-lightest-white-bg text-light-black homepage-container mx-auto">
      <div
        className="uppercase text-center mb-6"
        data-aos="zoom-in-left"
        data-aos-once="true"
        data-aos-duration="3000"
      >
        as featured on
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-12">
        <div className="border-l-4 md:border-l-0 border-r-4 border-light-green flex items-center justify-center py-4">
          <span>
            <img
              src={forbes}
              alt="logo"
              width="130px"
              height="auto"
              data-aos="flip-left"
              data-aos-once="true"
              data-aos-duration="3000"
            />
          </span>
        </div>
        <div className="border-l-4 border-r-4 md:border-l-0  md:border-r-0 xl:border-r-4 border-light-green flex items-center justify-center py-4">
          <span>
            <img
              src={coindesk}
              alt="logo"
              width="170px"
              height="auto"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-duration="3000"
            />
          </span>
        </div>
        <div className="border-l-4 md:border-l-0 border-r-4 border-light-green items-center flex justify-center py-4">
          <span>
            <img
              src={cnn}
              alt="logo"
              width="80px"
              height="auto"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="3000"
            />
          </span>
        </div>
        <div className="border-l-4 border-r-4 md:border-l-0  md:border-r-0 border-light-green flex flex-row justify-center items-center py-4">
          <span>
            <img
              src={tradingview}
              alt="logo"
              width="200px"
              height="auto"
              data-aos="flip-right"
              data-aos-once="true"
              data-aos-duration="3000"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
