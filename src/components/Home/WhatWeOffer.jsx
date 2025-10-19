// WhatWeOffer.jsx
import React from "react";
import { motion } from "framer-motion";
import "../../styles/WhatWeOffer.css";

const cards = [
  {
    id: 1,
    title: "Portfolio Websites",
    desc: "Clean, professional portfolio sites to showcase your work and personal brand beautifully.",
    icon: "💼",
  },
  {
    id: 2,
    title: "E-Commerce Websites",
    desc: "Fully functional online stores with secure payment systems and smooth shopping experiences.",
    icon: "🛒",
  },
  {
    id: 3,
    title: "Business Websites",
    desc: "Modern corporate websites that strengthen your online presence and attract new clients.",
    icon: "🏢",
  },
  {
    id: 4,
    title: "Dynamic & CMS Websites",
    desc: "Custom dynamic sites with easy-to-manage content using CMS platforms like WordPress or custom admin panels.",
    icon: "⚙️",
  },
  {
    id: 5,
    title: "Landing Pages",
    desc: "High-converting landing pages designed for campaigns, launches, and promotions.",
    icon: "🚀",
  },
];


const WhatWeOffer = () => {
  return (
    <section className="whatweoffer-section uppercase">
      <h1 className="growby-text">GROW BY</h1>

      <div className="cards-container">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`offer-card ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ y: 100, opacity: 0 }} // start below
            whileInView={{ y: 0, opacity: 1 }} // slide up when in view
            viewport={{ once: false, amount: 0.3 }} // animate every time it enters view
            transition={{ duration: 0.7, type: "spring", bounce: 0.2, delay: index * 0.15 }}
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
