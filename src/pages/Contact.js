import React from "react";
import ContactNavbar from "../components/common/ContactNavbar";
import Footer from "../components/common/Footer";
import time from "../assets/images/contact-time-squre.png";
import location from "../assets/images/contact-location-square.png";
import email from "../assets/images/contact-email-square.png";
import whatsapp from "../assets/images/contact-whatsapp-square.png";
import ButtonFilled from "../components/common/ButtonFilled";

const Contact = () => {
  return (
    <div className="bg-medium-gray">
      <ContactNavbar />
      <div className="layout-bg pb-[200px] lg:pb-[300px] xl:pb-[360px] lg:pt-28 xl:pt-32">
        <div className="flex flex-col lg:flex-row justify-between gap-y-12 mt-10 side-pages-container mx-auto px-6 md:px-6">
          <div className="w-full lg:w-[45%] xl:w-[45%]">
            <h1 className="text-light-green text-2xl font-bold uppercase">
              Contact
            </h1>
            <p className="text-black uppercase text-xs md:text-sm font-semibold w-full xl:w-[90%]">
              Feel free to contact us for further assistance during our business
              hours.
            </p>
            <div className="mt-12">
              <div className="w-full flex flex-row justify-start gap-x-2 md:gap-x-6 items-center">
                <div className="w-[60px]">
                  <img
                    src={time}
                    alt="time"
                    className="w-[40px] md:w-[50px] h-[40px] md:h-[50px]"
                  />
                </div>
                <div className="uppercase">
                  <p className="text-xs md:text-xs font-semibold">
                    Monday – Saturday
                  </p>
                  <p className="text-sm md:text-base font-bold">
                    8:00AM – 01:00PM
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-row  justify-start gap-x-2 md:gap-x-6 items-center mt-8">
                <div className="location-image">
                  <img
                    src={location}
                    alt="time"
                    className="w-[40px] md:w-[50px] h-[40px] md:h-[50px]"
                  />
                </div>
                <div className="uppercase font-semibold">
                  <p className="text-xs md:text-xs">
                    Bajcsy-Zsilinszky út 27, 3rd floor office. 9021, Győr,
                    Hungary
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-x-2 md:gap-x-6 items-center mt-8">
                <div className="w-[60px]">
                  <img
                    src={email}
                    alt="time"
                    className="w-[40px] md:w-[50px] h-[40px] md:h-[50px]"
                  />
                </div>
                <div className="uppercase font-semibold">
                  <p className="text-xs md:text-xs text-light-green">
                    contact@successfundtrader.com
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-x-2 md:gap-x-6 items-center mt-8">
                <div className="w-[60px]">
                  <img
                    src={whatsapp}
                    alt="time"
                    className="w-[40px] md:w-[50px] h-[40px] md:h-[50px]"
                  />
                </div>
                <div className="uppercase font-semibold">
                  <p className="text-xs md:text-xs text-light-green">
                    XXXXXXXXXX
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs mt-8 font-semibold">
              This site is protected by reCAPTCHA and the Google
              <a href="/policy" className="text-light-green px-1">
                Privacy Policy
              </a>
              and
              <a href="/policy" className="text-light-green px-1">
                Terms of Service
              </a>
              apply.
            </p>
          </div>
          <div className="w-full mx-auto lg:mx-0 md:w-[70%] lg:w-[45%] xl:w-[40%] bg-black rounded-lg px-8 py-8">
            <h1 className="text-white text-xl lg:text-2xl font-bold uppercase">
              Have Questions?
            </h1>
            <form className="mt-8">
              <input
                className="border border-lightest-gray uppercase bg-black text-lightest-gray text-[10px] px-4 py-3 rounded-md w-[100%] mb-5"
                placeholder="first name"
              />
              <input
                className="border border-lightest-gray uppercase bg-black text-lightest-gray text-[10px] px-4 py-3 rounded-md w-[100%] mb-5"
                placeholder="last name"
              />
              <input
                className="border border-lightest-gray uppercase bg-black text-lightest-gray text-[10px] px-4 py-3 rounded-md w-[100%] mb-5"
                placeholder="subject"
              />
              <textarea
                className="border border-lightest-gray uppercase bg-black text-lightest-gray text-[10px] px-4 py-3 rounded-md w-[100%] mb-5"
                placeholder="message"
                rows="8"
                cols="50"
              />
              <div className="flex justify-start">
                <ButtonFilled
                  buttonText="submit"
                  textSize="text-xs lg:text-sm"
                  paddingY="py-3 md:py-3"
                  paddingX="px-10 md:px-10 lg:px-14"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
