"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Marquee animation
  const marquee = {
    animate: {
      x: ["0%", "-100%"], // move from 0 → -100%
      transition: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
    },
  };

  const logosText = "PLEXCI HUB   "; // Spaces for gap

  return (
    <footer className="relative bg-black text-white py-6 md:py-26 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Marquee Background Text */}
      <div className="absolute top-1/4 left-0 w-full whitespace-nowrap select-none pointer-events-none">
        <motion.div
          className="flex text-white/10 font-bold uppercase text-[20rem] md:text-[16rem] tracking-widest"
          variants={marquee}
          animate="animate"
        >
          {Array(20)
            .fill(logosText)
            .map((text, i) => (
              <span key={i} className="mr-12">
                {text}
              </span>
            ))}
        </motion.div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        
        {/* About */}
        <motion.div custom={0} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: false }}>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm">
            PlexCi Hub is a web development company dedicated to creating responsive, high-quality websites and digital solutions that help businesses grow.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div custom={1} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: false }}>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#why-choose-us" className="hover:text-white transition">Why Choose Us</a></li>
            <li><a href="#what-we-offer" className="hover:text-white transition">What We Offer</a></li>
            <li><a href="#policies" className="hover:text-white transition">Policies</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div custom={2} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: false }}>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">Kalpetta, Wayanad, Kerala, India</p>
          <p className="text-gray-400 text-sm mt-2">Email: plexcihub@gmail.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 70129 81845</p>
        </motion.div>

        {/* Social Media */}
        <motion.div custom={3} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: false }}>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#"><FaFacebookF className="hover:text-white transition" /></a>
            <a href="#"><FaTwitter className="hover:text-white transition" /></a>
            <a href="#"><FaInstagram className="hover:text-white transition" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-white transition" /></a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 text-center text-gray-500 text-sm mt-12"
        custom={4}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } }}
        viewport={{ once: false }}
      >
        © 2025 PlexCi Hub. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
