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
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section className="h-screen snap-start flex items-center justify-center bg-[#0f172a] text-white">
          <HeroSection />
        </section>
        <section className="h-screen snap-start flex items-center justify-center bg-[#1e293b] text-white">
          <PortfolioSection />
        </section>
        <section className="h-screen snap-start flex items-center justify-center bg-[#334155] text-white">
          <ServicesSection />
        </section>
        <section className="h-screen snap-start flex items-center justify-center bg-[#475569] text-white">
          <ReviewSection />
        </section>
      </div>

      <Footer />
      <OverlayButtons />
    </div>
  );
};

export default App;
