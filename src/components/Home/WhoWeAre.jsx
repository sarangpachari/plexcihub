"use client";
import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "../../assets/logo590.png";
import "../../styles/WhoWeAre.css";

const WhoWeAre = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animate gradient bottom → top (grey → white)
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );

  // 📌 Scale "Who We Are" text (1x → 1.5x at 100%)
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // 🎨 Animate color white → gray
  const textColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#fff", "#9ca3af81"]
  );
  // Tailwind's gray-400 = #9ca3af

  return (
    <section
      id="whoweare"
      ref={containerRef}
      className="relative h-[300vh] bg-black"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 space-y-8 md:space-y-12">
        {/* Top Left Title */}
        <div className="w-full flex justify-center sm:justify-end">
          <motion.h1
            style={{ scale: scaleText, color: textColor }} // 👈 added color transform
            className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold origin-center sm:origin-left text-center sm:text-left"
          >
            Who We Are
          </motion.h1>
        </div>

        {/* Center Glassy Logo Card */}
        <div className="w-full flex justify-center mt-6">
          <Tilt
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            tiltAngleXInitial={15} // 👈 default tilt on X-axis
            tiltAngleYInitial={-40}
            perspective={1000}
            transitionSpeed={800}
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 
                        bg-white/10 backdrop-blur-md border border-white/20 
                        rounded-2xl shadow-lg flex items-center justify-center 
                        hover:shadow-white/40"
          >
            <img
              src={logo}
              alt="PlexCi Hub Logo"
              className="w-20 sm:w-28 md:w-32 lg:w-40"
            />
          </Tilt>
        </div>

        {/* Bottom Paragraph with scroll-based text fill */}
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-center md:text-right">
          <motion.p
            className="scroll-fill-text text-sm sm:text-base md:text-lg lg:text-xl 
                        leading-relaxed sm:leading-loose tracking-wide md:text-right uppercase"
            style={{ backgroundPositionY: backgroundPosition }}
          >
            At PlexCi Hub, we are driven by innovation, passion, and the mission
            to empower businesses through cutting-edge solutions. Our team
            believes in creating impactful digital experiences, combining
            creativity with technology to deliver outstanding results.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
