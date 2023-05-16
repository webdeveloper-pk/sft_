import React from "react";
import { Select } from "antd";
import dropdown from "../assets/images/order-dropdown-icon.png";
import arrowDown from "../assets/images/order-arrow-down.png";
import sort from "../assets/images/order-sort-icon.png";
import sadface from "../assets/images/order-face-icon.png";
// import Navbar from "../components/common/Navbar";
// import Footer from "../components/common/Footer";

const Orders = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-medium-gray px-6 md:px-8 lg:px-16 layout-bg">
        <div className="min-h-screen">
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 pt-10">
            <h1 className="text-black text-2xl lg:text-3xl font-bold">
              Order <span className="text-light-green">List</span>
            </h1>
            <div className="flex flex-row gap-x-3">
              <button
                className="bg-white rounded-lg px-4 py-2"
                style={{ border: "1px solid  #656565" }}
              >
                <img
                  src={arrowDown}
                  alt="arrow-down"
                  width="10px"
                  height="18px"
                />
              </button>
              <div className="">
                <Select
                  placeholder={
                    <span
                      className="flex flex-row items-center gap-x-3 font-semibold"
                      style={{ color: "#656565" }}
                    >
                      <img src={sort} alt="arrow" width="16px" height="6px" />
                      sort by: Date
                    </span>
                  }
                  // defaultValue="sort by: Date"
                  bordered={false}
                  style={{
                    border: "1px solid #656565",
                    borderRadius: "6px",
                    width: "200px",
                    backgroundColor: "white",
                  }}
                  suffixIcon={
                    <img src={dropdown} alt="arrow" width="10px" height="8px" />
                  }
                  options={[
                    {
                      value: "date",
                      label: "sort by: Date",
                    },
                    {
                      value: "completed",
                      label: "sort by: Completed",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center min-h-[500px]">
            <img src={sadface} alt="sad-face" width="55px" height="55px" />
            <p className="text-light-black font-semibold text-lg mt-1">
              No orders
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Orders;
