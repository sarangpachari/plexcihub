import React from "react";
import { motion } from "framer-motion";
import "../../styles/WhatWeOffer.css";

const cards = [
  {
    id: 1,
    title: "Portfolio Websites",
    desc: "Clean and professional portfolio sites that beautifully showcase your work and personal brand.",
    icon: "💼",
  },
  {
    id: 2,
    title: "E-Commerce Websites",
    desc: "Fully functional online stores with secure payments, smooth navigation, and user-friendly designs.",
    icon: "🛒",
  },
  {
    id: 3,
    title: "Business Websites",
    desc: "Modern and responsive corporate websites that build trust and attract new clients effectively.",
    icon: "🏢",
  },
  {
    id: 4,
    title: "Dynamic & CMS Websites",
    desc: "Custom-built sites with easy content management using WordPress or tailored admin panels.",
    icon: "⚙️",
  },
  {
    id: 5,
    title: "Landing Pages",
    desc: "High-converting landing pages designed for campaigns, product launches, and promotions.",
    icon: "🚀",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="whatweoffer-section">
      <h1 className="growby-text">Grow By</h1>
      <div className="cards-container">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            className={`offer-card ${i % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
