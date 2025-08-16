import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { IoMdClose, IoMdContacts } from "react-icons/io";

const OverlayButtonsMobile = () => {
  const [open, setOpen] = useState(false);

  const buttons = [
    { href: "https://wa.me/+917012981845", icon: <FaWhatsapp />, color: "#25D366" },
    { href: "https://instagram.com/plexcihub", icon: <FaInstagram />, color: "#E1306C", gradient: true },
    { href: "https://www.facebook.com/share/14Fkb24gKzL/?mibextid=wwXIfr", icon: <FaFacebookF />, color: "#1877F2" },
    { href: "tel:+917012981845", icon: <FaPhone />, color: "#213869" },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 md:hidden z-50">
      <AnimatePresence>
        {open &&
          buttons.map((button, idx) => (
            <motion.a
              key={idx}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3, delay: idx * 0.05, type: "spring", stiffness: 300 }}
              style={{
                background: button.gradient
                  ? "linear-gradient(to bottom right, #833ab420, #fd1d1d20, #fcb04520)"
                  : `${button.color}30`,
              }}
              className="p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
            >
              <div
                style={{ color: button.gradient ? "#E1306C" : button.color }}
                className="text-2xl transition-colors duration-300"
              >
                {button.icon}
              </div>
            </motion.a>
          ))}
      </AnimatePresence>

      {/* Main Connect Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl text-white text-xl font-bold hover:shadow-blue-400 hover:animate-pulse transition-all overflow-visible"
      >
        {open ? <IoMdClose size={28} /> : <IoMdContacts size={28} />}
        {/* Glow behind the button */}
        <span className="absolute -z-10 w-full h-full rounded-full bg-white opacity-10 animate-ping"></span>
      </motion.button>
    </div>
  );
};

export default OverlayButtonsMobile;
