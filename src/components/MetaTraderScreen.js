import React from "react";
import sftscreens from "../assets/images/devices.png";
import metatraders4 from "../assets/images/metatrader4.png";
import metatraders5 from "../assets/images/metatrader5.png";
// import ctraders from "../assets/images/ctrader.png";

const MetaTraderScreen = () => {
  return (
    <section className="px-6 md:px-8 bg-lightest-white-bg homepage-container mx-auto">
      <div className="w-full mx-auto pt-12">
        <img src={sftscreens} alt="meta-traders" />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-x-4 gap-y-8 pb-12 px-6 lg:px-12 xl:px-32">
        <div className="flex flex-col lg:min-h-[120px] justify-between">
          <div className="flex justify-center mb-4 lg:mb-0">
            <img
              src={metatraders4}
              alt="meta-traders4"
              className="w-[50%] md:w-[60%]"
            />
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.metatrader4.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="submit"
                className="text-xs md:text-base text-light-white bg-light-green py-1.5 px-5 rounded-sm uppercase font-bold border border-light-green"
              >
                Download
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:min-h-[120px] justify-between">
          <div className="flex justify-center mb-4 lg:mb-0">
            <img
              src={metatraders5}
              alt="meta-traders5"
              className="w-[50%] md:w-[60%]"
            />
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.metatrader5.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="submit"
                className="text-xs md:text-base text-light-white bg-light-green py-1.5 px-5 rounded-sm uppercase font-bold border border-light-green"
              >
                Download
              </button>
            </a>
          </div>
        </div>
        {/* <div className="flex flex-col lg:min-h-[120px] justify-between">
          <div className="flex justify-center md:mt-2 lg:mt-3 mb-4 lg:mb-0">
            <img src={ctraders} alt="ctraders" className="w-[40%] md:w-[80%]" />
          </div>
          <div className="flex justify-center">
            <a href="/">
            <button
              type="submit"
              className="text-xs md:text-base text-light-white bg-light-green py-1.5 px-5 rounded-sm uppercase font-bold border border-light-green"
            >
              Download
            </button>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MetaTraderScreen;
