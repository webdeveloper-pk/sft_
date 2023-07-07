import React from "react";
import { Button } from "antd";
import WithdrawTable from "../components/WithdrawTable";
// import Footer from "../components/common/Footer";
// import Navbar from "../components/common/Navbar";

const Withdrawals = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-medium-gray px-3.5 md:px-4 lg:px-8 layout-bg">
        <div className="h-full pb-[200px] lg:pb-[300px] xl:pb-[360px]">
          <div className="pt-10">
            <h1 className="text-black text-2xl lg:text-3xl font-bold">
              Withdrawals
            </h1>
            <div className="text-black text-sm lg:text-base font-semibold mb-8">
              <p>
                This is where the configuration of all your future Profit Split
                requests starts and you can easily keep track of your existing
                and past withdrawals. Once you generated profits and traded for
                the relevant period, you may continue with your withdrawal
                request on this page.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl px-12 pt-5 pb-14 mb-7">
            <h1 className="text-2xl lg:text-3xl font-bold">
              Upcoming profit splits
            </h1>
            <p className="text-lg mt-1">No profit split available</p>
          </div>
          <div className="bg-white rounded-xl px-12 pt-5 pb-0">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h1 className="text-2xl lg:text-3xl font-bold">
                Withdrawl history
              </h1>
              <div className="font-semibold text-lighter-gray2">
                <Button.Group>
                  <button className="bg-light-green text-white text-xs border border-light-green hover:bg-light-green hover:text-white w-[80px] py-2 rounded-l-md">
                    All
                  </button>
                  <button className="text-xs border-t border-b border-light-green hover:bg-light-green hover:text-white w-[80px] py-2">
                    Received
                  </button>
                  <button className="text-xs border border-light-green hover:bg-light-green hover:text-white w-[80px] py-2 rounded-r-md">
                    Payement
                  </button>
                </Button.Group>
              </div>
            </div>
            <div className="mt-4 overflow-visible">
              <WithdrawTable />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Withdrawals;
