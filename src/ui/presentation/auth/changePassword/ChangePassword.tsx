import React from "react";
import { Input, Tooltip } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import ButtonFilled from "../../../../components/common/ButtonFilled";
import logo from "../../../../assets/images/sign-in-logo.png";
import { ChangePasswordProps } from "../../../../services/intefaces/auth";

const ChangePassword: React.FC<ChangePasswordProps> = ({
  user,
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
              Forget Password
            </p>
            <form onSubmit={handleSubmit}>
              <div className="w-full mt-6 lg:mt-10 text-left font-semibold">
                <div className="mb-4 lg:mb-6">
                  <Input
                    placeholder="Enter email"
                    bordered={false}
                    style={{ borderBottom: "1px solid #a8a8a8" }}
                    suffix={
                      <Tooltip title="Email">
                        <MailOutlined
                          style={{
                            color: "#01c887",
                            marginTop: "10px",
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
                </div>
                <div className="mb-4 lg:mb-6">
                  <Input
                    placeholder="New passowrd"
                    bordered={false}
                    style={{ borderBottom: "1px solid #a8a8a8" }}
                    suffix={
                      <Tooltip title="New passowrd">
                        <LockOutlined
                          style={{
                            color: "#01c887",
                          }}
                        />
                      </Tooltip>
                    }
                    value={user.password1}
                    type="password"
                    name="password1"
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  placeholder="Confirm passowrd"
                  bordered={false}
                  style={{ borderBottom: "1px solid #a8a8a8" }}
                  suffix={
                    <Tooltip title="Confirm passowrd">
                      <LockOutlined
                        style={{
                          color: "#01c887",
                        }}
                      />
                    </Tooltip>
                  }
                  value={user.password2}
                  type="password"
                  name="password2"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-row items-center justify-center mt-6 lg:mt-10">
                <ButtonFilled
                  textSize="text-xs lg:text-sm"
                  buttonText={
                    // changePaswordReducer.status === "loading"
                    //   ? `Loading...`
                    //   : `Get started`
                    "Get started"
                  }
                  paddingY="py-4"
                  paddingX="px-6 md:px-10 lg:px-12"
                  textColor=""
                  type="submit"
                />
              </div>
            </form>
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

export default ChangePassword;
