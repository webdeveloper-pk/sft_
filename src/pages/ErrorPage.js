import React from "react";
import { Link } from "react-router-dom";
import ButtonFilled from "../components/common/ButtonFilled";

const ErrorPage = () => {
  return (
    <section class="px-6 md:px-8 lg:px-16">
      <div className="flex justify-center items-center min-h-screen">
        <div class="text-center">
          <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span class="sr-only">Error</span>404
          </h2>
          <p class="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p class="mt-4 mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <div className="w-[230px] mx-auto">
            <Link to="/">
              <ButtonFilled buttonText="Back to homepage" textSize="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
