import React from "react";
import LeaderCard from "./common/LeaderCard";
import leader1 from "../assets/images/affiliate-leader1.png";
import leader2 from "../assets/images/affiliate-leader2.png";
import leader3 from "../assets/images/affiliate-leader3.png";
import trophy1 from "../assets/images/affiliate-trophy1.png";
import trophy2 from "../assets/images/affiliate-trophy2.png";
import trophy3 from "../assets/images/affiliate-trophy3.png";

const LeadersStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-24">
      <div>
        <LeaderCard
          trophy={trophy1}
          src={leader1}
          name="Daniele F."
          country="United Arab Emirates	"
          profit="$33,480.05"
          size="$200,000.00"
          equity="$233,480.05"
          gain="17%"
        />
      </div>
      <div>
        <LeaderCard
          trophy={trophy2}
          src={leader2}
          name="William A."
          country="United Kingdom"
          profit="$24,963.32"
          size="$200,000.00"
          equity="$224,963.32"
          gain="12%"
        />
      </div>
      <div>
        <LeaderCard
          trophy={trophy3}
          src={leader3}
          name="Muhammad U."
          country="Pakistan"
          profit="$23,385.00"
          size="$200,000.00"
          equity="$223,385.00"
          gain="17%"
        />
      </div>
    </div>
  );
};

export default LeadersStats;
