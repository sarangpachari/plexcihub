import React from "react";
import Threads from "./react-bits/ThreadsBg";

const ServicesSection = () => {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
    </div>
  );
};

export default ServicesSection;
