import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import TrueFocus from "./react-bits/TrueFocus";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Come back to Home", href: "#home" },
    { label: "Who We Are?", href: "#portfolio" },
    { label: "Offerings", href: "#services" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 
        backdrop-blur-xl shadow-lg rounded-3xl
        transition-all duration-500 ease-in-out
        ${scrollY > 50 ? "w-[85%] py-2 bg-[#ede8f5]/95" : "w-[92%] py-4 bg-[#ede8f5]/70"}
        ${mobileOpen ? "bg-[#ede8f5]" : ""}`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 transition-all duration-500">
        {/* Logo */}
        <div className="pt-1">
          <TrueFocus
            sentence="PlexCi Hub"
            manualMode={false}
            blurAmount={4}
            borderColor="#3d53a0"
            animationDuration={1}
            pauseBetweenAnimations={0.5}
          />
        </div>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex items-center space-x-8 font-medium transition-all duration-500 ${
            scrollY > 50 ? "text-base" : "text-lg"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[#3d53a0] transition-all duration-300 hover:text-[#7091e6] group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7091e6] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div
          className={`md:hidden text-[#3d53a0] cursor-pointer transition-all duration-500 ${
            scrollY > 50 ? "text-xl" : "text-2xl"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </div>
      </div>

      {/* Mobile Menu with exit animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }} // exit: fade out and move up
            transition={{ duration: 0.35 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50"
          >
            <div className="bg-[#8697c4] rounded-3xl shadow-2xl py-6 flex flex-col space-y-4 overflow-hidden">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-6 py-3 rounded-2xl font-semibold text-[#ede8f5] text-lg transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
