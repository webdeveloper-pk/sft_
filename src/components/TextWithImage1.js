import React from "react";
import textimage1 from "../assets/images/textimage1.png";

const TextWithImage1 = () => {
  return (
    <section class="px-6 md:px-8 bg-lightest-white-bg homepage-container mx-auto">
      <div class="mx-auto flex flex-col lg:flex-row items-center gap-y-12 gap-x-8">
        <div className="w-full lg:w-1/2 z-50">
          <img
            className="object-cover object-center rounded"
            alt="video"
            src={textimage1}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col text-left">
          <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
            THIS IS THE<span className="text-light-green pl-3">NEW WAY</span>
          </h1>
          <div className="mb-8 flex flex-row ml-2 items-start text-sm xl:text-sm w-full lg:w-[90%] xl:w-[80%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black">
              <p className="mt-1">
                Capital increases on the SFT challenge occur in four-month
                cycles. For a capital increase, the trader must generate at
                least 7% net profit (14% in case of an Aggressive account) in
                four consecutive monthly cycles. At the same time, the trader
                must process at least 2 withdrawals during the 4-month period.
              </p>
              <p className="mt-4">
                It is important that the trader's account balance is higher than
                the initial account balance (in profit) at the time of scaling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImage1;
