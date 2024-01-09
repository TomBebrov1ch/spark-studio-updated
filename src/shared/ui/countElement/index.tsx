import React from "react";
import { Slide } from "react-awesome-reveal";
import CountUp from "react-countup";

interface CountElementProps {
  end: number;
  duration: number;
  text: string;
  color: string;
  direction: any;
  marginTop: string;
}

export const CountElement: React.FC<CountElementProps> = ({
  end,
  duration,
  text,
  color,
  direction,
  marginTop,
}) => {
  return (
    <>
      <Slide
        className="text-center flex flex-col"
        direction={direction}
        triggerOnce
      >
        <span
          className={`flex flex-col text-5xl font-macherie ${marginTop} ${color}`}
        >
          <CountUp end={end} duration={duration} />
        </span>
        <span className="mt-4 font-macherie text-custom-black text-2xl text-center">
          {text}
        </span>
      </Slide>
    </>
  );
};
