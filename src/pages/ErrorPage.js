import React from "react";
import { Link } from "react-router-dom";
import ButtonFilled from "../components/common/ButtonFilled";

const ErrorPage = () => {
  return (
    <section className="px-6 md:px-8 lg:px-16">
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <div className="w-[230px] mx-auto">
            <Link to="/">
              <ButtonFilled
                buttonText="Back to homepage"
                textSize="text-sm"
                paddingY="py-2.5"
                paddingX="px-6 md:px-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
