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

const Challenge = () => {
  const [currency, setCurrency] = useState("10k");
  const [mode, setMode] = useState("10k");
  const [country, setCountry] = useState("10k");

  const onSubmithandler = (text) => {
    setCurrency(text);
  };

  const onModeHandler = (text) => {
    setMode(text);
  };

  const onCurrencyHandler = (text) => {
    setCountry(text);
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
              <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2 px-3 rounded-full text-sm">
                <img src={usa} alt="USA" width={22} height={22} />
                <span onClick={() => onCurrencyHandler("USD")}>USD</span>
              </button>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2 px-3 rounded-full text-sm">
                <img src={eur} alt="EUR" width={22} height={22} />
                <span onClick={() => onCurrencyHandler("EUR")}>EUR</span>
              </button>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2 px-3 rounded-full text-sm">
                <img src={gbp} alt="GBP" width={22} height={22} />
                <span onClick={() => onCurrencyHandler("GBP")}>GBP</span>
              </button>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2 px-3 rounded-full text-sm">
                <img src={czech} alt="EUR" width={22} height={22} />
                <span onClick={() => onCurrencyHandler("EUR")}>EUR</span>
              </button>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2 px-3 rounded-full text-sm">
                <img src={cad} alt="CAD" width={22} height={22} />
                <span onClick={() => onCurrencyHandler("CAD")}>CAD</span>
              </button>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2 px-3 rounded-full text-sm">
                <img src={aud} alt="AUD" width={22} height={22} />
                <span onClick={() => onCurrencyHandler("AUD")}>AUD</span>
              </button>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2 px-3 rounded-full text-sm">
                <img src={chf} alt="CHF" width={22} height={22} />
                <span onClick={() => onCurrencyHandler("CHF")}>CHF</span>
              </button>
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
                <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
                  <span onClick={() => onModeHandler("aggressive")}>
                    Aggressive
                  </span>
                </button>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="3000"
              >
                <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
                  <span onClick={() => onModeHandler("normal")}>Normal</span>
                </button>
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
                  <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
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
                  <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
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
                  <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
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
                    <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
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
                    <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
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
                    <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-bg-green1 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm">
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
          <ChallengeTable currency={currency} mode={mode} country={country} />
        </div>
        <div className="mt-6 lg:mt-2 flex flex-row justify-center">
          <button
            type="submit"
            className="blink-me text-base text-light-white bg-light-green py-1.5 lg:py-2 2xl:py-3 px-8 rounded-full uppercase font-bold border border-light-green"
          >
            start challenge
          </button>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
