import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PortfolioSection = () => {
  const { scrollYProgress } = useScroll();

  // Parallax heading
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const headingScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Background floating layer
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const textData = [
    `Plex Ci Hub is a premier web development and digital solutions company based in Wayanad, Kerala. Since 2025, we have been helping businesses, hotels, resorts, and shops create modern, responsive, and visually appealing websites.`,
    `Our team specializes in web development, UI/UX design, and digital growth strategies. We focus on delivering fast, scalable, and SEO-optimized websites to ensure your business stands out in a competitive digital landscape.`,
    `Our mission is to provide end-to-end digital solutions with a customer-centric approach. From designing captivating interfaces to implementing robust backends and ensuring SEO-friendly architecture, we ensure your brand makes a lasting impression online.`,
  ];

  return (
    <section
      id="portfolio"
      className="relative min-h-screen w-full px-6 sm:px-12 md:px-20 lg:px-32 py-24 bg-[#ede8f5] overflow-hidden"
    >
      {/* Extra parallax background layer */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-[#8697c4]/10 via-transparent to-[#7091e6]/10 pointer-events-none"
      />

      {/* Heading with scroll parallax */}
      <motion.h1
        style={{ y: headingY, scale: headingScale }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }} // re-triggers on scroll
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-[#3d53a0] mb-14 z-10"
      >
        Who We Are
      </motion.h1>

      {/* Scrolling Content Blocks */}
      <div className="flex flex-col items-center gap-12 max-w-5xl mx-auto">
        {textData.map((text, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }} // play again every scroll
            className="text-center text-[#3d53a0]/90 text-lg sm:text-xl md:text-2xl leading-relaxed z-10"
          >
            {text}
          </motion.p>
        ))}
      </div>

      {/* Animated Cards Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {[...Array(3)].map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: idx * 0.2,
            }}
            viewport={{ once: false, amount: 0.5 }} // smooth re-entry
            className="bg-white shadow-xl rounded-2xl p-8 text-[#3d53a0] text-center font-semibold text-lg hover:scale-105 hover:shadow-2xl transition"
          >
            {idx === 0 && "🌐 Modern Websites"}
            {idx === 1 && "⚡ Fast & Scalable"}
            {idx === 2 && "📈 SEO Optimized"}
          </motion.div>
        ))}
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, idx) => (
        <motion.div
          key={idx}
          animate={{
            y: [0, Math.random() * 25 - 12, 0],
            x: [0, Math.random() * 25 - 12, 0],
          }}
          transition={{
            duration: 14 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1.5 h-1.5 bg-[#7091e6] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.4 + Math.random() * 0.5,
          }}
        />
      ))}
    </section>
  );
};

export default PortfolioSection;
