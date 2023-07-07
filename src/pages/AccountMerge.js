import React from "react";
import ButtonFilled from "../components/common/ButtonFilled";
// import Footer from "../components/common/Footer";
// import Navbar from "../components/common/Navbar";

const AccountMerge = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-medium-gray px-3.5 md:px-4 lg:px-8 layout-bg">
        <div className="h-full pb-[200px] lg:pb-[300px] xl:pb-[360px]">
          <div className="pt-10">
            <h1 className="text-black text-2xl lg:text-3xl font-bold">Merge</h1>
            <p className="text-black text-sm lg:text-base font-semibold">
              SFT offers flexibility with its master account merger. Two or more
              active trade-free funded accounts (nominated in the same currency)
              are accepted to integrate into one account.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-start gap-y-8 md:gap-x-8 gap-x-12 mt-7 text-lighter-black pb-12 md:pb-0">
            <div className="w-full lg:w-[48%] lg:w-[45%] xl:w-[32%] bg-white rounded-xl px-8 py-7 text-center min-h-[220px]">
              <h1 className="text-xl font-bold ">
                Avaiable challenge for switch
              </h1>
              <p className="text-sm font-bold mt-10">
                No Challenge available for switch
              </p>
            </div>
            <div className="w-full lg:w-[48%] lg:w-[45%] xl:w-[32%] bg-white rounded-xl px-8 pt-7 pb-6 text-center">
              <h1 className="text-xl font-bold ">
                Trading objectives after switch
              </h1>
              <div className="flex flex-row justify-between my-6">
                <div className="">
                  <p className="text-xs lg:text-sm font-bold ">Balance</p>
                  <p className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold">
                    $ 0.00
                  </p>
                </div>
                <div className="px-2 md:px-0 border-r border-lighter-gray"></div>
                <div>
                  <p className="text-xs lg:text-sm font-bold ">
                    Max Daily Loss
                  </p>
                  <p className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold">
                    $ 0.00
                  </p>
                </div>
                <div className="border-r border-lighter-gray"></div>
                <div>
                  <p className="text-xs lg:text-sm font-bold">
                    Max Overall Loss
                  </p>
                  <p className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold">
                    $ 0.00
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <ButtonFilled
                  buttonText="confirm"
                  textSize="text-base"
                  paddingY="py-2"
                  paddingX="px-6 md:px-10 lg:px-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AccountMerge;
