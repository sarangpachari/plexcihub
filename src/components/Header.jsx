import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";
import TrueFocus from "./react-bits/TrueFocus";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Come back to Home", href: "#home" },
    { label: "Who We Are?", href: "#portfolio" },
    { label: "Offerings", href: "#services" },
    // { label: "Reviews", href: "#reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-50/30 shadow backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="pt-4">
          <TrueFocus
            sentence="PlexCi Hub"
            manualMode={false}
            blurAmount={4}
            borderColor="black"
            animationDuration={1}
            pauseBetweenAnimations={0.5}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent 
                 transition-all duration-300 hover:opacity-90 group"
            >
              {link.label}
              {/* Cool underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <motion.div
          className="md:hidden text-black text-2xl cursor-pointer"
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: mobileOpen ? 180 : 0, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 py-6 bg-gradient-to-br from-white via-gray-200 mx-4 to-white text-gray-800 flex rounded-4xl flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="hover:text-gray-500 transition text-lg"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
