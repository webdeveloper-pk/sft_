import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import Card from "../Card";
import avatar1 from "../../../assets/images/avatar1.png";
import avatar2 from "../../../assets/images/avatar2.png";
import avatar3 from "../../../assets/images/avatar3.png";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider
        {...settings}
        className="md:w-[100%] lg:w-[90%] xl:w-[80%] mx-auto z-50"
      >
        <div className="px-4">
          <Card
            src={avatar1}
            name="john snow"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut consectetur dolor, et suscipit elit. Maecenas feugiat facilisis libero, quis semper urna "
          />
        </div>
        <div className="px-4 mt-12">
          <Card
            src={avatar2}
            name="john snow"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut consectetur dolor, et suscipit elit. Maecenas feugiat facilisis libero, quis semper urna "
          />
        </div>
        {/* <div className="px-4">
            <Card
              src={avatar2}
              name="john snow"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut consectetur dolor, et suscipit elit. Maecenas feugiat facilisis libero, quis semper urna "
            />
          </div> */}
        <div className="px-4">
          <Card
            src={avatar3}
            name="john snow"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut consectetur dolor, et suscipit elit. Maecenas feugiat facilisis libero, quis semper urna "
          />
        </div>
        <div className="px-4">
          <Card
            src={avatar1}
            name="john snow"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut consectetur dolor, et suscipit elit. Maecenas feugiat facilisis libero, quis semper urna "
          />
        </div>
        <div className="px-4">
          <Card
            src={avatar2}
            name="john snow"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut consectetur dolor, et suscipit elit. Maecenas feugiat facilisis libero, quis semper urna "
          />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
