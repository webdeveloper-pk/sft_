import React, { useRef, useEffect, useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";

const Phase = ({ value, phase, title, description }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  // eslint-disable-next-line
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        await delay(1300);
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "-100px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      // eslint-disable-next-line
      if (ref.current) {
        // eslint-disable-next-line
        observer.unobserve(ref.current);
      }
    };
    // eslint-disable-next-line
  }, [ref, delay]);

  return (
    <div className="relative" ref={ref}>
      <>
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
          dataIndex={isVisible && isVisible ? value : 0}
          hideKnob
          min={0}
          max={100}
          knobDraggable={false}
          labelFontSize="16px"
          valueFontSize="24px"
        />
        <div className="absolute top-20 left-0 pl-8 md:pl-12 md:-mt-4 lg:-mt-2 xl:-mt-2 w-[90%] z-50">
          <p className="uppercase text-light-green font-bold w-[100%] text-center md:text-left text-sm">
            {phase}
          </p>
          <p className="uppercase text-light-green text-xl w-[100%] text-center md:text-left text-base md:text-lg xl:text-xl">
            {title}
          </p>
          <p className="mt-3 text-xs text-white w-[100%] text-center md:text-left">
            {description}
          </p>
        </div>
      </>
    </div>
  );
};

export default Phase;
