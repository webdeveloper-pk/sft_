import React from "react";
import HomepageButton from "./common/HomepageButton";
import Phase from "./common/Phase";
import workbg1 from "../assets/images/work-bg1.png";
import workbg2 from "../assets/images/work-bg2.png";
import workbg3 from "../assets/images/work-bg3.png";
import workbg4 from "../assets/images/work-bg4.png";
import workbg5 from "../assets/images/work-bg5.png";

const Working = () => {
  return (
    <section
      class="px-2 md:px-8 py-32 lg:py-[200px] text-light-black working-bg relative"
      id="working"
    >
      <div className="absolute bottom-[-100px] left-0">
        <img src={workbg1} alt="dots" width="500px" height="auto" />
      </div>
      <div className="absolute top-[5%] xl:top-[25%] right-0">
        <img src={workbg2} alt="dots" width="500px" height="auto" />
      </div>
      <div className="flex flex-col items-center gap-y-14 homepage-container mx-auto">
        <div className="uppercase font-bold text-light-green text-center text-3xl lg:text-4xl">
          HOW IT WORKS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 xl:gap-16 text-center">
          <div className="relative">
            <div className="absolute">
              <img src={workbg4} alt="dots" width="500px" height="auto" />
            </div>
            <div>
              <Phase
                phase="PHASE 1"
                title="SFT CHALLENGE"
                description="Depending on the challenge you choose, you have between 30 and 40 days to reach the profitability goal on a demo account that will be assigned to you."
                value="33"
              />
            </div>
          </div>
          <div className="relative">
            <div className="absolute">
              <img src={workbg4} alt="dots" width="500px" height="auto" />
            </div>
            <div>
              <Phase
                phase="PHASE 2"
                title="SFT CHALLENGE"
                description="If you succeed in phase #1, you can access phase 2, the validation phase, during which you will be asked to repeat your performance (with some slight modifications)."
                value="66"
              />
            </div>
          </div>
          <div className="relative">
            <div className="absolute">
              <img src={workbg4} alt="dots" width="500px" height="auto" />
            </div>
            <div>
              <Phase
                phase="PHASE 3"
                title="SFT TRADER"
                description="If you validate phase 2, you will join the SFT Elite Team and a real money account will be made available to you so that you can perform. You can pocket 90% of the account's profits."
                value="100"
              />
            </div>
          </div>
        </div>
        <div>
          <HomepageButton buttonText="get started" goText="start" />
        </div>
      </div>
    </section>
  );
};

export default Working;
