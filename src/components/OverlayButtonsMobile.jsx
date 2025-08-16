import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { IoMdClose, IoMdContacts } from "react-icons/io";

const OverlayButtonsMobile = () => {
  const [open, setOpen] = useState(false);

  const buttons = [
    {
      href: "https://wa.me/+917012981845",
      icon: <FaWhatsapp />,
      color: "#25D366",
      bgHover: "#25D366",
    },
    {
      href: "https://instagram.com/plexcihub",
      icon: <FaInstagram />,
      color: "#E1306C",
      bgHover: "",
      gradient: true,
    },
    {
      href: "https://www.facebook.com/share/14Fkb24gKzL/?mibextid=wwXIfr",
      icon: <FaFacebookF />,
      color: "#1877F2",
      bgHover: "#1877F2",
    },
    {
      href: "tel:+917012981845",
      icon: <FaPhone />,
      color: "#213869",
      bgHover: "#213869",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 md:hidden z-50">
      {/* Animated buttons */}
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
              className={`p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 ${
                button.gradient
                  ? "bg-gradient-to-br from-[#833ab420] via-[#fd1d1d20] to-[#fcb04520] hover:from-[#E1306C] hover:via-[#E1306C] hover:to-[#E1306C]"
                  : `bg-[${button.color}30] hover:bg-[${button.bgHover}]`
              }`}
            >
              <div
                className={`text-2xl transition-colors duration-300 ${
                  button.gradient
                    ? "text-[#E1306C] hover:text-white"
                    : `text-[${button.color}] hover:text-white`
                }`}
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
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl text-white text-xl font-bold hover:shadow-blue-400 hover:animate-pulse transition-all"
      >
        {open ? <IoMdClose size={28} /> : <IoMdContacts size={28} />}
        {/* Glow effect */}
        <span className="absolute w-full h-full rounded-full bg-white opacity-10 animate-ping"></span>
      </motion.button>
    </div>
  );
};

export default OverlayButtonsMobile;
