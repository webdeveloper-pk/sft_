import React, { useState } from "react";
import { Input, Select, Row, Col } from "antd";
import { CaretDownFilled } from "@ant-design/icons";
import ContactNavbar from "../components/common/ContactNavbar";
import FooterHomepage from "../components/common/FooterHomepage";
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

const Checkout = () => {
  const [platform, setPlatform] = useState("mt4");
  const [mode, setMode] = useState("aggressive");
  const [country, setCountry] = useState("usd");
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

  return (
    <div className="bg-medium-gray">
      <ContactNavbar />
      <div className="pb-[100px]">
        <div className="mt-10 side-pages-container mx-auto px-6 md:px-6">
          <h1 className="text-light-green text-[26px] md:text-[30px] lg:text-[56px] font-bold">
            PURCHASE
            <br />
            <div className="-mt-[10px] lg:-mt-[30px]">CHALLENGE</div>
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
                  <p className="font-bold">PLATFORM:</p>
                  <div className="flex flex-row flex-wrap gap-x-2 gap-y-3 mt-1">
                    <div>
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
                    </div>
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
                          options={[
                            { label: "Afghanistan", value: "AF" },
                            { label: "Åland Islands", value: "AX" },
                            { label: "Albania", value: "AL" },
                            { label: "Algeria", value: "DZ" },
                            { label: "American Samoa", value: "AS" },
                            { label: "AndorrA", value: "AD" },
                            { label: "Angola", value: "AO" },
                            { label: "Anguilla", value: "AI" },
                            { label: "Antarctica", value: "AQ" },
                            { label: "Antigua and Barbuda", value: "AG" },
                            { label: "Argentina", value: "AR" },
                            { label: "Armenia", value: "AM" },
                            { label: "Aruba", value: "AW" },
                            { label: "Australia", value: "AU" },
                            { label: "Austria", value: "AT" },
                            { label: "Azerbaijan", value: "AZ" },
                            { label: "Bahamas", value: "BS" },
                            { label: "Bahrain", value: "BH" },
                            { label: "Bangladesh", value: "BD" },
                            { label: "Barbados", value: "BB" },
                            { label: "Belarus", value: "BY" },
                            { label: "Belgium", value: "BE" },
                            { label: "Belize", value: "BZ" },
                            { label: "Benin", value: "BJ" },
                            { label: "Bermuda", value: "BM" },
                            { label: "Bhutan", value: "BT" },
                            { label: "Bolivia", value: "BO" },
                            { label: "Bosnia and Herzegovina", value: "BA" },
                            { label: "Botswana", value: "BW" },
                            { label: "Bouvet Island", value: "BV" },
                            { label: "Brazil", value: "BR" },
                            {
                              label: "British Indian Ocean Territory",
                              value: "IO",
                            },
                            { label: "Brunei Darussalam", value: "BN" },
                            { label: "Bulgaria", value: "BG" },
                            { label: "Burkina Faso", value: "BF" },
                            { label: "Burundi", value: "BI" },
                            { label: "Cambodia", value: "KH" },
                            { label: "Cameroon", value: "CM" },
                            { label: "Canada", value: "CA" },
                            { label: "Cape Verde", value: "CV" },
                            { label: "Cayman Islands", value: "KY" },
                            { label: "Central African Republic", value: "CF" },
                            { label: "Chad", value: "TD" },
                            { label: "Chile", value: "CL" },
                            { label: "China", value: "CN" },
                            { label: "Christmas Island", value: "CX" },
                            { label: "Cocos (Keeling) Islands", value: "CC" },
                            { label: "Colombia", value: "CO" },
                            { label: "Comoros", value: "KM" },
                            { label: "Congo", value: "CG" },
                            {
                              label: "Congo, The Democratic Republic of the",
                              value: "CD",
                            },
                            { label: "Cook Islands", value: "CK" },
                            { label: "Costa Rica", value: "CR" },
                            { label: "Cote D'Ivoire", value: "CI" },
                            { label: "Croatia", value: "HR" },
                            { label: "Cuba", value: "CU" },
                            { label: "Cyprus", value: "CY" },
                            { label: "Czech Republic", value: "CZ" },
                            { label: "Denmark", value: "DK" },
                            { label: "Djibouti", value: "DJ" },
                            { label: "Dominica", value: "DM" },
                            { label: "Dominican Republic", value: "DO" },
                            { label: "Ecuador", value: "EC" },
                            { label: "Egypt", value: "EG" },
                            { label: "El Salvador", value: "SV" },
                            { label: "Equatorial Guinea", value: "GQ" },
                            { label: "Eritrea", value: "ER" },
                            { label: "Estonia", value: "EE" },
                            { label: "Ethiopia", value: "ET" },
                            {
                              label: "Falkland Islands (Malvinas)",
                              value: "FK",
                            },
                            { label: "Faroe Islands", value: "FO" },
                            { label: "Fiji", value: "FJ" },
                            { label: "Finland", value: "FI" },
                            { label: "France", value: "FR" },
                            { label: "French Guiana", value: "GF" },
                            { label: "French Polynesia", value: "PF" },
                            {
                              label: "French Southern Territories",
                              value: "TF",
                            },
                            { label: "Gabon", value: "GA" },
                            { label: "Gambia", value: "GM" },
                            { label: "Georgia", value: "GE" },
                            { label: "Germany", value: "DE" },
                            { label: "Ghana", value: "GH" },
                            { label: "Gibraltar", value: "GI" },
                            { label: "Greece", value: "GR" },
                            { label: "Greenland", value: "GL" },
                            { label: "Grenada", value: "GD" },
                            { label: "Guadeloupe", value: "GP" },
                            { label: "Guam", value: "GU" },
                            { label: "Guatemala", value: "GT" },
                            { label: "Guernsey", value: "GG" },
                            { label: "Guinea", value: "GN" },
                            { label: "Guinea-Bissau", value: "GW" },
                            { label: "Guyana", value: "GY" },
                            { label: "Haiti", value: "HT" },
                            {
                              label: "Heard Island and Mcdonald Islands",
                              value: "HM",
                            },
                            {
                              label: "Holy See (Vatican City State)",
                              value: "VA",
                            },
                            { label: "Honduras", value: "HN" },
                            { label: "Hong Kong", value: "HK" },
                            { label: "Hungary", value: "HU" },
                            { label: "Iceland", value: "IS" },
                            { label: "India", value: "IN" },
                            { label: "Indonesia", value: "ID" },
                            { label: "Iran, Islamic Republic Of", value: "IR" },
                            { label: "Iraq", value: "IQ" },
                            { label: "Ireland", value: "IE" },
                            { label: "Isle of Man", value: "IM" },
                            { label: "Israel", value: "IL" },
                            { label: "Italy", value: "IT" },
                            { label: "Jamaica", value: "JM" },
                            { label: "Japan", value: "JP" },
                            { label: "Jersey", value: "JE" },
                            { label: "Jordan", value: "JO" },
                            { label: "Kazakhstan", value: "KZ" },
                            { label: "Kenya", value: "KE" },
                            { label: "Kiribati", value: "KI" },
                            {
                              label: "Korea, Democratic People'S Republic of",
                              value: "KP",
                            },
                            { label: "Korea, Republic of", value: "KR" },
                            { label: "Kuwait", value: "KW" },
                            { label: "Kyrgyzstan", value: "KG" },
                            {
                              label: "Lao People'S Democratic Republic",
                              value: "LA",
                            },
                            { label: "Latvia", value: "LV" },
                            { label: "Lebanon", value: "LB" },
                            { label: "Lesotho", value: "LS" },
                            { label: "Liberia", value: "LR" },
                            { label: "Libyan Arab Jamahiriya", value: "LY" },
                            { label: "Liechtenstein", value: "LI" },
                            { label: "Lithuania", value: "LT" },
                            { label: "Luxembourg", value: "LU" },
                            { label: "Macao", value: "MO" },
                            {
                              label:
                                "Macedonia, The Former Yugoslav Republic of",
                              value: "MK",
                            },
                            { label: "Madagascar", value: "MG" },
                            { label: "Malawi", value: "MW" },
                            { label: "Malaysia", value: "MY" },
                            { label: "Maldives", value: "MV" },
                            { label: "Mali", value: "ML" },
                            { label: "Malta", value: "MT" },
                            { label: "Marshall Islands", value: "MH" },
                            { label: "Martinique", value: "MQ" },
                            { label: "Mauritania", value: "MR" },
                            { label: "Mauritius", value: "MU" },
                            { label: "Mayotte", value: "YT" },
                            { label: "Mexico", value: "MX" },
                            {
                              label: "Micronesia, Federated States of",
                              value: "FM",
                            },
                            { label: "Moldova, Republic of", value: "MD" },
                            { label: "Monaco", value: "MC" },
                            { label: "Mongolia", value: "MN" },
                            { label: "Montserrat", value: "MS" },
                            { label: "Morocco", value: "MA" },
                            { label: "Mozambique", value: "MZ" },
                            { label: "Myanmar", value: "MM" },
                            { label: "Namibia", value: "NA" },
                            { label: "Nauru", value: "NR" },
                            { label: "Nepal", value: "NP" },
                            { label: "Netherlands", value: "NL" },
                            { label: "Netherlands Antilles", value: "AN" },
                            { label: "New Caledonia", value: "NC" },
                            { label: "New Zealand", value: "NZ" },
                            { label: "Nicaragua", value: "NI" },
                            { label: "Niger", value: "NE" },
                            { label: "Nigeria", value: "NG" },
                            { label: "Niue", value: "NU" },
                            { label: "Norfolk Island", value: "NF" },
                            { label: "Northern Mariana Islands", value: "MP" },
                            { label: "Norway", value: "NO" },
                            { label: "Oman", value: "OM" },
                            { label: "Pakistan", value: "PK" },
                            { label: "Palau", value: "PW" },
                            {
                              label: "Palestinian Territory, Occupied",
                              value: "PS",
                            },
                            { label: "Panama", value: "PA" },
                            { label: "Papua New Guinea", value: "PG" },
                            { label: "Paraguay", value: "PY" },
                            { label: "Peru", value: "PE" },
                            { label: "Philippines", value: "PH" },
                            { label: "Pitcairn", value: "PN" },
                            { label: "Poland", value: "PL" },
                            { label: "Portugal", value: "PT" },
                            { label: "Puerto Rico", value: "PR" },
                            { label: "Qatar", value: "QA" },
                            { label: "Reunion", value: "RE" },
                            { label: "Romania", value: "RO" },
                            { label: "Russian Federation", value: "RU" },
                            { label: "RWANDA", value: "RW" },
                            { label: "Saint Helena", value: "SH" },
                            { label: "Saint Kitts and Nevis", value: "KN" },
                            { label: "Saint Lucia", value: "LC" },
                            { label: "Saint Pierre and Miquelon", value: "PM" },
                            {
                              label: "Saint Vincent and the Grenadines",
                              value: "VC",
                            },
                            { label: "Samoa", value: "WS" },
                            { label: "San Marino", value: "SM" },
                            { label: "Sao Tome and Principe", value: "ST" },
                            { label: "Saudi Arabia", value: "SA" },
                            { label: "Senegal", value: "SN" },
                            { label: "Serbia and Montenegro", value: "CS" },
                            { label: "Seychelles", value: "SC" },
                            { label: "Sierra Leone", value: "SL" },
                            { label: "Singapore", value: "SG" },
                            { label: "Slovakia", value: "SK" },
                            { label: "Slovenia", value: "SI" },
                            { label: "Solomon Islands", value: "SB" },
                            { label: "Somalia", value: "SO" },
                            { label: "South Africa", value: "ZA" },
                            {
                              label:
                                "South Georgia and the South Sandwich Islands",
                              value: "GS",
                            },
                            { label: "Spain", value: "ES" },
                            { label: "Sri Lanka", value: "LK" },
                            { label: "Sudan", value: "SD" },
                            { label: "Surilabel", value: "SR" },
                            { label: "Svalbard and Jan Mayen", value: "SJ" },
                            { label: "Swaziland", value: "SZ" },
                            { label: "Sweden", value: "SE" },
                            { label: "Switzerland", value: "CH" },
                            { label: "Syrian Arab Republic", value: "SY" },
                            { label: "Taiwan, Province of China", value: "TW" },
                            { label: "Tajikistan", value: "TJ" },
                            {
                              label: "Tanzania, United Republic of",
                              value: "TZ",
                            },
                            { label: "Thailand", value: "TH" },
                            { label: "Timor-Leste", value: "TL" },
                            { label: "Togo", value: "TG" },
                            { label: "Tokelau", value: "TK" },
                            { label: "Tonga", value: "TO" },
                            { label: "Trinidad and Tobago", value: "TT" },
                            { label: "Tunisia", value: "TN" },
                            { label: "Turkey", value: "TR" },
                            { label: "Turkmenistan", value: "TM" },
                            { label: "Turks and Caicos Islands", value: "TC" },
                            { label: "Tuvalu", value: "TV" },
                            { label: "Uganda", value: "UG" },
                            { label: "Ukraine", value: "UA" },
                            { label: "United Arab Emirates", value: "AE" },
                            { label: "United Kingdom", value: "GB" },
                            { label: "United States", value: "US" },
                            {
                              label: "United States Minor Outlying Islands",
                              value: "UM",
                            },
                            { label: "Uruguay", value: "UY" },
                            { label: "Uzbekistan", value: "UZ" },
                            { label: "Vanuatu", value: "VU" },
                            { label: "Venezuela", value: "VE" },
                            { label: "Viet Nam", value: "VN" },
                            { label: "Virgin Islands, British", value: "VG" },
                            { label: "Virgin Islands, U.S.", value: "VI" },
                            { label: "Wallis and Futuna", value: "WF" },
                            { label: "Western Sahara", value: "EH" },
                            { label: "Yemen", value: "YE" },
                            { label: "Zambia", value: "ZM" },
                            { label: "Zimbabwe", value: "ZW" },
                          ]}
                        />
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

                    <p className="font-semibold mb-1">$ 100,000</p>

                    <p className="font-semibold mb-1">MTS</p>
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
