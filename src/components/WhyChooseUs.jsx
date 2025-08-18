"use client";
import React from "react";
import { motion } from "framer-motion";
import { CodeOutlined } from "@ant-design/icons";

const reasons = [
  "Custom-built, responsive, and fast-loading websites",
  "SEO-friendly development for better Google ranking",
  "Modern stacks (React, Vite, Next.js, Node.js)",
  "Ongoing support, updates & maintenance",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 15 },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen text-white px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* 🔮 Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3d53a0] via-[#7091e6] to-[#3d53a0] animate-gradient opacity-90"></div>

      {/* 🔮 Glowing Orbs */}
      <div className="absolute -top-32 -left-32 w-[280px] sm:w-[350px] md:w-[450px] h-[280px] sm:h-[350px] md:h-[450px] bg-[#8697c4] rounded-full blur-[160px] opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[280px] sm:w-[350px] md:w-[450px] h-[280px] sm:h-[350px] md:h-[450px] bg-[#adbbda] rounded-full blur-[160px] opacity-50 animate-pulse delay-500"></div>

      {/* ✨ Extra Floating Glows */}
      <div className="absolute top-1/3 left-5 sm:left-10 w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] bg-[#ede8f5] rounded-full blur-[180px] opacity-30 animate-bounce"></div>
      <div className="absolute bottom-1/4 right-10 sm:right-20 w-[220px] sm:w-[280px] md:w-[350px] h-[220px] sm:h-[280px] md:h-[350px] bg-[#7091e6] rounded-full blur-[200px] opacity-25 animate-pulse"></div>

      {/* 🌌 Gradient Lines */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse delay-1000"></div>

      {/* Title */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 text-center drop-shadow-lg px-2"
      >
        Why Choose <span className="text-[#ede8f5]">Plex Ci Hub</span> for Web Development?
      </motion.h2>

      {/* Reasons */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-5xl w-full"
      >
        {reasons.map((reason, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(255,255,255,0.35)",
            }}
            viewport={{ once: false, amount: 0.4 }}
            className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base md:text-lg lg:text-xl bg-white/10 hover:bg-white/20 transition-colors duration-300 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-md"
          >
            <CodeOutlined className="text-[#ede8f5] text-lg sm:text-xl md:text-2xl drop-shadow-md mt-1" />
            {reason}
          </motion.li>
        ))}
      </motion.ul>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="relative z-10 mt-10 sm:mt-12"
      >
        <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#3d53a0] font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:scale-110 hover:shadow-white/50 transition-all duration-300 text-sm sm:text-base md:text-lg">
          Start Your Project
        </button>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
