import React from "react";
import { Tabs } from "antd";
import PersonInformation from "./PersonInformation";
import CopmanyInformation from "./CompanyInformation";

const Information = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full bg-white rounded-xl px-8 pt-3 pb-6 mt-2">
      <div>
        <Tabs defaultActiveKey="1" className="inner-tabs-info">
          <Tabs.TabPane tab="Person" key="1">
            <PersonInformation />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Company" key="2">
            <CopmanyInformation />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Information;
