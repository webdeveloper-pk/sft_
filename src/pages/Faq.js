import React from "react";
import { Collapse } from "antd";
import ButtonOutlined from "../components/common/ButttonOutlined";
import ContactNavbar from "../components/common/ContactNavbar";
import Footer from "../components/common/Footer";
import gorilla from "../assets/images/faq-gorilla.png";
import plus from "../assets/images/faq-plus-icon.png";
import minus from "../assets/images/faq-minus-icon.png";
import logo from "../assets/images/faq-question-logo.png";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <div className="bg-medium-gray">
      <ContactNavbar />
      <div className="layout-bg pb-[200px] lg:pb-[300px] xl:pb-[360px] side-pages-container mx-auto px-6 md:px-6">
        <div className="bg-black ">
          <div className="bg-black flex flex-col md:flex-row justify-between gap-y-4 px-6 md:px-8 lg:px-16">
            <div className="w-full md:w-[70%] xl:w-[55%] py-12 pl-0 md:pl-12 xl:pl-28">
              <h1 className="text-2xl md:text-3xl text-white font-bold uppercase">
                Advice and answers from the Funded Trader{" "}
                <span className="text-light-green">Support Team</span>
              </h1>
              <div className="w-[100%] md:w-[70%] mt-8 md:mt-4">
                <form>
                  <div className="relative flex items-center">
                    <span className="absolute left-0 flex items-center pl-2">
                      <button type="submit" className="text-white ml-2">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </button>
                    </span>
                    <input
                      type="search"
                      name="faq"
                      className="w-[100%] py-3 text-[10px] text-white bg-transparent rounded-md pl-10 border border-white focus:outline-none focus:bg-transparent focus:text-white uppercase faq-input"
                      placeholder="Search for articles"
                      autocomplete="off"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="w-[60%] md:w-[40%] lg:w-[25%] xl:w-[17%] 2xl:w-[15%] mx-auto xl:mx-0 xl:mr-28">
              <img src={gorilla} alt="gorila" />
            </div>
          </div>
        </div>
        <div className="px-6 md:px-16 lg:px-24 xl:px-40 py-12">
          <Collapse
            ghost
            defaultActiveKey={["1"]}
            expandIconPosition="end"
            expandIcon={({ isActive }) =>
              isActive ? (
                <div className="flex justify-end">
                  <img src={minus} alt="minus" width="24px" height="24px" />
                </div>
              ) : (
                <div className="flex justify-end">
                  <img src={plus} alt="plus" width="24px" height="24px" />
                </div>
              )
            }
          >
            <Panel header="NEW ON SFT" key="1" className="panel-header">
              <div className="flex flex-row items-start w-[100%] md:w-[90%] xl:w-[80%]">
                <div className="mr-4 md:mr-8 w-[30px]">
                  <img src={logo} alt="logo" />
                </div>
                <div className="border-b border-lighter-gray pb-6 w-[95%]">
                  <h1 className="font-bold uppercase text-md lg:text-[18px]">
                    How do I get started ?
                  </h1>
                  <p className="text-xs md:text-sm lowercase font-semibold">
                    Welcome to SFT. To begin, go to the "create an account"
                    section. Fill in your personal information, then choose your
                    challenge and let us guide you.{" "}
                  </p>
                  <p className="text-sm lowercase font-semibold text-light-gray mt-3">
                    Written by the SFT
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start w-[100%] md:w-[90%] xl:w-[80%] mt-4 md:mt-6">
                <div className="mr-4 md:mr-8 w-[30px]">
                  <img src={logo} alt="logo" />
                </div>
                <div className="border-b border-lighter-gray pb-6  w-[95%]">
                  <h1 className="font-bold uppercase text-md lg:text-[18px]">
                    What is SFT?
                  </h1>
                  <p className="text-xs md:text-sm lowercase font-semibold">
                    SFT has developed a new way of trading. As a trader, SFT
                    gives you the opportunity to prove yourself and train
                    through Trading Challenges. If you successfully complete one
                    of the challenges, you will gain access to SFT's funds,
                    manage them, and receive 90% of the profits made.
                  </p>
                  <p className="text-sm lowercase font-semibold text-light-gray mt-3">
                    Written by the SFT
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start w-[100%] md:w-[90%] xl:w-[80%] mt-4 md:mt-6">
                <div className="mr-4 md:mr-8 w-[30px]">
                  <img src={logo} alt="logo" />
                </div>
                <div className="border-b border-lighter-gray pb-6  w-[95%]">
                  <h1 className="font-bold uppercase text-md lg:text-[18px]">
                    Where are you located? How to contact you ?
                  </h1>
                  <p className="text-xs md:text-sm lowercase font-semibold">
                    We are located in Dubai. We can be contacted at :
                    <span className="text-light-green pl-1">
                      contact@successfundtrader.com
                    </span>
                    . You can also reach us on social networks [insert link
                    instagram, etc.]. A chatbot will be set up soon
                  </p>
                  <p className="text-sm lowercase font-semibold text-light-gray mt-3">
                    Written by the SFT
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start w-[100%] md:w-[90%] xl:w-[80%] mt-4 md:mt-6">
                <div className="mr-4 md:mr-8 w-[30px]">
                  <img src={logo} alt="logo" />
                </div>
                <div className="pb-6  w-[95%]">
                  <h1 className="font-bold uppercase text-md lg:text-[18px]">
                    Who can become an SFT trader?
                  </h1>
                  <p className="text-xs md:text-sm lowercase font-semibold">
                    Anyone 18 years of age or older can participate in our
                    challenges and become an SFT trader. Only people from Iran,
                    Syria, North Korea, people with criminal records or people
                    on a sanction list are not allowed to join SFT.
                  </p>
                  <p className="text-sm lowercase font-semibold text-light-gray mt-3">
                    Written by the SFT
                  </p>
                </div>
              </div>
            </Panel>
            <div className="border-b border-lightest-gray mx-4"></div>
            <Panel
              header="BECOME AN SFT TRADER"
              key="2"
              className="panel-header"
            >
              <div className="flex flex-row items-start w-[100%] md:w-[90%] xl:w-[80%]">
                <div className="mr-4 md:mr-8 w-[30px]">
                  <img src={logo} alt="logo" />
                </div>
                <div className="pb-6 w-[95%]">
                  <h1 className="font-bold uppercase text-md lg:text-[18px]">
                    How do I get started ?
                  </h1>
                  <p className="text-xs md:text-sm lowercase font-semibold">
                    Welcome to SFT. To begin, go to the "create an account"
                    section. Fill in your personal information, then choose your
                    challenge and let us guide you.{" "}
                  </p>
                  <p className="text-sm lowercase font-semibold text-light-gray mt-3">
                    Written by the SFT
                  </p>
                </div>
              </div>
            </Panel>
            <div className="border-b border-lightest-gray mx-4"></div>
            <Panel
              header="THE CHALLENGES AND THE SELECTION PROCESS"
              key="3"
              className="panel-header"
            >
              <div className="flex flex-row items-start w-[100%] md:w-[90%] xl:w-[80%]">
                <div className="mr-4 md:mr-8 w-[30px]">
                  <img src={logo} alt="logo" />
                </div>
                <div className="pb-6 w-[95%]">
                  <h1 className="font-bold uppercase text-md lg:text-[18px]">
                    How do I get started ?
                  </h1>
                  <p className="text-xs md:text-sm lowercase font-semibold">
                    Welcome to SFT. To begin, go to the "create an account"
                    section. Fill in your personal information, then choose your
                    challenge and let us guide you.{" "}
                  </p>
                  <p className="text-sm lowercase font-semibold text-light-gray mt-3">
                    Written by the SFT
                  </p>
                </div>
              </div>
            </Panel>
            <div className="border-b border-lightest-gray mx-4"></div>
            <Panel header="SFT AND ME" key="4" className="panel-header">
              <div className="flex flex-row items-start w-[100%] md:w-[90%] xl:w-[80%]">
                <div className="mr-4 md:mr-8 w-[30px]">
                  <img src={logo} alt="logo" />
                </div>
                <div className="pb-6 w-[95%]">
                  <h1 className="font-bold uppercase text-md lg:text-[18px]">
                    How do I get started ?
                  </h1>
                  <p className="text-xs md:text-sm lowercase font-semibold">
                    Welcome to SFT. To begin, go to the "create an account"
                    section. Fill in your personal information, then choose your
                    challenge and let us guide you.{" "}
                  </p>
                  <p className="text-sm lowercase font-semibold text-light-gray mt-3">
                    Written by the SFT
                  </p>
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
        <div className="flex justify-center">
          <ButtonOutlined
            buttonText="load more"
            textSize="text-sm"
            paddingY="py-3 xl:py-4"
            paddingX="px-6 md:px-10 lg:px-12"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
