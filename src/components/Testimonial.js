import React from "react";
import HomepageButton from "./common/HomepageButton";
import SimpleSlider from "./common/carousel/Carousel";
import stars from "../assets/images/stars.png";
import testimonial from "../assets/images/testimonial-logo.png";
import testimonialbg from "../assets/images/testimonialbg.png";

const Testimonial = () => {
  return (
    <section
      class="px-6 md:px-8 py-12 bg-lightest-white-bg text-light-black relative homepage-container mx-auto"
      id="testimonial"
    >
      <div className="absolute left-[15%] xl:left-[22%] 2xl:w-[50%] top-[30%] md:top-[5%]">
        <img
          src={testimonialbg}
          alt="testimonial"
          className="w-[100%] md:w-[700px] xl:w-[800px] h-auto"
        />
      </div>
      <div className="flex flex-col items-center mb-12">
        <img src={testimonial} alt="trust-pilot" width="300px" height="auto" />
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-4 mt-6">
          <img src={stars} alt="stars" width="150px" height="auto" />
          <p className="text-light-black uppercase tracking-wideer">
            5.0 <span className="px-2">/</span> 500 REVIEWS
          </p>
        </div>
      </div>
      <SimpleSlider />
      <div className="flex justify-center mt-12 z-50">
        <HomepageButton buttonText="Read More" goText="Read" />
      </div>
    </section>
  );
};

export default Testimonial;
