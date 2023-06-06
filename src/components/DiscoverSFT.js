import React, { useState, useEffect, useRef } from "react";
import { Modal } from "antd";
import discoverBg1 from "../assets/images/discover-bg1.png";
import intro from "../assets/images/intro2.png";
import playButton from "../assets/images/play.png";

const DiscoverSFT = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const videoRef = useRef(null);

  const url = `https://storage.googleapis.com/success-fund-bucket/discover-video1.mp4`;

  const showModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 3500);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setIsLoading(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isModalOpen) {
      // Modal is closed, so stop the video
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isModalOpen]);

  const extraContent = (
    <div>
      <p className="mt-4 font-semibold extra-content">
        Your journey to get there might be challenging, but our
        <span className="text-light-green">
          {" "}
          educational applications, account analysis
        </span>{" "}
        and <span className="text-light-green">performance coach</span> are here
        to help you on the endeavour to{" "}
        <span className="text-light-green">financial independence.</span>
      </p>
      <p className="mt-4 font-semibold">
        Upon successful completion of the Evaluation Course, you are offered a
        placement in the{" "}
        <span className="text-light-green">SFT Proprietary Trading firm </span>
        where you can remotely manage the SFT Account with a balance of up to{" "}
        <span className="text-light-green">$400,000</span>
      </p>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";

  return (
    <section
      className="pt-4 lg:pt-12 px-6 md:px-8 bg-lightest-white-bg homepage-container mx-auto"
      id="objectives"
    >
      <div className="mx-auto flex flex-col lg:flex-row items-start gap-y-8 gap-x-6">
        <div className="block md:hidden w-full lg:w-1/2 flex flex-col text-left">
          <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
            Trade for <span className="text-light-green">Proprietary</span>
            <br />
            <span className="text-light-green">Trading Firm</span>
          </h1>
          <div className="flex flex-row ml-2 items-start text-sm lg:text-xs xl:text-sm w-full lg:w-[90%] xl:w-[85%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4">
              <p className="mt-1 font-semibold">
                <span className="text-light-green font-bold">SFT</span>{" "}
                developed a unique{" "}
                <span className="text-light-green font-bold">
                  2-step Evaluation Course
                </span>{" "}
                for traders. This Evaluation Process consists of the{" "}
                <span className="text-light-green">SFT Challenge</span> and the{" "}
                <span className="text-light-green">Verification</span> and is
                specifically tailored to discover trading talents.
              </p>
              {readMore && extraContent}
              <p
                className="read-more-link"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                <button className="mt-3 text-xs md:text-base text-light-white bg-light-green py-1.5 px-5 rounded-sm font-bold border border-light-green">
                  {linkName}
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full lg:w-1/2 flex flex-col text-left">
          <h1 className="text-2xl md:text-[28px] mb-4 font-bold uppercase">
            Trade for <span className="text-light-green">Proprietary</span>
            <br />
            <span className="text-light-green">Trading Firm</span>
          </h1>
          <div className="flex flex-row ml-2 items-start text-sm lg:text-xs xl:text-sm w-full lg:w-[90%] xl:w-[85%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4">
              <p className="mt-1 font-semibold">
                <span className="text-light-green font-bold">SFT</span>{" "}
                developed a unique{" "}
                <span className="text-light-green font-bold">
                  2-step Evaluation Course
                </span>{" "}
                for traders. This Evaluation Process consists of the{" "}
                <span className="text-light-green">SFT Challenge</span> and the{" "}
                <span className="text-light-green">Verification</span> and is
                specifically tailored to discover trading talents.
              </p>
              <p className="mt-4 font-semibold extra-content">
                Your journey to get there might be challenging, but our
                <span className="text-light-green">
                  {" "}
                  educational applications, account analysis
                </span>{" "}
                and <span className="text-light-green">
                  performance coach
                </span>{" "}
                are here to help you on the endeavour to{" "}
                <span className="text-light-green">
                  financial independence.
                </span>
              </p>
              <p className="mt-4 font-semibold">
                Upon successful completion of the Evaluation Course, you are
                offered a placement in the{" "}
                <span className="text-light-green">
                  SFT Proprietary Trading firm{" "}
                </span>
                where you can remotely manage the SFT Account with a balance of
                up to <span className="text-light-green">$400,000</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 z-50 relative">
          <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            title="sft"
            centered
            width={"100vw"}
          >
            <video controls ref={videoRef}>
              <source
                src={`${url}#t=0.1`}
                type="video/mp4"
                className="mb-6"
                width="100vw"
                height="100vh"
              />
            </video>
          </Modal>
          <div className="flex justify-center relative">
            <div
              // className="absolute"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                cursor: "pointer",
              }}
              onClick={showModal}
            >
              {isLoading ? (
                <div className="text-[18px] md:text-[28px] xl:text-[32px] text-light-green font-bold">
                  Loading Video ...
                </div>
              ) : (
                <img
                  src={playButton}
                  alt="play"
                  className="w-[16px] md:w-[20px] lg:w-[25px] h-auto -mt-4 md:-mt-2 lg:mt-0"
                />
              )}
            </div>
            <img
              src={intro}
              alt="intro"
              onClick={showModal}
              className="hover:cursor-pointer w-[100%] md:w-[70%] lg:w-[100%]"
            />
          </div>
          <div className="absolute mt-1.5 z-50 md:left-[15%] lg:left-[0%]">
            <img
              src={discoverBg1}
              alt="reflection"
              className="w-[100%] md:w-[85%] lg:w-[100%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSFT;
