"use client";
import React, { useState, useEffect } from "react";
import logo from "../assets/logofull.png";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = ["Why Choose us", "What we offer", "Policies", "Contact"];

  // 👇 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-black text-white shadow-lg rounded-b-4xl"
          : "bg-transparent text-black"
      }`}
    >
      <div className="px-6 md:px-20 mx-auto flex items-center justify-between py-6">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <a href="#">
            <img
              src={logo}
              className={`md:w-20 w-15 ${isScrolled ? "" : "invert"}`}
              alt="logo"
            />
          </a>
          <a href="#">
            <span className="text-xl hidden font-semibold">
              PlexCi Hub
            </span>
          </a>
        </div>

        {/* Center - Title (only visible on mobile) */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
          
            <span className="text-lg font-semibold"><a href="#">PlexCi Hub</a></span>
          
        </div>

        {/* Center - Nav Links (desktop only) */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
              className="uppercase font-medium hover:opacity-75 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right - Button & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop button */}
          <button
            className={`hidden md:inline uppercase px-5 py-2 transition border ${
              isScrolled
                ? "bg-white text-black border-white hover:bg-black hover:text-white"
                : "bg-black text-white border-black hover:bg-white hover:text-black"
            }`}
          >
            Grow Your Business
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setIsOpen(true)}
          >
            <HiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 bg-black flex flex-col items-center justify-center"
        initial={{ y: "-100%", opacity: 0, scale: 0.95 }}
        animate={
          isOpen
            ? { y: 0, opacity: 1, scale: 1 }
            : { y: "-100%", opacity: 0, scale: 0.95 }
        }
        transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.5 }}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <HiX size={32} />
        </button>

        {/* Mobile nav links */}
        <motion.div
          className="flex flex-col items-center space-y-10"
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
              className="uppercase text-3xl font-bold text-white hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {link}
            </motion.a>
          ))}
          <motion.button
            className="bg-white text-black uppercase px-8 py-3 rounded-lg font-semibold border border-black hover:bg-transparent hover:text-white hover:border-white transition mt-4"
            onClick={() => setIsOpen(false)}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          >
            Grow Your Business
          </motion.button>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
