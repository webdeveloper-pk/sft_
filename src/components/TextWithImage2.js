import React from "react";
import textimage2 from "../assets/images/textimage2.png";

const TextWithImage2 = () => {
  return (
    <section class="px-6 md:px-8 bg-lightest-white-bg lg:-mt-12 homepage-container mx-auto">
      <div class="mx-auto flex flex-col lg:flex-row items-center gap-y-8 gap-x-6 pt-12 lg:pt-0 ">
        <div className="w-full lg:w-1/2 flex flex-col text-left">
          <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
            EARN UP TO <span className="text-light-green px-2">90%</span>OF THE
            <br />
            PROFITS YOU GENERATE
          </h1>
          <div className="flex flex-row ml-2 items-start text-sm xl:text-sm w-full lg:w-[90%] xl:w-[75%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black">
              <p className="mt-1">
                Our compensation principle is simple: Our traders earn 80% of
                the profits they create at the beginning.
              </p>
              <p className="mt-4">
                Every month, hundreds of SFT traders pay themselves salaries
                ranging from a few hundred dollars to several thousand dollars.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 z-50">
          <img alt="video" src={textimage2} />
        </div>
      </div>
      <div className="uppercase text-light-green text-3xl md:text-[40px] mt-12 block xl:hidden">
        <h1 className="text-light-green ">
          SCALING KEY
          <br />
          FEATURES
        </h1>
      </div>
    </section>
  );
};

export default TextWithImage2;
