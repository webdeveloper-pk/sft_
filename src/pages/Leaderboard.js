import React from "react";
import LeadersStats from "../components/LeadersStats";
import LeaderboardButton from "../components/common/LeaderboardButton";
import LeaderboardTable from "../components/LeaderboardTable";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const Leaderboard = () => {
  return (
    <>
      <Navbar />
      <div className="bg-medium-gray px-6 md:px-8 lg:px-16 layout-bg">
        <div className="h-full pb-[200px] lg:pb-[300px] xl:pb-[360px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 pt-10">
            <h1 className="text-light-green text-2xl lg:text-3xl font-bold uppercase mt-3">
              LEADERBOARD
            </h1>
            <div className="flex flex-wrap gap-4">
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
          <div className="mt-16">
            <LeaderboardTable />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Leaderboard;
