"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Button } from "antd";
import {
  CodeOutlined,
  RocketOutlined,
  BulbOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();

  const yText = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scaleCards = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const rotateCards = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.3,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center 
      px-4 sm:px-6 md:px-12 lg:px-20 pt-20  /* ✅ pushes down below navbar */
      bg-gradient-to-b from-[#3d53a0] via-[#7091e6] to-[#8697c4] 
      text-white overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#3d53a0] via-[#7091e6] to-[#8697c4]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%", opacity: 0.2, zIndex: 0 }}
      />

      {/* Floating Orbs */}
      <motion.div
        style={{ y: yOrb1 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-10 left-5 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 
        bg-white/20 blur-[100px] rounded-full"
      />
      <motion.div
        style={{ y: yOrb2 }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-16 right-8 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 
        bg-[#3d53a0]/30 blur-[120px] rounded-full"
      />

      {/* Hero Content */}
      <div
        className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between 
      gap-8 md:gap-16 relative z-10"
      >
        {/* Left Content */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1
            className="text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-6 
          bg-clip-text text-transparent bg-gradient-to-r from-white via-[#ede8f5] to-[#adbbda] drop-shadow-lg"
          >
            Fueling Your Growth,
            <br className="hidden sm:block" /> Pixel by Pixel.
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/85 mb-8 leading-relaxed drop-shadow-md">
            At <span className="font-bold">Plex Ci Hub</span>, we build websites
            that go beyond aesthetics. Every pixel, every line of code, crafted
            to scale your business globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              type="primary"
              size="large"
              className="!bg-gradient-to-r !from-[#3d53a0] !to-[#7091e6] !rounded-xl !px-6 !py-3 
                         !shadow-lg hover:!shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Grow Your Business
            </Button>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          style={{ scale: scaleCards, rotate: rotateCards }}
          className="relative grid grid-cols-6 grid-rows-6 gap-3 sm:gap-6 w-full md:w-1/2"
        >
          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-3 row-span-3"
          >
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="h-full">
              <div
                className="h-full bg-white/15 backdrop-blur-2xl border border-white/10 
              rounded-xl sm:rounded-3xl shadow-md sm:shadow-xl p-4 flex flex-col justify-center items-center"
              >
                <RocketOutlined className="text-3xl sm:text-5xl mb-2 sm:mb-4 text-[#70a1e6]" />
                <h3 className="font-bold text-sm sm:text-lg">Fast Websites</h3>
                <p className="text-white/70 text-xs sm:text-sm text-center mt-2">
                  Optimized & lightning-fast performance
                </p>
              </div>
            </Tilt>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-3 row-span-6"
          >
            <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} className="h-full">
              <div
                className="h-full bg-gradient-to-b from-[#7091e6] to-[#3d53a0] rounded-xl sm:rounded-3xl 
              shadow-xl sm:shadow-3xl p-4 sm:p-8 flex flex-col justify-center items-center"
              >
                <CodeOutlined className="text-4xl sm:text-6xl mb-3 sm:mb-6 text-white" />
                <h3 className="font-bold text-base sm:text-2xl">Clean Code</h3>
                <p className="text-white/90 text-xs sm:text-sm text-center mt-3">
                  Modern, scalable, and maintainable solutions
                </p>
              </div>
            </Tilt>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-3 row-span-3"
          >
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="h-full">
              <div
                className="h-full bg-gradient-to-br from-[#8697c4] via-[#adbbda] to-[#7091e6]/50 
              backdrop-blur-lg rounded-xl sm:rounded-3xl shadow-md sm:shadow-xl 
              p-4 flex flex-col justify-center items-center"
              >
                <BulbOutlined className="text-3xl sm:text-5xl mb-2 sm:mb-4 text-white" />
                <h3 className="font-bold text-sm sm:text-lg">
                  Creative Design
                </h3>
                <p className="text-white/85 text-xs sm:text-sm text-center mt-2">
                  UI/UX that inspires & converts
                </p>
              </div>
            </Tilt>
          </motion.div>

          {/* Floating Overlay Card */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 w-32 sm:w-52"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <div
                className="bg-white/20 backdrop-blur-xl rounded-lg sm:rounded-2xl border border-white/10 
              shadow-lg sm:shadow-2xl p-3 sm:p-6 flex flex-col items-center"
              >
                <GlobalOutlined className="text-2xl sm:text-4xl mb-1 sm:mb-2 text-[#3d53a0]" />
                <h3 className="font-semibold text-xs sm:text-md">
                  Global Reach
                </h3>
              </div>
            </Tilt>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
