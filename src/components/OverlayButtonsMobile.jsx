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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 500, damping: 25 } },
    exit: { opacity: 0, y: 20, scale: 0.8, transition: { duration: 0.15 } },
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 md:hidden z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col items-end gap-3"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {buttons.map((button, idx) => (
              <motion.a
                key={idx}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
              >
                <div className="p-4 rounded-full shadow-xl flex items-center justify-center" style={{ background: "#adbbda" }}>
                  <div style={{ color: "#3d53a0" }} className="text-2xl">
                    {button.icon}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Connect Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 1.15 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 700, damping: 25 }}
        className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl text-white text-xl font-bold hover:shadow-blue-400 transition-all overflow-visible"
        style={{
          background: "linear-gradient(135deg, #3d53a0, #7091e6)",
        }}
      >
        {open ? <IoMdClose size={28} /> : <IoMdContacts size={28} />}
        {/* Animated Glow */}
        <motion.span
          className="absolute -z-10 w-full h-full rounded-full bg-[#3d53a0]/30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        />
      </motion.button>
    </div>
  );
};

export default OverlayButtonsMobile;
