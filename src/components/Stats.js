import React from "react";
import Stat from "./common/Stat";

const Stats = () => {
  return (
    <section className="px-6 md:px-8 pb-4 pt-0 lg:pb-6 lg:pt-6 bg-lightest-white-bg homepage-container mx-auto">
      <div className="w-full mx-auto flex justify-center xl:justify-between gap-y-6 md:gap-x-8 lg:gap-x-4 xl:gap-x-0 flex-wrap">
        <div
          className="w-[80%] md:w-[40%] lg:w-[23%] xl:w-[20%]"
          data-aos="zoom-in-right"
          data-aos-once="true"
          data-aos-duration="2500"
        >
          <Stat stats="$24M+" description={`Paid out to SFT Traders`} />
        </div>
        <div
          className="w-[80%] md:w-[40%] lg:w-[23%] xl:w-[20%]"
          data-aos="zoom-in-down"
          data-aos-once="true"
          data-aos-duration="2500"
        >
          <Stat
            stats="150+"
            description={[
              "No. of countries with",
              <br />,
              "traders registered at SFT",
            ]}
          />
        </div>
        <div
          className="w-[80%] md:w-[40%] lg:w-[23%] xl:w-[20%]"
          data-aos="zoom-in-up"
          data-aos-once="true"
          data-aos-duration="2500"
        >
          <Stat
            stats="4M+"
            description={["No. of trades", <br />, "opened every month"]}
          />
        </div>
        <div
          className="w-[80%] md:w-[40%] lg:w-[23%] xl:w-[20%]"
          data-aos="zoom-in-left"
          data-aos-once="true"
          data-aos-duration="2500"
        >
          <Stat
            stats="6H"
            description={["Average payout", <br />, "processing time "]}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
