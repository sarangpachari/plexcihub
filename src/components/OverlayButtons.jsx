import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";

const OverlayButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="hidden md:fixed bottom-8 right-5 md:flex flex-col gap-3"
    >
      {[
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
      ].map((button, idx) => (
        <a
          key={idx}
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
            button.gradient
              ? "bg-gradient-to-br from-[#833ab420] via-[#fd1d1d20] to-[#fcb04520] hover:from-[#E1306C] hover:via-[#E1306C] hover:to-[#E1306C]"
              : `bg-[${button.color}30] hover:bg-[${button.bgHover}]`
          }`}
        >
          <div
            className={`text-xl transition-colors duration-300 ${
              button.gradient
                ? "text-[#E1306C] hover:text-white"
                : `text-[${button.color}] hover:text-white`
            }`}
          >
            {button.icon}
          </div>
        </a>
      ))}
    </motion.div>
  );
};

export default OverlayButtons;
