import React from "react";
import { Link } from "react-router-dom";
import { Input, Tooltip } from "antd";
import { LockOutlined } from "@ant-design/icons";
import ButtonFilled from "../../../../components/common/ButtonFilled";
import Button from "../../../../components/common/Button";
import logo from "../../../../assets/images/sign-in-logo.png";
import { LoginProps } from "../../../../services/intefaces/auth";
import userIcon from "../../../../assets/images/user-icon.png";

const Login: React.FC<LoginProps> = ({
  user,
  loginReducer,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="px-6 md:px-8 lg:px-16 xl:px-24 pt-8 pb-4 lg:pt-12 flex flex-col justify-between min-h-screen gap-y-4 bg-signin">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:min-h-[85vh] gap-y-6">
        <div className="w-full lg:w-[30%] 2xl:w-[25%] flex flex-row justify-center z-50">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="w-[240px] lg:w-[300px] h-[100%]"
            />
          </a>
        </div>
        <div className="w-full md:w-1/2 lg:w-[50%] xl:w-[35%] 2xl:w-[40%] mx-auto text-center z-50 lg:ml-12 xl:ml-14">
          <div className="w-full bg-white rounded-3xl px-4 lg:px-8 xl:px-10 py-6 lg:py-8 xl:py-12">
            <p className="text-lighter-black2 text-lg md:text-xl mb-0 lg:mb-2">
              Welcome to
            </p>
            <p className="text-lighter-black2 text-2xl md:text-3xl font-bold">
              Success Fund trader
            </p>
            <p className="text-lighter-black2 text-xl md:text-2xl mt-8 lg:mt-12 font-bold">
              Login
            </p>
            <form onSubmit={handleSubmit}>
              <div className="w-full mt-6 lg:mt-10 text-left font-semibold">
                <div className="mb-4 lg:mb-6">
                  <Input
                    placeholder="Username"
                    bordered={false}
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
                </div>
                <Input
                  placeholder="Password"
                  bordered={false}
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
              </div>
              <div
                className={`${
                  loginReducer.status === "failed" ? "mt-6" : "mt-0"
                } text-red-500 font-semibold text-[14px]`}
              >
                {loginReducer.status === "failed"
                  ? "No active account found with the given credentials"
                  : ""}
              </div>
              <div className="flex flex-row items-center justify-center lg:justify-start mt-6 lg:mt-10 gap-x-4">
                <ButtonFilled
                  textSize="text-xs lg:text-sm"
                  buttonText={
                    loginReducer.status === "loading"
                      ? `Loading...`
                      : `get started`
                  }
                  paddingY="py-4"
                  paddingX="px-6 md:px-10 lg:px-12"
                  textColor=""
                  type="submit"
                />
                <Link
                  className="text-xs md:text-sm text-light-green font-semibold hover:font-bold hover:text-light-green"
                  to="/forget-password"
                >
                  Forget Password?
                </Link>
              </div>
            </form>
            <div className="flex flex-row item-center gap-x-2 justify-center lg:justify-start mt-6 lg:mt-10 font-semibold">
              <p className="text-lightest-black text-sm xl:text-base">
                Still doesn't have an account?
              </p>
              <Link to="/signup">
                <Button textSize="text-sm xl:text-base" buttonText="Sign up" />
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

export default Login;
