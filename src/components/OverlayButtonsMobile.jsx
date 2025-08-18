import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { IoMdClose, IoMdContacts } from "react-icons/io";

const OverlayButtonsMobile = () => {
  const [open, setOpen] = useState(false);

  const buttons = [
    { href: "https://wa.me/+917012981845", icon: <FaWhatsapp /> },
    { href: "https://instagram.com/plexcihub", icon: <FaInstagram /> },
    { href: "https://www.facebook.com/share/14Fkb24gKzL/?mibextid=wwXIfr", icon: <FaFacebookF /> },
    { href: "tel:+917012981845", icon: <FaPhone /> },
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
              className="p-4 rounded-full shadow-xl flex items-center justify-center
                transition-all duration-300 hover:scale-110"
              style={{
                background: "#adbbda", // Light Lavender
              }}
            >
              <div
                style={{ color: "#3d53a0" }} // Primary Deep Blue
                className="text-2xl transition-colors duration-300 hover:text-[#7091e6]" // Accent Blue on hover
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
        className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl text-white text-xl font-bold hover:shadow-blue-400 transition-all overflow-visible"
        style={{
          background: "linear-gradient(135deg, #3d53a0, #7091e6)", // Deep Blue → Accent Blue gradient
        }}
      >
        {open ? <IoMdClose size={28} /> : <IoMdContacts size={28} />}
        {/* Glow behind the button */}
        <span className="absolute -z-10 w-full h-full rounded-full bg-[#3d53a0]/20 animate-ping"></span>
      </motion.button>
    </div>
  );
};

export default OverlayButtonsMobile;
