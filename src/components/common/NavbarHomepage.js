import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import gbp from "../../assets/images/gbp.png";

const NavbarHomepage = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="text-light-white px-6 md:px-8 header homepage-container mx-auto">
        <div className="mx-auto lg:flex justify-between lg:items-center py-6 uppercase">
          <div>
            <div className="flex-row flex justify-between items-center w-full -mt-3">
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
                <li className="hover:cursor-pointer hover:text-white">
                  <Link to="/login">
                    <button
                      onClick={() => setNavbar(!navbar)}
                      className="login text-light-black bg-light-white border border-light-white hover:border-light-green hover:bg-light-green hover:text-light-white py-1.5 2xl:py-3 px-8 rounded-full uppercase"
                    >
                      <span className="log">Login</span>
                    </button>
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:text-white">
                  <a
                    href="/"
                    onClick={() => setNavbar(!navbar)}
                    className="flex flex-row gap-x-3 items-center"
                  >
                    <span style={{ color: "#f2f2f2" }}>Eng</span>
                    <span>
                      <img src={gbp} alt="eng" width={22} height={22} />
                    </span>
                  </a>
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
