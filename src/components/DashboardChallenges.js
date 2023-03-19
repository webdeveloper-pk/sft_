import React from "react";
import { Tabs } from "antd";
import ButtonFilled from "./common/ButtonFilled";
import ButtonOutlined from "./common/ButttonOutlined";
import DashboardChallengeCard from "./common/DashboardChallengeCard";

const DashboardChallenges = () => {
  return (
    <>
      <Tabs
        tabBarExtraContent={
          <div className="flex flex-row gap-x-2 md:gap-x-3 items-center">
            <ButtonFilled
              textSize="text-xs lg:text-sm"
              buttonText="Visible"
              paddingY="py-2 md:py-3"
              paddingX="px-4 md:px-8 lg:px-12"
            />
            <ButtonOutlined
              buttonText="hidden"
              textSize="text-xs lg:text-sm"
              paddingY="py-2 md:py-3"
              paddingX="px-4 md:px-8 lg:px-12"
            />
          </div>
        }
        className="tabs-challenge"
        responsive
      >
        <Tabs.TabPane tab="All Challenges" key="1">
          <DashboardChallengeCard />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Phase 1" key="2">
          <DashboardChallengeCard />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Phase 2" key="3">
          <DashboardChallengeCard />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Funded" key="4">
          <DashboardChallengeCard />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default DashboardChallenges;
