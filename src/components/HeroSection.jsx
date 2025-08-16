import React from "react";
import BlurText from "./react-bits/BlurText";
import Landing1 from "../assets/landing1.png"

const HeroSection = () => {
  return (
    <div id="home" className="min-h-screen w-full flex md:flex-row flex-col justify-center items-center p-4 text-center text-black">
      <BlurText
        text="Isn't this so cool?!"
        delay={700}
        animateBy="words"
        direction="bottom"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-gray-400 leading-tight px-4 sm:px-8"
      />
      <img src={Landing1} className="w-sm md:w-lg lg:w-2xl" alt="" />
    </div>
  );
};

export default HeroSection;
