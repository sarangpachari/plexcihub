import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Logo from "../assets/logo590.png"; 

const Footer = () => {
  return (
    <footer className="relative w-full text-white">
      {/* Animated Background */}
      <motion.div
        animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900 via-pink-700 to-red-400 bg-[length:200%_200%]"
      />

      {/* Footer Content */}
      <div className="relative z-10 bg-white/20 backdrop-blur-3xl py-12 px-6 sm:px-12 md:px-20 flex flex-col items-center text-center gap-6">
        {/* Logo */}
        <img src={Logo} alt="Plex Ci Hub" className="w-32 sm:w-40 mb-4" />

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-6 text-gray-100">
          <div className="flex items-center gap-2">
            <FiMapPin /> <span>Kalpetta, Wayanad, Kerala, India</span>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone /> <span>+91 7012 981 845</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail /> <span>plexcihub@gmail.com</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 text-xl">
          <a href="#" className="hover:text-blue-400 transition"><FiFacebook /></a>
          <a href="#" className="hover:text-pink-400 transition"><FiInstagram /></a>
          <a href="#" className="hover:text-blue-500 transition"><FiTwitter /></a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-gray-200 text-sm">
          &copy; {new Date().getFullYear()} Plex Ci Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
