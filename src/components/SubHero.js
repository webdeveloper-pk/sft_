import React from "react";
import chat from "../assets/images/chat.png";

const SubHero = () => {
  return (
    <section className="body-font py-12 lg:py-16 md:mt-52">
      <div className="-mt-4 md:mt-0 w-full md:w-auto relative">
        <div className="flex flex-row justify-end md:justify-center sticky-custom mr-6 cursor-pointer">
          <img
            src={chat}
            alt="chat"
            className="w-[50px] lg:w-[60px]"
            height="auto"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-y-8 homepage-container mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          <h1
            className="hidden md:block text-5xl lg:text-6xl xl:text-7xl mb-4 font-medium text-light-black uppercase"
            data-aos="zoom-in-down"
            data-aos-once="true"
          >
            FIRST <br />
            CHALLENGE <br />
            IS
            <span className="text-light-green font-bold px-4">FREE!</span>
          </h1>
          <div
            className="text-light-black text-2xl mt-4 mb-4 mx-auto md:mx-0 md:text-lg lg:text-[24px]"
            data-aos="flip-right"
            data-aos-once="true"
            data-aos-duration="3000"
          >
            <div className="mt-[500px] md:mt-[0px] relative">
              <h1
                className="block md:hidden text-4xl lg:text-6xl xl:text-7xl mb-4 font-medium text-light-black uppercase"
                data-aos="zoom-in-down"
                data-aos-once="true"
              >
                FIRST <br />
                CHALLENGE <br />
                IS
                <span className="text-light-green font-bold px-4">FREE!</span>
              </h1>
            </div>
            <p className="text-lg lg:text-[24px]">
              Join your
              <span className="text-light-green font-bold px-1">FREE</span>
              challenge.
              <span className="text-light-green font-bold px-1">WIN</span> your
              challenge. Manage
              <span className="text-light-green font-bold px-1">100k!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
