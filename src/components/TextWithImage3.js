import React from "react";
import textimage3 from "../assets/images/textimage3.png";

const TextWithImage3 = () => (
  <section class="pr-6 md:pr-8 bg-lightest-white-bg">
    <div class="mx-auto flex flex-col pt-12 pb-8 lg:flex-row items-center gap-y-8 gap-x-8">
      <div className="w-full lg:w-[50%] z-50">
        <img alt="video" src={textimage3} />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col text-left pl-6 md:pl-8 lg:pl-0 lg:mt-16 xl:mt-48">
        <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
          JOIN A UNIQUE AND INSPIRING
          <br />
          TRADING COMMUNITY!
        </h1>
        <div className="flex flex-row ml-2 items-start text-sm xl:text-sm w-full lg:w-[90%] xl:w-[75%]">
          <div className="border-l border-2 border-light-green h-[20px] mt-2" />
          <div className="ml-4 text-lighter-black block 2xl:hidden">
            <p className="mt-1">
              At SFT, we understand the struggles of being a trader, that's why
              we created a community of like-minded individuals who understand
              the industry and share the same goal of financial freedom.
            </p>
            <p className="mt-4">
              By participating in our challenges, not only will you have the
              opportunity to refine your trading skills, but also learn from
              experts, exchange market insights and connect with other traders.
            </p>
          </div>
          <div className="ml-4 text-lighter-black hidden 2xl:block">
            <p className="mt-1">
              At SFT, we understand the struggles of being a trader, that's why
              we created a <br />
              community of like-minded individuals who understand the industry
              and share the
              <br />
              same goal of financial freedom.
            </p>
            <p className="mt-4">
              By participating in our challenges, not only will you have the
              opportunity to refine <br />
              your trading skills, but also learn from experts, exchange market
              insights and
              <br />
              connect with other traders.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TextWithImage3;
