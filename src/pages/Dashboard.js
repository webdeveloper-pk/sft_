import React from "react";
import { Row, Col, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DashboardCircularSlider from "../components/common/DashboardCircularSlider";
import DashboardTable from "../components/DashboardTable";
import sort from "../assets/images/order-sort-icon.png";
import DashboardChallenges from "../components/DashboardChallenges";
import DashboardChart from "../components/DashboardChart";
// import Footer from "../components/common/Footer";
// import Navbar from "../components/common/Navbar";

const Dashboard = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-medium-gray px-6 md:px-8 lg:px-16 layout-bg">
        <div className="h-full pb-[200px] lg:pb-[300px] xl:pb-[360px]">
          <div className="pt-10">
            <h1 className="text-black text-2xl lg:text-3xl font-bold">
              Welcome back <span className="text-light-green">Parveen</span>
            </h1>
            <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-12 mt-8">
              <div className="w-[100%]  lg:w-[65%] xl:w-[60%] ">
                <p className="mb-3 font-bold text-xl">Common balance chart</p>
                <div className="lg:min-h-[500px] bg-white rounded-md px-6 pt-6 pb-0">
                  <DashboardChart />
                </div>
              </div>
              <div className="w-[100%] lg:w-[35%] xl:w-[40%]">
                <div className="flex justify-between items-center mb-3 px-2">
                  <p className="font-bold text-xl">Challenges</p>
                  <p className="font-semibold text-sm text-light-green">All</p>
                </div>
                <div className="lg:min-h-[500px] flex flex-col justify-between gap-y-8">
                  <button className="min-h-[100px] lg:min-h-[200px] xl:min-h-[200px] rounded-md border-2 border-dashed border-light-green flex justify-center items-center text-light-green py-4">
                    <div className="flex flex-col font-bold">
                      <p className="text-5xl -mt-3">+</p>
                      <p className="text-lg mt-1 font-semibold">
                        Add new challenge
                      </p>
                    </div>
                  </button>
                  <div className="md:min-h-[200px] min-h-[300px] bg-white rounded-md px-8 md:px-5 xl:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-row lg:flex-col w-[100%] lg:w-[25%] xl:w-[20%] text-center justify-center gap-x-8 mb-4 lg:mb-0">
                      <div>
                        <p className="text-base lg:text-sm xl:text-base font-bold text-black mb-1">
                          Win rate
                        </p>
                        <div>
                          <DashboardCircularSlider
                            labelColor="#01c887"
                            progressColorFrom="#01c887"
                            progressColorTo="#01c887"
                            dataIndex={70}
                          />
                        </div>
                      </div>
                      <div className="lg:mt-2">
                        <p className="text-base lg:text-sm xl:text-base  font-bold text-black mb-1">
                          Loss rate
                        </p>
                        <div>
                          <DashboardCircularSlider
                            labelColor="#f12727"
                            progressColorFrom="#f12727"
                            progressColorTo="#f12727"
                            dataIndex={10}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-[100%] lg:w-[65%] gap-y-4">
                      <div className="bg-black rounded-md pb-4 pt-3 px-4 text-white font-bold flex flex-col items-center">
                        <p className="text-base lg:text-sm xl:text-base mb-2">
                          Net Profit Loss
                        </p>
                        <button className="bg-red-500 rounded-md py-1 px-8 xl:px-16 text-sm lg:text-xs xl:text-sm">
                          -11.39%
                        </button>
                      </div>
                      <div className="bg-black rounded-md pb-4 pt-3 px-4 text-white font-bold flex flex-col items-center">
                        <p className="text-base lg:text-sm xl:text-base  mb-2">
                          Profit Target
                        </p>
                        <button className="bg-light-green rounded-md py-1 px-8 xl:px-16 text-sm lg:text-xs xl:text-sm">
                          $10,000.00
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 bg-white rounded-md pt-4 pb-0">
              <h1 className="text-center  md:text-start text-black text-xl font-bold px-6 mb-0">
                Trade History
              </h1>
              <div className="flex flex-col md:flex-row justify-between items-center px-6 mt-4 mb-8 gap-y-6">
                <div className="font-semibold text-lighter-gray2">
                  <Button.Group>
                    <button className="bg-light-green text-white text-xs border border-light-green hover:bg-light-green hover:text-white w-[80px] py-2 rounded-l-md">
                      All Trades
                    </button>
                    <button className="text-xs border-t border-b border-light-green hover:bg-light-green hover:text-white w-[80px] py-2">
                      Buy Side
                    </button>
                    <button className="text-xs border border-light-green hover:bg-light-green hover:text-white w-[80px] py-2 rounded-r-md">
                      Sell Side
                    </button>
                  </Button.Group>
                </div>
                <div className="flex flex-col gap-y-4 md:flex-row justify-center items-center gap-x-2 w-[100%] md:w-[55%] lg:w-[45%] xl:w-[35%]">
                  <div className="w-[100%] md:w-[85%]">
                    <Row>
                      <Col span={24} md={{ span: 22 }}>
                        <Input
                          className="affiliate-registration"
                          placeholder="Search for Trades"
                          bordered={false}
                          prefix={
                            <div className="mt-0 ml-2">
                              <SearchOutlined />
                            </div>
                          }
                          style={{ padding: "6px" }}
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className="">
                    <button className="border border-lighter-gray2 rounded-md px-6 py-1.5 flex items-center justify-center gap-x-3">
                      <div>
                        <img
                          src={sort}
                          alt="filter"
                          className="w-[15px] md:w-[50px] lg:w-[45px] xl:w-[35px]"
                        />
                      </div>
                      <div className="text-lighter-gray2 font-semibold">
                        Filters
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <DashboardTable />
              </div>
            </div>
            <div className="mt-16">
              <DashboardChallenges />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
