import React from "react";
import { motion } from "framer-motion";
import "../../styles/WhatWeOffer.css";

const cards = [
  {
    id: 1,
    title: "Portfolio Websites",
    desc: "Showcase your work or personal brand with a professional portfolio website. We focus on clean layouts, engaging visuals, and responsive designs that make your achievements stand out on any device.",
    icon: "💼",
  },
  {
    id: 2,
    title: "E-Commerce Websites",
    desc: "Sell online with fully functional e-commerce websites. We build secure, fast, and scalable online stores with smooth checkout, integrated payment systems, and intuitive user experience that drives sales.",
    icon: "🛒",
  },
  {
    id: 3,
    title: "Business Websites",
    desc: "Strengthen your online presence with modern corporate websites. Our designs communicate professionalism, build trust, and attract clients through responsive layouts and SEO-friendly structures.",
    icon: "🏢",
  },
  {
    id: 4,
    title: "Dynamic & CMS Websites",
    desc: "Easily manage your content with dynamic websites and CMS platforms like WordPress or custom-built admin panels. We make updating your website simple and fast, so your business can stay agile.",
    icon: "⚙️",
  },
  {
    id: 5,
    title: "Landing Pages",
    desc: "Convert visitors into leads with high-impact landing pages. We design pages for product launches, marketing campaigns, and promotions that are visually compelling and optimized for conversions.",
    icon: "🚀",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const WhatWeOffer = () => {
  return (
    <section className="whatweoffer-section">
      <h1 className="growby-text">GROW BY</h1>

      <div className="cards-container">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            className="offer-card"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="icon">{card.icon}</div>
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
