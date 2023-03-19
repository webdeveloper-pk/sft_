import React from "react";
import ContactNavbar from "../components/common/ContactNavbar";
import Footer from "../components/common/Footer";
import ButtonFilled from "../components/common/ButtonFilled";

const Policy = () => {
  return (
    <div className="bg-medium-gray">
      <ContactNavbar />
      <div className="policy-bg px-6 md:px-8 lg:px-16 pb-[200px] lg:pb-[300px] xl:pb-[360px]">
        <h1 className="text-black text-2xl lg:text-3xl font-bold uppercase pb-2 border-b border-lighter-gray">
          PRIVACY <span className="text-light-green">policy</span>
        </h1>
        <div className="flex justify-center my-8">
          <ButtonFilled
            buttonText="Terms & conditions"
            textSize="text-xs lg:text-sm"
            paddingY="py-2.5"
            paddingX="px-4 md:px-10 lg:px-12"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-start gap-x-6 lg:gap-x-12 gap-y-3 items-start pl-0 lg:pl-8">
          <p className="text-sm uppercase text-lighter-gray font-semibold mt-1">
            WELCOME TO SFT.COM
          </p>
          <p className="text-base md:text-lg lg:text-xl text-black font-bold">
            This Data Collection and Processing Policy, or Privacy Policy <br />
            (hereafter referred to as the “Policy”) explains how the Company
          </p>
        </div>
        <div className="text-base md:text-lg lg:text-xl text-black font-bold mt-3 mb-8 pl-0 lg:pl-8">
          collects information about You, how it is used, kept, and disclosed
          when You visit the Website.
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] border-t md:border-r md:border-b border-lighter-gray py-8 md:px-8">
            <p className="text-xs font-semibold text-black">
              You hereby consent to the Processing of Your Personal Data and
              confirm that You have been informed of the procedure, purpose, and
              other terms of their processing in accordance with the Law of
              Ukraine “On Personal Data Protection” of 01.06.2010, EU Regulation
              No. 2016/678 of 26.04.2016, and the California State Consumer
              Privacy Act of 2018. (CCPA).
            </p>
            <p className="text-xs font-semibold text-black mt-6">
              By using the Website, You agree to Our Policy and give the Company
              permission to collect, use, and disclose information about You for
              the purposes outlined below.
            </p>
          </div>
          <div className="w-full md:w-[50%] border-t border-b border-lighter-gray py-8 md:px-8">
            <p className="text-xs font-semibold text-black">
              By continuing to use our Website, You acknowledge that You have
              the legal ability to consent to this Policy and to the Processing
              of Your Personal Data under these conditions in accordance with
              the laws of Ukraine and Your personal applicable jurisdiction.
            </p>
            <p className="text-xs font-semibold text-black mt-6">
              We reserve the right to make changes to this Policy at any time.
              We will notify You of any changes by changing the date at the top
              of this text. When using the Website, We encourage You to read the
              Policy to keep informed about the methods and ways We protect Your
              privacy.
            </p>
          </div>
        </div>
        <div className="border-b border-lighter-gray py-6 md:px-8">
          <h1 className="text-lg uppercase text-light-green font-bold mb-3">
            1. Definition
          </h1>
          <p className="text-xs font-semibold text-black pb-3">
            The following terms have the meanings specified below for the
            purposes of the Policy:
          </p>
          <ul className="list-disc text-xs font-semibold text-black pl-4 flex flex-col gap-y-4">
            <li>
              “Company” - refers to LLC LAZAREV.AGENCY (Tax number: 43744520),
              legal address: 04210, Kyiv city, Geroiv Stalingradu street,
              building 20, apartment 57, represented by CEO LAZAREV KIRILL
              ROMANOVICH, acting basing on Statute (hereinafter – “We”, “Us”, or
              “Our”).
            </li>
            <li>
              “Website” - means all Content and links of the page
              https://www.lazarev.agency that provides Services to Users and
              provides information regarding the Services (also referred to as
              “LAZAREV.AGENCY”).
            </li>
            <li>
              “Service” - is a combination of the Services provided by the
              Company through the Website.
            </li>
            <li>
              “User” - Website visitor who uses LAZAREV.AGENCY for personal
              purposes (also referred to as “You”, “Your”).
            </li>
            <li>
              “Content” - the information, Company provides via Website,
              including offers. Also, the Content includes but is not limited
              to: whole or elements of icons, illustrations, graphics, pictures,
              logo, etc., which is solely owned by the Company.
            </li>
            <li>
              “Intellectual property rights” - all rights in, to, or arising out
              of: (i) any work, intangible work, copyrights, copyright
              registrations, creations, design, illustrations, symbols, marks,
              pictures, icons, trademarks, logo, and/or image that is used in
              commercial / personal purposes; (ii) any U.S., Ukrainian or
              foreign patent or any software therefore and any all reissues,
              divisions, continuations, renewals, extensions, and
              continuation-in-part thereof; (iii) moral rights, rights of
              publicity, right of personality, privacy, and likeness, whether
              arising by operation of law, contract, license or otherwise,
              goodwill, trade secret, and other intellectual property rights as
              may now exist or hereafter come into existence, and all
              applications therefore and registrations, renewals, and extensions
              thereof, under the laws of any state, country or other applicable
              jurisdiction.
            </li>
            <li>
              “Services” - the Company's provision of UI/UX design services,
              creation of design for digital products.
            </li>
            <li>
              “Third-Party” - a legal person, public authority, agency, or body
              that is not the Data Subject, Controller, or Processor, as well as
              individuals who are authorized to process Personal Data and/or
              Usage Data under the direct authority of the Controller or
              Processor.
            </li>
          </ul>
        </div>
        <div className="border-b border-lighter-gray py-6 md:px-8">
          <h1 className="text-lg uppercase text-light-green font-bold mb-3">
            2. ABOUT SFT
          </h1>
          <p className="text-xs font-semibold text-black pb-5">
            SFT is a product design agency. We are a global design team that
            creates designs for digital products such as SaaS platforms and
            management systems.
          </p>
          <p className="text-xs font-semibold text-black">
            SFT builds engaging User experience for early-stage startups by
            connecting the dots between User’s needs and the client’s business
            model. We are focused on business solutions, driving sales and
            increasing value with outstanding websites, interfaces and apps. We
            combine human empathy and intelligent data to provide the highest
            level of satisfaction for Our customers and their users.
          </p>
        </div>
        <div className="py-6 md:px-8">
          <h1 className="text-lg uppercase text-light-green font-bold mb-3">
            3. USER’s RIGHTS
          </h1>
          <p className="text-xs font-semibold text-black pb-3">
            Each individual's personal non-proprietary rights regarding Personal
            Data are inalienable and inviolable.
          </p>
          <p className="text-xs font-semibold text-black pb-3">
            The User has the following rights:
          </p>
          <ul className="list-disc text-xs font-semibold text-black pl-4 flex flex-col gap-y-4">
            <li>
              Access to Your Personal Data, as well as confirmation from the
              Company of the Processing of Your Personal Data and the status of
              their storage;
            </li>
            <li>
              At any time, You can withdraw Your consent to the Processing of
              Your Personal Data;
            </li>
            <li>
              If You believe that Your fundamental rights to privacy and Data
              protection outweigh Our legitimate interest in continuing the
              Processing, You may withdraw Your consent. We may keep an
              anonymous record of the User's activities (except for Personal
              Data). The Company deletes all information it has about the User
              within 30 (thirty) days of receiving Your request for deletion of
              information. Please contact Us at{" "}
              <span className="text-light-green">weare@sft.com</span> if You
              have any questions.
            </li>
            <li>
              Changing Your Personal Information If there is an error, it has
              lost its relevance, or Your Personal Data has been deleted as a
              result of the completion of the purpose for which Data has been
              collected.
            </li>
            <li>
              Request for information about the User that the Company has on
              file. The Company may take up to 30 (thirty) days to process a
              request, but We always make every effort to respond as soon as it
              is practically possible.
            </li>
            <li>
              Filing a complaint against the Controller's disclosure of Personal
              Data, if necessary for lawful purposes in court or at stages
              leading to potential legal actions arising from improper use of
              this Website.
            </li>
            <li>
              Obtaining a copy of the User's Personal Data in a structured,
              machine-readable, and widely used format.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
