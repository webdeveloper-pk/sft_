import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import logo from "../../assets/images/navbar-black-logo.png";
import menu from "../../assets/images/navbar-menu-icon.png";
import userIcon from "../../assets/images/navbar-user-icon.png";
import dropdownIcon from "../../assets/images/navbar-dropdown-icon.png";

const items = [
  {
    label: <a href="/information">Personal Information</a>,
    key: "personalinformation",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
  {
    label: <a href="/affiliateportal">Affiliate portal</a>,
    key: "affiliateportal",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
  {
    label: <a href="/orders">Account orders</a>,
    key: "orders",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="px-6 md:px-8 lg:px-16 text-light-white bg-medium-gray">
        <div className="mx-auto lg:flex justify-between lg:items-center py-6 uppercase border-b border-dark-gray">
          <div>
            <div className="flex flex-row items-center w-full gap-x-3 md:gap-x-8">
              <a href="/">
                <img src={menu} alt="menu" width="30px" height="auto" />
              </a>
              <a href="/" className="-mt-1">
                <img src={logo} alt="logo" width="110px" height="auto" />
              </a>
              <div className="block lg:hidden w-full text-right">
                <button
                  className="p-2 text-light-white rounded-md outline-none focus:none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 h-8 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 h-8 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center py-16 lg:py-0 lg:block mt-3 font-light text-lg lg:text-sm xl:text-lg  ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col lg:flex-row items-center gap-x-6 gap-y-6 2xl:gap-12">
                <li className="hover:cursor-pointer hover:text-white">
                  <Link to="/login">
                    <button
                      onClick={() => setNavbar(!navbar)}
                      className="text-sm text-white bg-light-green border border-light-green hover:bg-transparent hover:text-light-green py-1.5 px-6 rounded-full uppercase"
                    >
                      First free contest
                    </button>
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:text-white">
                  {/* <a
                    href="/"
                    onClick={() => setNavbar(!navbar)}
                    className="flex flex-row gap-x-3 items-center"
                  >
                    <span>
                      <img src={userIcon} alt="eng" width={30} height={32} />
                    </span>
                    <span style={{ color: "#f2f2f2" }}>
                      <img
                        src={dropdownIcon}
                        alt="dropdown"
                        width={8}
                        height={8}
                      />
                    </span>
                  </a> */}
                  <Dropdown menu={{ items }} overlayClassName="custom-dropdown">
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="text-black hover:text-black flex items-center pr-[20px]"
                    >
                      <img
                        src={userIcon}
                        alt="gbp"
                        className="w-[30px] h-[32px]"
                      />
                      <span className="mt-[1.5px] text-[12px] pl-[10px]">
                        <img
                          src={dropdownIcon}
                          alt="dropdown"
                          width={8}
                          height={8}
                        />
                      </span>
                    </a>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
