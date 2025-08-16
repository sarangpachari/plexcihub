// components/RequestCallbackModal.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";

const RequestCallbackModal = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRequest = () => {
    // Placeholder for WhatsApp API integration
    console.log("Request callback for number:", phoneNumber);
    // Clear input
    setPhoneNumber("");
    // Close modal
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-11/12 max-w-md p-6 relative"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
              onClick={onClose}
            >
              &times;
            </button>

            {/* SVG Icon */}
            <div className="flex items-center justify-center mb-4 text-green-500 text-4xl">
              <FiPhoneCall />
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
              Request a Call Back
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-center mb-4">
              Thank you for contacting Plex Ci Hub. Enter your number and we will call you for a consultation to grow your business.
            </p>

            {/* Input */}
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Request Button */}
            <button
              onClick={handleRequest}
              className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Request Call Back
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RequestCallbackModal;
