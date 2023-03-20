import React, { useState } from "react";
import { Tooltip } from "antd";
import usa from "../assets/images/usa.png";
import eur from "../assets/images/eur.png";
import gbp from "../assets/images/gbp.png";
import czech from "../assets/images/czech.png";
import cad from "../assets/images/cad.png";
import aud from "../assets/images/aud.png";
import chf from "../assets/images/chf.png";
import ChallengeTable from "./ChallengeTable";
import HomepageButton from "./common/HomepageButton";
import Currency from "./common/Currency";
import ChallengeButton from "./common/ChallengeButton";

const Challenge = () => {
  const [currency, setCurrency] = useState("10k");

  const onSubmithandler = (text) => {
    setCurrency(text);
  };
  return (
    <section class="px-6 md:px-8 py-12 bg-lightest-white-bg text-lighter-black homepage-container mx-auto">
      <div className="flex flex-col gap-y-2" id="challenge">
        <div
          className="uppercase font-bold text-2xl md:text-[26px]"
          data-aos="zoom-in-down"
          data-aos-once="true"
          data-aos-duration="3000"
        >
          choose your challenge a
          <span className="text-light-green mx-2">start challenge</span>
        </div>
        <div className="mt-1">
          <p
            className="font-bold"
            data-aos="zoom-in-left"
            data-aos-once="true"
            data-aos-duration="3000"
          >
            CURRENCY:
          </p>
          <div className="flex flex-row flex-wrap gap-2 mt-1">
            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <Currency
                flag={<img src={usa} alt="USA" width={22} height={22} />}
                currency="USD"
                bg="bg-light-green"
                border="border-light-green"
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <Currency
                flag={<img src={eur} alt="EUR" width={22} height={22} />}
                currency="EUR"
                bg="bg-lighter-gray"
                border="border-lighter-gray"
              />
            </div>

            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <Currency
                flag={<img src={gbp} alt="GBP" width={22} height={22} />}
                currency="GBP"
                bg="bg-lighter-gray"
                border="border-lighter-gray"
              />
            </div>

            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <Currency
                flag={<img src={czech} alt="EUR" width={22} height={22} />}
                currency="EUR"
                bg="bg-lighter-gray"
                border="border-lighter-gray"
              />
            </div>

            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <Currency
                flag={<img src={cad} alt="CAD" width={22} height={22} />}
                currency="CAD"
                bg="bg-lighter-gray"
                border="border-lighter-gray"
              />
            </div>

            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <Currency
                flag={<img src={aud} alt="AUD" width={22} height={22} />}
                currency="AUD"
                bg="bg-lighter-gray"
                border="border-lighter-gray"
              />
            </div>

            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <Currency
                flag={<img src={chf} alt="CHF" width={22} height={22} />}
                currency="CHF"
                bg="bg-lighter-gray"
                border="border-lighter-gray"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-16 mt-2">
          <div class="">
            <p
              className="font-bold"
              data-aos="zoom-in-right"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              RISK:
            </p>
            <div className="flex flex-row flex-wrap gap-x-2 gap-y-3 mt-1">
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="3000"
              >
                <ChallengeButton
                  text="Aggressive"
                  bgColor="bg-light-green"
                  borderColor="border-light-green"
                />
              </div>

              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="3000"
              >
                <ChallengeButton
                  text="Normal"
                  bgColor="bg-lighter-gray"
                  borderColor="border-lighter-gray"
                />
              </div>
            </div>
          </div>
          <div class="">
            <p
              className="font-bold"
              data-aos="zoom-in-left"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              BALANCE:
            </p>
            <div className="flex flex-row flex-wrap gap-x-2 gap-y-3 mt-1">
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="3000"
              >
                <div className="challenge-tooltip">
                  {/* <Tooltip title="1st challenge" color="#01c887"> */}
                  <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-lighter-gray border border-lighter-gray hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
                    <span onClick={() => onSubmithandler("10k")}>$10k</span>
                  </button>
                  {/* </Tooltip> */}
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="3000"
              >
                <div className="challenge-tooltip">
                  {/* <Tooltip title="1st challenge" color="#01c887"> */}
                  <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-lighter-gray border border-lighter-gray hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
                    <span onClick={() => onSubmithandler("25k")}>$25k</span>
                  </button>
                  {/* </Tooltip> */}
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="3000"
              >
                <div className="challenge-tooltip">
                  {/* <Tooltip title="1st challenge" color="#01c887"> */}
                  <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-lighter-gray border border-lighter-gray hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
                    <span onClick={() => onSubmithandler("50k")}>$50k</span>
                  </button>
                  {/* </Tooltip> */}
                </div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="3000"
              >
                <div className="challenge-tooltip">
                  <Tooltip title="1st challenge" color="#01c887">
                    <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-lighter-gray border border-lighter-gray hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
                      <span onClick={() => onSubmithandler("100k")}>$100k</span>
                    </button>
                  </Tooltip>
                </div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="3000"
              >
                <div className="challenge-tooltip">
                  <Tooltip title="2nd challenge" color="#01c887">
                    <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-lighter-gray border border-lighter-gray hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
                      <span onClick={() => onSubmithandler("200k")}>$200k</span>
                    </button>
                  </Tooltip>
                </div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="3000"
              >
                <div className="challenge-tooltip">
                  <Tooltip title="3rd challenge" color="#01c887">
                    <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-lighter-gray border border-lighter-gray hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
                      <span onClick={() => onSubmithandler("500k")}>$500k</span>
                    </button>
                  </Tooltip>
                </div>
              </div>

              <span className="lg:ml-2">
                <button
                  className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-light-pink border border-light-pink hover:bg-transparent hover:border-light-pink hover:text-light-pink active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 uppercase font-bold rounded-full text-sm"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-once="true"
                >
                  <span>first free challenge</span>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div>
          <ChallengeTable currency={currency} />
        </div>
        <div className="mt-2 flex flex-row justify-center">
          <HomepageButton buttonText="start challenge" goText="Start" />
        </div>
      </div>
    </section>
  );
};

export default Challenge;
