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
    description: "Smart solutions to manage and grow your online presence.",
  },
  {
    icon: <FiActivity size={28} />,
    title: "Full Stack Management",
    description: "From frontend to backend, we handle everything seamlessly.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen w-full flex flex-col items-center justify-center
      px-6 sm:px-12 md:px-20 lg:px-32 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-15%] w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] right-[-15%] w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-52 h-52 bg-blue-200/20 rounded-full blur-2xl"
      />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center
        bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 bg-clip-text text-transparent mb-12 z-10"
      >
        We Offer More!
      </motion.h2>

      {/* Services Cards */}
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-8 z-10 w-full max-w-6xl px-4 sm:px-0">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center
        hover:scale-105 hover:shadow-2xl transition-transform duration-300
        w-full sm:w-auto"
    >
      <div className="mb-4 text-blue-500">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-700 text-sm sm:text-base">{service.description}</p>
    </motion.div>
  ))}
</div>

    </section>
  );
};

export default ServicesSection;
