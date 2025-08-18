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
      {/* 🌈 Animated Gradient Background */}
      <motion.div
        animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -z-10 
        bg-gradient-to-r from-[#3d53a0] via-[#7091e6] via-[#8697c4] to-[#adbbda] 
        bg-[length:200%_200%]"
      />

      {/* ✨ Floating Blobs */}
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

      {/* 🌐 Footer Content */}
      <div className="relative z-10 bg-white/10 backdrop-blur-2xl py-12 px-6 sm:px-12 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* 🟦 Logo & About */}
          <div>
            <img
              src={Logo}
              alt="Plex Ci Hub"
              className="w-28 sm:w-36 mx-auto sm:mx-0 mb-4"
            />
            <p className="text-[#ede8f5] text-sm leading-relaxed">
              Plex Ci Hub builds modern, responsive, and high-performing
              websites to help your business grow digitally.
            </p>
          </div>

          {/* 📌 Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[#ede8f5]">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* 🛠 Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-[#ede8f5]">
              <li>Custom Website Development</li>
              <li>E-Commerce Solutions</li>
              <li>Business & Billing Software</li>
              <li>Portfolio & Personal Websites</li>
              <li>Web App Maintenance & Support</li>
            </ul>
          </div>

          {/* 📩 Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-[#ede8f5] text-sm mb-3">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-black w-full sm:w-auto flex-1"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-white text-[#3d53a0] font-semibold rounded-lg hover:scale-105 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* 📞 Contact Info */}
        <div className="mt-10 flex flex-col sm:flex-row sm:justify-between items-center gap-6 text-[#ede8f5] text-sm">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
            <div className="flex items-center gap-2">
              <FiMapPin /> Kalpetta, Wayanad, Kerala
            </div>
            <div className="flex items-center gap-2">
              <FiPhone /> +91 7012 981 845
            </div>
            <div className="flex items-center gap-2">
              <FiMail /> plexcihub@gmail.com
            </div>
          </div>

          {/* 🔗 Socials */}
          <div className="flex gap-6 text-xl">
            <a
              href="#"
              className="hover:text-[#3d53a0] hover:scale-110 transition"
            >
              <FiFacebook />
            </a>
            <a
              href="#"
              className="hover:text-[#7091e6] hover:scale-110 transition"
            >
              <FiInstagram />
            </a>
            <a
              href="#"
              className="hover:text-[#8697c4] hover:scale-110 transition"
            >
              <FiTwitter />
            </a>
          </div>
        </div>

        {/* ⚖️ Copyright */}
        <p className="mt-8 text-center text-[#ede8f5] text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Plex Ci Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
