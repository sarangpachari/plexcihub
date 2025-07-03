import React from "react";
import BlurText from "./react-bits/BlurText";

const HeroSection = () => {
  return (
    <div className="min-h-screen text-white w-full h-screen flex justify-center items-center p-5">
      <BlurText
        text="Isn't this so cool?!"
        delay={700}
        animateBy="words"
        direction="bottom"
        className="text-5xl sm:text-6xl  md:text-7xl lg:text-8xl xl:text-9xl mb-8 font-semibold text-gray-200 leading-18 px-6"
      />
    </div>
  );
};

export default HeroSection;
