import React from "react";

const HomepageButton = ({ buttonText, goText }) => {
  return (
    <div
      class="button"
      id="button-7"
      className="my-style text-base text-light-white bg-light-green hover:text-light-green hover:bg-transparent py-1.5 lg:py-2 2xl:py-3 px-6 rounded-full uppercase font-bold border border-light-green"
    >
      <div id="dub-arrow">{goText}</div>
      <a href="/">{buttonText}</a>
    </div>
  );
};

export default HomepageButton;
