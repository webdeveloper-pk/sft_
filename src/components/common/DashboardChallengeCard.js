import React from "react";
import ButtonFilled from "./ButtonFilled";
import account from "../../assets/images/dashboard-account.png";
import achieve from "../../assets/images/dashboard-achieve.png";
import demonstrate from "../../assets/images/dashboard-demonstrate.png";
import objectives from "../../assets/images/dashboard-respect.png";

const DashboardChallengeCard = () => {
  return (
    <div className="bg-white rounded-md py-8 px-6 xl:px-10">
      <h1 className="text-black text-2xl lg:text-3xl font-bold">Challenge</h1>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-8">
        <div className="w-[100%] lg:w-[35%] xl:w-[40%]">
          <p className="text-lg md:text-xl font-bold -mt-2 mb-4">
            Get your funded account up to $500,000
          </p>
          <p className="text-sm font-semibold">
            Demonstrate your skills with achieving our Profit Target. Pass the
            Evaluation course and start trading on your funded account!
          </p>
        </div>
        <div className="w-[100%] lg:w-[60%] xl:w-[55%] flex flex-col md:flex-row justify-center lg:justify-end gap-x-8 xl:gap-x-16 gap-y-6">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <div>
                <img
                  src={account}
                  alt="accounts"
                  className="w-[40px] h-[100%]"
                />
              </div>
              <p className="text-sm font-semibold ml-3">
                Accounts up to $500,000
              </p>
            </div>
            <div className="flex flex-row items-center mt-5">
              <div>
                <img
                  src={achieve}
                  alt="achieve"
                  className="w-[40px] h-[100%]"
                />
              </div>
              <p className="text-sm font-semibold ml-3">
                Achieve our Profit Targets
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <div>
                <img
                  src={demonstrate}
                  alt="demonstrate"
                  className="w-[40px] h-[100%]"
                />
              </div>
              <p className="text-sm font-semibold ml-3">
                Demonstrate your trading skills
              </p>
            </div>
            <div className="flex flex-row items-center mt-5">
              <div>
                <img
                  src={objectives}
                  alt="objectives"
                  className="w-[40px] h-[100%]"
                />
              </div>
              <p className="text-sm font-semibold ml-3">
                Respect our Trading Objectives
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start mt-6 xl:mt-4">
        <ButtonFilled
          textSize="text-xs lg:text-sm"
          buttonText="START CHALLENGE"
          paddingY="py-3"
          paddingX="px-6 md:px-8 lg:px-10"
        />
      </div>
    </div>
  );
};

export default DashboardChallengeCard;
