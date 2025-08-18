import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";

const OverlayButtons = () => {
  const buttons = [
    { href: "https://wa.me/+917012981845", icon: <FaWhatsapp /> },
    { href: "https://instagram.com/plexcihub", icon: <FaInstagram /> },
    { href: "https://www.facebook.com/share/14Fkb24gKzL/?mibextid=wwXIfr", icon: <FaFacebookF /> },
    { href: "tel:+917012981845", icon: <FaPhone /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="hidden md:fixed bottom-8 right-5 md:flex flex-col gap-3"
    >
      {buttons.map((button, idx) => (
        <a
          key={idx}
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full shadow-lg flex items-center justify-center
                     transition-all duration-300 hover:scale-110
                     bg-[#adbbda] hover:bg-[#8697c4]"
        >
          <div className="text-xl text-[#3d53a0] hover:text-[#7091e6] transition-colors duration-300">
            {button.icon}
          </div>
        </a>
      ))}
    </motion.div>
  );
};

export default OverlayButtons;
