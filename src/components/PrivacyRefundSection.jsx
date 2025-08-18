"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SafetyCertificateOutlined,
  ReloadOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* Gradient Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#3d53a0] via-[#7091e6] to-[#8697c4]"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Floating Glowing Orbs */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-purple-400/30 blur-3xl"
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-10 bottom-10 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"
        animate={{ x: [0, -80, 80, 0], y: [0, 60, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

const PrivacyRefundSection = () => {
  return (
    <section
      id="policies"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-32 py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="w-full flex flex-col gap-16 text-white relative z-10">
        {/* Privacy Policy */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <SafetyCertificateOutlined className="text-[#ede8f5] text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold">Privacy Policy</h2>
          </div>
          <p className="text-base leading-relaxed text-white/90">
            At <span className="font-semibold">Plex Ci Hub</span>, your privacy
            and trust are our top priorities. All project data and client
            information remain strictly confidential and are used solely for the
            services you request.
          </p>
        </motion.div>

        {/* Refund Policy */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <ReloadOutlined className="text-[#ede8f5] text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold">Refund Policy</h2>
          </div>
          <ul className="list-disc pl-5 space-y-3 text-base text-white/90">
            <li>
              Once the{" "}
              <span className="font-semibold">
                design or development process begins
              </span>
              , refunds are{" "}
              <span className="font-bold text-red-300">not applicable</span>.
            </li>
            <li>
              If features or content from the{" "}
              <span className="font-semibold">agreed contract</span> are missing,
              we will correct them at no extra cost.
            </li>
            <li>
              Refunds are only considered if the delivery is{" "}
              <span className="font-semibold">completely different</span> from
              scope and cannot be corrected.
            </li>
          </ul>
        </motion.div>

        {/* Terms & Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileTextOutlined className="text-[#ede8f5] text-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold">Terms & Conditions</h2>
          </div>
          <ul className="list-disc pl-5 space-y-3 text-base text-white/90">
            <li>
              All services require a{" "}
              <span className="font-semibold">written agreement</span> outlining
              scope and timeline.
            </li>
            <li>
              Clients must provide accurate details and approvals in a timely
              manner.
            </li>
            <li>
              Changes beyond agreed scope may require{" "}
              <span className="font-semibold">extra charges</span>.
            </li>
            <li>
              Plex Ci Hub may showcase non-sensitive parts of projects in our
              portfolio.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyRefundSection;
