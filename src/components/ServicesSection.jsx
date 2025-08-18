import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiPenTool, FiLayers, FiActivity } from "react-icons/fi";

const services = [
  {
    icon: <FiCode size={28} />,
    title: "Website Development",
    description:
      "Building responsive, modern websites tailored to your business.",
  },
  {
    icon: <FiPenTool size={28} />,
    title: "UI/UX Design",
    description:
      "Creating stunning, user-friendly designs for better engagement.",
  },
  {
    icon: <FiLayers size={28} />,
    title: "Problem Solving",
    description:
      "Smart solutions to manage and grow your online presence.",
  },
  {
    icon: <FiActivity size={28} />,
    title: "Full Stack Management",
    description:
      "From frontend to backend, we handle everything seamlessly.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen w-full flex flex-col items-center justify-center
      px-6 sm:px-10 md:px-16 lg:px-32 py-16
      bg-gradient-to-b from-[#ede8f5] via-[#adbbda] to-[#ede8f5] overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-20%] w-[28rem] h-[28rem] bg-[#8697c4]/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-20%] w-[24rem] h-[24rem] bg-[#7091e6]/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-52 h-52 bg-[#3d53a0]/20 rounded-full blur-2xl"
      />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center
        bg-gradient-to-r from-[#3d53a0] via-[#7091e6] to-[#8697c4] bg-clip-text text-transparent mb-12 z-10"
      >
        We Offer More!
      </motion.h2>

      {/* Services Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 z-10 w-full max-w-7xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 * index, ease: "easeOut" }}
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
            className="relative w-full p-6 flex flex-col items-center text-center
              rounded-2xl border border-white/30 bg-white/30 backdrop-blur-lg shadow-none
              hover:shadow-xl hover:bg-white/40 transition-all duration-500 cursor-pointer"
          >
            {/* Icon with infinite float animation */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="mb-4 text-[#3d53a0]"
            >
              {service.icon}
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#3d53a0]">
              {service.title}
            </h3>
            <p className="text-[#444] text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
