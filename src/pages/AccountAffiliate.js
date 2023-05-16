import React from "react";
import AffiliateCoins from "../components/common/AffiliateCoins";
import ButtonFilled from "../components/common/ButtonFilled";
import bronze from "../assets/images/affiliate-bronze.png";
import silver from "../assets/images/affiliate-silver.png";
import gold from "../assets/images/affiliate-gold.png";
import gorilla from "../assets/images/affiliate-account-gorilla.png";
import AffiliateRegistrationForm from "../components/AffiliateRegistrationForm";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const AccountAffiliate = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-medium-gray px-6 md:px-8 lg:px-16 layout-bg">
        <div className="h-full pb-[200px] lg:pb-[300px] xl:pb-[360px]">
          <div className="pt-10 w-[100%] lg:w-[60%] ">
            <h1 className="text-black text-2xl lg:text-4xl font-bold uppercase">
              Looking to promote <br /> unique and exciting trading <br />{" "}
              <span className="text-light-green">challenges?</span>
            </h1>
            <div className="w-[100%] lg:w-[45%]">
              <p className="text-black text-sm lg:text-base font-semibold">
                Join our affiliate program today and earn money by helping
                traders reach their goals!
              </p>
            </div>
            <div className="flex justify-start mt-6">
              <ButtonFilled
                textSize="text-xs lg:text-sm"
                buttonText="Join today"
                paddingY="py-2"
                paddingX="px-6 md:px-10 lg:px-14"
              />
            </div>
          </div>
          <div className="mt-14 text-black text-sm font-semibold ">
            <p>
              Our company offers trading challenges for all levels, ranging from
              $10,000 to $500,000. As an affiliate, you will have the
              opportunity to promote these challenges to your audience and earn
              money in return.
            </p>
            <p className="mt-4">
              For the $10,000, $25,000 and $50,000 challenges, you will receive
              50% of the value of the challenge sold.
            </p>
            <p>
              For the $100,000 and $200,000 challenges, you will receive 60% of
              the value of the challenge sold.
            </p>
            <p>
              And for the $500,000 challenge, you will receive 70% of the value
              of the challenge sold. This is a great opportunity for you to earn
              money while helping traders reach their financial goals.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-x-6 lg:gap-x-24 gap-y-8 py-16">
            <div>
              <AffiliateCoins
                src={bronze}
                title="bronze"
                description="50% Commission"
                titleColor="text-bronze"
              />
            </div>
            <div>
              <AffiliateCoins
                src={silver}
                title="silver"
                description="60% Commission"
                titleColor="text-silver"
              />
            </div>
            <div>
              <AffiliateCoins
                src={gold}
                title="gold"
                description="70% Commission"
                titleColor="text-gold"
              />
            </div>
          </div>
          <p className=" text-black text-sm font-semibold ">
            We will provide all the resources you need to promote our trading
            challenges, including unique affiliate links, images and product
            descriptions. We'll also manage the payments and commissions for
            you, so you can focus on promoting our challenges.
          </p>
          <div className="my-12 bg-black rounded-md flex flex-col md:flex-row justify-between gap-y-12">
            <div className="w-[100%] md:w-[60%] pl-2 pr-2 md:pr-0 md:pl-8 xl:pl-12 flex flex-col justify-center">
              <h1 className="text-light-green text-2xl xl:text-4xl font-semibold text-center md:text-start mt-8 md:mt-2 lg:mt-0">
                Join our affiliate program <br />
                <span className="font-bold px-1">now</span>
              </h1>
              <p className="text-white text-lg xl:text-xl font-semibold w-[100%] md:w-[90%] lg:w-[80%] xl:w-[60%] text-center md:text-start mb-0 md:mb-2 lg:mb-0">
                Start earning money by helping traders reach their financial
                goals !
              </p>
            </div>
            <div className="w-[100%] md:w-[45%] lg:w-[35%]">
              <img src={gorilla} alt="gorila" />
            </div>
          </div>
          <div className="mt-16">
            <AffiliateRegistrationForm />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AccountAffiliate;
