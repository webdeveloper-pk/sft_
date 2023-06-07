import React from "react";

const HomepageButton = ({ buttonText, goText }) => {
  return (
    <div
      id="button-7"
      className="button my-style text-base text-light-white bg-light-green hover:text-light-green hover:bg-transparent py-1.5 lg:py-2 2xl:py-3 px-10 md:px-12 rounded-full uppercase font-bold border border-light-green"
    >
      <div id="dub-arrow">{goText}</div>
      <p>{buttonText}</p>
    </div>
  );
};

export default HomepageButton;
