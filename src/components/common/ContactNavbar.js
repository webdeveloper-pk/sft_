import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import logo from "../../assets/images/sign-in-logo.png";
import gbp from "../../assets/images/gbp.png";

const items = [
  {
    label: <div>FR</div>,
    key: "fr",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
  {
    label: "ES",
    key: "es",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
  {
    label: "OF",
    key: "of",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
  {
    label: "IT",
    key: "it",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
  {
    label: "NV",
    key: "nv",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
  {
    label: "CZ",
    key: "cz",
    // icon: <img src={gbp} className="w-[16px]" alt="" />,
  },
];

const ContactNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="text-black header">
        <div className="mx-auto lg:flex justify-between lg:items-center py-6 uppercase side-pages-container px-6 md:px-6">
          <div>
            <div className="flex-row flex justify-between items-center w-full">
              <a href="/">
                <img src={logo} alt="logo" width="110px" height="auto" />
              </a>
              <div className="lg:hidden">
                <button
                  className="p-2 rounded-md outline-none focus:none"
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
              className={`flex-1 justify-self-center py-16 lg:py-0 lg:block mt-3 font-light text-lg lg:text-sm xl:text-base  ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col lg:flex-row items-center gap-x-6 lg:gap-x-4 zl:gap-x-6 gap-y-6">
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <div className="hover:text-light-green hover:cursor-pointer">
                    <a
                      href="/#working"
                      className="text-black hover:text-light-green hover:cursor-pointer"
                    >
                      <span>How it works</span>
                    </a>
                  </div>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <div className="hover:text-light-green hover:cursor-pointer">
                    <a
                      href="/#scaling"
                      className="text-black hover:text-light-green hover:cursor-pointer"
                    >
                      <span>Scaling plan</span>
                    </a>
                  </div>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <div className=" hover:text-light-green hover:cursor-pointer">
                    <a
                      href="/#testimonial"
                      className="text-black hover:text-light-green hover:cursor-pointer"
                    >
                      <span>testimonials</span>
                    </a>
                  </div>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <div className="hover:text-light-green hover:cursor-pointer">
                    <a
                      href="/faq"
                      className="text-black hover:text-light-green hover:cursor-pointer"
                    >
                      <span>Faq</span>
                    </a>
                  </div>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <div className="hover:text-light-green hover:cursor-pointer">
                    <a
                      href="/contact"
                      className="text-black hover:text-light-green hover:cursor-pointer"
                    >
                      <span>Contact</span>
                    </a>
                  </div>
                </li>
                <li className="hover:cursor-pointer hover:text-white">
                  <Link to="/login">
                    <button
                      onClick={() => setNavbar(!navbar)}
                      className="text-light-green bg-transparent border border-light-green hover:bg-light-green hover:text-white py-1.5 2xl:py-3 px-8 rounded-full uppercase"
                    >
                      Login
                    </button>
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:text-white">
                  <Link to="/signup">
                    <button
                      onClick={() => setNavbar(!navbar)}
                      className="text-white bg-light-green border border-light-green hover:border-light-green hover:bg-transparent hover:text-light-green py-1.5 2xl:py-3 px-8 rounded-full uppercase"
                    >
                      Register
                    </button>
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:text-white">
                  <Dropdown menu={{ items }} overlayClassName="custom-dropdown">
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="text-light-white hover:text-light-white flex items-center pr-[20px]"
                    >
                      <img src={gbp} alt="gbp" className="w-[22px]" />
                      <span className="pl-3 pr-4 text-black">ENG</span>
                      <span className="mt-[1.5px] text-[12px]">
                        <DownOutlined style={{ color: "black" }} />
                      </span>
                    </button>
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

export default ContactNavbar;
