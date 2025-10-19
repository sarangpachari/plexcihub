"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Policy = () => {
  const containerRef = useRef(null);

  // Scroll progress relative to container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Scale decreases slightly as user scrolls
  const scale = useTransform(scrollYProgress, [0, 0.2], [1.05, 0.65]);
  //   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const cardFade = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const privacyRef = useRef(null);
  const refundRef = useRef(null);
  const termsRef = useRef(null);

  const isPrivacyInView = useInView(privacyRef, {
    margin: "-20% 0px -20% 0px",
  });
  const isRefundInView = useInView(refundRef, { margin: "-20% 0px -20% 0px" });
  const isTermsInView = useInView(termsRef, { margin: "-20% 0px -20% 0px" });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-full bg-white px-6 sm:px-12 lg:px-24 py-24 pb-72 flex flex-col items-center"
    >
      {/* Sticky Header */}
      <motion.div
        style={{ scale }}
        className=" top-24 z-[10] text-center mb-24 bg-white rounded-4xl p-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-extrabold text-black leading-tight"
        >
          Our{" "}
          <span className="text-gray-400 uppercase font-thin">Policies</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 text-lg sm:text-xl mt-4"
        >
          Transparency and integrity guide everything we do. Scroll to see our
          policies.
        </motion.p>
      </motion.div>

      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[46px] bg-gray-100">
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-black/20 origin-top"
        />
      </div>

      {/* Cards in normal flow */}
      <div className="relative w-full max-w-6xl flex flex-col gap-28">
        {/* Privacy Card - left */}
        <motion.div
          ref={privacyRef}
          initial="hidden"
          animate={isPrivacyInView ? "visible" : "exit"}
          variants={cardFade}
          className="md:w-1/2 bg-gray-50 p-8 shadow-lg self-start mb-24"
        >
          <h2 className="text-3xl font-bold mb-4">Privacy</h2>
          <p className="text-black font-thin">
            At <span className="font-semibold">Plex Ci Hub</span>, your privacy
            and trust are our top priorities. Every piece of project data and
            client information is treated with the utmost confidentiality and is
            used solely to deliver the services you requested. We ensure your
            business and personal details remain secure at all times, giving you
            complete peace of mind.
          </p>
        </motion.div>

        {/* Refund Card - right */}
        <motion.div
          ref={refundRef}
          initial="hidden"
          animate={isRefundInView ? "visible" : "exit"}
          variants={cardFade}
          className="md:w-1/2 bg-gray-50 p-8 shadow-lg self-end mb-24"
        >
          <h2 className="text-3xl font-bold mb-4">Refund</h2>
          <p className="text-black font-thin">
            Once the{" "}
            <span className="font-semibold">
              design or development process begins
            </span>
            , refunds are{" "}
            <span className="font-bold text-red-500">not applicable</span>, as
            our team invests dedicated time and resources to bring your vision
            to life. We guarantee quality and accountability: if any features or
            content from the{" "}
            <span className="font-semibold">agreed contract</span> are missing
            or incomplete, we will promptly correct them at no extra cost.
            Refunds are only considered if the final delivery is{" "}
            <span className="font-semibold">
              completely outside the agreed scope
            </span>{" "}
            and cannot be remedied.
          </p>
        </motion.div>

        {/* Terms Card - left */}
        <motion.div
          ref={termsRef}
          initial="hidden"
          animate={isTermsInView ? "visible" : "exit"}
          variants={cardFade}
          className="md:w-1/2 bg-gray-50 p-8 shadow-lg self-start"
        >
          <h2 className="text-3xl font-bold mb-4">Terms & Conditions</h2>
          <p className="text-black font-thin">
            All services are delivered under a{" "}
            <span className="font-semibold">written agreement</span> detailing
            the scope, timeline, and deliverables to ensure clarity and avoid
            misunderstandings. Clients are expected to provide accurate
            information, approvals, and feedback in a timely manner to keep
            projects on track. Changes beyond the agreed scope may incur{" "}
            <span className="font-semibold">additional charges</span>. Plex Ci
            Hub may showcase{" "}
            <span className="font-semibold">non-sensitive parts</span> of
            completed projects in our portfolio, demonstrating our expertise
            while respecting client confidentiality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Policy;
