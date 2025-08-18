"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SafetyCertificateOutlined,
  ReloadOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

// 🔹 Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardVariantsDesktop = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 20 },
  },
};

const cardVariantsMobile = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// 🔹 Animated Background
const AnimatedBackground = ({ isMobile }) => {
  if (isMobile) return null; // Disable background animations on mobile

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* Gradient Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white via-[#f7f7fb] to-[#e0e7ff]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Floating Pastel Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-60 h-60 rounded-full bg-pink-200/40 blur-2xl"
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-20 bottom-10 w-72 h-72 rounded-full bg-blue-200/40 blur-2xl"
        animate={{ x: [0, -100, 100, 0], y: [0, 50, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/3 top-1/3 w-56 h-56 rounded-full bg-purple-200/40 blur-2xl"
        animate={{ x: [0, 80, -80, 0], y: [0, -40, 50, 0] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

const PrivacyRefundSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="policies"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-32 py-24 overflow-hidden"
    >
      <AnimatedBackground isMobile={isMobile} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="w-full flex flex-col gap-12 text-gray-800 relative z-10"
      >
        {/* Privacy Policy */}
        <motion.div
          variants={isMobile ? cardVariantsMobile : cardVariantsDesktop}
          className="p-6 sm:p-8 rounded-2xl bg-white/75 backdrop-blur-md border border-gray-200 shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <SafetyCertificateOutlined className="text-blue-500 text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold">Privacy Policy</h2>
          </div>
          <p className="text-base leading-relaxed text-gray-600">
            At <span className="font-semibold">Plex Ci Hub</span>, your privacy
            and trust are our top priorities. All project data and client
            information remain strictly confidential and are used solely for the
            services you request.
          </p>
        </motion.div>

        {/* Refund Policy */}
        <motion.div
          variants={isMobile ? cardVariantsMobile : cardVariantsDesktop}
          className="p-6 sm:p-8 rounded-2xl bg-white/75 backdrop-blur-md border border-gray-200 shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <ReloadOutlined className="text-blue-500 text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold">Refund Policy</h2>
          </div>
          <ul className="list-disc pl-5 space-y-3 text-base text-gray-600">
            <li>
              Once the{" "}
              <span className="font-semibold">design or development process begins</span>, refunds are{" "}
              <span className="font-bold text-red-500">not applicable</span>.
            </li>
            <li>
              If features or content from the{" "}
              <span className="font-semibold">agreed contract</span> are missing,
              we will correct them at no extra cost.
            </li>
            <li>
              Refunds are only considered if the delivery is{" "}
              <span className="font-semibold">completely different</span> from scope and cannot be corrected.
            </li>
          </ul>
        </motion.div>

        {/* Terms & Conditions */}
        <motion.div
          variants={isMobile ? cardVariantsMobile : cardVariantsDesktop}
          className="p-6 sm:p-8 rounded-2xl bg-white/75 backdrop-blur-md border border-gray-200 shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileTextOutlined className="text-blue-500 text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold">Terms & Conditions</h2>
          </div>
          <ul className="list-disc pl-5 space-y-3 text-base text-gray-600">
            <li>
              All services require a{" "}
              <span className="font-semibold">written agreement</span> outlining scope and timeline.
            </li>
            <li>
              Clients must provide accurate details and approvals in a timely manner.
            </li>
            <li>
              Changes beyond agreed scope may require{" "}
              <span className="font-semibold">extra charges</span>.
            </li>
            <li>
              Plex Ci Hub may showcase non-sensitive parts of projects in our portfolio.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PrivacyRefundSection;
