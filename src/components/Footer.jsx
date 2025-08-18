import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import Logo from "../assets/logo590.png";

const Footer = () => {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* Animated Gradient Background with Brand Colors */}
      <motion.div
        animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -z-10 
        bg-gradient-to-r from-[#3d53a0] via-[#7091e6] via-[#8697c4] to-[#adbbda] 
        bg-[length:200%_200%]"
      />

      {/* Floating Soft Blobs */}
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#ede8f5]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-[#7091e6]/20 rounded-full blur-3xl"
      />

      {/* Footer Content */}
      <div className="relative z-10 bg-white/10 backdrop-blur-2xl py-12 px-6 sm:px-12 md:px-20 flex flex-col items-center text-center gap-6">
        {/* Logo */}
        <img src={Logo} alt="Plex Ci Hub" className="w-28 sm:w-36 mb-4" />

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-6 text-[#ede8f5]">
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
        <div className="flex gap-6 mt-4 text-2xl">
          <a
            href="#"
            className="hover:text-[#3d53a0] transition-transform transform hover:scale-110"
          >
            <FiFacebook />
          </a>
          <a
            href="#"
            className="hover:text-[#7091e6] transition-transform transform hover:scale-110"
          >
            <FiInstagram />
          </a>
          <a
            href="#"
            className="hover:text-[#8697c4] transition-transform transform hover:scale-110"
          >
            <FiTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-[#ede8f5] text-sm">
          &copy; {new Date().getFullYear()} Plex Ci Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
