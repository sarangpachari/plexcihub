import React from "react";
import { motion } from "framer-motion";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="relative min-h-screen w-full flex flex-col items-center justify-center
      px-6 sm:px-12 md:px-20 lg:px-32 py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-15%] w-96 sm:w-[28rem] md:w-[32rem] h-96 sm:h-[28rem] md:h-[32rem] bg-purple-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] right-[-15%] w-80 sm:w-[24rem] md:w-[28rem] h-80 sm:h-[24rem] md:h-[28rem] bg-pink-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 bg-blue-200/20 rounded-full blur-2xl"
      />

      {/* Decorative Particle Dots */}
      {[...Array(15)].map((_, idx) => (
        <motion.div
          key={idx}
          animate={{
            y: [0, Math.random() * 20 - 10, 0],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute w-1.5 h-1.5 bg-blue-300 rounded-full`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.4 + Math.random() * 0.6,
          }}
        />
      ))}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center bg-clip-text text-transparent mb-6 z-10"
        style={{
          backgroundImage:
            "linear-gradient(270deg, #9333ea, #ec4899, #f87171, #9333ea)",
          backgroundSize: "600% 600%", // large size for smooth movement
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // move horizontally
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        Build. Manage. Grow.
      </motion.h1>

      {/* Description Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-10 text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed z-10"
      >
        Since 2025,{" "}
        <span className="font-semibold text-gray-900">Plex Ci Hub</span> has
        been delivering stunning, high-performing websites tailored for hotels,
        resorts, shops, and businesses. Every site comes with a fully integrated
        admin panel for effortless management. We specialize in creating modern,
        responsive, and visually appealing web solutions that help your business{" "}
        <span className="font-semibold text-blue-500">grow</span> and stand out
        online.
      </motion.p>
    </section>
  );
};

export default PortfolioSection;
