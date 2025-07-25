import React, { useEffect } from "react";
import AOS from "aos";
import ChallengeContainer from "../ui/container/challenge/ChallengeContainer";
import DiscoverSFT from "../components/DiscoverSFT";
import Featured from "../components/Featured";
import Features from "../components/Features";
import Hero from "../components/Hero";
import MetaTraderScreen from "../components/MetaTraderScreen";
import NavbarHomepage from "../components/common/NavbarHomepage";
import Stats from "../components/Stats";
import SubHero from "../components/SubHero";
import Testimonial from "../components/Testimonial";
import TextWithImage1 from "../components/TextWithImage1";
import TextWithImage2 from "../components/TextWithImage2";
import TextWithImage3 from "../components/TextWithImage3";
import TextWithImage4 from "../components/TextWithImage4";
import Working from "../components/Working";
import FooterHomepage from "../components/common/FooterHomepage";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="bg-lightest-white-bg overflow-body">
      <div className="block lg:hidden">
        <NavbarHomepage />
        <div className="hero-bg">
          <Hero />
          <SubHero />
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="hero-bg">
          <NavbarHomepage />
          <Hero />
          <SubHero />
        </div>
      </div>

      <Stats />
      <Featured />
      <ChallengeContainer />
      <DiscoverSFT />
      <Working />
      <TextWithImage1 />
      <TextWithImage2 />
      <Features />
      <TextWithImage3 />
      <TextWithImage4 />
      <MetaTraderScreen />
      <Testimonial />
      <FooterHomepage />
    </div>
  );
};

export default Homepage;
