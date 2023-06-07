import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../services/hooks/hooks";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import logo from "../../assets/images/logo.png";
import gbp from "../../assets/images/gbp.png";
import france from "../../assets/images/france-flag.jpeg";
import es from "../../assets/images/espain-flag.jpeg";
import italy from "../../assets/images/italy-flag.jpg";
import czech from "../../assets/images/czech-flag.jpg";
import denmark from "../../assets/images/denmark-flag.jpg";
import vitenam from "../../assets/images/vitenam-flag.jpg";

const items = [
  {
    label: <div>FR</div>,
    key: "fr",
    icon: (
      <img
        src={france}
        className="w-[16px] h-[16px] rounded-full"
        alt="france"
      />
    ),
  },
  {
    label: "ES",
    key: "es",
    icon: (
      <img src={es} className="w-[16px] h-[16px] rounded-full" alt="espain" />
    ),
  },
  {
    label: "DE",
    key: "de",
    icon: (
      <img
        src={denmark}
        className="w-[16px] h-[16px] rounded-full"
        alt="denmark"
      />
    ),
  },
  {
    label: "IT",
    key: "it",
    icon: (
      <img src={italy} className="w-[16px] h-[16px] rounded-full" alt="italy" />
    ),
  },
  {
    label: "VN",
    key: "vn",
    icon: (
      <img
        src={vitenam}
        className="w-[16px] h-[16px] rounded-full"
        alt="vitenam"
      />
    ),
  },
  {
    label: "CZ",
    key: "cz",
    icon: (
      <img src={czech} className="w-[16px] h-[16px] rounded-full" alt="czech" />
    ),
  },
];

const NavbarHomepage = () => {
  const [navbar, setNavbar] = useState(false);
  const loginReducer = useAppSelector((state) => ({
    isLoggedIn: state.login.isLoggedIn,
  }));

  return (
    <div>
      <nav className="text-light-white px-2 md:px-8 header homepage-container mx-auto bg-mobile-navbar md:bg-transparent">
        <div className="mx-auto lg:flex justify-between lg:items-center pt-6 pb-0 md:pt-6 md:pb-6 uppercase">
          <div>
            <div className="flex-row flex justify-between items-center w-full -mt-3 ml-2 md:ml-0">
              <a href="/">
                <img src={logo} alt="logo" width="100px" height="auto" />
              </a>
              <div className="lg:hidden">
                <button
                  className="p-2 text-light-white rounded-md outline-none focus:none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 h-8 text-white"
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
                      className="w-9 h-8 text-white"
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
              className={`flex-1 justify-self-center py-16 lg:py-0 lg:block mt-3 font-light text-lg lg:text-sm xl:text-sm  ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col lg:flex-row items-center gap-x-8 gap-y-3 2xl:gap-12">
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <a href="#working">
                    <div className="btn btn-one hover:text-light-green">
                      <span>How it works</span>
                    </div>
                  </a>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <a href="#scaling">
                    <div className="btn btn-one hover:text-light-green">
                      <span>Scaling plan</span>
                    </div>
                  </a>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <a href="#testimonial">
                    <div className="btn btn-one hover:text-light-green">
                      <span>testimonials</span>
                    </div>
                  </a>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <a href="/faq">
                    <div className="btn btn-one hover:text-light-green">
                      <span>Faq</span>
                    </div>
                  </a>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <a href="/contact">
                    <div className="btn btn-one hover:text-light-green">
                      Contact
                    </div>
                  </a>
                </li>
                {!loginReducer.isLoggedIn ? (
                  <>
                    <li className="hover:cursor-pointer hover:text-white">
                      <Link to="/login">
                        <button
                          onClick={() => setNavbar(!navbar)}
                          className="login text-light-black bg-light-white border border-light-white hover:border-light-green hover:text-light-white py-1.5 2xl:py-3 px-8 rounded-full uppercase"
                        >
                          <span className="log">Login</span>
                        </button>
                      </Link>
                    </li>
                    <li className="hover:cursor-pointer hover:text-white mt-4 lg:mt-0">
                      <Link to="/signup">
                        <button
                          onClick={() => setNavbar(!navbar)}
                          className="register text-light-black bg-light-green border border-light-green hover:border-light-white hover:text-light-white py-1.5 2xl:py-3 px-8 rounded-full uppercase"
                        >
                          <span className="reg">Register</span>
                        </button>
                      </Link>
                    </li>
                  </>
                ) : null}
                <li className="hover:cursor-pointer hover:text-white">
                  <Dropdown menu={{ items }} overlayClassName="custom-dropdown">
                    <a
                      href="#!"
                      onClick={(e) => e.preventDefault()}
                      className="text-light-white hover:text-light-white flex items-center pr-[20px]"
                    >
                      <img src={gbp} alt="gbp" className="w-[16px]" />
                      <span className="pl-3 pr-4">ENG</span>
                      <span className="mt-[1.5px] text-[12px]">
                        <DownOutlined />
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

export default NavbarHomepage;
