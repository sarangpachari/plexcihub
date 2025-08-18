import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Animation for text fade in/out
const fadeInOut = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.6 } },
};

const AnimatedText = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6, once: false }); // once:false = fade each time

  return (
    <motion.p
      ref={ref}
      variants={fadeInOut}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // toggle in/out
      className="text-left sm:text-center text-[#3d53a0]/90 text-lg sm:text-xl md:text-2xl max-w-5xl leading-relaxed z-10 mb-8"
    >
      {text}
    </motion.p>
  );
};

const PortfolioSection = () => {
  const { scrollYProgress } = useScroll();

  // heading scroll effects
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const headingScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [1, 0.5, 0.9, 1]);

  // Background floating animations
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section
      id="portfolio"
      className="relative min-h-screen w-full px-6 sm:px-12 md:px-20 lg:px-32 py-28 bg-[#ede8f5] overflow-hidden"
    >
      {/* Floating gradient circles */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-10 left-10 w-64 h-64 bg-[#3d53a0]/20 rounded-full blur-3xl animate-pulse"
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute bottom-20 right-16 w-80 h-80 bg-[#7091e6]/20 rounded-full blur-3xl animate-pulse"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 w-40 h-40 bg-[#8697c4]/30 rounded-full blur-2xl"
      />

      {/* Heading */}
      <motion.h1
        style={{ y: headingY, scale: headingScale, opacity: headingOpacity }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-[#3d53a0] mb-20 z-10 relative"
      >
        Who We Are
      </motion.h1>

      {/* Animated Paragraphs (only one visible per viewport) */}
      <div className="flex flex-col items-center space-y-16 relative z-10">
        <AnimatedText text="Plex Ci Hub is a premier web development and digital solutions company based in Wayanad, Kerala. Since 2025, we have been helping businesses, hotels, resorts, and shops create modern, responsive, and visually appealing websites." />

        <AnimatedText text="Our team specializes in web development, UI/UX design, and digital growth strategies. We focus on delivering fast, scalable, and SEO-optimized websites to ensure your business stands out in a competitive digital landscape." />

        <AnimatedText text="Our mission is to provide end-to-end digital solutions with a customer-centric approach. From designing captivating interfaces to implementing robust backends and ensuring SEO-friendly architecture, we ensure your brand makes a lasting impression online." />
      </div>
    </section>
  );
};

export default PortfolioSection;
