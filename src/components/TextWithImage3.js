import React, { useState } from "react";
import textimage3 from "../assets/images/textimage3.png";

const TextWithImage3 = () => {
  const [readMore, setReadMore] = useState(false);

  const extraContent = (
    <div>
      <p className="mt-4 font-semibold">
        By participating in our{" "}
        <span className="text-light-green font-bold">challenges</span>, not only
        will you have the opportunity to refine <br />
        your trading skills, but also learn from{" "}
        <span className="text-light-green font-bold">experts</span>,{" "}
        <span className="text-light-green font-bold">
          exchange market insights
        </span>{" "}
        and
        <br />
        connect with other{" "}
        <span className="text-light-green font-bold">traders.</span>
      </p>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";

  return (
    <section class="pr-6 md:pr-8 -mt-[50px] md:-mt-[200px] lg:-mt-[100px] xl:-mt-[180px]">
      <div class="mx-auto flex flex-col pt-12 pb-8 lg:flex-row items-center gap-y-8 gap-x-8">
        <div className="w-full lg:w-[50%] z-50">
          <img
            alt="gorilla"
            src={textimage3}
            className="w-[100%] md:w-[70%] lg:w-[100%]"
          />
        </div>
        <div className="block md:hidden w-full lg:w-[50%] flex flex-col text-left pl-6 md:pl-8 lg:pl-0 lg:mt-16 xl:mt-48">
          <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
            JOIN A UNIQUE AND INSPIRING
            <br />
            TRADING COMMUNITY!
          </h1>
          <div className="flex flex-row ml-2 items-start text-sm xl:text-sm w-full lg:w-[90%] xl:w-[75%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black block 2xl:hidden">
              <p className="mt-1 font-semibold">
                At <span className="text-light-green font-bold">SFT</span>, we
                understand the struggles of being a{" "}
                <span className="text-light-green font-bold">trader</span>,
                that's why we created a <br />
                <span className="text-light-green font-bold">community</span> of
                like-minded individuals who understand the industry and share
                the
                <br />
                same goal of{" "}
                <span className="text-light-green font-bold">
                  financial freedom.
                </span>
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
            <div className="ml-4 text-lighter-black hidden 2xl:block">
              <p className="mt-1 font-semibold">
                At <span className="text-light-green font-bold">SFT</span>, we
                understand the struggles of being a{" "}
                <span className="text-light-green font-bold">trader</span>,
                that's why we created a <br />
                <span className="text-light-green font-bold">community</span> of
                like-minded individuals who understand the industry and share
                the
                <br />
                same goal of{" "}
                <span className="text-light-green font-bold">
                  financial freedom.
                </span>
              </p>
              <p className="mt-4 font-semibold">
                By participating in our{" "}
                <span className="text-light-green font-bold">challenges</span>,
                not only will you have the opportunity to refine <br />
                your trading skills, but also learn from{" "}
                <span className="text-light-green font-bold">
                  experts
                </span>,{" "}
                <span className="text-light-green font-bold">
                  exchange market insights
                </span>{" "}
                and
                <br />
                connect with other{" "}
                <span className="text-light-green font-bold">traders.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full lg:w-[50%] flex flex-col text-left pl-6 md:pl-8 lg:pl-0 lg:mt-16 xl:mt-48">
          <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
            JOIN A UNIQUE AND INSPIRING
            <br />
            TRADING COMMUNITY!
          </h1>
          <div className="flex flex-row ml-2 items-start text-sm xl:text-sm w-full lg:w-[90%] xl:w-[75%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black block 2xl:hidden">
              <p className="mt-1 font-semibold">
                At <span className="text-light-green font-bold">SFT</span>, we
                understand the struggles of being a{" "}
                <span className="text-light-green font-bold">trader</span>,
                that's why we created a <br />
                <span className="text-light-green font-bold">community</span> of
                like-minded individuals who understand the industry and share
                the
                <br />
                same goal of{" "}
                <span className="text-light-green font-bold">
                  financial freedom.
                </span>
              </p>
              <p className="mt-4 font-semibold">
                By participating in our{" "}
                <span className="text-light-green font-bold">challenges</span>,
                not only will you have the opportunity to refine <br />
                your trading skills, but also learn from{" "}
                <span className="text-light-green font-bold">
                  experts
                </span>,{" "}
                <span className="text-light-green font-bold">
                  exchange market insights
                </span>{" "}
                and
                <br />
                connect with other{" "}
                <span className="text-light-green font-bold">traders.</span>
              </p>
            </div>
            <div className="ml-4 text-lighter-black hidden 2xl:block">
              <p className="mt-1 font-semibold">
                At <span className="text-light-green font-bold">SFT</span>, we
                understand the struggles of being a{" "}
                <span className="text-light-green font-bold">trader</span>,
                that's why we created a <br />
                <span className="text-light-green font-bold">community</span> of
                like-minded individuals who understand the industry and share
                the
                <br />
                same goal of{" "}
                <span className="text-light-green font-bold">
                  financial freedom.
                </span>
              </p>
              <p className="mt-4 font-semibold">
                By participating in our{" "}
                <span className="text-light-green font-bold">challenges</span>,
                not only will you have the opportunity to refine <br />
                your trading skills, but also learn from{" "}
                <span className="text-light-green font-bold">
                  experts
                </span>,{" "}
                <span className="text-light-green font-bold">
                  exchange market insights
                </span>{" "}
                and
                <br />
                connect with other{" "}
                <span className="text-light-green font-bold">traders.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImage3;
