import React from "react";
import ButtonFilled from "../components/common/ButtonFilled";
import filterIcon from "../assets/images/affiliate-filter-icon.png";
import AffiliatePortalCard from "../components/common/AffiliatePortalCard";
import referal from "../assets/images/referrals-icon.png";
import visit from "../assets/images/affiliate-visits-icon.png";
import rate from "../assets/images/affiliate-rate-icon.png";
import dollar from "../assets/images/affiliate-dollar-icon.png";
import gorilla from "../assets/images/faq-gorilla.png";
import copy from "../assets/images/affiliate-copy-icon.png";
import share from "../assets/images/affiliate-share.png";
import glow from "../assets/images/work-bg4.png";
import AffiliatePortalTable from "../components/AffiliatePortalTable";
// import Footer from "../components/common/Footer";
// import Navbar from "../components/common/Navbar";

const AccountAffiliatePortal = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-medium-gray px-3.5 md:px-4 lg:px-8 layout-bg">
        <div className="h-full pb-[200px] lg:pb-[300px] xl:pb-[360px]">
          <div className="py-10">
            <h1 className="text-black text-2xl lg:text-3xl font-bold">
              Affiliate <span className="text-light-green">Portal</span>
            </h1>
            <p className="text-black text-sm lg:text-base font-semibold -mt-2">
              Here you can withdraw your accepted Affiliate Commissions and find
              the history of your payouts. All Referrals are reviewed by the
              15th of the following month.
            </p>
            <div className="flex flex-row justify-start mt-5">
              <ButtonFilled
                buttonText="request payout"
                textSize="text-sm lg:text-base"
                paddingY="py-2"
                paddingX="px-6 md:px-10"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between border-b border-lighter-gray pb-4">
            <div className="text-black text-lg md:text-xl font-bold">
              Last 30 days
            </div>
            <div className="flex items-center gap-x-4">
              <div className="font-medium text-base text-black">Filter</div>
              <div>
                <img
                  src={filterIcon}
                  alt="filter-icon"
                  className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-4 md:gap-y-6 lg:gap-y-8 pt-8 pb-12">
            <div>
              <AffiliatePortalCard
                bgColor="bg-referral-green1"
                src={referal}
                title="Referrals"
                total="0"
              />
            </div>
            <div>
              <AffiliatePortalCard
                bgColor="bg-referral-green2"
                src={visit}
                title="Visits"
                total="0"
              />
            </div>
            <div>
              <AffiliatePortalCard
                bgColor="bg-referral-green3"
                src={rate}
                title="Conversion Rate"
                total="0.00%"
              />
            </div>
            <div>
              <AffiliatePortalCard
                bgColor="bg-referral-green4"
                src={dollar}
                title="Unpaid Earnings"
                total="$0.00"
              />
            </div>
            <div>
              <AffiliatePortalCard
                bgColor="bg-referral-green5"
                src={dollar}
                title="Paid Earnings"
                total="$0.00"
              />
            </div>
          </div>
          <div className="bg-black rounded-md ">
            <div className="bg-black flex flex-col lg:flex-row justify-between gap-y-4 rounded-md px-6 lg:px-12 xl:px-16 relative">
              <div className="absolute left-[30%] -top-[40%] ">
                <img src={glow} alt="glow" width="500px" height="400px" />
              </div>
              <div className="w-full lg:w-[90%] lg:w-[50%] xl:w-[65%] 2xl:w-[50%] py-12 lg:py-8 xl:py-12">
                <h1 className="text-xl md:text-2xl lg:text-3xl text-light-green font-bold">
                  Referral URL
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-white font-medium -mt-2">
                  Share your referral URL with your audience to earn commission.
                </p>
                <div className="w-[100%] mt-8 flex flex-col md:flex-row gap-y-6 gap-x-8 items-center">
                  <div className="w-[100%] lg:w-[70%] xl:w-[100%]">
                    <input
                      type="text"
                      name="faq"
                      className="w-[100%] py-3 text-base text-white bg-transparent rounded-md px-4 border border-light-green focus:outline-none focus:bg-transparent focus:text-light-green affiliate-input"
                      placeholder=" https://dashboard.thefundedtraderprogram.com/purchasechallenge-n/?sl=4051"
                      disabled
                    />
                  </div>
                  <div className="flex gap-x-3">
                    <div className="bg-light-green py-2 px-2 md:py-2 md:px-3 lg:py-3 lg:px-3 xl:py-3 xl:px-4 rounded-full">
                      <img
                        src={copy}
                        alt="copy-icon"
                        className="w-[24px] h-[22px] xl:w-[28px] xl:h-[24px]"
                      />
                    </div>
                    <div className="bg-light-green py-2 px-2 md:py-2 md:px-3 lg:py-3 lg:px-3 xl:py-3 xl:px-4 rounded-full">
                      <img
                        src={share}
                        alt="copy-icon"
                        className="w-[24px] h-[22px] xl:w-[28px] xl:h-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[60%] md:w-[30%] lg:w-[35%] xl:w-[21%] 2xl:w-[15%] mx-auto xl:mx-0 bg-black lg:mt-10">
                <img src={gorilla} alt="gorila" />
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h1 className="text-2xl text-black font-bold">Clients Referred</h1>
            <div className="mt-3">
              <AffiliatePortalTable />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AccountAffiliatePortal;
