"use client";
import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "../../assets/logofull.png";
import "../../styles/WhoWeAre.css";

const WhoWeAre = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundPosition = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // slightly smaller scale
  const textColor = useTransform(scrollYProgress, [0, 1], ["#fff", "#9ca3af81"]);

  return (
    <section
      id="whoweare"
      ref={containerRef}
      className="relative h-[200vh] bg-black" // reduced section height
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 space-y-6 md:space-y-8">
        
        {/* Top Left Title */}
        <div className="w-full flex justify-center sm:justify-end">
          <motion.h1
            style={{ scale: scaleText, color: textColor }}
            className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold origin-center sm:origin-left  text-justify sm:text-left"
          >
            Who We Are
          </motion.h1>
        </div>

        {/* Center Glassy Logo Card */}
        <div className="w-full flex justify-center mt-20">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            tiltAngleXInitial={10}
            tiltAngleYInitial={-20}
            perspective={800}
            transitionSpeed={700}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56
                        bg-white/10 backdrop-blur-md border border-white/20 
                        rounded-2xl shadow-lg flex items-center justify-center 
                        hover:shadow-white/30"
          >
            <img src={logo} alt="PlexCi Hub Logo" className="w-full" />
          </Tilt>
        </div>

        {/* Bottom Paragraph */}
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-center md:text-right">
          <motion.p
            className="scroll-fill-text text-base leading-relaxed sm:leading-loose tracking-wide md:text-center uppercase"
            style={{ backgroundPositionY: backgroundPosition }}
          >
            At Plex CI Hub, we are a leading website development company in
            Wayanad, Kerala, driven by innovation and a passion for digital
            excellence. Our mission is to empower businesses with modern web
            design, full-stack development, UI/UX design, e-commerce solutions,
            and branding services that inspire growth and success. We blend
            creativity, technology, and strategy to craft impactful digital
            experiences — from sleek portfolio websites to dynamic web
            applications — delivering results that help your brand stand out
            online. Whether you’re a startup or an established enterprise, Plex
            CI Hub transforms ideas into powerful, high-performing digital
            solutions built to scale.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
