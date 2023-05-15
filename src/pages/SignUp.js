import React from "react";
import { Link } from "react-router-dom";
import { Select, Input, Tooltip, Row, Col } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import logo from "../assets/images/sign-in-logo.png";
import dropdown from "../assets/images/dropdown-icon.png";
import userIcon from "../assets/images/user-icon.png";
import Button from "../components/common/Button";
import ButtonFilled from "../components/common/ButtonFilled";

const SignUp = () => {
  return (
    <div className="px-6 md:px-8 lg:px-16 xl:px-24 pt-8 pb-4 lg:pt-12 flex flex-col justify-between min-h-screen gap-y-4 bg-signin">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:min-h-[85vh] gap-y-6">
        <a
          href="/"
          className="w-full lg:w-[30%] xl:w-[22%] flex flex-row justify-center z-50"
        >
          <img
            src={logo}
            alt="logo"
            className="w-[240px] lg:w-[220px] xl:w-[220px] h-[100%]"
          />
        </a>
        <div className="w-full md:w-[65%] lg:w-[65%] xl:w-[47%] 2xl:w-[50%] mx-auto text-center z-50 lg:ml-12 xl:ml-16">
          <div className="w-full bg-white rounded-3xl px-4 md:px-6 lg:px-8 xl:px-10 py-6 lg:py-8 xl:py-12">
            <p className="text-lighter-black2 text-lg md:text-xl mb-0 lg:mb-2">
              Welcome to
            </p>
            <p className="text-lighter-black2 text-2xl md:text-3xl font-bold">
              Success Fund trader
            </p>
            <p className="text-lighter-black2 text-xl md:text-2xl mt-4 lg:mt-8 font-bold">
              Signup
            </p>
            <form>
              <div className="w-full mt-6 lg:mt-10 text-left font-semibold">
                <Row className="mb-4 lg:mb-6" gutter={[0, 16]}>
                  <Col span={23} md={{ span: 11 }}>
                    <Input
                      placeholder="First name"
                      bordered={false}
                      style={{ borderBottom: "1px solid #a8a8a8" }}
                      suffix={
                        <Tooltip title="First name">
                          {
                            <img
                              src={userIcon}
                              alt="arrow"
                              width="14px"
                              height="14px"
                            />
                          }
                        </Tooltip>
                      }
                    />
                  </Col>
                  <Col span={23} md={{ span: 11, offset: 2 }}>
                    <Input
                      placeholder="Last name"
                      bordered={false}
                      style={{ borderBottom: "1px solid #a8a8a8" }}
                      suffix={
                        <Tooltip title="Last name">
                          {
                            <img
                              src={userIcon}
                              alt="arrow"
                              width="14px"
                              height="14px"
                            />
                          }
                        </Tooltip>
                      }
                    />
                  </Col>
                </Row>
                <Row className="mb-4 lg:mb-6" gutter={[0, 16]}>
                  <Col span={23} md={{ span: 11 }}>
                    <Select
                      placeholder="Select country"
                      bordered={false}
                      style={{
                        borderBottom: "1px solid #a8a8a8",
                        width: "100%",
                      }}
                      // showSearch
                      suffixIcon={
                        <img
                          src={dropdown}
                          alt="arrow"
                          width="12px"
                          height="12px"
                          className="mt-1"
                        />
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
                        { label: "Falkland Islands (Malvinas)", value: "FK" },
                        { label: "Faroe Islands", value: "FO" },
                        { label: "Fiji", value: "FJ" },
                        { label: "Finland", value: "FI" },
                        { label: "France", value: "FR" },
                        { label: "French Guiana", value: "GF" },
                        { label: "French Polynesia", value: "PF" },
                        { label: "French Southern Territories", value: "TF" },
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
                        { label: "Holy See (Vatican City State)", value: "VA" },
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
                          label: "Macedonia, The Former Yugoslav Republic of",
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
                          label: "South Georgia and the South Sandwich Islands",
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
                        { label: "Tanzania, United Republic of", value: "TZ" },
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
                  <Col span={23} md={{ span: 11, offset: 2 }}>
                    <Input
                      placeholder="Email address"
                      bordered={false}
                      style={{ borderBottom: "1px solid #a8a8a8" }}
                      suffix={
                        <Tooltip title="Email">
                          <MailOutlined
                            style={{
                              color: "#01c887",
                            }}
                          />
                        </Tooltip>
                      }
                    />
                  </Col>
                </Row>
                <Row className="mb-4 lg:mb-6" gutter={[0, 16]}>
                  <Col span={23} md={{ span: 11 }}>
                    <Input
                      placeholder="Password"
                      type="password"
                      bordered={false}
                      className="text-light-gray"
                      style={{ borderBottom: "1px solid #a8a8a8" }}
                      suffix={
                        <Tooltip title="Password">
                          <LockOutlined
                            style={{
                              color: "#01c887",
                            }}
                          />
                        </Tooltip>
                      }
                    />
                  </Col>
                  <Col span={23} md={{ span: 11, offset: 2 }}>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      bordered={false}
                      className="text-light-gray"
                      style={{ borderBottom: "1px solid #a8a8a8" }}
                      suffix={
                        <Tooltip title="Password">
                          <LockOutlined
                            style={{
                              color: "#01c887",
                            }}
                          />
                        </Tooltip>
                      }
                    />
                  </Col>
                </Row>
                <a
                  href="/dashboard"
                  className="flex flex-row items-center justify-center mt-6 lg:mt-8 gap-x-4"
                >
                  <ButtonFilled
                    textSize="text-xs lg:text-sm"
                    buttonText="sign up"
                    paddingY="py-4"
                    paddingX="px-6 md:px-10 lg:px-16"
                  />
                </a>
              </div>
            </form>
            <div className="flex flex-row item-center gap-x-2 justify-center mt-4 lg:mt-8 font-semibold">
              <p className="text-lightest-black text-sm xl:text-base">
                Already have an account?
              </p>
              <Link to="/login">
                <Button textSize="text-sm xl:text-base" buttonText="Log in" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[30%] xl:w-[25%] hidden lg:block"></div>
      </div>
      <div className="flex flex-col items-center md:items-baseline gap-y-1 gap-x-6 md:flex-row md:justify-center lg:justify-start text-white text-sm xl:text-base z-50 font-semibold lg:-ml-8">
        <p>© 2008 - 2021 Girls Chase Inc.</p>
        <ul className="flex flex-row gap-x-1">
          <li>
            <a href="/policy" className="login-link">
              Privacy
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="/policy" className="login-link">
              Terms
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="/faq" className="login-link">
              Support
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SignUp;
