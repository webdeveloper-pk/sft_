import React, { useState } from "react";
import { Tooltip } from "antd";
import usa from "../../../../assets/images/usa.png";
import eur from "../../../../assets/images/eur.png";
import gbp from "../../../../assets/images/gbp.png";
// import czech from "../assets/images/czech.png";
import cad from "../../../../assets/images/cad.png";
import aud from "../../../../assets/images/aud.png";
import chf from "../../../../assets/images/chf.png";
import ChallengeTable from "../../../../components/ChallengeTable";
import { Link } from "react-router-dom";

const Challenge = ({
  currency,
  mode,
  country,
  onSubmithandler,
  onModeHandler,
  onCurrencyHandler,
}) => {
  return (
    <section className="px-6 md:px-8 py-12 bg-lightest-white-bg text-lighter-black homepage-container mx-auto">
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
              <button
                className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2 px-3 rounded-full text-sm ${
                  country === "usd" ? "bg-bg-green3" : "bg-bg-green2"
                }`}
                onClick={() => onCurrencyHandler("usd")}
              >
                <img src={usa} alt="USA" width={22} height={22} />
                <span>USD</span>
              </button>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <button
                className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2 px-3 rounded-full text-sm ${
                  country === "eur" ? "bg-bg-green3" : "bg-bg-green2"
                }`}
                onClick={() => onCurrencyHandler("eur")}
              >
                <img src={eur} alt="EUR" width={22} height={22} />
                <span>EUR</span>
              </button>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <button
                className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2 px-3 rounded-full text-sm ${
                  country === "gbp" ? "bg-bg-green3" : "bg-bg-green2"
                }`}
                onClick={() => onCurrencyHandler("gbp")}
              >
                <img src={gbp} alt="GBP" width={22} height={22} />
                <span>GBP</span>
              </button>
            </div>
            {/* <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <button className="flex justify-center items-center gap-x-1.5 text-lighter-black bg-bg-green2 border border-bg-green1 hover:bg-light-green hover:border-light-green active:bg-light-green focus:bg-light-green py-2 px-3 rounded-full text-sm">
                <img src={czech} alt="EUR" width={22} height={22} />
                <span onClick={() => onCurrencyHandler("EUR")}>EUR</span>
              </button>
            </div> */}
            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <button
                className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2 px-3 rounded-full text-sm ${
                  country === "cad" ? "bg-bg-green3" : "bg-bg-green2"
                }`}
                onClick={() => onCurrencyHandler("cad")}
              >
                <img src={cad} alt="CAD" width={22} height={22} />
                <span>CAD</span>
              </button>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <button
                className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2 px-3 rounded-full text-sm ${
                  country === "aud" ? "bg-bg-green3" : "bg-bg-green2"
                }`}
                onClick={() => onCurrencyHandler("aud")}
              >
                <img src={aud} alt="AUD" width={22} height={22} />
                <span>AUD</span>
              </button>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <button
                className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2 px-3 rounded-full text-sm ${
                  country === "chf" ? "bg-bg-green3" : "bg-bg-green2"
                }`}
                onClick={() => onCurrencyHandler("chf")}
              >
                <img src={chf} alt="CHF" width={22} height={22} />
                <span>CHF</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-16 mt-2">
          <div>
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
                <button
                  className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm 
                  ${mode === "aggressive" ? "bg-bg-green3" : "bg-bg-green2"}`}
                  onClick={() => onModeHandler("aggressive")}
                >
                  <span>Aggressive</span>
                </button>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-duration="3000"
              >
                <button
                  className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm 
                   ${mode === "normal" ? "bg-bg-green3" : "bg-bg-green2"}`}
                  onClick={() => onModeHandler("normal")}
                >
                  <span>Normal</span>
                </button>
              </div>
            </div>
          </div>
          <div className="">
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
                  <button
                    className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm
                    ${currency === "10k" ? "bg-bg-green3" : "bg-bg-green2"}`}
                    onClick={() => onSubmithandler("10k")}
                  >
                    <span>$10k</span>
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
                  <button
                    className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm
                   ${currency === "25k" ? "bg-bg-green3" : "bg-bg-green2"}`}
                    onClick={() => onSubmithandler("25k")}
                  >
                    <span>$25k</span>
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
                  <button
                    className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm
                       ${currency === "50k" ? "bg-bg-green3" : "bg-bg-green2"}`}
                    onClick={() => onSubmithandler("50k")}
                  >
                    <span>$50k</span>
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
                    <button
                      className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm
                         ${
                           currency === "100k" ? "bg-bg-green3" : "bg-bg-green2"
                         }`}
                      onClick={() => onSubmithandler("100k")}
                    >
                      <span>$100k</span>
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
                    <button
                      className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm
                         ${
                           currency === "200k" ? "bg-bg-green3" : "bg-bg-green2"
                         }`}
                      onClick={() => onSubmithandler("200k")}
                    >
                      <span>$200k</span>
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
                    <button
                      className={`flex justify-center items-center gap-x-1.5 text-lighter-black border border-bg-green1 hover:bg-light-green hover:border-light-green py-2.5 2xl:py-3 px-3 rounded-full text-sm
                        ${
                          currency === "500k" ? "bg-bg-green3" : "bg-bg-green2"
                        }`}
                      onClick={() => onSubmithandler("500k")}
                    >
                      <span>$500k</span>
                    </button>
                  </Tooltip>
                </div>
              </div>

              <span className="lg:ml-2">
                <button
                  className="flex justify-center items-center gap-x-1.5 text-lighter-black bg-bg-green2 border border-bg-green2 hover:bg-bg-green3 hover:border-bg-green3 active:bg-light-green focus:bg-light-green py-2.5 2xl:py-3 px-3 uppercase font-bold rounded-full text-sm"
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
          <Link
            type="submit"
            to="/checkout"
            className="blink-me text-base text-light-white bg-light-green py-1.5 lg:py-2 2xl:py-3 px-8 rounded-full uppercase font-bold border border-light-green hover:text-white"
          >
            start challenge
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
