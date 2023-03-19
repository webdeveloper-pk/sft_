import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer class="px-6 md:px-12 lg:px-16 pt-12 md:pt-14 pb-32 md:pb-40 relative bg-black">
      <div className="footer-gorila">
        <img src={require("../../assets/images/gorila-footer.png")} alt="" />
      </div>
      <a
        href="/"
        className="mb-14 flex justify-center md:justify-start lg:pl-8 side-pages-container mx-auto"
      >
        <img src={logo} alt="logo" width="130px" height="auto" />
      </a>
      <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4 lg:pl-8 side-pages-container mx-auto">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
          <nav className="list-none mb-10">
            <div className="mb-10">
              <p className="text-lighter-gray text-sm mb-1">
                Email: support@sft.com
              </p>
              <p className="text-lighter-gray text-sm">
                WhatsApp: +44 0123456789
              </p>
            </div>
            <div>
              <li>
                <a
                  href="/contact"
                  className="text-lighter-gray hover:text-white text-sm"
                >
                  Contact Options
                </a>
              </li>
              <li>
                <a
                  href="/policy"
                  className="text-lighter-gray hover:text-white text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lighter-gray hover:text-white text-sm"
                >
                  Cookies
                </a>
              </li>
            </div>
            <div className="mt-10">
              <div className="flex justify-center md:justify-start gap-x-4">
                <a
                  href="/"
                  className="text-lighter-gray hover:text-white text-sm"
                >
                  <i className="fa-brands fa-facebook-f socia-media"></i>
                </a>
                <a
                  href="/"
                  className="text-lighter-gray hover:text-white text-sm"
                >
                  <i className="fa-brands fa-instagram socia-media"></i>
                </a>
                <a
                  href="/"
                  className="text-lighter-gray hover:text-white text-sm"
                >
                  <i className="fa-brands fa-twitter socia-media"></i>
                </a>
                <a
                  href="/"
                  className="text-lighter-gray hover:text-white text-sm"
                >
                  <i className="fa-brands fa-tiktok socia-media"></i>
                </a>
                <a
                  href="/"
                  className="text-lighter-gray hover:text-white text-sm"
                >
                  <i className="fa-brands fa-youtube socia-media"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 z-50">
          <h2 className="font-bold text-white text-lg mb-4 uppercase">
            ABOUT US
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a
                href="/"
                className="text-lighter-gray hover:text-white text-sm"
              >
                Evaluation Process
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-lighter-gray hover:text-white text-sm"
              >
                Trading Objectives
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-lighter-gray hover:text-white text-sm"
              >
                Why our FTMO Challenge?
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-lighter-gray hover:text-white text-sm"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-lighter-gray hover:text-white text-sm"
              >
                Scaling Plan
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-lighter-gray hover:text-white text-sm"
              >
                Partners
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-lighter-gray hover:text-white text-sm"
              >
                Affiliate Programme
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-lighter-gray hover:text-white text-sm"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-lighter-gray hover:text-white text-sm"
              >
                Careers
              </a>
            </li>
          </nav>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 z-50">
          <h2 className="font-bold text-white text-lg mb-4 uppercase">
            TRADING
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a
                href="/"
                className="text-lighter-gray hover:text-white text-sm"
              >
                Calendar
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-lighter-gray hover:text-white text-sm"
              >
                The Best Forex Prop Trading Firm
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-lighter-gray hover:text-white text-sm"
              >
                Shop
              </a>
            </li>
          </nav>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
