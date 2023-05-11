import React, { useState } from "react";
import textimage1 from "../assets/images/textimage1.png";

const TextWithImage1 = () => {
  const [readMore, setReadMore] = useState(false);

  const extraContent = (
    <div>
      <p className="mt-4 font-semibold">
        It is important that the{" "}
        <span className="text-light-green font-bold">
          trader's account balance
        </span>{" "}
        is higher than the initial account balance (in profit) at the time of
        scaling.
      </p>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";

  return (
    <section class="px-6 md:px-8 bg-lightest-white-bg homepage-container mx-auto">
      <div class="mx-auto flex flex-col-reverse lg:flex-row items-center gap-y-12 gap-x-8">
        <div className="w-full lg:w-1/2 z-50  -mt-[50px] md:-mt-[80px] flex justify-center">
          <img
            className="object-cover object-center rounded w-full md:w-[70%] lg:w-full"
            alt="video"
            src={textimage1}
          />
        </div>
        <div className="block md:hidden w-full lg:w-1/2 flex flex-col text-left mt-[100px] md:mt-[200px] lg:mt-[16px] xl:mt-[12px]">
          <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
            THIS IS THE<span className="text-light-green pl-3">NEW WAY</span>
          </h1>
          <div className="mb-8 flex flex-row ml-2 items-start text-sm xl:text-sm w-full lg:w-[90%] xl:w-[80%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black">
              <p className="mt-1 font-semibold">
                Capital increases on the{" "}
                <span className="text-light-green font-bold">
                  SFT challenge
                </span>{" "}
                occur in{" "}
                <span className="text-light-green font-bold">
                  four-month cycles.
                </span>{" "}
                For a capital increase, the trader must generate at least{" "}
                <span className="text-light-green font-bold">7%</span> net
                profit (<span className="text-light-green font-bold">14%</span>{" "}
                in case of an Aggressive account) in four consecutive monthly
                cycles. At the same time, the trader must process at least{" "}
                <span className="text-light-green font-bold">
                  2 withdrawals
                </span>{" "}
                during the 4-month period.
              </p>
              {readMore && extraContent}
              <a
                className="read-more-link"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                <button className="mt-3 text-xs md:text-base text-light-white bg-light-green py-1.5 px-5 rounded-sm font-bold border border-light-green">
                  {linkName}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full lg:w-1/2 flex flex-col text-left mt-[100px] md:mt-[200px] lg:mt-[16px] xl:mt-[12px]">
          <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
            THIS IS THE<span className="text-light-green pl-3">NEW WAY</span>
          </h1>
          <div className="mb-8 flex flex-row ml-2 items-start text-sm xl:text-sm w-full lg:w-[90%] xl:w-[80%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black">
              <p className="mt-1 font-semibold">
                Capital increases on the{" "}
                <span className="text-light-green font-bold">
                  SFT challenge
                </span>{" "}
                occur in{" "}
                <span className="text-light-green font-bold">
                  four-month cycles.
                </span>{" "}
                For a capital increase, the trader must generate at least{" "}
                <span className="text-light-green font-bold">7%</span> net
                profit (<span className="text-light-green font-bold">14%</span>{" "}
                in case of an Aggressive account) in four consecutive monthly
                cycles. At the same time, the trader must process at least{" "}
                <span className="text-light-green font-bold">
                  2 withdrawals
                </span>{" "}
                during the 4-month period.
              </p>
              <p className="mt-4 font-semibold">
                It is important that the{" "}
                <span className="text-light-green font-bold">
                  trader's account balance
                </span>{" "}
                is higher than the initial account balance (in profit) at the
                time of scaling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImage1;
