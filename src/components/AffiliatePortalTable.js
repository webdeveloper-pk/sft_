import React from "react";
import emoji from "../assets/images/order-face-icon.png";

const AffiliatePortalTable = () => {
  return (
    <div className="overflow-auto bg-white">
      <table className="w-full table-fixed">
        <thead className="">
          <tr className="bg-light-green text-white font-semibold text-sm">
            <th className="py-4 xl:px-0 w-[100px]">Client Name</th>
            <th className="py-4  xl:px-0 w-[100px]">Order ID</th>
            <th className="py-4 xl:px-0 w-[100px]">Purchase Date</th>
            <th className="py-4 xl:px-0 w-[100px]">Product Purchased</th>
            <th className="py-4 xl:px-0 w-[100px]">Purchase Price</th>
            <th className="py-4 xl:px-0 w-[100px]">Affiliate Commission</th>
            <th className="py-4  xl:px-0 w-[100px]">Affiliate Commission</th>
            <th className="py-4  xl:px-0 w-[100px]">Discount Code</th>
          </tr>
        </thead>
      </table>
      <div className="flex justify-center items-center h-[280px] py-6 bg-white rounded-md mb-8">
        <div className="affiliate-table-bg">
          <div className="flex flex-col items-center mt-16">
            <div>
              <img src={emoji} alt="emoji" width={60} height={60} />
            </div>
            <p className="text-light-gray font-semibold text-sm mt-4">
              No data available in table
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliatePortalTable;
