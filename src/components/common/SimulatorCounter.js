import React, { useState } from "react";

const SimulatorCounter = ({ title }) => {
  const [counter, setCounter] = useState(1);

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p className="text-base text-lighter-gray2 font-bold mb-3">{title}</p>
      <div className="flex flex-row justify-between items-center border border-simulator-counter rounded-lg px-3 py-1">
        <button
          className="text-light-green border border-transparent p-0 bg-transparent  font-bold text-base"
          onClick={onDecrement}
        >
          -
        </button>
        <span className="text-sm text-lighter-gray2 font-semibold">
          {counter}
        </span>
        <button
          className="text-light-green border border-transparent p-0 bg-transparent font-bold  text-base"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SimulatorCounter;
