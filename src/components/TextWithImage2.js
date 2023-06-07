import React, { useState } from "react";
import textimage2 from "../assets/images/textimage2.png";

const TextWithImage2 = () => {
  const [readMore, setReadMore] = useState(false);

  const extraContent = (
    <div>
      <p className="mt-4 font-semibold">
        Every month, hundreds of{" "}
        <span className="text-light-green font-bold">SFT traders</span> pay
        themselves salaries ranging from a few hundred dollars to{" "}
        <span className="text-light-green font-bold">
          several thousand dollars.
        </span>
      </p>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";

  return (
    <section className="px-6 md:px-8 bg-lightest-white-bg lg:-mt-12 homepage-container mx-auto">
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-y-8 gap-x-6 pt-12 lg:pt-0 ">
        <div className="block md:hidden w-full lg:w-1/2 flex flex-col text-left xl:mt-[100px]">
          <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
            EARN UP TO <span className="text-light-green px-2">90%</span>OF THE
            <br />
            PROFITS YOU GENERATE
          </h1>
          <div className="flex flex-row ml-2 items-start text-sm xl:text-sm w-full lg:w-[90%] xl:w-[75%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black">
              <p className="mt-1 font-semibold">
                Our{" "}
                <span className="text-light-green font-bold">
                  compensation principle
                </span>{" "}
                is simple: Our traders earn{" "}
                <span className="text-light-green font-bold">80%</span> of the{" "}
                <span className="text-light-green font-bold">profits</span> they
                create at the beginning.
              </p>
              {readMore && extraContent}
              <p
                className="read-more-link"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                <button className="mt-3 text-xs md:text-base text-light-white bg-light-green py-1.5 px-5 rounded-sm font-bold border border-light-green">
                  {linkName}
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full lg:w-1/2 flex flex-col text-left xl:mt-[100px]">
          <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
            EARN UP TO <span className="text-light-green px-2">90%</span>OF THE
            <br />
            PROFITS YOU GENERATE
          </h1>
          <div className="flex flex-row ml-2 items-start text-sm xl:text-sm w-full lg:w-[90%] xl:w-[75%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black">
              <p className="mt-1 font-semibold">
                Our{" "}
                <span className="text-light-green font-bold">
                  compensation principle
                </span>{" "}
                is simple: Our traders earn{" "}
                <span className="text-light-green font-bold">80%</span> of the{" "}
                <span className="text-light-green font-bold">profits</span> they
                create at the beginning.
              </p>
              <p className="mt-4 font-semibold">
                Every month, hundreds of{" "}
                <span className="text-light-green font-bold">SFT traders</span>{" "}
                pay themselves salaries ranging from a few hundred dollars to{" "}
                <span className="text-light-green font-bold">
                  several thousand dollars.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 z-50 lg:mt-[20px] xl:mt-[0px]">
          <img alt="video" src={textimage2} />
        </div>
      </div>
      <div className="uppercase text-light-green text-3xl md:text-[40px] mt-12 block md:hidden">
        <h1 className="text-light-green">
          SCALING KEY
          <br />
          FEATURES
        </h1>
      </div>
    </section>
  );
};

export default TextWithImage2;
