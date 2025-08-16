import React from "react";
import { motion } from "framer-motion";
import Landing1 from "../assets/landing1.png";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.5,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HeroSection = () => {
  const text = "Your Brand Deserves More. We Make It Unforgettable.".split(" ");
  const paragraph =
    "At Plex Ci Hub, we craft modern, responsive, and high-performing websites that don’t just look stunning — they help your business grow.".split(
      " "
    );

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center 
      px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 text-center md:text-left 
      overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white"
    >
      {/* Background Blobs */}
      <div className="absolute top-[-15%] right-[-15%] w-[350px] sm:w-[450px] md:w-[550px] h-[350px] sm:h-[450px] md:h-[550px] bg-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-15%] left-[-15%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] bg-blue-200/30 rounded-full blur-2xl"></div>

      {/* Floating Shape */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 sm:top-24 right-1/4 sm:right-1/3 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 
        bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-2xl shadow-md"
      ></motion.div>

      {/* Floating Circles */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 sm:bottom-40 left-1/4 sm:left-1/3 w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 
        bg-yellow-200/50 rounded-full blur-lg"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 sm:top-36 md:top-40 right-10 sm:right-16 md:right-20 
        w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-green-200/40 rounded-full blur-md"
      ></motion.div>

      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_70%)] pointer-events-none"></div>

      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start max-w-lg sm:max-w-xl md:max-w-2xl z-10">
        <motion.h1
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
          font-extrabold leading-tight 
          bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent"
        >
          {text.map((wordText, i) => (
            <motion.span
              key={i}
              variants={word}
              className="inline-block mr-2 sm:mr-3 md:mr-4"
            >
              {wordText}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 md:pr-4 lg:pr-8 leading-relaxed">
          {paragraph.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 1, 1, 0.9, 1],
                y: [20, 0, 0, -2, 0], // subtle float
              }}
              transition={{
                duration: 2,
                delay: i * 0.15, // stagger entrance
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 2, // <-- 2-second pause before repeating
                ease: "easeInOut",
              }}
              className={`inline-block ${
                word === "Plex" || word === "Ci" || word === "Hub"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold"
                  : ""
              }`}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <motion.a
            href="#services"
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl 
    bg-white text-gray-900 font-semibold shadow-md border border-gray-200
    hover:shadow-lg transition"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Get Started
          </motion.a>

          <motion.a
            href="#portfolio"
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl 
    bg-gray-100 text-gray-800 font-semibold border border-gray-200
    hover:bg-gray-200 transition"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="mt-8 sm:mt-12 md:mt-0 md:ml-8 lg:ml-12 xl:ml-20 flex justify-center relative z-10"
      >
        <img
          src={Landing1}
          alt="Landing Showcase"
          className="w-56 sm:w-72 md:w-96 lg:w-[28rem] xl:w-[34rem] drop-shadow-xl rounded-2xl md:rounded-3xl"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
