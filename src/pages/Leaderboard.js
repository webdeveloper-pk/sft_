import React from "react";
import LeadersStats from "../components/LeadersStats";
import LeaderboardButton from "../components/common/LeaderboardButton";
import LeaderboardTable from "../components/LeaderboardTable";
// import Footer from "../components/common/Footer";
// import Navbar from "../components/common/Navbar";

const Leaderboard = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-medium-gray px-3.5 md:px-4 lg:px-8 layout-bg">
        <div className="h-full pb-[200px] lg:pb-[300px] xl:pb-[360px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 pt-10">
            <h1 className="text-light-green text-2xl lg:text-3xl font-bold uppercase mt-3">
              LEADERBOARD
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:pl-12 xl:pl-0">
              <div>
                <LeaderboardButton
                  text="All"
                  bgColor="bg-light-green"
                  borderColor="border-light-green"
                />
              </div>
              <div>
                <LeaderboardButton
                  text="$ 100k"
                  bgColor="bg-lighter-gray"
                  borderColor="border-lighter-gray"
                />
              </div>
              <div>
                <LeaderboardButton
                  text="$ 200k"
                  bgColor="bg-lighter-gray"
                  borderColor="border-lighter-gray"
                />
              </div>
              <div>
                <LeaderboardButton
                  text="$ 300k"
                  bgColor="bg-lighter-gray"
                  borderColor="border-lighter-gray"
                />
              </div>
              <div>
                <LeaderboardButton
                  text="$ 400k"
                  bgColor="bg-lighter-gray"
                  borderColor="border-lighter-gray"
                />
              </div>
              <div>
                <LeaderboardButton
                  text="$ 500k"
                  bgColor="bg-lighter-gray"
                  borderColor="border-lighter-gray"
                />
              </div>
            </div>
          </div>
          <div className="mt-28 mb-6">
            <LeadersStats />
          </div>
          <div className="mt-8 xl:mt-12">
            <LeaderboardTable />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Leaderboard;
