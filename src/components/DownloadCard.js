import React from "react";
import { Select } from "antd";
import ButtonFilled from "../components/common/ButtonFilled";
import window from "../assets/images/downloads-window-icon.png";
import dropdown from "../assets/images/order-dropdown-icon.png";

const DownloadCard = ({ metaIcon }) => {
  return (
    <div className="bg-white py-6 px-4 rounded-xl flex flex-col gap-y-8">
      <div className="flex justify-center">
        <img src={metaIcon} alt="meta-trader4" width="65%" height="auto" />
      </div>
      <div className="flex justify-center px-2">
        <Select
          placeholder={
            <span
              className="flex flex-row items-center gap-x-3 font-semibold"
              style={{ color: "#656565" }}
            >
              <img src={window} alt="arrow" width="16px" height="6px" />
              Microsoft Windows
            </span>
          }
          // defaultValue="sort by: Date"
          bordered={false}
          style={{
            border: "1px solid #656565",
            borderRadius: "6px",
            width: "100%",
            backgroundColor: "white",
          }}
          suffixIcon={
            <img src={dropdown} alt="arrow" width="10px" height="8px" />
          }
          options={[
            {
              value: "date",
              label: "Microsoft Windows",
            },
            {
              value: "completed",
              label: "MacOs",
            },
          ]}
        />
      </div>
      <div className="flex justify-center">
        <ButtonFilled
          buttonText="Download"
          textSize="text-lg"
          paddingY="py-1.5"
          paddingX="px-6 md:px-10 lg:px-14"
        />
      </div>
    </div>
  );
};

export default DownloadCard;
