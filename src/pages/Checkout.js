import React, { useState } from "react";
import { Input, Select, Row, Col } from "antd";
import { CaretDownFilled } from "@ant-design/icons";
import ContactNavbar from "../components/common/ContactNavbar";
import FooterHomepage from "../components/common/FooterHomepage";
import countries from "../services/data/country.json";
import usa from "../assets/images/usa.png";
import eur from "../assets/images/eur.png";
import gbp from "../assets/images/gbp.png";
import cad from "../assets/images/cad.png";
import aud from "../assets/images/aud.png";
import chf from "../assets/images/chf.png";
import visa from "../assets/images/visa.png";
import master from "../assets/images/mastercard.png";
import amex from "../assets/images/amex.png";
import discover from "../assets/images/Discover.png";
import bitcoin from "../assets/images/bitcoin.png";
import etherium from "../assets/images/ethereum.png";
import tether from "../assets/images/tether.png";
import chat from "../assets/images/chat.png";

const Checkout = () => {
  const [platform, setPlatform] = useState("mt5");
  const [mode, setMode] = useState("normal");
  const [country, setCountry] = useState("usd");
  const [currency, setCurrency] = useState("10k");
  const [checkboxValues, setCheckboxValues] = useState({
    terms: false,
    policy: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const onPlatformHandler = (text) => {
    setPlatform(text);
  };

  const onModeHandler = (text) => {
    setMode(text);
  };

  const onCurrencyHandler = (text) => {
    setCountry(text);
  };

  const onSubmithandler = (text) => {
    setCurrency(text);
  };

  return (
    <div className="bg-medium-gray">
      <div className="flex flex-row justify-end md:justify-center sticky-custom mr-6 cursor-pointer">
        <img
          src={chat}
          alt="chat"
          className="w-[50px] lg:w-[60px]"
          height="auto"
        />
      </div>
      <ContactNavbar />
      <div className="pb-[100px]">
        <div className="mt-10 side-pages-container mx-auto px-6 md:px-6">
          <h1 className="text-light-green text-[26px] md:text-[30px] lg:text-[56px] font-bold">
            PURCHASE
            <br />
            <div className="-mt-[10px] lg:-mt-[30px] uppercase">CHALLENGE</div>
          </h1>
          <div className="flex flex-col lg:flex-row justify-center gap-x-12 gap-y-12">
            <div className="w-full flex flex-col gap-y-12 lg:w-[60%] xl:w-[60%]">
              <div className="checkout-bg">
                <div className="">
                  <p className="font-bold">CURRENCY:</p>
                  <div className="flex flex-row flex-wrap gap-2 mt-1 w-[100%] md:w-[70%]">
                    <div>
                      <button
                        className={`flex justify-center items-center gap-x-1.5 text-white border hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                          country === "usd"
                            ? "bg-bg-green3 border-bg-green3"
                            : "bg-lighter-gray border-lighter-gray"
                        }`}
                        onClick={() => onCurrencyHandler("usd")}
                      >
                        <img src={usa} alt="USA" width={22} height={22} />
                        <span>USD</span>
                      </button>
                    </div>
                    <div>
                      <button
                        className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                          country === "eur"
                            ? "bg-bg-green3 border-bg-green3"
                            : "bg-lighter-gray border-lighter-gray"
                        }`}
                        onClick={() => onCurrencyHandler("eur")}
                      >
                        <img src={eur} alt="EUR" width={22} height={22} />
                        <span>EUR</span>
                      </button>
                    </div>
                    <div>
                      <button
                        className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                          country === "gbp"
                            ? "bg-bg-green3 border-bg-green3"
                            : "bg-lighter-gray border-lighter-gray"
                        }`}
                        onClick={() => onCurrencyHandler("gbp")}
                      >
                        <img src={gbp} alt="GBP" width={22} height={22} />
                        <span>GBP</span>
                      </button>
                    </div>
                    <div>
                      <button
                        className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                          country === "cad"
                            ? "bg-bg-green3 border-bg-green3"
                            : "bg-lighter-gray border-lighter-gray"
                        }`}
                        onClick={() => onCurrencyHandler("cad")}
                      >
                        <img src={cad} alt="CAD" width={22} height={22} />
                        <span>CAD</span>
                      </button>
                    </div>
                    <div>
                      <button
                        className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                          country === "aud"
                            ? "bg-bg-green3 border-bg-green3"
                            : "bg-lighter-gray border-lighter-gray"
                        }`}
                        onClick={() => onCurrencyHandler("aud")}
                      >
                        <img src={aud} alt="AUD" width={22} height={22} />
                        <span>AUD</span>
                      </button>
                    </div>
                    <div>
                      <button
                        className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                          country === "chf"
                            ? "bg-bg-green3 border-bg-green3"
                            : "bg-lighter-gray border-lighter-gray"
                        }`}
                        onClick={() => onCurrencyHandler("chf")}
                      >
                        <img src={chf} alt="CHF" width={22} height={22} />
                        <span>CHF</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="font-bold">RISK:</p>
                  <div className="flex flex-row flex-wrap gap-x-2 gap-y-3 mt-1">
                    <div>
                      <button
                        className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm 
                  ${
                    mode === "aggressive"
                      ? "bg-bg-green3 border-bg-green3"
                      : "bg-lighter-gray border-lighter-gray"
                  }`}
                        onClick={() => onModeHandler("aggressive")}
                      >
                        <span>Aggressive</span>
                      </button>
                    </div>
                    <div>
                      <button
                        className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm 
                   ${
                     mode === "normal"
                       ? "bg-bg-green3 border-bg-green3"
                       : "bg-lighter-gray border-lighter-gray"
                   }`}
                        onClick={() => onModeHandler("normal")}
                      >
                        <span>Normal</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="font-bold">BALANCE:</p>
                  <div className="flex flex-row flex-wrap md:flex-nowrap gap-x-2 gap-y-2 mt-1">
                    <div>
                      <div className="challenge-tooltip">
                        <button
                          className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                            currency === "10k"
                              ? "bg-bg-green3 border-bg-green3"
                              : "bg-lighter-gray border-lighter-gray"
                          }`}
                          onClick={() => onSubmithandler("10k")}
                        >
                          <span>$10k</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="challenge-tooltip">
                        <button
                          className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                            currency === "25k"
                              ? "bg-bg-green3 border-bg-green3"
                              : "bg-lighter-gray border-lighter-gray"
                          }`}
                          onClick={() => onSubmithandler("25k")}
                        >
                          <span>$25k</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="challenge-tooltip">
                        <button
                          className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                            currency === "50k"
                              ? "bg-bg-green3 border-bg-green3"
                              : "bg-lighter-gray border-lighter-gray"
                          }`}
                          onClick={() => onSubmithandler("50k")}
                        >
                          <span>$50k</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="challenge-tooltip">
                        <button
                          className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                            currency === "100k"
                              ? "bg-bg-green3 border-bg-green3"
                              : "bg-lighter-gray border-lighter-gray"
                          }`}
                          onClick={() => onSubmithandler("100k")}
                        >
                          <span>$100k</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="challenge-tooltip">
                        <button
                          className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                            currency === "200k"
                              ? "bg-bg-green3 border-bg-green3"
                              : "bg-lighter-gray border-lighter-gray"
                          }`}
                          onClick={() => onSubmithandler("200k")}
                        >
                          <span>$200k</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="challenge-tooltip">
                        <button
                          className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                            currency === "500k"
                              ? "bg-bg-green3 border-bg-green3"
                              : "bg-lighter-gray border-lighter-gray"
                          }`}
                          onClick={() => onSubmithandler("500k")}
                        >
                          <span>$500k</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="font-bold">PLATFORM:</p>
                  <div className="flex flex-row flex-wrap gap-x-2 gap-y-3 mt-1">
                    {/* <div>
                      <button
                        className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm 
                  ${
                    platform === "mt4"
                      ? "bg-bg-green3 border-bg-green3"
                      : "bg-lighter-gray border-lighter-gray"
                  }`}
                        onClick={() => onPlatformHandler("mt4")}
                      >
                        <span>MT4</span>
                      </button>
                    </div> */}
                    <div>
                      <button
                        className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm 
                   ${
                     platform === "mt5"
                       ? "bg-bg-green3 border-bg-green3"
                       : "bg-lighter-gray border-lighter-gray"
                   }`}
                        onClick={() => onPlatformHandler("mt5")}
                      >
                        <span>MT5</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkout-bg">
                <p className="uppercase text-[16px] font-bold text-black">
                  BILLING INFORMATION
                </p>
                <form>
                  <div className="w-full mt-6 lg:mt-10 text-left font-semibold">
                    <Row className="mb-4" gutter={[0, 16]}>
                      <Col span={23} md={{ span: 11 }}>
                        <label className="uppercase font-light text-xs">
                          First Name {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                        />
                      </Col>
                      <Col span={23} md={{ span: 11, offset: 2 }}>
                        <label className="uppercase font-light text-xs">
                          Last Name {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4" gutter={[0, 16]}>
                      <Col span={23} md={{ span: 11 }}>
                        <label className="uppercase font-light text-xs">
                          email address {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                        />
                      </Col>
                      <Col span={23} md={{ span: 11, offset: 2 }}>
                        <label className="uppercase font-light text-xs">
                          phone number {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4" gutter={[0, 16]}>
                      <Col span={23} md={{ span: 11 }}>
                        <label className="uppercase font-light text-xs">
                          address line 1 {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                        />
                      </Col>
                      <Col span={23} md={{ span: 11, offset: 2 }}>
                        <label className="uppercase font-light text-xs">
                          town city {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4" gutter={[0, 16]}>
                      <Col span={23} md={{ span: 11 }}>
                        <label className="uppercase font-light text-xs">
                          Postal Code {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                        />
                      </Col>
                      <Col
                        span={23}
                        md={{ span: 11, offset: 2 }}
                        className="flex flex-col mt-0.5"
                      >
                        <div className="uppercase font-light text-xs mb-[2px]">
                          Country {"*"}
                        </div>
                        <Select
                          bordered={false}
                          placeholder="PLEASE SELECT"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "30px",
                            width: "100%",
                            fontSize: "12px",
                          }}
                          suffixIcon={
                            <div className="mt-4">
                              <CaretDownFilled />
                            </div>
                          }
                        >
                          {countries?.map((country, index) => (
                            <option key={index} value={country.value}>
                              {country.label}
                            </option>
                          ))}
                        </Select>
                      </Col>
                    </Row>
                    <Row className="mb-4" gutter={[0, 16]}>
                      <Col span={23} md={{ span: 11 }}>
                        <label className="uppercase font-light text-xs">
                          State {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                        />
                      </Col>
                      <Col span={23} md={{ span: 11, offset: 2 }}>
                        <label className="uppercase font-light text-xs">
                          Additional Notes
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                </form>
              </div>
              <div>
                <form>
                  <p className="uppercase text-[16px] font-bold text-black mb-2">
                    Terms and Conditions
                  </p>
                  <label className="flex">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={checkboxValues.terms}
                      onChange={handleCheckboxChange}
                      id="terms"
                    />
                    <div className="pl-3 text-black text-[12px]">
                      I have <span className="underline font-bold">read</span>{" "}
                      the terms and conditions and agree to the processing of my
                      personal data.
                    </div>
                  </label>
                  <p className="uppercase text-[16px] font-bold text-black mt-8 mb-2">
                    cancellation and refund policy
                  </p>
                  <label className="flex">
                    <input
                      type="checkbox"
                      name="policy"
                      checked={checkboxValues.policy}
                      onChange={handleCheckboxChange}
                      id="policy"
                    />
                    <div className="pl-3 text-black text-[12px]">
                      I have <span className="underline font-bold">read</span>{" "}
                      the cancellation and refund policy and agree to the terms.
                    </div>
                  </label>
                </form>
              </div>
            </div>
            <div className="w-[100%] lg:w-[40%]">
              <div className="checkout-bg">
                <p className="uppercase text-[16px] font-bold text-black">
                  order summary
                </p>
                <div className="mt-6 flex justify-start gap-x-16 uppercase">
                  <div>
                    <p className="text-lighter-black mb-1">currency </p>

                    <p className="text-lighter-black mb-1">risk </p>

                    <p className="text-lighter-black mb-1">balance </p>

                    <p className="text-lighter-black mb-1">platform </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">USD</p>

                    <p className="font-semibold mb-1">Normal</p>

                    <p className="font-semibold mb-1">$10k</p>

                    <p className="font-semibold mb-1">MT5</p>
                  </div>
                </div>
                <div className="border-b border-light-gray mt-4 lg:mr-6"></div>
                <div className="mt-5">
                  <form className="flex items-center gap-x-4">
                    <div>
                      <div className="uppercase font-light text-xs mb-2">
                        discount code
                      </div>
                      <Input
                        style={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                        }}
                        className="w-[130px] md:width-[180px]"
                      />
                    </div>

                    <button className="text-white bg-light-green px-4 py-1.5 hover:text-light-green hover:bg-transparent border border-light-green rounded-full uppercase mt-5">
                      verify
                    </button>
                  </form>
                </div>
              </div>
              <div className="checkout-payment-bg mt-12">
                <p className="uppercase text-[16px] font-bold text-black mb-6">
                  payment
                </p>
                <div>
                  <input
                    type="radio"
                    id="creditcard"
                    name="checkout"
                    value="creditcard"
                  />
                   {" "}
                  <label for="creditcard" className="uppercase">
                    Credit Card
                  </label>
                  <p className="text-xs pl-5">
                    The charge will appear on your credit card statement as "The
                    Funded Trader".
                  </p>
                  <div className="flex gap-x-4 pl-5 mt-4">
                    <div>
                      <img
                        src={visa}
                        alt="visa"
                        className="w-[50px] h-[35px]"
                      />
                    </div>
                    <div>
                      <img
                        src={master}
                        alt="master"
                        className="w-[50px] h-[35px]"
                      />
                    </div>
                    <div>
                      <img
                        src={amex}
                        alt="amex"
                        className="w-[50px] h-[35px]"
                      />
                    </div>
                    <div>
                      <img
                        src={discover}
                        alt="discover"
                        className="w-[50px] h-[35px]"
                      />
                    </div>
                  </div>
                  <div className="mt-12">
                    <Row>
                      <Col span={23}>
                        <label className="uppercase font-light text-xs mb-0">
                          Card Number {"*"}
                        </label>
                        <Input
                          placeholder="**** **** **** ****"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="mt-5">
                      <Col span={23} md={{ span: 13 }}>
                        <label className="uppercase font-light text-xs mb-0">
                          Expiry date {"*"}
                        </label>
                        <Input
                          placeholder="MM/YY"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                        />
                      </Col>
                      <Col span={23} md={{ span: 8, offset: 2 }}>
                        <label className="uppercase font-light text-xs mb-0">
                          CVC CODE {"*"}
                        </label>
                        <Input
                          placeholder="***"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                        />
                      </Col>
                    </Row>
                    <div className="mt-8">
                      <input
                        type="radio"
                        id="bitcoin"
                        name="checkout"
                        value="bitcoin"
                      />
                       {" "}
                      <label for="creditcard" className="uppercase text-[14px]">
                        migpayments: BITCOIN AND OTHER CRYPTO CURREncies
                      </label>
                    </div>
                    <div className="flex gap-x-4 pl-5 mt-4">
                      <div>
                        <img
                          src={bitcoin}
                          alt="bitcoin"
                          className="w-auto h-[30px]"
                        />
                      </div>
                      <div>
                        <img
                          src={etherium}
                          alt="etherium"
                          className="w-auto h-[30px]"
                        />
                      </div>
                      <div>
                        <img
                          src={tether}
                          alt="tether"
                          className="w-auto h-[30px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkout-payment-bg2 mt-2">
                <p className="uppercase text-[16px] font-bold text-black mb-6">
                  total
                </p>
                <div className="md:mr-16">
                  <button className="bg-white rounded-xl py-2 text-black w-[100%]">
                    <s>$2,000</s>
                  </button>
                </div>
                <div className="md:mr-16 mt-3">
                  <button className="total-button rounded-xl py-3 text-white text-xs w-[100%] uppercase">
                    Discount code applied (5%) -{" "}
                    <span className="font-bold">$100</span>
                  </button>
                </div>
                <p className="uppercase text-[16px] font-bold text-black mb-6 mt-8">
                  Amount to pay
                </p>
                <div className="md:mr-16">
                  <button className="bg-white rounded-xl py-2 text-black w-[100%] font-bold text-base">
                    $1,900
                  </button>
                </div>
                <div className="md:mr-16 mt-3">
                  <button className="bg-light-green rounded-full text-white font-bold text-lg py-3 text-black w-[100%] uppercase">
                    Complete Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterHomepage />
    </div>
  );
};

export default Checkout;
