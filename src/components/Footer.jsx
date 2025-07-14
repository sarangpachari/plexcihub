import React from "react";

const Footer = () => (
  <footer className="py-6 text-black bg-gray-50/30 shadow backdrop-blur-3xl text-center" id="footer">
    <p>&copy; {new Date().getFullYear()} Plex Ci Hub. All rights reserved.</p>
  </footer>
);

export default Footer;
