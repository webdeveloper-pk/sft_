import React from "react";
import CircularSlider from "@fseehawer/react-circular-slider";

const DashboardCircularSlider = ({
  labelColor,
  progressColorFrom,
  progressColorTo,
  dataIndex,
}) => {
  return (
    <div>
      <CircularSlider
        label="."
        labelColor={labelColor}
        knobColor="#f12727"
        progressColorFrom={progressColorFrom}
        progressColorTo={progressColorTo}
        dataIndex={dataIndex}
        appendToValue="%"
        progressSize={6}
        trackColor="#f2f2f2"
        trackSize={6}
        hideKnob
        min={0}
        max={100}
        width={65}
        knobDraggable={false}
        labelFontSize="2px"
        valueFontSize="14px"
        labelBottom={true}
      />
    </div>
  );
};

export default DashboardCircularSlider;
