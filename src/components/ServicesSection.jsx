import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiPenTool,
  FiLayers,
  FiActivity,
  FiDatabase,
  FiTrendingUp,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";

const services = [
  { icon: <FiCode size={28} />, title: "Website Development", description: "Building responsive, modern websites tailored to your business." },
  { icon: <FiPenTool size={28} />, title: "UI/UX Design", description: "Creating stunning, user-friendly designs for better engagement." },
  { icon: <FiLayers size={28} />, title: "Problem Solving", description: "Smart solutions to manage and grow your online presence." },
  { icon: <FiActivity size={28} />, title: "Full Stack Management", description: "From frontend to backend, we handle everything seamlessly." },
  { icon: <FiDatabase size={28} />, title: "Hosting & Cloud", description: "Reliable hosting, database, and cloud integrations." },
  { icon: <FiTrendingUp size={28} />, title: "SEO Optimization", description: "Boost visibility with SEO-friendly, high-ranking websites." },
  { icon: <FiSettings size={28} />, title: "Automation", description: "Smart business automations and custom workflows." },
  { icon: <FiHelpCircle size={28} />, title: "24/7 Support", description: "Always available to help your business thrive." },
];

// Container with staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // faster sequential animation
    },
  },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, x: 40, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // smoother easing
    },
  },
};

// Icon, title, text fade-in
const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
  }),
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-32 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#ede8f5] via-[#adbbda] to-[#ede8f5] -z-10" />

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center
          bg-gradient-to-r from-[#3d53a0] via-[#7091e6] to-[#8697c4] bg-clip-text text-transparent mb-16">
        We Offer More!
      </h2>

      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // animate every scroll
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="relative w-full p-6 flex flex-col items-center text-center
              rounded-2xl border border-white/30 bg-white/30 backdrop-blur-lg
              hover:shadow-2xl cursor-pointer"
          >
            <motion.div custom={index} variants={contentVariants} className="mb-4 text-[#3d53a0]">
              {service.icon}
            </motion.div>
            <motion.h3 custom={index} variants={contentVariants} className="text-lg sm:text-xl font-semibold mb-2 text-[#3d53a0]">
              {service.title}
            </motion.h3>
            <motion.p custom={index} variants={contentVariants} className="text-[#333] text-sm sm:text-base leading-relaxed">
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
