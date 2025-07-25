import React from "react";
import { Input, Select, Row, Col } from "antd";
import { CaretDownFilled, LoadingOutlined } from "@ant-design/icons";
import ContactNavbar from "../../../components/common/ContactNavbar";
import FooterHomepage from "../../../components/common/FooterHomepage";
import usa from "../../../assets/images/usa.png";
import eur from "../../../assets/images/eur.png";
import gbp from "../../../assets/images/gbp.png";
import cad from "../../../assets/images/cad.png";
import aud from "../../../assets/images/aud.png";
import chf from "../../../assets/images/chf.png";
// import visa from "../../../assets/images/visa.png";
// import master from "../../../assets/images/mastercard.png";
// import amex from "../../../assets/images/amex.png";
// import discover from "../../../assets/images/Discover.png";
import bitcoin from "../../../assets/images/bitcoin.png";
import etherium from "../../../assets/images/ethereum.png";
import tether from "../../../assets/images/tether.png";
import chat from "../../../assets/images/chat.png";
import countries from "../../../services/data/country.json";
import Stripe from "./stripe/Stripe";

const Checkout: React.FC<any> = ({
  completeOrderObserver,
  setCompleteOrderObserver,
  stripePaymentLoader,
  setStripePaymentLoader,
  isLoadingStripeIntent,
  setIsLoadingStripeIntent,
  checkout,
  setCheckout,
  platform,
  mode,
  balance,
  currency,
  checkboxValues,
  handleChange,
  handleCountryChange,
  handleCheckboxChange,
  onPlatformHandler,
  onModeHandler,
  onCurrencyHandler,
  onBalanceHandler,
  challnegeReducer1,
  challnegeReducer2,
  challnegeReducer3,
  stripeIntentReducer,
  placeChallengeReducer,
  createPaymentIntent,
  onSubmitCheck,
  setOnSubmitCheck,
}) => {
  const onSubmitHandlerCheck = () => {
    setOnSubmitCheck(true);
    if (
      checkout?.first_name !== "" &&
      checkout?.last_name !== "" &&
      checkout?.email !== "" &&
      checkout?.phone_no !== "" &&
      checkout?.address_line_1 !== "" &&
      checkout?.town_city !== "" &&
      checkout?.postal_code !== "" &&
      checkout?.country !== "" &&
      checkout?.state !== "" &&
      checkout?.additional_notes !== "" &&
      checkboxValues.terms &&
      checkboxValues.policy
    ) {
      setCompleteOrderObserver(true);
    }
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
      <div className="pb-[100px] pt-0 md:pt-4 lg:pt-20 xl:pt-24">
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
                          currency === "usd"
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
                          currency === "eur"
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
                          currency === "gbp"
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
                          currency === "cad"
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
                          currency === "aud"
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
                          currency === "chf"
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
                            balance === "10k"
                              ? "bg-bg-green3 border-bg-green3"
                              : "bg-lighter-gray border-lighter-gray"
                          }`}
                          onClick={() => onBalanceHandler("10k")}
                        >
                          <span>$10k</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="challenge-tooltip">
                        <button
                          className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                            balance === "25k"
                              ? "bg-bg-green3 border-bg-green3"
                              : "bg-lighter-gray border-lighter-gray"
                          }`}
                          onClick={() => onBalanceHandler("25k")}
                        >
                          <span>$25k</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="challenge-tooltip">
                        <button
                          className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                            balance === "50k"
                              ? "bg-bg-green3 border-bg-green3"
                              : "bg-lighter-gray border-lighter-gray"
                          }`}
                          onClick={() => onBalanceHandler("50k")}
                        >
                          <span>$50k</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="challenge-tooltip">
                        <button
                          className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                            balance === "100k"
                              ? "bg-bg-green3 border-bg-green3"
                              : "bg-lighter-gray border-lighter-gray"
                          }`}
                          onClick={() => onBalanceHandler("100k")}
                        >
                          <span>$100k</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="challenge-tooltip">
                        <button
                          className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                            balance === "200k"
                              ? "bg-bg-green3 border-bg-green3"
                              : "bg-lighter-gray border-lighter-gray"
                          }`}
                          onClick={() => onBalanceHandler("200k")}
                        >
                          <span>$200k</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="challenge-tooltip">
                        <button
                          className={`flex justify-center items-center gap-x-1.5 text-white border border-bg-green1 hover:bg-light-green hover:border-light-green py-3 px-3 rounded-full text-sm ${
                            balance === "500k"
                              ? "bg-bg-green3 border-bg-green3"
                              : "bg-lighter-gray border-lighter-gray"
                          }`}
                          onClick={() => onBalanceHandler("500k")}
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
                        <label
                          className={`${
                            onSubmitCheck && checkout.first_name === ""
                              ? "text-red-500"
                              : "text-black"
                          } uppercase font-light text-xs `}
                        >
                          First Name {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                          type="text"
                          name="first_name"
                          value={checkout.first_name}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col span={23} md={{ span: 11, offset: 2 }}>
                        <label
                          className={`${
                            onSubmitCheck && checkout.last_name === ""
                              ? "text-red-500"
                              : "text-black"
                          } uppercase font-light text-xs `}
                        >
                          Last Name {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                          type="text"
                          name="last_name"
                          value={checkout.last_name}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4" gutter={[0, 16]}>
                      <Col span={23} md={{ span: 11 }}>
                        <label
                          className={`${
                            onSubmitCheck && checkout.email === ""
                              ? "text-red-500"
                              : "text-black"
                          } uppercase font-light text-xs `}
                        >
                          email address {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                          type="email"
                          name="email"
                          value={checkout.email}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col span={23} md={{ span: 11, offset: 2 }}>
                        <label
                          className={`${
                            onSubmitCheck && checkout.phone_no === ""
                              ? "text-red-500"
                              : "text-black"
                          } uppercase font-light text-xs `}
                        >
                          phone number {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                          type="text"
                          name="phone_no"
                          value={checkout.phone_no}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4" gutter={[0, 16]}>
                      <Col span={23} md={{ span: 11 }}>
                        <label
                          className={`${
                            onSubmitCheck && checkout.address_line_1 === ""
                              ? "text-red-500"
                              : "text-black"
                          } uppercase font-light text-xs `}
                        >
                          address line 1 {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                          type="text"
                          name="address_line_1"
                          value={checkout.address_line_1}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col span={23} md={{ span: 11, offset: 2 }}>
                        <label
                          className={`${
                            onSubmitCheck && checkout.town_city === ""
                              ? "text-red-500"
                              : "text-black"
                          } uppercase font-light text-xs `}
                        >
                          town city {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                          type="text"
                          name="town_city"
                          value={checkout.town_city}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4" gutter={[0, 16]}>
                      <Col span={23} md={{ span: 11 }}>
                        <label
                          className={`${
                            onSubmitCheck && checkout.postal_code === ""
                              ? "text-red-500"
                              : "text-black"
                          } uppercase font-light text-xs `}
                        >
                          Postal Code {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                          name="postal_code"
                          value={checkout.postal_code}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col
                        span={23}
                        md={{ span: 11, offset: 2 }}
                        className="flex flex-col mt-0.5"
                      >
                        <div
                          className={`${
                            onSubmitCheck && checkout.country === ""
                              ? "text-red-500"
                              : "text-black"
                          } uppercase font-light text-xs mb-[2px] `}
                        >
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
                          options={countries}
                          value={checkout.country}
                          onChange={handleCountryChange}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4" gutter={[0, 16]}>
                      <Col span={23} md={{ span: 11 }}>
                        <label
                          className={`${
                            onSubmitCheck && checkout.state === ""
                              ? "text-red-500"
                              : "text-black"
                          } uppercase font-light text-xs mb-[2px] `}
                        >
                          State {"*"}
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                          type="text"
                          name="state"
                          value={checkout.state}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col span={23} md={{ span: 11, offset: 2 }}>
                        <label
                          className={`${
                            onSubmitCheck && checkout.additional_notes === ""
                              ? "text-red-500"
                              : "text-black"
                          } uppercase font-light text-xs mb-[2px] `}
                        >
                          Additional Notes
                        </label>
                        <Input
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                          }}
                          type="text"
                          name="additional_notes"
                          value={checkout.additional_notes}
                          onChange={handleChange}
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
                    <div
                      className={`pl-3 text-black text-[12px] ${
                        onSubmitCheck && !checkboxValues.terms
                          ? "text-red-500"
                          : "text-black"
                      }`}
                    >
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
                    <div
                      className={`pl-3 text-black text-[12px] ${
                        onSubmitCheck && !checkboxValues.policy
                          ? "text-red-500"
                          : "text-black"
                      }`}
                    >
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
                    <p className="font-semibold mb-1">
                      {challnegeReducer1?.challenge1}
                    </p>

                    <p className="font-semibold mb-1">
                      {challnegeReducer2?.challenge2}
                    </p>

                    <p className="font-semibold mb-1">
                      ${challnegeReducer3?.challenge3}
                    </p>

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
                    onClick={createPaymentIntent}
                  />
                  <label htmlFor="creditcard" className="uppercase ml-3">
                    Credit Card
                  </label>
                  <p className="text-xs pl-5 mt-2 ml-1 mb-6">
                    The charge will appear on your credit card statement as "The
                    Funded Trader".
                  </p>
                  {isLoadingStripeIntent ? (
                    <div className="flex justify-center text-light-green font-bold">
                      <LoadingOutlined style={{ width: "30px" }} />
                    </div>
                  ) : null}
                  {stripeIntentReducer?.status === "succeeded" ? (
                    <Stripe
                      setIsLoadingStripeIntent={setIsLoadingStripeIntent}
                      clientSecret={stripeIntentReducer?.payment?.client_secret}
                      completeOrderObserver={completeOrderObserver}
                      setCompleteOrderObserver={setCompleteOrderObserver}
                      setCheckout={setCheckout}
                      checkout={checkout}
                      setStripePaymentLoader={setStripePaymentLoader}
                    />
                  ) : null}
                  {/* <div className="flex gap-x-4 pl-5 mt-4">
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
                  </div> */}
                  <div className="mt-12">
                    {/* <Row>
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
                    </Row> */}
                    <div className="mt-6">
                      <input
                        type="radio"
                        id="bitcoin"
                        name="checkout"
                        value="bitcoin"
                      />
                      <label
                        htmlFor="creditcard"
                        className="uppercase text-[14px] ml-3"
                      >
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
                  <button
                    className="bg-light-green rounded-full text-white font-bold text-lg py-3 text-black w-[100%] uppercase"
                    onClick={() => {
                      onSubmitHandlerCheck();
                    }}
                  >
                    {stripePaymentLoader ||
                    placeChallengeReducer.status === "loading"
                      ? "Loading..."
                      : "Complete Order"}
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
