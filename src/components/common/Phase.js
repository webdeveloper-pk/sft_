import React from "react";
import CircularSlider from "@fseehawer/react-circular-slider";

const Phase = ({ value, phase, title, description }) => {
  return (
    <div className="relative">
      <CircularSlider
        label="."
        labelColor="#00000000"
        knobColor="#01c887"
        progressColorFrom="#A6E1CB"
        progressColorTo="#00C887"
        progressSize={16}
        trackColor="#f2f2f2"
        trackSize={6}
        data={[]}
        dataIndex={value}
        hideKnob
        min={0}
        max={100}
        width={295}
        knobDraggable={false}
        labelFontSize="16px"
        valueFontSize="24px"
      />
      <div className="absolute top-20 left-0 pl-12 md:-mt-4 lg:-mt-2 xl:-mt-2 w-[90%] z-50">
        <p className="uppercase text-light-green font-bold w-[100%] text-left text-sm">
          {phase}
        </p>
        <p className="uppercase text-light-green text-xl w-[100%] text-left text-base md:text-lg xl:text-xl">
          {title}
        </p>
        <p className="mt-3 text-xs text-white w-[100%] text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Phase;
