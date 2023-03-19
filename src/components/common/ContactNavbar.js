import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/sign-in-logo.png";
import gbp from "../../assets/images/gbp.png";

const ContactNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="text-black px-6 md:px-12 lg:px-16 header">
        <div className="mx-auto lg:flex justify-between lg:items-center py-6 uppercase side-pages-container">
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
              <ul className="flex flex-col lg:flex-row items-center gap-x-6 gap-y-6">
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
                  <div className=" hover:text-light-green hover:cursor-pointer">
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
                      className="text-white bg-light-green border border-light-green hover:bg-transparent hover:text-light-green py-1.5 2xl:py-3 px-8 rounded-full uppercase"
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
                    <span style={{ color: "#000000" }}>Eng</span>
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

export default ContactNavbar;
