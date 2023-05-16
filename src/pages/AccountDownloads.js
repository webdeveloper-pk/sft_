import React from "react";
import DownloadCard from "../components/DownloadCard";
// import Footer from "../components/common/Footer";
// import Navbar from "../components/common/Navbar";
import meta4 from "../assets/images/downloads-meta-trader4.png";
import meta5 from "../assets/images/downloads-meta-trader5.png";
import metaC from "../assets/images/downloads-c-trader.png";

const Downloads = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-medium-gray px-6 md:px-8 lg:px-16 layout-bg">
        <div className="h-full pb-[200px] lg:pb-[300px] xl:pb-[360px]">
          <div className="pt-10">
            <h1 className="text-black text-2xl lg:text-3xl font-bold">
              Downloads
            </h1>
            <div className="flex flex-col md:flex-row justify-between text-black text-sm lg:text-base font-semibold mb-10">
              <div className="w-full md:w-[48%] xl:w-[45%]">
                <p>
                  Firexfunded knows that our traders require quick access to
                  their trading accounts across the globe, and at any time of
                  the day. So, we offer the most efficient and powerful range of
                  trading platforms on PC, laptops, tablets or mobiles. Choose
                  your preferred platform and instantly download it to your
                  device.
                </p>
                <p className="mt-6">
                  We offer our clients to trade on the award-winning MetaTrader
                  4 platform, which is the world’s most popular trading platform
                  for forex traders due to its ease of use and feature-rich
                  environment. In addition, it allows users to trade in Forex,
                  Future, Indices, Equities, Crypto and other CFD transactions.
                </p>
                <p className="mt-6">
                  The new generation MetaTrader 5 platform is designed with
                  advanced charting technology added instruments like Stocks. It
                  is a powerful platform packed with brand-new features aimed at
                  improving your trading experience.
                </p>
              </div>
              <div className="w-full md:w-[48%] xl:w-[45%]">
                <p>
                  Our MetaTrader Platforms support multiple account base
                  currencies including USD, EUR and GBP. It is also available in
                  over 30+ different languages.
                </p>
                <p className="mt-6">
                  Our MetaTrader Platforms support multiple account base
                  currencies including USD, EUR and GBP. It is also available in
                  over 30+ different languages.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-x-6 lg:gap-x-0 lg:justify-between gap-y-6 ">
              <div className="w-full md:w-[45%] lg:w-[32%]">
                <DownloadCard metaIcon={meta4} />
              </div>
              <div className="w-full md:w-[45%] lg:w-[32%]">
                <DownloadCard metaIcon={meta5} />
              </div>
              <div className="w-full md:w-[45%] lg:w-[32%]">
                <DownloadCard metaIcon={metaC} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Downloads;
