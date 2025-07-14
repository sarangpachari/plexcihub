import React from "react";
import BlurText from "./react-bits/BlurText";

const HeroSection = () => {
  return (
    <div id="home" className="min-h-screen w-full flex justify-center items-center p-4 text-center text-black">
      <BlurText
        text="Isn't this so cool?!"
        delay={700}
        animateBy="words"
        direction="bottom"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-gray-400 leading-tight px-4 sm:px-8"
      />
    </div>
  );
};

export default HeroSection;
