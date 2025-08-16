import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";
import OverlayButtons from "./components/OverlayButtons";
import Header from "./components/Header";
import OverlayButtonsMobile from "./components/OverlayButtonsMobile";
import WebsiteChatbot from "./components/modals/WebsiteChatbot";

const App = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <div className="overflow-y-scroll scroll-smooth md:h-screen md:snap-y md:snap-mandatory">
        {/* Hero Section */}
        <section className="flex items-center justify-center w-full h-auto md:h-screen md:snap-start">
          <HeroSection />
        </section>

        {/* Portfolio Section */}
        <section className="flex items-center justify-center w-full h-auto md:h-screen md:snap-start">
          <PortfolioSection />
        </section>

        {/* Services Section */}
        <section className="flex items-center justify-center w-full h-auto md:min-h-screen md:snap-start">
          <ServicesSection />
        </section>

        {/* Footer Section */}
        <section className="flex items-center justify-center w-full h-auto md:h-max md:snap-start">
          <Footer />
        </section>
      </div>
      {/* Floating buttons */}
      <OverlayButtons /> {/* Desktop / Tablet */}
      <OverlayButtonsMobile /> {/* Mobile only */}
      {/* <WebsiteChatbot /> */}
    </div>
  );
};

export default App;
