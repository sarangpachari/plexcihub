import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";

const OverlayButtons = () => (
  <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/+917012981845"
      target="_blank"
      className="bg-[#25d36561] hover:bg-[#1ebe58] p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <FaWhatsapp className="text-white text-xl" />
    </a>
    <a
      href="https://instagram.com/plexcihub"
      target="_blank"
      className="bg-gradient-to-br from-[#833ab47f] via-[#fd1d1d8e] to-[#fcb0456f] p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <FaInstagram className="text-white text-xl" />
    </a>
    <a
      href="https://www.facebook.com/share/14Fkb24gKzL/?mibextid=wwXIfr"
      target="_blank"
      className="bg-[#1876f255] hover:bg-[#0f66d3] p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <FaFacebookF className="text-white text-xl" />
    </a>
    <a
      href="tel:+917012981845"
      className="bg-[#213869] hover:bg-[#1f2937] p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <FaPhone className="text-white text-xl" />
    </a>
  </div>
);

export default OverlayButtons;
