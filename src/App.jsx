import React from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ReviewSection from "./components/ReviewSection";
import Footer from "./components/Footer";
import OverlayButtons from "./components/OverlayButtons";
import SplashCursor from "./components/react-bits/SplashCursor";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />
      
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <SplashCursor />
        <section className="h-screen snap-start flex items-center justify-center ">
          <HeroSection />
        </section>
        <section className="h-screen snap-start flex items-center justify-center ">
          <PortfolioSection />
        </section>
        <section className="min-h-screen snap-start flex items-center justify-center">
          <ServicesSection />
        </section>
        <section className="h-screen snap-start flex items-center justify-center ">
          <ReviewSection />
        </section>
      </div>     <OverlayButtons />
    </div>
  );
};

export default App;
