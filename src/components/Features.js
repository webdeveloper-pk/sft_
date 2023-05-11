import React from "react";
import chart from "../assets/images/features-chart.png";
import featuresbg1 from "../assets/images/features-bg1.png";
import featuresbg2 from "../assets/images/features-bg2.png";
import featuresbg3 from "../assets/images/features-bg3.png";
import featuresbg4 from "../assets/images/features-bg4.png";

const Features = () => {
  return (
    <section
      class="px-6 md:px-8 pb-8 xl:-mt-[40px] text-light-black features-bg relative"
      id="scaling"
    >
      <div className="absolute left-0 bottom-0">
        <img
          src={featuresbg1}
          alt="dots"
          width="450px"
          height="auto"
          className="w-[200px] md:w-[300px] lg:w-[500px]"
        />
      </div>
      <div className="absolute right-0 top-0">
        <img
          src={featuresbg2}
          alt="dots"
          width="450px"
          height="auto"
          className="w-[200px] md:w-[300px] lg:w-[500px]"
        />
      </div>
      <div className="absolute left-0 -top-[10%]">
        <img
          src={featuresbg3}
          alt="dots"
          width="450px"
          height="auto"
          className="w-[200px] md:w-[300px] lg:w-[500px]"
        />
      </div>
      <div className="absolute right-0 -bottom-[10%]">
        <img
          src={featuresbg4}
          alt="dots"
          width="450px"
          height="auto"
          className="w-[200px] md:w-[300px] lg:w-[500px]"
        />
      </div>
      <div className="uppercase text-light-green text-3xl lg:text-[40px] features-title homepage-container mx-auto px-6 md:px-8">
        <h1 className="text-light-green flex flex-col items-end justify-center">
          SCALING KEY
          <br />
          <div className="mt-2">FEATURES</div>
        </h1>
      </div>
      <div className="w-full mt-6 md:mt-32 xl:mt-56 2xl:mt-52 pl-0 md:pl-16 xl:pl-24 px-6 md:px-8 homepage-container mx-auto">
        <div className="w-full md:w-[55%] lg:w-[40%] xl:w-[30%]">
          <p className="text-light-green font-bold text-base">
            Capital increases on the SFT challenge take place in four-month
            cycles.
          </p>
          <p className="text-light-white font-light text-sm mt-6">
            For a capital increase, the trader must generate at least 7% net
            profit (14% in the case of an Aggressive type account) in four
            consecutive monthly cycles. At the same time, the trader must
            process at least 2 withdrawals during the 4 month period.
          </p>
        </div>
      </div>
      <div>
        <div className="homepage-container mx-auto px-6 md:px-8 relative">
          <div className="absolute mt-[10%] md:-mt-[5%] lg:-mt-[15%] xl:-mt-[20%] left-0 flex justify-center">
            <img
              src={chart}
              alt="chart"
              className="w-[100%] lg:w-[90%] h-auto"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-[130px] md:mt-[200px] lg:mt-[150px] xl:mt-[70px] xl:ml-12">
        <div className="flex w-[0%] md:w-[50%]"></div>
        <div className="w-[100%] md:w-[40%] lg:w-[50%] pb-12 md:pb-36 xl:pb-44 mt-24 2xl:pb-56 2xl:mt-20 flex justify-center">
          {/* <p className="hidden xl:block text-transparent font-bold text-sm w-[100%] md:w-[90%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%]"></p> */}
          <p className="text-light-green font-bold text-xs md:text-sm w-[100%] md:w-[90%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%]">
            It is important that the trader's account balance is greater than
            the initial account balance (in profit) at the time of scaling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
