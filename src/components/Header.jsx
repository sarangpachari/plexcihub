import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";
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

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 
        backdrop-blur-xl shadow-lg rounded-3xl
        transition-all duration-500 ease-in-out
        ${scrollY > 50 ? "w-[85%] py-2 bg-[#ede8f5]/95" : "w-[92%] py-4 bg-[#ede8f5]/70"}
        ${mobileOpen ? "bg-[#ede8f5]" : ""}
      `}
    >
      <div className={`flex items-center justify-between px-6 md:px-10 transition-all duration-500`}>
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
        <motion.div
          className={`md:hidden text-[#3d53a0] cursor-pointer transition-all duration-500 ${
            scrollY > 50 ? "text-xl" : "text-2xl"
          }`}
          initial={{ rotate: 0, scale: 1 }}
          animate={{
            rotate: mobileOpen ? 180 : 0,
            scale: mobileOpen ? 1.2 : 1,
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#3d53a0]/40 backdrop-blur-sm z-40 rounded-3xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Floating Menu */}
            <motion.div
              key="mobileMenu"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50"
            >
              <div className="bg-[#ede8f5] rounded-3xl shadow-2xl py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    variants={itemVariants}
                    href={link.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-2xl font-semibold transition ${
                      scrollY > 50
                        ? "text-base text-[#3d53a0] hover:text-[#7091e6]"
                        : "text-lg text-[#3d53a0] hover:text-[#7091e6]"
                    } hover:bg-[#adbbda]`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
