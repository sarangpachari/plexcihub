"use client";
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { CodeOutlined, RocketOutlined, ToolOutlined, SmileOutlined } from "@ant-design/icons";

const reasons = [
  { icon: <CodeOutlined />, title: "Fast & Responsive", desc: "Custom-built, blazing-fast websites that scale seamlessly." },
  { icon: <RocketOutlined />, title: "SEO Optimized", desc: "Top Google ranking with SEO-friendly development." },
  { icon: <ToolOutlined />, title: "Modern Tech Stack", desc: "React, Vite, Next.js, Node.js for robust solutions." },
  { icon: <SmileOutlined />, title: "Continuous Support", desc: "Ongoing updates, maintenance & 24/7 support." },
  { icon: <CodeOutlined />, title: "Secure & Scalable", desc: "Web apps built with security and scalability in mind." },
  { icon: <RocketOutlined />, title: "Fast Deployment", desc: "Cloud-ready websites deployed in record time." },
  { icon: <ToolOutlined />, title: "Pro UI/UX", desc: "Cutting-edge, accessible design for better conversions." },
  { icon: <SmileOutlined />, title: "Global Reach", desc: "Websites designed for worldwide audiences." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 15 },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen text-white 
      px-4 sm:px-6 md:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden">
      
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#3d53a0] via-[#7091e6] to-[#adbbda] animate-gradient opacity-90"></div>

      {/* Glowing Orbs */}
      <div className="absolute -top-32 -left-32 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-[#8697c4] rounded-full blur-[140px] opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] bg-[#adbbda] rounded-full blur-[160px] opacity-50 animate-pulse delay-500"></div>

      {/* Title */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: false, amount: 0.4 }}
        className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-12 text-center drop-shadow-lg px-2"
      >
        Why Choose <span className="text-[#ede8f5]">Plex Ci Hub</span>?
      </motion.h2>

      {/* Cards Grid */}
      <motion.div
        className="relative z-10 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} className="w-full h-full">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl 
                p-4 sm:p-5 md:p-6 flex flex-col items-center text-center hover:bg-white/20 transition-colors duration-300">
                <span className="text-[#ede8f5] text-2xl sm:text-3xl mb-2 sm:mb-3 drop-shadow-md">
                  {reason.icon}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                  {reason.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">
                  {reason.desc}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Overlay Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
        className="absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 w-36 sm:w-48 z-20"
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <div className="bg-gradient-to-r from-[#7091e6] to-[#3d53a0] backdrop-blur-xl rounded-2xl shadow-2xl p-4 flex flex-col items-center">
            <RocketOutlined className="text-3xl sm:text-4xl mb-1 sm:mb-2 text-white" />
            <h3 className="font-semibold text-sm sm:text-md text-white">Global Reach</h3>
          </div>
        </Tilt>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="relative z-10 mt-12 sm:mt-16"
      >
        <button className="px-7 sm:px-10 py-3 sm:py-4 bg-white text-[#3d53a0] font-bold rounded-2xl shadow-lg hover:scale-105 hover:shadow-white/50 transition-all duration-300 text-base sm:text-lg md:text-xl">
          Start Your Project
        </button>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
