import React from "react";

const Hero = () => {
  return (
    <section class="px-6 md:px-8 text-light-white homepage-container mx-auto">
      <div class="mx-auto flex py-16 md:py-12 md:flex-row flex-col items-center relative">
        <div class="hidden md:block slide-right lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 class="text-5xl xl:text-6xl mb-4 font-bold text-light-white uppercase mt-8">
            Become an <br />
            <span className="text-light-green">SFT Trader!</span>
            <br class="hidden lg:inline-block" />
          </h1>
          <p
            class="mb-12 leading-relaxed w-full text-light-white border-l-4 border-light-green pl-4 xl:text-lg"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration="3000"
          >
            Join our challenge and enhance your skills to <br />
            manage real accounts upto{" "}
            <span className="text-light-green px-1">$500,000</span>as a <br />
            successful SFT trader.
          </p>
          <div className="flex">
            <a href="#challenge">
              <button
                type="submit"
                className="blink-me text-base text-light-white bg-light-green py-1.5 lg:py-2 2xl:py-3 px-20 md:px-20 xl:px-32 rounded-full uppercase font-bold border border-light-green"
              >
                Get started
              </button>
            </a>
          </div>
        </div>
        <div class="block md:hidden absolute top-[230px] slide-right lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 class="text-5xl xl:text-6xl mb-4 font-bold text-light-white uppercase mt-8">
            Become an <br />
            <span className="text-light-green">SFT Trader!</span>
            <br class="hidden lg:inline-block" />
          </h1>
          <p
            class="mb-8 leading-relaxed w-full text-light-white border-l-4 border-light-green pl-4 xl:text-lg"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration="3000"
          >
            Join our challenge and enhance your skills to <br />
            manage real accounts upto{" "}
            <span className="text-light-green px-1">$500,000</span>as a <br />
            successful SFT trader.
          </p>
          <div className="flex justify-center">
            <a href="#challenge">
              <button
                type="submit"
                className="blink-me text-base text-light-white bg-light-green py-1.5 lg:py-2 2xl:py-3 px-20 md:px-20 xl:px-32 rounded-full uppercase font-bold border border-light-green"
              >
                Get started
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
