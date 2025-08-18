import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PortfolioSection = () => {
  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  return (
    <section
      id="portfolio"
      className="relative min-h-screen w-full px-6 sm:px-12 md:px-20 lg:px-32 py-20 bg-[#ede8f5] overflow-hidden"
    >
      {/* Background Grid Animation */}
      <motion.div
        style={{ y: yOffset, opacity: opacityFade }}
        className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 pointer-events-none"
      >
        {[...Array(72)].map((_, idx) => (
          <motion.div
            key={idx}
            className="bg-[#3d53a0]/10 rounded-xl"
            style={{ width: "100%", height: "100%" }}
            animate={{
              y: [0, Math.random() * 30 - 15, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Background Moving Blobs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-80 h-80 md:w-96 md:h-96 bg-[#8697c4]/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-64 h-64 md:w-80 md:h-80 bg-[#adbbda]/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-48 h-48 md:w-64 md:h-64 bg-[#7091e6]/20 rounded-full blur-2xl"
      />

      {/* Decorative Particle Dots */}
      {[...Array(20)].map((_, idx) => (
        <motion.div
          key={idx}
          animate={{
            y: [0, Math.random() * 15 - 7.5, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1.5 h-1.5 bg-[#7091e6] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.5,
          }}
        />
      ))}

      {/* Heading without gradient animation */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-[#3d53a0] mb-6 z-10">
        Who We Are
      </h1>

      {/* SEO-Friendly Content */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-6 text-[#3d53a0] text-base sm:text-lg md:text-xl max-w-4xl leading-relaxed z-10"
      >
        <span className="font-semibold text-[#3d53a0]">Plex Ci Hub</span> is a
        premier web development and digital solutions company based in Wayanad,
        Kerala. Since 2025, we have been helping businesses, hotels, resorts, and
        shops create modern, responsive, and visually appealing websites. Our
        solutions include fully integrated admin panels, intuitive user
        interfaces, and scalable architectures that empower businesses to
        <span className="font-semibold text-[#7091e6]"> grow</span> online.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-6 text-[#3d53a0]/90 text-base sm:text-lg md:text-xl max-w-4xl leading-relaxed z-10"
      >
        Our team specializes in web development, UI/UX design, and digital growth
        strategies. We focus on delivering fast, scalable, and SEO-optimized
        websites to ensure your business stands out in a competitive digital
        landscape. At Plex Ci Hub, every project is tailored to meet your unique
        goals and help you reach your audience effectively.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-6 text-[#3d53a0]/90 text-base sm:text-lg md:text-xl max-w-4xl leading-relaxed z-10"
      >
        Our mission is to provide end-to-end digital solutions with a
        customer-centric approach. From designing captivating interfaces to
        implementing robust backends and ensuring SEO-friendly architecture, we
        ensure your brand makes a lasting impression online.
      </motion.p>
    </section>
  );
};

export default PortfolioSection;
