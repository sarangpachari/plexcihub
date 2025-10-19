import React from "react";
import "../styles/Home.css";
import WhoWeAre from "../components/Home/WhoWeAre";
import WhatWeOffer from "../components/Home/WhatWeOffer";
import OurStack from "../components/Home/OurStack";
import Policy from "../components/Home/Policy";

const Home = () => {
  return (
    <>
      <section className="home-section">
        {/* Background vertical shaded lines */}
        <div className="background-lines"></div>

        {/* Main Content with marquee */}
        <div className="marquee">
          <h1 className="marquee-text">
            DESIGNING IMPACT • BUILDING BRANDS • ONE WEBSITE AT A TIME •
          </h1>
          <h1 className="marquee-text">
            DESIGNING IMPACT • BUILDING BRANDS • ONE WEBSITE AT A TIME •
          </h1>
        </div>

        {/* Bottom Left Subline */}
        <div className="home-subline">
          Driving Growth with Design & Technology
        </div>
      </section>
      <section id="whychooseus">
        <WhoWeAre />
      </section>
      <section id="whatweoffer">
        <WhatWeOffer />
      </section>
      <section>
        <OurStack />
      </section>
      <section id="policies">
        <Policy />
      </section>
    </>
  );
};

export default Home;
