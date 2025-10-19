"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../styles/WhoWeAre.css";
import LogoLoop from "../react-bits/LogoLoop";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiReact,
  SiFramer,
  SiFigma,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";

const techLogos = [
  { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
];

const OurStack = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale background text from 1 → 2
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative min-h-[250vh] bg-black">
      {/* Sticky wrapper = keeps logos fixed during scroll */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background Text */}
        <motion.h1
          style={{ scale: textScale }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     text-white font-bold opacity-10 select-none pointer-events-none uppercase
                     text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] xl:text-[16rem]"
        >
          OUR STACK
        </motion.h1>

        {/* Logo Loop */}
        <div className="w-full flex justify-center items-center relative z-10 px-4 sm:px-6 md:px-12 lg:px-20">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={150} // Adjusted base size
            gap={80} // Adjusted gap for smaller screens
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000"
            ariaLabel="Technology"
            className="text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStack;
