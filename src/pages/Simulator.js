import React, { useState } from "react";
import { InputNumber, Slider } from "antd";
import download from "../assets/images/simulator-download.png";
import SimulatorResult from "../components/common/SimulatorResult";
import ButtonFilled from "../components/common/ButtonFilled";
import SimulatorCounter from "../components/common/SimulatorCounter";
import SimulatorChart from "../components/SimulatorChart";
// import Footer from "../components/common/Footer";
// import Navbar from "../components/common/Navbar";

const Simulator = () => {
  const [probability, setProbablity] = useState(50);
  const [trade, setTrade] = useState(100);

  const onChangeProbability = (value) => {
    setProbablity(value);
  };

  const onChangeTrade = (value) => {
    setTrade(value);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-medium-gray px-3.5 md:px-4 lg:px-8 layout-bg">
        <div className="h-full pb-[200px] lg:pb-[300px] xl:pb-[360px]">
          <div className="pt-10">
            <h1 className="text-black text-2xl lg:text-3xl font-bold">
              Equity Curve <span className="text-light-green">Simulator</span>
            </h1>
            <div className="flex flex-row justify-end mt-8 mb-3">
              <div className="w-[100%] lg:w-[35%] xl:w-[40%] flex justify-between items-center md:px-6">
                <p className="font-bold text-xl">Results</p>
                <div>
                  <img src={download} alt="download" width={24} height="auto" />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-4 xl:gap-6">
              <div className="w-[100%] lg:w-[65%] xl:w-[60%] min-h-[600px] flex flex-col gap-y-8 lg:gap-y-4 xl:gap-y-6 justify-between">
                <div className="w-[100%] md:min-h-[350px] lg:min-h-[400px]  bg-white rounded-md md:px-4 xl:px-8 py-6">
                  <SimulatorChart />
                </div>
                <div className="min-h-[200px] bg-white rounded-md px-4 md:px-10 lg:px-6 xl:px-6 py-6">
                  <div className="flex flex-col md:flex-row flex-wrap justify-between mb-5 gap-y-4">
                    <div className="w-[100%] md:w-[45%] xl:w-[22%]">
                      <SimulatorCounter title="Starting equity, $" />
                    </div>
                    <div className="w-[100%] md:w-[45%] xl:w-[22%]">
                      <SimulatorCounter title="Risk per trade, %" />
                    </div>
                    <div className="w-[100%] md:w-[45%] xl:w-[22%]">
                      <SimulatorCounter title="WinL Loss ratio, : 1" />
                    </div>
                    <div className="w-[100%] md:w-[45%] xl:w-[22%]">
                      <SimulatorCounter title="Scenarios (lines)" />
                    </div>
                  </div>
                  <div className=" flex flex-col md:flex-row justify-between items-center flex-wrap gap-y-6">
                    <div className="w-[100%] lg:w-[48%] xl:w-[30%]">
                      <div className="flex flex-row justify-between items-center mb-4">
                        <p className="font-bold text-base text-lighter-gray2">
                          Win probability, %
                        </p>
                        <div>
                          <InputNumber
                            min={1}
                            max={100}
                            value={probability}
                            onChange={onChangeProbability}
                            className="slider-input"
                          />
                        </div>
                      </div>
                      <Slider
                        min={1}
                        max={100}
                        onChange={onChangeProbability}
                        value={
                          typeof probability === "number" ? probability : 0
                        }
                      />
                    </div>
                    <div className="w-[100%] lg:w-[48%] xl:w-[30%]">
                      <div className="flex flex-row justify-between items-center mb-4">
                        <p className="font-bold text-base text-lighter-gray2">
                          Trades per run, %
                        </p>
                        <div>
                          <InputNumber
                            min={1}
                            max={100}
                            value={trade}
                            onChange={onChangeTrade}
                            className="slider-input"
                          />
                        </div>
                      </div>
                      <Slider
                        min={1}
                        max={100}
                        onChange={onChangeTrade}
                        value={typeof trade === "number" ? trade : 0}
                      />
                    </div>
                    <div className="w-[100%] xl:w-[30%]">
                      <div className="flex justify-center">
                        <ButtonFilled
                          textSize="text-xs lg:text-sm"
                          buttonText="RUN SIMULATION"
                          paddingY="py-3 xl:py-4"
                          paddingX="px-6 md:px-10 lg:px-8 xl:px-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[100%] lg:w-[35%] xl:w-[40%] min-h-[400px] bg-white rounded-md px-4 md:px-6 lg:px-4 xl:px-6 py-4 md:py-6 flex flex-col justify-center gap-y-6 md:gap-y-12 lg:gap-y-10 xl:gap-y-6">
                <div>
                  <SimulatorResult text="Avg. Performance" result="67.48%" />
                </div>
                <div>
                  <SimulatorResult
                    text="Avg. Performance ($)"
                    result="$67.48"
                  />
                </div>
                <div>
                  <SimulatorResult text="Max. Drawdown" result="9.62%" />
                </div>
                <div>
                  <SimulatorResult text="Max. Drawdown ($)" result="$11.26" />
                </div>
                <div>
                  <SimulatorResult text="Avg. Max. Drawdown" result="6.24%" />
                </div>
                <div>
                  <SimulatorResult
                    text="Return Over Max Drawdown"
                    result="0.0373%"
                  />
                </div>
                <div>
                  <SimulatorResult text="Max. Equty" result="$189.06" />
                </div>
                <div>
                  <SimulatorResult text="Min Equty" result="$96.06" />
                </div>
                <div>
                  <SimulatorResult text="Max. Consecutive Wins" result="11" />
                </div>
                <div>
                  <SimulatorResult text="Max. Consecutive Loses" result="10" />
                </div>
                <div>
                  <SimulatorResult text="Expectation" result="0.5" />
                </div>
                <div>
                  <SimulatorResult text="Kelly Criterion" result="0.25" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Simulator;
