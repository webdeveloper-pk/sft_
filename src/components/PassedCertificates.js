import React from "react";
import { Steps } from "antd";
import DownloadCertificateCard from "./common/DownloadCertificateCard";

const StepItem = Steps;

const PassedCertificates = () => {
  return (
    <div className="bg-white rounded-xl px-8 pt-8 pb-16 mt-4">
      <div className="md:-ml-7 mb-8 xl:w-[85%]">
        <Steps current="" labelPlacement="vertical" responsive>
          <StepItem
            title={
              <span className="text-black text-lg font-bold md:ml-10">
                Professional
              </span>
            }
            description={
              <span className="text-light-green text-sm font-bold md:ml-4">
                $5,000+
              </span>
            }
          />
          <StepItem
            title={
              <span className="text-black text-lg font-bold md:ml-3">
                Expert
              </span>
            }
            description={
              <span className="text-light-green text-sm font-bold md:ml-6">
                $10,000+
              </span>
            }
          />
          <StepItem
            title={
              <span className="text-black text-lg font-bold md:ml-5">
                Master
              </span>
            }
            description={
              <span className="text-light-green text-sm font-bold md:ml-8">
                $20,000+
              </span>
            }
          />
          <StepItem
            title={
              <span className="text-black text-lg font-bold md:ml-2">
                Elite
              </span>
            }
            description={
              <span className="text-light-green text-sm font-bold md:ml-8">
                $50,000+
              </span>
            }
          />
        </Steps>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div>
          <DownloadCertificateCard bgColor="#01c887" textColor="#ffffff" />
        </div>
        <div>
          <DownloadCertificateCard />
        </div>
        <div>
          <DownloadCertificateCard />
        </div>
        <div>
          <DownloadCertificateCard />
        </div>
      </div>
    </div>
  );
};

export default PassedCertificates;
