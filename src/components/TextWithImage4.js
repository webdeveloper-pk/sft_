import React, { useState } from "react";
import textimage4 from "../assets/images/textimage4.png";

const TextWithImage4 = () => {
  const [readMore, setReadMore] = useState(false);

  const extraContent = (
    <div>
      <p className="mt-4 font-semibold">
        Inside, you will find advice from{" "}
        <span className="text-light-green font-bold">
          world-renowned traders
        </span>
        , in-depth masterclasses on the behavior of major currencies, and more.
        You will learn unique{" "}
        <span className="text-light-green font-bold">strategies</span> that have
        generated
        <span className="text-light-green font-bold">
          {" "}
          hundreds of millions of dollars
        </span>{" "}
        in profits over the past{" "}
        <span className="text-light-green font-bold">20 years.</span>
      </p>
      <p className="mt-4 font-semibold">
        The <span className="text-light-green font-bold">world</span> is
        changing rapidly, and we understand that the trader who will succeed
        tomorrow is the one who knows how to adapt. The
        <span className="text-light-green font-bold"> SFT Academy</span> will
        provide{" "}
        <span className="text-light-green font-bold">real-time strategies</span>{" "}
        that will keep our traders informed of the tactics to prioritize.
      </p>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";

  return (
    <section class="px-6 md:px-8 bg-lightest-white-bg homepage-container mx-auto">
      <div class="pt-12 pb-12 mx-auto flex flex-col-reverse lg:flex-row items-center gap-y-8 gap-x-6">
        <div className="block md:hidden w-full lg:w-1/2 flex flex-col text-left mt-4 lg:mt-0">
          <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
            EARLY ACCESS TO SFT ACADEMY
          </h1>
          <div className="flex flex-row ml-2 items-start text-sm xl:text-sm w-full w-full xl:w-[85%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black">
              <p className="mt-1 font-semibold">
                The{" "}
                <span className="text-light-green font-bold">SFT Academy</span>{" "}
                will soon be open, and{" "}
                <span className="text-light-green font-bold">participants</span>{" "}
                in SFT Challenges will have early access to our{" "}
                <span className="text-light-green font-bold">
                  training platform.
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
          </div>
        </div>
        <div className="hidden md:block w-full lg:w-1/2 flex flex-col text-left mt-4 lg:mt-0">
          <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
            EARLY ACCESS TO SFT ACADEMY
          </h1>
          <div className="flex flex-row ml-2 items-start text-sm xl:text-sm w-full w-full xl:w-[85%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black">
              <p className="mt-1 font-semibold">
                The{" "}
                <span className="text-light-green font-bold">SFT Academy</span>{" "}
                will soon be open, and{" "}
                <span className="text-light-green font-bold">participants</span>{" "}
                in SFT Challenges will have early access to our{" "}
                <span className="text-light-green font-bold">
                  training platform.
                </span>
              </p>
              <p className="mt-4 font-semibold">
                Inside, you will find advice from{" "}
                <span className="text-light-green font-bold">
                  world-renowned traders
                </span>
                , in-depth masterclasses on the behavior of major currencies,
                and more. You will learn unique{" "}
                <span className="text-light-green font-bold">strategies</span>{" "}
                that have generated
                <span className="text-light-green font-bold">
                  {" "}
                  hundreds of millions of dollars
                </span>{" "}
                in profits over the past{" "}
                <span className="text-light-green font-bold">20 years.</span>
              </p>
              <p className="mt-4 font-semibold">
                The <span className="text-light-green font-bold">world</span> is
                changing rapidly, and we understand that the trader who will
                succeed tomorrow is the one who knows how to adapt. The
                <span className="text-light-green font-bold">
                  {" "}
                  SFT Academy
                </span>{" "}
                will provide{" "}
                <span className="text-light-green font-bold">
                  real-time strategies
                </span>{" "}
                that will keep our traders informed of the tactics to
                prioritize.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end xl:justify-center -mt-2">
          <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto lg:mx-0">
            <img width="100%" height="auto" alt="sft" src={textimage4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImage4;
