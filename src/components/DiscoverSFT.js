import React from "react";
import discoverVideo from "../assets/videos/discover-video.mp4";
import discoverBg1 from "../assets/images/discover-bg1.png";

const DiscoverSFT = () => {
  return (
    <section
      class="pt-12 px-6 md:px-8 bg-lightest-white-bg homepage-container mx-auto"
      id="objectives"
    >
      <div class="mx-auto flex flex-col lg:flex-row items-start gap-y-8 gap-x-6">
        <div className="w-full lg:w-1/2 flex flex-col text-left">
          <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
            Trade for <span className="text-light-green">Proprietary</span>
            <br />
            <span className="text-light-green">Trading Firm</span>
          </h1>
          <div className="flex flex-row ml-2 items-start text-sm lg:text-xs xl:text-sm w-full lg:w-[90%] xl:w-[85%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black">
              <p className="mt-1">
                SFT developed a unique 2-step Evaluation Course for traders.
                This Evaluation Process consists of the SFT Challenge and the
                Verification and is specifically tailored to discover trading
                talents.
              </p>
              <p className="mt-4">
                Upon successful completion of the Evaluation Course, you are
                offered a placement in the SFT Proprietary Trading firm where
                you can remotely manage the SFT Account with a balance of up to
                $400,000
              </p>
              <p className="mt-4">
                Your journey to get there might be challenging, but our
                educational applications, account analysis and performance coach
                are here to help you on the endeavour to financial independence.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 z-50 relative">
          <video controls className="rounded-[12px]">
            <source
              src={`${discoverVideo}#t=0.1`}
              type="video/mp4"
              className="mb-6"
              width="100vw"
              height="100vh"
            />
          </video>
          <div className="absolute mt-1.5 z-50">
            <img
              src={discoverBg1}
              alt="reflection"
              width="100%"
              height="auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSFT;
