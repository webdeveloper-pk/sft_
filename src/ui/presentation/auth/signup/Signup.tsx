import React from "react";
import { Link } from "react-router-dom";
import { Input, Tooltip, Row, Col } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import logo from "../../../../assets/images/sign-in-logo.png";
import userIcon from "../../../../assets/images/user-icon.png";
import Button from "../../../../components/common/Button";
import ButtonFilled from "../../../../components/common/ButtonFilled";
import { SignupProps } from "../../../../services/intefaces/auth";
import countries from "../../../../services/data/country.json";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const Signup: React.FC<SignupProps> = ({
  user,
  signupReducer,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="px-6 md:px-8 lg:px-16 xl:px-24 pt-8 pb-4 lg:pt-12 flex flex-col justify-between gap-y-4 bg-signin">
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
            <form onSubmit={handleSubmit}>
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
                      value={user.first_name}
                      type="text"
                      name="first_name"
                      onChange={handleChange}
                      required
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
                      value={user.last_name}
                      type="text"
                      name="last_name"
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
                <Row className="mb-4 lg:mb-6" gutter={[0, 16]}>
                  <Col span={23} md={{ span: 11 }}>
                    <select
                      name="country"
                      value={user.country}
                      onChange={handleChange}
                      style={{
                        borderBottom: "1px solid #a8a8a8",
                        color: "#a8a8a8",
                        width: "100%",
                        marginTop: "4px",
                      }}
                      placeholder="Select A Country"
                      className="focus:outline-none"
                    >
                      <option value="" disabled>
                        Select a Country
                      </option>
                      {countries?.map((country, index) => (
                        <option key={index} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
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
                      value={user.email}
                      type="email"
                      name="email"
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
                <Row className="mb-4 lg:mb-6" gutter={[0, 16]}>
                  <Col span={23} md={{ span: 11 }}>
                    <Input
                      placeholder="Username"
                      bordered={false}
                      className="text-light-gray"
                      style={{ borderBottom: "1px solid #a8a8a8" }}
                      suffix={
                        <Tooltip title="Username">
                          <img
                            src={userIcon}
                            alt="arrow"
                            width="14px"
                            height="14px"
                          />
                        </Tooltip>
                      }
                      value={user.username}
                      type="text"
                      name="username"
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col span={23} md={{ span: 11, offset: 2 }}>
                    <Input
                      placeholder="Password"
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
                      value={user.password}
                      type="password"
                      name="password"
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
                {signupReducer?.error ? (
                  <div className="flex justify-start items-center gap-1 text-red-600 capitalize">
                    <ExclamationCircleOutlined className="mt-2" />
                    <p>{signupReducer?.error?.detail}</p>
                  </div>
                ) : null}

                <div className="flex flex-row items-center justify-center mt-6 lg:mt-8 gap-x-4">
                  <ButtonFilled
                    textSize="text-xs lg:text-sm"
                    buttonText={
                      signupReducer.status === "loading"
                        ? `Loading...`
                        : `Sign Up`
                    }
                    paddingY="py-4"
                    paddingX="px-6 md:px-10 lg:px-16"
                    textColor={undefined}
                    type="submit"
                  />
                </div>
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

export default Signup;
