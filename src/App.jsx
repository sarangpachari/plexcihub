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
    <div className="relative bg-gradient-to-br from-[#060010] via-slate-900 to-[#060010] overflow-hidden">
      <SplashCursor />
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ReviewSection />
      <Footer />
      <OverlayButtons />
    </div>
  );
};

export default App;
